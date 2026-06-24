/* Builder materi SQL — gabungkan data perintah asli + pendalaman + fondasi + kuis.
   Output: src/data/courses/sql.js (JSON, aman dari backtick). Jalankan: node scripts/build_sql.cjs */
const fs = require("fs");
const UP = "/sessions/affectionate-trusting-einstein/mnt/uploads/kumpulan query sql.html";
const slug = (s, fb) => (s||fb).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,48)||fb;
const esc = (s) => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const code = (s) => "<pre><code>" + esc(s) + "</code></pre>";

/* ---- ambil data perintah dari HTML asli ---- */
const raw = fs.readFileSync(UP, "utf8");
function grab(label){
  let i=raw.indexOf(label), j=i+label.length;
  while(raw[j]!=="{"&&raw[j]!=="[")j++;
  const open=raw[j],close=open==="{"?"}":"]";let d=0,inS=false,q="",p="";
  for(let k=j;k<raw.length;k++){const c=raw[k];
    if(inS){if(c===q&&p!=="\\")inS=false;p=c;continue;}
    if(c==='"'||c==="'"||c==="`"){inS=true;q=c;p=c;continue;}
    if(c===open)d++;else if(c===close){d--;if(!d)return raw.slice(j,k+1);}p=c;}
}
const sections = new Function("return ("+grab("const sections =")+")")();
const data = new Function("return ("+grab("const data =")+")")();

