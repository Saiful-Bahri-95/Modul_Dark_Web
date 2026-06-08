/* Bab 3 — id: "darknet"
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
            sub:"6 soal · pilih satu jawaban",
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
               explain:"TAILS (amnesik, semua lewat TOR) plus bookmark yang sudah diverifikasi menutup banyak jalur serangan; memisahkan identitas mencegah kerusakan merembet."}
            ]
          }
        }
      ]
};
