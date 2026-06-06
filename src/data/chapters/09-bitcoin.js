/* Bab 9 — id: "bitcoin"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"bitcoin",
      title:"Cryptocurrency — Bitcoin & Privasi Finansial",
      lectures:[
        {
          id:"btc-intro-note",
          title:"Catatan Pembuka: Lingkup & Hukum",
          dur:"baca dulu",
          body:`
            <p class="lead">Bab ini membahas <strong>literasi privasi finansial</strong>: cara kerja Bitcoin, dompet, transaksi, dan mengapa Bitcoin sebenarnya <em>tidak</em> seanonim yang dikira. Tujuannya memahami &amp; melindungi privasi finansialmu secara sah.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Bukan nasihat hukum/finansial</div>
              <p>Saya bukan penasihat hukum atau finansial. Aturan crypto (pajak, KYC/AML, pelaporan) berbeda tiap negara dan sering berubah — di Indonesia, perdagangan aset kripto diatur dan diawasi (kini di bawah OJK setelah peralihan dari Bappebti). <strong>Selalu periksa hukum yang berlaku di wilayahmu</strong> dan konsultasikan ke profesional bila perlu.</p>
            </div>

            <div class="box danger">
              <div class="bx-title">⚠ Garis batas bab ini</div>
              <p>Materi ini menjelaskan <em>konsep</em> (termasuk apa itu mixer dan realitas hukumnya), bukan panduan operasional untuk menyembunyikan asal dana ilegal, mengelabui KYC/AML, atau mencuci uang — semua itu adalah kejahatan. Gunakan untuk memahami privasi finansial yang sah.</p>
            </div>
          `,
          takeaways:[
            "Bab ini tentang literasi & privasi finansial yang sah, bukan menghindari hukum.",
            "Bukan nasihat hukum/finansial; aturan crypto beda tiap negara (di Indonesia diawasi OJK).",
            "Konsep dijelaskan, bukan panduan operasional untuk mencuci uang / mengelabui KYC."
          ]
        },
        {
          id:"btc-wallet-install",
          title:"Memasang Dompet Bitcoin (Wallet)",
          dur:"praktik",
          body:`
            <p class="lead">"Dompet" Bitcoin tidak benar-benar menyimpan koin — ia menyimpan <strong>kunci</strong> yang membuktikan kepemilikanmu atas saldo di blockchain. Memahami ini mengubah cara kamu memikirkan keamanan.</p>

            <h4>Jenis dompet</h4>
            <ul>
              <li><strong>Software wallet</strong> — aplikasi di komputer/HP (mis. Electrum). Praktis; keamanannya bergantung pada perangkatmu.</li>
              <li><strong>Hardware wallet</strong> — perangkat fisik khusus; kunci tak pernah meninggalkan perangkat. Paling aman untuk simpanan besar.</li>
              <li><strong>Hot vs cold</strong> — hot (terhubung internet, praktis, lebih berisiko) vs cold (offline, untuk simpanan jangka panjang).</li>
            </ul>

            <h4>Memasang dengan aman</h4>
            <ul>
              <li>Unduh hanya dari situs resmi dan <strong>verifikasi tanda tangannya</strong> (ingat Bab 8) — dompet palsu adalah penipuan klasik pencuri kunci.</li>
              <li>Electrum, misalnya, mendukung penggunaan lewat TOR untuk privasi jaringan.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Siapa yang memegang kunci privat, dialah pemilik koin. Dompet di bursa (custodial) berarti bursa yang memegang kuncimu — nyaman tapi kamu bergantung pada mereka.</p>
            </div>
          `,
          takeaways:[
            "Dompet menyimpan kunci, bukan koin; koin 'ada' di blockchain.",
            "Jenis: software vs hardware, hot vs cold — pilih sesuai jumlah & kebutuhan.",
            "Unduh resmi & verifikasi tanda tangan; 'pemegang kunci = pemilik'."
          ]
        },
        {
          id:"btc-wallet-create",
          title:"Membuat Dompet Bitcoin",
          dur:"praktik",
          body:`
            <p class="lead">Saat membuat dompet, intinya adalah <strong>seed phrase</strong> — deretan 12–24 kata yang merupakan cadangan induk seluruh kuncimu.</p>

            <h4>Langkah inti</h4>
            <ol>
              <li>Dompet menghasilkan <strong>seed phrase</strong>. Catat di kertas/offline, <em>jangan</em> difoto atau disimpan di cloud.</li>
              <li>Dompet menurunkan banyak <strong>alamat</strong> dari seed itu untuk menerima Bitcoin.</li>
              <li>Tetapkan kata sandi enkripsi dompet untuk melindungi file lokalnya.</li>
            </ol>

            <h4>Kenapa seed phrase begitu krusial</h4>
            <p>Siapa pun yang punya seed phrase-mu <strong>menguasai seluruh danamu</strong>, dan bila kamu kehilangannya, danamu hilang permanen — tak ada "lupa kata sandi". Inilah aset paling sensitif yang kamu pegang.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Lindungi seed phrase</div>
              <p>Simpan offline di tempat aman (idealnya cadangan di lebih dari satu lokasi fisik). Jangan pernah memasukkannya ke situs/aplikasi yang memintanya — itu hampir selalu penipuan.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan (aman):</strong> di dompet uji, buat dompet baru dan amati proses seed phrase &amp; pembuatan alamat. Jangan masukkan dana nyata; fokus memahami alurnya.</p>`,
          takeaways:[
            "Seed phrase (12–24 kata) adalah cadangan induk seluruh kuncimu.",
            "Catat offline; jangan foto/cloud; siapa punya seed menguasai dana.",
            "Lupa/hilang seed = dana hilang permanen."
          ]
        },
        {
          id:"btc-pseudonym",
          title:"Bitcoin itu Pseudonim, Bukan Anonim",
          dur:"konsep penting",
          body:`
            <p class="lead">Miskonsepsi terbesar: orang mengira Bitcoin anonim. Sebenarnya blockchain Bitcoin <strong>publik &amp; transparan permanen</strong> — setiap transaksi tercatat selamanya dan bisa dianalisis siapa saja.</p>

            <h4>Pseudonim, bukan anonim</h4>
            <p>Alamat Bitcoin adalah <em>pseudonim</em> — tidak langsung memuat namamu, tapi begitu satu alamat tertaut ke identitasmu (lewat KYC bursa, pengiriman, atau analisis), <strong>seluruh riwayat transaksimu bisa terungkap</strong>. Perusahaan analisis blockchain (chain analysis) ahli melakukan ini.</p>

            <h4>Bagaimana identitas tertaut</h4>
            <ul>
              <li><strong>KYC di bursa</strong> — saat kamu beli/jual lewat bursa yang memverifikasi identitas, alamatmu tertaut ke namamu.</li>
              <li><strong>Penggunaan ulang alamat</strong> — memakai satu alamat berkali-kali mengelompokkan transaksimu.</li>
              <li><strong>Pola &amp; waktu</strong> — chain analysis menggabungkan petunjuk untuk mengaitkan alamat.</li>
            </ul>

            <h4>Cara legal memperoleh Bitcoin (dan trade-off privasinya)</h4>
            <p>Bursa ber-KYC (paling diatur, paling sedikit privasi), layanan P2P, Bitcoin ATM, mining, atau menerima sebagai pembayaran. Masing-masing punya tingkat privasi &amp; persyaratan berbeda.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Privasi vs hukum</div>
              <p>Mencari privasi finansial itu sah. Tapi <strong>sengaja menghindari KYC/AML untuk menyembunyikan asal dana</strong>, atau berurusan dengan dana hasil kejahatan, bisa menjadi pelanggaran serius (pencucian uang). Privasi yang sah ≠ menyembunyikan kejahatan.</p>
            </div>
          `,
          takeaways:[
            "Blockchain Bitcoin publik & permanen; alamat = pseudonim, bukan anonim.",
            "Sekali satu alamat tertaut identitas (KYC/reuse/analisis), riwayat bisa terungkap.",
            "Cari privasi finansial itu sah; menghindari KYC untuk menyamarkan asal dana bisa = pencucian uang."
          ]
        },
        {
          id:"btc-atm",
          title:"Bitcoin ATM",
          dur:"konsep",
          body:`
            <p class="lead">Bitcoin ATM adalah mesin fisik untuk membeli (kadang menjual) Bitcoin dengan uang tunai/kartu. Praktis, tapi punya karakteristik biaya, KYC, dan risiko penipuan tersendiri.</p>

            <h4>Cara kerja &amp; karakteristik</h4>
            <ul>
              <li>Kamu masukkan uang, lalu Bitcoin dikirim ke alamat dompetmu (sering lewat scan QR).</li>
              <li><strong>Biaya tinggi</strong> — umumnya jauh lebih mahal daripada bursa.</li>
              <li><strong>KYC bervariasi</strong> — banyak mesin kini meminta verifikasi (HP, ID) terutama di atas nominal tertentu, mengikuti aturan AML setempat.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Magnet penipuan</div>
              <p>Bitcoin ATM banyak disalahgunakan dalam penipuan: korban ditipu agar menyetor tunai ke alamat penipu. <strong>Jangan pernah</strong> mengirim Bitcoin ke seseorang yang menelepon/mengancam (mengaku petugas pajak, polisi, dukungan teknis, dll.) — itu hampir pasti penipuan.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Legalitas &amp; persyaratan ATM crypto berbeda tiap negara. Periksa aturan setempat sebelum mengandalkannya.</p>
            </div>
          `,
          takeaways:[
            "Bitcoin ATM: beli/jual dengan tunai/kartu; biaya tinggi, KYC makin umum.",
            "Sering jadi sarana penipuan — jangan kirim BTC ke penelepon yang mengancam/mendesak.",
            "Legalitas & syarat beda tiap negara — periksa aturan setempat."
          ]
        },
        {
          id:"btc-p2p",
          title:"Layanan P2P (Peer-to-Peer)",
          dur:"konsep",
          body:`
            <p class="lead">Layanan P2P mempertemukan pembeli &amp; penjual langsung, sering dengan sistem escrow dan reputasi alih-alih satu bursa terpusat.</p>

            <h4>Cara kerja</h4>
            <ul>
              <li>Pembeli &amp; penjual menyepakati harga/metode pembayaran.</li>
              <li><strong>Escrow</strong> menahan Bitcoin sampai pembayaran dikonfirmasi, mengurangi risiko penipuan.</li>
              <li><strong>Reputasi/rating</strong> membantu menilai keandalan lawan transaksi.</li>
            </ul>

            <h4>Pertimbangan</h4>
            <ul>
              <li><strong>Tingkat KYC bervariasi</strong> tergantung platform &amp; metode; tetap tunduk pada aturan AML setempat.</li>
              <li><strong>Risiko penipuan</strong> tetap ada — pakai escrow, periksa reputasi, waspadai tawaran yang "terlalu bagus".</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>P2P bukan celah untuk "menghindari hukum". Transaksi tetap tercatat di blockchain dan tetap tunduk pada peraturan; bertransaksi dengan dana ilegal tetap melanggar hukum.</p>
            </div>
          `,
          takeaways:[
            "P2P mempertemukan pihak langsung dengan escrow & sistem reputasi.",
            "Tingkat KYC bervariasi; tetap tunduk aturan AML setempat.",
            "Gunakan escrow & cek reputasi; P2P bukan jalan menghindari hukum."
          ]
        },
        {
          id:"btc-send-receive",
          title:"Mengirim & Menerima Bitcoin",
          dur:"praktik",
          body:`
            <p class="lead">Transaksi Bitcoin berarti mengirim ke sebuah alamat, membayar biaya jaringan, lalu menunggu konfirmasi. Beberapa kebiasaan kecil sangat memengaruhi privasimu.</p>

            <h4>Dasar transaksi</h4>
            <ul>
              <li><strong>Menerima:</strong> bagikan alamat penerimaan (atau QR) ke pengirim.</li>
              <li><strong>Mengirim:</strong> masukkan alamat tujuan + jumlah, tetapkan <strong>fee</strong> (makin tinggi, makin cepat dikonfirmasi).</li>
              <li><strong>Konfirmasi:</strong> transaksi dianggap final setelah beberapa blok mengonfirmasinya.</li>
            </ul>

            <h4>Kebiasaan yang melindungi privasi (yang sah)</h4>
            <ul>
              <li><strong>Jangan pakai ulang alamat</strong> — gunakan alamat baru tiap menerima; penggunaan ulang mempermudah pengelompokan transaksimu.</li>
              <li><strong>Pisahkan dompet per-tujuan</strong> — kompartementalisasi finansial (ingat prinsip OPSEC).</li>
              <li><strong>Akses lewat TOR</strong> — agar IP-mu tak tertaut ke aktivitas dompet (mis. Electrum + TOR).</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Tak bisa dibatalkan</div>
              <p>Transaksi Bitcoin <strong>permanen</strong>. Salah alamat = dana hilang. Selalu periksa ulang alamat tujuan (waspadai malware yang menukar alamat di clipboard).</p>
            </div>
          `,
          takeaways:[
            "Transaksi: alamat tujuan + fee + tunggu konfirmasi blok; bersifat permanen.",
            "Privasi sah: jangan reuse alamat, pisahkan dompet, akses via TOR.",
            "Periksa ulang alamat tujuan (malware bisa menukar alamat di clipboard)."
          ]
        },
        {
          id:"btc-mixers",
          title:"Pengantar Mixer / Tumbler (Konsep)",
          dur:"konsep",
          body:`
            <p class="lead">Mixer (tumbler) adalah layanan yang berusaha memutus kaitan antara alamat pengirim &amp; penerima di blockchain. Penting memahaminya secara konsep — termasuk kenapa ia sangat kontroversial dan berisiko hukum.</p>

            <h4>Ide dasarnya</h4>
            <p>Koin dari banyak pengguna "dicampur" lalu dikembalikan ke alamat baru, dengan harapan memutus jejak on-chain antara dari-mana dan ke-mana. Ada dua model umum: <strong>terpusat</strong> (operator memegang &amp; mencampur dana — kamu harus mempercayainya, dan ia bisa kabur/menyita) dan <strong>CoinJoin</strong> (banyak pengguna menggabungkan transaksi tanpa pihak kustodian).</p>

            <h4>Kenapa ini wilayah berisiko tinggi</h4>
            <ul>
              <li><strong>Asosiasi pencucian uang</strong> — mixer sangat sering dipakai untuk mencuci hasil kejahatan, sehingga menarik perhatian penegak hukum.</li>
              <li><strong>Trust pada operator</strong> (model terpusat) — banyak yang ternyata penipuan/honeypot.</li>
              <li><strong>Chain analysis</strong> kini makin mampu "mengurai" sebagian hasil mixing.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Realitas hukum (lihat materi berikutnya)</div>
              <p>Memakai mixer bukan hal netral secara hukum. Beberapa mixer telah disanksi/ditindak, dan operatornya dipenjara. Materi berikutnya merinci lanskap hukumnya — baca sebelum menyimpulkan apa pun.</p>
            </div>
          `,
          takeaways:[
            "Mixer/tumbler berusaha memutus kaitan pengirim–penerima di blockchain.",
            "Dua model: terpusat (perlu percaya operator) & CoinJoin (non-kustodian).",
            "Wilayah berisiko tinggi: asosiasi pencucian uang, penipuan operator, chain analysis."
          ]
        },
        {
          id:"btc-legal",
          title:"Realitas Hukum & Privasi Finansial yang Sah",
          dur:"konsep penting",
          body:`
            <p class="lead">Alih-alih "cara meningkatkan anonimitas pakai mixer", materi ini menyajikan <strong>realitas hukum</strong> mixer dan <strong>praktik privasi finansial yang tetap sah</strong> — karena di sinilah privasi paling sering berbenturan dengan hukum.</p>

            <h4>Apa yang terjadi pada mixer di dunia nyata</h4>
            <ul>
              <li><strong>Sanksi &amp; pencabutannya</strong> — Tornado Cash disanksi OFAC AS (2022), lalu sanksinya dicabut (Maret 2025) setelah pengadilan menilai kode otonom tak bisa disanksi seperti "properti".</li>
              <li><strong>Operator tetap dipidana</strong> — meski kode-nya legal, sejumlah pengembang/operator mixer divonis: pengembang Tornado Cash dihukum (a.l. di Belanda 2024 &amp; AS 2025 untuk menjalankan bisnis pengiriman uang tanpa lisensi), pendiri Samourai Wallet dijatuhi hukuman penjara (2025), dan operator Bitcoin Fog divonis pencucian uang.</li>
              <li><strong>Pergeseran terbaru</strong> — pada 2026, Departemen Keuangan AS mengakui mixer punya kegunaan privasi yang sah, <em>jika</em> disertai pencatatan &amp; kepatuhan; bukan lampu hijau untuk menyamarkan dana ilegal.</li>
            </ul>

            <h4>Pelajaran intinya</h4>
            <p>Garisnya bukan "alatnya" melainkan <strong>niat, sumber dana, lisensi, dan yurisdiksi</strong>. Memutus tautan privasi atas dana sahmu sangat berbeda dari menyamarkan hasil kejahatan — yang kedua adalah pencucian uang, kejahatan serius.</p>

            <h4>Praktik privasi finansial yang umumnya sah</h4>
            <ul>
              <li>Tidak memakai ulang alamat; pakai alamat baru tiap menerima.</li>
              <li>Memisahkan dompet per-tujuan (kompartementalisasi).</li>
              <li>Mengakses dompet lewat TOR agar IP tak tertaut.</li>
              <li><strong>Coin control</strong> — memilih input transaksi secara sadar untuk mengurangi kebocoran tautan.</li>
              <li>Menyimpan catatan untuk kepatuhan pajak/pelaporan sesuai aturan wilayahmu.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Penutup</div>
              <p>Ini bukan nasihat hukum. Hukum crypto berbeda &amp; berubah cepat; di Indonesia diawasi OJK dan terus berkembang. Sebelum memakai alat privasi finansial apa pun, <strong>periksa hukum yang berlaku</strong> dan, untuk hal serius, konsultasikan ke profesional.</p>
            </div>
          `,
          takeaways:[
            "Garis hukum mixer = niat, sumber dana, lisensi, yurisdiksi — bukan sekadar 'alatnya'.",
            "Kode mixer bisa legal, tapi operator tetap dipidana; menyamarkan dana ilegal = pencucian uang.",
            "Privasi sah: hindari reuse alamat, pisahkan dompet, akses via TOR, coin control, patuhi pelaporan."
          ],
          quiz:{
            title:"Kuis Bab 9 — Bitcoin & Privasi Finansial",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Sebuah dompet Bitcoin pada dasarnya menyimpan…",
               options:["Koin fisik","Kunci yang membuktikan kepemilikan saldo di blockchain","File video","Kata sandi WiFi"],
               answer:1,
               explain:"Koin 'ada' di blockchain; dompet menyimpan kunci yang mengontrolnya."},
              {q:"Pernyataan yang BENAR tentang Bitcoin:",
               options:["Sepenuhnya anonim","Pseudonim — blockchain publik & permanen, alamat bisa tertaut identitas","Tidak tercatat di mana pun","Tak bisa dilacak sama sekali"],
               answer:1,
               explain:"Bitcoin pseudonim; sekali alamat tertaut identitas, riwayatnya bisa terungkap lewat chain analysis."},
              {q:"Seed phrase harus…",
               options:["Difoto & disimpan di cloud","Dicatat offline & dirahasiakan; siapa yang punya menguasai dana","Dibagikan ke dukungan teknis","Diunggah ke bursa"],
               answer:1,
               explain:"Seed phrase adalah cadangan induk; bocor = dana dicuri, hilang = dana hilang permanen."},
              {q:"Kebiasaan yang melindungi privasi (sah) saat menerima Bitcoin:",
               options:["Pakai satu alamat berulang","Gunakan alamat baru tiap menerima","Umumkan alamatmu","Matikan enkripsi"],
               answer:1,
               explain:"Penggunaan ulang alamat mempermudah pengelompokan transaksimu; alamat baru mengurangi tautan."},
              {q:"Soal mixer/tumbler, garis hukum sebenarnya ditentukan oleh…",
               options:["Warna antarmuka","Niat, sumber dana, lisensi, dan yurisdiksi","Ukuran transaksi saja","Merek dompet"],
               answer:1,
               explain:"Menyamarkan dana sah berbeda dari mencuci hasil kejahatan; operator mixer pun telah dipidana."},
              {q:"Sikap yang tepat sebelum memakai alat privasi finansial adalah…",
               options:["Abaikan hukum karena privasi hak mutlak","Periksa hukum yang berlaku di wilayahmu & konsultasi profesional bila perlu","Selalu pakai mixer","Tidak mencatat apa pun"],
               answer:1,
               explain:"Aturan beda & berubah cepat (di Indonesia diawasi OJK); kepatuhan melindungimu."}
            ]
          }
        }
      ]
    };