/* ---- pendalaman per perintah: kapan dipakai + jebakan + takeaways ---- */
const E = {
"CREATE TABLE":{when:"Saat mendefinisikan struktur data baru: tentukan kolom, tipe data, dan constraint (PRIMARY KEY, NOT NULL, UNIQUE) sejak awal.",pitfall:"Lupa menetapkan PRIMARY KEY, atau memakai tipe data terlalu longgar (mis. VARCHAR(255) untuk semua). Tipe yang tepat menghemat ruang & mencegah data sampah.",tk:["CREATE TABLE mendefinisikan skema: kolom + tipe + constraint.","Tetapkan PRIMARY KEY dan tipe data yang tepat sejak awal — sulit diubah setelah ada banyak data."]},
"ALTER TABLE":{when:"Saat struktur tabel perlu berubah setelah tabel berisi data: menambah kolom, mengubah tipe, atau menambah constraint/index.",pitfall:"ALTER pada tabel besar bisa mengunci tabel & lama. MODIFY tipe kolom bisa memotong/menolak data lama yang tak cocok.",tk:["ALTER TABLE mengubah struktur tabel yang sudah ada.","Pada tabel besar, ALTER bisa lambat & mengunci — rencanakan di jam sepi."]},
"DROP TABLE":{when:"Saat tabel benar-benar tidak diperlukan lagi. Pakai IF EXISTS agar skrip tidak error bila tabel sudah tiada.",pitfall:"DROP menghapus struktur + SEMUA data permanen, tidak seperti DELETE. Tidak ada undo tanpa backup.",tk:["DROP TABLE menghapus tabel beserta seluruh datanya secara permanen.","Selalu pastikan backup; pakai IF EXISTS untuk skrip yang aman diulang."]},
"TRUNCATE TABLE":{when:"Saat ingin mengosongkan SELURUH isi tabel dengan cepat tapi mempertahankan strukturnya (mis. reset tabel staging).",pitfall:"TRUNCATE tidak bisa di-rollback di banyak DBMS dan mengabaikan trigger DELETE. Untuk hapus sebagian, pakai DELETE.",tk:["TRUNCATE mengosongkan tabel jauh lebih cepat dari DELETE semua baris.","Biasanya tak bisa di-rollback & me-reset AUTO_INCREMENT — hati-hati."]},
"CREATE DATABASE":{when:"Saat memulai proyek/aplikasi baru yang butuh wadah data tersendiri.",pitfall:"Lupa menetapkan charset/collation (mis. utf8mb4) bisa bikin masalah emoji & karakter non-latin di kemudian hari.",tk:["CREATE DATABASE membuat wadah baru untuk tabel-tabel.","Tetapkan charset utf8mb4 sejak awal untuk dukungan karakter penuh."]},
"DROP DATABASE":{when:"Saat seluruh database tidak diperlukan lagi (mis. membersihkan lingkungan uji).",pitfall:"Menghapus SEMUA tabel & data dalam database sekaligus. Sangat destruktif — pastikan database yang benar.",tk:["DROP DATABASE menghapus database beserta semua objek di dalamnya.","Periksa dua kali nama database — tidak ada undo."]},
"CREATE INDEX":{when:"Saat kolom sering dipakai di WHERE/JOIN/ORDER BY dan tabel cukup besar sehingga pencarian terasa lambat.",pitfall:"Index mempercepat baca tapi memperlambat tulis (INSERT/UPDATE) & memakan ruang. Jangan meng-index semua kolom.",tk:["Index mempercepat pencarian pada kolom yang sering difilter/di-join.","Trade-off: baca lebih cepat, tulis lebih lambat + ruang ekstra — pilih kolom dengan bijak."]},
"DROP INDEX":{when:"Saat sebuah index ternyata jarang dipakai atau justru membebani operasi tulis.",pitfall:"Menghapus index yang masih dipakai query penting bisa membuat query mendadak lambat.",tk:["Hapus index yang tak terpakai untuk mempercepat tulis & menghemat ruang.","Pastikan tidak ada query penting yang bergantung padanya dulu."]},
"CREATE VIEW":{when:"Saat ingin menyederhanakan query rumit yang sering dipakai, atau membatasi kolom yang boleh dilihat pengguna tertentu.",pitfall:"View bukan tabel — query di baliknya tetap dijalankan tiap akses. View berlapis-lapis bisa jadi lambat & sulit dilacak.",tk:["VIEW = query SELECT tersimpan yang bisa dipakai seperti tabel virtual.","Berguna menyederhanakan & membatasi akses, tapi tetap mengeksekusi query aslinya."]},
"RENAME TABLE":{when:"Saat mengganti nama tabel (mis. saat refactor skema atau swap tabel hasil migrasi).",pitfall:"Referensi lama (kode aplikasi, view, foreign key) ke nama lama akan rusak setelah rename.",tk:["RENAME mengganti nama tabel.","Perbarui semua referensi (kode, view, FK) yang memakai nama lama."]},
"INSERT INTO":{when:"Saat menambahkan baris data baru, satu per satu atau banyak sekaligus (bulk insert lebih efisien).",pitfall:"Urutan VALUES harus cocok dengan kolom. Insert tanpa menyebut kolom rapuh bila struktur berubah. Insert satu-satu untuk ribuan baris lambat — pakai bulk.",tk:["INSERT menambah baris baru; bisa multi-baris sekaligus (bulk) untuk efisiensi.","Selalu sebut nama kolom secara eksplisit agar tahan perubahan struktur."]},
"UPDATE":{when:"Saat mengubah nilai pada baris yang sudah ada, dipersempit dengan WHERE.",pitfall:"UPDATE TANPA WHERE mengubah SEMUA baris! Selalu uji dengan SELECT + WHERE yang sama lebih dulu.",tk:["UPDATE mengubah data; WHERE menentukan baris mana.","UPDATE tanpa WHERE mengubah seluruh tabel — kesalahan klasik yang fatal."]},
"DELETE":{when:"Saat menghapus baris tertentu berdasarkan kondisi WHERE.",pitfall:"DELETE TANPA WHERE menghapus semua baris. Untuk mengosongkan seluruh tabel lebih cepat pakai TRUNCATE.",tk:["DELETE menghapus baris sesuai WHERE; bisa di-rollback dalam transaksi.","DELETE tanpa WHERE menghapus semua baris — uji dengan SELECT dulu."]},
"MERGE (UPSERT)":{when:"Saat ingin 'insert kalau belum ada, update kalau sudah ada' dalam satu operasi (sinkronisasi data).",pitfall:"Sintaks berbeda antar DBMS (MERGE, INSERT ... ON DUPLICATE KEY, ON CONFLICT). Butuh kunci unik untuk mendeteksi kecocokan.",tk:["MERGE/UPSERT menggabungkan INSERT & UPDATE berdasarkan kecocokan kunci.","Sintaksnya beragam antar database — sesuaikan dengan DBMS-mu."]},
"SELECT":{when:"Operasi paling sering: membaca data. Sebut kolom yang dibutuhkan, hindari SELECT * di produksi.",pitfall:"SELECT * mengambil semua kolom (boros & rapuh bila struktur berubah). Sebutkan kolom yang benar-benar dipakai.",tk:["SELECT membaca data dari tabel.","Sebut kolom spesifik (bukan SELECT *) untuk performa & kejelasan."]},
"WHERE":{when:"Saat memfilter baris sebelum agregasi/pengelompokan.",pitfall:"Fungsi pada kolom di WHERE (mis. WHERE YEAR(tgl)=2024) sering menonaktifkan index. Bandingkan kolom apa adanya bila bisa.",tk:["WHERE memfilter baris berdasarkan kondisi, sebelum GROUP BY.","Hindari membungkus kolom dengan fungsi di WHERE agar index tetap terpakai."]},
"ORDER BY":{when:"Saat hasil perlu diurutkan untuk ditampilkan atau dipaginasi.",pitfall:"Mengurutkan kolom tanpa index pada data besar itu mahal. Tanpa ORDER BY, urutan baris TIDAK dijamin.",tk:["ORDER BY mengurutkan hasil (ASC/DESC) dan bisa multi-kolom.","Tanpa ORDER BY, urutan hasil tidak dijamin — jangan mengandalkannya."]},
"GROUP BY":{when:"Saat meringkas data per kelompok (mis. total/ rata-rata per divisi).",pitfall:"Kolom di SELECT yang bukan agregat harus ada di GROUP BY (di mode SQL ketat). Salah paham urutan eksekusi sering bikin error.",tk:["GROUP BY mengelompokkan baris untuk fungsi agregat (COUNT, SUM, AVG).","Kolom non-agregat di SELECT wajib ikut di GROUP BY."]},
"HAVING":{when:"Saat memfilter HASIL agregasi (mis. divisi dengan rata-rata gaji > X).",pitfall:"Jangan tertukar dengan WHERE: WHERE memfilter baris sebelum agregasi, HAVING memfilter grup sesudah agregasi.",tk:["HAVING memfilter hasil GROUP BY berdasarkan kondisi agregat.","WHERE = sebelum agregasi; HAVING = sesudah agregasi."]},
"INNER JOIN":{when:"Saat butuh baris yang punya pasangan cocok di kedua tabel.",pitfall:"Lupa kondisi ON menghasilkan cross join (ledakan baris). Pastikan kolom join punya index.",tk:["INNER JOIN hanya mengambil baris yang cocok di kedua tabel.","Selalu sertakan kondisi ON; index kolom join agar cepat."],diagram:true},
"LEFT JOIN":{when:"Saat ingin SEMUA baris tabel kiri, plus data kanan bila ada (sisanya NULL).",pitfall:"Memfilter kolom tabel kanan di WHERE diam-diam mengubah LEFT JOIN jadi seperti INNER JOIN. Taruh kondisi kanan di ON.",tk:["LEFT JOIN: semua baris kiri + yang cocok dari kanan (NULL bila tak ada).","Kondisi pada tabel kanan sebaiknya di ON, bukan WHERE, agar baris kiri tetap muncul."]},
"RIGHT JOIN":{when:"Kebalikan LEFT JOIN: semua baris kanan + yang cocok dari kiri. Jarang dipakai; biasanya ditulis ulang jadi LEFT JOIN.",pitfall:"Membingungkan dibaca. Banyak tim menstandarkan LEFT JOIN saja untuk konsistensi.",tk:["RIGHT JOIN: semua baris kanan + yang cocok dari kiri.","Sering bisa ditulis ulang sebagai LEFT JOIN demi keterbacaan."]},
"FULL OUTER JOIN":{when:"Saat butuh semua baris dari kedua tabel, cocok maupun tidak (mis. rekonsiliasi dua sumber).",pitfall:"MySQL tidak mendukung FULL OUTER JOIN langsung — disimulasikan dengan UNION dari LEFT & RIGHT JOIN.",tk:["FULL OUTER JOIN menggabungkan semua baris kedua tabel (yang tak cocok jadi NULL).","Tidak didukung MySQL secara langsung — pakai UNION dari LEFT+RIGHT."]},
"CROSS JOIN":{when:"Saat sengaja butuh semua kombinasi (mis. membuat matriks ukuran x warna).",pitfall:"Tanpa kondisi, menghasilkan perkalian kartesius — jumlah baris meledak (A x B). Sering muncul tak sengaja karena lupa ON.",tk:["CROSS JOIN menghasilkan semua kombinasi baris dua tabel.","Hati-hati ledakan baris; pastikan memang disengaja."]},
"SELF JOIN":{when:"Saat baris dalam satu tabel berelasi dengan baris lain di tabel yang sama (mis. karyawan & manajernya).",pitfall:"Wajib pakai alias berbeda untuk dua salinan tabel, kalau tidak ambigu.",tk:["SELF JOIN menggabungkan tabel dengan dirinya sendiri memakai alias.","Berguna untuk hubungan hierarkis (atasan-bawahan, kategori-subkategori)."]},
"UNION / UNION ALL":{when:"Saat menggabungkan hasil dua query yang berstruktur kolom sama (mis. data dari dua tabel mirip).",pitfall:"UNION menghapus duplikat (lebih lambat); UNION ALL mempertahankan semua (lebih cepat). Jumlah & tipe kolom harus cocok.",tk:["UNION menggabung hasil & menghapus duplikat; UNION ALL pertahankan semua (lebih cepat).","Jumlah dan tipe kolom kedua query harus sama."]},
"SUBQUERY":{when:"Saat butuh hasil sebuah query sebagai input query lain (filter, nilai, atau tabel sementara).",pitfall:"Subquery berkorelasi (mengacu baris luar) bisa berjalan per-baris dan lambat; sering bisa ditulis ulang jadi JOIN.",tk:["Subquery = query di dalam query, dipakai sebagai filter/nilai/sumber.","Subquery berkorelasi bisa lambat — pertimbangkan menulis ulang sebagai JOIN."]},
"LIMIT / TOP":{when:"Saat membatasi jumlah baris (preview data atau pagination dengan OFFSET).",pitfall:"OFFSET besar tetap memindai baris yang dilewati (lambat untuk halaman jauh). Sintaks beda: LIMIT (MySQL/PostgreSQL) vs TOP (SQL Server).",tk:["LIMIT/TOP membatasi jumlah baris; OFFSET untuk pagination.","OFFSET besar lambat — untuk data besar gunakan keyset pagination (WHERE id > ...)."]},
"DISTINCT":{when:"Saat ingin nilai unik (mis. daftar divisi yang ada).",pitfall:"DISTINCT pada banyak kolom + data besar mahal. Kadang menutupi masalah JOIN yang menghasilkan duplikat.",tk:["DISTINCT menghapus baris duplikat dari hasil.","Duplikat tak terduga sering pertanda JOIN yang kurang tepat — periksa dulu."]},
"IN / NOT IN":{when:"Saat memeriksa keanggotaan dalam daftar nilai atau hasil subquery.",pitfall:"NOT IN dengan subquery yang berisi NULL bisa mengembalikan hasil kosong tak terduga. Untuk itu lebih aman NOT EXISTS.",tk:["IN memeriksa nilai ada dalam daftar/subquery.","Hati-hati NOT IN bila subquery mengandung NULL — gunakan NOT EXISTS."]},
"BETWEEN":{when:"Saat memfilter rentang inklusif (angka atau tanggal).",pitfall:"BETWEEN inklusif di kedua ujung. Untuk tanggal, BETWEEN '2024-01-01' AND '2024-12-31' bisa melewatkan waktu di tanggal akhir — pertimbangkan < hari berikutnya.",tk:["BETWEEN memfilter rentang dan inklusif di kedua ujung.","Untuk timestamp, waspadai batas akhir; pakai >= awal AND < hari berikutnya."]},
"LIKE":{when:"Saat mencari pola teks: % (banyak karakter), _ (satu karakter).",pitfall:"Pola diawali wildcard (LIKE '%abc') tidak bisa memakai index → pemindaian penuh. Untuk pencarian teks berat, pakai full-text index.",tk:["LIKE mencari pola: % = banyak karakter, _ = satu karakter.","Wildcard di depan ('%x') menonaktifkan index — hindari untuk data besar."]},
"IS NULL / IS NOT NULL":{when:"Saat memeriksa ketiadaan nilai (NULL).",pitfall:"NULL bukan nilai — tidak bisa dibandingkan dengan = atau !=. Harus IS NULL / IS NOT NULL.",tk:["NULL berarti 'tidak ada nilai', bukan 0 atau string kosong.","Bandingkan NULL hanya dengan IS NULL / IS NOT NULL, bukan = atau !=."]},
"EXISTS / NOT EXISTS":{when:"Saat memeriksa apakah subquery menghasilkan baris (cek keberadaan relasi).",pitfall:"EXISTS sering lebih efisien dari IN untuk subquery besar, dan aman terhadap NULL (tidak seperti NOT IN).",tk:["EXISTS bernilai benar jika subquery menghasilkan minimal satu baris.","NOT EXISTS lebih aman daripada NOT IN saat ada kemungkinan NULL."]},
"CASE WHEN":{when:"Saat butuh logika kondisional (IF-THEN-ELSE) di dalam query, mis. mengkategorikan nilai.",pitfall:"Lupa ELSE membuat nilai tak terkategori jadi NULL. Urutan WHEN penting — yang pertama cocok yang menang.",tk:["CASE WHEN memberi logika IF-THEN-ELSE di dalam SELECT.","Sertakan ELSE & perhatikan urutan WHEN (yang cocok pertama menang)."]},
"WITH (CTE)":{when:"Saat memecah query rumit jadi langkah-langkah terbaca, atau untuk query rekursif (hierarki).",pitfall:"CTE mempermudah baca, tapi tidak selalu lebih cepat. CTE rekursif tanpa kondisi berhenti bisa loop tak terbatas.",tk:["CTE (WITH) = query sementara bernama yang membuat query rumit lebih terbaca.","Mendukung rekursi untuk data hierarkis; pastikan ada kondisi berhenti."]},
"INTERSECT":{when:"Saat butuh baris yang ADA di kedua hasil query (irisan).",pitfall:"Tidak didukung semua DBMS (MySQL lama tidak). Bisa ditiru dengan INNER JOIN / IN.",tk:["INTERSECT mengambil baris yang muncul di kedua query.","Tak ada di semua DBMS — alternatif: INNER JOIN atau IN."]},
"EXCEPT / MINUS":{when:"Saat butuh baris dari query pertama yang TIDAK ada di query kedua (selisih).",pitfall:"Namanya beda: EXCEPT (SQL Server/PostgreSQL) vs MINUS (Oracle). MySQL tidak mendukung langsung.",tk:["EXCEPT/MINUS mengambil selisih: baris query-1 yang tak ada di query-2.","Nama & dukungan berbeda antar DBMS (EXCEPT vs MINUS)."]},
"GRANT":{when:"Saat memberi hak akses spesifik (SELECT, INSERT, dll) ke user/role sesuai prinsip least privilege.",pitfall:"Memberi ALL PRIVILEGES atau WITH GRANT OPTION sembarangan = risiko keamanan besar. Beri seminimal yang diperlukan.",tk:["GRANT memberi hak akses ke user/role.","Terapkan least privilege: beri hak seminimal mungkin, hindari ALL PRIVILEGES sembarangan."]},
"REVOKE":{when:"Saat mencabut hak akses yang sudah tidak diperlukan atau saat audit keamanan.",pitfall:"Mencabut hak yang masih dipakai aplikasi akan menyebabkan error akses mendadak.",tk:["REVOKE mencabut hak akses yang sebelumnya diberikan.","Pastikan tak ada layanan yang masih bergantung pada hak itu."]},
"CREATE USER":{when:"Saat membuat akun database baru untuk orang atau aplikasi.",pitfall:"Password lemah atau host '%' (boleh dari mana saja) tanpa alasan = risiko. Batasi host bila bisa.",tk:["CREATE USER membuat akun database baru.","Pakai password kuat & batasi host akses ('localhost' bila memungkinkan)."]},
"DROP USER":{when:"Saat akun tidak diperlukan lagi (karyawan keluar, layanan dimatikan).",pitfall:"Objek yang dimiliki user itu atau koneksi aktif bisa terdampak. Tinjau dependensi dulu.",tk:["DROP USER menghapus akun database.","Tinjau objek/koneksi yang bergantung pada user sebelum menghapus."]},
"COMMIT":{when:"Saat semua langkah dalam transaksi sukses dan perubahan ingin dibuat permanen.",pitfall:"Lupa COMMIT membuat perubahan tak tersimpan (atau ter-rollback saat sesi putus) pada mode transaksi manual.",tk:["COMMIT menyimpan permanen semua perubahan dalam transaksi.","Tanpa COMMIT, perubahan bisa hilang saat sesi berakhir (mode manual)."]},
"ROLLBACK":{when:"Saat terjadi kesalahan di tengah transaksi dan semua perubahan perlu dibatalkan agar data tetap konsisten.",pitfall:"ROLLBACK hanya membatalkan sampai awal transaksi (atau SAVEPOINT). DDL seperti CREATE/DROP sering auto-commit & tak bisa di-rollback.",tk:["ROLLBACK membatalkan perubahan transaksi yang belum di-commit.","Menjaga konsistensi saat ada error; DDL umumnya tak bisa di-rollback."]},
"SAVEPOINT":{when:"Saat transaksi panjang perlu titik pemulihan parsial supaya tak harus membatalkan semuanya.",pitfall:"SAVEPOINT menambah kompleksitas; pastikan logika rollback parsialnya benar agar tak meninggalkan data setengah jadi.",tk:["SAVEPOINT menandai titik untuk rollback sebagian dalam satu transaksi.","Berguna untuk transaksi panjang; jaga logikanya tetap jelas."]},
};

