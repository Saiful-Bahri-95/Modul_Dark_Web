/* Materi SQL — dibangun oleh scripts/build_sql.cjs (data asli + pendalaman). */
export const course = {
 "id": "sql",
 "title": "Daftar Query SQL Lengkap",
 "subtitle": "Dari fondasi database relasional sampai query mahir: konsep, kapan dipakai, jebakan, contoh & kuis.",
 "kicker": "Database / SQL",
 "accent": "#6ad7ff",
 "icon": "🗄️",
 "chapters": [
  {
   "id": "fondasi",
   "title": "Fondasi SQL & Database Relasional",
   "lectures": [
    {
     "id": "apa-itu-sql",
     "title": "Apa Itu Database, RDBMS & SQL?",
     "dur": "konsep · ± 6 menit",
     "body": "<p class=\"lead\">SQL (Structured Query Language) adalah bahasa untuk berbicara dengan <strong>database relasional</strong> — tempat data disimpan rapi dalam tabel berisi baris &amp; kolom, seperti spreadsheet yang sangat disiplin dan saling terhubung.</p><h4>Istilah inti</h4><ul><li><strong>Tabel</strong> — kumpulan data sejenis (mis. tabel <em>karyawan</em>).</li><li><strong>Baris (row/record)</strong> — satu entitas (satu karyawan).</li><li><strong>Kolom (column/field)</strong> — satu atribut (nama, gaji) dengan tipe data tertentu.</li><li><strong>RDBMS</strong> — perangkat lunaknya: MySQL, PostgreSQL, SQL Server, Oracle, SQLite.</li></ul><figure class=\"fig\"><svg viewBox=\"0 0 640 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Anatomi tabel\"><text x=\"320\" y=\"20\" text-anchor=\"middle\" fill=\"#e9f1f7\" font-family=\"monospace\" font-size=\"13\" font-weight=\"700\">Tabel: karyawan</text><rect x=\"60\" y=\"34\" width=\"520\" height=\"28\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"120\" y=\"53\" text-anchor=\"middle\" fill=\"#4fe0d0\" font-family=\"monospace\" font-size=\"11\">id</text><text x=\"260\" y=\"53\" text-anchor=\"middle\" fill=\"#4fe0d0\" font-family=\"monospace\" font-size=\"11\">nama</text><text x=\"430\" y=\"53\" text-anchor=\"middle\" fill=\"#4fe0d0\" font-family=\"monospace\" font-size=\"11\">gaji</text><rect x=\"60\" y=\"62\" width=\"520\" height=\"26\" fill=\"#111922\" stroke=\"#283643\"/><rect x=\"60\" y=\"88\" width=\"520\" height=\"26\" fill=\"#15202b\" stroke=\"#283643\"/><g font-family=\"monospace\" font-size=\"11\" fill=\"#9fb4c4\"><text x=\"120\" y=\"79\" text-anchor=\"middle\">1</text><text x=\"260\" y=\"79\" text-anchor=\"middle\">Budi</text><text x=\"430\" y=\"79\" text-anchor=\"middle\">5.000.000</text><text x=\"120\" y=\"105\" text-anchor=\"middle\">2</text><text x=\"260\" y=\"105\" text-anchor=\"middle\">Sari</text><text x=\"430\" y=\"105\" text-anchor=\"middle\">6.500.000</text></g><text x=\"35\" y=\"79\" fill=\"#f5b748\" font-family=\"monospace\" font-size=\"9\" transform=\"rotate(-90 35 79)\">baris</text><text x=\"120\" y=\"138\" text-anchor=\"middle\" fill=\"#f5b748\" font-family=\"monospace\" font-size=\"9\">↑ kolom</text></svg><figcaption>Tabel = baris (entitas) x kolom (atribut bertipe). SQL membaca &amp; mengubah isinya.</figcaption></figure><h4>Kategori perintah SQL</h4><p>Perintah SQL dikelompokkan agar mudah dipahami — dan itulah struktur bab-bab berikutnya:</p><ul><li><strong>DDL</strong> (Definition) — membuat/mengubah struktur: CREATE, ALTER, DROP.</li><li><strong>DML</strong> (Manipulation) — mengubah isi: INSERT, UPDATE, DELETE.</li><li><strong>DQL</strong> (Query) — membaca: SELECT &amp; kawan-kawannya.</li><li><strong>DCL</strong> (Control) — hak akses: GRANT, REVOKE.</li><li><strong>TCL</strong> (Transaction) — transaksi: COMMIT, ROLLBACK.</li></ul>",
     "takeaways": [
      "Database relasional menyimpan data dalam tabel (baris x kolom bertipe), dikelola RDBMS seperti MySQL/PostgreSQL.",
      "SQL adalah bahasa untuk membuat, membaca, mengubah, dan mengatur data itu.",
      "Perintah dikelompokkan: DDL (struktur), DML (isi), DQL (baca), DCL (akses), TCL (transaksi)."
     ]
    },
    {
     "id": "primary-foreign-key",
     "title": "Kunci: Primary Key & Foreign Key",
     "dur": "konsep · ± 7 menit",
     "body": "<p class=\"lead\">Kekuatan database relasional ada pada <strong>relasi</strong> antar-tabel, dan relasi dibangun lewat kunci: <em>primary key</em> menandai tiap baris secara unik, <em>foreign key</em> menghubungkan tabel.</p><h4>Primary Key (PK)</h4><p>Kolom (atau gabungan kolom) yang nilainya <strong>unik &amp; tidak NULL</strong> untuk tiap baris — identitas resmi baris itu, mis. <code>id</code>. Satu tabel punya satu primary key.</p><h4>Foreign Key (FK)</h4><p>Kolom di satu tabel yang <strong>menunjuk</strong> ke primary key tabel lain, membentuk relasi. Mis. <code>karyawan.divisi_id</code> menunjuk ke <code>divisi.id</code>. FK menjaga <strong>integritas referensial</strong>: kamu tak bisa menautkan ke divisi yang tak ada.</p><figure class=\"fig\"><svg viewBox=\"0 0 660 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Relasi primary key dan foreign key\"><defs><marker id=\"ak\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L7,3 L0,6 Z\" fill=\"#4fe0d0\"/></marker></defs><rect x=\"40\" y=\"50\" width=\"220\" height=\"80\" rx=\"8\" fill=\"#15202b\" stroke=\"#5fd98a\"/><text x=\"150\" y=\"72\" text-anchor=\"middle\" fill=\"#5fd98a\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">karyawan</text><text x=\"150\" y=\"94\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"9.5\">id (PK), nama,</text><text x=\"150\" y=\"110\" text-anchor=\"middle\" fill=\"#f5b748\" font-family=\"monospace\" font-size=\"9.5\">divisi_id (FK)</text><rect x=\"400\" y=\"50\" width=\"220\" height=\"80\" rx=\"8\" fill=\"#15202b\" stroke=\"#6ad7ff\"/><text x=\"510\" y=\"72\" text-anchor=\"middle\" fill=\"#6ad7ff\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">divisi</text><text x=\"510\" y=\"98\" text-anchor=\"middle\" fill=\"#f5b748\" font-family=\"monospace\" font-size=\"9.5\">id (PK)</text><text x=\"510\" y=\"114\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"9.5\">nama_divisi</text><line x1=\"260\" y1=\"106\" x2=\"398\" y2=\"92\" stroke=\"#4fe0d0\" stroke-width=\"2\" marker-end=\"url(#ak)\"/><text x=\"330\" y=\"90\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"9\">menunjuk ke</text></svg><figcaption>FK <code>divisi_id</code> menunjuk PK <code>divisi.id</code> — inilah cara tabel saling terhubung.</figcaption></figure><div class=\"box tip\"><div class=\"bx-title\">◇ Kenapa penting</div><p>PK &amp; FK mencegah data kacau (duplikat, yatim/tanpa induk) dan memungkinkan JOIN — menggabungkan data antar-tabel yang akan kamu pakai terus di DQL.</p></div>",
     "takeaways": [
      "Primary Key = identitas unik & non-NULL tiap baris (satu per tabel).",
      "Foreign Key = kolom yang menunjuk PK tabel lain, membentuk relasi & menjaga integritas referensial.",
      "PK/FK adalah fondasi JOIN dan mencegah data duplikat/yatim."
     ]
    },
    {
     "id": "normalisasi",
     "title": "Normalisasi: Menata Data Tanpa Redundansi",
     "dur": "konsep · ± 7 menit",
     "body": "<p class=\"lead\">Normalisasi adalah proses menata tabel agar setiap fakta disimpan <strong>satu kali saja</strong> — mengurangi duplikasi dan anomali saat data berubah.</p><h4>Masalah tabel tak ternormalisasi</h4><p>Bayangkan tabel <em>pesanan</em> yang menyimpan nama &amp; alamat pelanggan di setiap baris pesanan. Bila pelanggan pindah alamat, kamu harus mengubah banyak baris — dan kalau terlewat, data jadi tidak konsisten.</p><h4>Tiga bentuk normal (ringkas)</h4><ul><li><strong>1NF</strong> — tiap sel berisi satu nilai (tak ada daftar/koma dalam satu kolom), ada kunci unik.</li><li><strong>2NF</strong> — sudah 1NF + setiap kolom bergantung pada SELURUH primary key (relevan untuk PK gabungan).</li><li><strong>3NF</strong> — sudah 2NF + tak ada kolom yang bergantung pada kolom non-kunci (pisahkan ke tabel sendiri, mis. data pelanggan ke tabel <em>pelanggan</em>).</li></ul><div class=\"box warn\"><div class=\"bx-title\">▲ Seimbang, bukan dogma</div><p>Normalisasi mengurangi redundansi, tapi terlalu banyak tabel bisa memperlambat baca karena butuh banyak JOIN. Di sistem analitik, sebagian data sengaja <em>didenormalisasi</em> demi kecepatan. Pahami trade-off-nya.</p></div>",
     "takeaways": [
      "Normalisasi menyimpan tiap fakta sekali untuk mencegah duplikasi & anomali update.",
      "Praktisnya: 1NF (satu nilai per sel), 2NF & 3NF (pisahkan data yang bergantung ke tabel sendiri).",
      "Trade-off: lebih ternormalisasi = sedikit redundansi tapi lebih banyak JOIN; denormalisasi dipakai untuk kecepatan baca."
     ]
    },
    {
     "id": "index-performa",
     "title": "Index & Performa Query",
     "dur": "konsep · ± 7 menit",
     "body": "<p class=\"lead\">Index adalah struktur tambahan (umumnya B-tree) yang membuat pencarian baris secepat mencari kata di indeks buku — tanpa membaca seluruh halaman.</p><h4>Tanpa vs dengan index</h4><p>Tanpa index, mencari <code>WHERE email = ...</code> memaksa database memindai SELURUH tabel (full table scan). Dengan index pada <code>email</code>, database langsung melompat ke barisnya.</p><figure class=\"fig\"><svg viewBox=\"0 0 680 130\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Full scan vs index\"><rect x=\"30\" y=\"40\" width=\"300\" height=\"60\" rx=\"8\" fill=\"#15202b\" stroke=\"#fb7185\"/><text x=\"180\" y=\"64\" text-anchor=\"middle\" fill=\"#fb7185\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">Tanpa index</text><text x=\"180\" y=\"84\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"9.5\">periksa semua baris (lambat)</text><rect x=\"360\" y=\"40\" width=\"300\" height=\"60\" rx=\"8\" fill=\"#15202b\" stroke=\"#5fd98a\"/><text x=\"510\" y=\"64\" text-anchor=\"middle\" fill=\"#5fd98a\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">Dengan index</text><text x=\"510\" y=\"84\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"9.5\">lompat langsung ke baris (cepat)</text></svg><figcaption>Index mengubah pencarian dari \"baca semua\" menjadi \"lompat tepat sasaran\".</figcaption></figure><h4>Harga yang dibayar</h4><ul><li>Setiap INSERT/UPDATE/DELETE harus memperbarui index juga → tulis sedikit lebih lambat.</li><li>Index memakan ruang penyimpanan.</li><li>Index pada kolom yang jarang difilter = mubazir.</li></ul><div class=\"box tip\"><div class=\"bx-title\">◇ Aturan praktis</div><p>Index-kan kolom yang sering muncul di <code>WHERE</code>, <code>JOIN ... ON</code>, dan <code>ORDER BY</code>. Gunakan <code>EXPLAIN</code> untuk melihat apakah query memakai index atau melakukan full scan.</p></div>",
     "takeaways": [
      "Index mempercepat pencarian dengan melompat ke baris, menghindari full table scan.",
      "Trade-off: mempercepat baca tapi memperlambat tulis & memakan ruang.",
      "Index-kan kolom di WHERE/JOIN/ORDER BY; verifikasi dengan EXPLAIN."
     ]
    },
    {
     "id": "transaksi-acid",
     "title": "Transaksi & ACID",
     "dur": "konsep · ± 7 menit",
     "body": "<p class=\"lead\">Transaksi mengelompokkan beberapa operasi menjadi satu unit \"semua-atau-tidak\". Contoh klasik: transfer uang — kurangi saldo A dan tambah saldo B harus berhasil bersama, atau dibatalkan bersama.</p><h4>Alur transaksi</h4><pre><code>BEGIN TRANSACTION;\n  UPDATE rekening SET saldo = saldo - 100000 WHERE id = 1;\n  UPDATE rekening SET saldo = saldo + 100000 WHERE id = 2;\nCOMMIT;   -- atau ROLLBACK bila ada yang gagal</code></pre><h4>Empat jaminan ACID</h4><ul><li><strong>Atomicity</strong> — semua langkah berhasil, atau tak satu pun (tak ada transfer setengah jadi).</li><li><strong>Consistency</strong> — database berpindah dari satu keadaan valid ke keadaan valid lain (constraint tetap terjaga).</li><li><strong>Isolation</strong> — transaksi yang berjalan bersamaan tidak saling mengacaukan.</li><li><strong>Durability</strong> — setelah COMMIT, perubahan bertahan walau listrik mati.</li></ul><div class=\"box warn\"><div class=\"bx-title\">▲ Kapan wajib transaksi</div><p>Gunakan transaksi setiap kali beberapa perubahan harus konsisten bersama (keuangan, stok, pemindahan data). Tanpa transaksi, kegagalan di tengah meninggalkan data setengah jadi.</p></div>",
     "takeaways": [
      "Transaksi = unit 'semua-atau-tidak' untuk beberapa operasi sekaligus.",
      "ACID: Atomicity, Consistency, Isolation, Durability — jaminan keandalan database.",
      "Pakai transaksi untuk operasi yang harus konsisten bersama (mis. transfer, stok)."
     ]
    },
    {
     "id": "anatomi-query",
     "title": "Anatomi & Urutan Eksekusi SELECT",
     "dur": "konsep · ± 6 menit",
     "body": "<p class=\"lead\">SELECT ditulis dengan urutan tertentu, tapi database <strong>mengeksekusinya dengan urutan berbeda</strong>. Memahami ini menjelaskan banyak kebingungan (mis. kenapa alias SELECT tak bisa dipakai di WHERE).</p><h4>Urutan logis eksekusi</h4><figure class=\"fig\"><svg viewBox=\"0 0 700 110\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Urutan eksekusi SELECT\"><defs><marker id=\"aq\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#4fe0d0\"/></marker></defs><rect x=\"12\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">FROM</text><line x1=\"98\" y1=\"59\" x2=\"110\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"110\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"153\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">WHERE</text><line x1=\"196\" y1=\"59\" x2=\"208\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"208\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"251\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">GROUP BY</text><line x1=\"294\" y1=\"59\" x2=\"306\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"306\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"349\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">HAVING</text><line x1=\"392\" y1=\"59\" x2=\"404\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"404\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#5fd98a\"/><text x=\"447\" y=\"63\" text-anchor=\"middle\" fill=\"#5fd98a\" font-family=\"monospace\" font-size=\"10\">SELECT</text><line x1=\"490\" y1=\"59\" x2=\"502\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"502\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"545\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">ORDER BY</text><line x1=\"588\" y1=\"59\" x2=\"600\" y2=\"59\" stroke=\"#4fe0d0\" stroke-width=\"1.5\" marker-end=\"url(#aq)\"/><rect x=\"600\" y=\"44\" width=\"86\" height=\"30\" rx=\"6\" fill=\"#15202b\" stroke=\"#34475a\"/><text x=\"643\" y=\"63\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"10\">LIMIT</text><text x=\"350\" y=\"24\" text-anchor=\"middle\" fill=\"#e9f1f7\" font-family=\"monospace\" font-size=\"12\" font-weight=\"700\">Urutan EKSEKUSI (bukan urutan tulis)</text></svg><figcaption>Data disaring (WHERE) sebelum dikelompokkan (GROUP BY) &amp; dipilih (SELECT). ORDER BY &amp; LIMIT paling akhir.</figcaption></figure><p>Karena <code>SELECT</code> dijalankan setelah <code>WHERE</code> &amp; <code>GROUP BY</code>, alias yang dibuat di SELECT belum ada saat WHERE berjalan — itulah kenapa kamu tak bisa memfilternya di WHERE (pakai HAVING atau subquery).</p>",
     "takeaways": [
      "Urutan eksekusi: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.",
      "WHERE menyaring sebelum agregasi; HAVING menyaring sesudahnya.",
      "Alias di SELECT belum tersedia saat WHERE — gunakan HAVING/subquery untuk memfilternya."
     ]
    }
   ]
  },
  {
   "id": "ddl",
   "title": "DDL — Data Definition Language",
   "lectures": [
    {
     "id": "create-table",
     "title": "CREATE TABLE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membuat tabel baru dalam database.</p><h4>Kapan dipakai</h4><p>Saat mendefinisikan struktur data baru: tentukan kolom, tipe data, dan constraint (PRIMARY KEY, NOT NULL, UNIQUE) sejak awal.</p><h4>Contoh penggunaan</h4><pre><code>CREATE TABLE karyawan (\n  id   INT PRIMARY KEY,\n  nama VARCHAR(100),\n  gaji DECIMAL(10,2)\n);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Lupa menetapkan PRIMARY KEY, atau memakai tipe data terlalu longgar (mis. VARCHAR(255) untuk semua). Tipe yang tepat menghemat ruang &amp; mencegah data sampah.</p></div>",
     "takeaways": [
      "CREATE TABLE mendefinisikan skema: kolom + tipe + constraint.",
      "Tetapkan PRIMARY KEY dan tipe data yang tepat sejak awal — sulit diubah setelah ada banyak data."
     ]
    },
    {
     "id": "alter-table",
     "title": "ALTER TABLE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengubah struktur tabel yang sudah ada (tambah/hapus/ubah kolom).</p><h4>Kapan dipakai</h4><p>Saat struktur tabel perlu berubah setelah tabel berisi data: menambah kolom, mengubah tipe, atau menambah constraint/index.</p><h4>Contoh penggunaan</h4><pre><code>ALTER TABLE karyawan ADD COLUMN divisi VARCHAR(50);\nALTER TABLE karyawan DROP COLUMN divisi;\nALTER TABLE karyawan MODIFY COLUMN nama VARCHAR(200);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>ALTER pada tabel besar bisa mengunci tabel &amp; lama. MODIFY tipe kolom bisa memotong/menolak data lama yang tak cocok.</p></div>",
     "takeaways": [
      "ALTER TABLE mengubah struktur tabel yang sudah ada.",
      "Pada tabel besar, ALTER bisa lambat & mengunci — rencanakan di jam sepi."
     ]
    },
    {
     "id": "drop-table",
     "title": "DROP TABLE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus tabel beserta seluruh datanya secara permanen.</p><h4>Kapan dipakai</h4><p>Saat tabel benar-benar tidak diperlukan lagi. Pakai IF EXISTS agar skrip tidak error bila tabel sudah tiada.</p><h4>Contoh penggunaan</h4><pre><code>DROP TABLE karyawan;\nDROP TABLE IF EXISTS karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>DROP menghapus struktur + SEMUA data permanen, tidak seperti DELETE. Tidak ada undo tanpa backup.</p></div>",
     "takeaways": [
      "DROP TABLE menghapus tabel beserta seluruh datanya secara permanen.",
      "Selalu pastikan backup; pakai IF EXISTS untuk skrip yang aman diulang."
     ]
    },
    {
     "id": "truncate-table",
     "title": "TRUNCATE TABLE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus semua baris dalam tabel tetapi mempertahankan strukturnya.</p><h4>Kapan dipakai</h4><p>Saat ingin mengosongkan SELURUH isi tabel dengan cepat tapi mempertahankan strukturnya (mis. reset tabel staging).</p><h4>Contoh penggunaan</h4><pre><code>TRUNCATE TABLE karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>TRUNCATE tidak bisa di-rollback di banyak DBMS dan mengabaikan trigger DELETE. Untuk hapus sebagian, pakai DELETE.</p></div>",
     "takeaways": [
      "TRUNCATE mengosongkan tabel jauh lebih cepat dari DELETE semua baris.",
      "Biasanya tak bisa di-rollback & me-reset AUTO_INCREMENT — hati-hati."
     ]
    },
    {
     "id": "create-database",
     "title": "CREATE DATABASE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membuat database baru.</p><h4>Kapan dipakai</h4><p>Saat memulai proyek/aplikasi baru yang butuh wadah data tersendiri.</p><h4>Contoh penggunaan</h4><pre><code>CREATE DATABASE perusahaan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Lupa menetapkan charset/collation (mis. utf8mb4) bisa bikin masalah emoji &amp; karakter non-latin di kemudian hari.</p></div>",
     "takeaways": [
      "CREATE DATABASE membuat wadah baru untuk tabel-tabel.",
      "Tetapkan charset utf8mb4 sejak awal untuk dukungan karakter penuh."
     ]
    },
    {
     "id": "drop-database",
     "title": "DROP DATABASE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus database beserta semua objek di dalamnya.</p><h4>Kapan dipakai</h4><p>Saat seluruh database tidak diperlukan lagi (mis. membersihkan lingkungan uji).</p><h4>Contoh penggunaan</h4><pre><code>DROP DATABASE perusahaan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Menghapus SEMUA tabel &amp; data dalam database sekaligus. Sangat destruktif — pastikan database yang benar.</p></div>",
     "takeaways": [
      "DROP DATABASE menghapus database beserta semua objek di dalamnya.",
      "Periksa dua kali nama database — tidak ada undo."
     ]
    },
    {
     "id": "create-index",
     "title": "CREATE INDEX",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membuat indeks pada kolom untuk mempercepat pencarian data.</p><h4>Kapan dipakai</h4><p>Saat kolom sering dipakai di WHERE/JOIN/ORDER BY dan tabel cukup besar sehingga pencarian terasa lambat.</p><h4>Contoh penggunaan</h4><pre><code>CREATE INDEX idx_nama ON karyawan(nama);\nCREATE UNIQUE INDEX idx_email ON karyawan(email);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Index mempercepat baca tapi memperlambat tulis (INSERT/UPDATE) &amp; memakan ruang. Jangan meng-index semua kolom.</p></div>",
     "takeaways": [
      "Index mempercepat pencarian pada kolom yang sering difilter/di-join.",
      "Trade-off: baca lebih cepat, tulis lebih lambat + ruang ekstra — pilih kolom dengan bijak."
     ]
    },
    {
     "id": "drop-index",
     "title": "DROP INDEX",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus indeks yang sudah ada.</p><h4>Kapan dipakai</h4><p>Saat sebuah index ternyata jarang dipakai atau justru membebani operasi tulis.</p><h4>Contoh penggunaan</h4><pre><code>DROP INDEX idx_nama ON karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Menghapus index yang masih dipakai query penting bisa membuat query mendadak lambat.</p></div>",
     "takeaways": [
      "Hapus index yang tak terpakai untuk mempercepat tulis & menghemat ruang.",
      "Pastikan tidak ada query penting yang bergantung padanya dulu."
     ]
    },
    {
     "id": "create-view",
     "title": "CREATE VIEW",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membuat tampilan virtual dari hasil query SELECT.</p><h4>Kapan dipakai</h4><p>Saat ingin menyederhanakan query rumit yang sering dipakai, atau membatasi kolom yang boleh dilihat pengguna tertentu.</p><h4>Contoh penggunaan</h4><pre><code>CREATE VIEW v_karyawan_aktif AS\n  SELECT id, nama, gaji\n  FROM karyawan\n  WHERE status = 'aktif';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>View bukan tabel — query di baliknya tetap dijalankan tiap akses. View berlapis-lapis bisa jadi lambat &amp; sulit dilacak.</p></div>",
     "takeaways": [
      "VIEW = query SELECT tersimpan yang bisa dipakai seperti tabel virtual.",
      "Berguna menyederhanakan & membatasi akses, tapi tetap mengeksekusi query aslinya."
     ]
    },
    {
     "id": "rename-table",
     "title": "RENAME TABLE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengganti nama tabel.</p><h4>Kapan dipakai</h4><p>Saat mengganti nama tabel (mis. saat refactor skema atau swap tabel hasil migrasi).</p><h4>Contoh penggunaan</h4><pre><code>RENAME TABLE karyawan TO pegawai;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Referensi lama (kode aplikasi, view, foreign key) ke nama lama akan rusak setelah rename.</p></div>",
     "takeaways": [
      "RENAME mengganti nama tabel.",
      "Perbarui semua referensi (kode, view, FK) yang memakai nama lama."
     ],
     "quiz": {
      "title": "Kuis — DDL (Definisi Struktur)",
      "sub": "4 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "Perintah mana yang menghapus SELURUH baris tapi mempertahankan struktur tabel, biasanya tak bisa di-rollback?",
        "options": [
         "DELETE",
         "DROP TABLE",
         "TRUNCATE TABLE",
         "ALTER TABLE"
        ],
        "answer": 2,
        "explain": "TRUNCATE mengosongkan tabel dengan cepat & mempertahankan struktur; umumnya tak bisa di-rollback dan me-reset AUTO_INCREMENT."
       },
       {
        "q": "Apa beda DROP TABLE dan DELETE?",
        "options": [
         "Sama saja",
         "DROP menghapus struktur+data permanen; DELETE menghapus baris (bisa di-WHERE & rollback)",
         "DELETE lebih cepat",
         "DROP hanya menghapus index"
        ],
        "answer": 1,
        "explain": "DROP membuang tabel sepenuhnya; DELETE menghapus baris terpilih dan bisa di-rollback dalam transaksi."
       },
       {
        "q": "Kapan CREATE INDEX paling tepat?",
        "options": [
         "Pada semua kolom",
         "Pada kolom yang sering difilter/di-join pada tabel besar",
         "Hanya pada kolom teks",
         "Tidak pernah perlu"
        ],
        "answer": 1,
        "explain": "Index membantu kolom yang sering muncul di WHERE/JOIN/ORDER BY; meng-index semua kolom justru memperlambat tulis."
       },
       {
        "q": "Mengapa menetapkan PRIMARY KEY & tipe data tepat sejak CREATE TABLE itu penting?",
        "options": [
         "Hanya formalitas",
         "Sulit & berisiko diubah setelah tabel berisi banyak data",
         "Mempercepat DROP",
         "Agar tabel tak bisa diubah"
        ],
        "answer": 1,
        "explain": "Mengubah struktur tabel besar lewat ALTER bisa lambat & mengunci; rancang skema dengan benar sejak awal."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "dml",
   "title": "DML — Data Manipulation Language",
   "lectures": [
    {
     "id": "insert-into",
     "title": "INSERT INTO",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menambahkan baris baru ke dalam tabel.</p><h4>Kapan dipakai</h4><p>Saat menambahkan baris data baru, satu per satu atau banyak sekaligus (bulk insert lebih efisien).</p><h4>Contoh penggunaan</h4><pre><code>INSERT INTO karyawan (id, nama, gaji)\nVALUES (1, 'Budi', 5000000);\n\n-- Insert dari tabel lain\nINSERT INTO karyawan SELECT * FROM karyawan_lama;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Urutan VALUES harus cocok dengan kolom. Insert tanpa menyebut kolom rapuh bila struktur berubah. Insert satu-satu untuk ribuan baris lambat — pakai bulk.</p></div>",
     "takeaways": [
      "INSERT menambah baris baru; bisa multi-baris sekaligus (bulk) untuk efisiensi.",
      "Selalu sebut nama kolom secara eksplisit agar tahan perubahan struktur."
     ]
    },
    {
     "id": "update",
     "title": "UPDATE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengubah nilai kolom pada baris yang sudah ada.</p><h4>Kapan dipakai</h4><p>Saat mengubah nilai pada baris yang sudah ada, dipersempit dengan WHERE.</p><h4>Contoh penggunaan</h4><pre><code>UPDATE karyawan\nSET gaji = 6000000, divisi = 'IT'\nWHERE id = 1;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>UPDATE TANPA WHERE mengubah SEMUA baris! Selalu uji dengan SELECT + WHERE yang sama lebih dulu.</p></div>",
     "takeaways": [
      "UPDATE mengubah data; WHERE menentukan baris mana.",
      "UPDATE tanpa WHERE mengubah seluruh tabel — kesalahan klasik yang fatal."
     ]
    },
    {
     "id": "delete",
     "title": "DELETE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus satu atau lebih baris dari tabel.</p><h4>Kapan dipakai</h4><p>Saat menghapus baris tertentu berdasarkan kondisi WHERE.</p><h4>Contoh penggunaan</h4><pre><code>DELETE FROM karyawan WHERE id = 1;\nDELETE FROM karyawan WHERE gaji &lt; 2000000;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>DELETE TANPA WHERE menghapus semua baris. Untuk mengosongkan seluruh tabel lebih cepat pakai TRUNCATE.</p></div>",
     "takeaways": [
      "DELETE menghapus baris sesuai WHERE; bisa di-rollback dalam transaksi.",
      "DELETE tanpa WHERE menghapus semua baris — uji dengan SELECT dulu."
     ]
    },
    {
     "id": "merge-upsert",
     "title": "MERGE (UPSERT)",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menggabungkan operasi INSERT, UPDATE, DELETE dalam satu pernyataan.</p><h4>Kapan dipakai</h4><p>Saat ingin 'insert kalau belum ada, update kalau sudah ada' dalam satu operasi (sinkronisasi data).</p><h4>Contoh penggunaan</h4><pre><code>MERGE INTO karyawan AS target\nUSING sumber AS src ON target.id = src.id\nWHEN MATCHED THEN\n  UPDATE SET nama = src.nama\nWHEN NOT MATCHED THEN\n  INSERT VALUES (src.id, src.nama, src.gaji);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Sintaks berbeda antar DBMS (MERGE, INSERT ... ON DUPLICATE KEY, ON CONFLICT). Butuh kunci unik untuk mendeteksi kecocokan.</p></div>",
     "takeaways": [
      "MERGE/UPSERT menggabungkan INSERT & UPDATE berdasarkan kecocokan kunci.",
      "Sintaksnya beragam antar database — sesuaikan dengan DBMS-mu."
     ],
     "quiz": {
      "title": "Kuis — DML (Manipulasi Data)",
      "sub": "3 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "Apa risiko terbesar menjalankan UPDATE atau DELETE?",
        "options": [
         "Terlalu lambat",
         "Lupa WHERE → mengubah/menghapus SEMUA baris",
         "Menghapus index",
         "Mengubah tipe kolom"
        ],
        "answer": 1,
        "explain": "UPDATE/DELETE tanpa WHERE berdampak ke seluruh tabel. Uji dulu dengan SELECT memakai WHERE yang sama."
       },
       {
        "q": "Cara paling efisien memasukkan ribuan baris adalah…",
        "options": [
         "INSERT satu per satu",
         "Bulk insert (banyak baris sekaligus)",
         "UPDATE",
         "MERGE"
        ],
        "answer": 1,
        "explain": "Bulk insert jauh lebih cepat daripada ribuan INSERT terpisah karena mengurangi overhead per-operasi."
       },
       {
        "q": "MERGE/UPSERT berguna untuk…",
        "options": [
         "Menghapus tabel",
         "'Insert kalau belum ada, update kalau sudah ada'",
         "Membuat index",
         "Mengatur hak akses"
        ],
        "answer": 1,
        "explain": "UPSERT menggabungkan INSERT & UPDATE berdasarkan kecocokan kunci unik — ideal untuk sinkronisasi data."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "dql",
   "title": "DQL — Data Query Language",
   "lectures": [
    {
     "id": "select",
     "title": "SELECT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil/membaca data dari satu atau lebih tabel.</p><h4>Kapan dipakai</h4><p>Operasi paling sering: membaca data. Sebut kolom yang dibutuhkan, hindari SELECT * di produksi.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan;\nSELECT nama, gaji FROM karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>SELECT * mengambil semua kolom (boros &amp; rapuh bila struktur berubah). Sebutkan kolom yang benar-benar dipakai.</p></div>",
     "takeaways": [
      "SELECT membaca data dari tabel.",
      "Sebut kolom spesifik (bukan SELECT *) untuk performa & kejelasan."
     ]
    },
    {
     "id": "where",
     "title": "WHERE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memfilter baris berdasarkan kondisi tertentu.</p><h4>Kapan dipakai</h4><p>Saat memfilter baris sebelum agregasi/pengelompokan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE gaji &gt; 5000000;\nSELECT * FROM karyawan WHERE nama LIKE 'B%';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Fungsi pada kolom di WHERE (mis. WHERE YEAR(tgl)=2024) sering menonaktifkan index. Bandingkan kolom apa adanya bila bisa.</p></div>",
     "takeaways": [
      "WHERE memfilter baris berdasarkan kondisi, sebelum GROUP BY.",
      "Hindari membungkus kolom dengan fungsi di WHERE agar index tetap terpakai."
     ]
    },
    {
     "id": "order-by",
     "title": "ORDER BY",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengurutkan hasil query secara ASC (naik) atau DESC (turun).</p><h4>Kapan dipakai</h4><p>Saat hasil perlu diurutkan untuk ditampilkan atau dipaginasi.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan ORDER BY gaji DESC;\nSELECT * FROM karyawan ORDER BY nama ASC, gaji DESC;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Mengurutkan kolom tanpa index pada data besar itu mahal. Tanpa ORDER BY, urutan baris TIDAK dijamin.</p></div>",
     "takeaways": [
      "ORDER BY mengurutkan hasil (ASC/DESC) dan bisa multi-kolom.",
      "Tanpa ORDER BY, urutan hasil tidak dijamin — jangan mengandalkannya."
     ]
    },
    {
     "id": "group-by",
     "title": "GROUP BY",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengelompokkan baris yang memiliki nilai kolom yang sama.</p><h4>Kapan dipakai</h4><p>Saat meringkas data per kelompok (mis. total/ rata-rata per divisi).</p><h4>Contoh penggunaan</h4><pre><code>SELECT divisi, COUNT(*) AS jumlah, AVG(gaji) AS rata_gaji\nFROM karyawan\nGROUP BY divisi;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Kolom di SELECT yang bukan agregat harus ada di GROUP BY (di mode SQL ketat). Salah paham urutan eksekusi sering bikin error.</p></div>",
     "takeaways": [
      "GROUP BY mengelompokkan baris untuk fungsi agregat (COUNT, SUM, AVG).",
      "Kolom non-agregat di SELECT wajib ikut di GROUP BY."
     ]
    },
    {
     "id": "having",
     "title": "HAVING",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memfilter hasil GROUP BY berdasarkan kondisi agregat.</p><h4>Kapan dipakai</h4><p>Saat memfilter HASIL agregasi (mis. divisi dengan rata-rata gaji > X).</p><h4>Contoh penggunaan</h4><pre><code>SELECT divisi, AVG(gaji) AS rata_gaji\nFROM karyawan\nGROUP BY divisi\nHAVING AVG(gaji) &gt; 4000000;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Jangan tertukar dengan WHERE: WHERE memfilter baris sebelum agregasi, HAVING memfilter grup sesudah agregasi.</p></div>",
     "takeaways": [
      "HAVING memfilter hasil GROUP BY berdasarkan kondisi agregat.",
      "WHERE = sebelum agregasi; HAVING = sesudah agregasi."
     ]
    },
    {
     "id": "inner-join",
     "title": "INNER JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menggabungkan baris dari dua tabel yang memiliki nilai kolom yang cocok.</p><h4>Kapan dipakai</h4><p>Saat butuh baris yang punya pasangan cocok di kedua tabel.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nINNER JOIN divisi d ON k.divisi_id = d.id;</code></pre><figure class=\"fig\"><svg viewBox=\"0 0 720 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Jenis JOIN\"><text x=\"360\" y=\"20\" text-anchor=\"middle\" fill=\"#e9f1f7\" font-family=\"monospace\" font-size=\"13\" font-weight=\"700\">Empat JOIN utama</text><circle cx=\"81\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#5fd98a\" stroke-width=\"2\"/><circle cx=\"109\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#5fd98a\" stroke-width=\"2\"/><text x=\"95\" y=\"120\" text-anchor=\"middle\" fill=\"#5fd98a\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">INNER</text><text x=\"95\" y=\"136\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"8.5\">irisan A &amp; B</text><circle cx=\"241\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#6ad7ff\" stroke-width=\"2\"/><circle cx=\"269\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#6ad7ff\" stroke-width=\"2\"/><text x=\"255\" y=\"120\" text-anchor=\"middle\" fill=\"#6ad7ff\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">LEFT</text><text x=\"255\" y=\"136\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"8.5\">semua A + cocok B</text><circle cx=\"401\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#f5b748\" stroke-width=\"2\"/><circle cx=\"429\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#f5b748\" stroke-width=\"2\"/><text x=\"415\" y=\"120\" text-anchor=\"middle\" fill=\"#f5b748\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">RIGHT</text><text x=\"415\" y=\"136\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"8.5\">semua B + cocok A</text><circle cx=\"561\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2\"/><circle cx=\"589\" cy=\"80\" r=\"26\" fill=\"none\" stroke=\"#fb7185\" stroke-width=\"2\"/><text x=\"575\" y=\"120\" text-anchor=\"middle\" fill=\"#fb7185\" font-family=\"monospace\" font-size=\"11\" font-weight=\"700\">FULL</text><text x=\"575\" y=\"136\" text-anchor=\"middle\" fill=\"#9fb4c4\" font-family=\"monospace\" font-size=\"8.5\">semua A &amp; B</text></svg><figcaption>INNER = irisan; LEFT/RIGHT = satu sisi penuh; FULL = gabungan keduanya.</figcaption></figure><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Lupa kondisi ON menghasilkan cross join (ledakan baris). Pastikan kolom join punya index.</p></div>",
     "takeaways": [
      "INNER JOIN hanya mengambil baris yang cocok di kedua tabel.",
      "Selalu sertakan kondisi ON; index kolom join agar cepat."
     ]
    },
    {
     "id": "left-join",
     "title": "LEFT JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil semua baris dari tabel kiri + baris yang cocok dari tabel kanan.</p><h4>Kapan dipakai</h4><p>Saat ingin SEMUA baris tabel kiri, plus data kanan bila ada (sisanya NULL).</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nLEFT JOIN divisi d ON k.divisi_id = d.id;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Memfilter kolom tabel kanan di WHERE diam-diam mengubah LEFT JOIN jadi seperti INNER JOIN. Taruh kondisi kanan di ON.</p></div>",
     "takeaways": [
      "LEFT JOIN: semua baris kiri + yang cocok dari kanan (NULL bila tak ada).",
      "Kondisi pada tabel kanan sebaiknya di ON, bukan WHERE, agar baris kiri tetap muncul."
     ]
    },
    {
     "id": "right-join",
     "title": "RIGHT JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil semua baris dari tabel kanan + baris yang cocok dari tabel kiri.</p><h4>Kapan dipakai</h4><p>Kebalikan LEFT JOIN: semua baris kanan + yang cocok dari kiri. Jarang dipakai; biasanya ditulis ulang jadi LEFT JOIN.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nRIGHT JOIN divisi d ON k.divisi_id = d.id;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Membingungkan dibaca. Banyak tim menstandarkan LEFT JOIN saja untuk konsistensi.</p></div>",
     "takeaways": [
      "RIGHT JOIN: semua baris kanan + yang cocok dari kiri.",
      "Sering bisa ditulis ulang sebagai LEFT JOIN demi keterbacaan."
     ]
    },
    {
     "id": "full-outer-join",
     "title": "FULL OUTER JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil semua baris dari kedua tabel, termasuk yang tidak cocok.</p><h4>Kapan dipakai</h4><p>Saat butuh semua baris dari kedua tabel, cocok maupun tidak (mis. rekonsiliasi dua sumber).</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nFULL OUTER JOIN divisi d ON k.divisi_id = d.id;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>MySQL tidak mendukung FULL OUTER JOIN langsung — disimulasikan dengan UNION dari LEFT &amp; RIGHT JOIN.</p></div>",
     "takeaways": [
      "FULL OUTER JOIN menggabungkan semua baris kedua tabel (yang tak cocok jadi NULL).",
      "Tidak didukung MySQL secara langsung — pakai UNION dari LEFT+RIGHT."
     ]
    },
    {
     "id": "cross-join",
     "title": "CROSS JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghasilkan semua kombinasi baris dari dua tabel (cartesian product).</p><h4>Kapan dipakai</h4><p>Saat sengaja butuh semua kombinasi (mis. membuat matriks ukuran x warna).</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, p.nama_proyek\nFROM karyawan k\nCROSS JOIN proyek p;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Tanpa kondisi, menghasilkan perkalian kartesius — jumlah baris meledak (A x B). Sering muncul tak sengaja karena lupa ON.</p></div>",
     "takeaways": [
      "CROSS JOIN menghasilkan semua kombinasi baris dua tabel.",
      "Hati-hati ledakan baris; pastikan memang disengaja."
     ]
    },
    {
     "id": "self-join",
     "title": "SELF JOIN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menggabungkan tabel dengan dirinya sendiri.</p><h4>Kapan dipakai</h4><p>Saat baris dalam satu tabel berelasi dengan baris lain di tabel yang sama (mis. karyawan &amp; manajernya).</p><h4>Contoh penggunaan</h4><pre><code>SELECT a.nama AS karyawan, b.nama AS manajer\nFROM karyawan a\nJOIN karyawan b ON a.manajer_id = b.id;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Wajib pakai alias berbeda untuk dua salinan tabel, kalau tidak ambigu.</p></div>",
     "takeaways": [
      "SELF JOIN menggabungkan tabel dengan dirinya sendiri memakai alias.",
      "Berguna untuk hubungan hierarkis (atasan-bawahan, kategori-subkategori)."
     ]
    },
    {
     "id": "union-union-all",
     "title": "UNION / UNION ALL",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menggabungkan hasil dua query. UNION hapus duplikat, UNION ALL pertahankan.</p><h4>Kapan dipakai</h4><p>Saat menggabungkan hasil dua query yang berstruktur kolom sama (mis. data dari dua tabel mirip).</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan_aktif\nUNION\nSELECT nama FROM karyawan_pensiun;\n\n-- Dengan duplikat\nSELECT nama FROM tabel_a\nUNION ALL\nSELECT nama FROM tabel_b;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>UNION menghapus duplikat (lebih lambat); UNION ALL mempertahankan semua (lebih cepat). Jumlah &amp; tipe kolom harus cocok.</p></div>",
     "takeaways": [
      "UNION menggabung hasil & menghapus duplikat; UNION ALL pertahankan semua (lebih cepat).",
      "Jumlah dan tipe kolom kedua query harus sama."
     ]
    },
    {
     "id": "subquery",
     "title": "SUBQUERY",
     "dur": "perintah",
     "body": "<p class=\"lead\">Query di dalam query lain, digunakan sebagai filter atau sumber data.</p><h4>Kapan dipakai</h4><p>Saat butuh hasil sebuah query sebagai input query lain (filter, nilai, atau tabel sementara).</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan\nWHERE gaji &gt; (SELECT AVG(gaji) FROM karyawan);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Subquery berkorelasi (mengacu baris luar) bisa berjalan per-baris dan lambat; sering bisa ditulis ulang jadi JOIN.</p></div>",
     "takeaways": [
      "Subquery = query di dalam query, dipakai sebagai filter/nilai/sumber.",
      "Subquery berkorelasi bisa lambat — pertimbangkan menulis ulang sebagai JOIN."
     ]
    },
    {
     "id": "limit-top",
     "title": "LIMIT / TOP",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membatasi jumlah baris yang dikembalikan.</p><h4>Kapan dipakai</h4><p>Saat membatasi jumlah baris (preview data atau pagination dengan OFFSET).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan LIMIT 10;          -- MySQL\nSELECT * FROM karyawan LIMIT 10 OFFSET 20; -- Pagination\nSELECT TOP 10 * FROM karyawan;             -- SQL Server</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>OFFSET besar tetap memindai baris yang dilewati (lambat untuk halaman jauh). Sintaks beda: LIMIT (MySQL/PostgreSQL) vs TOP (SQL Server).</p></div>",
     "takeaways": [
      "LIMIT/TOP membatasi jumlah baris; OFFSET untuk pagination.",
      "OFFSET besar lambat — untuk data besar gunakan keyset pagination (WHERE id > ...)."
     ]
    },
    {
     "id": "distinct",
     "title": "DISTINCT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghilangkan baris duplikat dari hasil query.</p><h4>Kapan dipakai</h4><p>Saat ingin nilai unik (mis. daftar divisi yang ada).</p><h4>Contoh penggunaan</h4><pre><code>SELECT DISTINCT divisi FROM karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>DISTINCT pada banyak kolom + data besar mahal. Kadang menutupi masalah JOIN yang menghasilkan duplikat.</p></div>",
     "takeaways": [
      "DISTINCT menghapus baris duplikat dari hasil.",
      "Duplikat tak terduga sering pertanda JOIN yang kurang tepat — periksa dulu."
     ]
    },
    {
     "id": "in-not-in",
     "title": "IN / NOT IN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memeriksa apakah nilai ada atau tidak dalam daftar nilai.</p><h4>Kapan dipakai</h4><p>Saat memeriksa keanggotaan dalam daftar nilai atau hasil subquery.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE divisi IN ('IT','HR','Finance');\nSELECT * FROM karyawan WHERE id NOT IN (1, 2, 3);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>NOT IN dengan subquery yang berisi NULL bisa mengembalikan hasil kosong tak terduga. Untuk itu lebih aman NOT EXISTS.</p></div>",
     "takeaways": [
      "IN memeriksa nilai ada dalam daftar/subquery.",
      "Hati-hati NOT IN bila subquery mengandung NULL — gunakan NOT EXISTS."
     ]
    },
    {
     "id": "between",
     "title": "BETWEEN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memfilter nilai dalam rentang tertentu (inklusif di kedua ujung).</p><h4>Kapan dipakai</h4><p>Saat memfilter rentang inklusif (angka atau tanggal).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE gaji BETWEEN 3000000 AND 7000000;\nSELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>BETWEEN inklusif di kedua ujung. Untuk tanggal, BETWEEN '2024-01-01' AND '2024-12-31' bisa melewatkan waktu di tanggal akhir — pertimbangkan < hari berikutnya.</p></div>",
     "takeaways": [
      "BETWEEN memfilter rentang dan inklusif di kedua ujung.",
      "Untuk timestamp, waspadai batas akhir; pakai >= awal AND < hari berikutnya."
     ]
    },
    {
     "id": "like",
     "title": "LIKE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mencari pola teks. % = semua karakter, _ = tepat satu karakter.</p><h4>Kapan dipakai</h4><p>Saat mencari pola teks: % (banyak karakter), _ (satu karakter).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE nama LIKE 'A%';    -- diawali A\nSELECT * FROM karyawan WHERE email LIKE '%@gmail.com';\nSELECT * FROM karyawan WHERE nama LIKE '_udi';    -- 4 huruf, akhir udi</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Pola diawali wildcard (LIKE '%abc') tidak bisa memakai index → pemindaian penuh. Untuk pencarian teks berat, pakai full-text index.</p></div>",
     "takeaways": [
      "LIKE mencari pola: % = banyak karakter, _ = satu karakter.",
      "Wildcard di depan ('%x') menonaktifkan index — hindari untuk data besar."
     ]
    },
    {
     "id": "is-null-is-not-null",
     "title": "IS NULL / IS NOT NULL",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memeriksa apakah nilai suatu kolom adalah NULL atau tidak.</p><h4>Kapan dipakai</h4><p>Saat memeriksa ketiadaan nilai (NULL).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE divisi IS NULL;\nSELECT * FROM karyawan WHERE email IS NOT NULL;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>NULL bukan nilai — tidak bisa dibandingkan dengan = atau !=. Harus IS NULL / IS NOT NULL.</p></div>",
     "takeaways": [
      "NULL berarti 'tidak ada nilai', bukan 0 atau string kosong.",
      "Bandingkan NULL hanya dengan IS NULL / IS NOT NULL, bukan = atau !=."
     ]
    },
    {
     "id": "exists-not-exists",
     "title": "EXISTS / NOT EXISTS",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memeriksa apakah subquery mengembalikan setidaknya satu baris.</p><h4>Kapan dipakai</h4><p>Saat memeriksa apakah subquery menghasilkan baris (cek keberadaan relasi).</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan k\nWHERE EXISTS (\n  SELECT 1 FROM proyek p\n  WHERE p.karyawan_id = k.id\n);</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>EXISTS sering lebih efisien dari IN untuk subquery besar, dan aman terhadap NULL (tidak seperti NOT IN).</p></div>",
     "takeaways": [
      "EXISTS bernilai benar jika subquery menghasilkan minimal satu baris.",
      "NOT EXISTS lebih aman daripada NOT IN saat ada kemungkinan NULL."
     ]
    },
    {
     "id": "case-when",
     "title": "CASE WHEN",
     "dur": "perintah",
     "body": "<p class=\"lead\">Logika kondisional (IF-THEN-ELSE) dalam query SELECT.</p><h4>Kapan dipakai</h4><p>Saat butuh logika kondisional (IF-THEN-ELSE) di dalam query, mis. mengkategorikan nilai.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama,\n  CASE\n    WHEN gaji &gt; 7000000 THEN 'Senior'\n    WHEN gaji &gt; 4000000 THEN 'Middle'\n    ELSE 'Junior'\n  END AS level\nFROM karyawan;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Lupa ELSE membuat nilai tak terkategori jadi NULL. Urutan WHEN penting — yang pertama cocok yang menang.</p></div>",
     "takeaways": [
      "CASE WHEN memberi logika IF-THEN-ELSE di dalam SELECT.",
      "Sertakan ELSE & perhatikan urutan WHEN (yang cocok pertama menang)."
     ]
    },
    {
     "id": "with-cte",
     "title": "WITH (CTE)",
     "dur": "perintah",
     "body": "<p class=\"lead\">Common Table Expression — query sementara yang bisa direferensikan berkali-kali.</p><h4>Kapan dipakai</h4><p>Saat memecah query rumit jadi langkah-langkah terbaca, atau untuk query rekursif (hierarki).</p><h4>Contoh penggunaan</h4><pre><code>WITH gaji_rata AS (\n  SELECT divisi, AVG(gaji) AS avg_gaji\n  FROM karyawan GROUP BY divisi\n)\nSELECT k.nama, g.avg_gaji\nFROM karyawan k\nJOIN gaji_rata g ON k.divisi = g.divisi;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>CTE mempermudah baca, tapi tidak selalu lebih cepat. CTE rekursif tanpa kondisi berhenti bisa loop tak terbatas.</p></div>",
     "takeaways": [
      "CTE (WITH) = query sementara bernama yang membuat query rumit lebih terbaca.",
      "Mendukung rekursi untuk data hierarkis; pastikan ada kondisi berhenti."
     ]
    },
    {
     "id": "intersect",
     "title": "INTERSECT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil baris yang ada di kedua hasil query (irisan).</p><h4>Kapan dipakai</h4><p>Saat butuh baris yang ADA di kedua hasil query (irisan).</p><h4>Contoh penggunaan</h4><pre><code>SELECT id FROM karyawan_aktif\nINTERSECT\nSELECT id FROM karyawan_proyek_a;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Tidak didukung semua DBMS (MySQL lama tidak). Bisa ditiru dengan INNER JOIN / IN.</p></div>",
     "takeaways": [
      "INTERSECT mengambil baris yang muncul di kedua query.",
      "Tak ada di semua DBMS — alternatif: INNER JOIN atau IN."
     ]
    },
    {
     "id": "except-minus",
     "title": "EXCEPT / MINUS",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil baris dari query pertama yang tidak ada di query kedua.</p><h4>Kapan dipakai</h4><p>Saat butuh baris dari query pertama yang TIDAK ada di query kedua (selisih).</p><h4>Contoh penggunaan</h4><pre><code>SELECT id FROM karyawan\nEXCEPT\nSELECT id FROM karyawan_dipecat;   -- SQL Server/PostgreSQL\n\n-- Oracle menggunakan MINUS</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Namanya beda: EXCEPT (SQL Server/PostgreSQL) vs MINUS (Oracle). MySQL tidak mendukung langsung.</p></div>",
     "takeaways": [
      "EXCEPT/MINUS mengambil selisih: baris query-1 yang tak ada di query-2.",
      "Nama & dukungan berbeda antar DBMS (EXCEPT vs MINUS)."
     ],
     "quiz": {
      "title": "Kuis — DQL (Query Data)",
      "sub": "5 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "Apa beda WHERE dan HAVING?",
        "options": [
         "Sama",
         "WHERE menyaring baris sebelum agregasi; HAVING menyaring grup sesudah agregasi",
         "HAVING lebih cepat",
         "WHERE hanya untuk angka"
        ],
        "answer": 1,
        "explain": "Sesuai urutan eksekusi: WHERE jalan sebelum GROUP BY, HAVING sesudahnya untuk memfilter hasil agregat."
       },
       {
        "q": "INNER JOIN menghasilkan…",
        "options": [
         "Semua baris kedua tabel",
         "Hanya baris yang cocok di kedua tabel",
         "Semua baris kiri",
         "Semua kombinasi"
        ],
        "answer": 1,
        "explain": "INNER JOIN hanya mengembalikan baris yang punya pasangan cocok di kedua tabel berdasarkan kondisi ON."
       },
       {
        "q": "Mengapa LIKE '%kata' bisa lambat di tabel besar?",
        "options": [
         "Selalu error",
         "Wildcard di depan menonaktifkan penggunaan index → full scan",
         "Karena huruf besar",
         "Tidak didukung MySQL"
        ],
        "answer": 1,
        "explain": "Pola berawalan wildcard tak bisa memanfaatkan index B-tree, memaksa pemindaian seluruh tabel."
       },
       {
        "q": "Tanpa ORDER BY, urutan baris hasil query…",
        "options": [
         "Selalu berdasarkan id",
         "Tidak dijamin",
         "Selalu acak",
         "Selalu terbalik"
        ],
        "answer": 1,
        "explain": "DBMS tidak menjamin urutan tanpa ORDER BY; jangan pernah mengandalkan urutan 'kebetulan'."
       },
       {
        "q": "NOT IN bisa memberi hasil kosong tak terduga bila subquery-nya…",
        "options": [
         "Kosong",
         "Mengandung NULL",
         "Punya index",
         "Terlalu besar"
        ],
        "answer": 1,
        "explain": "NULL dalam daftar NOT IN membuat seluruh kondisi jadi UNKNOWN. Pakai NOT EXISTS untuk aman terhadap NULL."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "dcl",
   "title": "DCL — Data Control Language",
   "lectures": [
    {
     "id": "grant",
     "title": "GRANT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memberikan hak akses (privilege) kepada pengguna atau role.</p><h4>Kapan dipakai</h4><p>Saat memberi hak akses spesifik (SELECT, INSERT, dll) ke user/role sesuai prinsip least privilege.</p><h4>Contoh penggunaan</h4><pre><code>GRANT SELECT, INSERT ON karyawan TO 'user_hr'@'localhost';\nGRANT ALL PRIVILEGES ON perusahaan.* TO 'admin'@'%';\nGRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Memberi ALL PRIVILEGES atau WITH GRANT OPTION sembarangan = risiko keamanan besar. Beri seminimal yang diperlukan.</p></div>",
     "takeaways": [
      "GRANT memberi hak akses ke user/role.",
      "Terapkan least privilege: beri hak seminimal mungkin, hindari ALL PRIVILEGES sembarangan."
     ]
    },
    {
     "id": "revoke",
     "title": "REVOKE",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mencabut hak akses yang sebelumnya diberikan kepada pengguna.</p><h4>Kapan dipakai</h4><p>Saat mencabut hak akses yang sudah tidak diperlukan atau saat audit keamanan.</p><h4>Contoh penggunaan</h4><pre><code>REVOKE INSERT ON karyawan FROM 'user_hr'@'localhost';\nREVOKE ALL PRIVILEGES ON perusahaan.* FROM 'admin'@'%';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Mencabut hak yang masih dipakai aplikasi akan menyebabkan error akses mendadak.</p></div>",
     "takeaways": [
      "REVOKE mencabut hak akses yang sebelumnya diberikan.",
      "Pastikan tak ada layanan yang masih bergantung pada hak itu."
     ]
    },
    {
     "id": "create-user",
     "title": "CREATE USER",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membuat pengguna baru di database.</p><h4>Kapan dipakai</h4><p>Saat membuat akun database baru untuk orang atau aplikasi.</p><h4>Contoh penggunaan</h4><pre><code>CREATE USER 'user_hr'@'localhost' IDENTIFIED BY 'password123';\nCREATE USER 'api_user'@'%' IDENTIFIED BY 'api_secret';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Password lemah atau host '%' (boleh dari mana saja) tanpa alasan = risiko. Batasi host bila bisa.</p></div>",
     "takeaways": [
      "CREATE USER membuat akun database baru.",
      "Pakai password kuat & batasi host akses ('localhost' bila memungkinkan)."
     ]
    },
    {
     "id": "drop-user",
     "title": "DROP USER",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus pengguna dari database.</p><h4>Kapan dipakai</h4><p>Saat akun tidak diperlukan lagi (karyawan keluar, layanan dimatikan).</p><h4>Contoh penggunaan</h4><pre><code>DROP USER 'user_hr'@'localhost';</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Objek yang dimiliki user itu atau koneksi aktif bisa terdampak. Tinjau dependensi dulu.</p></div>",
     "takeaways": [
      "DROP USER menghapus akun database.",
      "Tinjau objek/koneksi yang bergantung pada user sebelum menghapus."
     ],
     "quiz": {
      "title": "Kuis — DCL (Kontrol Akses)",
      "sub": "2 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "Prinsip keamanan yang dianut saat memberi hak akses adalah…",
        "options": [
         "Beri semua hak agar praktis",
         "Least privilege — beri hak seminimal yang diperlukan",
         "Hapus semua user",
         "Selalu pakai root"
        ],
        "answer": 1,
        "explain": "GRANT sebaiknya mengikuti least privilege; hindari ALL PRIVILEGES/WITH GRANT OPTION sembarangan."
       },
       {
        "q": "GRANT dan REVOKE masing-masing…",
        "options": [
         "Membuat & menghapus tabel",
         "Memberi & mencabut hak akses",
         "Memulai & mengakhiri transaksi",
         "Membuat index"
        ],
        "answer": 1,
        "explain": "GRANT memberi privilege ke user/role; REVOKE mencabutnya."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "tcl",
   "title": "TCL — Transaction Control Language",
   "lectures": [
    {
     "id": "commit",
     "title": "COMMIT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menyimpan semua perubahan transaksi secara permanen ke database.</p><h4>Kapan dipakai</h4><p>Saat semua langkah dalam transaksi sukses dan perubahan ingin dibuat permanen.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  UPDATE rekening SET saldo = saldo - 100000 WHERE id = 1;\n  UPDATE rekening SET saldo = saldo + 100000 WHERE id = 2;\nCOMMIT;</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>Lupa COMMIT membuat perubahan tak tersimpan (atau ter-rollback saat sesi putus) pada mode transaksi manual.</p></div>",
     "takeaways": [
      "COMMIT menyimpan permanen semua perubahan dalam transaksi.",
      "Tanpa COMMIT, perubahan bisa hilang saat sesi berakhir (mode manual)."
     ]
    },
    {
     "id": "rollback",
     "title": "ROLLBACK",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membatalkan semua perubahan transaksi yang belum di-commit.</p><h4>Kapan dipakai</h4><p>Saat terjadi kesalahan di tengah transaksi dan semua perubahan perlu dibatalkan agar data tetap konsisten.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  DELETE FROM karyawan WHERE id = 5;\nROLLBACK;  -- Pembatalan, data tidak jadi dihapus</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>ROLLBACK hanya membatalkan sampai awal transaksi (atau SAVEPOINT). DDL seperti CREATE/DROP sering auto-commit &amp; tak bisa di-rollback.</p></div>",
     "takeaways": [
      "ROLLBACK membatalkan perubahan transaksi yang belum di-commit.",
      "Menjaga konsistensi saat ada error; DDL umumnya tak bisa di-rollback."
     ]
    },
    {
     "id": "savepoint",
     "title": "SAVEPOINT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menandai titik tertentu dalam transaksi untuk rollback sebagian.</p><h4>Kapan dipakai</h4><p>Saat transaksi panjang perlu titik pemulihan parsial supaya tak harus membatalkan semuanya.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  UPDATE karyawan SET gaji = 6000000 WHERE id = 1;\nSAVEPOINT sp1;\n  UPDATE karyawan SET gaji = 7000000 WHERE id = 2;\nROLLBACK TO sp1;  -- Hanya batalkan update id=2</code></pre><div class=\"box warn\"><div class=\"bx-title\">▲ Jebakan umum</div><p>SAVEPOINT menambah kompleksitas; pastikan logika rollback parsialnya benar agar tak meninggalkan data setengah jadi.</p></div>",
     "takeaways": [
      "SAVEPOINT menandai titik untuk rollback sebagian dalam satu transaksi.",
      "Berguna untuk transaksi panjang; jaga logikanya tetap jelas."
     ]
    },
    {
     "id": "set-autocommit",
     "title": "SET AUTOCOMMIT",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengaktifkan atau menonaktifkan commit otomatis setiap perintah DML.</p><h4>Contoh penggunaan</h4><pre><code>SET AUTOCOMMIT = 0;  -- Nonaktifkan autocommit (MySQL)\nSET AUTOCOMMIT = 1;  -- Aktifkan kembali</code></pre>",
     "takeaways": [
      "SET AUTOCOMMIT — Mengaktifkan atau menonaktifkan commit otomatis setiap perintah DML.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ],
     "quiz": {
      "title": "Kuis — TCL (Transaksi)",
      "sub": "3 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "COMMIT berfungsi untuk…",
        "options": [
         "Membatalkan perubahan",
         "Menyimpan permanen perubahan transaksi",
         "Membuat savepoint",
         "Mengunci tabel"
        ],
        "answer": 1,
        "explain": "COMMIT menyimpan seluruh perubahan transaksi secara permanen (Durability dalam ACID)."
       },
       {
        "q": "ROLLBACK dipakai saat…",
        "options": [
         "Transaksi sukses",
         "Terjadi error & perubahan perlu dibatalkan agar data konsisten",
         "Ingin mempercepat query",
         "Membuat user"
        ],
        "answer": 1,
        "explain": "ROLLBACK membatalkan perubahan yang belum di-commit, menjaga konsistensi saat ada kegagalan."
       },
       {
        "q": "SAVEPOINT memungkinkan…",
        "options": [
         "Rollback sebagian dalam satu transaksi",
         "Menghapus database",
         "Menggandakan tabel",
         "Mengatur hak akses"
        ],
        "answer": 0,
        "explain": "SAVEPOINT menandai titik agar bisa rollback parsial tanpa membatalkan seluruh transaksi panjang."
       }
      ]
     }
    }
   ]
  },
  {
   "id": "func",
   "title": "Fungsi Bawaan SQL",
   "lectures": [
    {
     "id": "count",
     "title": "COUNT()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghitung jumlah baris atau nilai yang tidak NULL.</p><h4>Contoh penggunaan</h4><pre><code>SELECT COUNT(*) FROM karyawan;\nSELECT COUNT(DISTINCT divisi) FROM karyawan;</code></pre>",
     "takeaways": [
      "COUNT() — Menghitung jumlah baris atau nilai yang tidak NULL.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "sum",
     "title": "SUM()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menjumlahkan nilai numerik dalam kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT SUM(gaji) AS total_gaji FROM karyawan;\nSELECT divisi, SUM(gaji) FROM karyawan GROUP BY divisi;</code></pre>",
     "takeaways": [
      "SUM() — Menjumlahkan nilai numerik dalam kolom.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "avg",
     "title": "AVG()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghitung rata-rata nilai numerik dalam kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT AVG(gaji) AS rata_rata FROM karyawan;\nSELECT divisi, ROUND(AVG(gaji),2) FROM karyawan GROUP BY divisi;</code></pre>",
     "takeaways": [
      "AVG() — Menghitung rata-rata nilai numerik dalam kolom.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "min-max",
     "title": "MIN() / MAX()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil nilai terkecil atau terbesar dari kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT MIN(gaji), MAX(gaji) FROM karyawan;\nSELECT MIN(tanggal_masuk) AS paling_lama FROM karyawan;</code></pre>",
     "takeaways": [
      "MIN() / MAX() — Mengambil nilai terkecil atau terbesar dari kolom.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "upper-lower",
     "title": "UPPER() / LOWER()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengubah teks menjadi huruf kapital semua atau huruf kecil semua.</p><h4>Contoh penggunaan</h4><pre><code>SELECT UPPER(nama), LOWER(email) FROM karyawan;</code></pre>",
     "takeaways": [
      "UPPER() / LOWER() — Mengubah teks menjadi huruf kapital semua atau huruf kecil semua.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "concat",
     "title": "CONCAT()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menggabungkan dua atau lebih string menjadi satu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT CONCAT(nama, ' - ', divisi) AS info FROM karyawan;\nSELECT CONCAT_WS(', ', nama, divisi, kota) FROM karyawan;</code></pre>",
     "takeaways": [
      "CONCAT() — Menggabungkan dua atau lebih string menjadi satu.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "length-len",
     "title": "LENGTH() / LEN()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghitung panjang karakter dalam string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, LENGTH(nama) AS panjang FROM karyawan; -- MySQL/PostgreSQL\nSELECT nama, LEN(nama) AS panjang FROM karyawan;    -- SQL Server</code></pre>",
     "takeaways": [
      "LENGTH() / LEN() — Menghitung panjang karakter dalam string.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "substring",
     "title": "SUBSTRING()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil sebagian karakter dari string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT SUBSTRING(nama, 1, 3) AS tiga_huruf FROM karyawan;\nSELECT SUBSTR(nama, 1, 3) FROM karyawan; -- Oracle/MySQL</code></pre>",
     "takeaways": [
      "SUBSTRING() — Mengambil sebagian karakter dari string.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "trim",
     "title": "TRIM()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghapus spasi (atau karakter tertentu) dari awal dan akhir string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT TRIM(nama) FROM karyawan;\nSELECT LTRIM(nama), RTRIM(nama) FROM karyawan;  -- SQL Server</code></pre>",
     "takeaways": [
      "TRIM() — Menghapus spasi (atau karakter tertentu) dari awal dan akhir string.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "replace",
     "title": "REPLACE()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengganti kemunculan substring tertentu dalam string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT REPLACE(no_telp, '-', '') AS telp_bersih FROM karyawan;</code></pre>",
     "takeaways": [
      "REPLACE() — Mengganti kemunculan substring tertentu dalam string.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "now-getdate",
     "title": "NOW() / GETDATE()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengambil tanggal dan waktu saat ini.</p><h4>Contoh penggunaan</h4><pre><code>SELECT NOW();           -- MySQL\nSELECT GETDATE();       -- SQL Server\nSELECT CURRENT_TIMESTAMP; -- Standar SQL</code></pre>",
     "takeaways": [
      "NOW() / GETDATE() — Mengambil tanggal dan waktu saat ini.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "date-format",
     "title": "DATE_FORMAT()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memformat tampilan tanggal sesuai pola tertentu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT DATE_FORMAT(tanggal_masuk, '%d/%m/%Y') AS tgl FROM karyawan;\nSELECT FORMAT(tanggal_masuk, 'dd/MM/yyyy') FROM karyawan; -- SQL Server</code></pre>",
     "takeaways": [
      "DATE_FORMAT() — Memformat tampilan tanggal sesuai pola tertentu.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "datediff",
     "title": "DATEDIFF()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Menghitung selisih hari antara dua tanggal.</p><h4>Contoh penggunaan</h4><pre><code>SELECT DATEDIFF(NOW(), tanggal_masuk) AS hari_kerja FROM karyawan;\nSELECT DATEDIFF(day, '2020-01-01', GETDATE()) AS selisih; -- SQL Server</code></pre>",
     "takeaways": [
      "DATEDIFF() — Menghitung selisih hari antara dua tanggal.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "coalesce",
     "title": "COALESCE()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengembalikan nilai pertama yang tidak NULL dari daftar argumen.</p><h4>Contoh penggunaan</h4><pre><code>SELECT COALESCE(telepon, email, 'Tidak ada kontak') AS kontak\nFROM karyawan;</code></pre>",
     "takeaways": [
      "COALESCE() — Mengembalikan nilai pertama yang tidak NULL dari daftar argumen.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "nullif",
     "title": "NULLIF()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengembalikan NULL jika dua argumen sama, selain itu mengembalikan argumen pertama.</p><h4>Contoh penggunaan</h4><pre><code>SELECT NULLIF(nilai, 0) AS nilai_valid FROM data;\n-- Berguna untuk menghindari division by zero:\nSELECT total / NULLIF(pembagi, 0) FROM tabel;</code></pre>",
     "takeaways": [
      "NULLIF() — Mengembalikan NULL jika dua argumen sama, selain itu mengembalikan argumen pertama.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "round",
     "title": "ROUND()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Membulatkan angka ke jumlah desimal tertentu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT ROUND(gaji / 1000000, 2) AS gaji_juta FROM karyawan;\nSELECT ROUND(3.14159, 2);  -- Hasil: 3.14</code></pre>",
     "takeaways": [
      "ROUND() — Membulatkan angka ke jumlah desimal tertentu.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "cast-convert",
     "title": "CAST() / CONVERT()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengonversi tipe data satu kolom ke tipe lain.</p><h4>Contoh penggunaan</h4><pre><code>SELECT CAST(gaji AS VARCHAR(20)) FROM karyawan;\nSELECT CONVERT(VARCHAR, tanggal_masuk, 103) FROM karyawan; -- SQL Server (103 = dd/mm/yyyy)</code></pre>",
     "takeaways": [
      "CAST() / CONVERT() — Mengonversi tipe data satu kolom ke tipe lain.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "ifnull-isnull",
     "title": "IFNULL() / ISNULL()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengganti nilai NULL dengan nilai default yang ditentukan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT IFNULL(divisi, 'Belum ditentukan') FROM karyawan; -- MySQL\nSELECT ISNULL(divisi, 'Belum ditentukan') FROM karyawan; -- SQL Server</code></pre>",
     "takeaways": [
      "IFNULL() / ISNULL() — Mengganti nilai NULL dengan nilai default yang ditentukan.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "row-number",
     "title": "ROW_NUMBER()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memberi nomor urut pada setiap baris dalam partisi hasil query.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  ROW_NUMBER() OVER (PARTITION BY divisi ORDER BY gaji DESC) AS ranking\nFROM karyawan;</code></pre>",
     "takeaways": [
      "ROW_NUMBER() — Memberi nomor urut pada setiap baris dalam partisi hasil query.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "rank-dense-rank",
     "title": "RANK() / DENSE_RANK()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Memberi peringkat dengan atau tanpa celah untuk nilai yang sama.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  RANK()       OVER (ORDER BY gaji DESC) AS rank,\n  DENSE_RANK() OVER (ORDER BY gaji DESC) AS dense_rank\nFROM karyawan;</code></pre>",
     "takeaways": [
      "RANK() / DENSE_RANK() — Memberi peringkat dengan atau tanpa celah untuk nilai yang sama.",
      "Lihat contoh di atas dan coba langsung di database uji."
     ]
    },
    {
     "id": "lag-lead",
     "title": "LAG() / LEAD()",
     "dur": "perintah",
     "body": "<p class=\"lead\">Mengakses nilai dari baris sebelumnya (LAG) atau berikutnya (LEAD).</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  LAG(gaji)  OVER (ORDER BY id) AS gaji_sebelumnya,\n  LEAD(gaji) OVER (ORDER BY id) AS gaji_berikutnya\nFROM karyawan;</code></pre>",
     "takeaways": [
      "LAG() / LEAD() — Mengakses nilai dari baris sebelumnya (LAG) atau berikutnya (LEAD).",
      "Lihat contoh di atas dan coba langsung di database uji."
     ],
     "quiz": {
      "title": "Kuis — Fungsi Bawaan",
      "sub": "2 soal · pilih satu jawaban",
      "questions": [
       {
        "q": "Fungsi seperti COUNT, SUM, AVG disebut fungsi…",
        "options": [
         "String",
         "Agregat",
         "Tanggal",
         "Kontrol"
        ],
        "answer": 1,
        "explain": "Fungsi agregat meringkas banyak baris menjadi satu nilai, biasanya dipakai dengan GROUP BY."
       },
       {
        "q": "Untuk menghitung jumlah baris per kelompok, kombinasi yang tepat adalah…",
        "options": [
         "SELECT tanpa apa-apa",
         "COUNT(*) dengan GROUP BY",
         "DROP TABLE",
         "ORDER BY saja"
        ],
        "answer": 1,
        "explain": "COUNT(*) + GROUP BY menghasilkan jumlah baris untuk tiap kelompok."
       }
      ]
     }
    }
   ]
  }
 ]
};
