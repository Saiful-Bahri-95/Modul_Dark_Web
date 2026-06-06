/* =========================================================================
   courseData.js — PENGGABUNG data kursus.
   Tiap bab kini berada di file terpisah dalam folder ./chapters/ agar
   mudah dikelola dan aman diedit tanpa mengganggu bab lain.
   Untuk menambah bab: buat file baru di ./chapters/, impor di bawah,
   lalu tambahkan ke array 'chapters' sesuai urutan yang diinginkan.
   ========================================================================= */

import { chapter as intro } from "./chapters/00-intro.js";
import { chapter as tor } from "./chapters/01-tor.js";
import { chapter as tails } from "./chapters/02-tails.js";
import { chapter as darknet } from "./chapters/03-darknet.js";
import { chapter as labs } from "./chapters/04-labs.js";
import { chapter as email } from "./chapters/05-email.js";
import { chapter as im } from "./chapters/06-im.js";
import { chapter as files } from "./chapters/07-files.js";
import { chapter as encryption } from "./chapters/08-encryption.js";
import { chapter as bitcoin } from "./chapters/09-bitcoin.js";
import { chapter as monero } from "./chapters/10-monero.js";
import { chapter as qubes } from "./chapters/11-qubes.js";

export const course = {
  chapters: [
    intro,
    tor,
    tails,
    darknet,
    labs,
    email,
    im,
    files,
    encryption,
    bitcoin,
    monero,
    qubes,
  ],
};
