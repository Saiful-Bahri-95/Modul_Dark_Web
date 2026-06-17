/* Bab 3 — id: "darknet" (rev: + 2 materi deep-dive anatomi v3 & deanonimisasi)
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"darknet",
      title:"Mengakses Dark Net — Entry Points",
      lectures:[
        {
          id:"dn-intro",
          title:"Struktur Web & Cara Kerja Onion Service",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">Sebelum "masuk", kamu wajib paham peta wilayahnya. Banyak orang salah kaprah mengira "dark web" itu satu tempat menyeramkan yang penuh kejahatan. Kenyataannya ia hanya sebagian kecil internet yang sengaja dibuat tidak terindeks — dan teknologi di baliknya justru elegan.</p>

            <h4>Tiga lapisan web</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga lapisan web: surface, deep, dark">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">Tiga lapisan internet</text>
                <!-- surface -->
                <rect x="210" y="42" width="300" height="50" rx="8" fill="#15202b" stroke="#4fe0d0"/>
                <text x="360" y="64" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="12" font-weight="700">Surface / Clear Web</text>
                <text x="360" y="82" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">terindeks Google · ~kecil dari total</text>
                <!-- deep -->
                <rect x="150" y="100" width="420" height="74" rx="8" fill="#15202b" stroke="#6ad7ff"/>
                <text x="360" y="126" text-anchor="middle" fill="#6ad7ff" font-family="monospace" font-size="12" font-weight="700">Deep Web</text>
                <text x="360" y="145" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">tidak terindeks tapi sah: email, e-banking,</text>
                <text x="360" y="160" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">dashboard, dokumen di balik login — BAGIAN TERBESAR</text>
                <!-- dark -->
                <rect x="240" y="182" width="240" height="74" rx="8" fill="#15202b" stroke="#f5b748"/>
                <text x="360" y="208" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="12" font-weight="700">Dark Web</text>
                <text x="360" y="226" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">butuh software khusus (TOR);</text>
                <text x="360" y="241" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">situs .onion — irisan kecil deep web</text>
              </svg>
              <figcaption>Surface web yang terindeks justru bagian terkecil. Dark web hanyalah irisan kecil dari deep web yang butuh TOR.</figcaption>
            </figure>

            <ul>
              <li><strong>Surface / Clear Web</strong> — yang bisa ditemukan mesin pencari biasa (Google, Bing). Justru ini bagian terkecil dari seluruh internet.</li>
              <li><strong>Deep Web</strong> — semua yang <em>tidak</em> terindeks tapi sepenuhnya sah dan kamu pakai tiap hari: isi inbox email, halaman e-banking, dashboard kerja, dokumen di balik login. Ini bagian <strong>terbesar</strong> internet. "Deep" bukan berarti gelap atau jahat — hanya tidak terindeks.</li>
              <li><strong>Dark Web</strong> — bagian kecil dari deep web yang sengaja disembunyikan dan hanya bisa diakses lewat software khusus seperti TOR. Inilah dunia <code>.onion</code>. Isinya beragam: ada layanan sah (jurnalisme, privasi, forum) dan ada pula yang ilegal — sama seperti internet biasa, tergantung situsnya.</li>
            </ul>

            <h4>Apa itu onion service (hidden service)</h4>
            <p>Situs <code>.onion</code> disebut <strong>onion service</strong>. Bedanya dengan situs biasa: alamatnya bukan nama domain yang dibeli, melainkan deretan karakter yang <em>diturunkan dari kunci kriptografi</em> situs itu sendiri (alamat v3 modern panjangnya 56 karakter, mis. <code>contoh...palsu.onion</code>). Artinya alamatnya sekaligus berfungsi sebagai sidik jari keasliannya.</p>
            <p>Yang istimewa: koneksi ke onion service <strong>tidak pernah keluar dari jaringan TOR</strong>. Tidak ada exit node. Kamu dan server bertemu di "titik rendezvous" di dalam jaringan, sehingga:</p>
            <figure class="fig">
              <svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Onion service tidak memakai exit node">
                <defs><marker id="ard" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#5fd98a"/></marker></defs>
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Koneksi .onion tetap di dalam TOR</text>
                <g font-family="monospace" font-size="11">
                  <rect x="30" y="60" width="120" height="46" rx="9" fill="#15202b" stroke="#34475a"/>
                  <text x="90" y="88" text-anchor="middle" fill="#e9f1f7">Kamu</text>
                  <rect x="240" y="60" width="240" height="46" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="360" y="80" text-anchor="middle" fill="#5fd98a" font-weight="700">Titik rendezvous</text>
                  <text x="360" y="96" text-anchor="middle" fill="#9fb4c4" font-size="9">di dalam jaringan TOR</text>
                  <rect x="570" y="60" width="120" height="46" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="630" y="88" text-anchor="middle" fill="#5fd98a">Onion service</text>
                </g>
                <g stroke="#5fd98a" stroke-width="2" marker-end="url(#ard)">
                  <line x1="150" y1="83" x2="236" y2="83"/><line x1="570" y1="83" x2="484" y2="83"/>
                </g>
                <text x="360" y="138" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10.5">Tanpa exit node → enkripsi terjaga ujung-ke-ujung, lokasi server pun tersembunyi.</text>
              </svg>
              <figcaption>Karena tak melewati exit node, trafik tetap terenkripsi sampai server dan lokasi kedua pihak tersembunyi.</figcaption>
            </figure>
            <ul>
              <li><strong>Enkripsi ujung-ke-ujung "gratis"</strong> — tidak ada exit node yang bisa mengintip, bahkan tanpa HTTPS sekalipun (meski situs serius tetap memakai HTTPS).</li>
              <li><strong>Lokasi server tersembunyi</strong> — sama seperti kamu, server pun anonim. Inilah kenapa onion service dipakai untuk hal yang butuh perlindungan dua arah, seperti kotak pos rahasia jurnalis (SecureDrop).</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Dark web ≠ ilegal</div>
              <p>Banyak organisasi sah punya versi .onion: mesin pencari seperti DuckDuckGo, Tor Project sendiri, dan banyak media besar (BBC, ProPublica) menyediakan .onion agar pembaca di negara tersensor tetap bisa mengakses. Teknologinya netral; yang menentukan legal/tidaknya adalah <em>apa yang kamu lakukan</em>.</p>
            </div>

            <div class="box danger">
              <div class="bx-title">⚠ Bawa semua OPSEC-mu ke sini</div>
              <p>Begitu masuk wilayah .onion, semua kebiasaan dari Bab 1–2 berlaku berlipat: jangan login identitas asli, jangan unduh-lalu-buka dokumen saat online, idealnya akses dari TAILS. Modul ini tidak memberi tautan ke pasar gelap dan tidak membahas aktivitas ilegal — fokusnya memahami teknologi dan melindungi diri.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Ilustrasi "iceberg" surface/deep/dark web, dan contoh halaman <strong>.onion resmi DuckDuckGo</strong> di Tor Browser sebagai bukti dark web yang sah.</p>
              <p><span class="ir-key">Cari: "surface deep dark web iceberg", "duckduckgo onion tor browser"</span></p>
            </div>
          `,
          takeaways:[
            "Web berlapis: surface (terindeks, terkecil), deep (tak terindeks tapi sah, terbesar), dark (butuh TOR, irisan kecil deep).",
            "Onion service punya alamat .onion (v3, 56 karakter) yang diturunkan dari kunci kriptografi situs — sekaligus sidik jari keasliannya.",
            "Koneksi .onion tak melewati exit node: enkripsi ujung-ke-ujung terjaga dan lokasi server tersembunyi.",
            "Dark web ≠ ilegal; banyak layanan sah (DuckDuckGo, BBC, SecureDrop) memakai .onion. OPSEC tetap wajib."
          ]
        },
        {
          id:"dn-search",
          title:"Menemukan Hidden Service dengan Aman",
          dur:"konsep · ± 8 menit",
          body:`
            <p class="lead">Karena onion service sengaja tak terindeks Google, menemukannya butuh alat khusus. Tapi tantangan sebenarnya bukan "menemukan" — melainkan <strong>memastikan yang kamu temukan itu asli, bukan tiruan penipu</strong>.</p>

            <h4>Alat untuk menemukan</h4>
            <ul>
              <li><strong>Mesin pencari dark web</strong> — beberapa mesin pencari mengindeks onion service. Yang bereputasi, seperti <strong>Ahmia</strong>, sengaja menyaring konten pelecehan/abusif. DuckDuckGo juga punya versi .onion untuk mencari di web biasa secara privat. Mesin pencari adalah titik awal, bukan jaminan keaslian.</li>
              <li><strong>Direktori / listing tepercaya</strong> — kumpulan tautan .onion yang dikurasi. Kualitasnya sangat beragam; banyak direktori penuh tautan mati atau jebakan. Utamakan direktori yang dikelola pihak bereputasi.</li>
              <li><strong>Sumber resmi langsung</strong> — cara teraman: ambil alamat .onion dari situs <em>resmi</em> organisasinya di clear web. Misalnya situs resmi sebuah media akan mencantumkan alamat .onion SecureDrop mereka. Ini menutup celah penipuan sejak awal.</li>
            </ul>

            <h4>Kenapa verifikasi keaslian itu segalanya</h4>
            <p>Di clear web, salah ketik domain biasanya berujung halaman error. Di dark web, alamat .onion adalah deretan karakter acak yang <strong>mustahil dihafal</strong> — dan penipu memanfaatkan ini. Mereka membuat tiruan dengan alamat yang mirip sekilas, lalu menyebarkannya di mana-mana untuk mencuri kredensial, kripto, atau menanam malware. Karena kamu tak bisa "mengenali" alamat asli dari ingatan, kamu <strong>harus</strong> memverifikasinya dari sumber tepercaya.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur menemukan dan memverifikasi onion service">
                <defs><marker id="ardv" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6ad7ff"/></marker></defs>
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Temukan → Verifikasi → Simpan</text>
                <g font-family="monospace" font-size="10.5">
                  <rect x="20" y="60" width="150" height="56" rx="9" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="95" y="84" text-anchor="middle" fill="#6ad7ff" font-weight="700">1. Temukan kandidat</text>
                  <text x="95" y="101" text-anchor="middle" fill="#9fb4c4">search / direktori</text>
                  <rect x="200" y="60" width="170" height="56" rx="9" fill="#15202b" stroke="#f5b748"/>
                  <text x="285" y="84" text-anchor="middle" fill="#f5b748" font-weight="700">2. Cocokkan alamat</text>
                  <text x="285" y="101" text-anchor="middle" fill="#9fb4c4">dgn sumber RESMI</text>
                  <rect x="400" y="60" width="150" height="56" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="475" y="84" text-anchor="middle" fill="#5fd98a" font-weight="700">3. Cek tanda sah</text>
                  <text x="475" y="101" text-anchor="middle" fill="#9fb4c4">HTTPS / Onion-Location</text>
                  <rect x="580" y="60" width="120" height="56" rx="9" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="640" y="84" text-anchor="middle" fill="#4fe0d0" font-weight="700">4. Bookmark</text>
                  <text x="640" y="101" text-anchor="middle" fill="#9fb4c4">simpan yg sahih</text>
                </g>
                <g stroke="#6ad7ff" stroke-width="2" marker-end="url(#ardv)">
                  <line x1="170" y1="88" x2="196" y2="88"/><line x1="370" y1="88" x2="396" y2="88"/><line x1="550" y1="88" x2="576" y2="88"/>
                </g>
                <text x="360" y="160" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="10.5">Jangan pernah memasukkan kredensial/kripto sebelum alamat terverifikasi.</text>
                <text x="360" y="180" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Cocokkan karakter demi karakter, terutama bagian awal & akhir alamat.</text>
              </svg>
              <figcaption>Empat langkah disiplin: temukan, verifikasi dari sumber resmi, cek tanda keaslian, baru simpan.</figcaption>
            </figure>

            <h4>Cara memverifikasi dengan benar</h4>
            <ul>
              <li><strong>Cocokkan dengan sumber resmi.</strong> Bandingkan alamat .onion dengan yang tercantum di situs resmi organisasi (clear web) atau dokumen yang ditandatangani PGP. Periksa <em>seluruh</em> alamat, bukan cuma beberapa huruf depan — penipu sering menyamakan awalannya.</li>
              <li><strong>Manfaatkan Onion-Location.</strong> Bila kamu membuka situs resmi sebuah organisasi di Tor Browser dan ia menawarkan versi .onion lewat fitur Onion-Location, itu jalur paling tepercaya menuju .onion mereka.</li>
              <li><strong>Simpan yang sudah sahih.</strong> Setelah terverifikasi, bookmark (dan di TAILS, simpan di Persistent) agar kamu tak perlu mencari ulang dan tak tergoda menyalin alamat dari sumber acak lagi.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Tanda bahaya umum</div>
              <p>Waspadai: alamat .onion yang disebar lewat iklan/komentar acak, situs yang buru-buru meminta login atau pembayaran kripto, "mirror" yang alamatnya tidak cocok dengan sumber resmi, dan janji terlalu indah. Bila ragu, jangan masukkan apa pun — tutup saja.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar mesin pencari <strong>Ahmia</strong> dan contoh fitur <strong>Onion-Location</strong> (tombol ".onion available") di Tor Browser.</p>
              <p><span class="ir-key">Cari: "ahmia search engine", "tor browser onion-location button"</span></p>
            </div>
          `,
          practice:`<p>Latihan keaslian tanpa risiko: kunjungi situs resmi (clear web) sebuah organisasi yang punya .onion — misalnya Tor Project, DuckDuckGo, atau sebuah media besar dengan SecureDrop. Temukan alamat .onion resmi mereka di situs itu, lalu buka lewat Tor Browser dan cocokkan alamatnya karakter demi karakter. Tujuannya melatih refleks "selalu verifikasi dari sumber resmi" sebelum mempercayai alamat .onion apa pun.</p>`,
          takeaways:[
            "Temukan onion service lewat mesin pencari bereputasi (mis. Ahmia), direktori tepercaya, atau langsung dari situs resmi organisasinya.",
            "Tantangan utama bukan menemukan, tapi memastikan keaslian — alamat .onion acak mustahil dihafal dan mudah ditiru penipu.",
            "Verifikasi: cocokkan seluruh alamat dengan sumber resmi/dokumen ber-PGP, manfaatkan Onion-Location, lalu bookmark yang sahih.",
            "Jangan masukkan kredensial/kripto sebelum alamat terverifikasi; waspadai tautan dari sumber acak."
          ]
        },
        {
          id:"dn-anatomy",
          title:"Deep-Dive: Anatomi Onion Service v3 — Descriptor, Rendezvous & Key Blinding",
          dur:"deep-dive · ± 16 menit",
          body:`
            <p class="lead">Kamu sudah tahu .onion "tidak lewat exit node". Tapi bagaimana persisnya dua pihak yang sama-sama anonim bisa <em>bertemu</em> tanpa pernah tahu lokasi satu sama lain? Di sinilah letak salah satu desain paling cantik di seluruh internet — dan beberapa "rahasia" yang bahkan banyak pengguna lama tidak paham. Memahami ini mengubahmu dari sekadar pemakai menjadi orang yang bisa menilai keaslian dan keamanan sebuah layanan dari prinsip kerjanya.</p>

            <h4>1. Alamat .onion itu sebenarnya sebuah kunci publik</h4>
            <p>Alamat v3 yang panjang (56 karakter) bukan nama acak — ia adalah <strong>kunci publik ed25519 milik situs itu, ditulis dalam base32</strong>, ditambah checksum dan penanda versi. Implikasinya dalam: saat kamu mengetik alamat .onion, kamu sebenarnya sedang menyebut "aku mau bicara dengan pemilik kunci privat <em>ini</em>". Tidak ada otoritas sertifikat, tidak ada registrar, tidak ada yang bisa "membajak" domain seperti di clear web. <strong>Alamat = identitas kriptografis.</strong> Inilah kenapa mencocokkan alamat karakter-demi-karakter itu bukan paranoia — itu satu-satunya cara memverifikasi lawan bicara.</p>

            <h4>2. Bagaimana pertemuan terjadi: enam langkah</h4>
            <p>Onion service tidak "menunggu di sebuah IP". Ia justru aktif menyembunyikan diri lewat protokol berikut:</p>
            <ol class="steps">
              <li><strong>Service memilih Introduction Points.</strong> Situs memilih beberapa relay TOR acak sebagai "meja resepsionis", lalu membangun circuit anonim ke masing-masing. Relay-relay ini tahu cara meneruskan pesan ke situs, tapi <em>tidak tahu</em> alamat .onion maupun lokasi server.</li>
              <li><strong>Service menerbitkan descriptor.</strong> Situs membuat dokumen "descriptor" berisi daftar introduction point-nya, menandatanganinya dengan kunci privatnya, lalu <strong>mengenkripsinya</strong> dan mengunggahnya ke sekelompok relay direktori (HSDir).</li>
              <li><strong>Klien mengambil descriptor.</strong> Saat kamu mengetik alamat, klienmu menghitung HSDir mana yang menyimpan descriptor situs itu, mengunduhnya, lalu mendekripsinya memakai info dari alamat .onion. Sekarang klien tahu introduction point-nya.</li>
              <li><strong>Klien menyiapkan Rendezvous Point.</strong> Klienmu memilih satu relay lain sebagai "titik temu netral", membangun circuit ke sana, dan menitipkan sebuah kode rahasia sekali pakai (rendezvous cookie).</li>
              <li><strong>Klien memperkenalkan diri.</strong> Lewat introduction point, klien mengirim pesan terenkripsi ke service: "temui aku di rendezvous point X, ini setengah jabat-tanganku". Introduction point hanya jadi kurir; ia tak bisa membaca isinya.</li>
              <li><strong>Keduanya bertemu di Rendezvous Point.</strong> Service membangun circuit-nya sendiri ke titik temu itu dan menyelesaikan handshake. Hasil akhir: kamu punya circuit 3-hop ke titik temu, server punya circuit 3-hop ke titik temu — total <strong>6 relay</strong>, terenkripsi ujung-ke-ujung, dan rendezvous point sendiri tidak tahu siapa kamu maupun siapa server.</li>
            </ol>

            <figure class="fig">
              <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur rendezvous onion service">
                <defs><marker id="ara3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6ad7ff"/></marker></defs>
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">Kamu &amp; server bertemu di titik temu — tanpa saling tahu lokasi</text>
                <g font-family="monospace" font-size="11">
                  <rect x="24" y="110" width="120" height="48" rx="9" fill="#15202b" stroke="#34475a"/>
                  <text x="84" y="132" text-anchor="middle" fill="#e9f1f7" font-weight="700">Kamu</text>
                  <text x="84" y="148" text-anchor="middle" fill="#9fb4c4" font-size="9">circuit 3-hop</text>

                  <rect x="300" y="50" width="120" height="44" rx="9" fill="#15202b" stroke="#f5b748"/>
                  <text x="360" y="68" text-anchor="middle" fill="#f5b748" font-weight="700" font-size="10">Introduction</text>
                  <text x="360" y="84" text-anchor="middle" fill="#9fb4c4" font-size="9">"resepsionis"</text>

                  <rect x="300" y="170" width="120" height="44" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="360" y="188" text-anchor="middle" fill="#5fd98a" font-weight="700" font-size="10">Rendezvous</text>
                  <text x="360" y="204" text-anchor="middle" fill="#9fb4c4" font-size="9">titik temu netral</text>

                  <rect x="576" y="110" width="120" height="48" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="636" y="132" text-anchor="middle" fill="#5fd98a" font-weight="700" font-size="10">Onion service</text>
                  <text x="636" y="148" text-anchor="middle" fill="#9fb4c4" font-size="9">circuit 3-hop</text>
                </g>
                <g stroke="#f5b748" stroke-width="1.8" marker-end="url(#ara3)" stroke-dasharray="4 3">
                  <line x1="144" y1="120" x2="298" y2="78"/><line x1="576" y1="120" x2="422" y2="78"/>
                </g>
                <g stroke="#5fd98a" stroke-width="2.2" marker-end="url(#ara3)">
                  <line x1="144" y1="140" x2="298" y2="188"/><line x1="576" y1="140" x2="422" y2="188"/>
                </g>
                <text x="222" y="250" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9.5">- - - perkenalan (sekali)</text>
                <text x="500" y="250" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="9.5">——— jalur data tetap</text>
              </svg>
              <figcaption>Introduction point hanya untuk "berkenalan"; setelah itu seluruh data mengalir lewat rendezvous point. Tak ada satu titik pun yang tahu kedua ujung.</figcaption>
            </figure>

            <h4>3. Rahasia yang jarang diketahui: key blinding</h4>
            <p>Inilah lompatan besar v3 atas v2 lama, dan sedikit orang yang tahu. Descriptor tidak diunggah ke HSDir memakai kunci publik asli situs, melainkan memakai <strong>kunci yang "diburamkan" (blinded key)</strong> — turunan matematis dari kunci asli yang <em>berganti setiap hari</em>. Akibatnya:</p>
            <ul>
              <li>Relay HSDir yang menyimpan descriptor <strong>tidak bisa mengetahui alamat .onion-nya</strong>. Di v2 dulu, HSDir jahat bisa "memanen" daftar alamat onion yang lewat — di v3 itu mustahil.</li>
              <li>Tanpa tahu alamat lengkapnya lebih dulu, <strong>tak seorang pun bisa menemukan</strong> sebuah onion service hanya dengan mengintip jaringan. Kamu harus sudah memegang alamatnya untuk bahkan bisa menghitung di mana descriptor-nya berada.</li>
            </ul>
            <p>Pelajaran praktisnya: keberadaan sebuah situs .onion benar-benar "tak terlihat" sampai seseorang membagikan alamatnya. Direktori dan mesin pencari onion bekerja karena <em>manusia menyetorkan alamat</em> ke sana — bukan karena mereka bisa "memindai" dark web. Itu sebabnya direktori penuh tautan mati dan tiruan: tidak ada otoritas yang memverifikasi.</p>

            <h4>4. Vanity address & jebakannya</h4>
            <p>Pernah lihat alamat .onion yang awalannya "terbaca", mis. nama situs? Itu <strong>vanity address</strong>, dibuat dengan alat seperti <code>mkp224o</code> yang menghasilkan jutaan pasangan kunci sampai kebetulan menemukan satu yang base32-nya diawali pola yang diinginkan. Faktanya: tiap karakter tambahan yang "dipaksakan" membuat pencarian ~32 kali lebih berat, jadi hanya <strong>awalan pendek</strong> yang realistis — sisanya tetap acak dan tak bisa dikendalikan.</p>
            <div class="box warn">
              <div class="bx-title">▲ Di sinilah penipu bermain</div>
              <p>Karena hanya awalan yang bisa dibuat "cantik", penipu membuat vanity address dengan <em>awalan sama persis</em> seperti situs target, berharap kamu cuma mengecek beberapa huruf depan lalu percaya. Inilah bukti teknis kenapa aturan "cocokkan SELURUH alamat" itu mutlak: bagian yang <strong>tidak</strong> bisa mereka palsukan justru ada di tengah dan akhir.</p>
            </div>

            <h4>5. Onion service privat: client authorization</h4>
            <p>Rahasia berguna lain: sebuah onion service bisa menuntut klien menunjukkan <strong>kunci rahasia</strong> bahkan untuk sekadar mendekripsi descriptor-nya. Tanpa kunci itu, situs benar-benar <em>tidak terlihat dan tidak bisa diakses</em> — seperti pintu yang tak punya gagang bagi yang tak diundang. Fitur ini (client authorization) dipakai untuk berbagi layanan hanya ke lingkaran tepercaya: tim jurnalis, kelompok riset, atau server pribadimu sendiri. Kamu akan menyentuh konsep kunci semacam ini lagi saat membangun onion service-mu di Bab 4 (Lab 06).</p>

            <div class="box tip">
              <div class="bx-title">◇ Kenapa v2 (alamat 16 karakter) sudah mati</div>
              <p>Kalau kamu menemukan panduan lama berisi alamat .onion pendek (16 karakter), itu format <strong>v2</strong> yang dibangun di atas kripto usang (RSA-1024/SHA-1) dan sudah <strong>dimatikan total sejak akhir 2021</strong>. Semua alamat v2 kini tidak bisa dibuka. Pelajaran abadi: kriptografi menua. Panduan dark web yang tidak diperbarui bukan cuma usang — alamatnya benar-benar tak berfungsi, dan link "pengganti" yang beredar justru ladang phishing.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Diagram resmi "How do onion services work" dari community.torproject.org. (2) Contoh keluaran <code>mkp224o</code> yang memperlihatkan awalan vanity + sisa karakter acak.</p>
              <p><span class="ir-key">Cari: "tor onion service rendezvous diagram", "mkp224o vanity onion example"</span></p>
            </div>
          `,
          practice:`<p>Latihan pemahaman tanpa risiko: buka sebuah onion service <em>sah</em> (mis. .onion resmi Tor Project atau DuckDuckGo) di Tor Browser. Klik ikon gembok lalu telusuri info circuit — perhatikan bahwa untuk .onion kamu akan melihat lebih banyak hop daripada situs biasa (jejak skema rendezvous 6-hop). Lalu, dengan kata-katamu sendiri, jawab: "Kenapa HSDir tidak bisa memanen daftar alamat .onion di v3?" Jika kamu bisa menjelaskan key blinding secara sederhana, kamu sudah paham bagian tersulitnya.</p>`,
          takeaways:[
            "Alamat .onion v3 = kunci publik ed25519 situs dalam base32 — alamat itu sendiri adalah identitas kriptografis, tak bisa dibajak seperti domain biasa.",
            "Pertemuan terjadi lewat introduction point (berkenalan) + rendezvous point (jalur data): total 6 hop, tak ada titik yang tahu kedua ujung.",
            "Key blinding (turunan kunci yang berganti harian) membuat HSDir tak bisa memanen alamat; onion service tak terlihat sampai alamatnya dibagikan manusia.",
            "Vanity address hanya bisa memalsukan AWALAN (mkp224o) — itu sebabnya wajib cocokkan seluruh alamat; client authorization bisa membuat onion service benar-benar privat."
          ]
        },
        {
          id:"dn-deanon",
          title:"Deep-Dive: Bagaimana Situs .onion Dibongkar — dan Pelajaran OPSEC-nya",
          dur:"deep-dive · ± 17 menit",
          body:`
            <p class="lead">Ini bagian yang paling membuka mata: dalam hampir semua kasus besar, situs .onion <strong>tidak dibongkar dengan "membobol enkripsi TOR"</strong>. Kriptografinya tetap utuh. Yang jebol adalah <em>manusia dan konfigurasi di sekitarnya</em>. Memahami pola kegagalan ini adalah cara tercepat menumbuhkan insting OPSEC sejati — karena celah yang sama persis bisa membongkar kamu sebagai <em>pengunjung</em>, bukan cuma operator.</p>

            <h4>1. Pola #1: jejak identitas yang menyeberang ke clear web</h4>
            <p>Kesalahan paling klasik. Seseorang memakai nama pengguna, alamat email, atau gaya menulis yang <strong>sama</strong> di darknet dan di internet biasa. Penyidik tinggal mencari "benang" itu di Google. Dalam kasus paling terkenal (penutupan sebuah pasar gelap besar 2013), titik awal investigasi adalah postingan forum lama yang memakai nama samaran yang sama dengan yang pernah dipakai pelaku untuk mempromosikan situs di clear web — lengkap dengan alamat email yang memuat nama aslinya. Enkripsi TOR tak relevan; <strong>korelasi identitas</strong> yang membongkarnya.</p>
            <div class="box danger">
              <div class="bx-title">⚠ Pelajaran untukmu</div>
              <p>Persona anonim harus <strong>benar-benar terpisah</strong>: nama, email, kata sandi, bahkan gaya bahasa dan jam aktif. Satu pemakaian ulang kecil bisa menjadi simpul yang menautkan seluruh aktivitasmu. Kamu akan membangun persona seperti ini secara serius di Bab 5.</p>
            </div>

            <h4>2. Pola #2: server "berbicara terlalu banyak" (application-layer leak)</h4>
            <p>TOR menyembunyikan lokasi pada lapisan jaringan, tapi aplikasi di atasnya bisa membocorkannya sendiri:</p>
            <ul>
              <li><strong>Halaman status yang terbuka.</strong> Konfigurasi web server yang ceroboh (mis. halaman <code>server-status</code> Apache yang aktif) bisa menampilkan alamat IP asli server.</li>
              <li><strong>Halaman error default</strong> yang memuat IP, atau sertifikat TLS/SSH yang <em>sama</em> dengan yang dipakai server di clear web — langsung menautkan keduanya.</li>
              <li><strong>Koneksi keluar.</strong> Jika situs memuat gambar dari server luar, mengirim email, atau melakukan kueri yang lolos dari TOR, paket itu bisa membawa IP aslinya keluar.</li>
              <li><strong>Kebocoran waktu.</strong> Jam server yang unik atau pola uptime bisa menjadi sidik jari yang dicocokkan.</li>
            </ul>
            <p>Untukmu sebagai pengunjung, cerminnya begini: <strong>situs jahat juga bisa membuat browser-mu "berbicara terlalu banyak"</strong>. Itulah inti pola berikutnya.</p>

            <h4>3. Pola #3: serangan ke pengunjung lewat browser (NIT/exploit)</h4>
            <p>Dalam beberapa operasi penegakan hukum, yang dibongkar bukan server-nya melainkan <strong>para pengunjung</strong>. Caranya: setelah menguasai sebuah situs, penyidik menyisipkan kode (sering disebut <em>Network Investigative Technique</em>) yang memanfaatkan celah di browser untuk menjalankan skrip yang diam-diam mengirim IP asli dan info perangkat pengunjung ke luar jaringan TOR. Senjata utamanya hampir selalu <strong>JavaScript</strong> dan browser yang belum ditambal.</p>
            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pertahanan berlapis melawan exploit browser">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Kenapa Safest + TAILS mematahkan exploit</text>
                <g font-family="monospace" font-size="10.5">
                  <rect x="30" y="50" width="200" height="96" rx="10" fill="#15202b" stroke="#fb7185"/>
                  <text x="130" y="74" text-anchor="middle" fill="#fb7185" font-weight="700">Exploit JS</text>
                  <text x="130" y="96" text-anchor="middle" fill="#9fb4c4">butuh JS aktif</text>
                  <text x="130" y="112" text-anchor="middle" fill="#9fb4c4">+ celah browser</text>
                  <text x="130" y="132" text-anchor="middle" fill="#9fb4c4">+ bisa lihat IP asli</text>

                  <rect x="260" y="50" width="200" height="96" rx="10" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="360" y="74" text-anchor="middle" fill="#4fe0d0" font-weight="700">Safest</text>
                  <text x="360" y="96" text-anchor="middle" fill="#9fb4c4">JS dimatikan →</text>
                  <text x="360" y="112" text-anchor="middle" fill="#9fb4c4">mayoritas exploit</text>
                  <text x="360" y="128" text-anchor="middle" fill="#9fb4c4">gugur di pintu</text>

                  <rect x="490" y="50" width="200" height="96" rx="10" fill="#15202b" stroke="#5fd98a"/>
                  <text x="590" y="74" text-anchor="middle" fill="#5fd98a" font-weight="700">TAILS/Whonix</text>
                  <text x="590" y="96" text-anchor="middle" fill="#9fb4c4">walau tembus,</text>
                  <text x="590" y="112" text-anchor="middle" fill="#9fb4c4">tak ada IP asli</text>
                  <text x="590" y="128" text-anchor="middle" fill="#9fb4c4">untuk dilihat</text>
                </g>
              </svg>
              <figcaption>Pertahanan berlapis: Safest menutup jalur masuk; TAILS/Whonix memastikan walau ada yang lolos, tak ada IP asli yang bisa dibocorkan.</figcaption>
            </figure>
            <div class="box tip">
              <div class="bx-title">◇ Inilah alasan teknis di balik tiga aturan yang sudah kamu pelajari</div>
              <p>(1) Setel Security Level ke <strong>Safest</strong> untuk hal berisiko — JS mati menggugurkan mayoritas exploit. (2) Pakai <strong>TAILS/Whonix</strong> — kalaupun browser ditembus, sistem yang memaksa semua lewat TOR membuat IP aslimu tak terjangkau oleh skrip. (3) <strong>Selalu auto-update</strong> — exploit mengincar versi lama. Tiga kebiasaan ini bukan formalitas; mereka adalah jawaban langsung atas cara nyata orang dibongkar.</p>
            </div>

            <h4>4. Pola #4: mengikuti uang (chain analysis)</h4>
            <p>Seperti yang akan diperdalam di Bab 9, Bitcoin bersifat <em>pseudonim, bukan anonim</em>: seluruh transaksi tercatat permanen di blockchain publik. Perusahaan analisis bisa menelusuri aliran dana dari sebuah layanan onion sampai ke titik di mana kripto ditukar ke rupiah/dolar lewat bursa yang meminta KYC (identitas) — dan di situlah anonimitas runtuh. Banyak kasus tidak dibongkar lewat TOR sama sekali, melainkan lewat <strong>jejak finansial</strong>.</p>

            <h4>5. Sisi pertahanan: apa yang dilakukan layanan serius</h4>
            <p>Memahami pertahanan membantumu <em>menilai</em> apakah sebuah layanan dikelola orang yang kompeten — sinyal keaslian yang berguna:</p>
            <ul>
              <li><strong>Vanguards</strong> — pertahanan tambahan yang melindungi onion service berumur panjang dari serangan "penemuan guard" dan korelasi trafik, dengan menambah lapisan guard sehingga lawan sulit memetakan jalur.</li>
              <li><strong>Proof-of-Work (PoW)</strong> — sejak 2023, onion service bisa meminta klien menyelesaikan teka-teki komputasi kecil saat situs dibanjiri serangan DoS. Pengguna normal hampir tak merasakannya; penyerang massal jadi mahal. Kalau kamu pernah menunggu sebentar saat membuka onion yang sibuk, mungkin itu PoW bekerja.</li>
              <li><strong>OnionBalance</strong> — teknik menyeimbangkan beban ke beberapa server di belakang satu alamat .onion, agar layanan besar tetap tangguh tanpa membocorkan satu titik.</li>
              <li><strong>Anti-phishing bawaan</strong> — layanan serius menerbitkan alamat resminya dalam <strong>pesan yang ditandatangani PGP</strong> dan kerap memasang gerbang captcha anti-DDoS sebelum halaman utama.</li>
            </ul>

            <h4>6. Rahasia verifikasi tingkat lanjut</h4>
            <ul>
              <li><strong>Warrant canary / pengumuman ber-PGP.</strong> Sebagian layanan rutin menerbitkan pesan bertanggal yang ditandatangani kunci PGP tetap mereka. Jika tanda tangan cocok, kamu tahu pengumuman (dan daftar mirror di dalamnya) benar dari operator asli — bukan dari pembajak. Jika canary tiba-tiba berhenti, itu sinyal hati-hati.</li>
              <li><strong>Verifikasi mirror lewat kunci, bukan lewat pencarian.</strong> Jangan pernah mempercayai "mirror baru" dari hasil search atau komentar. Percayai hanya daftar mirror yang ditandatangani kunci PGP yang sudah kamu kenal — kamu akan belajar memverifikasi tanda tangan PGP langkah demi langkah di Bab 8.</li>
              <li><strong>Jangan pernah pakai gerbang clearnet.</strong> Layanan seperti "buka .onion tanpa TOR" (Tor2web dan sejenisnya) menelanjangi anonimitasmu dan berposisi sempurna untuk menjadi man-in-the-middle. Akses .onion <em>hanya</em> dari Tor Browser/TAILS.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Garis tegas</div>
              <p>Semua di atas bersifat <strong>defensif dan edukatif</strong>: memahami cara anonimitas gagal agar kamu bisa melindungi diri dan menilai keaslian layanan. Modul ini tidak membantu menjalankan layanan ilegal atau menghindari penegakan hukum yang sah. Pengetahuan ini berlaku dua arah — yang paling penting, ia melindungimu sebagai pengguna biasa dari penipu dan serangan.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Contoh pengumuman ber-PGP signature (blok "BEGIN PGP SIGNED MESSAGE"). (2) Gerbang captcha anti-DDoS pada layanan onion sebagai contoh pertahanan.</p>
              <p><span class="ir-key">Cari: "pgp signed message canary example", "onion service ddos captcha gateway"</span></p>
            </div>
          `,
          practice:`<p>Refleksi terstruktur (tulis di catatan latihanmu): untuk tiap pola kegagalan di atas (identitas menyeberang, server bocor, exploit browser, jejak uang), tuliskan <strong>satu kebiasaan konkret</strong> yang akan kamu lakukan untuk menutupnya sebagai <em>pengguna</em>. Contoh: untuk pola exploit → "selalu Safest + TAILS untuk hal sensitif". Latihan ini mengubah studi kasus menjadi daftar periksa pribadi — fondasi threat model yang akan kamu susun di Bab 4 (Lab 09).</p>`,
          takeaways:[
            "Situs .onion hampir tak pernah dibongkar dengan memecah enkripsi TOR — yang jebol adalah identitas yang menyeberang ke clear web, server salah konfigurasi, exploit browser, dan jejak uang.",
            "Aturan Safest + TAILS/Whonix + auto-update adalah jawaban langsung atas serangan NIT/exploit yang mengandalkan JavaScript & browser usang.",
            "Bitcoin pseudonim: chain analysis sampai titik KYC sering membongkar kasus tanpa menyentuh TOR sama sekali (diperdalam di Bab 9).",
            "Sinyal layanan kompeten: vanguards, PoW anti-DoS, OnionBalance, dan pengumuman/mirror ber-PGP; jangan pernah pakai gerbang clearnet untuk .onion."
          ]
        },
        {
          id:"dn-listings",
          title:"Direktori, Listing & Mendeteksi Tiruan/Phishing",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">Listing dan direktori onion bisa mempercepatmu menemukan layanan — tapi juga ladang subur bagi penipu. Materi ini mengasah satu keterampilan bertahan paling penting di dark web: <strong>mengenali tiruan (clone/phishing) sebelum kamu jadi korban</strong>.</p>

            <h4>Cara kerja serangan kloning</h4>
            <p>Penipu menyalin tampilan situs asli sampai pixel-perfect, lalu menaruhnya di alamat .onion berbeda yang sekilas mirip. Mereka menyebarkan alamat palsu itu lewat direktori abal-abal, komentar forum, atau hasil pencarian yang dimanipulasi. Begitu kamu login atau mengirim kripto ke "situs" itu, data/danamu langsung jatuh ke tangan mereka. Karena alamat .onion panjang dan acak, mata manusia gampang tertipu kemiripan.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Membandingkan alamat onion asli vs tiruan">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Asli vs Tiruan — beda di tengah</text>
                <rect x="40" y="48" width="640" height="50" rx="9" fill="#15202b" stroke="#5fd98a"/>
                <text x="60" y="70" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">ASLI ✓</text>
                <text x="60" y="88" fill="#9fb4c4" font-family="monospace" font-size="11">exampleabcd</text>
                <text x="173" y="88" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">7k9m2p</text>
                <text x="230" y="88" fill="#9fb4c4" font-family="monospace" font-size="11">qrstuvwx....onion</text>
                <rect x="40" y="118" width="640" height="50" rx="9" fill="#15202b" stroke="#fb7185"/>
                <text x="60" y="140" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">PALSU ✗</text>
                <text x="60" y="158" fill="#9fb4c4" font-family="monospace" font-size="11">exampleabcd</text>
                <text x="173" y="158" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">3x8w1z</text>
                <text x="230" y="158" fill="#9fb4c4" font-family="monospace" font-size="11">qrstuvwx....onion</text>
              </svg>
              <figcaption>Awalan & akhiran sengaja disamakan; perbedaan disembunyikan di tengah. Karena itu cocokkan SELURUH alamat.</figcaption>
            </figure>

            <h4>Aturan bertahan</h4>
            <ul>
              <li><strong>Sumber kebenaran tunggal.</strong> Tetapkan satu sumber resmi untuk tiap layanan (situs resmi di clear web atau dokumen ber-PGP), dan selalu kembali ke sana. Jangan mempercayai alamat dari direktori acak.</li>
              <li><strong>Cocokkan seluruh string.</strong> Periksa karakter demi karakter, bukan hanya awalan. Penipu menargetkan awalan yang sama karena tahu orang malas mengecek sampai habis.</li>
              <li><strong>Bookmark, jangan mengetik ulang.</strong> Setelah terverifikasi, simpan bookmark (di TAILS: Persistent). Mengetik/menyalin ulang tiap kali membuka peluang salah dan tertipu.</li>
              <li><strong>Curigai urgensi & iming-iming.</strong> "Mirror baru, login sekarang", "bonus", "verifikasi dompetmu" — taktik klasik phishing. Layanan sah tidak memburu-burumu.</li>
              <li><strong>Pisahkan identitas.</strong> Jangan memakai kata sandi atau persona yang sama dengan akun aslimu. Bila satu layanan ternyata jahat, kerusakannya tidak menjalar.</li>
            </ul>

            <h4>Higiene wadah: akses dari TAILS</h4>
            <p>Mengakses .onion dari <strong>TAILS</strong> menambah jaring pengaman besar: bila kamu tanpa sadar membuka sesuatu yang berbahaya, sifat amnesik membuat sesi kembali bersih setelah reboot, dan semua trafik tetap di TOR. Gabungkan dengan disiplin verifikasi di atas, dan kamu sudah menutup mayoritas jalur serangan umum.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Garis tegas modul ini</div>
              <p>Tujuan bab ini adalah memahami cara kerja entry point dan <strong>melindungi diri dari penipuan</strong> — bukan mengakses barang/jasa ilegal. Membeli/menjual barang terlarang atau membobol sistem orang lain tetap melanggar hukum (termasuk UU ITE & KUHP). Pakai ilmunya untuk bertahan dan memahami, bukan merugikan.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Perbandingan dua alamat .onion (asli vs tiruan) yang disorot bagian berbedanya, dan contoh halaman phishing yang meniru situs asli.</p>
              <p><span class="ir-key">Cari: "onion phishing clone comparison", "darknet phishing warning"</span></p>
            </div>
          `,
          practice:`<p>Ambil satu alamat .onion resmi yang sudah kamu verifikasi di materi sebelumnya. Tuliskan di kertas, lalu buat "versi palsu" buatanmu sendiri dengan mengubah 4-5 karakter di tengahnya. Latih matamu membandingkan keduanya karakter demi karakter sampai kamu cepat menemukan bedanya. Refleks inilah yang akan menyelamatkanmu dari clone phishing sungguhan.</p>`,
          takeaways:[
            "Serangan kloning meniru situs asli di alamat .onion mirip, lalu disebar lewat direktori/komentar acak.",
            "Bertahan: tetapkan satu sumber resmi, cocokkan SELURUH alamat, bookmark (jangan ketik ulang), curigai urgensi.",
            "Pisahkan identitas & kata sandi agar satu layanan jahat tidak merembet ke akun lain.",
            "Akses dari TAILS menambah jaring pengaman amnesik; modul ini defensif, bukan untuk aktivitas ilegal."
          ],
          quiz:{
            title:"Kuis Bab 3 — Mengakses Dark Net",
            sub:"10 soal · pilih satu jawaban",
            questions:[
              {q:"Bagian internet manakah yang justru paling besar?",
               options:["Surface/clear web","Deep web","Dark web","Semuanya sama besar"],
               answer:1,
               explain:"Deep web (hal sah yang tidak terindeks: email, e-banking, dashboard) adalah bagian terbesar. Surface web yang terindeks justru terkecil."},
              {q:"Apa keistimewaan koneksi ke onion service (.onion)?",
               options:["Lebih cepat dari clear web","Tidak melewati exit node sehingga enkripsi ujung-ke-ujung terjaga","Tidak perlu TOR","Gratis kuota internet"],
               answer:1,
               explain:"Koneksi .onion bertemu di titik rendezvous di dalam jaringan TOR tanpa exit node, jadi trafik tetap terenkripsi sampai server dan lokasi keduanya tersembunyi."},
              {q:"Dari mana alamat .onion (v3) diturunkan?",
               options:["Dibeli seperti domain biasa","Dari kunci kriptografi situs itu sendiri","Dari nomor IP server","Dari nama pemiliknya"],
               answer:1,
               explain:"Alamat v3 (56 karakter) diturunkan dari kunci kriptografi onion service, sehingga alamatnya sekaligus menjadi sidik jari keasliannya."},
              {q:"Cara paling tepercaya mendapatkan alamat .onion sebuah organisasi adalah…",
               options:["Dari komentar forum","Dari iklan pop-up","Dari situs resmi organisasinya di clear web / Onion-Location","Dari hasil pencarian pertama yang muncul"],
               answer:2,
               explain:"Mengambil alamat dari situs resmi organisasi (atau lewat Onion-Location di Tor Browser) menutup celah penipuan sejak awal."},
              {q:"Saat memverifikasi alamat .onion, apa yang harus kamu cocokkan?",
               options:["Cukup beberapa huruf depan","Seluruh alamat, karakter demi karakter","Hanya akhirannya","Warna situsnya"],
               answer:1,
               explain:"Penipu sengaja menyamakan awalan/akhiran dan menyembunyikan perbedaan di tengah. Selalu cocokkan seluruh string."},
              {q:"Mana kebiasaan yang menambah keamanan saat menjelajah .onion?",
               options:["Memakai kata sandi yang sama dengan akun asli","Mengetik ulang alamat dari ingatan tiap kali","Mengakses dari TAILS & memakai bookmark terverifikasi","Login secepat mungkin agar tidak ketinggalan"],
               answer:2,
               explain:"TAILS (amnesik, semua lewat TOR) plus bookmark yang sudah diverifikasi menutup banyak jalur serangan; memisahkan identitas mencegah kerusakan merembet."},
              {q:"Saat klien dan onion service akhirnya bertukar data, di mana mereka 'bertemu'?",
               options:["Di exit node terdekat","Di sebuah Rendezvous Point di dalam jaringan TOR","Langsung di IP server","Di directory authority"],
               answer:1,
               explain:"Keduanya membangun circuit 3-hop menuju satu Rendezvous Point netral (total 6 hop). Introduction point hanya untuk perkenalan awal; titik temu inilah jalur data, dan ia tak tahu siapa kedua ujungnya."},
              {q:"Apa fungsi key blinding pada onion service v3?",
               options:["Mempercepat loading situs","Membuat HSDir tak bisa memanen/mengetahui alamat .onion","Mengganti exit node otomatis","Mengenkripsi hard disk server"],
               answer:1,
               explain:"Descriptor diunggah memakai kunci 'buram' turunan yang berganti harian, sehingga relay direktori (HSDir) tak bisa mempelajari alamat .onion — perbaikan besar atas v2 yang dulu bisa dipanen."},
              {q:"Kenapa vanity address (mis. mkp224o) TIDAK boleh membuatmu lengah?",
               options:["Karena membuat situs lebih lambat","Karena hanya AWALAN yang bisa dipalsukan, sisanya tetap acak","Karena ilegal","Karena mengubah enkripsi situs"],
               answer:1,
               explain:"Membuat awalan 'cantik' itu realistis, tapi tiap karakter ~32x lebih berat — sisa alamat tetap acak. Penipu menyamakan awalan, jadi kamu wajib mencocokkan SELURUH alamat."},
              {q:"Dalam kasus nyata, bagaimana situs .onion paling sering dibongkar?",
               options:["Dengan memecah enkripsi TOR","Lewat kegagalan OPSEC: identitas menyeberang, server bocor, exploit browser, jejak uang","Dengan menebak alamat .onion","Dengan mematikan semua relay TOR"],
               answer:1,
               explain:"Enkripsi TOR umumnya tetap utuh; yang jebol adalah manusia & konfigurasi — nama/email yang dipakai ulang di clear web, server salah konfigurasi, exploit JavaScript ke pengunjung, dan chain analysis Bitcoin."}
            ]
          }
        }
      ]
};
