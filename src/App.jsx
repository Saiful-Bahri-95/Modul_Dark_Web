import { useState, useEffect, useMemo, useCallback } from "react";
import { courses } from "./data/courses.js";
import "./styles/styles.css";
import "./styles/animations.css";

const ACTIVE_KEY = "darkweb_active_course";
const progKey = (id) => "darkweb_progress_" + id;
const posKey = (id) => "darkweb_pos_" + id;

/* Ratakan chapters sebuah course -> daftar materi linear */
function buildFlat(course) {
  const flat = [];
  course.chapters.forEach((c, ci) =>
    c.lectures.forEach((l, li) => {
      flat.push({ ci, li, chapter: c, lecture: l, gid: c.id + "::" + l.id });
    })
  );
  return flat;
}
function loadJSON(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) || {} : {};
  } catch {
    return {};
  }
}
function loadPos(id, max) {
  try {
    const n = parseInt(localStorage.getItem(posKey(id)) || "0", 10);
    if (Number.isFinite(n) && n >= 0 && n < max) return n;
  } catch {
    /* abaikan */
  }
  return 0;
}
function courseStats(course) {
  const prog = loadJSON(progKey(course.id));
  let total = 0,
    done = 0;
  course.chapters.forEach((c) =>
    c.lectures.forEach((l) => {
      total++;
      if (prog[c.id + "::" + l.id]) done++;
    })
  );
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

/* ref materi aktif (untuk auto-scroll sidebar) */
let _activeEl = null;
function activeRefSetter(el) {
  if (el) _activeEl = el;
}

/* =========================================================================
   DASHBOARD — pemilih materi
   ========================================================================= */
function Dashboard({ onOpen }) {
  return (
    <div className="dash">
      <header className="dash-head">
        <div className="kicker">Learning Hub</div>
        <h1>Pusat Materi Belajar</h1>
        <p className="dash-sub">
          Pilih materi yang ingin kamu pelajari. Tiap materi punya progres &amp;
          posisi terakhirnya sendiri.
        </p>
      </header>

      <div className="dash-grid">
        {courses.map((c) => {
          const st = courseStats(c);
          const lectures = c.chapters.reduce(
            (a, ch) => a + ch.lectures.length,
            0
          );
          return (
            <button
              className="course-card"
              key={c.id}
              onClick={() => onOpen(c.id)}
              style={{ "--c-accent": c.accent }}
            >
              <div className="cc-top">
                <span className="cc-icon">{c.icon}</span>
                <span className="cc-kicker">{c.kicker}</span>
              </div>
              <h2 className="cc-title">{c.title}</h2>
              <p className="cc-sub">{c.subtitle}</p>
              <div className="cc-meta">
                <span>{c.chapters.length} bab</span>
                <span>·</span>
                <span>{lectures} materi</span>
              </div>
              <div className="cc-bar">
                <span style={{ width: st.pct + "%" }} />
              </div>
              <div className="cc-foot">
                <span className="cc-pct">{st.pct}% selesai</span>
                <span className="cc-go">Buka →</span>
              </div>
            </button>
          );
        })}
      </div>

      <p className="dash-note">
        Progresmu tersimpan otomatis di perangkat ini. Klik sebuah kartu untuk
        mulai atau melanjutkan.
      </p>
    </div>
  );
}

/* =========================================================================
   KUIS
   ========================================================================= */
function Quiz({ quiz }) {
  const [answered, setAnswered] = useState({});
  const total = quiz.questions.length;
  const allAnswered = Object.keys(answered).length === total;
  const score = quiz.questions.reduce(
    (acc, q, i) => acc + (answered[i] === q.answer ? 1 : 0),
    0
  );
  const choose = (qi, oi) => {
    if (answered[qi] !== undefined) return;
    setAnswered((a) => ({ ...a, [qi]: oi }));
  };
  return (
    <div className="quiz">
      <h3>{quiz.title}</h3>
      <div className="qsub">{quiz.sub}</div>
      {quiz.questions.map((q, qi) => {
        const chosen = answered[qi];
        const locked = chosen !== undefined;
        return (
          <div className="q" key={qi}>
            <div className="qtext">
              <span className="qn">{qi + 1}.</span>
              {q.q}
            </div>
            {q.options.map((opt, oi) => {
              let cls = "opt";
              if (locked) {
                cls += " locked";
                if (oi === q.answer) cls += " correct";
                if (oi === chosen && chosen !== q.answer) cls += " wrong";
              }
              return (
                <div className={cls} key={oi} onClick={() => choose(qi, oi)}>
                  <span className="mark">{String.fromCharCode(65 + oi)}</span>
                  <span>{opt}</span>
                </div>
              );
            })}
            <div className={"explain" + (locked ? " show" : "")}>
              {locked
                ? (chosen === q.answer ? "✓ Benar. " : "✗ Kurang tepat. ") +
                  q.explain
                : ""}
            </div>
          </div>
        );
      })}
      <div className={"quiz-score" + (allAnswered ? " show" : "")}>
        {allAnswered
          ? `Skor: ${score} / ${total}${score === total ? "  — sempurna! 🎯" : ""}`
          : ""}
      </div>
    </div>
  );
}

/* =========================================================================
   SIDEBAR
   ========================================================================= */
function Sidebar({
  course,
  flat,
  current,
  progress,
  openChapters,
  onToggleChapter,
  onGo,
  onReset,
  onHome,
  mobileOpen,
  query,
  setQuery,
}) {
  const total = flat.length;
  const doneCount = flat.filter((f) => progress[f.gid]).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const chapterDone = (c) =>
    c.lectures.filter((l) => progress[c.id + "::" + l.id]).length;

  const q = query.trim().toLowerCase();
  const matches = q
    ? flat.filter(
        (f) =>
          f.lecture.title.toLowerCase().includes(q) ||
          f.chapter.title.toLowerCase().includes(q)
      )
    : [];

  return (
    <aside className={"sidebar" + (mobileOpen ? " open" : "")} id="sidebar">
      <div className="brand">
        <button className="home-btn" onClick={onHome}>
          ← Semua materi
        </button>
        <div className="kicker">{course.kicker}</div>
        <h1>{course.title}</h1>
      </div>

      <div className="progress-wrap">
        <div className="progress-top">
          <span>Progres Belajar</span>
          <b>{pct}%</b>
        </div>
        <div className="bar">
          <span style={{ width: pct + "%" }} />
        </div>
        <button className="reset" onClick={onReset}>
          ↺ reset progres
        </button>
      </div>

      <div className="search-wrap">
        <span className="search-icon" aria-hidden="true">⌕</span>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari materi…"
          aria-label="Cari materi"
        />
        {query && (
          <button
            className="search-clear"
            onClick={() => setQuery("")}
            aria-label="Bersihkan pencarian"
          >
            ✕
          </button>
        )}
      </div>

      <nav className="nav">
        {q ? (
          matches.length ? (
            <div className="search-results">
              {matches.map((f) => {
                const fi = flat.indexOf(f);
                const cls =
                  "sr-item" +
                  (progress[f.gid] ? " done" : "") +
                  (fi === current ? " active" : "");
                return (
                  <button className={cls} key={f.gid} onClick={() => onGo(fi)}>
                    <span className="sr-chap">{f.chapter.title}</span>
                    <span className="sr-title">{f.lecture.title}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="search-empty">
              Tidak ada materi cocok dengan “{query}”.
            </div>
          )
        ) : (
          course.chapters.map((c, ci) => {
            const open = openChapters.has(ci);
            return (
              <div className={"chap" + (open ? " open" : "")} key={c.id}>
                <button
                  className="chap-head"
                  onClick={() => onToggleChapter(ci)}
                >
                  <span className="chap-num">{String(ci + 1).padStart(2, "0")}</span>
                  <span className="chap-title">{c.title}</span>
                  <span className="chap-count">
                    {chapterDone(c)}/{c.lectures.length}
                  </span>
                  <span className="chevron">▶</span>
                </button>
                <div className="lectures">
                  {c.lectures.map((l) => {
                    const gid = c.id + "::" + l.id;
                    const fi = flat.findIndex((f) => f.gid === gid);
                    const cls =
                      "lec" +
                      (progress[gid] ? " done" : "") +
                      (fi === current ? " active" : "");
                    return (
                      <button
                        className={cls}
                        key={l.id}
                        ref={fi === current ? activeRefSetter : null}
                        onClick={() => onGo(fi)}
                      >
                        <span className="tick">✓</span>
                        <span className="lec-name">{l.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </nav>
    </aside>
  );
}

/* =========================================================================
   MAIN
   ========================================================================= */
function Main({ flat, current, progress, onToggleDone, onGo }) {
  const f = flat[current];
  const l = f.lecture;
  const c = f.chapter;
  const done = !!progress[f.gid];
  const total = flat.length;
  const chapLabel = c.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current]);

  return (
    <main className="main lec-enter" id="main">
      <div className="crumb">
        {chapLabel} &nbsp;/&nbsp; <b>Materi {f.li + 1}</b>
      </div>
      <h2 className={"lec-h" + (l.cover ? " cover" : "")}>{l.title}</h2>
      <div className="meta">
        <span className="pill dur">⏱ {l.dur}</span>
        <span className="pill">
          Materi {current + 1} dari {total}
        </span>
        {done && <span className="pill done-pill">✓ selesai</span>}
      </div>

      <div
        className={"content" + (l.cover ? " cover" : "")}
        dangerouslySetInnerHTML={{ __html: l.body }}
      />

      {l.practice && (
        <div className="box practice">
          <div className="bx-title">▣ Latihan Praktik</div>
          <div dangerouslySetInnerHTML={{ __html: l.practice }} />
        </div>
      )}

      {l.takeaways && l.takeaways.length > 0 && (
        <div className="takeaways">
          <div className="bx-title">Poin Kunci</div>
          <ul>
            {l.takeaways.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {l.quiz && <Quiz quiz={l.quiz} key={f.gid} />}

      <div className="footer-nav">
        <button
          className="btn"
          disabled={current === 0}
          onClick={() => onGo(current - 1)}
        >
          ← Sebelumnya
        </button>
        <button
          className={"btn done-toggle " + (done ? "done" : "primary")}
          onClick={() => onToggleDone(f.gid)}
        >
          {done ? "✓ Sudah selesai" : "Tandai selesai"}
        </button>
        <div className="spacer" />
        <button
          className="btn"
          disabled={current === total - 1}
          onClick={() => onGo(current + 1)}
        >
          Berikutnya →
        </button>
      </div>
    </main>
  );
}

function MobileNav({ current, total, done, onPrev, onNext, onToggleDone }) {
  return (
    <nav className="mobnav" aria-label="Navigasi materi">
      <button
        className="mobnav-btn"
        disabled={current === 0}
        onClick={onPrev}
        aria-label="Materi sebelumnya"
      >
        ←
      </button>
      <button
        className={"mobnav-done" + (done ? " is-done" : "")}
        onClick={onToggleDone}
      >
        {done ? "✓ Sudah selesai" : "Tandai selesai"}
      </button>
      <button
        className="mobnav-btn"
        disabled={current === total - 1}
        onClick={onNext}
        aria-label="Materi berikutnya"
      >
        →
      </button>
    </nav>
  );
}

/* =========================================================================
   COURSE VIEW — satu materi (sidebar + konten), dipakai ulang semua course
   ========================================================================= */
function CourseView({ course, onHome }) {
  const flat = useMemo(() => buildFlat(course), [course]);
  const [progress, setProgress] = useState(() => loadJSON(progKey(course.id)));
  const [current, setCurrent] = useState(() => loadPos(course.id, flat.length));
  const [openChapters, setOpenChapters] = useState(
    () => new Set([flat[loadPos(course.id, flat.length)].ci])
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [readPct, setReadPct] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(progKey(course.id), JSON.stringify(progress));
    } catch {
      /* abaikan */
    }
  }, [progress, course.id]);

  useEffect(() => {
    try {
      localStorage.setItem(posKey(course.id), String(current));
    } catch {
      /* abaikan */
    }
  }, [current, course.id]);

  const go = useCallback(
    (i) => {
      const idx = Math.max(0, Math.min(flat.length - 1, i));
      setCurrent(idx);
      setOpenChapters((prev) => new Set(prev).add(flat[idx].ci));
      setMobileOpen(false);
      setQuery("");
    },
    [flat]
  );

  const toggleChapter = useCallback((ci) => {
    setOpenChapters((prev) => {
      const next = new Set(prev);
      if (next.has(ci)) next.delete(ci);
      else next.add(ci);
      return next;
    });
  }, []);

  const toggleDone = useCallback((gid) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (next[gid]) delete next[gid];
      else next[gid] = true;
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => setProgress({}), []);

  /* keyboard nav */
  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || "";
      const typing =
        tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable;
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "ArrowRight")
        setCurrent((c) => {
          const n = Math.min(flat.length - 1, c + 1);
          if (n !== c) {
            setOpenChapters((p) => new Set(p).add(flat[n].ci));
            setQuery("");
          }
          return n;
        });
      else if (e.key === "ArrowLeft")
        setCurrent((c) => {
          const n = Math.max(0, c - 1);
          if (n !== c) {
            setOpenChapters((p) => new Set(p).add(flat[n].ci));
            setQuery("");
          }
          return n;
        });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flat]);

  /* reading progress */
  useEffect(() => setReadPct(0), [current]);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setReadPct(max > 0 ? Math.max(0, Math.min(100, (doc.scrollTop / max) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* auto-scroll materi aktif di sidebar */
  useEffect(() => {
    if (_activeEl && _activeEl.scrollIntoView)
      _activeEl.scrollIntoView({ block: "nearest" });
  }, [current, query]);

  const total = flat.length;
  const doneCount = flat.filter((f) => progress[f.gid]).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const currentGid = flat[current].gid;
  const currentDone = !!progress[currentGid];

  return (
    <div className="course-root" style={{ "--accent": course.accent }}>
      <div className="read-progress" aria-hidden="true">
        <span style={{ width: readPct + "%" }} />
      </div>

      <div className="topbar">
        <button
          className="menu-btn"
          aria-label="Buka menu materi"
          onClick={() => setMobileOpen((o) => !o)}
        >
          ☰
        </button>
        <button className="home-btn-m" onClick={onHome} aria-label="Semua materi">
          ⌂
        </button>
        <span className="tt">{course.title}</span>
        <span className="tb-pct">{pct}%</span>
        <span className="topbar-progress" style={{ width: pct + "%" }} />
      </div>

      <div
        className={"backdrop" + (mobileOpen ? " show" : "")}
        onClick={() => setMobileOpen(false)}
      />

      <div className="app">
        <Sidebar
          course={course}
          flat={flat}
          current={current}
          progress={progress}
          openChapters={openChapters}
          onToggleChapter={toggleChapter}
          onGo={go}
          onReset={resetProgress}
          onHome={onHome}
          mobileOpen={mobileOpen}
          query={query}
          setQuery={setQuery}
        />
        <Main
          key={current}
          flat={flat}
          current={current}
          progress={progress}
          onToggleDone={toggleDone}
          onGo={go}
        />
      </div>

      <MobileNav
        current={current}
        total={total}
        done={currentDone}
        onPrev={() => go(current - 1)}
        onNext={() => go(current + 1)}
        onToggleDone={() => toggleDone(currentGid)}
      />
    </div>
  );
}

/* =========================================================================
   APP — pilih dashboard atau sebuah course
   ========================================================================= */
export default function App() {
  const [activeId, setActiveId] = useState(() => {
    try {
      const id = localStorage.getItem(ACTIVE_KEY) || "";
      return courses.some((c) => c.id === id) ? id : "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(ACTIVE_KEY, activeId);
    } catch {
      /* abaikan */
    }
  }, [activeId]);

  const open = useCallback((id) => {
    setActiveId(id);
    window.scrollTo(0, 0);
  }, []);
  const home = useCallback(() => {
    setActiveId("");
    window.scrollTo(0, 0);
  }, []);

  const active = courses.find((c) => c.id === activeId);

  if (!active) return <Dashboard onOpen={open} />;
  return <CourseView course={active} onHome={home} key={active.id} />;
}
