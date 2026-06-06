# Anonymity, Privacy & Security — Modul Belajar (React)

Versi React (Vite) dari modul belajar interaktif yang sebelumnya berupa satu file HTML.
Struktur dipecah agar mudah dirawat: data, gaya, dan animasi terpisah dari logika komponen.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan (http://localhost:5173)
npm run build    # build produksi → folder dist/
npm run preview  # pratinjau hasil build
```

## Struktur

```
anonymity-course-react/
├── index.html              # titik masuk HTML + pemuatan font Google
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # bootstrap React
    ├── App.jsx             # SEMUA komponen + logika (Sidebar, Main, Quiz, App)
    ├── data/
    │   └── courseData.js   # DATA kursus (objek `course`) — diekstrak verbatim
    └── styles/
        ├── styles.css      # GAYA statis: layout, warna, tipografi
        └── animations.css  # PROPERTI ANIMASI: semua transition + reduced-motion
```

## Catatan konversi

- **Data** (`courseData.js`): objek `course` asli dipertahankan apa adanya, hanya diberi
  `export`. Konten `body` dan `practice` tetap berupa string HTML dan dirender lewat
  `dangerouslySetInnerHTML` di komponen.
- **CSS** dipecah dua: `styles.css` untuk tampilan statis, `animations.css` khusus
  `transition`/animasi (plus dukungan `prefers-reduced-motion`).
- **Persistence**: `window.storage` versi HTML asli diganti dengan `localStorage`
  standar (kunci tetap `darkweb_course_progress_v1`), dikelola lewat `useEffect`.
- **Logika** render manual (`renderNav`/`renderMain`/`wireQuiz`) ditulis ulang menjadi
  komponen React deklaratif. Kuis di-reset otomatis saat pindah materi (lewat `key`).
