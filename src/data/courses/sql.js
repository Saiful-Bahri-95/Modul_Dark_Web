/* Materi: Daftar Query SQL Lengkap — dikonversi dari HTML asli ke format modul. */
export const course = {
 "id": "sql",
 "title": "Daftar Query SQL Lengkap",
 "subtitle": "Referensi perintah SQL: DDL, DML, DQL, DCL, TCL & fungsi bawaan.",
 "kicker": "Database",
 "accent": "#6ad7ff",
 "icon": "🗄️",
 "chapters": [
  {
   "id": "ddl",
   "title": "DDL — Data Definition Language",
   "lectures": [
    {
     "id": "create-table",
     "title": "CREATE TABLE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membuat tabel baru dalam database.</p><h4>Contoh penggunaan</h4><pre><code>CREATE TABLE karyawan (\n  id   INT PRIMARY KEY,\n  nama VARCHAR(100),\n  gaji DECIMAL(10,2)\n);</code></pre>"
    },
    {
     "id": "alter-table",
     "title": "ALTER TABLE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengubah struktur tabel yang sudah ada (tambah/hapus/ubah kolom).</p><h4>Contoh penggunaan</h4><pre><code>ALTER TABLE karyawan ADD COLUMN divisi VARCHAR(50);\nALTER TABLE karyawan DROP COLUMN divisi;\nALTER TABLE karyawan MODIFY COLUMN nama VARCHAR(200);</code></pre>"
    },
    {
     "id": "drop-table",
     "title": "DROP TABLE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus tabel beserta seluruh datanya secara permanen.</p><h4>Contoh penggunaan</h4><pre><code>DROP TABLE karyawan;\nDROP TABLE IF EXISTS karyawan;</code></pre>"
    },
    {
     "id": "truncate-table",
     "title": "TRUNCATE TABLE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus semua baris dalam tabel tetapi mempertahankan strukturnya.</p><h4>Contoh penggunaan</h4><pre><code>TRUNCATE TABLE karyawan;</code></pre>"
    },
    {
     "id": "create-database",
     "title": "CREATE DATABASE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membuat database baru.</p><h4>Contoh penggunaan</h4><pre><code>CREATE DATABASE perusahaan;</code></pre>"
    },
    {
     "id": "drop-database",
     "title": "DROP DATABASE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus database beserta semua objek di dalamnya.</p><h4>Contoh penggunaan</h4><pre><code>DROP DATABASE perusahaan;</code></pre>"
    },
    {
     "id": "create-index",
     "title": "CREATE INDEX",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membuat indeks pada kolom untuk mempercepat pencarian data.</p><h4>Contoh penggunaan</h4><pre><code>CREATE INDEX idx_nama ON karyawan(nama);\nCREATE UNIQUE INDEX idx_email ON karyawan(email);</code></pre>"
    },
    {
     "id": "drop-index",
     "title": "DROP INDEX",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus indeks yang sudah ada.</p><h4>Contoh penggunaan</h4><pre><code>DROP INDEX idx_nama ON karyawan;</code></pre>"
    },
    {
     "id": "create-view",
     "title": "CREATE VIEW",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membuat tampilan virtual dari hasil query SELECT.</p><h4>Contoh penggunaan</h4><pre><code>CREATE VIEW v_karyawan_aktif AS\n  SELECT id, nama, gaji\n  FROM karyawan\n  WHERE status = 'aktif';</code></pre>"
    },
    {
     "id": "rename-table",
     "title": "RENAME TABLE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengganti nama tabel.</p><h4>Contoh penggunaan</h4><pre><code>RENAME TABLE karyawan TO pegawai;</code></pre>"
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
     "dur": "referensi",
     "body": "<p class=\"lead\">Menambahkan baris baru ke dalam tabel.</p><h4>Contoh penggunaan</h4><pre><code>INSERT INTO karyawan (id, nama, gaji)\nVALUES (1, 'Budi', 5000000);\n\n-- Insert dari tabel lain\nINSERT INTO karyawan SELECT * FROM karyawan_lama;</code></pre>"
    },
    {
     "id": "update",
     "title": "UPDATE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengubah nilai kolom pada baris yang sudah ada.</p><h4>Contoh penggunaan</h4><pre><code>UPDATE karyawan\nSET gaji = 6000000, divisi = 'IT'\nWHERE id = 1;</code></pre>"
    },
    {
     "id": "delete",
     "title": "DELETE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus satu atau lebih baris dari tabel.</p><h4>Contoh penggunaan</h4><pre><code>DELETE FROM karyawan WHERE id = 1;\nDELETE FROM karyawan WHERE gaji &lt; 2000000;</code></pre>"
    },
    {
     "id": "merge-upsert",
     "title": "MERGE (UPSERT)",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menggabungkan operasi INSERT, UPDATE, DELETE dalam satu pernyataan.</p><h4>Contoh penggunaan</h4><pre><code>MERGE INTO karyawan AS target\nUSING sumber AS src ON target.id = src.id\nWHEN MATCHED THEN\n  UPDATE SET nama = src.nama\nWHEN NOT MATCHED THEN\n  INSERT VALUES (src.id, src.nama, src.gaji);</code></pre>"
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
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil/membaca data dari satu atau lebih tabel.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan;\nSELECT nama, gaji FROM karyawan;</code></pre>"
    },
    {
     "id": "where",
     "title": "WHERE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memfilter baris berdasarkan kondisi tertentu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE gaji &gt; 5000000;\nSELECT * FROM karyawan WHERE nama LIKE 'B%';</code></pre>"
    },
    {
     "id": "order-by",
     "title": "ORDER BY",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengurutkan hasil query secara ASC (naik) atau DESC (turun).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan ORDER BY gaji DESC;\nSELECT * FROM karyawan ORDER BY nama ASC, gaji DESC;</code></pre>"
    },
    {
     "id": "group-by",
     "title": "GROUP BY",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengelompokkan baris yang memiliki nilai kolom yang sama.</p><h4>Contoh penggunaan</h4><pre><code>SELECT divisi, COUNT(*) AS jumlah, AVG(gaji) AS rata_gaji\nFROM karyawan\nGROUP BY divisi;</code></pre>"
    },
    {
     "id": "having",
     "title": "HAVING",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memfilter hasil GROUP BY berdasarkan kondisi agregat.</p><h4>Contoh penggunaan</h4><pre><code>SELECT divisi, AVG(gaji) AS rata_gaji\nFROM karyawan\nGROUP BY divisi\nHAVING AVG(gaji) &gt; 4000000;</code></pre>"
    },
    {
     "id": "inner-join",
     "title": "INNER JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menggabungkan baris dari dua tabel yang memiliki nilai kolom yang cocok.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nINNER JOIN divisi d ON k.divisi_id = d.id;</code></pre>"
    },
    {
     "id": "left-join",
     "title": "LEFT JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil semua baris dari tabel kiri + baris yang cocok dari tabel kanan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nLEFT JOIN divisi d ON k.divisi_id = d.id;</code></pre>"
    },
    {
     "id": "right-join",
     "title": "RIGHT JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil semua baris dari tabel kanan + baris yang cocok dari tabel kiri.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nRIGHT JOIN divisi d ON k.divisi_id = d.id;</code></pre>"
    },
    {
     "id": "full-outer-join",
     "title": "FULL OUTER JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil semua baris dari kedua tabel, termasuk yang tidak cocok.</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, d.nama_divisi\nFROM karyawan k\nFULL OUTER JOIN divisi d ON k.divisi_id = d.id;</code></pre>"
    },
    {
     "id": "cross-join",
     "title": "CROSS JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghasilkan semua kombinasi baris dari dua tabel (cartesian product).</p><h4>Contoh penggunaan</h4><pre><code>SELECT k.nama, p.nama_proyek\nFROM karyawan k\nCROSS JOIN proyek p;</code></pre>"
    },
    {
     "id": "self-join",
     "title": "SELF JOIN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menggabungkan tabel dengan dirinya sendiri.</p><h4>Contoh penggunaan</h4><pre><code>SELECT a.nama AS karyawan, b.nama AS manajer\nFROM karyawan a\nJOIN karyawan b ON a.manajer_id = b.id;</code></pre>"
    },
    {
     "id": "union-union-all",
     "title": "UNION / UNION ALL",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menggabungkan hasil dua query. UNION hapus duplikat, UNION ALL pertahankan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan_aktif\nUNION\nSELECT nama FROM karyawan_pensiun;\n\n-- Dengan duplikat\nSELECT nama FROM tabel_a\nUNION ALL\nSELECT nama FROM tabel_b;</code></pre>"
    },
    {
     "id": "subquery",
     "title": "SUBQUERY",
     "dur": "referensi",
     "body": "<p class=\"lead\">Query di dalam query lain, digunakan sebagai filter atau sumber data.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan\nWHERE gaji &gt; (SELECT AVG(gaji) FROM karyawan);</code></pre>"
    },
    {
     "id": "limit-top",
     "title": "LIMIT / TOP",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membatasi jumlah baris yang dikembalikan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan LIMIT 10;          -- MySQL\nSELECT * FROM karyawan LIMIT 10 OFFSET 20; -- Pagination\nSELECT TOP 10 * FROM karyawan;             -- SQL Server</code></pre>"
    },
    {
     "id": "distinct",
     "title": "DISTINCT",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghilangkan baris duplikat dari hasil query.</p><h4>Contoh penggunaan</h4><pre><code>SELECT DISTINCT divisi FROM karyawan;</code></pre>"
    },
    {
     "id": "in-not-in",
     "title": "IN / NOT IN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memeriksa apakah nilai ada atau tidak dalam daftar nilai.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE divisi IN ('IT','HR','Finance');\nSELECT * FROM karyawan WHERE id NOT IN (1, 2, 3);</code></pre>"
    },
    {
     "id": "between",
     "title": "BETWEEN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memfilter nilai dalam rentang tertentu (inklusif di kedua ujung).</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE gaji BETWEEN 3000000 AND 7000000;\nSELECT * FROM orders WHERE order_date BETWEEN '2024-01-01' AND '2024-12-31';</code></pre>"
    },
    {
     "id": "like",
     "title": "LIKE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mencari pola teks. % = semua karakter, _ = tepat satu karakter.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE nama LIKE 'A%';    -- diawali A\nSELECT * FROM karyawan WHERE email LIKE '%@gmail.com';\nSELECT * FROM karyawan WHERE nama LIKE '_udi';    -- 4 huruf, akhir udi</code></pre>"
    },
    {
     "id": "is-null-is-not-null",
     "title": "IS NULL / IS NOT NULL",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memeriksa apakah nilai suatu kolom adalah NULL atau tidak.</p><h4>Contoh penggunaan</h4><pre><code>SELECT * FROM karyawan WHERE divisi IS NULL;\nSELECT * FROM karyawan WHERE email IS NOT NULL;</code></pre>"
    },
    {
     "id": "exists-not-exists",
     "title": "EXISTS / NOT EXISTS",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memeriksa apakah subquery mengembalikan setidaknya satu baris.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama FROM karyawan k\nWHERE EXISTS (\n  SELECT 1 FROM proyek p\n  WHERE p.karyawan_id = k.id\n);</code></pre>"
    },
    {
     "id": "case-when",
     "title": "CASE WHEN",
     "dur": "referensi",
     "body": "<p class=\"lead\">Logika kondisional (IF-THEN-ELSE) dalam query SELECT.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama,\n  CASE\n    WHEN gaji &gt; 7000000 THEN 'Senior'\n    WHEN gaji &gt; 4000000 THEN 'Middle'\n    ELSE 'Junior'\n  END AS level\nFROM karyawan;</code></pre>"
    },
    {
     "id": "with-cte",
     "title": "WITH (CTE)",
     "dur": "referensi",
     "body": "<p class=\"lead\">Common Table Expression — query sementara yang bisa direferensikan berkali-kali.</p><h4>Contoh penggunaan</h4><pre><code>WITH gaji_rata AS (\n  SELECT divisi, AVG(gaji) AS avg_gaji\n  FROM karyawan GROUP BY divisi\n)\nSELECT k.nama, g.avg_gaji\nFROM karyawan k\nJOIN gaji_rata g ON k.divisi = g.divisi;</code></pre>"
    },
    {
     "id": "intersect",
     "title": "INTERSECT",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil baris yang ada di kedua hasil query (irisan).</p><h4>Contoh penggunaan</h4><pre><code>SELECT id FROM karyawan_aktif\nINTERSECT\nSELECT id FROM karyawan_proyek_a;</code></pre>"
    },
    {
     "id": "except-minus",
     "title": "EXCEPT / MINUS",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil baris dari query pertama yang tidak ada di query kedua.</p><h4>Contoh penggunaan</h4><pre><code>SELECT id FROM karyawan\nEXCEPT\nSELECT id FROM karyawan_dipecat;   -- SQL Server/PostgreSQL\n\n-- Oracle menggunakan MINUS</code></pre>"
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
     "dur": "referensi",
     "body": "<p class=\"lead\">Memberikan hak akses (privilege) kepada pengguna atau role.</p><h4>Contoh penggunaan</h4><pre><code>GRANT SELECT, INSERT ON karyawan TO 'user_hr'@'localhost';\nGRANT ALL PRIVILEGES ON perusahaan.* TO 'admin'@'%';\nGRANT ALL PRIVILEGES ON *.* TO 'admin'@'%' WITH GRANT OPTION;</code></pre>"
    },
    {
     "id": "revoke",
     "title": "REVOKE",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mencabut hak akses yang sebelumnya diberikan kepada pengguna.</p><h4>Contoh penggunaan</h4><pre><code>REVOKE INSERT ON karyawan FROM 'user_hr'@'localhost';\nREVOKE ALL PRIVILEGES ON perusahaan.* FROM 'admin'@'%';</code></pre>"
    },
    {
     "id": "create-user",
     "title": "CREATE USER",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membuat pengguna baru di database.</p><h4>Contoh penggunaan</h4><pre><code>CREATE USER 'user_hr'@'localhost' IDENTIFIED BY 'password123';\nCREATE USER 'api_user'@'%' IDENTIFIED BY 'api_secret';</code></pre>"
    },
    {
     "id": "drop-user",
     "title": "DROP USER",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus pengguna dari database.</p><h4>Contoh penggunaan</h4><pre><code>DROP USER 'user_hr'@'localhost';</code></pre>"
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
     "dur": "referensi",
     "body": "<p class=\"lead\">Menyimpan semua perubahan transaksi secara permanen ke database.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  UPDATE rekening SET saldo = saldo - 100000 WHERE id = 1;\n  UPDATE rekening SET saldo = saldo + 100000 WHERE id = 2;\nCOMMIT;</code></pre>"
    },
    {
     "id": "rollback",
     "title": "ROLLBACK",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membatalkan semua perubahan transaksi yang belum di-commit.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  DELETE FROM karyawan WHERE id = 5;\nROLLBACK;  -- Pembatalan, data tidak jadi dihapus</code></pre>"
    },
    {
     "id": "savepoint",
     "title": "SAVEPOINT",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menandai titik tertentu dalam transaksi untuk rollback sebagian.</p><h4>Contoh penggunaan</h4><pre><code>BEGIN TRANSACTION;\n  UPDATE karyawan SET gaji = 6000000 WHERE id = 1;\nSAVEPOINT sp1;\n  UPDATE karyawan SET gaji = 7000000 WHERE id = 2;\nROLLBACK TO sp1;  -- Hanya batalkan update id=2</code></pre>"
    },
    {
     "id": "set-autocommit",
     "title": "SET AUTOCOMMIT",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengaktifkan atau menonaktifkan commit otomatis setiap perintah DML.</p><h4>Contoh penggunaan</h4><pre><code>SET AUTOCOMMIT = 0;  -- Nonaktifkan autocommit (MySQL)\nSET AUTOCOMMIT = 1;  -- Aktifkan kembali</code></pre>"
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
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghitung jumlah baris atau nilai yang tidak NULL.</p><h4>Contoh penggunaan</h4><pre><code>SELECT COUNT(*) FROM karyawan;\nSELECT COUNT(DISTINCT divisi) FROM karyawan;</code></pre>"
    },
    {
     "id": "sum",
     "title": "SUM()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menjumlahkan nilai numerik dalam kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT SUM(gaji) AS total_gaji FROM karyawan;\nSELECT divisi, SUM(gaji) FROM karyawan GROUP BY divisi;</code></pre>"
    },
    {
     "id": "avg",
     "title": "AVG()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghitung rata-rata nilai numerik dalam kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT AVG(gaji) AS rata_rata FROM karyawan;\nSELECT divisi, ROUND(AVG(gaji),2) FROM karyawan GROUP BY divisi;</code></pre>"
    },
    {
     "id": "min-max",
     "title": "MIN() / MAX()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil nilai terkecil atau terbesar dari kolom.</p><h4>Contoh penggunaan</h4><pre><code>SELECT MIN(gaji), MAX(gaji) FROM karyawan;\nSELECT MIN(tanggal_masuk) AS paling_lama FROM karyawan;</code></pre>"
    },
    {
     "id": "upper-lower",
     "title": "UPPER() / LOWER()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengubah teks menjadi huruf kapital semua atau huruf kecil semua.</p><h4>Contoh penggunaan</h4><pre><code>SELECT UPPER(nama), LOWER(email) FROM karyawan;</code></pre>"
    },
    {
     "id": "concat",
     "title": "CONCAT()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menggabungkan dua atau lebih string menjadi satu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT CONCAT(nama, ' - ', divisi) AS info FROM karyawan;\nSELECT CONCAT_WS(', ', nama, divisi, kota) FROM karyawan;</code></pre>"
    },
    {
     "id": "length-len",
     "title": "LENGTH() / LEN()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghitung panjang karakter dalam string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, LENGTH(nama) AS panjang FROM karyawan; -- MySQL/PostgreSQL\nSELECT nama, LEN(nama) AS panjang FROM karyawan;    -- SQL Server</code></pre>"
    },
    {
     "id": "substring",
     "title": "SUBSTRING()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil sebagian karakter dari string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT SUBSTRING(nama, 1, 3) AS tiga_huruf FROM karyawan;\nSELECT SUBSTR(nama, 1, 3) FROM karyawan; -- Oracle/MySQL</code></pre>"
    },
    {
     "id": "trim",
     "title": "TRIM()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghapus spasi (atau karakter tertentu) dari awal dan akhir string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT TRIM(nama) FROM karyawan;\nSELECT LTRIM(nama), RTRIM(nama) FROM karyawan;  -- SQL Server</code></pre>"
    },
    {
     "id": "replace",
     "title": "REPLACE()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengganti kemunculan substring tertentu dalam string.</p><h4>Contoh penggunaan</h4><pre><code>SELECT REPLACE(no_telp, '-', '') AS telp_bersih FROM karyawan;</code></pre>"
    },
    {
     "id": "now-getdate",
     "title": "NOW() / GETDATE()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengambil tanggal dan waktu saat ini.</p><h4>Contoh penggunaan</h4><pre><code>SELECT NOW();           -- MySQL\nSELECT GETDATE();       -- SQL Server\nSELECT CURRENT_TIMESTAMP; -- Standar SQL</code></pre>"
    },
    {
     "id": "date-format",
     "title": "DATE_FORMAT()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memformat tampilan tanggal sesuai pola tertentu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT DATE_FORMAT(tanggal_masuk, '%d/%m/%Y') AS tgl FROM karyawan;\nSELECT FORMAT(tanggal_masuk, 'dd/MM/yyyy') FROM karyawan; -- SQL Server</code></pre>"
    },
    {
     "id": "datediff",
     "title": "DATEDIFF()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Menghitung selisih hari antara dua tanggal.</p><h4>Contoh penggunaan</h4><pre><code>SELECT DATEDIFF(NOW(), tanggal_masuk) AS hari_kerja FROM karyawan;\nSELECT DATEDIFF(day, '2020-01-01', GETDATE()) AS selisih; -- SQL Server</code></pre>"
    },
    {
     "id": "coalesce",
     "title": "COALESCE()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengembalikan nilai pertama yang tidak NULL dari daftar argumen.</p><h4>Contoh penggunaan</h4><pre><code>SELECT COALESCE(telepon, email, 'Tidak ada kontak') AS kontak\nFROM karyawan;</code></pre>"
    },
    {
     "id": "nullif",
     "title": "NULLIF()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengembalikan NULL jika dua argumen sama, selain itu mengembalikan argumen pertama.</p><h4>Contoh penggunaan</h4><pre><code>SELECT NULLIF(nilai, 0) AS nilai_valid FROM data;\n-- Berguna untuk menghindari division by zero:\nSELECT total / NULLIF(pembagi, 0) FROM tabel;</code></pre>"
    },
    {
     "id": "round",
     "title": "ROUND()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Membulatkan angka ke jumlah desimal tertentu.</p><h4>Contoh penggunaan</h4><pre><code>SELECT ROUND(gaji / 1000000, 2) AS gaji_juta FROM karyawan;\nSELECT ROUND(3.14159, 2);  -- Hasil: 3.14</code></pre>"
    },
    {
     "id": "cast-convert",
     "title": "CAST() / CONVERT()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengonversi tipe data satu kolom ke tipe lain.</p><h4>Contoh penggunaan</h4><pre><code>SELECT CAST(gaji AS VARCHAR(20)) FROM karyawan;\nSELECT CONVERT(VARCHAR, tanggal_masuk, 103) FROM karyawan; -- SQL Server (103 = dd/mm/yyyy)</code></pre>"
    },
    {
     "id": "ifnull-isnull",
     "title": "IFNULL() / ISNULL()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengganti nilai NULL dengan nilai default yang ditentukan.</p><h4>Contoh penggunaan</h4><pre><code>SELECT IFNULL(divisi, 'Belum ditentukan') FROM karyawan; -- MySQL\nSELECT ISNULL(divisi, 'Belum ditentukan') FROM karyawan; -- SQL Server</code></pre>"
    },
    {
     "id": "row-number",
     "title": "ROW_NUMBER()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memberi nomor urut pada setiap baris dalam partisi hasil query.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  ROW_NUMBER() OVER (PARTITION BY divisi ORDER BY gaji DESC) AS ranking\nFROM karyawan;</code></pre>"
    },
    {
     "id": "rank-dense-rank",
     "title": "RANK() / DENSE_RANK()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Memberi peringkat dengan atau tanpa celah untuk nilai yang sama.</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  RANK()       OVER (ORDER BY gaji DESC) AS rank,\n  DENSE_RANK() OVER (ORDER BY gaji DESC) AS dense_rank\nFROM karyawan;</code></pre>"
    },
    {
     "id": "lag-lead",
     "title": "LAG() / LEAD()",
     "dur": "referensi",
     "body": "<p class=\"lead\">Mengakses nilai dari baris sebelumnya (LAG) atau berikutnya (LEAD).</p><h4>Contoh penggunaan</h4><pre><code>SELECT nama, gaji,\n  LAG(gaji)  OVER (ORDER BY id) AS gaji_sebelumnya,\n  LEAD(gaji) OVER (ORDER BY id) AS gaji_berikutnya\nFROM karyawan;</code></pre>"
    }
   ]
  }
 ]
};