/* default body builder */
function buildBody(d){
  const e = E[d.cmd] || {};
  let b = '<p class="lead">' + d.desc + '</p>';
  if (e.when) b += '<h4>Kapan dipakai</h4><p>' + e.when + '</p>';
  b += '<h4>Contoh penggunaan</h4>' + code(d.code);
  if (e.diagram) b += joinDiagram();
  if (e.pitfall) b += '<div class="box warn"><div class="bx-title">▲ Jebakan umum</div><p>' + e.pitfall + '</p></div>';
  return b;
}
function takeawaysFor(d){
  const e = E[d.cmd] || {};
  return e.tk || [d.cmd + " — " + d.desc, "Lihat contoh di atas dan coba langsung di database uji."];
}

function joinDiagram(){
  return '<figure class="fig"><svg viewBox="0 0 720 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jenis JOIN">' +
  '<text x="360" y="20" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Empat JOIN utama</text>' +
  grp(95,"INNER","irisan A &amp; B","#5fd98a",0.55) + grp(255,"LEFT","semua A + cocok B","#6ad7ff",-1) +
  grp(415,"RIGHT","semua B + cocok A","#f5b748",1) + grp(575,"FULL","semua A &amp; B","#fb7185",2) +
  '</svg><figcaption>INNER = irisan; LEFT/RIGHT = satu sisi penuh; FULL = gabungan keduanya.</figcaption></figure>';
}
function grp(x,label,sub,col,mode){
  let s='<circle cx="'+(x-14)+'" cy="80" r="26" fill="none" stroke="'+col+'" stroke-width="2"/>'+
        '<circle cx="'+(x+14)+'" cy="80" r="26" fill="none" stroke="'+col+'" stroke-width="2"/>';
  s+='<text x="'+x+'" y="120" text-anchor="middle" fill="'+col+'" font-family="monospace" font-size="11" font-weight="700">'+label+'</text>';
  s+='<text x="'+x+'" y="136" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="8.5">'+sub+'</text>';
  return s;
}

