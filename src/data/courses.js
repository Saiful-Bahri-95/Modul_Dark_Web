/* =========================================================================
   courses.js — REGISTRY semua materi (multi-course hub).
   Tiap materi punya: id, title, subtitle, kicker, accent, icon, chapters.
   Dashboard membaca daftar ini untuk menampilkan kartu pilihan.
   Untuk menambah materi: buat file data di ./courses/<id>.js lalu impor di sini.
   ========================================================================= */

import { course as anonymity } from "./courseData.js";
import { course as sql } from "./courses/sql.js";
import { course as cisco } from "./courses/cisco.js";
import { course as redhat } from "./courses/redhat.js";

export const courses = [
  {
    id: "anonymity",
    title: "Dark Web, Anonymity & Security",
    subtitle:
      "Privasi, anonimitas & keamanan digital secara defensif — TOR, TAILS, enkripsi, kripto, hingga Qubes OS.",
    kicker: "Privasi & Keamanan",
    accent: "#4fe0d0",
    icon: "🛡️",
    chapters: anonymity.chapters,
  },
  sql,
  cisco,
  redhat,
];
