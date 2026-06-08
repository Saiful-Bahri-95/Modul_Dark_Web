import { useState, useEffect, useMemo, useCallback } from "react";
import { course } from "./data/courseData.js";
import "./styles/styles.css";
import "./styles/animations.css";

/* Kunci penyimpanan di localStorage */
const STORE_KEY = "darkweb_course_progress_v1";
const POS_KEY = "darkweb_course_position_v1";

/* Ratakan semua bab -> daftar materi linear: {ci, li, chapter, lecture, gid} */
function buildFlat() {
  const flat = [];
  course.chapters.forEach((c, ci) =>
    c.lectures.forEach((l, li) => {
      flat.push({ ci, li, chapter: c, lecture: l, gid: c.id + "::" + l.id });
    })
  );
  return flat;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) || {} : {};
  } catch {
    return {};
  }
}

/* Baca posisi terakhir (materi yang sedang dibuka) */
function loadPosition(max) {
  try {
    const n = parseInt(localStorage.getItem(POS_KEY) || "0", 10);
    if (Number.isFinite(n) && n >= 0 && n < max) return n;
  } catch {
    /* abaikan */
  }
  return 0;
}

/* =========================================================================
   KUIS — state lokal per materi (di-remount via key saat materi berganti)
   ========================================================================= */
function Quiz({ quiz }) {
  const [answered, setAnswered] = useState({});

  const total = quiz.questions.length;
  const answeredCount = Object.keys(answered).length;
  const allAnswered = answeredCount === total;
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
   SIDEBAR — brand, progres, PENCARIAN, dan navigasi bab/materi
   ========================================================================= */
function Sidebar({
  flat,
  current,
  progress,
  openChapters,
  onToggleChapter,
  onGo,
  onReset,
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
        <div className="kicker">Self-Paced Course</div>
        <h1>
          The Ultimate Dark Web,
          <br />
          Anonymity, Privacy
          <br />
          &amp; Security
        </h1>
        <div className="sub">// modul belajar interaktif</div>
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
                const chapLabel =
                  f.ci === 0 ? "Mulai di Sini" : "Bab " + f.ci;
                return (
                  <button className={cls} key={f.gid} onClick={() => onGo(fi)}>
                    <span className="sr-chap">{chapLabel}</span>
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
                <button className="chap-head" onClick={() => onToggleChapter(ci)}>
                  <span className="chap-num">
                    {ci === 0 ? "★" : String(ci).padStart(2, "0")}
                  </span>
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

/* ref callback: simpan elemen materi aktif agar bisa di-scroll ke tampak */
let _activeEl = null;
function activeRefSetter(el) {
  if (el) _activeEl = el;
}

/* =========================================================================
   MAIN — isi materi
   ========================================================================= */
function Main({ flat, current, progress, onToggleDone, onGo }) {
  const f = flat[current];
  const l = f.lecture;
  const c = f.chapter;
  const done = !!progress[f.gid];
  const total = flat.length;
  const chapLabel = f.ci === 0 ? "Mulai di Sini" : "Bab " + f.ci + " — " + c.title;

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

/* =========================================================================
   MOBILE BOTTOM NAV
   ========================================================================= */
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
   APP
   ========================================================================= */
export default function App() {
  const flat = useMemo(buildFlat, []);
  const [progress, setProgress] = useState(loadProgress);
  const [current, setCurrent] = useState(() => loadPosition(buildFlat().length));
  const [openChapters, setOpenChapters] = useState(
    () => new Set([flat[loadPosition(flat.length)].ci])
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [readPct, setReadPct] = useState(0);

  /* Simpan progres */
  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(progress));
    } catch {
      /* abaikan */
    }
  }, [progress]);

  /* Simpan posisi materi terakhir (#1 resume) */
  useEffect(() => {
    try {
      localStorage.setItem(POS_KEY, String(current));
    } catch {
      /* abaikan */
    }
  }, [current]);

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

  /* #4 Navigasi keyboard: ←/→ pindah materi, Esc tutup drawer */
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
      if (e.key === "ArrowRight") {
        setCurrent((c) => {
          const n = Math.min(flat.length - 1, c + 1);
          if (n !== c) {
            setOpenChapters((prev) => new Set(prev).add(flat[n].ci));
            setQuery("");
          }
          return n;
        });
      } else if (e.key === "ArrowLeft") {
        setCurrent((c) => {
          const n = Math.max(0, c - 1);
          if (n !== c) {
            setOpenChapters((prev) => new Set(prev).add(flat[n].ci));
            setQuery("");
          }
          return n;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flat]);

  /* #3 Bilah progres baca: lacak scroll dalam satu materi */
  useEffect(() => {
    setReadPct(0);
  }, [current]);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      setReadPct(Math.max(0, Math.min(100, p)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* #5-ringan: gulirkan materi aktif ke tampak di sidebar saat berpindah */
  useEffect(() => {
    if (_activeEl && _activeEl.scrollIntoView) {
      _activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [current, query]);

  /* Nilai turunan */
  const total = flat.length;
  const doneCount = flat.filter((f) => progress[f.gid]).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;
  const currentGid = flat[current].gid;
  const currentDone = !!progress[currentGid];

  return (
    <>
      {/* #3 Bilah progres baca (paling atas) */}
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
        <span className="tt">Anonymity, Privacy &amp; Security</span>
        <span className="tb-pct">{pct}%</span>
        <span className="topbar-progress" style={{ width: pct + "%" }} />
      </div>

      <div
        className={"backdrop" + (mobileOpen ? " show" : "")}
        onClick={() => setMobileOpen(false)}
      />

      <div className="app">
        <Sidebar
          flat={flat}
          current={current}
          progress={progress}
          openChapters={openChapters}
          onToggleChapter={toggleChapter}
          onGo={go}
          onReset={resetProgress}
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
    </>
  );
}