/* ---- BAB FONDASI (konsep) ---- */
const foundation = {
  id:"fondasi", title:"Fondasi SQL & Database Relasional",
  lectures:[
    { id:"apa-itu-sql", title:"Apa Itu Database, RDBMS & SQL?", dur:"konsep · ± 6 menit",
      body:'<p class="lead">SQL (Structured Query Language) adalah bahasa untuk berbicara dengan <strong>database relasional</strong> — tempat data disimpan rapi dalam tabel berisi baris &amp; kolom, seperti spreadsheet yang sangat disiplin dan saling terhubung.</p>'+
        '<h4>Istilah inti</h4><ul><li><strong>Tabel</strong> — kumpulan data sejenis (mis. tabel <em>karyawan</em>).</li><li><strong>Baris (row/record)</strong> — satu entitas (satu karyawan).</li><li><strong>Kolom (column/field)</strong> — satu atribut (nama, gaji) dengan tipe data tertentu.</li><li><strong>RDBMS</strong> — perangkat lunaknya: MySQL, PostgreSQL, SQL Server, Oracle, SQLite.</li></ul>'+
        '<figure class="fig"><svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomi tabel"><text x="320" y="20" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tabel: karyawan</text><rect x="60" y="34" width="520" height="28" fill="#15202b" stroke="#34475a"/><text x="120" y="53" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="11">id</text><text x="260" y="53" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="11">nama</text><text x="430" y="53" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="11">gaji</text><rect x="60" y="62" width="520" height="26" fill="#111922" stroke="#283643"/><rect x="60" y="88" width="520" height="26" fill="#15202b" stroke="#283643"/><g font-family="monospace" font-size="11" fill="#9fb4c4"><text x="120" y="79" text-anchor="middle">1</text><text x="260" y="79" text-anchor="middle">Budi</text><text x="430" y="79" text-anchor="middle">5.000.000</text><text x="120" y="105" text-anchor="middle">2</text><text x="260" y="105" text-anchor="middle">Sari</text><text x="430" y="105" text-anchor="middle">6.500.000</text></g><text x="35" y="79" fill="#f5b748" font-family="monospace" font-size="9" transform="rotate(-90 35 79)">baris</text><text x="120" y="138" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9">↑ kolom</text></svg><figcaption>Tabel = baris (entitas) x kolom (atribut bertipe). SQL membaca & mengubah isinya.</figcaption></figure>'+
        '<h4>Kategori perintah SQL</h4><p>Perintah SQL dikelompokkan agar mudah dipahami — dan itulah struktur bab-bab berikutnya:</p><ul><li><strong>DDL</strong> (Definition) — membuat/mengubah struktur: CREATE, ALTER, DROP.</li><li><strong>DML</strong> (Manipulation) — mengubah isi: INSERT, UPDATE, DELETE.</li><li><strong>DQL</strong> (Query) — membaca: SELECT &amp; kawan-kawannya.</li><li><strong>DCL</strong> (Control) — hak akses: GRANT, REVOKE.</li><li><strong>TCL</strong> (Transaction) — transaksi: COMMIT, ROLLBACK.</li></ul>',
      takeaways:["Database relasional menyimpan data dalam tabel (baris x kolom bertipe), dikelola RDBMS seperti MySQL/PostgreSQL.","SQL adalah bahasa untuk membuat, membaca, mengubah, dan mengatur data itu.","Perintah dikelompokkan: DDL (struktur), DML (isi), DQL (baca), DCL (akses), TCL (transaksi)."] },

    { id:"primary-foreign-key", title:"Kunci: Primary Key & Foreign Key", dur:"konsep · ± 7 menit",
      body:'<p class="lead">Kekuatan database relasional ada pada <strong>relasi</strong> antar-tabel, dan relasi dibangun lewat kunci: <em>primary key</em> menandai tiap baris secara unik, <em>foreign key</em> menghubungkan tabel.</p>'+
        '<h4>Primary Key (PK)</h4><p>Kolom (atau gabungan kolom) yang nilainya <strong>unik &amp; tidak NULL</strong> untuk tiap baris — identitas resmi baris itu, mis. <code>id</code>. Satu tabel punya satu primary key.</p>'+
        '<h4>Foreign Key (FK)</h4><p>Kolom di satu tabel yang <strong>menunjuk</strong> ke primary key tabel lain, membentuk relasi. Mis. <code>karyawan.divisi_id</code> menunjuk ke <code>divisi.id</code>. FK menjaga <strong>integritas referensial</strong>: kamu tak bisa menautkan ke divisi yang tak ada.</p>'+
        '<figure class="fig"><svg viewBox="0 0 660 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Relasi primary key dan foreign key"><defs><marker id="ak" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs><rect x="40" y="50" width="220" height="80" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="150" y="72" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">karyawan</text><text x="150" y="94" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">id (PK), nama,</text><text x="150" y="110" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9.5">divisi_id (FK)</text><rect x="400" y="50" width="220" height="80" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="510" y="72" text-anchor="middle" fill="#6ad7ff" font-family="monospace" font-size="11" font-weight="700">divisi</text><text x="510" y="98" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9.5">id (PK)</text><text x="510" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">nama_divisi</text><line x1="260" y1="106" x2="398" y2="92" stroke="#4fe0d0" stroke-width="2" marker-end="url(#ak)"/><text x="330" y="90" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">menunjuk ke</text></svg><figcaption>FK <code>divisi_id</code> menunjuk PK <code>divisi.id</code> — inilah cara tabel saling terhubung.</figcaption></figure>'+
        '<div class="box tip"><div class="bx-title">◇ Kenapa penting</div><p>PK &amp; FK mencegah data kacau (duplikat, yatim/tanpa induk) dan memungkinkan JOIN — menggabungkan data antar-tabel yang akan kamu pakai terus di DQL.</p></div>',
      takeaways:["Primary Key = identitas unik & non-NULL tiap baris (satu per tabel).","Foreign Key = kolom yang menunjuk PK tabel lain, membentuk relasi & menjaga integritas referensial.","PK/FK adalah fondasi JOIN dan mencegah data duplikat/yatim."] },

    { id:"normalisasi", title:"Normalisasi: Menata Data Tanpa Redundansi", dur:"konsep · ± 7 menit",
      body:'<p class="lead">Normalisasi adalah proses menata tabel agar setiap fakta disimpan <strong>satu kali saja</strong> — mengurangi duplikasi dan anomali saat data berubah.</p>'+
        '<h4>Masalah tabel tak ternormalisasi</h4><p>Bayangkan tabel <em>pesanan</em> yang menyimpan nama &amp; alamat pelanggan di setiap baris pesanan. Bila pelanggan pindah alamat, kamu harus mengubah banyak baris — dan kalau terlewat, data jadi tidak konsisten.</p>'+
        '<h4>Tiga bentuk normal (ringkas)</h4><ul><li><strong>1NF</strong> — tiap sel berisi satu nilai (tak ada daftar/koma dalam satu kolom), ada kunci unik.</li><li><strong>2NF</strong> — sudah 1NF + setiap kolom bergantung pada SELURUH primary key (relevan untuk PK gabungan).</li><li><strong>3NF</strong> — sudah 2NF + tak ada kolom yang bergantung pada kolom non-kunci (pisahkan ke tabel sendiri, mis. data pelanggan ke tabel <em>pelanggan</em>).</li></ul>'+
        '<div class="box warn"><div class="bx-title">▲ Seimbang, bukan dogma</div><p>Normalisasi mengurangi redundansi, tapi terlalu banyak tabel bisa memperlambat baca karena butuh banyak JOIN. Di sistem analitik, sebagian data sengaja <em>didenormalisasi</em> demi kecepatan. Pahami trade-off-nya.</p></div>',
      takeaways:["Normalisasi menyimpan tiap fakta sekali untuk mencegah duplikasi & anomali update.","Praktisnya: 1NF (satu nilai per sel), 2NF & 3NF (pisahkan data yang bergantung ke tabel sendiri).","Trade-off: lebih ternormalisasi = sedikit redundansi tapi lebih banyak JOIN; denormalisasi dipakai untuk kecepatan baca."] },

    { id:"index-performa", title:"Index & Performa Query", dur:"konsep · ± 7 menit",
      body:'<p class="lead">Index adalah struktur tambahan (umumnya B-tree) yang membuat pencarian baris secepat mencari kata di indeks buku — tanpa membaca seluruh halaman.</p>'+
        '<h4>Tanpa vs dengan index</h4><p>Tanpa index, mencari <code>WHERE email = ...</code> memaksa database memindai SELURUH tabel (full table scan). Dengan index pada <code>email</code>, database langsung melompat ke barisnya.</p>'+
        '<figure class="fig"><svg viewBox="0 0 680 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Full scan vs index"><rect x="30" y="40" width="300" height="60" rx="8" fill="#15202b" stroke="#fb7185"/><text x="180" y="64" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">Tanpa index</text><text x="180" y="84" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">periksa semua baris (lambat)</text><rect x="360" y="40" width="300" height="60" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="510" y="64" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">Dengan index</text><text x="510" y="84" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">lompat langsung ke baris (cepat)</text></svg><figcaption>Index mengubah pencarian dari "baca semua" menjadi "lompat tepat sasaran".</figcaption></figure>'+
        '<h4>Harga yang dibayar</h4><ul><li>Setiap INSERT/UPDATE/DELETE harus memperbarui index juga → tulis sedikit lebih lambat.</li><li>Index memakan ruang penyimpanan.</li><li>Index pada kolom yang jarang difilter = mubazir.</li></ul>'+
        '<div class="box tip"><div class="bx-title">◇ Aturan praktis</div><p>Index-kan kolom yang sering muncul di <code>WHERE</code>, <code>JOIN ... ON</code>, dan <code>ORDER BY</code>. Gunakan <code>EXPLAIN</code> untuk melihat apakah query memakai index atau melakukan full scan.</p></div>',
      takeaways:["Index mempercepat pencarian dengan melompat ke baris, menghindari full table scan.","Trade-off: mempercepat baca tapi memperlambat tulis & memakan ruang.","Index-kan kolom di WHERE/JOIN/ORDER BY; verifikasi dengan EXPLAIN."] },

    { id:"transaksi-acid", title:"Transaksi & ACID", dur:"konsep · ± 7 menit",
      body:'<p class="lead">Transaksi mengelompokkan beberapa operasi menjadi satu unit "semua-atau-tidak". Contoh klasik: transfer uang — kurangi saldo A dan tambah saldo B harus berhasil bersama, atau dibatalkan bersama.</p>'+
        '<h4>Alur transaksi</h4>' + code("BEGIN TRANSACTION;\n  UPDATE rekening SET saldo = saldo - 100000 WHERE id = 1;\n  UPDATE rekening SET saldo = saldo + 100000 WHERE id = 2;\nCOMMIT;   -- atau ROLLBACK bila ada yang gagal") +
        '<h4>Empat jaminan ACID</h4><ul><li><strong>Atomicity</strong> — semua langkah berhasil, atau tak satu pun (tak ada transfer setengah jadi).</li><li><strong>Consistency</strong> — database berpindah dari satu keadaan valid ke keadaan valid lain (constraint tetap terjaga).</li><li><strong>Isolation</strong> — transaksi yang berjalan bersamaan tidak saling mengacaukan.</li><li><strong>Durability</strong> — setelah COMMIT, perubahan bertahan walau listrik mati.</li></ul>'+
        '<div class="box warn"><div class="bx-title">▲ Kapan wajib transaksi</div><p>Gunakan transaksi setiap kali beberapa perubahan harus konsisten bersama (keuangan, stok, pemindahan data). Tanpa transaksi, kegagalan di tengah meninggalkan data setengah jadi.</p></div>',
      takeaways:["Transaksi = unit 'semua-atau-tidak' untuk beberapa operasi sekaligus.","ACID: Atomicity, Consistency, Isolation, Durability — jaminan keandalan database.","Pakai transaksi untuk operasi yang harus konsisten bersama (mis. transfer, stok)."] },

    { id:"anatomi-query", title:"Anatomi & Urutan Eksekusi SELECT", dur:"konsep · ± 6 menit",
      body:'<p class="lead">SELECT ditulis dengan urutan tertentu, tapi database <strong>mengeksekusinya dengan urutan berbeda</strong>. Memahami ini menjelaskan banyak kebingungan (mis. kenapa alias SELECT tak bisa dipakai di WHERE).</p>'+
        '<h4>Urutan logis eksekusi</h4>'+
        '<figure class="fig"><svg viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Urutan eksekusi SELECT"><defs><marker id="aq" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>'+
        ['FROM','WHERE','GROUP BY','HAVING','SELECT','ORDER BY','LIMIT'].map((t,i)=>'<rect x="'+(12+i*98)+'" y="44" width="86" height="30" rx="6" fill="#15202b" stroke="'+(i===4?'#5fd98a':'#34475a')+'"/><text x="'+(55+i*98)+'" y="63" text-anchor="middle" fill="'+(i===4?'#5fd98a':'#9fb4c4')+'" font-family="monospace" font-size="10">'+t+'</text>'+(i<6?'<line x1="'+(98+i*98)+'" y1="59" x2="'+(110+i*98)+'" y2="59" stroke="#4fe0d0" stroke-width="1.5" marker-end="url(#aq)"/>':'')).join('')+
        '<text x="350" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="12" font-weight="700">Urutan EKSEKUSI (bukan urutan tulis)</text></svg><figcaption>Data disaring (WHERE) sebelum dikelompokkan (GROUP BY) & dipilih (SELECT). ORDER BY & LIMIT paling akhir.</figcaption></figure>'+
        '<p>Karena <code>SELECT</code> dijalankan setelah <code>WHERE</code> &amp; <code>GROUP BY</code>, alias yang dibuat di SELECT belum ada saat WHERE berjalan — itulah kenapa kamu tak bisa memfilternya di WHERE (pakai HAVING atau subquery).</p>',
      takeaways:["Urutan eksekusi: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT.","WHERE menyaring sebelum agregasi; HAVING menyaring sesudahnya.","Alias di SELECT belum tersedia saat WHERE — gunakan HAVING/subquery untuk memfilternya."] },
  ],
};

