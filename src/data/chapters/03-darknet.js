/* Bab 3 — id: "darknet"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"darknet",
      title:"Mengakses Dark Net — Entry Points",
      lectures:[
        {
          id:"dn-intro",
          title:"Pengantar & Gambaran Bagian Ini",
          dur:"konsep",
          body:`
            <p class="lead">Sebelum membahas “cara masuk”, kita perlu peta yang benar: apa itu clear web, deep web, dan dark web — dan kenapa banyak kesalahpahaman tentang ketiganya.</p>

            <h4>Tiga lapisan web</h4>
            <ul>
              <li><strong>Clear web (surface web)</strong> — bagian yang diindeks Google: situs publik biasa.</li>
              <li><strong>Deep web</strong> — semua yang <em>tidak</em> diindeks mesin pencari, tapi bukan rahasia: dashboard email, internet banking, halaman di balik login, database internal. Ini bagian <strong>terbesar</strong> dari web dan mayoritas legal &amp; biasa. Kamu memakainya tiap hari.</li>
              <li><strong>Dark web</strong> — bagian kecil deep web yang sengaja disembunyikan dan butuh perangkat lunak khusus (mis. TOR) untuk diakses, mis. layanan <code>.onion</code>.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Pelurusan miskonsepsi</div>
              <p>Dark web ≠ otomatis ilegal. Ia hanyalah jaringan yang menjunjung anonimitas. Banyak layanan sah ada di sana: kotak penerimaan dokumen untuk whistleblower, situs berita yang menembus sensor, forum privasi, dan layanan resmi seperti milik Tor Project sendiri.</p>
            </div>

            <h4>Penggunaan dark web yang sah &amp; bermanfaat</h4>
            <ul>
              <li><strong>SecureDrop</strong> — sistem yang dipakai banyak media (mis. ProPublica, The Guardian) agar sumber bisa mengirim dokumen secara aman dan anonim.</li>
              <li><strong>Cermin (mirror) situs berita</strong> — BBC, The New York Times, dan lainnya punya alamat <code>.onion</code> agar bisa diakses di negara yang menyensor mereka.</li>
              <li><strong>Layanan privasi</strong> — beberapa penyedia email/komunikasi terenkripsi menyediakan onion service resmi.</li>
            </ul>

            <h4>Apa yang akan kita pelajari di bagian ini</h4>
            <ol>
              <li>Menemukan hidden service lewat <strong>search engine dark web</strong> — dan keterbatasannya.</li>
              <li>Menemukan hidden service lewat <strong>direktori / listing &amp; onion service</strong> — dan cara menilai keamanannya.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Batasan & etika bagian ini</div>
              <p>Bagian ini mengajarkan <strong>konsep penjelajahan dan penilaian keamanan</strong>, bukan menyediakan daftar pasar gelap atau tautan ke konten ilegal. Sebagian besar konten ilegal di dark web (narkoba, senjata, data curian, materi eksploitasi) <strong>berbahaya dan melanggar hukum</strong> untuk diakses — termasuk di Indonesia. Tujuan kita: memahami, melindungi diri, dan menghindari jebakan.</p>
            </div>
          `,
          takeaways:[
            "Web terbagi: clear web (terindeks), deep web (tak terindeks tapi normal), dark web (sengaja disembunyikan).",
            "Dark web tidak otomatis ilegal — banyak layanan sah (SecureDrop, mirror berita, layanan privasi).",
            "Bagian ini mengajarkan konsep & keamanan, bukan tautan ke konten/pasar ilegal."
          ]
        },
        {
          id:"dn-search",
          title:"Menemukan Hidden Service Lewat Search Engine Dark Web",
          dur:"konsep",
          body:`
            <p class="lead">Mesin pencari biasa (Google, Bing) tidak mengindeks situs <code>.onion</code>. Untuk menemukannya ada kategori alat khusus: search engine dark web — masing-masing dengan kekuatan dan keterbatasannya.</p>

            <h4>Kenapa Google tak bisa</h4>
            <p>Alamat <code>.onion</code> tidak ada di DNS publik dan hanya bisa dijangkau lewat TOR. Crawler mesin pencari biasa tak menjangkaunya, jadi situs <code>.onion</code> tak muncul di hasil Google.</p>

            <h4>Kategori search engine dark web</h4>
            <ul>
              <li><strong>Search engine yang memfilter konten</strong> — contohnya <em>Ahmia</em>, yang secara aktif menyaring dan memblokir konten pelecehan/eksploitasi anak dari hasilnya. Cocok untuk pencarian yang lebih aman.</li>
              <li><strong>Onion service dari mesin pencari arus utama</strong> — mis. DuckDuckGo menyediakan alamat <code>.onion</code> resmi (terutama untuk mencari clear web secara lebih privat lewat TOR, bukan untuk mengindeks .onion).</li>
              <li><strong>Indeks .onion khusus</strong> — beberapa proyek mencoba mengindeks layanan onion; kualitas, cakupan, dan keamanannya sangat bervariasi.</li>
            </ul>

            <h4>Keterbatasan yang harus dipahami</h4>
            <ul>
              <li><strong>Cakupan rendah &amp; usang</strong> — onion service sering berganti alamat atau mati; indeks cepat basi.</li>
              <li><strong>Hasil tak tersaring</strong> (pada mesin tanpa filter) — bisa memunculkan konten berbahaya, ilegal, atau memuakkan. Inilah salah satu alasan mengutamakan mesin yang memfilter seperti Ahmia.</li>
              <li><strong>Banyak hasil = penipuan/kloning</strong> — situs phishing meniru layanan asli untuk mencuri data/kredensial.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian keamanan</div>
              <p>Mengklik hasil pencarian dark web secara membabi buta berisiko: malware, phishing, atau terpapar konten ilegal yang menyeretmu ke masalah hukum. Utamakan mesin pencari yang memfilter dan verifikasi alamat lewat sumber tepercaya (lihat materi berikut).</p>
            </div>
          `,
          practice:`<p>Tanpa perlu masuk dark web: cari di clear web “Ahmia search engine” dan baca kebijakannya soal penyaringan konten. Bandingkan filosofinya dengan mesin pencari tanpa filter. Tujuannya memahami <em>kenapa</em> pilihan alat memengaruhi keamanan, bukan mengumpulkan tautan.</p>`,
          takeaways:[
            "Google tak mengindeks .onion; perlu search engine dark web khusus.",
            "Utamakan mesin yang memfilter konten berbahaya (mis. Ahmia); DuckDuckGo punya onion resmi.",
            "Indeks cepat usang dan rawan hasil penipuan/berbahaya — selalu hati-hati & verifikasi."
          ]
        },
        {
          id:"dn-listings",
          title:"Menemukan Hidden Service Lewat Listing & Onion Service",
          dur:"konsep",
          body:`
            <p class="lead">Selain search engine, orang menemukan onion service lewat <strong>direktori/listing</strong> (semacam “daftar tautan” atau wiki). Di sinilah penilaian keamanan jadi keterampilan terpenting — karena kloning dan penipuan berlimpah.</p>

            <h4>Apa itu listing/direktori onion</h4>
            <p>Direktori adalah halaman yang mengumpulkan tautan ke berbagai onion service berdasarkan kategori. Mereka mengisi celah yang ditinggalkan ketiadaan mesin pencari yang baik — tetapi kualitas dan niat tiap direktori sangat berbeda, dan banyak yang memuat tautan ke layanan ilegal yang sebaiknya kamu hindari.</p>

            <h4>Bahaya nyata yang menanti</h4>
            <ul>
              <li><strong>Kloning &amp; phishing</strong> — penipu membuat salinan situs asli dengan alamat <code>.onion</code> mirip untuk mencuri kredensial/uang. Karena alamat onion adalah deretan karakter acak panjang, sulit dibedakan sekilas.</li>
              <li><strong>Malware</strong> — unduhan atau skrip jahat yang menyerang browser/sistemmu.</li>
              <li><strong>Honeypot penegak hukum</strong> — sebagian layanan ilegal adalah jebakan untuk mengidentifikasi pengunjung.</li>
              <li><strong>Konten ilegal/memuakkan</strong> — terpapar bisa berdampak psikologis dan hukum, bahkan tanpa sengaja.</li>
            </ul>

            <h4>Cara menilai &amp; memverifikasi (keterampilan inti)</h4>
            <ul>
              <li><strong>Verifikasi dari sumber resmi clear web</strong> — alamat <code>.onion</code> layanan sah biasanya dipublikasikan di situs resmi mereka (mis. halaman resmi Tor Project, ProtonMail, SecureDrop suatu media). Selalu cocokkan alamatnya dari sana, bukan dari direktori acak.</li>
              <li><strong>Onion-Location</strong> — banyak situs sah otomatis menawarkan versi .onion-nya saat dibuka di TOR; ini sinyal keaslian yang baik.</li>
              <li><strong>Curigai apa pun yang meminta data/uang</strong> — jangan masukkan kredensial, identitas, atau pembayaran ke layanan yang tak bisa kamu verifikasi keasliannya.</li>
              <li><strong>Pegang OPSEC Bab 1</strong> — jangan login akun asli, jangan unduh sembarangan, jangan buka dokumen saat online.</li>
            </ul>

            <h4>Contoh onion service yang sah (untuk membangun intuisi)</h4>
            <ul>
              <li>Halaman resmi Tor Project &amp; dokumentasinya.</li>
              <li>SecureDrop milik media tepercaya untuk komunikasi sumber.</li>
              <li>Mirror berita (mis. BBC) yang menembus sensor.</li>
              <li>Layanan email/komunikasi terenkripsi dengan onion resmi.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Garis batas yang jelas</div>
              <p>Modul ini tidak menyediakan tautan ke pasar gelap, layanan ilegal, atau konten terlarang, dan tidak menganjurkannya. Mengakses/membeli barang ilegal, data curian, atau materi eksploitasi melanggar hukum (termasuk UU ITE/KUHP) dan dapat membahayakanmu. Gunakan kemampuan menilai ini untuk <strong>menghindari bahaya</strong>, bukan mencarinya.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Inti bagian ini</div>
              <p>Keterampilan paling berharga di dark web bukan “menemukan banyak tautan”, melainkan <strong>memverifikasi keaslian</strong> dan <strong>menilai risiko</strong> sebelum mengklik apa pun.</p>
            </div>
          `,
          practice:`<p>Latihan verifikasi (di clear web): cari alamat <code>.onion</code> RESMI dari satu layanan sah — misalnya Tor Project, DuckDuckGo, atau ProtonMail — langsung dari situs resmi mereka. Perhatikan bahwa mereka mempublikasikannya sendiri. Inilah cara benar memverifikasi sebuah onion service sebelum mempercayainya.</p>`,
          takeaways:[
            "Direktori/listing mengisi celah mesin pencari, tapi kualitas & niatnya sangat bervariasi.",
            "Bahaya: kloning/phishing, malware, honeypot, dan konten ilegal — alamat onion acak sulit dibedakan.",
            "Keterampilan inti: verifikasi alamat dari sumber resmi clear web + Onion-Location, dan pegang OPSEC."
          ],
          quiz:{
            title:"Kuis Bab 3 — Dark Net Entry Points",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Bagian web yang tak diindeks mesin pencari tapi umumnya normal/legal (mis. internet banking, email) disebut…",
               options:["Clear web","Deep web","Dark web","Onion web"],
               answer:1,
               explain:"Deep web = semua yang tak terindeks tapi bukan rahasia; ini bagian terbesar web dan kamu pakai tiap hari."},
              {q:"Pernyataan yang BENAR tentang dark web:",
               options:["Selalu ilegal","Hanya berisi pasar gelap","Tidak otomatis ilegal; ada banyak layanan sah","Tidak butuh software khusus"],
               answer:2,
               explain:"Dark web hanyalah jaringan yang menjunjung anonimitas; banyak layanan sah seperti SecureDrop dan mirror berita."},
              {q:"Mengapa Google tidak menampilkan situs .onion?",
               options:["Google memblokirnya","Situs .onion tak ada di DNS publik & hanya dijangkau via TOR","Karena ilegal","Karena terlalu lambat"],
               answer:1,
               explain:"Alamat .onion tak ada di DNS publik dan hanya bisa diakses lewat TOR, jadi crawler biasa tak menjangkaunya."},
              {q:"Search engine dark web seperti Ahmia menonjol karena…",
               options:["Paling cepat","Menyaring/memblokir konten pelecehan dari hasil","Mengindeks seluruh dark web","Gratis tanpa TOR"],
               answer:1,
               explain:"Ahmia secara aktif memfilter konten eksploitasi/pelecehan, membuat pencarian relatif lebih aman."},
              {q:"Cara paling tepat memverifikasi keaslian sebuah onion service adalah…",
               options:["Percaya direktori onion pertama yang ditemukan","Mencocokkan alamatnya dari situs resmi clear web layanan tersebut","Memilih alamat terpanjang","Bertanya di forum acak"],
               answer:1,
               explain:"Layanan sah mempublikasikan alamat .onion resmi di situs clear web mereka; selalu cocokkan dari sana."},
              {q:"Risiko utama mengklik tautan onion secara sembarangan adalah…",
               options:["Internet lebih lambat","Phishing/kloning, malware, honeypot, dan paparan konten ilegal","Baterai cepat habis","Akun TOR diblokir"],
               answer:1,
               explain:"Karena alamat acak sulit dibedakan, kloning/phishing, malware, jebakan, dan konten ilegal jadi ancaman nyata."}
            ]
          }
        }
      ]
    };