/* ---- KUIS per kategori ---- */
const quizzes = {
 DDL:{title:"Kuis — DDL (Definisi Struktur)",sub:"4 soal · pilih satu jawaban",questions:[
  {q:"Perintah mana yang menghapus SELURUH baris tapi mempertahankan struktur tabel, biasanya tak bisa di-rollback?",options:["DELETE","DROP TABLE","TRUNCATE TABLE","ALTER TABLE"],answer:2,explain:"TRUNCATE mengosongkan tabel dengan cepat & mempertahankan struktur; umumnya tak bisa di-rollback dan me-reset AUTO_INCREMENT."},
  {q:"Apa beda DROP TABLE dan DELETE?",options:["Sama saja","DROP menghapus struktur+data permanen; DELETE menghapus baris (bisa di-WHERE & rollback)","DELETE lebih cepat","DROP hanya menghapus index"],answer:1,explain:"DROP membuang tabel sepenuhnya; DELETE menghapus baris terpilih dan bisa di-rollback dalam transaksi."},
  {q:"Kapan CREATE INDEX paling tepat?",options:["Pada semua kolom","Pada kolom yang sering difilter/di-join pada tabel besar","Hanya pada kolom teks","Tidak pernah perlu"],answer:1,explain:"Index membantu kolom yang sering muncul di WHERE/JOIN/ORDER BY; meng-index semua kolom justru memperlambat tulis."},
  {q:"Mengapa menetapkan PRIMARY KEY & tipe data tepat sejak CREATE TABLE itu penting?",options:["Hanya formalitas","Sulit & berisiko diubah setelah tabel berisi banyak data","Mempercepat DROP","Agar tabel tak bisa diubah"],answer:1,explain:"Mengubah struktur tabel besar lewat ALTER bisa lambat & mengunci; rancang skema dengan benar sejak awal."},
 ]},
 DML:{title:"Kuis — DML (Manipulasi Data)",sub:"3 soal · pilih satu jawaban",questions:[
  {q:"Apa risiko terbesar menjalankan UPDATE atau DELETE?",options:["Terlalu lambat","Lupa WHERE → mengubah/menghapus SEMUA baris","Menghapus index","Mengubah tipe kolom"],answer:1,explain:"UPDATE/DELETE tanpa WHERE berdampak ke seluruh tabel. Uji dulu dengan SELECT memakai WHERE yang sama."},
  {q:"Cara paling efisien memasukkan ribuan baris adalah…",options:["INSERT satu per satu","Bulk insert (banyak baris sekaligus)","UPDATE","MERGE"],answer:1,explain:"Bulk insert jauh lebih cepat daripada ribuan INSERT terpisah karena mengurangi overhead per-operasi."},
  {q:"MERGE/UPSERT berguna untuk…",options:["Menghapus tabel","'Insert kalau belum ada, update kalau sudah ada'","Membuat index","Mengatur hak akses"],answer:1,explain:"UPSERT menggabungkan INSERT & UPDATE berdasarkan kecocokan kunci unik — ideal untuk sinkronisasi data."},
 ]},
 DQL:{title:"Kuis — DQL (Query Data)",sub:"5 soal · pilih satu jawaban",questions:[
  {q:"Apa beda WHERE dan HAVING?",options:["Sama","WHERE menyaring baris sebelum agregasi; HAVING menyaring grup sesudah agregasi","HAVING lebih cepat","WHERE hanya untuk angka"],answer:1,explain:"Sesuai urutan eksekusi: WHERE jalan sebelum GROUP BY, HAVING sesudahnya untuk memfilter hasil agregat."},
  {q:"INNER JOIN menghasilkan…",options:["Semua baris kedua tabel","Hanya baris yang cocok di kedua tabel","Semua baris kiri","Semua kombinasi"],answer:1,explain:"INNER JOIN hanya mengembalikan baris yang punya pasangan cocok di kedua tabel berdasarkan kondisi ON."},
  {q:"Mengapa LIKE '%kata' bisa lambat di tabel besar?",options:["Selalu error","Wildcard di depan menonaktifkan penggunaan index → full scan","Karena huruf besar","Tidak didukung MySQL"],answer:1,explain:"Pola berawalan wildcard tak bisa memanfaatkan index B-tree, memaksa pemindaian seluruh tabel."},
  {q:"Tanpa ORDER BY, urutan baris hasil query…",options:["Selalu berdasarkan id","Tidak dijamin","Selalu acak","Selalu terbalik"],answer:1,explain:"DBMS tidak menjamin urutan tanpa ORDER BY; jangan pernah mengandalkan urutan 'kebetulan'."},
  {q:"NOT IN bisa memberi hasil kosong tak terduga bila subquery-nya…",options:["Kosong","Mengandung NULL","Punya index","Terlalu besar"],answer:1,explain:"NULL dalam daftar NOT IN membuat seluruh kondisi jadi UNKNOWN. Pakai NOT EXISTS untuk aman terhadap NULL."},
 ]},
 DCL:{title:"Kuis — DCL (Kontrol Akses)",sub:"2 soal · pilih satu jawaban",questions:[
  {q:"Prinsip keamanan yang dianut saat memberi hak akses adalah…",options:["Beri semua hak agar praktis","Least privilege — beri hak seminimal yang diperlukan","Hapus semua user","Selalu pakai root"],answer:1,explain:"GRANT sebaiknya mengikuti least privilege; hindari ALL PRIVILEGES/WITH GRANT OPTION sembarangan."},
  {q:"GRANT dan REVOKE masing-masing…",options:["Membuat & menghapus tabel","Memberi & mencabut hak akses","Memulai & mengakhiri transaksi","Membuat index"],answer:1,explain:"GRANT memberi privilege ke user/role; REVOKE mencabutnya."},
 ]},
 TCL:{title:"Kuis — TCL (Transaksi)",sub:"3 soal · pilih satu jawaban",questions:[
  {q:"COMMIT berfungsi untuk…",options:["Membatalkan perubahan","Menyimpan permanen perubahan transaksi","Membuat savepoint","Mengunci tabel"],answer:1,explain:"COMMIT menyimpan seluruh perubahan transaksi secara permanen (Durability dalam ACID)."},
  {q:"ROLLBACK dipakai saat…",options:["Transaksi sukses","Terjadi error & perubahan perlu dibatalkan agar data konsisten","Ingin mempercepat query","Membuat user"],answer:1,explain:"ROLLBACK membatalkan perubahan yang belum di-commit, menjaga konsistensi saat ada kegagalan."},
  {q:"SAVEPOINT memungkinkan…",options:["Rollback sebagian dalam satu transaksi","Menghapus database","Menggandakan tabel","Mengatur hak akses"],answer:0,explain:"SAVEPOINT menandai titik agar bisa rollback parsial tanpa membatalkan seluruh transaksi panjang."},
 ]},
 FUNC:{title:"Kuis — Fungsi Bawaan",sub:"2 soal · pilih satu jawaban",questions:[
  {q:"Fungsi seperti COUNT, SUM, AVG disebut fungsi…",options:["String","Agregat","Tanggal","Kontrol"],answer:1,explain:"Fungsi agregat meringkas banyak baris menjadi satu nilai, biasanya dipakai dengan GROUP BY."},
  {q:"Untuk menghitung jumlah baris per kelompok, kombinasi yang tepat adalah…",options:["SELECT tanpa apa-apa","COUNT(*) dengan GROUP BY","DROP TABLE","ORDER BY saja"],answer:1,explain:"COUNT(*) + GROUP BY menghasilkan jumlah baris untuk tiap kelompok."},
 ]},
};

/* ---- rakit course ---- */
const sectionsOrder = Object.keys(sections);
const chapters = [foundation];
sectionsOrder.forEach((cat)=>{
  const meta=sections[cat];
  const items=data.filter(d=>d.cat===cat);
  const lectures=items.map(d=>({ id:slug(d.cmd,"cmd"), title:d.cmd, dur:"perintah", body:buildBody(d), takeaways:takeawaysFor(d) }));
  // taruh kuis di materi terakhir kategori
  if(quizzes[cat] && lectures.length) lectures[lectures.length-1].quiz=quizzes[cat];
  chapters.push({ id:slug(cat,cat.toLowerCase()), title:meta.label, lectures });
});
// dedup lecture ids per chapter
chapters.forEach(c=>{const s={};c.lectures.forEach(l=>{if(s[l.id])l.id=l.id+"-"+(s[l.id]++);else s[l.id]=1;});});
const fixAmp=(s)=>s.replace(/&(?!amp;|lt;|gt;|quot;|#\d+;|#x[0-9a-fA-F]+;)/g,"&amp;");
chapters.forEach(c=>c.lectures.forEach(l=>{ if(l.body) l.body=fixAmp(l.body); }));

const course={ id:"sql", title:"Daftar Query SQL Lengkap", subtitle:"Dari fondasi database relasional sampai query mahir: konsep, kapan dipakai, jebakan, contoh & kuis.", kicker:"Database / SQL", accent:"#6ad7ff", icon:"🗄️", chapters };
fs.writeFileSync("src/data/courses/sql.js","/* Materi SQL — dibangun oleh scripts/build_sql.cjs (data asli + pendalaman). */\nexport const course = "+JSON.stringify(course,null,1)+";\n");
const lc=chapters.reduce((a,c)=>a+c.lectures.length,0);
const qz=chapters.reduce((a,c)=>a+c.lectures.filter(l=>l.quiz).length,0);
console.log("SQL → bab:",chapters.length,"| materi:",lc,"| kuis:",qz);
