/* Data kursus — diekstrak verbatim dari modul HTML asli.
   Konten 'body' & 'practice' tetap berupa string HTML dan dirender
   lewat dangerouslySetInnerHTML di komponen. */

export const course = {
  chapters: [
    {
      id:"intro",
      title:"Mulai di Sini",
      lectures:[
        {
          id:"orientasi",
          title:"Orientasi, Etika & Cara Pakai Modul",
          dur:"baca dulu",
          cover:true,
          body:`
            <p class="lead">Modul ini mengajarkan <strong>privasi, anonimitas, dan keamanan digital secara defensif</strong> — cara melindungi identitas dan datamu, memahami teknologi anonimitas (TOR, TAILS), dan memahami cara kerja dark web. Fokusnya pada proteksi diri dan pemahaman teknis, bukan aktivitas ilegal.</p>

            <div class="badge-row">
              <div class="stat"><div class="n">11</div><div class="l">Bab (fondasi, lab, komunikasi, file, enkripsi, finansial, sistem)</div></div>
              <div class="stat"><div class="n">84</div><div class="l">Materi & lab</div></div>
              <div class="stat"><div class="n">11</div><div class="l">Kuis evaluasi</div></div>
            </div>

            <h4>Cara pakai modul ini</h4>
            <ul>
              <li>Pilih materi dari panel kiri. Tandai <strong>“Tandai selesai”</strong> tiap kali rampung — progresmu tersimpan otomatis dan baris akan tercoret.</li>
              <li>Gunakan tombol <em>Sebelumnya / Berikutnya</em> di bawah tiap materi untuk belajar berurutan.</li>
              <li>Tiap bab punya <strong>kuis</strong> di materi terakhir untuk mengukur pemahaman.</li>
              <li>Kotak <span style="color:var(--accent)">Tip</span>, <span style="color:var(--amber)">Perhatian</span>, dan <span style="color:var(--danger)">Bahaya</span> menandai poin penting — jangan dilewati.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Etika &amp; Legalitas — baca sebelum lanjut</div>
              <p>Memakai TOR/TAILS dan mengakses dark web <strong>legal</strong> di Indonesia dan kebanyakan negara — ini alat privasi yang dipakai jurnalis, aktivis, peneliti keamanan, dan orang biasa yang peduli privasi. <strong>Yang menentukan legal/tidaknya adalah apa yang kamu lakukan</strong>, bukan alatnya.</p>
              <p>Membeli/menjual barang ilegal, mengakses materi terlarang, menipu, atau membobol sistem orang lain tetap melanggar hukum — termasuk UU ITE dan KUHP di Indonesia. Modul ini <strong>tidak</strong> memberikan tautan ke pasar gelap atau instruksi untuk aktivitas ilegal. Pakai ilmunya untuk melindungi diri dan belajar, bukan merugikan orang lain.</p>
            </div>

            <h4>Peta belajar</h4>
            <div class="map">
              <div class="row"><span class="ix">01</span><div><h5>The TOR Browser</h5><p>Pondasi anonimitas: cara kerja onion routing, instalasi aman, bridges &amp; pluggable transports untuk melawan sensor, kombinasi dengan VPN, dan setelan keamanan maksimum.</p></div></div>
              <div class="row"><span class="ix">02</span><div><h5>TAILS — Amnesic Incognito Live System</h5><p>Sistem operasi “lupa ingatan” yang merutekan semua trafik lewat Tor dan tak meninggalkan jejak. Instalasi, booting, dasar pemakaian, dan persistence terenkripsi.</p></div></div>
              <div class="row"><span class="ix">03</span><div><h5>Mengakses Dark Net — Entry Points</h5><p>Memahami struktur web (clear/deep/dark), cara menemukan hidden service lewat search engine &amp; direktori, dan — yang terpenting — cara menilai keamanan, menghindari penipuan, serta menjaga OPSEC.</p></div></div>
              <div class="row"><span class="ix">04</span><div><h5>Praktik Lanjutan — Hands-On Labs</h5><p>8 lab praktik: membangun &amp; mengeraskan TAILS, uji kebocoran, mengunjungi onion service sah, enkripsi PGP, OnionShare, menjalankan hidden service sendiri, deteksi penipuan, dan menyusun threat model + rencana OPSEC pribadi.</p></div></div>
              <div class="row"><span class="ix">05</span><div><h5>Komunikasi Privat — Email</h5><p>Membangun persona pseudonim (OPSEC), email sementara, penyedia email privat (zero-access encryption), email darknet (.onion), dan memilih layanan yang tepat untuk tiap konteks.</p></div></div>
              <div class="row"><span class="ix">06</span><div><h5>Komunikasi Privat — Instant Messaging</h5><p>Protokol Jabber/XMPP terfederasi, menyiapkan akun lewat Pidgin di TAILS, mengaktifkan enkripsi end-to-end OTR, dan memverifikasi kontak untuk melawan serangan man-in-the-middle.</p></div></div>
              <div class="row"><span class="ix">07</span><div><h5>Manajemen &amp; Berbagi File</h5><p>Tiga dimensi keamanan file: membersihkan metadata (MAT2), berbagi anonim via OnionShare, penghapusan aman (dan kenapa shred gagal di SSD), serta enkripsi penuh storage (LUKS/VeraCrypt) &amp; crypto-erase.</p></div></div>
              <div class="row"><span class="ix">08</span><div><h5>Enkripsi</h5><p>Fondasi kriptografi: simetris vs asimetris vs hibrida, membuat &amp; mengelola PGP key pair, enkripsi/dekripsi teks &amp; file, serta tanda tangan digital untuk membuktikan keaslian &amp; integritas.</p></div></div>
              <div class="row"><span class="ix">09</span><div><h5>Cryptocurrency — Bitcoin &amp; Privasi Finansial</h5><p>Dompet &amp; seed phrase, mengapa Bitcoin pseudonim (bukan anonim), cara memperoleh secara legal, mengirim/menerima dengan kebiasaan privat, serta konsep mixer beserta realitas hukumnya. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">10</span><div><h5>Cryptocurrency — Monero</h5><p>Privacy coin paling kuat: ring signatures, stealth addresses, dan RingCT yang menutup pengirim, penerima, dan jumlah secara default. Membuat &amp; memulihkan dompet di TAILS, cara memperoleh, serta realitas hukum &amp; risiko delisting. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">11</span><div><h5>Qubes OS — Keamanan lewat Isolasi</h5><p>Sistem operasi yang mengurung tiap aktivitas dalam mesin virtual terpisah (qube). Instalasi &amp; verifikasi, security domains, memindahkan file/teks antar-domain dengan aman, menangani file mencurigakan, dan menyambung ke TOR lewat Whonix Gateway.</p></div></div>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Prasyarat</div>
              <p>Tidak ada prasyarat teknis berat. Cukup terbiasa memakai komputer (Windows/macOS/Linux) dan USB flash drive. Disiapkan untuk belajar mandiri dengan ritme bebas.</p>
            </div>
          `,
          takeaways:[
            "Alatnya (TOR/TAILS) legal; tanggung jawab ada pada cara kamu memakainya.",
            "Tujuan modul: proteksi diri, pemahaman teknis, dan kesadaran keamanan — bukan aktivitas ilegal.",
            "Alur belajar: TOR → TAILS → Dark Net → Lab praktik → Email, Instant Messaging, File, Enkripsi, Bitcoin, Monero, dan Qubes OS; kerjakan kuis tiap bab."
          ]
        }
      ]
    },

    /* ============================== BAB 1: TOR ============================== */
    {
      id:"tor",
      title:"The TOR Browser",
      lectures:[
        {
          id:"tor-what",
          title:"Apa Itu TOR Browser?",
          dur:"konsep",
          body:`
            <p class="lead">TOR (<em>The Onion Router</em>) adalah jaringan relawan global yang menyembunyikan siapa kamu dan apa yang kamu akses, dengan membungkus trafikmu dalam berlapis-lapis enkripsi — seperti lapisan bawang.</p>

            <h4>Masalah yang dipecahkan TOR</h4>
            <p>Saat kamu membuka situs lewat browser biasa, ISP, pemilik jaringan WiFi, dan situs tujuan bisa melihat <strong>alamat IP kamu</strong> (yang menunjukkan lokasi &amp; identitas perkiraan) dan <strong>situs apa yang kamu kunjungi</strong>. TOR memutus hubungan langsung itu.</p>

            <h4>Cara kerja: onion routing</h4>
            <p>Alih-alih langsung ke situs tujuan, trafikmu dilewatkan melalui <strong>tiga relay</strong> acak yang dijalankan relawan:</p>
            <ul>
              <li><strong>Guard / Entry node</strong> — relay pertama. Tahu IP-mu, tapi <em>tidak</em> tahu situs tujuanmu.</li>
              <li><strong>Middle node</strong> — relay tengah. Hanya tahu node sebelum dan sesudahnya, tidak tahu IP-mu maupun tujuanmu.</li>
              <li><strong>Exit node</strong> — relay terakhir yang menghubungi situs tujuan. Tahu situs tujuan, tapi <em>tidak</em> tahu IP aslimu.</li>
            </ul>
            <p>Tiap relay hanya mengupas satu lapis enkripsi dan hanya tahu “dari mana” dan “ke mana berikutnya”. <strong>Tidak ada satu pun relay yang tahu sumber sekaligus tujuan.</strong> Inilah inti anonimitas TOR.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>TOR Browser adalah versi Firefox yang sudah dikeraskan (hardened) dan dikonfigurasi otomatis untuk lewat jaringan TOR — kamu tidak perlu menyetel apa pun untuk mulai anonim.</p>
            </div>

            <h4>Yang dilindungi vs yang TIDAK</h4>
            <p>TOR menyembunyikan <strong>IP dan jejak lokasimu</strong> dari situs dan pengintai jaringan. Tapi TOR <strong>tidak</strong> membuatmu kebal: kalau kamu login ke akun asli (email, media sosial), kamu membongkar identitasmu sendiri. Exit node juga bisa melihat trafik yang tidak terenkripsi (HTTP), jadi tetap utamakan HTTPS.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Anonimitas bukan soal alat saja, tapi soal <strong>perilaku (OPSEC)</strong>. Browser tercanggih pun gagal kalau kebiasaanmu membongkar identitas. Ini tema berulang di seluruh modul.</p>
            </div>
          `,
          practice:`<p>Buka <code>torproject.org</code> di browser biasamu dan baca halaman “About”. Tuliskan dengan kata-katamu sendiri: siapa saja yang memakai TOR dan kenapa (jurnalis, aktivis, korban kekerasan, peneliti, orang biasa). Ini membantumu memahami bahwa anonimitas adalah kebutuhan wajar.</p>`,
          takeaways:[
            "TOR memutus hubungan langsung antara kamu dan situs tujuan lewat 3 relay.",
            "Guard tahu IP-mu tapi bukan tujuan; exit tahu tujuan tapi bukan IP-mu; tak ada yang tahu keduanya.",
            "TOR menyembunyikan IP, bukan menutupi perilaku yang membongkar identitas."
          ]
        },
        {
          id:"tor-install",
          title:"Verifikasi & Instalasi TOR Browser",
          dur:"± 9 menit",
          body:`
            <p class="lead">Mengunduh TOR itu mudah; <strong>memverifikasi keasliannya</strong> itu yang penting. Versi palsu/“ditrojan” adalah cara klasik untuk membobol anonimitasmu sejak langkah pertama.</p>

            <h4>Langkah 1 — Unduh dari sumber resmi</h4>
            <p>Selalu unduh dari <code>torproject.org</code> (bukan dari hasil iklan, situs pihak ketiga, atau tautan kiriman orang). Tersedia untuk Windows, macOS, Linux, dan Android.</p>

            <h4>Langkah 2 — Kenapa harus verifikasi?</h4>
            <p>Penyerang atau penyensor bisa menyisipkan malware ke installer dan menyebarkannya lewat situs tiruan. Verifikasi memastikan file yang kamu unduh <strong>persis</strong> seperti yang dirilis Tor Project.</p>

            <h4>Langkah 3 — Verifikasi tanda tangan (signature)</h4>
            <p>Tor Project menyertakan file tanda tangan <em>.asc</em> di samping tiap installer. Verifikasi memakai <strong>GnuPG (GPG)</strong>:</p>
            <ol>
              <li>Impor kunci penandatangan resmi “Tor Browser Developers”.</li>
              <li>Unduh file <code>.asc</code> yang sesuai installer-mu.</li>
              <li>Jalankan <code>gpgv</code> / <code>gpg --verify</code> terhadap installer. Hasil <em>“Good signature”</em> = file asli.</li>
            </ol>
            <p>Panduan lengkap langkah-per-langkah ada di dokumentasi resmi Tor Project bagian “Verifying signatures” — ikuti itu karena perintah persisnya bisa berbeda tiap OS.</p>

            <h4>Langkah 4 — Instalasi</h4>
            <p>Di Windows tinggal jalankan installer dan pilih folder. TOR Browser bersifat <em>portable</em> — bisa ditaruh di folder mana saja, bahkan USB. Jalankan, klik <strong>Connect</strong>, dan kamu sudah masuk jaringan TOR.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Jangan pernah memakai “TOR” bawaan toko aplikasi tak resmi atau APK dari sumber acak. Banyak yang disisipi spyware. Sumber resmi + verifikasi = harga mati.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Selalu pakai versi terbaru. TOR Browser auto-update; jangan menundanya, karena update sering menambal celah keamanan yang bisa membongkar anonimitas.</p>
            </div>
          `,
          practice:`<p>Latihan aman tanpa risiko: unduh TOR Browser dari <code>torproject.org</code> di mesin uji/VM, lalu coba praktik membaca dokumentasi “Verifying signatures”. Targetnya kamu paham <em>alur</em> verifikasi GPG, bukan sekadar klik install.</p>`,
          takeaways:[
            "Unduh hanya dari torproject.org.",
            "Verifikasi installer dengan GPG agar yakin tidak dimodifikasi (cari 'Good signature').",
            "Selalu jalankan versi terbaru — update menambal celah keamanan."
          ]
        },
        {
          id:"tor-bridges",
          title:"TOR Bridges & Pluggable Transports",
          dur:"± 7 menit",
          body:`
            <p class="lead">Daftar relay TOR bersifat publik — sehingga penyensor bisa memblokirnya. <strong>Bridges</strong> adalah relay rahasia yang tidak terdaftar, dan <strong>pluggable transports</strong> menyamarkan trafik TOR agar tak terdeteksi.</p>

            <h4>Kenapa relay biasa bisa diblokir</h4>
            <p>Jaringan TOR punya ribuan relay publik yang alamat IP-nya bisa diunduh siapa saja — termasuk penyensor, yang lalu memblokir semua IP itu. Lebih jauh, penyensor memakai <strong>Deep Packet Inspection (DPI)</strong> untuk mengenali “pola” trafik TOR dan memblokirnya, bukan cuma berdasar IP.</p>

            <h4>Bridges — relay yang tak terdaftar</h4>
            <p>Bridge adalah relay yang <em>tidak</em> dipublikasikan di direktori. Alamatnya dibagikan lewat jalur privat (situs bridges Tor Project, email, atau Telegram), sehingga penyensor sulit memblokir IP yang tidak mereka ketahui.</p>

            <h4>Pluggable transports — menyamarkan trafik</h4>
            <p>Bridge saja belum cukup melawan DPI. Pluggable transport mengubah “bentuk” trafik TOR agar tampak seperti hal lain. Di TOR Browser, program <code>Lyrebird</code> mengimplementasikan beberapa transport:</p>
            <ul>
              <li><strong>obfs4</strong> — membuat trafik tampak seperti byte acak. Pilihan umum pertama, cocok untuk kebanyakan kasus.</li>
              <li><strong>WebTunnel</strong> — menyembunyikan TOR di dalam koneksi HTTPS biasa sehingga tampak seperti kunjungan ke situs web normal. Transport terbaru (mulai 2024), sulit dideteksi.</li>
              <li><strong>Snowflake</strong> — merutekan lewat proxy relawan dan tampak seperti panggilan video WebRTC. Sulit diblokir tanpa ikut merusak layanan video call.</li>
              <li><strong>meek</strong> — menyalurkan lewat CDN besar (domain fronting). Andal tapi cenderung lebih lambat.</li>
            </ul>

            <h4>Cara mendapatkan bridge</h4>
            <ul>
              <li><strong>Built-in</strong> — TOR Browser menyediakan beberapa bridge bawaan; paling gampang untuk mulai.</li>
              <li><strong>bridges.torproject.org</strong> — minta bridge baru bila yang bawaan diblokir.</li>
              <li><strong>Email/Telegram</strong> — bila situs Tor Project sendiri sudah diblokir, minta bridge lewat bot email/Telegram resmi.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Tip urutan mencoba</div>
              <p>Mulai dengan <strong>obfs4</strong>. Bila gagal, coba <strong>WebTunnel</strong>. Bila masih gagal (kemungkinan bridge default sudah diblokir), minta bridge custom, lalu coba <strong>Snowflake</strong> atau <strong>meek</strong>.</p>
            </div>
          `,
          practice:`<p>Di TOR Browser, buka <em>Settings → Connection</em>. Temukan bagian Bridges dan lihat opsi “Select a Built-In Bridge”. Catat transport apa saja yang tersedia dan cocokkan dengan penjelasan di atas. (Tidak perlu mengaktifkan bila kamu tidak sedang disensor.)</p>`,
          takeaways:[
            "Relay publik bisa diblokir; bridge adalah relay tak terdaftar yang lebih sulit diblokir.",
            "Pluggable transport (obfs4, WebTunnel, Snowflake, meek) menyamarkan trafik agar lolos DPI.",
            "Lyrebird mengimplementasikan transport ini di TOR Browser; obfs4 adalah titik awal yang baik."
          ]
        },
        {
          id:"tor-censorship",
          title:"Melewati Sensor TOR (Bypassing Censorship)",
          dur:"± 5 menit",
          body:`
            <p class="lead">Di jaringan/negara yang memblokir TOR, kamu tetap bisa terhubung memakai bridge + pluggable transport. TOR Browser punya alat bantu otomatis untuk ini.</p>

            <h4>Connection Assist</h4>
            <p>Saat TOR Browser pertama dijalankan, klik <strong>“Configure Connection”</strong>. Fitur <em>Connection Assist</em> bisa mencoba mencari konfigurasi bridge yang bekerja di wilayahmu secara otomatis — sering kali ini cukup tanpa setelan manual.</p>

            <h4>Langkah manual: pilih built-in bridge</h4>
            <ol>
              <li>Buka <em>Settings → Connection</em> (atau “Configure Connection” di layar awal).</li>
              <li>Pada bagian <strong>Bridges</strong>, pilih “Select a Built-In Bridge”.</li>
              <li>Pilih transport (mulai <code>obfs4</code>), lalu klik <strong>Connect</strong>.</li>
            </ol>

            <h4>Bila built-in juga diblokir</h4>
            <p>Minta bridge baru lewat <code>bridges.torproject.org</code>, atau bila situs itu diblokir, lewat email/Telegram resmi. Tempel bridge yang kamu terima ke kolom “Add a Bridge Manually”.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian model ancaman</div>
              <p>Pilih transport sesuai tingkat sensor. Sensor ringan → obfs4 cukup. Sensor agresif tingkat negara (DPI canggih) → pertimbangkan WebTunnel atau Snowflake yang lebih sulit dibedakan dari trafik biasa.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Memakai bridge biasanya membuat koneksi <strong>lebih lambat</strong> karena ada lapisan penyamaran tambahan. Itu wajar — pakai bridge hanya saat memang diperlukan untuk melewati blokir.</p>
            </div>
          `,
          practice:`<p>Skenario: bayangkan kamu berada di jaringan yang memblokir TOR. Tuliskan urutan langkah yang akan kamu coba (Connection Assist → obfs4 built-in → minta bridge → WebTunnel/Snowflake). Menyusun “rencana” ini melatih pola pikir saat menghadapi sensor sungguhan.</p>`,
          takeaways:[
            "Klik 'Configure Connection' dan coba Connection Assist lebih dulu.",
            "Bila perlu, pilih built-in bridge (obfs4) atau minta bridge lewat web/email/Telegram.",
            "Sesuaikan transport dengan tingkat sensor; bridge memperlambat koneksi."
          ]
        },
        {
          id:"tor-vpn",
          title:"Pengantar VPN & Mengombinasikannya dengan TOR",
          dur:"± 11 menit",
          body:`
            <p class="lead">VPN (Virtual Private Network) mengenkripsi trafik dan menyembunyikan IP-mu dari ISP, lalu mengirimnya lewat server VPN. Menggabungkannya dengan TOR bisa menambah privasi — tapi paham dulu trade-off-nya.</p>

            <h4>Apa itu VPN</h4>
            <p>VPN membuat “terowongan” terenkripsi antara perangkatmu dan server VPN. ISP-mu hanya melihat bahwa kamu terhubung ke VPN, bukan situs apa yang kamu buka. Situs tujuan melihat IP server VPN, bukan IP-mu.</p>

            <h4>VPN vs TOR</h4>
            <ul>
              <li><strong>VPN</strong>: cepat, satu pihak (penyedia VPN) <em>tahu</em> identitas dan aktivitasmu → butuh <strong>kepercayaan</strong> pada penyedia. Bagus untuk privasi sehari-hari, bukan anonimitas kuat.</li>
              <li><strong>TOR</strong>: lebih lambat, terdesentralisasi, <em>tak ada</em> satu pihak yang tahu sumber+tujuan → anonimitas lebih kuat, tanpa perlu percaya satu perusahaan.</li>
            </ul>

            <h4>Dua cara mengombinasikan</h4>
            <ul>
              <li><strong>Tor-over-VPN</strong> (kamu → VPN → TOR): ISP hanya melihat trafik VPN, <em>tidak</em> tahu kamu memakai TOR. Berguna untuk menyembunyikan pemakaian TOR atau bila TOR diblokir. Tapi penyedia VPN tahu kamu memakai TOR (meski bukan isinya).</li>
              <li><strong>VPN-over-Tor</strong> (kamu → TOR → VPN): lebih rumit dan jarang diperlukan; bisa menimbulkan masalah anonimitas baru. Untuk pengguna lanjutan dengan kebutuhan spesifik.</li>
            </ul>

            <h4>Manfaat dan batasannya</h4>
            <p>Manfaat utama Tor-over-VPN: menyembunyikan fakta “saya memakai TOR” dari ISP, dan menambah satu lapis bila kamu khawatir guard node mengetahui IP-mu. Batasannya: kamu <strong>memindahkan kepercayaan</strong> ke penyedia VPN. VPN yang menyimpan log bisa jadi titik bocor. Pilih penyedia bereputasi, tanpa-log, dan bayar dengan cara yang menjaga privasi bila perlu.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>VPN <strong>bukan</strong> jubah anonim ajaib. “No-log policy” hanya sebaik kejujuran &amp; audit penyedianya. Untuk anonimitas serius, TOR (atau TAILS) tetap pondasi utamanya; VPN adalah pelengkap, bukan pengganti.</p>
            </div>
          `,
          practice:`<p>Buat tabel sederhana di catatanmu: kolom “Yang dilihat ISP”, “Yang dilihat penyedia VPN”, “Yang dilihat situs tujuan” untuk tiga skenario: (1) hanya VPN, (2) hanya TOR, (3) Tor-over-VPN. Mengisi tabel ini memaksamu memahami siapa-tahu-apa di tiap model.</p>`,
          takeaways:[
            "VPN menyembunyikan trafik dari ISP tapi mengandalkan kepercayaan pada satu penyedia.",
            "Tor-over-VPN menyembunyikan pemakaian TOR dari ISP; VPN-over-Tor rumit dan jarang perlu.",
            "VPN melengkapi, bukan menggantikan, anonimitas TOR."
          ]
        },
        {
          id:"tor-config",
          title:"Mengonfigurasi TOR untuk Keamanan & Anonimitas Maksimum",
          dur:"± 5 menit",
          body:`
            <p class="lead">Anonimitas kuat datang dari kombinasi setelan yang benar + perilaku yang disiplin. Berikut fitur inti TOR Browser dan kebiasaan yang wajib dipegang.</p>

            <h4>Fitur penting di TOR Browser</h4>
            <ul>
              <li><strong>New Identity</strong> — menutup semua tab, menghapus state, dan membuat sirkuit baru. Pakai saat ingin “mulai bersih”.</li>
              <li><strong>New Tor Circuit for this Site</strong> — ganti jalur relay untuk satu situs (mis. saat koneksi macet) tanpa reset identitas.</li>
              <li><strong>Onion-Location</strong> — bila situs punya versi <code>.onion</code>, TOR menawarkan beralih ke sana untuk koneksi yang lebih aman (tetap di dalam jaringan TOR, tanpa exit node).</li>
            </ul>

            <h4>Aturan perilaku (OPSEC) yang menentukan</h4>
            <ul>
              <li><strong>Jangan login</strong> ke akun yang terhubung identitas aslimu saat ingin anonim.</li>
              <li><strong>Jangan memaksimalkan/me-resize jendela</strong> — ukuran layar unik bisa dipakai untuk fingerprinting. Biarkan ukuran default.</li>
              <li><strong>Jangan install add-on/plugin</strong> tambahan — tiap perubahan membuatmu lebih unik dan mudah dilacak.</li>
              <li><strong>Jangan buka dokumen yang diunduh saat online</strong> (mis. PDF/DOC) — bisa memuat sumber luar di luar TOR dan membongkar IP-mu.</li>
              <li><strong>Hindari torrent lewat TOR</strong> — klien torrent kerap membocorkan IP asli.</li>
              <li><strong>Utamakan HTTPS</strong> — exit node bisa membaca trafik HTTP biasa.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Inti yang sering dilupakan</div>
              <p>TOR menyamakan semua penggunanya agar tampak identik. Begitu kamu “mengubah” browser (resize, add-on, font aneh), kamu keluar dari kerumunan itu dan jadi mudah dibedakan. <strong>Tetap “biasa-biasa saja” = lebih anonim.</strong></p>
            </div>
          `,
          practice:`<p>Buka menu TOR Browser dan temukan “New Identity” serta “New Tor Circuit for this Site”. Coba “New Tor Circuit” di sebuah situs lalu lihat indikator sirkuit (klik ikon gembok) — kamu akan melihat tiga relay berubah. Ini memperjelas konsep 3-relay dari materi pertama.</p>`,
          takeaways:[
            "Gunakan New Identity / New Circuit dan Onion-Location bila tersedia.",
            "Jangan login akun asli, jangan resize jendela, jangan tambah add-on.",
            "Tampil 'sama seperti semua orang' membuatmu lebih sulit dilacak."
          ]
        },
        {
          id:"tor-security",
          title:"Setelan Keamanan TOR & Pengantar Teori Informasi",
          dur:"± 8 menit",
          body:`
            <p class="lead">TOR Browser punya tiga tingkat keamanan. Memahami <em>kenapa</em> tiap tingkat ada membawamu ke konsep penting: <strong>teori informasi</strong> dan bagaimana keunikan bisa membongkar anonimitas.</p>

            <h4>Tiga tingkat keamanan (Security Level)</h4>
            <ul>
              <li><strong>Standard</strong> — semua fitur aktif. Paling nyaman, paling banyak permukaan serangan (JavaScript penuh, dll.).</li>
              <li><strong>Safer</strong> — JavaScript dimatikan di situs non-HTTPS, beberapa font/media dibatasi. Keseimbangan wajar untuk kebanyakan orang.</li>
              <li><strong>Safest</strong> — JavaScript dimatikan di semua situs, banyak fitur dinonaktifkan. Paling aman, banyak situs jadi “rusak”/terbatas. Untuk situasi berisiko tinggi.</li>
            </ul>
            <p>Trade-off intinya: makin aman → makin sedikit fitur → makin banyak situs tak berfungsi. Pilih sesuai model ancamanmu.</p>

            <h4>Pengantar teori informasi: kenapa keunikan = bahaya</h4>
            <p>Teori informasi mempelajari berapa banyak “informasi” yang dibawa sebuah sinyal. Dalam konteks anonimitas, tiap detail tentangmu (bahasa browser, zona waktu, resolusi layar, font terpasang, add-on, kebiasaan mengetik) menambah <strong>bit identitas</strong>. Cukup banyak detail unik digabung, dan kamu bisa diidentifikasi secara unik walau tanpa nama — ini disebut <strong>browser fingerprinting</strong>.</p>
            <p>Karena itu TOR Browser berusaha membuat semua pengguna <strong>terlihat identik</strong> (entropi rendah antar pengguna): ukuran jendela seragam, font terbatas, setelan default sama. Setiap kali kamu “mempersonalisasi”, kamu menambah entropi unik dan menurunkan anonimitas.</p>

            <h4>Serangan korelasi (correlation attack)</h4>
            <p>Pengintai yang bisa mengamati trafik di <em>kedua</em> ujung (dekat kamu dan dekat tujuan) bisa mencocokkan pola waktu &amp; volume untuk menebak bahwa keduanya orang yang sama — walau isinya terenkripsi. Inilah salah satu batas teoretis anonimitas TOR, dan alasan menghindari hal-hal yang menciptakan pola unik.</p>

            <div class="box tip">
              <div class="bx-title">◇ Rekomendasi praktis</div>
              <p>Untuk kebanyakan orang, <strong>Safer</strong> adalah titik manis. Naik ke <strong>Safest</strong> bila risikomu tinggi. Apa pun pilihanmu, jangan mengubah ukuran jendela atau menambah ekstensi.</p>
            </div>
          `,
          practice:`<p>Kunjungi situs uji fingerprint (mis. <code>coveryourtracks.eff.org</code> dari EFF) dengan browser <em>biasamu</em>, lalu bandingkan hasilnya dengan TOR Browser. Perhatikan betapa lebih “generik” (kurang unik) TOR Browser. Ini bukti nyata konsep entropi yang baru kamu pelajari.</p>`,
          takeaways:[
            "Tiga tingkat: Standard, Safer, Safest — makin aman makin terbatas fungsinya.",
            "Tiap detail unik menambah 'bit identitas'; fingerprinting menggabungkannya untuk mengenalimu.",
            "TOR berusaha menyeragamkan pengguna; korelasi trafik di dua ujung adalah batas anonimitas."
          ],
          quiz:{
            title:"Kuis Bab 1 — TOR Browser",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Pada jaringan TOR, node mana yang mengetahui alamat IP aslimu?",
               options:["Exit node","Middle node","Guard / Entry node","Semua node"],
               answer:2,
               explain:"Guard/entry node adalah relay pertama dan satu-satunya yang melihat IP-mu, tapi ia tidak tahu tujuan akhirmu."},
              {q:"Apa fungsi utama pluggable transport seperti obfs4?",
               options:["Mempercepat koneksi TOR","Menyamarkan trafik TOR agar lolos dari DPI","Menyimpan riwayat browsing","Mengganti exit node otomatis"],
               answer:1,
               explain:"Pluggable transport mengubah 'bentuk' trafik TOR agar tidak dikenali sistem Deep Packet Inspection penyensor."},
              {q:"Kenapa verifikasi GPG penting saat mengunduh TOR Browser?",
               options:["Agar download lebih cepat","Untuk memastikan installer tidak dimodifikasi/ditrojan","Untuk mengaktifkan bridge","Untuk membuat akun TOR"],
               answer:1,
               explain:"Verifikasi memastikan file persis seperti rilis resmi Tor Project, mencegah installer palsu berisi malware."},
              {q:"Transport mana yang menyembunyikan TOR di dalam koneksi HTTPS biasa dan termasuk paling baru?",
               options:["meek","obfs4","WebTunnel","Snowflake"],
               answer:2,
               explain:"WebTunnel (mulai 2024) membungkus trafik TOR dalam HTTPS sehingga tampak seperti kunjungan ke situs web normal."},
              {q:"Mengapa sebaiknya TIDAK memaksimalkan jendela TOR Browser?",
               options:["Membuat TOR lambat","Menghabiskan baterai","Ukuran layar unik bisa dipakai untuk fingerprinting","Melanggar aturan TOR"],
               answer:2,
               explain:"Ukuran jendela yang unik menambah entropi identitas dan memudahkan fingerprinting. Biarkan ukuran default."},
              {q:"Setelan keamanan mana yang mematikan JavaScript di SEMUA situs?",
               options:["Standard","Safer","Safest","Bridge mode"],
               answer:2,
               explain:"'Safest' menonaktifkan JavaScript di semua situs — paling aman, tapi banyak situs jadi terbatas."},
              {q:"Inti dari konsep teori informasi dalam anonimitas adalah…",
               options:["Makin banyak data makin cepat internet","Tiap detail unik menambah bit identitas yang bisa membongkarmu","Enkripsi membuatmu kebal","VPN selalu lebih baik dari TOR"],
               answer:1,
               explain:"Semakin unik konfigurasimu, semakin sedikit orang yang 'mirip' kamu, sehingga makin mudah diidentifikasi."}
            ]
          }
        }
      ]
    },

    /* ============================== BAB 2: TAILS ============================== */
    {
      id:"tails",
      title:"TAILS — Amnesic Incognito Live System",
      lectures:[
        {
          id:"tails-why",
          title:"Kelemahan Memakai TOR Browser di Windows",
          dur:"konsep",
          body:`
            <p class="lead">TOR Browser melindungi <em>trafik</em>, tapi sistem operasi tempatmu menjalankannya (mis. Windows) tetap bisa membocorkan jejak. Inilah alasan TAILS lahir.</p>

            <h4>Masalah menjalankan TOR di OS biasa</h4>
            <ul>
              <li><strong>Jejak di disk</strong> — Windows menyimpan banyak hal: cache, file sementara, riwayat, thumbnail, prefetch. Bahkan setelah “bersih-bersih”, sisa data sering tertinggal.</li>
              <li><strong>Malware di host</strong> — jika Windows-mu sudah terinfeksi keylogger/spyware, anonimitas TOR jadi sia-sia karena penyerang melihat segalanya sebelum dienkripsi.</li>
              <li><strong>Telemetri &amp; aplikasi lain</strong> — OS dan app lain mengirim data ke internet <em>di luar</em> TOR, berpotensi menautkan aktivitas.</li>
              <li><strong>Tidak amnesik</strong> — TOR Browser hanya satu aplikasi; sisa sistem tetap “mengingat”.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Anonimitas hanya sekuat tautan terlemah. Browser anonim di atas OS yang penuh jejak &amp; berpotensi terinfeksi adalah tautan lemah. TAILS menutup celah ini.</p>
            </div>
          `,
          takeaways:[
            "OS biasa menyimpan jejak di disk meski browser-nya anonim.",
            "Malware di host membatalkan perlindungan TOR.",
            "Aplikasi/telemetri lain bisa bocor di luar TOR — perlu pendekatan tingkat OS."
          ]
        },
        {
          id:"tails-what",
          title:"Apa Itu TAILS?",
          dur:"konsep",
          body:`
            <p class="lead">TAILS (<em>The Amnesic Incognito Live System</em>) adalah sistem operasi berbasis Debian Linux yang dijalankan dari USB, merutekan <strong>semua</strong> trafik lewat TOR, dan <strong>tidak meninggalkan jejak</strong> setelah dimatikan.</p>

            <h4>Tiga sifat inti</h4>
            <ul>
              <li><strong>Amnesik</strong> — secara default tak menulis apa pun ke disk komputer. Setiap reboot = lembar bersih, semua sesi terhapus.</li>
              <li><strong>Incognito</strong> — semua koneksi dipaksa lewat TOR; aplikasi yang mencoba langsung ke internet diblokir.</li>
              <li><strong>Live system</strong> — boot dari USB, mengubah komputer mana pun menjadi mesin aman sementara, tanpa menyentuh OS aslinya.</li>
            </ul>

            <h4>Siapa yang memakainya</h4>
            <p>Jurnalis investigasi, pelapor pelanggaran (whistleblower), aktivis HAM, dan siapa pun yang butuh tak meninggalkan jejak. TAILS terkenal dipakai untuk komunikasi sumber yang sangat sensitif.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Karena TAILS amnesik, ia juga tahan terhadap banyak malware persistent: reboot mengembalikan sistem ke kondisi bersih. Tapi ini juga berarti kamu harus sengaja mengaktifkan <em>persistence</em> bila ingin menyimpan sesuatu (dibahas nanti).</p>
            </div>
          `,
          takeaways:[
            "TAILS = OS live berbasis Debian dari USB.",
            "Sifat inti: amnesik (tak berjejak), incognito (semua lewat TOR), live (tak menyentuh OS host).",
            "Dipakai jurnalis, whistleblower, aktivis; tahan terhadap banyak malware persistent."
          ]
        },
        {
          id:"tails-vs-vm",
          title:"TAILS vs VM vs Whonix/Qubes — Memilih Lingkungan",
          dur:"konsep",
          body:`
            <p class="lead">Pertanyaan wajar: kalau cuma mau anonim, kenapa tidak menjalankan TOR di mesin virtual (VirtualBox/VMware) saja yang lebih praktis? Jawabannya ada pada <strong>siapa yang menjadi pondasi</strong> dari tumpukan sistemmu.</p>

            <h4>Konsep berlapis: siapa di bawah siapa</h4>
            <p>Bayangkan sistem sebagai tumpukan. Lapisan paling bawah selalu memegang kendali atas semua yang di atasnya:</p>
            <ul>
              <li><strong>TOR di OS biasa:</strong> <code>Hardware → Windows → TOR</code></li>
              <li><strong>TOR di VM:</strong> <code>Hardware → Windows (host) → VirtualBox → Linux (guest) → TOR</code></li>
              <li><strong>TAILS dari USB:</strong> <code>Hardware → TAILS → TOR</code></li>
              <li><strong>Whonix di atas Qubes:</strong> <code>Hardware → Qubes OS → (Gateway VM + Workstation VM) → TOR</code></li>
            </ul>

            <h4>Kenapa "TOR di VM Windows" punya kelemahan</h4>
            <p>Di skenario VM, <strong>Windows tetap menjadi fondasi</strong> yang menjalankan segalanya. Konsekuensinya:</p>
            <ul>
              <li><strong>Kalau Windows terinfeksi, semua runtuh.</strong> Keylogger/spyware di Windows berada di lapisan <em>bawah</em> VM-mu — ia bisa merekam ketikan dan menangkap layar VM <em>sebelum</em> TOR sempat mengenkripsi. TOR menyembunyikan trafik dari jaringan, bukan dari mata-mata yang sudah ada di dalam sistemmu.</li>
              <li><strong>Host meninggalkan jejak.</strong> Meski aktivitasmu di dalam VM, Windows tetap menulis ke disk: file swap/paging (bisa berisi potongan memori VM), log VirtualBox, telemetri. Sifat amnesik "bocor" ke host yang tidak amnesik.</li>
              <li><strong>Risiko salah setel jaringan.</strong> Konfigurasi VM yang keliru bisa membuat sebagian trafik lolos ke luar TOR.</li>
            </ul>

            <h4>Tiga keunggulan TAILS</h4>
            <ul>
              <li><strong>Isolasi dari OS yang berpotensi tercemar</strong> — kamu tak perlu mempercayai Windows, karena Windows-nya tidak ikut berjalan.</li>
              <li><strong>Amnesia sejati</strong> — tak ada OS lain yang menulis jejak di bawahnya.</li>
              <li><strong>Semua-lewat-TOR dipaksa di level OS</strong> — bukan hanya satu aplikasi.</li>
            </ul>

            <h4>Lalu, apakah VM tak berguna? Tidak juga</h4>
            <p>VM tetap punya tempat: ideal untuk <strong>belajar/eksperimen</strong> (seperti lab di modul ini) tanpa risiko ke sistem utama. Dan ada pendekatan VM yang justru dirancang untuk keamanan tinggi:</p>
            <ul>
              <li><strong>Whonix</strong> memakai <em>dua</em> VM — sebuah <strong>Gateway</strong> yang memaksa semua trafik lewat TOR, dan sebuah <strong>Workstation</strong> yang terisolasi total dari jaringan asli. Workstation secara teknis tak bisa mengetahui IP aslimu, sehingga menutup celah "kebocoran konfigurasi".</li>
              <li><strong>Qubes OS</strong> adalah OS yang seluruhnya dibangun di atas isolasi VM (compartmentalization). Banyak orang menjalankan Whonix di atas Qubes untuk keamanan tingkat tinggi sambil tetap bisa menyimpan/menetap.</li>
            </ul>

            <h4>Memilih sesuai model ancaman (ingat Lab 08)</h4>
            <ul>
              <li><strong>Privasi sehari-hari, ancaman rendah</strong> → TOR Browser di OS biasa.</li>
              <li><strong>Belajar / eksperimen / isolasi ringan</strong> → VM biasa.</li>
              <li><strong>Tak ingin meninggalkan jejak & tak mempercayai komputer yang dipakai</strong> → TAILS.</li>
              <li><strong>Isolasi terkuat tapi tetap bisa menetap/menyimpan, ancaman tinggi</strong> → Whonix (+ Qubes).</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Inti</div>
              <p>VM tidak "salah" — ia hanya melindungi dari hal yang berbeda. TAILS kuat justru karena ia <strong>menghapus Windows dari persamaan</strong>, sesuatu yang tak bisa dilakukan VM yang berjalan di atas Windows.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> gambar tumpukan lapisan untuk lingkungan yang biasa kamu pakai, lalu tandai lapisan mana yang "harus kamu percayai". Makin sedikit lapisan tepercaya yang berada di bawah aktivitasmu, makin kecil permukaan seranganmu.</p>`,
          takeaways:[
            "Lapisan terbawah memegang kendali; di VM Windows, Windows tetap pondasi yang harus dipercaya.",
            "TAILS menghapus OS host dari persamaan: isolasi, amnesia sejati, semua-lewat-TOR.",
            "Whonix (gateway+workstation) di atas Qubes = isolasi terkuat; pilih lingkungan sesuai model ancaman."
          ]
        },
        {
          id:"tails-install-options",
          title:"Opsi Instalasi TAILS",
          dur:"konsep",
          body:`
            <p class="lead">TAILS dipasang ke USB flash drive (minimal 8 GB). Ada beberapa jalur, dan caranya sedikit berbeda tergantung OS yang kamu pakai untuk memasangnya.</p>

            <h4>Apa yang kamu butuhkan</h4>
            <ul>
              <li><strong>USB flash drive</strong> minimal 8 GB (seluruh isinya akan terhapus).</li>
              <li><strong>Koneksi internet</strong> untuk mengunduh ± 1.2 GB.</li>
              <li><strong>Waktu</strong> sekitar setengah jam, kadang perlu perangkat kedua (HP/komputer lain) untuk membaca panduan saat instalasi.</li>
            </ul>

            <h4>USB image vs ISO</h4>
            <ul>
              <li><strong>USB image</strong> — direkomendasikan untuk dipasang langsung ke USB (mis. dengan balenaEtcher atau perintah <code>dd</code>). Mendukung fitur Persistent Storage.</li>
              <li><strong>ISO image</strong> — lebih cocok untuk burning DVD atau menjalankan di mesin virtual; Persistent Storage tidak selalu tersedia jika dijalankan dari ISO/DVD.</li>
            </ul>

            <h4>Verifikasi unduhan</h4>
            <p>Sama seperti TOR: verifikasi keaslian image TAILS sebelum dipasang. Situs <code>tails.net</code> menyediakan verifikasi otomatis di browser maupun panduan manual.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Proses instalasi <strong>menghapus seluruh isi USB</strong>. Pakai USB kosong/khusus, dan pastikan kamu memilih drive yang benar agar tidak menimpa data penting.</p>
            </div>
          `,
          takeaways:[
            "Butuh USB ≥ 8 GB (akan dihapus total), internet, dan ~30 menit.",
            "USB image direkomendasikan untuk pemasangan ke USB + mendukung Persistent Storage.",
            "Verifikasi keaslian image lewat tails.net sebelum memasang."
          ]
        },
        {
          id:"tails-install-all",
          title:"Memasang TAILS dari Semua Sistem Operasi",
          dur:"praktik",
          body:`
            <p class="lead">Alur umumnya sama di semua OS: unduh image → verifikasi → tulis ke USB. Hanya alat penulisnya yang berbeda. Selalu ikuti asisten instalasi resmi di <code>tails.net</code> karena langkah persisnya bisa berubah.</p>

            <h4>Garis besar per OS</h4>
            <ul>
              <li><strong>Windows</strong> — tails.net memandu memakai installer/penulis yang disarankan untuk menulis USB image ke flash drive. Sebagian alur menyarankan USB “perantara” lalu mengkloningnya.</li>
              <li><strong>macOS</strong> — biasanya memakai balenaEtcher untuk menulis image ke USB.</li>
              <li><strong>Linux</strong> — bisa balenaEtcher atau perintah <code>dd</code> langsung ke perangkat USB (hati-hati memilih device yang benar, mis. <code>/dev/sdX</code>).</li>
            </ul>

            <h4>Pola tiga langkah</h4>
            <ol>
              <li><strong>Unduh</strong> USB image dari tails.net.</li>
              <li><strong>Verifikasi</strong> (otomatis lewat ekstensi browser resmi, atau manual).</li>
              <li><strong>Tulis</strong> ke USB dengan alat yang sesuai OS-mu.</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Karena saat memasang kamu mungkin perlu mengikuti panduan sambil komputer me-reboot, siapkan <strong>perangkat kedua</strong> (HP/laptop lain) untuk membuka <code>tails.net/install</code> langkah demi langkah.</p>
            </div>
          `,
          practice:`<p>Tanpa harus benar-benar memasang sekarang: buka <code>tails.net/install</code>, pilih OS-mu, dan baca seluruh langkahnya sampai paham. Tuliskan alat penulis USB yang dipakai untuk OS-mu dan perkiraan waktu. Membaca penuh dulu mencegah kesalahan saat eksekusi.</p>`,
          takeaways:[
            "Pola universal: unduh → verifikasi → tulis ke USB.",
            "Alat penulis berbeda per OS (installer Windows / balenaEtcher / dd).",
            "Ikuti asisten resmi tails.net dan siapkan perangkat kedua untuk panduan."
          ]
        },
        {
          id:"tails-start",
          title:"Menjalankan (Booting) TAILS",
          dur:"praktik",
          body:`
            <p class="lead">TAILS tidak diinstal ke hard disk — kamu mem-boot komputer langsung dari USB. Triknya ada di pengaturan boot/BIOS-UEFI.</p>

            <h4>Langkah booting</h4>
            <ol>
              <li>Colok USB TAILS, lalu nyalakan/restart komputer.</li>
              <li>Tekan tombol <strong>boot menu</strong> (sering F12, F9, Esc, atau Del — beda tiap merek) untuk memilih perangkat boot.</li>
              <li>Pilih USB TAILS sebagai perangkat boot.</li>
              <li>Bila tak muncul, masuk <strong>BIOS/UEFI</strong> dan nonaktifkan sementara <em>Secure Boot</em> / aktifkan boot dari USB sesuai panduan tails.net.</li>
            </ol>

            <h4>Welcome Screen (Greeter)</h4>
            <p>Setelah boot, muncul <strong>Welcome Screen</strong>. Di sini kamu bisa:</p>
            <ul>
              <li>Membuka/mengaktifkan <strong>Persistent Storage</strong> (bila sudah dibuat) dengan memasukkan passphrase.</li>
              <li>Mengatur <strong>bahasa &amp; keyboard</strong>.</li>
              <li>Membuka <em>Additional Settings</em> untuk mengatur <strong>password administrator</strong>, dukungan bridge TOR, dll.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Catat tombol boot-menu komputermu. Di banyak laptop, menahan tombol itu tepat saat menyalakan akan menampilkan daftar perangkat boot.</p>
            </div>
          `,
          practice:`<p>Cari tahu tombol boot-menu untuk merek komputermu (Google: “boot menu key [merek laptop]”). Catat juga cara masuk BIOS/UEFI-nya. Ini langkah kecil tapi sering jadi penghambat pertama orang baru.</p>`,
          takeaways:[
            "TAILS di-boot dari USB lewat boot menu / BIOS-UEFI, bukan diinstal ke disk.",
            "Mungkin perlu menonaktifkan Secure Boot sementara.",
            "Welcome Screen tempat membuka Persistent Storage, mengatur bahasa, dan password admin."
          ]
        },
        {
          id:"tails-basics",
          title:"Dasar-Dasar TAILS",
          dur:"praktik",
          body:`
            <p class="lead">Begitu masuk desktop TAILS, kamu menemukan lingkungan GNOME yang ringkas dengan aplikasi privasi siap pakai. Semua trafik otomatis lewat TOR.</p>

            <h4>Menghubungkan ke TOR</h4>
            <p>Setelah login dari Welcome Screen, TAILS menampilkan <strong>Tor Connection</strong> untuk menyambung ke jaringan TOR — langsung, atau lewat bridge bila kamu disensor. Tidak ada trafik keluar sebelum TOR tersambung.</p>

            <h4>Aplikasi bawaan</h4>
            <ul>
              <li><strong>Tor Browser</strong> — sudah dikonfigurasi.</li>
              <li><strong>Thunderbird</strong> (email), <strong>KeePassXC</strong> (manajer kata sandi), <strong>OnionShare</strong> (berbagi file lewat TOR), editor dokumen, dan alat enkripsi GnuPG.</li>
            </ul>

            <h4>Fitur keamanan khas</h4>
            <ul>
              <li><strong>MAC address spoofing</strong> — default mengacak alamat MAC agar perangkatmu tak mudah dikenali di jaringan lokal.</li>
              <li><strong>Password administrator</strong> — nonaktif secara default; aktifkan dari Welcome Screen hanya bila perlu tugas admin.</li>
              <li><strong>Amnesia</strong> — saat shutdown, RAM dibersihkan dan tak ada jejak di disk host.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Jelajahi menu <em>Applications</em>. Mengenali alat bawaan (terutama KeePassXC, OnionShare, dan GnuPG) akan sangat berguna untuk alur kerja aman nanti.</p>
            </div>
          `,
          practice:`<p>Jika sudah punya USB TAILS, boot lalu sambungkan ke TOR dan buka Applications. Daftar 5 aplikasi yang menarik bagimu dan tebak fungsinya. Bila belum, baca daftar aplikasi bawaan di tails.net/doc.</p>`,
          takeaways:[
            "TAILS memaksa semua trafik lewat TOR; sambungkan via Tor Connection dulu.",
            "Aplikasi privasi siap pakai: Tor Browser, KeePassXC, OnionShare, Thunderbird, GnuPG.",
            "MAC spoofing aktif default; password admin nonaktif default; RAM dibersihkan saat shutdown."
          ]
        },
        {
          id:"tails-persistence",
          title:"Apa Itu Persistence & Kenapa Kita Butuh?",
          dur:"konsep",
          body:`
            <p class="lead">Sifat amnesik TAILS hebat untuk privasi, tapi merepotkan bila kamu ingin menyimpan file, bookmark, atau aplikasi tambahan antar sesi. Solusinya: <strong>Persistent Storage</strong>.</p>

            <h4>Masalahnya</h4>
            <p>Karena setiap reboot menghapus segalanya, instalasi TAILS dari image tidak bisa diperbarui dan tak bisa menyimpan file. Setiap kali mulai, kamu kembali dari nol.</p>

            <h4>Solusinya: Persistent Storage</h4>
            <p>Persistent Storage adalah <strong>partisi terenkripsi</strong> di ruang kosong USB TAILS-mu. Hanya data yang kamu pilih yang disimpan di sana, dan hanya bisa dibuka dengan passphrase di Welcome Screen. Sisanya tetap amnesik.</p>

            <h4>Trade-off yang harus disadari</h4>
            <p>Persistence sedikit mengurangi keunggulan “tanpa jejak”: keberadaan partisi persisten <em>bisa terdeteksi</em> oleh siapa pun yang punya akses fisik ke USB-mu (walau isinya terenkripsi). Untuk anonimitas maksimum di situasi berisiko sangat tinggi, sebagian orang justru memilih TAILS <strong>tanpa</strong> persistence.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Persistent Storage terenkripsi, tapi <strong>tidak tersembunyi</strong>. Pakai passphrase kuat dan unik. Bila lupa, datanya <strong>tak bisa dipulihkan</strong>.</p>
            </div>
          `,
          takeaways:[
            "TAILS amnesik: tanpa persistence, semua hilang tiap reboot.",
            "Persistent Storage = partisi terenkripsi untuk menyimpan data terpilih.",
            "Trade-off: keberadaannya bisa terdeteksi; untuk risiko ekstrem, sebagian memilih tanpa persistence."
          ]
        },
        {
          id:"tails-enable-persistence",
          title:"Mengaktifkan Persistence Terenkripsi",
          dur:"praktik",
          body:`
            <p class="lead">Mengaktifkan Persistent Storage dilakukan lewat asisten bawaan. Versi TAILS modern menyederhanakan ini lewat antarmuka <em>Persistent Storage</em>.</p>

            <h4>Langkah membuat Persistent Storage</h4>
            <ol>
              <li>Boot TAILS dari USB (tanpa persistence dulu).</li>
              <li>Buka <strong>Applications → Tails → Persistent Storage</strong> (atau lewat opsi “Create Persistent Storage” di Welcome Screen).</li>
              <li>Buat <strong>passphrase</strong>. Tor Project menyarankan frasa panjang <strong>5–7 kata acak</strong> (lebih mudah diingat, sulit ditebak) ketimbang kata sandi pendek rumit.</li>
              <li>Pilih <strong>fitur yang ingin dipersistenkan</strong> — mis. Persistent Folder (file pribadi), Additional Software, Bookmark/Tor Browser, kunci GnuPG, dll.</li>
              <li>Simpan. Perubahan setelan persistence langsung berlaku; sebagian fitur baru aktif setelah <strong>restart</strong>.</li>
            </ol>

            <h4>Memakainya</h4>
            <p>Saat reboot berikutnya, Welcome Screen menampilkan kolom untuk <strong>membuka Persistent Storage</strong> dengan passphrase-mu. File yang kamu taruh di folder <em>Persistent</em> akan tersedia lagi.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Bahaya kehilangan data</div>
              <p>Tidak ada “lupa passphrase → reset”. Bila passphrase hilang, Persistent Storage <strong>tidak bisa dibuka selamanya</strong>. Simpan passphrase dengan aman (untuk sementara boleh dicatat sampai hafal, lalu hancurkan catatannya).</p>
            </div>
          `,
          practice:`<p>Susun passphrase 5–7 kata acak (boleh bahasa Indonesia) yang BISA kamu ingat tapi tak bisa ditebak orang lain — hindari nama/tanggal pribadi. Pikirkan juga fitur apa yang akan kamu persistenkan (folder pribadi? bookmark?). Rencana ini membuat aktivasi nanti cepat dan aman.</p>`,
          takeaways:[
            "Buat lewat Applications → Tails → Persistent Storage (atau Welcome Screen).",
            "Pakai passphrase 5–7 kata acak; pilih fitur yang dipersistenkan; sebagian perlu restart.",
            "Lupa passphrase = data hilang permanen — simpan baik-baik."
          ]
        },
        {
          id:"tails-tor-browser",
          title:"Memakai TOR Browser di TAILS",
          dur:"praktik",
          body:`
            <p class="lead">Di TAILS, TOR Browser sudah dikonfigurasi optimal — kamu tinggal pakai. Tetap ada beberapa hal khas yang perlu kamu tahu.</p>

            <h4>Sudah siap pakai</h4>
            <p>Tidak perlu setel apa pun; TOR Browser di TAILS langsung lewat jaringan TOR yang sudah tersambung dari Welcome Screen. Semua prinsip OPSEC dari Bab 1 tetap berlaku (jangan resize, jangan login akun asli, dll.).</p>

            <h4>Hal khusus di TAILS</h4>
            <ul>
              <li><strong>Folder unduhan &amp; persistence</strong> — file yang diunduh hilang saat reboot kecuali kamu menyimpannya ke folder Persistent.</li>
              <li><strong>Security Level</strong> — atur Standard/Safer/Safest sama seperti di Bab 1, sesuai model ancaman.</li>
              <li><strong>Bookmark</strong> — bisa dipersistenkan bila fitur terkait Tor Browser kamu aktifkan di Persistent Storage.</li>
              <li><strong>Membuka file unduhan</strong> — berhati-hatilah membuka dokumen; sama seperti di Bab 1, dokumen bisa memanggil sumber luar. TAILS memaksa lewat TOR, tapi tetap waspada.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Keunggulan besar: bahkan jika sebuah situs mencoba menjalankan sesuatu yang jahat, sifat amnesik TAILS menghapusnya saat reboot. Tetap, jangan mengandalkan ini sebagai izin untuk ceroboh.</p>
            </div>
          `,
          takeaways:[
            "TOR Browser di TAILS siap pakai; prinsip OPSEC Bab 1 tetap berlaku.",
            "Unduhan & bookmark hilang saat reboot kecuali dipersistenkan.",
            "Atur Security Level sesuai kebutuhan; tetap waspada membuka dokumen."
          ]
        },
        {
          id:"tails-captive",
          title:"Menghubungkan ke Captive Portal",
          dur:"praktik",
          body:`
            <p class="lead">WiFi hotel, kampus, atau kafe sering memunculkan “halaman login” (captive portal) sebelum memberi internet. Karena TAILS memaksa semua lewat TOR, halaman ini bisa jadi penghalang — TAILS menyediakan solusi khusus.</p>

            <h4>Apa itu captive portal</h4>
            <p>Jaringan publik kerap mengarahkanmu ke halaman web untuk menyetujui syarat atau login sebelum trafik lain diizinkan. Halaman ini biasanya tidak bisa dibuka lewat TOR.</p>

            <h4>Unsafe Browser</h4>
            <p>TAILS punya <strong>Unsafe Browser</strong> — browser khusus yang <em>tidak</em> lewat TOR, semata untuk membuka captive portal. Kamu mengaktifkannya saat dibutuhkan (mis. dari Welcome Screen / setelan), login portal, lalu kembali memakai TOR seperti biasa.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Bahaya — pakai dengan benar</div>
              <p>Unsafe Browser <strong>tidak anonim</strong>. Gunakan <em>hanya</em> untuk melewati halaman login portal — jangan pernah membuka situs sensitif atau login akun penting di sana, karena trafiknya tidak lewat TOR.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Setelah berhasil melewati portal, tutup Unsafe Browser dan lanjutkan semua aktivitas di TOR Browser biasa.</p>
            </div>
          `,
          takeaways:[
            "Captive portal = halaman login WiFi publik yang sering tak bisa dibuka via TOR.",
            "TAILS menyediakan Unsafe Browser khusus untuk membuka portal tersebut.",
            "Unsafe Browser tidak anonim — pakai hanya untuk login portal, jangan untuk hal sensitif."
          ]
        },
        {
          id:"tails-vpn",
          title:"Menghubungkan ke VPN dari TAILS",
          dur:"lanjutan",
          body:`
            <p class="lead">Menggabungkan VPN dengan TAILS itu mungkin, tetapi <strong>bukan</strong> fitur standar dan termasuk topik lanjutan. Penting memahami batasannya sebelum mencoba.</p>

            <h4>Kenapa rumit</h4>
            <p>TAILS dirancang memaksa <strong>semua</strong> trafik lewat TOR. Menyisipkan VPN ke dalam alur ini bertentangan dengan desain dasarnya, sehingga tidak didukung secara resmi lewat klik sederhana dan berisiko salah konfigurasi yang justru membocorkan data.</p>

            <h4>Skenario yang masuk akal</h4>
            <ul>
              <li><strong>VPN sebelum TOR (Tor-over-VPN)</strong> — pada level jaringan/router sebelum TAILS, agar ISP tak melihat pemakaian TOR. Ini lebih aman dilakukan di luar TAILS (mis. di router) ketimbang memodifikasi TAILS.</li>
              <li><strong>Bridge sebagai alternatif</strong> — untuk sekadar menyembunyikan pemakaian TOR atau melewati sensor, <strong>bridge TAILS</strong> sering lebih tepat dan didukung resmi, dibanding memaksakan VPN.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Rekomendasi</div>
              <p>Untuk kebanyakan kebutuhan, gunakan <strong>bridge</strong> di TAILS (didukung resmi) alih-alih VPN. Integrasi VPN di dalam TAILS sebaiknya hanya oleh pengguna mahir yang paham persis konsekuensinya, dan dengan mengikuti dokumentasi resmi.</p>
            </div>
          `,
          takeaways:[
            "TAILS memaksa semua trafik lewat TOR; integrasi VPN bukan fitur standar & berisiko salah konfigurasi.",
            "Untuk menyembunyikan pemakaian TOR / lawan sensor, bridge TAILS biasanya pilihan resmi yang lebih tepat.",
            "VPN+TAILS adalah topik lanjutan — ikuti dokumentasi resmi bila benar-benar perlu."
          ],
          quiz:{
            title:"Kuis Bab 2 — TAILS",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Kepanjangan TAILS adalah…",
               options:["The Anonymous Internet Login System","The Amnesic Incognito Live System","Tor And Internet Layer Security","Trusted Anonymous Internet Linux Suite"],
               answer:1,
               explain:"TAILS = The Amnesic Incognito Live System — sistem live yang 'lupa ingatan' dan menyamarkan identitas."},
              {q:"Apa kelemahan utama menjalankan TOR Browser di Windows biasa?",
               options:["TOR jadi ilegal","OS menyimpan jejak di disk & bisa terinfeksi malware","TOR tidak bisa update","Tidak ada bridge"],
               answer:1,
               explain:"OS biasa meninggalkan jejak dan bisa terinfeksi malware yang melihat data sebelum dienkripsi TOR."},
              {q:"Secara default, apa yang terjadi pada data saat TAILS dimatikan?",
               options:["Disimpan ke hard disk","Dikirim ke Tor Project","Dihapus / tidak meninggalkan jejak","Diunggah ke cloud"],
               answer:2,
               explain:"TAILS amnesik: RAM dibersihkan dan tak ada jejak ditulis ke disk host."},
              {q:"Apa fungsi Persistent Storage di TAILS?",
               options:["Mempercepat booting","Partisi terenkripsi untuk menyimpan data terpilih antar sesi","Mengganti TOR dengan VPN","Menyembunyikan TAILS dari BIOS"],
               answer:1,
               explain:"Persistent Storage adalah partisi terenkripsi untuk menyimpan file/setelan yang kamu pilih."},
              {q:"Untuk apa Unsafe Browser di TAILS?",
               options:["Browsing anonim lebih cepat","Hanya untuk membuka captive portal (login WiFi)","Mengakses .onion","Menjalankan VPN"],
               answer:1,
               explain:"Unsafe Browser TIDAK lewat TOR dan hanya untuk melewati halaman login WiFi publik."},
              {q:"Rekomendasi passphrase Persistent Storage menurut Tor Project adalah…",
               options:["4 angka PIN","1 kata rumit dengan simbol","5–7 kata acak","Tanggal lahir"],
               answer:2,
               explain:"Frasa 5–7 kata acak lebih mudah diingat sekaligus jauh lebih sulit ditebak."}
            ]
          }
        }
      ]
    },

    /* ===================== BAB 3: DARK NET ENTRY POINTS ===================== */
    {
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
    },

    /* ================= BAB 4: PRAKTIK LANJUTAN — HANDS-ON LABS ================= */
    {
      id:"labs",
      title:"Praktik Lanjutan — Hands-On Labs",
      lectures:[
        {
          id:"lab-intro",
          title:"Cara Kerja Lab & Aturan Main",
          dur:"baca dulu",
          body:`
            <p class="lead">Bab ini bukan teori lagi — ini <strong>lab</strong>. Tiap lab punya tujuan, alat, langkah, dan cara memverifikasi bahwa kamu berhasil. Targetnya membangun keterampilan teknis nyata, bukan menghafal.</p>

            <h4>Lingkungan yang disarankan</h4>
            <p>Sebagian besar lab paling aman dikerjakan di dalam <strong>TAILS</strong> (dari Bab 2) atau, untuk lab non-anonim seperti menjalankan onion service uji, di mesin Linux/VM yang kamu kendalikan. Jangan campur lingkungan eksperimen dengan identitas/akun pribadimu.</p>

            <h4>Format tiap lab</h4>
            <ul>
              <li><strong>🎯 Tujuan</strong> — apa yang akan kamu kuasai.</li>
              <li><strong>🧰 Alat</strong> — yang perlu disiapkan.</li>
              <li><strong>▸ Langkah</strong> — instruksi praktik.</li>
              <li><strong>✅ Verifikasi</strong> — cara tahu kamu berhasil.</li>
              <li><strong>🧠 Debrief</strong> — kenapa ini penting.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Aturan main (wajib)</div>
              <p>Semua lab di sini bersifat <strong>defensif &amp; legal</strong>: mengeraskan sistemmu sendiri, mengunjungi layanan yang sah, mengenkripsi komunikasimu sendiri, dan menjalankan layanan uji milikmu sendiri. Jangan memakai keterampilan ini untuk mengakses pasar/konten ilegal, membobol sistem orang lain, atau menipu. Patuhi UU yang berlaku — kamu sudah menyatakan komitmen ini, dan lab ini dirancang agar tetap di jalur itu.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Mindset</div>
              <p>Aturan emas seluruh bab: <strong>uji di lingkungan terisolasi, verifikasi setiap asumsi, jangan pernah mencampur identitas.</strong> Profesional keamanan dibedakan dari amatir bukan oleh alat, tapi oleh disiplin ini.</p>
            </div>
          `,
          takeaways:[
            "Lab dikerjakan di lingkungan terisolasi (TAILS / VM), terpisah dari identitas pribadi.",
            "Tiap lab: Tujuan → Alat → Langkah → Verifikasi → Debrief.",
            "Semua lab defensif & legal: harden, verifikasi, enkripsi, dan layanan uji milik sendiri."
          ]
        },
        {
          id:"lab-tails-build",
          title:"Lab 01 — Membangun & Memverifikasi USB TAILS",
          dur:"lab · 45–60 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> punya USB TAILS yang terverifikasi asli, bisa boot, dan benar-benar amnesik — fondasi semua lab berikutnya.</p>

            <h4>🧰 Alat</h4>
            <ul>
              <li>USB flash drive kosong ≥ 8 GB (isinya akan terhapus).</li>
              <li>Komputer + internet untuk mengunduh image (± 1.2 GB).</li>
              <li>GnuPG (untuk verifikasi) — sudah ada di Linux/macOS; di Windows pakai Gpg4win.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Unduh USB image TAILS dari <code>tails.net</code> (bukan sumber lain).</li>
              <li><strong>Verifikasi keaslian</strong> — pakai verifikasi otomatis di browser yang disediakan tails.net, ATAU verifikasi manual: impor kunci penandatangan Tails, unduh file signature, lalu jalankan <code>gpg --verify tails-*.img.sig tails-*.img</code>. Cari hasil <em>“Good signature”</em>.</li>
              <li><strong>Tulis ke USB</strong> dengan balenaEtcher (lintas-OS) atau <code>dd</code> di Linux (hati-hati pilih device yang benar).</li>
              <li><strong>Boot</strong> dari USB lewat boot menu / BIOS-UEFI (lihat Bab 2).</li>
              <li>Dari Welcome Screen, sambungkan ke TOR (Tor Connection).</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Verifikasi GPG menghasilkan <em>“Good signature”</em> dari kunci Tails resmi.</li>
              <li>Komputer berhasil boot ke desktop TAILS dari USB.</li>
              <li>Tor Connection berhasil tersambung.</li>
              <li><strong>Uji amnesia</strong>: buat file di Desktop, reboot tanpa persistence — file harus hilang. Ini bukti sifat amnesik bekerja.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Langkah verifikasi GPG adalah yang paling sering dilewati orang — padahal di sinilah serangan rantai pasok (image palsu) terjadi. Dengan menyelesaikan lab ini, kamu sudah mempraktikkan kontrol keamanan yang bahkan banyak pengguna “mahir” abaikan.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Pastikan kamu memilih device USB yang benar saat menulis image. Salah pilih bisa menimpa drive lain. Cabut drive eksternal lain yang tidak perlu selama proses ini.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> dokumentasikan fingerprint kunci penandatangan Tails yang kamu pakai untuk verifikasi, dan cocokkan dengan yang dipublikasikan di tails.net. Menuliskannya melatih kebiasaan memverifikasi <em>kunci</em>, bukan hanya menjalankan perintah.</p>`,
          takeaways:[
            "Verifikasi GPG image ('Good signature') sebelum menulis ke USB.",
            "Tulis dengan balenaEtcher/dd, pilih device dengan hati-hati.",
            "Uji amnesia: buat file → reboot → harus hilang."
          ]
        },
        {
          id:"lab-harden",
          title:"Lab 02 — Hardening & Uji Kebocoran (Leak Testing)",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> membuktikan secara empiris bahwa lingkunganmu tidak membocorkan identitas — bukan sekadar berasumsi “TOR pasti aman”.</p>

            <h4>🧰 Alat</h4>
            <ul>
              <li>TAILS yang sudah jalan (Lab 01), atau TOR Browser di OS biasamu untuk sebagian tes.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li><strong>Konfirmasi semua trafik lewat TOR.</strong> Di TAILS ini dipaksa secara desain; verifikasi dengan membuka <code>check.torproject.org</code> — harus muncul konfirmasi bahwa kamu memakai TOR.</li>
              <li><strong>Uji fingerprint browser.</strong> Buka <code>coveryourtracks.eff.org</code> (EFF). Bandingkan keunikan TOR Browser vs browser biasamu. Catat metrik “bits of identifying information”.</li>
              <li><strong>Uji konsistensi waktu/zona.</strong> Pastikan zona waktu &amp; locale browser tidak membocorkan lokasi aslimu (TOR Browser menyeragamkan ini — verifikasi tidak ada yang aneh).</li>
              <li><strong>Cek MAC spoofing (TAILS).</strong> Di terminal, bandingkan MAC yang dilaporkan dengan MAC fisik perangkat — TAILS mengacaknya secara default.</li>
              <li><strong>Disiplin perilaku.</strong> Konfirmasi ukuran jendela default (tidak di-maximize), tidak ada add-on tambahan, JavaScript sesuai Security Level yang kamu pilih.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li><code>check.torproject.org</code> mengonfirmasi koneksi TOR.</li>
              <li>Skor fingerprint TOR Browser jauh lebih generik daripada browser biasamu.</li>
              <li>MAC address (di TAILS) berbeda dari MAC fisik.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Anonimitas yang “dirasakan” sering berbeda dari yang “terbukti”. Lab ini mengubah keyakinan jadi pengukuran. Browser fingerprinting adalah ancaman nyata yang tak bergantung pada IP — dan satu-satunya cara melawannya adalah tampil identik dengan jutaan pengguna lain (ingat teori informasi di Bab 1).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Jadikan uji fingerprint kebiasaan rutin setelah update besar — perubahan kecil bisa diam-diam menambah keunikanmu.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> jalankan tes fingerprint pada (a) browser harianmu, (b) TOR Browser Standard, (c) TOR Browser Safest. Buat tabel perbandingan “bits of identifying info”. Datamu sendiri jadi bukti paling meyakinkan tentang trade-off keamanan vs kenyamanan.</p>`,
          takeaways:[
            "Verifikasi koneksi TOR via check.torproject.org, bukan berasumsi.",
            "Ukur fingerprint dengan EFF Cover Your Tracks; TOR Browser harus generik.",
            "Konfirmasi MAC spoofing di TAILS; jaga disiplin perilaku."
          ]
        },
        {
          id:"lab-legit-onion",
          title:"Lab 03 — Mengunjungi Onion Service Sah dengan Aman",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> berlatih “turun langsung” ke onion service — tapi ke tujuan yang <strong>sah, aman, dan terverifikasi</strong> — sambil melatih keterampilan paling penting: verifikasi alamat.</p>

            <h4>🧰 Alat</h4>
            <ul><li>TOR Browser (di TAILS atau desktop).</li></ul>

            <h4>▸ Langkah — metode verifikasi yang benar</h4>
            <ol>
              <li><strong>Mulai dari clear web resmi.</strong> Buka situs resmi layanan di clear web, lalu temukan alamat <code>.onion</code> yang <em>mereka publikasikan sendiri</em>. Inilah sumber kebenaran — bukan direktori acak.</li>
              <li><strong>Salin alamat dari sumber resmi</strong> dan buka di TOR Browser.</li>
              <li><strong>Perhatikan Onion-Location.</strong> Banyak situs sah otomatis menawarkan beralih ke versi .onion saat dibuka di TOR — ini sinyal keaslian yang kuat.</li>
              <li><strong>Inspeksi sirkuit.</strong> Klik ikon gembok untuk melihat sirkuit TOR; untuk .onion, perhatikan tidak ada exit node (koneksi tetap di dalam jaringan TOR).</li>
            </ol>

            <h4>Target latihan yang sah (ambil alamatnya dari situs resmi mereka)</h4>
            <ul>
              <li><strong>Tor Project</strong> — proyek di balik TOR itu sendiri.</li>
              <li><strong>DuckDuckGo</strong> — mesin pencari dengan onion resmi.</li>
              <li><strong>SecureDrop milik media tepercaya</strong> (mis. ProPublica, The Guardian) — sistem komunikasi sumber.</li>
              <li><strong>Mirror berita</strong> (mis. BBC) yang menembus sensor.</li>
              <li><strong>Facebook</strong> &amp; beberapa layanan email terenkripsi yang menyediakan onion resmi.</li>
            </ul>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu membuka minimal satu onion service yang alamatnya kamu verifikasi dari sumber resmi clear web.</li>
              <li>Kamu bisa menjelaskan kenapa kamu yakin alamat itu asli (dipublikasikan resmi + Onion-Location).</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Inilah inti “masuk dark web” yang sehat: bukan mengklik tautan acak, melainkan menjangkau layanan yang kamu <em>verifikasi</em>. Begitu kamu kuasai alur verifikasi ini, kamu kebal terhadap mayoritas penipuan kloning — karena kamu tak pernah mempercayai alamat yang tak bisa kamu telusuri ke sumber resmi.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Jangan</div>
              <p>Jangan menyalin alamat .onion dari catatan/teman/forum tanpa memverifikasi ke sumber resmi. Alamat onion acak panjang dirancang sulit dibedakan — satu karakter beda bisa jadi situs kloning.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan verifikasi-silang:</strong> pilih satu layanan, lalu temukan alamat .onion-nya dari DUA sumber resmi berbeda (mis. situs utama + akun/repo resmi). Pastikan keduanya cocok persis. Bila berbeda, jangan dipercaya. Ini drill anti-phishing paling ampuh.</p>`,
          takeaways:[
            "Selalu ambil alamat .onion dari sumber resmi clear web, bukan direktori acak.",
            "Onion-Location & sirkuit tanpa exit node = sinyal keaslian.",
            "Verifikasi-silang dari dua sumber resmi mengalahkan mayoritas penipuan kloning."
          ]
        },
        {
          id:"lab-pgp",
          title:"Lab 04 — Komunikasi Terenkripsi dengan PGP/GnuPG",
          dur:"lab · 45 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> menguasai enkripsi end-to-end dengan PGP — keterampilan inti untuk komunikasi sensitif yang isinya hanya bisa dibaca penerima yang dituju.</p>

            <h4>🧰 Alat</h4>
            <ul><li>GnuPG (bawaan TAILS/Linux/macOS; Gpg4win di Windows). Opsional: KeePassXC untuk menyimpan kunci/passphrase.</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li><strong>Buat keypair:</strong> <code>gpg --full-generate-key</code> (pilih kunci modern, beri masa berlaku, dan passphrase kuat).</li>
              <li><strong>Ekspor kunci publikmu:</strong> <code>gpg --armor --export NAMA &gt; publik.asc</code> — ini yang kamu bagikan ke orang lain.</li>
              <li><strong>Impor kunci publik lawan bicara:</strong> <code>gpg --import kunci_mereka.asc</code>.</li>
              <li><strong>Verifikasi fingerprint secara out-of-band</strong> — bandingkan fingerprint lewat saluran berbeda (telepon/tatap muka) untuk memastikan kunci benar-benar milik orang itu, bukan penyusup.</li>
              <li><strong>Enkripsi + tanda tangani pesan:</strong> <code>gpg --encrypt --sign --armor -r PENERIMA pesan.txt</code>.</li>
              <li><strong>Dekripsi &amp; verifikasi:</strong> <code>gpg --decrypt pesan.asc</code> — perhatikan konfirmasi “Good signature”.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu bisa mengenkripsi pesan ke kunci publikmu sendiri lalu mendekripsinya kembali (latihan solo).</li>
              <li>Saat mendekripsi pesan bertanda tangan, GnuPG melaporkan tanda tangan valid.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Kunci publik untuk mengenkripsi, kunci privat untuk mendekripsi; tanda tangan membuktikan asal &amp; keaslian. Bagian tersulit bukan perintahnya, melainkan <strong>memverifikasi fingerprint</strong> — tanpa itu, kamu bisa mengenkripsi ke penyusup yang menyamar. Inilah “web of trust”.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Kunci privat + passphrase adalah identitasmu. Simpan kunci privat hanya di lingkungan tepercaya (mis. Persistent Storage TAILS terenkripsi), dan jangan pernah membagikannya. Yang dibagikan hanya kunci <em>publik</em>.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buat dua keypair (mewakili dua orang) di lingkungan uji, lalu kirim pesan terenkripsi bolak-balik di antara keduanya, lengkap dengan verifikasi tanda tangan. Mensimulasikan kedua sisi membuatmu paham alur penuh enkripsi & otentikasi.</p>`,
          takeaways:[
            "Publik untuk enkripsi, privat untuk dekripsi; tanda tangan membuktikan keaslian.",
            "Verifikasi fingerprint out-of-band — langkah krusial yang sering dilupakan.",
            "Lindungi kunci privat; bagikan hanya kunci publik."
          ]
        },
        {
          id:"lab-onionshare",
          title:"Lab 05 — Berbagi File Anonim dengan OnionShare",
          dur:"lab · 25 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> berbagi file langsung ke orang lain lewat onion service sementara — tanpa server pihak ketiga, tanpa meninggalkan jejak akun.</p>

            <h4>🧰 Alat</h4>
            <ul><li>OnionShare (bawaan TAILS; tersedia juga lintas-OS). Idealnya dua perangkat milikmu untuk uji coba.</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Buka OnionShare, mode <strong>Share Files</strong>, tambahkan file uji.</li>
              <li>OnionShare membuat <strong>onion service sementara</strong> dan memberi alamat + kunci akses.</li>
              <li>Buka alamat itu di TOR Browser pada perangkat keduamu, unduh file.</li>
              <li>Coba mode lain: <strong>Receive</strong> (menerima file dari orang lain) dan <strong>Chat</strong> (obrolan anonim sementara).</li>
              <li>Tutup OnionShare — alamatnya langsung mati. Tidak ada yang tersisa.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>File berpindah antar perangkatmu lewat alamat .onion sementara.</li>
              <li>Setelah ditutup, alamat tidak lagi bisa diakses.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>OnionShare menunjukkan kekuatan hidden service untuk hal sah: berbagi file P2P yang aman tanpa cloud, tanpa akun, tanpa metadata terpusat. Inilah teknologi yang sama yang dipakai jurnalis &amp; sumber untuk bertukar dokumen dengan aman.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk berbagi yang lebih aman, gabungkan dengan Lab 04: enkripsi file dengan PGP dulu, baru kirim lewat OnionShare. Dua lapis: anonimitas transport + kerahasiaan isi.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> enkripsi sebuah file dengan PGP (Lab 04), kirim lewat OnionShare ke perangkat keduamu, lalu dekripsi di sana. Kamu baru saja membangun alur transfer rahasia ujung-ke-ujung dari nol.</p>`,
          takeaways:[
            "OnionShare membuat onion service sementara untuk berbagi/menerima file & chat.",
            "Tidak ada server pihak ketiga; alamat mati saat ditutup.",
            "Gabungkan dengan PGP untuk kerahasiaan isi + anonimitas transport."
          ]
        },
        {
          id:"lab-host-onion",
          title:"Lab 06 — Menjalankan Onion Service-mu Sendiri",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> memahami hidden service dari <em>dalam</em> dengan menjalankan satu milikmu sendiri — cara terbaik benar-benar mengerti cara kerja .onion.</p>

            <h4>🧰 Alat</h4>
            <ul><li>Mesin Linux/VM yang kamu kendalikan, paket <code>tor</code>, dan web server lokal sederhana (mis. <code>python3 -m http.server 8080</code>).</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Jalankan web server lokal di port 8080 yang menyajikan halaman HTML sederhana buatanmu.</li>
              <li>Edit file konfigurasi Tor (<code>torrc</code>) dan tambahkan:
                <br><code>HiddenServiceDir /var/lib/tor/lab_service/</code>
                <br><code>HiddenServicePort 80 127.0.0.1:8080</code></li>
              <li>Restart Tor. Tor otomatis membuat kunci dan alamat <strong>v3 .onion</strong> di folder <code>HiddenServiceDir</code> (lihat file <code>hostname</code>).</li>
              <li>Buka alamat .onion itu di TOR Browser — kamu sedang mengunjungi situs yang kamu host sendiri lewat jaringan TOR.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>File <code>hostname</code> berisi alamat .onion-mu.</li>
              <li>Halaman buatanmu terbuka di TOR Browser lewat alamat tersebut.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Sekarang konsep abstrak jadi nyata: alamat .onion sebenarnya adalah representasi <strong>kunci publik</strong> layanan; tak ada DNS, tak ada IP yang terekspos. Memahami ini dari sisi operator membuatmu jauh lebih jago menilai layanan dari sisi pengunjung.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Hanya konten yang sah</div>
              <p>Host <strong>hanya</strong> konten yang legal dan boleh kamu sebarkan (mis. halaman uji buatanmu). Menjalankan onion service untuk menyajikan konten ilegal tetap melanggar hukum. Lab ini murni untuk memahami teknologi.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> amankan layanan ujimu dengan <em>client authorization</em> (hanya klien dengan kunci yang kamu izinkan yang bisa membuka). Ini memperkenalkanmu pada onion service privat — pola yang dipakai untuk berbagi terbatas.</p>`,
          takeaways:[
            "Onion service dibuat lewat HiddenServiceDir + HiddenServicePort di torrc.",
            "Alamat v3 .onion = representasi kunci publik layanan; tanpa DNS/IP terekspos.",
            "Host hanya konten legal; lab ini untuk memahami teknologi dari sisi operator."
          ]
        },
        {
          id:"lab-scam",
          title:"Lab 07 — Mendeteksi Penipuan, Kloning & Phishing",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> melatih “otak skeptis” — kemampuan menilai keaslian &amp; risiko sebuah layanan sebelum percaya, keterampilan yang menyelamatkanmu dari mayoritas bahaya.</p>

            <h4>Red flags yang harus kamu kenali</h4>
            <ul>
              <li><strong>Alamat tak terverifikasi</strong> — tidak bisa ditelusuri ke sumber resmi clear web.</li>
              <li><strong>Tekanan &amp; urgensi</strong> — “buruan, stok terbatas”, “kirim dulu baru dapat akses”.</li>
              <li><strong>Minta data/identitas/pembayaran</strong> tanpa alasan jelas dan tanpa keaslian yang terbukti.</li>
              <li><strong>Tanpa tanda tangan/PGP</strong> — layanan serius sering menandatangani pengumuman dengan PGP yang bisa kamu verifikasi.</li>
              <li><strong>Warrant canary mati/janggal</strong> — beberapa layanan memuat pernyataan rutin (“canary”); hilangnya bisa jadi sinyal.</li>
            </ul>

            <h4>▸ Langkah (drill penilaian)</h4>
            <ol>
              <li><strong>Skenario A:</strong> kamu menerima alamat .onion sebuah “layanan email aman” dari postingan forum, tanpa tautan ke situs resmi. Apa langkahmu? (Jawab: jangan percaya; cari alamat resmi dari situs penyedia di clear web, cocokkan.)</li>
              <li><strong>Skenario B:</strong> sebuah situs mendesakmu login dengan kredensial layanan lain. Red flag apa yang menyala? (Jawab: permintaan kredensial lintas-layanan + urgensi = phishing klasik.)</li>
              <li><strong>Skenario C:</strong> dua alamat .onion “resmi” beredar untuk satu layanan, berbeda di beberapa karakter. Bagaimana memutuskan? (Jawab: hanya percaya yang dipublikasikan di kanal resmi penyedia; verifikasi tanda tangan PGP pengumuman bila ada.)</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Untuk tiap skenario, kamu bisa menyebut red flag dan langkah verifikasi yang benar.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Penipu mengandalkan rasa percaya yang tergesa. Pertahanan terbaik bukan alat, melainkan <strong>kebiasaan memverifikasi sebelum percaya</strong>. Gabungkan dengan Lab 03 (verifikasi alamat) dan Lab 04 (verifikasi tanda tangan PGP), dan kamu menutup hampir semua vektor penipuan umum.</p>
          `,
          practice:`<p><strong>Tantangan:</strong> tulis “checklist verifikasi 5 langkah” versimu sendiri yang akan kamu jalankan SEBELUM mempercayai layanan apa pun. Checklist personal yang kamu rancang sendiri jauh lebih mungkin kamu patuhi.</p>`,
          takeaways:[
            "Red flags: alamat tak terverifikasi, urgensi, permintaan data/uang, tanpa tanda tangan PGP.",
            "Selalu verifikasi ke sumber resmi + tanda tangan PGP sebelum percaya.",
            "Pertahanan utama adalah kebiasaan 'verifikasi sebelum percaya', bukan alat."
          ]
        },
        {
          id:"lab-opsec",
          title:"Lab 08 — Threat Model & Rencana OPSEC Pribadi (Capstone)",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> menyatukan semua materi menjadi sebuah <strong>rencana keamanan personal</strong> yang sesuai situasimu — inilah yang membedakan praktisi dari sekadar pengguna alat.</p>

            <h4>Kerangka threat model (jawab 4 pertanyaan)</h4>
            <ol>
              <li><strong>Apa yang kulindungi?</strong> (aset: identitas, lokasi, komunikasi, file)</li>
              <li><strong>Dari siapa?</strong> (adversary: pengintai jaringan, peretas oportunis, korporasi pengiklan, dst.)</li>
              <li><strong>Seberapa mampu mereka?</strong> (kapabilitas &amp; sumber daya lawan menentukan setelan: Standard vs Safest, perlu bridge atau tidak)</li>
              <li><strong>Apa konsekuensi bila gagal?</strong> (menentukan seberapa ketat disiplinmu)</li>
            </ol>

            <h4>Prinsip OPSEC yang menyatukan semua lab</h4>
            <ul>
              <li><strong>Kompartementalisasi</strong> — pisahkan aktivitas/identitas ke “kotak” terpisah yang tak saling bocor.</li>
              <li><strong>Pemisahan identitas</strong> — jangan pernah mencampur identitas anonim dengan akun/data aslimu. Satu kebocoran kecil bisa menautkan semuanya.</li>
              <li><strong>Minimalkan jejak</strong> — amnesia TAILS, tanpa add-on, tanpa login asli (Bab 1–2).</li>
              <li><strong>Verifikasi sebelum percaya</strong> — alamat (Lab 03), kunci (Lab 04), keaslian layanan (Lab 07).</li>
              <li><strong>Konsistensi</strong> — satu kebiasaan ceroboh membatalkan semua disiplin lainnya.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Isi 4 pertanyaan threat model untuk situasimu sendiri.</li>
              <li>Petakan tiap risiko ke kontrol konkret dari lab-lab sebelumnya.</li>
              <li>Tulis “protokol harianmu”: lingkungan apa, setelan apa, kebiasaan apa.</li>
              <li>Identifikasi titik terlemahmu (biasanya perilaku, bukan alat) dan rencana memperbaikinya.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu punya satu halaman rencana OPSEC yang menautkan setiap risiko ke kontrol nyata.</li>
              <li>Kamu bisa menyebut tautan terlemah dalam rantai keamananmu sendiri.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Tidak ada “anonimitas sempurna” — yang ada adalah keamanan yang <em>cukup</em> untuk model ancamanmu, dijalankan secara konsisten. Selamat: dari memahami onion routing sampai menjalankan hidden service &amp; menyusun OPSEC sendiri, kamu telah melewati jalur praktik yang utuh.</p>

            <div class="box tip">
              <div class="bx-title">◇ Langkah selanjutnya</div>
              <p>Tinjau rencana OPSEC-mu setiap beberapa bulan. Ancaman, alat, dan situasimu berubah — keamanan adalah proses, bukan status sekali jadi.</p>
            </div>
          `,
          practice:`<p><strong>Capstone:</strong> tulis dokumen threat model + rencana OPSEC satu halaman penuh untuk dirimu sendiri, lalu uji satu skenario realistis terhadapnya (“Bila X terjadi, kontrol mana yang menahan?”). Simpan dan revisi berkala.</p>`,
          takeaways:[
            "Threat model = lindungi apa, dari siapa, sekuat apa lawan, konsekuensi gagal.",
            "Prinsip pemersatu: kompartementalisasi, pemisahan identitas, minim jejak, verifikasi, konsistensi.",
            "Keamanan adalah proses yang ditinjau berkala, bukan status sekali jadi."
          ],
          quiz:{
            title:"Kuis Bab 4 — Praktik Lanjutan",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Langkah verifikasi yang paling sering dilewati saat memasang TAILS adalah…",
               options:["Mencolok USB","Verifikasi GPG image (Good signature)","Memilih bahasa","Menyambung WiFi"],
               answer:1,
               explain:"Verifikasi GPG memastikan image tidak palsu/dimodifikasi — di sinilah serangan rantai pasok dicegah."},
              {q:"Cara membuktikan (bukan sekadar berasumsi) trafikmu lewat TOR adalah…",
               options:["Melihat ikon TOR","Membuka check.torproject.org","Mematikan WiFi","Memakai VPN"],
               answer:1,
               explain:"check.torproject.org mengonfirmasi secara empiris bahwa koneksimu memang lewat jaringan TOR."},
              {q:"Saat memverifikasi kunci PGP seseorang, langkah krusial yang sering dilupakan adalah…",
               options:["Menyimpan kunci di cloud","Membandingkan fingerprint lewat saluran terpisah (out-of-band)","Mengganti passphrase","Menghapus kunci publik"],
               answer:1,
               explain:"Verifikasi fingerprint out-of-band memastikan kunci benar milik orang itu, bukan penyusup."},
              {q:"Alamat v3 .onion pada dasarnya adalah representasi dari…",
               options:["Alamat IP server","Nama domain DNS","Kunci publik layanan","Nomor port"],
               answer:2,
               explain:"Alamat .onion diturunkan dari kunci publik layanan — tanpa DNS dan tanpa mengekspos IP."},
              {q:"Cara paling tepat memvalidasi alamat .onion sebuah layanan sah adalah…",
               options:["Memakai yang pertama muncul di pencarian","Mencocokkannya dari sumber resmi clear web layanan tersebut","Memilih yang paling pendek","Menanyakannya di forum"],
               answer:1,
               explain:"Sumber kebenaran adalah alamat yang dipublikasikan resmi oleh penyedia di clear web."},
              {q:"Dalam rantai keamanan, tautan terlemah biasanya adalah…",
               options:["Algoritma enkripsi","Perilaku/kebiasaan pengguna (OPSEC)","Versi TOR","Kecepatan internet"],
               answer:1,
               explain:"Alat boleh canggih, tapi satu kebiasaan ceroboh (mis. mencampur identitas) bisa membatalkan semuanya."}
            ]
          }
        }
      ]
    },
    /* ============= BAB 5: KOMUNIKASI PRIVAT & ANONIM — EMAIL ============= */
    {
      id:"email",
      title:"Komunikasi Privat & Anonim — Email",
      lectures:[
        {
          id:"email-identity",
          title:"Membuat Identitas Anonim (Persona)",
          dur:"konsep · OPSEC",
          body:`
            <p class="lead">Inti privasi komunikasi bukan hanya enkripsi, melainkan <strong>memisahkan persona</strong> dari identitas aslimu. Sebuah "identitas anonim" di sini berarti sebuah <em>pseudonim/persona</em> yang tidak tertaut ke diri aslimu — bukan menyamar sebagai orang lain.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Batasan etis & hukum</div>
              <p>Persona pseudonim itu sah untuk privasi (jurnalis, aktivis, riset, memisahkan kehidupan publik/privat). Tapi <strong>jangan</strong> dipakai untuk menyamar sebagai orang sungguhan, menipu, memalsukan dokumen/identitas resmi, atau mengelabui verifikasi KYC. Itu sudah masuk ranah penipuan/pemalsuan identitas yang melanggar hukum (termasuk UU ITE di Indonesia).</p>
            </div>

            <h4>Prinsip: kompartementalisasi</h4>
            <p>Persona privat harus benar-benar terpisah dari identitas aslimu — "kotak" terpisah yang tak saling bocor. Satu titik tautan kecil bisa membongkar seluruhnya.</p>

            <h4>Yang membentuk dan yang membongkar persona</h4>
            <ul>
              <li><strong>Nama &amp; detail konsisten</strong> — pseudonim, gaya bahasa, zona waktu yang masuk akal. Inkonsistensi (mis. ejaan khas, jam aktif yang sama dengan akun aslimu) bisa menautkan.</li>
              <li><strong>Jangan campur infrastruktur</strong> — jangan pakai nomor HP, email asli, atau perangkat/jaringan yang sama dengan identitas aslimu untuk membuat persona.</li>
              <li><strong>Jangan login silang</strong> — membuka akun persona dan akun asli di sesi/lingkungan yang sama adalah kesalahan klasik. Pakai TAILS/lingkungan terpisah.</li>
              <li><strong>Hati-hati metadata</strong> — foto, dokumen, dan gaya menulis bisa membocorkan identitas (dibahas di bab File &amp; Enkripsi).</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Tuliskan "aturan persona" sebelum mulai: lingkungan apa yang dipakai, apa yang boleh/tak boleh disebut, dan batas tegas dengan identitas asli. Disiplin yang ditulis lebih mungkin dipatuhi.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> rancang satu "kartu persona" (nama samaran, gaya bahasa, zona waktu, lingkungan yang dipakai) dan daftar 3 hal yang TIDAK boleh pernah kamu lakukan agar persona tak tertaut ke dirimu. Ini fondasi semua materi email berikutnya.</p>`,
          takeaways:[
            "Identitas anonim = persona pseudonim yang terpisah, bukan menyamar jadi orang lain (itu penipuan).",
            "Kompartementalisasi: jangan campur infrastruktur, jangan login silang, pakai lingkungan terpisah.",
            "Satu tautan kecil bisa membongkar persona — disiplin OPSEC adalah kuncinya."
          ]
        },
        {
          id:"email-temp",
          title:"Email Sementara (Temporary / Disposable)",
          dur:"konsep",
          body:`
            <p class="lead">Email sementara (disposable email) adalah alamat sekali-pakai yang langsung aktif tanpa pendaftaran, berguna untuk hal-hal yang tak ingin kamu tautkan ke email utamamu.</p>

            <h4>Untuk apa</h4>
            <ul>
              <li>Mendaftar layanan yang hanya butuh verifikasi sekali.</li>
              <li>Menghindari spam &amp; pelacakan ke email utama.</li>
              <li>Uji coba yang tak butuh inbox jangka panjang.</li>
            </ul>

            <h4>Cara kerja &amp; jenisnya</h4>
            <p>Layanan ini memberimu alamat instan dan inbox yang berumur pendek. Ada versi <strong>clearnet</strong> (mis. layanan tipe Guerrilla Mail / 10-minute-mail) dan beberapa menyediakan akses <strong>.onion</strong> agar bisa dipakai lewat TOR tanpa membocorkan IP.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Bukan untuk hal sensitif</div>
              <p>Email sementara umumnya <strong>tidak privat</strong>: banyak yang inbox-nya bisa diakses siapa saja yang tahu alamatnya, tanpa kata sandi, dan tanpa enkripsi. Jangan pernah memakainya untuk hal rahasia, pemulihan akun penting, atau apa pun yang isinya sensitif.</p>
          </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Anggap email sementara sebagai "alamat buang" — bagus untuk memisahkan pendaftaran sepele dari identitasmu, buruk untuk apa pun yang ingin kamu jaga.</p>
            </div>
          `,
          takeaways:[
            "Email sementara = alamat sekali-pakai instan untuk verifikasi/anti-spam.",
            "Ada versi clearnet & .onion (lewat TOR).",
            "Umumnya tidak privat/tanpa enkripsi — jangan untuk hal sensitif."
          ]
        },
        {
          id:"email-private",
          title:"Penyedia Email Privat (Private Email)",
          dur:"konsep",
          body:`
            <p class="lead">Penyedia email privat menawarkan enkripsi dan model "zero-access" — penyedia sendiri pun tak bisa membaca isi pesanmu. Contohnya Proton Mail dan Tuta (dulu Tutanota).</p>

            <h4>Apa yang membuatnya "privat"</h4>
            <ul>
              <li><strong>Zero-access encryption</strong> — pesan disimpan terenkripsi sehingga penyedia tak bisa membacanya.</li>
              <li><strong>E2EE antar-sesama pengguna</strong> — enkripsi otomatis antar akun di platform yang sama (atau via PGP ke luar).</li>
              <li><strong>Yurisdiksi privasi-ramah</strong> — banyak penyedia berbasis di negara dengan hukum privasi kuat.</li>
              <li><strong>Pendaftaran minim data</strong> — sebagian tak meminta data pribadi/nomor HP (walau kadang ada verifikasi anti-abuse).</li>
            </ul>

            <h4>Batasan yang harus disadari</h4>
            <p>Email pada dasarnya "bocor" di bagian <strong>metadata</strong>: pengirim, penerima, subjek, dan waktu sering tak terenkripsi penuh. E2EE melindungi <em>isi</em>, bukan fakta bahwa A berkomunikasi dengan B. Untuk pesan ke penyedia lain yang tak mendukung E2EE, gunakan PGP (lihat bab Enkripsi).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk privasi maksimum, akses email privat lewat TOR dan daftarkan tanpa menautkannya ke nomor/email aslimu. Banyak penyedia privat juga punya alamat .onion resmi.</p>
            </div>
          `,
          takeaways:[
            "Penyedia privat (Proton Mail, Tuta) memakai zero-access encryption + E2EE antar-pengguna.",
            "E2EE melindungi isi, bukan metadata (siapa-ke-siapa-kapan).",
            "Akses lewat TOR & daftar tanpa data asli untuk privasi lebih kuat."
          ]
        },
        {
          id:"email-darknet",
          title:"Email DarkNet (Onion Email)",
          dur:"konsep",
          body:`
            <p class="lead">Email darknet adalah layanan email yang berjalan sebagai hidden service (.onion), dirancang untuk diakses hanya lewat TOR sehingga tak pernah melihat IP-mu.</p>

            <h4>Kelebihan</h4>
            <ul>
              <li><strong>Tanpa IP</strong> — server hanya dijangkau via TOR; tak ada alamat IP-mu yang terekspos.</li>
              <li><strong>Tahan sensor</strong> — sulit diblokir karena bukan alamat clearnet biasa.</li>
              <li>Cocok untuk persona yang harus terpisah penuh dari clearnet.</li>
            </ul>

            <h4>Kekurangan &amp; kehati-hatian</h4>
            <ul>
              <li><strong>Keandalan rendah</strong> — layanan onion bisa tiba-tiba mati/hilang; jangan andalkan untuk hal penting jangka panjang.</li>
              <li><strong>Kepercayaan</strong> — kamu harus mempercayai operator yang sering anonim. Verifikasi alamat .onion dari sumber resmi (ingat Lab 03 &amp; 07).</li>
              <li><strong>Rawan kloning/penipuan</strong> — sama seperti hidden service lain, ada situs tiruan yang mencuri kredensial.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Verifikasi dulu</div>
              <p>Jangan memasukkan apa pun yang sensitif ke layanan onion yang tak bisa kamu verifikasi keasliannya. Terapkan keterampilan anti-phishing dari Bab 4.</p>
            </div>
          `,
          takeaways:[
            "Email darknet berjalan sebagai .onion; diakses hanya via TOR, tanpa mengekspos IP.",
            "Kelebihan: tanpa IP, tahan sensor; kekurangan: keandalan rendah & butuh kepercayaan ke operator.",
            "Selalu verifikasi alamat dari sumber resmi sebelum percaya."
          ]
        },
        {
          id:"email-pick",
          title:"Memilih Layanan Email yang Tepat",
          dur:"konsep",
          body:`
            <p class="lead">Tak ada satu email "terbaik" untuk segala hal. Kuncinya memahami trade-off dan memakai jenis yang tepat untuk konteks yang tepat — sering kali kamu butuh beberapa sekaligus.</p>

            <h4>Perbandingan singkat</h4>
            <ul>
              <li><strong>Email sementara</strong> — instan, tanpa daftar; tapi tidak privat. Untuk: pendaftaran sepele, anti-spam.</li>
              <li><strong>Email privat</strong> (Proton/Tuta) — terenkripsi, andal; perlu daftar. Untuk: komunikasi rutin yang ingin dijaga isinya.</li>
              <li><strong>Email darknet</strong> (.onion) — tanpa IP, tahan sensor; tapi kurang andal &amp; perlu kepercayaan. Untuk: persona yang harus terpisah penuh.</li>
            </ul>

            <h4>Kenapa pakai beberapa sekaligus</h4>
            <p>Kompartementalisasi: memisahkan email per-tujuan mencegah satu kebocoran menautkan semuanya. Email sepele tak menyentuh email pentingmu; persona tak menyentuh identitas asli. Cocokkan pilihan dengan <strong>model ancamanmu</strong> (Lab 08).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Apa pun penyedianya, lapisi dengan PGP (Bab Enkripsi) bila isinya benar-benar rahasia — agar isi tetap aman bahkan jika penyedia berkompromi.</p>
            </div>
          `,
          takeaways:[
            "Pilih jenis email sesuai konteks; sering perlu beberapa sekaligus.",
            "Kompartementalisasi mencegah satu kebocoran menautkan semua aktivitasmu.",
            "Lapisi dengan PGP untuk isi yang benar-benar rahasia."
          ],
          quiz:{
            title:"Kuis Bab 5 — Email",
            sub:"5 soal · pilih satu jawaban",
            questions:[
              {q:"'Identitas anonim' dalam konteks privasi yang sah berarti…",
               options:["Menyamar sebagai orang sungguhan","Persona pseudonim yang terpisah dari identitas aslimu","Memalsukan KTP","Membobol akun orang lain"],
               answer:1,
               explain:"Persona pseudonim untuk privasi itu sah; menyamar/menipu/memalsukan identitas adalah pelanggaran hukum."},
              {q:"Kelemahan utama email sementara adalah…",
               options:["Terlalu mahal","Umumnya tidak privat/tanpa enkripsi","Butuh KTP","Tidak bisa lewat TOR"],
               answer:1,
               explain:"Inbox email sementara sering bisa diakses tanpa kata sandi dan tanpa enkripsi — jangan untuk hal sensitif."},
              {q:"Zero-access encryption pada email privat berarti…",
               options:["Tidak ada kata sandi","Penyedia sendiri tak bisa membaca isi pesanmu","Email gratis","Tanpa internet"],
               answer:1,
               explain:"Pesan disimpan terenkripsi sehingga penyedia pun tak dapat membacanya."},
              {q:"E2EE pada email melindungi…",
               options:["Isi pesan, tapi bukan metadata (siapa-ke-siapa-kapan)","Semua termasuk metadata","Hanya subjek","Hanya lampiran"],
               answer:0,
               explain:"Enkripsi ujung-ke-ujung mengamankan isi; metadata seperti pengirim/penerima/waktu sering tetap terlihat."},
              {q:"Kenapa memakai beberapa jenis email sekaligus?",
               options:["Agar lebih cepat","Kompartementalisasi — mencegah satu kebocoran menautkan semuanya","Wajib oleh hukum","Agar dapat diskon"],
               answer:1,
               explain:"Memisahkan email per-tujuan menjaga aktivitas tetap terkotak dan tak saling membongkar."}
            ]
          }
        }
      ]
    },
    /* ========= BAB 6: KOMUNIKASI PRIVAT & ANONIM — INSTANT MESSAGING ========= */
    {
      id:"im",
      title:"Komunikasi Privat & Anonim — Instant Messaging",
      lectures:[
        {
          id:"im-xmpp",
          title:"Pengantar Jabber / XMPP",
          dur:"konsep",
          body:`
            <p class="lead">XMPP (dulu dikenal sebagai Jabber) adalah protokol pesan instan yang <strong>terdesentralisasi &amp; terfederasi</strong> — mirip email, kamu bisa memilih server mana pun (atau menjalankan sendiri), dan pengguna lintas-server tetap bisa saling chat.</p>

            <h4>Kenapa bagus untuk privasi</h4>
            <ul>
              <li><strong>Terdesentralisasi</strong> — tak ada satu perusahaan yang mengontrol seluruh jaringan; kamu bisa memilih server tepercaya atau menjalankan server sendiri.</li>
              <li><strong>Terbuka</strong> — protokol &amp; klien open-source; bisa diaudit.</li>
              <li><strong>Bisa lewat TOR</strong> — terutama di TAILS, di mana Pidgin sudah dikonfigurasi untuk jaringan TOR.</li>
            </ul>

            <h4>Konsep alamat (JID)</h4>
            <p>Akun XMPP berbentuk <code>nama@server</code> (disebut JID — Jabber ID), persis seperti alamat email. Banyak server XMPP gratis, dan sebagian mengizinkan pendaftaran lewat TOR — cocok untuk persona anonim.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>XMPP sendiri hanya transport; ia <em>tidak</em> otomatis end-to-end terenkripsi. Itu sebabnya kita menambahkan OTR (materi berikutnya) di atasnya.</p>
            </div>
          `,
          takeaways:[
            "XMPP/Jabber = protokol pesan terdesentralisasi & terfederasi (seperti email).",
            "Akun berbentuk nama@server (JID); bisa pilih/menjalankan server sendiri.",
            "XMPP transport saja belum E2EE — perlu lapisan enkripsi seperti OTR."
          ]
        },
        {
          id:"im-pidgin",
          title:"Menyiapkan XMPP dengan Pidgin",
          dur:"praktik",
          body:`
            <p class="lead">Pidgin adalah klien pesan multi-protokol yang sudah disertakan di TAILS dan dikonfigurasi untuk lewat TOR. Di sinilah kamu menambahkan akun XMPP-mu.</p>

            <h4>Langkah</h4>
            <ol>
              <li>Buka <strong>Applications → Internet → Pidgin</strong>.</li>
              <li>Tambah akun: pilih protokol <strong>XMPP</strong>.</li>
              <li>Isi <strong>username</strong>, <strong>domain</strong> (server pilihanmu), dan kata sandi. Untuk persona anonim, gunakan nama samaran dan server yang mengizinkan pendaftaran via TOR.</li>
              <li>Aktifkan opsi "Create this new account on the server" bila kamu mendaftar baru.</li>
              <li>Simpan; Pidgin akan menyambung lewat TOR.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Demi keamanan, Pidgin di TAILS hanya mengizinkan XMPP dan IRC — protokol lain dimatikan. Pilih server XMPP bereputasi yang menghormati privasi (tak menyimpan log berlebih).</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Simpan akun &amp; daftar kontak Pidgin di Persistent Storage (Bab 2) bila ingin tetap ada antar sesi — tapi sadari ini sedikit mengurangi sifat amnesik.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> daftar satu akun XMPP persona di TAILS lewat Pidgin (server yang mendukung TOR). Catat JID-nya. Belum perlu chat — fokus dulu memastikan koneksi lewat TOR berhasil.</p>`,
          takeaways:[
            "Pidgin (bawaan TAILS) sudah dikonfigurasi lewat TOR; tambahkan akun XMPP di sana.",
            "Pakai nama samaran + server yang mengizinkan pendaftaran via TOR untuk persona.",
            "Di TAILS, Pidgin hanya mengizinkan XMPP & IRC demi keamanan."
          ]
        },
        {
          id:"im-otr",
          title:"Mengaktifkan Enkripsi End-to-End (OTR)",
          dur:"praktik",
          body:`
            <p class="lead">OTR (Off-the-Record) menambahkan enkripsi ujung-ke-ujung di atas XMPP. Tiga jaminannya: <strong>enkripsi</strong> (tak ada yang bisa membaca), <strong>otentikasi</strong> (kamu yakin lawan bicaramu memang dia), dan <strong>deniability</strong> (pesan tak bisa dibuktikan secara kriptografis berasal darimu).</p>

            <h4>Mengaktifkan OTR di Pidgin</h4>
            <ol>
              <li>Plugin OTR sudah aktif di TAILS. Cek lewat <strong>Tools → Plugins</strong> dan pastikan "Off-the-Record Messaging" tercentang.</li>
              <li>Buka percakapan dengan kontak, lalu klik <strong>OTR → Start private conversation</strong>.</li>
              <li>Status percakapan akan berubah jadi "Private" (atau "Unverified" sampai kamu memverifikasi kontak — materi berikutnya).</li>
            </ol>

            <h4>Apa arti "deniability"</h4>
            <p>Berbeda dari tanda tangan digital yang membuktikan asal pesan, OTR sengaja <em>tidak</em> meninggalkan bukti tak-terbantahkan bahwa kamu yang mengirim. Selama percakapan, kedua pihak yakin akan keaslian; tapi setelahnya, tak ada bukti kriptografis yang bisa dipakai pihak ketiga untuk memaksamu mengakui pesan.</p>

            <div class="box tip">
              <div class="bx-title">◇ Alternatif modern: OMEMO</div>
              <p>OTR adalah pendekatan klasik (dan yang dipakai Pidgin di TAILS). Standar E2EE XMPP yang lebih modern adalah <strong>OMEMO</strong> (mendukung multi-perangkat &amp; pesan offline), tersedia di klien seperti Dino — yang sedang dipertimbangkan untuk menggantikan Pidgin di TAILS. Konsep verifikasinya serupa.</p>
            </div>
          `,
          takeaways:[
            "OTR memberi tiga jaminan: enkripsi, otentikasi, dan deniability.",
            "Aktifkan via plugin OTR (sudah ada di TAILS) lalu 'Start private conversation'.",
            "OMEMO adalah alternatif E2EE XMPP yang lebih modern (mis. di klien Dino)."
          ]
        },
        {
          id:"im-verify",
          title:"Memverifikasi Kontak",
          dur:"praktik",
          body:`
            <p class="lead">Enkripsi tanpa verifikasi rentan serangan <strong>man-in-the-middle</strong> (MITM) — seseorang menyisip di tengah dan menyamar jadi lawan bicaramu. Verifikasi memastikan kamu benar-benar terenkripsi dengan orang yang tepat.</p>

            <h4>Tiga cara verifikasi di OTR</h4>
            <ul>
              <li><strong>Fingerprint</strong> — bandingkan sidik jari kunci OTR kedua pihak lewat saluran terpisah (out-of-band, mis. tatap muka/telepon).</li>
              <li><strong>Shared secret</strong> — kalian sepakati satu rahasia yang hanya kalian berdua tahu; OTR memverifikasinya tanpa membocorkannya.</li>
              <li><strong>Question &amp; answer</strong> — satu pihak mengajukan pertanyaan yang jawabannya hanya diketahui keduanya.</li>
            </ul>

            <h4>Kenapa out-of-band penting</h4>
            <p>Bila kamu memverifikasi fingerprint <em>melalui saluran chat yang sama</em> yang mungkin sudah disusupi, penyerang MITM bisa memalsukannya. Karena itu verifikasi harus lewat saluran berbeda yang kamu percayai.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Status "Unverified" berarti terenkripsi tapi belum tentu dengan orang yang benar. Selesaikan verifikasi sebelum membahas hal sensitif.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> dengan satu teman (atau dua akun milikmu), mulai percakapan OTR lalu verifikasi memakai metode Question &amp; Answer. Perhatikan status berubah dari "Unverified" menjadi terverifikasi.</p>`,
          takeaways:[
            "Tanpa verifikasi, enkripsi rentan serangan man-in-the-middle.",
            "OTR menyediakan verifikasi via fingerprint, shared secret, atau question & answer.",
            "Verifikasi harus out-of-band; status 'Unverified' belum tentu lawan yang benar."
          ],
          quiz:{
            title:"Kuis Bab 6 — Instant Messaging",
            sub:"5 soal · pilih satu jawaban",
            questions:[
              {q:"Ciri khas protokol XMPP/Jabber adalah…",
               options:["Dikontrol satu perusahaan","Terdesentralisasi & terfederasi seperti email","Tidak bisa dienkripsi","Hanya untuk satu server"],
               answer:1,
               explain:"XMPP terfederasi: kamu bisa memilih server atau menjalankan sendiri, dan tetap saling terhubung."},
              {q:"XMPP polos (tanpa lapisan tambahan)…",
               options:["Sudah otomatis E2EE","Belum end-to-end terenkripsi; perlu OTR/OMEMO","Tidak butuh akun","Selalu lewat TOR"],
               answer:1,
               explain:"XMPP hanya transport; E2EE ditambahkan lewat OTR atau OMEMO."},
              {q:"Tiga jaminan OTR adalah…",
               options:["Kecepatan, gratis, offline","Enkripsi, otentikasi, deniability","Backup, sinkronisasi, multi-device","Iklan, log, analitik"],
               answer:1,
               explain:"OTR memberi enkripsi, otentikasi lawan bicara, dan deniability."},
              {q:"'Deniability' pada OTR berarti…",
               options:["Pesan tak bisa dibaca selamanya","Tak ada bukti kriptografis yang memaksamu mengakui pesan","Pesan otomatis terhapus","Pesan tak terenkripsi"],
               answer:1,
               explain:"OTR sengaja tak meninggalkan tanda tangan tak-terbantahkan, berbeda dari signature digital."},
              {q:"Verifikasi kontak penting untuk mencegah…",
               options:["Spam","Serangan man-in-the-middle (MITM)","Baterai habis","Koneksi lambat"],
               answer:1,
               explain:"Tanpa verifikasi out-of-band, penyerang bisa menyisip dan menyamar jadi lawan bicaramu."}
            ]
          }
        }
      ]
    },
    /* ============= BAB 7: MANAJEMEN & BERBAGI FILE ============= */
    {
      id:"files",
      title:"Manajemen & Berbagi File",
      lectures:[
        {
          id:"files-intro",
          title:"Pengantar Berbagi File Privat & Anonim",
          dur:"konsep",
          body:`
            <p class="lead">Berbagi file membawa dua risiko terpisah: <strong>isi</strong> file (siapa yang bisa membacanya) dan <strong>metadata</strong> (jejak tersembunyi yang bisa membongkar identitasmu). Keduanya butuh penanganan berbeda.</p>

            <h4>Tiga dimensi</h4>
            <ul>
              <li><strong>Privasi isi</strong> — dijawab dengan enkripsi (Bab Enkripsi/PGP).</li>
              <li><strong>Anonimitas transport</strong> — dijawab dengan menyalurkan lewat TOR (mis. OnionShare).</li>
              <li><strong>Kebersihan metadata</strong> — dijawab dengan membersihkan metadata sebelum berbagi (materi berikutnya).</li>
            </ul>

            <h4>Kenapa metadata berbahaya</h4>
            <p>File foto bisa menyimpan koordinat GPS, model kamera, dan waktu; dokumen menyimpan nama penulis, perangkat lunak, riwayat revisi. Berbagi file "biasa" bisa diam-diam membocorkan lokasi dan identitasmu tanpa kamu sadari.</p>

            <div class="box tip">
              <div class="bx-title">◇ Inti bab ini</div>
              <p>Berbagi yang benar-benar aman = isi terenkripsi + metadata dibersihkan + disalurkan lewat TOR. Tiga lapisan, tiga alat berbeda.</p>
            </div>
          `,
          takeaways:[
            "Berbagi file punya 3 dimensi: privasi isi, anonimitas transport, kebersihan metadata.",
            "Metadata (GPS foto, penulis dokumen) bisa membocorkan identitas diam-diam.",
            "Solusi lengkap: enkripsi isi + bersihkan metadata + salurkan via TOR."
          ]
        },
        {
          id:"files-metadata",
          title:"Membersihkan Metadata & Berbagi Dasar",
          dur:"praktik",
          body:`
            <p class="lead">Sebelum berbagi file apa pun, bersihkan metadatanya. TAILS menyertakan <strong>MAT2</strong> (Metadata Anonymization Toolkit) khusus untuk ini.</p>

            <h4>Jenis metadata yang umum</h4>
            <ul>
              <li><strong>Foto (EXIF)</strong> — koordinat GPS, model &amp; nomor seri kamera, tanggal/jam.</li>
              <li><strong>Dokumen (PDF/Office)</strong> — nama penulis, organisasi, perangkat lunak, riwayat revisi, komentar tersembunyi.</li>
              <li><strong>Audio/video</strong> — perangkat perekam, lokasi, waktu.</li>
            </ul>

            <h4>Membersihkan dengan MAT2 (di TAILS)</h4>
            <ol>
              <li>Buka pengelola file, klik kanan file → <strong>Remove metadata</strong> (terintegrasi MAT2), atau jalankan <code>mat2 namafile</code> di terminal.</li>
              <li>MAT2 menghasilkan salinan bersih (mis. <code>namafile.cleaned.jpg</code>).</li>
              <li>Periksa hasilnya dengan <code>mat2 --show namafile</code> untuk memastikan metadata sudah hilang.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Pembersihan metadata tak menghapus informasi yang ada <em>di dalam isi</em> file (mis. wajah di foto, nama di teks, atau pola gaya menulis). Periksa isinya juga, bukan hanya metadatanya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> ambil sebuah foto dari ponsel, jalankan <code>mat2 --show</code> untuk melihat metadata aslinya (perhatikan GPS bila ada), bersihkan, lalu cek ulang. Kamu akan kaget berapa banyak yang tersimpan diam-diam.</p>`,
          takeaways:[
            "Selalu bersihkan metadata sebelum berbagi; di TAILS pakai MAT2.",
            "Metadata umum: GPS/kamera di foto, penulis/revisi di dokumen.",
            "Pembersihan metadata tak menghapus info di dalam isi file — periksa isinya juga."
          ]
        },
        {
          id:"files-share",
          title:"Berbagi File Privat & Anonim",
          dur:"praktik",
          body:`
            <p class="lead">Setelah metadata bersih dan isi terenkripsi, salurkan file lewat <strong>OnionShare</strong> (sudah kita kenal di Lab 05) — berbagi langsung lewat onion service sementara, tanpa server pihak ketiga.</p>

            <h4>Alur berbagi yang aman</h4>
            <ol>
              <li><strong>Bersihkan metadata</strong> dengan MAT2.</li>
              <li><strong>Enkripsi isi</strong> dengan PGP (Bab Enkripsi) bila rahasia.</li>
              <li><strong>Salurkan via OnionShare</strong> — bagikan alamat .onion sementara ke penerima lewat saluran aman.</li>
              <li>Tutup OnionShare setelah selesai; alamatnya langsung mati.</li>
            </ol>

            <h4>Kenapa lapisan ini saling melengkapi</h4>
            <p>OnionShare menyembunyikan <em>siapa &amp; dari mana</em> (anonimitas transport via TOR), PGP menyembunyikan <em>isi</em> (kerahasiaan), dan MAT2 menghapus <em>jejak tersembunyi</em> (metadata). Bersama, ketiganya menutup tiga vektor kebocoran sekaligus.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk menerima file dari orang lain secara anonim, pakai mode <strong>Receive</strong> di OnionShare — kamu memberi mereka alamat .onion untuk mengunggah.</p>
            </div>
          `,
          takeaways:[
            "Alur aman: bersihkan metadata → enkripsi PGP → salurkan via OnionShare → tutup.",
            "Tiga lapisan menutup tiga vektor: transport (TOR), isi (PGP), jejak (metadata).",
            "Mode Receive OnionShare untuk menerima file anonim."
          ]
        },
        {
          id:"files-remove",
          title:"Menghapus File dengan Aman",
          dur:"konsep · praktik",
          body:`
            <p class="lead">"Menghapus" file biasa <strong>tidak</strong> benar-benar menghapus datanya — sistem hanya menandai ruangnya sebagai bebas, sementara isinya masih bisa dipulihkan sampai tertimpa. Penghapusan aman menangani ini.</p>

            <h4>Kenapa delete biasa tak cukup</h4>
            <p>Saat kamu "hapus", file masih ada secara fisik di disk sampai data baru menimpanya. Alat forensik bisa memulihkannya. Penghapusan aman menimpa area itu dengan data acak agar tak dapat dipulihkan.</p>

            <h4>Alat penghapusan aman</h4>
            <ul>
              <li><strong><code>shred</code></strong> — menimpa file beberapa kali (tersedia di Linux/TAILS).</li>
              <li><strong>"Wipe" di pengelola file</strong> — sebagian lingkungan menyediakan opsi hapus-aman.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Penting: SSD &amp; flash berbeda</div>
              <p>Pada <strong>SSD dan USB flash</strong>, <code>shred</code> sering <em>tidak andal</em> karena <em>wear leveling</em> — controller memindahkan data ke sel fisik lain, sehingga "menimpa" tak menyentuh salinan aslinya. Untuk media ini, jawaban yang benar adalah <strong>enkripsi penuh sejak awal</strong> (materi berikutnya) atau fitur <em>secure erase</em> bawaan perangkat — bukan sekadar shred.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip TAILS</div>
              <p>Karena TAILS amnesik, file sesi otomatis lenyap saat reboot. Penghapusan aman manual terutama relevan untuk data di Persistent Storage atau media lain.</p>
            </div>
          `,
          takeaways:[
            "Delete biasa hanya menandai ruang bebas; data masih bisa dipulihkan sampai tertimpa.",
            "shred menimpa data — tapi tidak andal di SSD/flash karena wear leveling.",
            "Untuk SSD/flash, andalkan enkripsi penuh atau secure erase bawaan, bukan shred."
          ]
        },
        {
          id:"files-wipe",
          title:"Menghapus & Mengenkripsi Storage dengan Aman",
          dur:"praktik",
          body:`
            <p class="lead">Pendekatan paling tangguh bukan "menghapus dengan aman setelahnya", melainkan <strong>mengenkripsi seluruh media sejak awal</strong>. Bila semua data terenkripsi, "menghapus" cukup dengan membuang kuncinya.</p>

            <h4>Enkripsi penuh (full-disk encryption)</h4>
            <ul>
              <li><strong>LUKS</strong> — standar enkripsi disk di Linux; tersedia di TAILS lewat <strong>GNOME Disks</strong> untuk membuat USB/disk terenkripsi.</li>
              <li><strong>VeraCrypt</strong> — lintas-platform, bisa membuat kontainer atau mengenkripsi seluruh volume.</li>
              <li><strong>Persistent Storage TAILS</strong> — sudah berbasis LUKS (Bab 2).</li>
            </ul>

            <h4>"Crypto-erase": menghapus dengan membuang kunci</h4>
            <p>Bila media sudah terenkripsi penuh, kamu bisa menghapus seluruh isinya secara efektif hanya dengan <strong>menghancurkan kunci enkripsinya</strong> — datanya menjadi tumpukan byte acak yang tak berarti. Ini jauh lebih andal di SSD/flash daripada menimpa.</p>

            <h4>Menghapus seluruh perangkat</h4>
            <p>Untuk membersihkan total: gunakan fitur <strong>ATA Secure Erase</strong> bawaan SSD (dirancang khusus untuk media flash), atau buat ulang enkripsi (format LUKS baru) di GNOME Disks. Untuk HDD lama, menimpa penuh masih relevan.</p>

            <div class="box tip">
              <div class="bx-title">◇ Strategi praktis</div>
              <p>Enkripsi <em>dulu</em>, sebelum menaruh data apa pun. Dengan begitu, sepanjang umur media, datamu selalu terlindungi dan "penghapusan" jadi soal kunci, bukan menimpa byte.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> dengan USB cadangan, buat volume terenkripsi LUKS lewat GNOME Disks di TAILS, simpan file uji, cabut &amp; colok ulang, lalu buka kembali dengan passphrase. Rasakan bedanya antara "data terkunci" vs "data terhapus".</p>`,
          takeaways:[
            "Strategi terbaik: enkripsi penuh sejak awal (LUKS/VeraCrypt), bukan hapus-aman belakangan.",
            "Crypto-erase (buang kunci) andal di SSD/flash; ATA Secure Erase untuk hapus total.",
            "Enkripsi sebelum menaruh data agar 'menghapus' = membuang kunci."
          ],
          quiz:{
            title:"Kuis Bab 7 — Manajemen & Berbagi File",
            sub:"5 soal · pilih satu jawaban",
            questions:[
              {q:"Tiga dimensi berbagi file yang aman adalah…",
               options:["Ukuran, format, nama","Privasi isi, anonimitas transport, kebersihan metadata","Warna, resolusi, durasi","Harga, lisensi, hak cipta"],
               answer:1,
               explain:"Isi (enkripsi), transport (TOR/OnionShare), dan metadata (MAT2) — tiga vektor berbeda."},
              {q:"MAT2 di TAILS berfungsi untuk…",
               options:["Mengenkripsi file","Membersihkan metadata file","Menyalurkan file via TOR","Membuat dompet"],
               answer:1,
               explain:"MAT2 (Metadata Anonymization Toolkit) menghapus metadata seperti GPS dan info penulis."},
              {q:"Kenapa 'delete' biasa tidak aman?",
               options:["Terlalu lambat","Data masih bisa dipulihkan sampai tertimpa","Menghapus terlalu banyak","Butuh internet"],
               answer:1,
               explain:"Delete hanya menandai ruang bebas; isi fisik masih ada hingga ditimpa data baru."},
              {q:"Mengapa shred tidak andal di SSD/USB flash?",
               options:["SSD terlalu cepat","Wear leveling memindahkan data sehingga 'menimpa' tak menyentuh salinan asli","SSD tidak punya data","shred ilegal"],
               answer:1,
               explain:"Controller flash memindahkan data antar sel, jadi penimpaan tak menjamin penghapusan salinan asli."},
              {q:"Pendekatan paling tangguh untuk SSD/flash adalah…",
               options:["Shred berkali-kali","Enkripsi penuh sejak awal (lalu crypto-erase dengan membuang kunci)","Menamai ulang file","Memindahkan ke folder lain"],
               answer:1,
               explain:"Bila media terenkripsi penuh, menghapus kunci membuat seluruh data jadi byte acak tak berarti."}
            ]
          }
        }
      ]
    },
    /* ============= BAB 8: ENKRIPSI ============= */
    {
      id:"encryption",
      title:"Enkripsi",
      lectures:[
        {
          id:"enc-what",
          title:"Apa Itu Enkripsi & Kenapa Penting?",
          dur:"konsep",
          body:`
            <p class="lead">Enkripsi mengubah data yang bisa dibaca (<em>plaintext</em>) menjadi data acak yang tak berarti (<em>ciphertext</em>), sehingga hanya pemegang kunci yang tepat yang bisa mengembalikannya. Ini fondasi seluruh privasi digital.</p>

            <h4>Konsep dasar</h4>
            <ul>
              <li><strong>Plaintext</strong> — pesan asli yang bisa dibaca.</li>
              <li><strong>Ciphertext</strong> — hasil enkripsi yang tampak acak.</li>
              <li><strong>Kunci</strong> — rahasia yang dipakai untuk mengenkripsi/mendekripsi.</li>
              <li><strong>Algoritma</strong> — metode matematis yang melakukan transformasi (mis. AES, RSA).</li>
            </ul>

            <h4>Kenapa penting</h4>
            <p>Tanpa enkripsi, siapa pun yang mengakses jalur komunikasi atau penyimpananmu bisa membaca semuanya. Dengan enkripsi yang benar, data tetap rahasia walau jatuh ke tangan yang salah. Inilah yang membuat TOR, email privat, OTR, dan file terenkripsi semuanya bekerja.</p>

            <div class="box tip">
              <div class="bx-title">◇ Dua tujuan berbeda</div>
              <p>Enkripsi menjaga <strong>kerahasiaan</strong> (siapa yang bisa membaca). Nanti kita lihat tanda tangan digital yang menjaga <strong>keaslian &amp; integritas</strong> (siapa yang membuat &amp; apakah diubah). Keduanya berbeda dan saling melengkapi.</p>
            </div>
          `,
          takeaways:[
            "Enkripsi mengubah plaintext → ciphertext; hanya pemegang kunci yang bisa membaliknya.",
            "Komponen: plaintext, ciphertext, kunci, algoritma.",
            "Enkripsi = kerahasiaan; tanda tangan = keaslian/integritas (dua hal berbeda)."
          ]
        },
        {
          id:"enc-sym-asym",
          title:"Enkripsi Simetris vs Asimetris",
          dur:"konsep",
          body:`
            <p class="lead">Ada dua keluarga enkripsi. Memahami perbedaannya menjelaskan kenapa PGP, HTTPS, dan hampir semua sistem aman menggabungkan keduanya.</p>

            <h4>Simetris — satu kunci</h4>
            <p>Satu kunci yang sama dipakai untuk mengenkripsi <em>dan</em> mendekripsi. Cepat dan efisien untuk data besar (contoh: AES). Kelemahannya: kamu harus membagikan kunci itu ke lawan bicara secara aman — dan itu sulit.</p>

            <h4>Asimetris — sepasang kunci</h4>
            <p>Memakai <strong>kunci publik</strong> (boleh disebar) dan <strong>kunci privat</strong> (dirahasiakan). Apa yang dienkripsi dengan kunci publik seseorang hanya bisa dibuka dengan kunci privatnya. Ini memecahkan masalah distribusi kunci — kamu cukup punya kunci publik orang lain (contoh: RSA, ECC).</p>

            <h4>Hibrida — yang sebenarnya dipakai</h4>
            <p>Asimetris lebih lambat, jadi sistem nyata (PGP, TLS/HTTPS) memakai <strong>pendekatan hibrida</strong>: kunci publik dipakai untuk bertukar sebuah kunci simetris sekali-pakai dengan aman, lalu data sebenarnya dienkripsi cepat dengan kunci simetris itu. Dapat keamanan asimetris + kecepatan simetris.</p>

            <div class="box tip">
              <div class="bx-title">◇ Analogi</div>
              <p>Kunci publik = gembok terbuka yang kamu bagikan; siapa pun bisa mengunci kotak untukmu, tapi hanya kamu (kunci privat) yang bisa membukanya.</p>
            </div>
          `,
          takeaways:[
            "Simetris: satu kunci, cepat (AES), tapi sulit mendistribusikan kunci.",
            "Asimetris: kunci publik (disebar) + privat (rahasia), memecahkan distribusi kunci (RSA/ECC).",
            "Sistem nyata hibrida: asimetris untuk tukar kunci, simetris untuk data."
          ]
        },
        {
          id:"enc-keygen",
          title:"Membuat PGP Key Pair",
          dur:"praktik",
          body:`
            <p class="lead">PGP (lewat GnuPG) adalah implementasi enkripsi asimetris paling umum untuk email &amp; file. Langkah pertama: membuat sepasang kunci milikmu.</p>

            <h4>Membuat keypair</h4>
            <ol>
              <li>Jalankan <code>gpg --full-generate-key</code>.</li>
              <li>Pilih jenis kunci — <strong>ECC (mis. Curve 25519)</strong> modern &amp; ringkas, atau <strong>RSA 4096</strong> yang klasik &amp; kompatibel luas.</li>
              <li>Tetapkan <strong>masa berlaku</strong> (mis. 1–2 tahun) — kunci yang bisa kedaluwarsa lebih aman bila hilang kendali.</li>
              <li>Isi nama/identitas (boleh persona) &amp; email.</li>
              <li>Tetapkan <strong>passphrase kuat</strong> — ini pelindung terakhir kunci privatmu.</li>
            </ol>

            <h4>Apa yang dihasilkan</h4>
            <p>Kamu mendapat <strong>kunci publik</strong> (untuk dibagikan agar orang bisa mengenkripsi pesan untukmu &amp; memverifikasi tanda tanganmu) dan <strong>kunci privat</strong> (dirahasiakan, untuk mendekripsi &amp; menandatangani). Setiap kunci punya <strong>fingerprint</strong> unik untuk verifikasi.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Lindungi kunci privat</div>
              <p>Kunci privat + passphrase = identitas kriptografismu. Simpan hanya di lingkungan tepercaya (mis. Persistent Storage TAILS). Bila bocor, orang bisa menyamar &amp; membaca pesanmu. Pertimbangkan membuat <em>revocation certificate</em> untuk mencabut kunci bila hilang.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buat keypair PGP-mu di TAILS dengan masa berlaku 1 tahun, lalu catat fingerprint-nya. Buat juga revocation certificate dan simpan terpisah dengan aman.</p>`,
          takeaways:[
            "Buat keypair dengan gpg --full-generate-key (ECC modern atau RSA 4096).",
            "Tetapkan masa berlaku & passphrase kuat; tiap kunci punya fingerprint unik.",
            "Lindungi kunci privat; siapkan revocation certificate."
          ]
        },
        {
          id:"enc-keys",
          title:"Impor & Ekspor Kunci",
          dur:"praktik",
          body:`
            <p class="lead">Agar bisa berkomunikasi, kamu perlu membagikan kunci publikmu dan mengimpor kunci publik orang lain. Kunci privat tak pernah dibagikan.</p>

            <h4>Ekspor &amp; impor</h4>
            <ul>
              <li><strong>Ekspor kunci publik:</strong> <code>gpg --armor --export NAMA &gt; publik.asc</code> — file ini yang kamu bagikan.</li>
              <li><strong>Impor kunci orang lain:</strong> <code>gpg --import kunci_mereka.asc</code>.</li>
              <li><strong>Lihat sidik jari:</strong> <code>gpg --fingerprint NAMA</code> untuk verifikasi.</li>
            </ul>

            <h4>Keyserver &amp; verifikasi</h4>
            <p>Kunci publik bisa dibagikan lewat keyserver, situs pribadi, atau langsung. Tapi <strong>jangan percaya begitu saja</strong> — verifikasi fingerprint lewat saluran terpisah (out-of-band) untuk memastikan kunci benar-benar milik orang itu, bukan kunci palsu yang disisipkan penyerang.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Hanya pernah mengekspor kunci <strong>publik</strong>. Kalau kamu tak sengaja membagikan kunci <strong>privat</strong>, keamananmu hancur — segera cabut kunci dan buat yang baru.</p>
            </div>
          `,
          takeaways:[
            "Bagikan kunci publik (--armor --export); impor kunci orang lain (--import).",
            "Verifikasi fingerprint out-of-band sebelum mempercayai sebuah kunci.",
            "Jangan pernah mengekspor/membagikan kunci privat."
          ]
        },
        {
          id:"enc-text",
          title:"Enkripsi & Dekripsi Teks",
          dur:"praktik",
          body:`
            <p class="lead">Dengan kunci publik penerima, kamu bisa mengenkripsi pesan teks yang hanya bisa dibuka oleh dia.</p>

            <h4>Mengenkripsi untuk penerima</h4>
            <ul>
              <li><code>gpg --encrypt --armor -r PENERIMA pesan.txt</code> — menghasilkan ciphertext ber-armor (teks ASCII yang aman disalin ke email/chat).</li>
              <li>Tambahkan <code>--sign</code> bila ingin sekaligus menandatangani (membuktikan kamu pengirimnya).</li>
            </ul>

            <h4>Mendekripsi</h4>
            <ul>
              <li>Penerima menjalankan <code>gpg --decrypt pesan.asc</code> dengan kunci privat &amp; passphrase-nya.</li>
            </ul>

            <h4>Cara kerja di balik layar</h4>
            <p>Ingat pendekatan hibrida: GnuPG membuat kunci simetris sekali-pakai untuk mengenkripsi pesanmu, lalu mengenkripsi kunci simetris itu dengan kunci publik penerima. Hanya kunci privat penerima yang bisa membuka kunci simetrisnya, lalu membaca pesan.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk beberapa penerima sekaligus, tambahkan banyak <code>-r</code>. Tiap penerima bisa mendekripsi dengan kunci privatnya masing-masing.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> enkripsi sebuah pesan ke kunci publikmu sendiri, lalu dekripsi kembali. Berhasil membuka berarti alur enkripsi-dekripsimu sudah benar.</p>`,
          takeaways:[
            "Enkripsi ke kunci publik penerima (--encrypt -r); --armor untuk teks yang aman disalin.",
            "Penerima mendekripsi dengan kunci privat & passphrase (--decrypt).",
            "Hibrida: kunci simetris sekali-pakai dibungkus kunci publik penerima."
          ]
        },
        {
          id:"enc-sign-intro",
          title:"Pengantar Tanda Tangan Digital",
          dur:"konsep",
          body:`
            <p class="lead">Tanda tangan digital menjawab pertanyaan berbeda dari enkripsi: bukan "siapa yang bisa membaca", melainkan "<strong>benarkah ini dari orang yang diklaim, dan belum diubah?</strong>"</p>

            <h4>Dua jaminan tanda tangan</h4>
            <ul>
              <li><strong>Otentikasi (asal)</strong> — membuktikan pesan dibuat oleh pemegang kunci privat tertentu.</li>
              <li><strong>Integritas</strong> — membuktikan pesan tak diubah sejak ditandatangani; perubahan sekecil apa pun membatalkan tanda tangan.</li>
            </ul>

            <h4>Kebalikan dari enkripsi</h4>
            <p>Pada enkripsi, kamu memakai kunci <em>publik</em> penerima. Pada tanda tangan, kamu memakai kunci <em>privat</em>-mu untuk menandatangani, dan siapa pun memverifikasinya dengan kunci <em>publik</em>-mu. Tanda tangan tidak menyembunyikan isi — ia hanya menjaminnya.</p>

            <div class="box tip">
              <div class="bx-title">◇ Contoh nyata</div>
              <p>Inilah cara Tor Project &amp; TAILS membuktikan installer asli (Bab 4): mereka menandatangani rilis, dan kamu memverifikasi tanda tangan itu untuk yakin file tak dimodifikasi.</p>
            </div>
          `,
          takeaways:[
            "Tanda tangan = otentikasi (asal) + integritas (tak diubah), bukan kerahasiaan.",
            "Kebalikan enkripsi: tandatangani dengan kunci privat, verifikasi dengan kunci publik.",
            "Dipakai untuk membuktikan keaslian rilis software (mis. TAILS/Tor)."
          ]
        },
        {
          id:"enc-sign",
          title:"Menandatangani & Memverifikasi Pesan",
          dur:"praktik",
          body:`
            <p class="lead">Mari praktikkan menandatangani pesan dan memverifikasi tanda tangan orang lain.</p>

            <h4>Menandatangani</h4>
            <ul>
              <li><strong>Clearsign</strong> (teks tetap terbaca + tanda tangan menyatu): <code>gpg --clearsign pesan.txt</code>.</li>
              <li><strong>Detached signature</strong> (tanda tangan terpisah dari berkas): <code>gpg --detach-sign --armor pesan.txt</code> → menghasilkan <code>pesan.txt.asc</code>.</li>
            </ul>

            <h4>Memverifikasi</h4>
            <ul>
              <li><code>gpg --verify pesan.txt.asc pesan.txt</code> — cari hasil <em>"Good signature"</em> dari kunci yang kamu percayai.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>"Good signature" hanya berarti pesan ditandatangani oleh kunci tertentu &amp; tak diubah. Itu bermakna <em>hanya</em> bila kamu sudah memverifikasi bahwa kunci tersebut benar milik orang yang diklaim (lewat fingerprint, materi sebelumnya).</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> clearsign sebuah pesan, ubah satu huruf di teksnya, lalu verifikasi — tanda tangan akan gagal. Ini membuktikan jaminan integritas secara langsung.</p>`,
          takeaways:[
            "Tandatangani dengan --clearsign atau --detach-sign; verifikasi dengan --verify.",
            "Cari 'Good signature'; integritas membuat perubahan sekecil apa pun membatalkan tanda tangan.",
            "Tanda tangan bermakna hanya bila kunci penandatangan sudah diverifikasi."
          ]
        },
        {
          id:"enc-files",
          title:"Enkripsi & Dekripsi File",
          dur:"praktik",
          body:`
            <p class="lead">Prinsip yang sama berlaku untuk file (dokumen, arsip, gambar) — baik dengan kunci publik penerima maupun dengan kata sandi simetris.</p>

            <h4>Asimetris (untuk penerima tertentu)</h4>
            <ul>
              <li><code>gpg --encrypt -r PENERIMA berkas.pdf</code> → <code>berkas.pdf.gpg</code>.</li>
              <li>Penerima: <code>gpg --decrypt berkas.pdf.gpg &gt; berkas.pdf</code>.</li>
            </ul>

            <h4>Simetris (dengan kata sandi)</h4>
            <ul>
              <li><code>gpg --symmetric berkas.zip</code> — meminta kata sandi; siapa pun yang tahu kata sandinya bisa membuka. Cocok untuk mengenkripsi file <em>untuk dirimu sendiri</em> atau berbagi kata sandi lewat saluran terpisah.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Kapan pakai yang mana</div>
              <p>Untuk satu penerima spesifik → asimetris (tak perlu berbagi rahasia). Untuk arsip pribadi atau berbagi dengan kata sandi yang disepakati → simetris.</p>
            </div>
          `,
          takeaways:[
            "File bisa dienkripsi asimetris (-r penerima) atau simetris (--symmetric, dengan kata sandi).",
            "Asimetris untuk penerima spesifik; simetris untuk arsip pribadi/kata sandi bersama.",
            "Prinsipnya sama dengan enkripsi teks."
          ]
        },
        {
          id:"enc-sign-files",
          title:"Menandatangani & Memverifikasi File",
          dur:"praktik",
          body:`
            <p class="lead">Menandatangani file memungkinkan orang lain memverifikasi bahwa file (mis. unduhan software) benar-benar berasal darimu dan tak diubah — persis teknik yang dipakai untuk memverifikasi TAILS/Tor.</p>

            <h4>Detached signature untuk file</h4>
            <ul>
              <li><strong>Tandatangani:</strong> <code>gpg --detach-sign --armor berkas.img</code> → menghasilkan <code>berkas.img.asc</code> (tanda tangan terpisah).</li>
              <li><strong>Verifikasi:</strong> <code>gpg --verify berkas.img.asc berkas.img</code> — cari "Good signature".</li>
            </ul>

            <h4>Kenapa detached signature ideal untuk file besar</h4>
            <p>Tanda tangan disimpan terpisah, jadi file aslinya tetap utuh &amp; bisa dipakai apa adanya, sementara siapa pun bisa mengunduh tanda tangan kecil itu untuk memverifikasi. Inilah pola standar distribusi software aman.</p>

            <div class="box tip">
              <div class="bx-title">◇ Menutup lingkaran</div>
              <p>Sekarang kamu paham penuh proses verifikasi dari Bab 4 (Lab 01): mengunduh file + file <code>.asc</code> + kunci publik penandatangan resmi, lalu menjalankan <code>--verify</code>. Itulah pertahanan terhadap installer palsu.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> tandatangani sebuah file dengan detached signature, kirim file + .asc ke perangkat lain (atau ke dirimu), dan verifikasi di sana. Bonus: praktikkan memverifikasi tanda tangan resmi sebuah rilis software open-source.</p>`,
          takeaways:[
            "Detached signature (.asc) memverifikasi keaslian & integritas file tanpa mengubahnya.",
            "Tandatangani dengan --detach-sign; verifikasi dengan --verify.",
            "Ini persis teknik memverifikasi installer TAILS/Tor di Bab 4."
          ],
          quiz:{
            title:"Kuis Bab 8 — Enkripsi",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Enkripsi terutama menjamin…",
               options:["Keaslian pengirim","Kerahasiaan isi (siapa yang bisa membaca)","Kecepatan transfer","Ukuran file lebih kecil"],
               answer:1,
               explain:"Enkripsi menjaga kerahasiaan; keaslian/integritas dijamin oleh tanda tangan digital."},
              {q:"Perbedaan utama enkripsi asimetris dari simetris:",
               options:["Lebih cepat","Memakai sepasang kunci publik+privat, memecahkan distribusi kunci","Tidak butuh kunci","Hanya untuk teks"],
               answer:1,
               explain:"Asimetris memakai kunci publik (disebar) & privat (rahasia), jadi tak perlu berbagi rahasia lebih dulu."},
              {q:"Saat mengenkripsi pesan UNTUK seseorang, kamu memakai kunci…",
               options:["Privat-mu","Publik penerima","Privat penerima","Publik-mu"],
               answer:1,
               explain:"Enkripsi ke kunci publik penerima; hanya kunci privatnya yang bisa membukanya."},
              {q:"Saat MENANDATANGANI pesan, kamu memakai kunci…",
               options:["Publik penerima","Privat-mu","Publik-mu","Simetris bersama"],
               answer:1,
               explain:"Menandatangani memakai kunci privatmu; orang lain memverifikasi dengan kunci publikmu."},
              {q:"Sistem nyata seperti PGP/TLS bersifat hibrida karena…",
               options:["Memakai dua bahasa","Asimetris untuk tukar kunci, simetris untuk data (cepat + aman)","Tidak butuh enkripsi","Gratis"],
               answer:1,
               explain:"Asimetris menukar kunci simetris sekali-pakai dengan aman, lalu data dienkripsi cepat secara simetris."},
              {q:"Hasil 'Good signature' bermakna penuh hanya bila…",
               options:["File-nya besar","Kunci penandatangan sudah diverifikasi benar milik orang yang diklaim","Kamu online","Memakai RSA"],
               answer:1,
               explain:"Tanpa memverifikasi fingerprint kunci, 'Good signature' bisa berasal dari kunci palsu penyerang."}
            ]
          }
        }
      ]
    },
    /* ============= BAB 9: CRYPTOCURRENCY — BITCOIN & PRIVASI FINANSIAL ============= */
    {
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
    },

    /* ============= BAB 10: CRYPTOCURRENCY — MONERO ============= */
    {
      id:"monero",
      title:"Cryptocurrency — Monero",
      lectures:[
        {
          id:"xmr-intro",
          title:"Mengenal Monero",
          dur:"konsep",
          body:`
            <p class="lead">Kalau di bab Bitcoin kita menyimpulkan bahwa Bitcoin itu pseudonim — bukan anonim — Monero lahir justru untuk menjawab kelemahan itu. Di Bitcoin, setiap transaksi memamerkan tiga hal ke seluruh dunia, selamanya: dari alamat mana, ke alamat mana, dan berapa jumlahnya. Monero menutup ketiganya secara default.</p>

            <p>Yang menarik, Monero tidak menyelesaikannya dengan satu trik, melainkan tiga lapisan yang saling melengkapi — karena ketiga kebocoran tadi memang masalah yang berbeda. <strong>Ring signatures</strong> menyembunyikan pengirim dengan mencampur tanda tangan transaksimu bersama sejumlah "umpan" dari pengguna lain, sehingga pengamat tak bisa memastikan mana yang benar-benar membelanjakan koin. <strong>Stealth addresses</strong> membuat setiap transaksi mendarat di alamat sekali-pakai yang dihasilkan otomatis, jadi penerima tak terlihat di blockchain. Dan <strong>RingCT</strong> menyembunyikan jumlahnya. Tambahan lagi, di lapisan jaringan ada Dandelion++ yang mengaburkan dari node mana sebuah transaksi pertama kali muncul.</p>

            <p>Konsekuensi dari desain ini adalah sifat yang disebut <em>fungibility</em> — setiap satu XMR setara dengan XMR mana pun. Di Bitcoin, koin bisa "ternoda" karena riwayatnya terlacak (misalnya pernah lewat pasar gelap), lalu ditolak bursa. Di Monero, karena riwayat tersembunyi secara matematis, tak ada konsep koin bersih vs kotor. Inilah yang membuat sebagian orang menyebutnya privacy coin paling kuat yang ada.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Lingkup & hukum — baca dulu</div>
              <p>Sama seperti bab Bitcoin: ini literasi privasi finansial, bukan nasihat hukum/finansial, dan bukan panduan menyembunyikan dana ilegal. Justru karena Monero begitu efektif, ia berada di bawah sorotan regulator — banyak bursa besar kini membatasi atau menghapusnya (delisting) demi mematuhi aturan AML/KYC. Di Indonesia, aset kripto diawasi OJK. Pahami konsepnya, tapi selalu periksa hukum yang berlaku di wilayahmu.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Satu hal yang sering dilupakan</div>
              <p>Privasi on-chain Monero kuat, tapi ia tak menyelamatkanmu dari kebocoran <em>di luar</em> blockchain. Kalau kamu membeli XMR di bursa ber-KYC, atau memakai dompet tanpa TOR sehingga IP-mu terlihat, tautan ke identitasmu tetap bisa terbentuk di "pinggiran" sistem. Privasi tetap soal kebiasaan, bukan cuma teknologi.</p>
            </div>
          `,
          takeaways:[
            "Monero menutup tiga kebocoran Bitcoin: pengirim (ring signatures), penerima (stealth addresses), jumlah (RingCT).",
            "Karena riwayat tersembunyi, Monero bersifat fungible — tiap XMR setara, tak bisa 'ternoda'.",
            "Efektivitasnya memicu delisting di banyak bursa; privasi tetap bergantung pada OPSEC di luar blockchain."
          ]
        },
        {
          id:"xmr-wallet-create",
          title:"Membuat Dompet Monero",
          dur:"praktik",
          body:`
            <p class="lead">Membuat dompet Monero tidak jauh berbeda dari Bitcoin secara prinsip — yang kamu jaga adalah kuncinya, bukan koinnya — tapi ada beberapa hal khas Monero yang perlu kamu kenali.</p>

            <p>Untuk mulai, kamu bisa memakai dompet resmi seperti <strong>Monero GUI/CLI</strong> dari getmonero.org, atau dompet ringan populer seperti <strong>Cake Wallet</strong> dan <strong>Feather Wallet</strong>. Apa pun pilihanmu, unduh dari sumber resmi dan verifikasi tanda tangannya (keterampilan dari Bab 8) — dompet palsu adalah jebakan klasik untuk mencuri kunci.</p>

            <p>Saat membuat dompet baru, Monero memberimu sebuah <strong>seed mnemonic 25 kata</strong> (berbeda dari Bitcoin yang umumnya 12–24 kata). Catat offline, jangan difoto, jangan disimpan di cloud — siapa pun yang memegangnya menguasai seluruh danamu. Di balik layar, dompetmu sebenarnya punya beberapa kunci: <strong>spend key</strong> (untuk membelanjakan) dan <strong>view key</strong> (hanya untuk melihat transaksi masuk). Pemisahan ini berguna; misalnya kamu bisa memberi akuntan view key untuk audit tanpa pernah memberi kuasa membelanjakan.</p>

            <p>Untuk menerima dana, biasakan memakai <strong>subaddress</strong> — alamat turunan yang bisa kamu buat sebanyak-banyaknya dari satu dompet. Memakai subaddress baru tiap transaksi adalah kebiasaan privasi yang baik, mirip prinsip "jangan pakai ulang alamat" di Bitcoin.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Bedakan baik-baik: spend key (atau seed 25 kata) adalah rahasia mutlak. View key boleh dibagikan dalam situasi tertentu, tapi tetap mengurangi privasimu karena penerimanya bisa melihat dana masuk. Jangan menukar keduanya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan (aman):</strong> di dompet uji, buat dompet Monero baru, perhatikan seed 25 kata-nya, lalu buat dua subaddress. Tanpa dana nyata dulu — fokus memahami beda spend key vs view key dan kenapa subaddress berguna.</p>`,
          takeaways:[
            "Pakai dompet resmi (Monero GUI/CLI, Cake, Feather) dan verifikasi unduhannya.",
            "Monero memberi seed mnemonic 25 kata; ada spend key (rahasia) dan view key (lihat-saja).",
            "Gunakan subaddress baru tiap menerima sebagai kebiasaan privasi."
          ]
        },
        {
          id:"xmr-restore-tails",
          title:"Memulihkan Dompet Monero di TAILS",
          dur:"praktik",
          body:`
            <p class="lead">Karena TAILS bersifat amnesik — lupa segalanya saat reboot — memulihkan dompet Monero di dalamnya adalah skenario yang sangat masuk akal: kamu menyimpan seed dengan aman di luar, lalu "membangkitkan" dompet hanya saat dibutuhkan, di lingkungan yang bersih dan merutekan semuanya lewat TOR.</p>

            <p>Alurnya sederhana. Buka dompet Monero, pilih opsi <em>restore from seed</em>, lalu masukkan seed mnemonic 25 kata-mu. Satu langkah yang sering bikin pemula bingung adalah <strong>restore height</strong> — yaitu nomor blok kira-kira saat dompet itu dibuat. Mengisinya dengan benar membuat proses sinkronisasi jauh lebih cepat, karena dompet tak perlu memindai seluruh sejarah blockchain dari awal. Kalau ragu, isi perkiraan tanggal pembuatan; lebih baik sedikit terlalu awal daripada terlalu lambat.</p>

            <p>Ada dua cara mengelola ini di TAILS. Tanpa persistence, dompet hidup hanya selama sesi dan benar-benar lenyap saat shutdown — paling aman dari sisi jejak, tapi kamu harus restore tiap kali. Dengan <strong>Persistent Storage</strong> terenkripsi (Bab 2), file dompetmu bisa bertahan antar sesi sehingga tak perlu restore berulang — lebih praktis, dengan sedikit pengurangan sifat amnesik. Pilih sesuai model ancamanmu.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Karena Monero di TAILS otomatis lewat TOR, sinkronisasi bisa terasa lambat. Bersabarlah, atau pertimbangkan menghubungkan ke remote node tepercaya untuk mempercepat — dengan catatan remote node bisa melihat alamat IP koneksimu (di TAILS, itu IP TOR, bukan IP aslimu) dan sebagian metadata.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> di TAILS, restore dompet uji dari seed dengan mengisi restore height kira-kira. Bandingkan kecepatan sinkronisasi saat restore height diisi vs dikosongkan.</p>`,
          takeaways:[
            "TAILS yang amnesik cocok untuk 'membangkitkan' dompet hanya saat perlu, lewat TOR.",
            "Restore from seed + isi restore height agar sinkronisasi tak memindai seluruh blockchain.",
            "Tanpa persistence = paling sedikit jejak; dengan Persistent Storage = lebih praktis."
          ]
        },
        {
          id:"xmr-acquire",
          title:"Cara Memperoleh Monero (dan Trade-off-nya)",
          dur:"konsep",
          body:`
            <p class="lead">Ada beberapa jalur untuk mendapatkan Monero, dan masing-masing menukar kepraktisan dengan privasi dan kepatuhan dengan cara berbeda. Penting memahaminya sebagai peta trade-off, bukan sebagai resep "cara jadi tak terlacak".</p>

            <p>Jalur paling umum adalah <strong>bursa terpusat (CEX)</strong> yang masih melayani XMR. Ini paling mudah dan likuid, tapi paling sedikit privasinya: kamu lewat KYC, sehingga pembelian XMR-mu tertaut ke identitasmu di catatan bursa. Perlu dicatat, makin banyak bursa besar (seperti Binance, Coinbase, Kraken di wilayah teregulasi) yang membatasi atau menghapus XMR demi mematuhi AML — jadi ketersediaannya terus menyusut.</p>

            <p>Sebagai gantinya, muncul <strong>layanan swap non-kustodian tanpa registrasi</strong> dan <strong>DEX</strong> seperti Haveno (bursa Monero terdesentralisasi bergaya P2P dengan escrow multisig). Ada juga pasar <strong>P2P</strong> seperti AgoraDesk (penerus LocalMonero) yang mempertemukan pembeli-penjual langsung. Dua jalur lain adalah <strong>mining</strong> (Monero dirancang ramah CPU, jadi menambang dengan komputer biasa masih relevan) dan <strong>menerima XMR sebagai pembayaran</strong> atas barang/jasa yang sah.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Garis yang harus jelas</div>
              <p>Mencari privasi finansial atas dana yang sah itu boleh. Tapi <strong>sengaja menghindari KYC/AML untuk menyamarkan asal dana</strong>, apalagi bila dananya hasil kejahatan, bisa menjadi pelanggaran serius (pencucian uang) — terlepas dari alat yang dipakai. Penegakan aturan seperti FATF "Travel Rule" makin ketat secara global. Niat dan sumber dana menentukan legalitas, bukan jalur teknisnya.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Catatan jujur soal privasi</div>
              <p>Privasi on-chain Monero akan percuma kalau <em>titik masuknya</em> tertaut KYC. Kalau kamu beli XMR dengan identitas terverifikasi, lalu mengirimnya ke dompetmu, bursa tetap tahu kamu pembelinya. Privasi mulai dari hulu, bukan ditambal di hilir.</p>
            </div>
          `,
          takeaways:[
            "Jalur: CEX (mudah, KYC, makin langka untuk XMR), swap/DEX (Haveno), P2P (AgoraDesk), mining, menerima pembayaran.",
            "Tiap jalur menukar kepraktisan dengan privasi & kepatuhan — pahami sebagai peta trade-off.",
            "Menghindari KYC untuk menyamarkan asal dana bisa = pencucian uang; niat & sumber dana yang menentukan."
          ]
        },
        {
          id:"xmr-exchanges",
          title:"Crypto-exchange — Menukar Satu Koin ke Koin Lain",
          dur:"konsep",
          body:`
            <p class="lead">Sebelum membahas hubungannya dengan privasi, mari pahami dulu apa itu menukar (swap) satu cryptocurrency ke yang lain, karena ini operasi sehari-hari yang sangat umum dan, dengan sendirinya, sepenuhnya biasa.</p>

            <p>Secara garis besar ada tiga model. <strong>Bursa terpusat (CEX)</strong> menyimpan danamu di akun dan kamu berdagang di dalam platform mereka — nyaman dan likuid, tapi kustodial (mereka memegang kuncimu) dan ber-KYC. <strong>Layanan swap instan non-kustodian</strong> bekerja sederhana: kamu pilih pasangan (misalnya koin A ke koin B), kirim koin A ke alamat sekali-pakai, lalu menerima koin B di dompetmu sendiri, tanpa akun. <strong>DEX (bursa terdesentralisasi)</strong> mempertemukan order langsung antar pengguna lewat smart contract atau escrow, tanpa operator yang memegang dana.</p>

            <p>Orang menukar koin karena banyak alasan biasa: menyeimbangkan portofolio, membayar dengan koin yang diterima merchant, memanfaatkan likuiditas, atau sekadar berpindah jaringan. Yang perlu kamu perhatikan di sisi praktis adalah <strong>biaya</strong> (tiap swap memotong sedikit), <strong>kurs &amp; slippage</strong> (koin privasi kerap likuiditasnya lebih tipis), dan <strong>keandalan/keamanan layanan</strong> (untuk yang kustodial, kamu mempercayakan dana sementara ke operator).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk privasi jaringan, layanan swap non-kustodian umumnya bisa diakses lewat TOR, dan beberapa punya alamat .onion resmi. Tetap verifikasi alamatnya dari sumber resmi agar tak masuk ke situs tiruan (Bab 4).</p>
            </div>
          `,
          takeaways:[
            "Tiga model: CEX (kustodial, KYC), swap instan non-kustodian (tanpa akun), dan DEX.",
            "Menukar koin adalah operasi biasa; perhatikan biaya, slippage, dan keandalan layanan.",
            "Koin privasi sering likuiditasnya lebih tipis sehingga slippage bisa lebih besar."
          ]
        },
        {
          id:"xmr-anonymity-reality",
          title:"Menukar Lewat Privacy Coin: Konsep & Realitas Hukum",
          dur:"konsep penting",
          body:`
            <p class="lead">Di sinilah privasi finansial paling sering bersinggungan dengan hukum, jadi materi ini sengaja menahan diri pada <strong>konsep dan realitas hukum</strong> — bukan resep operasional. Tujuannya agar kamu paham apa yang terjadi dan di mana batasnya, bukan menyediakan tata-cara memutus jejak dana.</p>

            <p>Konsepnya begini. Karena blockchain seperti Bitcoin transparan, sebagian orang berargumen bahwa mengubah dana menjadi koin privasi seperti Monero "memutus" jejak transparan itu: begitu dana masuk ke Monero, analisis rantai kehilangan jejak ke mana ia pergi. Ini secara fungsi mirip dengan apa yang dilakukan mixer pada bab Bitcoin — dan karena itu, ia menghuni <strong>zona risiko hukum yang sama</strong>.</p>

            <p>Realitasnya, batas legal di sini tidak ditentukan oleh "alatnya", melainkan oleh <strong>niat, sumber dana, lisensi, dan yurisdiksi</strong>. Memutus tautan privasi atas dana yang sah sangat berbeda dari menyamarkan hasil kejahatan — yang kedua adalah pencucian uang, kejahatan serius. Penegakan aturan AML dan FATF "Travel Rule" makin agresif, dan kita sudah melihat di bab Bitcoin bahwa operator layanan pemutus-jejak bisa dipidana meski kodenya dianggap legal. Konversi via privacy coin tidak otomatis menjadikan apa pun legal.</p>

            <p>Maka, alih-alih "cara meningkatkan anonimitas", yang sehat untuk dipelajari adalah <strong>praktik privasi finansial yang tetap dalam koridor hukum</strong>: jangan memakai ulang alamat, pisahkan dompet per-tujuan, akses lewat TOR agar IP tak tertaut, pahami coin control, dan simpan catatan untuk kepatuhan pajak/pelaporan sesuai aturan wilayahmu.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Penegasan</div>
              <p>Materi ini tidak memberi langkah-demi-langkah memutus jejak dana, karena bila dipakai untuk menyamarkan dana ilegal itu adalah kejahatan. Ini juga bukan nasihat hukum. Sebelum memakai teknik privasi finansial apa pun, periksa hukum yang berlaku dan konsultasikan ke profesional untuk hal yang serius.</p>
            </div>
          `,
          takeaways:[
            "Konversi via privacy coin secara fungsi mirip mixing — menghuni zona risiko hukum yang sama.",
            "Batas legal = niat, sumber dana, lisensi, yurisdiksi; konversi tak otomatis menjadikan sesuatu legal.",
            "Yang sehat dipelajari: praktik privasi finansial yang tetap patuh hukum, bukan resep memutus jejak."
          ]
        },
        {
          id:"xmr-conclusion",
          title:"Penutup Monero",
          dur:"ringkasan",
          body:`
            <p class="lead">Kalau kita rangkum, Monero adalah jawaban teknis atas keterbatasan privasi Bitcoin: ia menyembunyikan pengirim, penerima, dan jumlah secara default, dan dari situ memperoleh sifat fungible. Tapi justru kekuatan itulah yang membuatnya berada di bawah tekanan regulasi yang berat.</p>

            <p>Dua pelajaran besar layak kamu bawa pulang. Pertama, <strong>teknologi bukan tongkat ajaib</strong>: privasi on-chain Monero bisa runtuh oleh kebocoran di luar rantai — KYC di titik masuk, IP yang terlihat, kebiasaan ceroboh. Privasi tetaplah disiplin, persis seperti OPSEC di Bab 1 dan Lab 08. Kedua, <strong>privasi dan hukum bukan hal yang sama</strong>: mencari privasi atas dana yang sah itu wajar, tapi memakai privasi untuk menyamarkan kejahatan tetap kejahatan, dan lanskap hukumnya berubah cepat.</p>

            <p>Pakailah pemahaman ini untuk melindungi diri secara sah — bukan untuk menghindari tanggung jawab hukum.</p>

            <div class="box tip">
              <div class="bx-title">◇ Menyambung ke bab berikutnya</div>
              <p>Sejauh ini kita banyak bicara soal menjaga jejak di jaringan dan di blockchain. Bab terakhir naik satu level: <strong>Qubes OS</strong>, sistem operasi yang membangun keamanan lewat isolasi — tempat ideal untuk menjalankan semua yang sudah kamu pelajari, termasuk Whonix di atasnya.</p>
            </div>
          `,
          takeaways:[
            "Monero = privasi default (pengirim/penerima/jumlah) + fungibility; tapi penuh tekanan regulasi.",
            "Teknologi tak menggantikan OPSEC; kebocoran di luar rantai tetap bisa membongkar.",
            "Privasi ≠ kebal hukum; pakai untuk proteksi diri yang sah, bukan menyamarkan kejahatan."
          ],
          quiz:{
            title:"Kuis Bab 10 — Monero",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Tiga lapisan privasi Monero menyembunyikan…",
               options:["Hanya jumlah","Pengirim (ring signatures), penerima (stealth addresses), jumlah (RingCT)","Hanya pengirim","Tidak ada, semua publik"],
               answer:1,
               explain:"Ketiganya orthogonal: masing-masing menutup satu kebocoran berbeda."},
              {q:"Sifat 'fungibility' Monero berarti…",
               options:["Koin bisa diprogram","Setiap XMR setara; tak ada koin 'ternoda' yang bisa di-blacklist","Monero lebih cepat","Monero gratis"],
               answer:1,
               explain:"Karena riwayat tersembunyi, tak ada konsep koin bersih vs kotor seperti di Bitcoin."},
              {q:"Seed mnemonic dompet Monero umumnya terdiri dari…",
               options:["6 kata","25 kata","Tidak ada seed","Hanya angka"],
               answer:1,
               explain:"Monero memakai seed 25 kata; catat offline & rahasiakan."},
              {q:"Apa fungsi 'restore height' saat memulihkan dompet?",
               options:["Mengubah saldo","Mempercepat sinkronisasi dengan menandai blok awal dompet","Mengenkripsi seed","Menghapus riwayat"],
               answer:1,
               explain:"Tanpa restore height, dompet memindai seluruh blockchain dari awal — jauh lebih lambat."},
              {q:"Kenapa privasi on-chain Monero bisa tetap bocor?",
               options:["Algoritmanya lemah","Kebocoran di luar rantai: KYC di titik masuk, IP terlihat, kebiasaan ceroboh","Monero menyimpan nama","Blockchain-nya publik penuh"],
               answer:1,
               explain:"Privasi tetap soal OPSEC; tautan bisa terbentuk di 'pinggiran' sistem, bukan di rantainya."},
              {q:"Konversi dana lewat privacy coin, secara hukum…",
               options:["Selalu legal karena memakai teknologi privasi","Menghuni zona risiko yang sama dengan mixing; legalitas tergantung niat, sumber dana, lisensi, yurisdiksi","Selalu ilegal","Tak diatur sama sekali"],
               answer:1,
               explain:"Konversi tak otomatis melegalkan apa pun; menyamarkan dana ilegal tetap pencucian uang."}
            ]
          }
        }
      ]
    },

    /* ============= BAB 11: QUBES OS ============= */
    {
      id:"qubes",
      title:"Qubes OS",
      lectures:[
        {
          id:"qubes-what",
          title:"Apa Itu Qubes & Kenapa Memakainya?",
          dur:"konsep",
          body:`
            <p class="lead">Bayangkan kalau setiap aktivitasmu di komputer hidup di kamarnya sendiri yang terkunci rapat: email kerja di satu kamar, perbankan di kamar lain, browsing sembarangan di kamar ketiga. Kalau satu kamar kebobolan, yang lain tetap aman. Itulah ide inti Qubes OS — keamanan lewat <strong>isolasi</strong>, atau yang mereka sebut <em>security by compartmentalization</em>.</p>

            <p>Secara teknis, Qubes menjalankan tiap "kamar" sebagai mesin virtual terpisah di atas hypervisor Xen, dengan bantuan fitur virtualisasi perangkat keras (VT-x/VT-d). Tiap mesin virtual ini disebut <strong>qube</strong>, dan masing-masing diberi tingkat kepercayaan berbeda. Yang membuatnya tetap nyaman dipakai sehari-hari: meski isinya banyak VM, pengalaman desktopnya terintegrasi — jendela dari qube berbeda muncul berdampingan di satu layar, dibedakan oleh warna bingkai.</p>

            <p>Bandingkan ini dengan pendekatan yang sudah kita bahas. TAILS hebat karena amnesik dan menghapus OS host dari persamaan, tapi ia satu lingkungan yang seragam. VM biasa mengisolasi satu hal, tapi pondasinya tetap Windows yang harus kamu percayai. Qubes mengambil jalan ketiga: <strong>seluruh sistem</strong> dibangun dari isolasi, sehingga tak ada satu lingkungan tunggal yang, bila jebol, membongkar segalanya. Inilah kenapa Qubes sering disebut "reasonably secure operating system" dan jadi favorit jurnalis serta peneliti keamanan berisiko tinggi.</p>

            <div class="box tip">
              <div class="bx-title">◇ Inti yang membedakan</div>
              <p>Di OS biasa, satu program jahat bisa menjelajah ke seluruh sistemmu. Di Qubes, ia terkurung di qube tempat ia berjalan. Kerusakan jadi terkotak, bukan menyebar.</p>
            </div>
          `,
          takeaways:[
            "Qubes = keamanan lewat isolasi: tiap aktivitas hidup di mesin virtual (qube) terpisah.",
            "Berbasis hypervisor Xen + virtualisasi perangkat keras; desktop tetap terintegrasi (bingkai berwarna).",
            "Bila satu qube jebol, kerusakan terkotak — tak membongkar seluruh sistem."
          ]
        },
        {
          id:"qubes-verify",
          title:"Opsi Instalasi & Memverifikasi Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Sebelum memasang sistem yang seluruh tujuannya adalah keamanan, langkah paling masuk akal adalah memastikan installer yang kamu unduh memang asli — bukan versi yang sudah disusupi. Untungnya, kamu sudah punya keterampilan ini dari Bab 8.</p>

            <p>Unduh ISO Qubes hanya dari situs resmi qubes-os.org (versi stabil terkini adalah seri 4.3, yang membawa template Whonix 18 dan disposable VM preloaded). Setelah itu, verifikasi keasliannya dengan dua hal yang disediakan tim Qubes: <strong>checksum</strong> untuk memastikan file tak rusak/berubah, dan <strong>tanda tangan PGP</strong> untuk membuktikan file benar-benar dari tim Qubes. Prosesnya: impor master signing key Qubes, verifikasi bahwa kunci itu sah, lalu jalankan verifikasi tanda tangan atas ISO. Hasil "Good signature" dari kunci Qubes yang sudah kamu percayai adalah lampu hijaunya.</p>

            <p>Soal opsi instalasi, ingat satu hal penting: Qubes bukan tipe sistem yang nyaman dijalankan di dalam VM (ia sendiri sebuah hypervisor). Ia paling baik dipasang langsung di perangkat keras — idealnya di komputer atau laptop yang memang kamu siapkan untuknya, bukan mesin utama yang berisi data pentingmu, setidaknya saat belajar.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>"Good signature" hanya bermakna kalau kunci penandatangannya sudah kamu verifikasi sebagai milik tim Qubes (lewat fingerprint dari sumber resmi). Tanpa itu, tanda tangan bisa saja berasal dari kunci palsu — persis pelajaran di Bab 8.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> unduh ISO Qubes resmi, lalu verifikasi checksum dan tanda tangan PGP-nya mengikuti panduan resmi. Anggap ini ujian praktik dari keterampilan verifikasi di Bab 8.</p>`,
          takeaways:[
            "Unduh ISO hanya dari qubes-os.org (kini seri 4.3, template Whonix 18).",
            "Verifikasi checksum (integritas) + tanda tangan PGP (keaslian) sebelum memasang.",
            "Qubes dipasang langsung di hardware, bukan di dalam VM; idealnya di mesin khusus."
          ]
        },
        {
          id:"qubes-flash",
          title:"Membuat USB Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Setelah ISO terverifikasi, langkah berikutnya menuliskannya ke USB agar bisa di-boot — mirip yang kita lakukan untuk TAILS, dengan sedikit perbedaan alat sesuai sistem operasi yang kamu pakai sekarang.</p>

            <p>Di Linux atau macOS, kamu bisa memakai perintah <code>dd</code> yang menyalin ISO byte-per-byte ke USB, atau alat grafis. Di Windows, gunakan <strong>Rufus</strong> (alat yang sama yang kini direkomendasikan untuk TAILS). Apa pun alatnya, gunakan USB berukuran cukup besar — installer Qubes relatif besar — dan pastikan kamu memilih perangkat USB yang benar, karena proses ini akan menghapus seluruh isi drive tujuan.</p>

            <p>Satu kebiasaan baik: setelah menulis, sebagian alat memungkinkan verifikasi ulang bahwa salinan di USB cocok dengan ISO asli. Mengingat seluruh tujuan Qubes adalah kepercayaan, langkah kecil ini sepadan.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Hati-hati memilih drive</div>
              <p>Menulis ke USB akan menghapus semuanya di drive itu. Periksa dua kali nama/label perangkat tujuan sebelum mengeksekusi — salah pilih bisa menghapus data di drive lain.</p>
            </div>
          `,
          takeaways:[
            "Tulis ISO terverifikasi ke USB: dd/alat grafis di Linux/macOS, Rufus di Windows.",
            "Pakai USB cukup besar; proses ini menghapus seluruh isi drive tujuan.",
            "Periksa dua kali perangkat tujuan agar tak salah menghapus drive lain."
          ]
        },
        {
          id:"qubes-prepare",
          title:"Menyiapkan Komputer untuk Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Karena Qubes bersandar pada virtualisasi perangkat keras untuk mengisolasi qube-qube-nya, ada beberapa setelan di BIOS/UEFI yang harus dinyalakan lebih dulu. Tanpa ini, isolasi yang jadi inti Qubes tak bisa berjalan optimal.</p>

            <p>Masuk ke pengaturan BIOS/UEFI komputermu (biasanya dengan menekan F2, Del, atau tombol serupa saat menyala), lalu aktifkan fitur <strong>virtualisasi</strong>: pada perangkat Intel ini disebut <em>VT-x</em> dan <em>VT-d</em>, pada AMD disebut <em>AMD-V</em> dan <em>AMD-Vi/IOMMU</em>. VT-d/IOMMU penting karena memungkinkan Qubes mengisolasi perangkat keras (seperti kartu jaringan) ke qube tertentu. Kamu juga mungkin perlu menyesuaikan urutan boot atau menonaktifkan Secure Boot tergantung perangkat.</p>

            <p>Selain itu, perhatikan kebutuhan sumber daya. Karena Qubes menjalankan banyak VM sekaligus, ia lebih lapar RAM dan ruang disk daripada OS biasa — RAM yang lega dan SSD akan membuat pengalamannya jauh lebih nyaman. Cek daftar perangkat keras yang diketahui kompatibel (Hardware Compatibility List) di situs Qubes bila ragu, karena dukungan perangkat keras adalah salah satu kerewelan Qubes yang paling umum.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Kalau instalasi gagal di tengah jalan, tersangka pertama biasanya virtualisasi (VT-d/IOMMU) yang belum aktif, atau perangkat keras yang kurang cocok. Mengecek HCL sebelum mulai menghemat banyak frustrasi.</p>
            </div>
          `,
          takeaways:[
            "Aktifkan virtualisasi di BIOS/UEFI: VT-x/VT-d (Intel) atau AMD-V/AMD-Vi (AMD).",
            "VT-d/IOMMU memungkinkan isolasi perangkat keras ke qube tertentu.",
            "Qubes lapar RAM & disk; cek Hardware Compatibility List bila ragu."
          ]
        },
        {
          id:"qubes-install",
          title:"Memasang Qubes OS",
          dur:"praktik",
          body:`
            <p class="lead">Dengan USB siap dan BIOS sudah disetel, instalasi Qubes mengikuti alur installer yang cukup memandu, mirip memasang distribusi Linux pada umumnya, dengan beberapa langkah khas keamanan.</p>

            <p>Boot dari USB lewat boot menu (sama seperti TAILS di Bab 2), lalu ikuti installer. Dua hal layak kamu perhatikan baik-baik. Pertama, <strong>enkripsi disk</strong>: Qubes mengenkripsi seluruh penyimpanannya secara default (berbasis LUKS), jadi kamu akan membuat passphrase yang kuat — ini melindungi semua qube-mu bila perangkat hilang atau dicuri. Kedua, di akhir instalasi ada tahap <strong>konfigurasi awal</strong> di mana Qubes menawarkan untuk membuat qube-qube standar secara otomatis (work, personal, untrusted) dan menyiapkan template, termasuk opsi Whonix untuk koneksi TOR.</p>

            <p>Setelah selesai dan reboot pertama, kamu akan disambut desktop Qubes. Jangan kaget kalau terasa berbeda — kamu sebenarnya sedang melihat banyak sistem operasi kecil yang bekerja sama dalam satu layar.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Passphrase enkripsi disk adalah pelindung utama seluruh sistemmu. Pilih yang kuat dan jangan sampai lupa — tak ada jalan pintas untuk memulihkannya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> pasang Qubes di mesin uji/khusus, aktifkan enkripsi disk, dan biarkan installer membuat qube standar + template Whonix. Catat passphrase-mu dengan aman.</p>`,
          takeaways:[
            "Boot dari USB, ikuti installer; aktifkan enkripsi disk (LUKS) dengan passphrase kuat.",
            "Konfigurasi awal bisa membuat qube standar (work/personal/untrusted) + template Whonix otomatis.",
            "Setelah reboot, desktop Qubes sebenarnya banyak OS kecil yang bekerja bersama."
          ]
        },
        {
          id:"qubes-basics",
          title:"Dasar-Dasar Qubes OS",
          dur:"konsep",
          body:`
            <p class="lead">Untuk nyaman memakai Qubes, kamu cukup mengenal sedikit kosakata intinya. Begitu konsepnya klik, sisanya mengalir dengan sendirinya.</p>

            <p>Hal terpenting yang perlu dipahami adalah <strong>dom0</strong> — domain admin yang mengelola desktop dan semua qube lain. dom0 sengaja dijaga ketat: ia tidak punya akses jaringan sama sekali, karena kalau dom0 jebol, seluruh sistem jebol. Aturan emasnya: lakukan sesedikit mungkin di dom0, dan jangan pernah memindahkan file mencurigakan ke sana.</p>

            <p>Lalu ada konsep <strong>template</strong> dan <strong>app qube</strong>. Template adalah VM berisi sistem dasar dan software (misalnya berbasis Fedora atau Debian); app qube adalah tempatmu benar-benar bekerja, dan ia "meminjam" software dari template-nya. Trik cerdasnya: kamu menginstal software sekali di template, dan semua app qube yang memakai template itu langsung mendapatkannya — sambil tetap terisolasi satu sama lain. Selain itu ada <strong>disposable VM</strong> (qube sekali-pakai yang lenyap setelah ditutup) yang akan kita pakai untuk menangani hal-hal berisiko.</p>

            <p>Terakhir, tiap qube punya <strong>label warna</strong> (merah, kuning, hijau, dan seterusnya). Warna ini bukan sekadar hiasan — ia muncul di bingkai tiap jendela, memberitahumu sekilas seberapa tepercaya lingkungan tempat jendela itu berjalan.</p>

            <div class="box danger">
              <div class="bx-title">⚠ dom0 adalah jantungnya</div>
              <p>Perlakukan dom0 seperti ruang kendali yang tak boleh disentuh sembarangan. Jangan menjalankan aplikasi sehari-hari di sana, jangan menyalin file tak tepercaya ke sana. Kompromi dom0 = kompromi total.</p>
            </div>
          `,
          takeaways:[
            "dom0 = domain admin tanpa jaringan; jaga ketat, lakukan sesedikit mungkin di sana.",
            "Template menyimpan software; app qube tempat bekerja & meminjam dari template.",
            "Label warna di bingkai jendela menandai tingkat kepercayaan tiap qube."
          ]
        },
        {
          id:"qubes-domains",
          title:"Memahami Security Domains",
          dur:"konsep",
          body:`
            <p class="lead">Inti dari memakai Qubes dengan baik adalah memikirkan hidup digitalmu sebagai sekumpulan <strong>domain keamanan</strong> — kelompok aktivitas dengan tingkat kepercayaan yang sama, masing-masing di qube-nya sendiri.</p>

            <p>Pembagian klasik kira-kira begini. Qube <strong>work</strong> untuk urusan pekerjaan, <strong>personal</strong> untuk kehidupan pribadi, dan <strong>untrusted</strong> untuk browsing sembarangan yang kamu anggap berisiko. Untuk hal paling sensitif, ada pola <strong>vault</strong> — qube tanpa jaringan sama sekali, tempat menyimpan rahasia seperti kunci PGP atau database password. Karena vault tak pernah online, mencurinya dari jarak jauh nyaris mustahil.</p>

            <p>Kekuatan cara berpikir ini terlihat saat ada yang tidak beres. Misalkan kamu tak sengaja membuka lampiran jahat di qube untrusted — kerusakannya terkurung di sana, tak menyentuh qube work atau vault-mu. Kamu cukup membuang qube itu dan melanjutkan hidup. Warna label tadi membantu disiplin ini: kamu jadi terbiasa melihat apakah jendela yang sedang kamu pakai berwarna "aman" atau "berisiko" sebelum mengetik sesuatu yang sensitif.</p>

            <div class="box tip">
              <div class="bx-title">◇ Cara menentukan domain</div>
              <p>Tanyakan: "kalau lingkungan ini jebol, apa yang hilang?" Kelompokkan aktivitas berdasarkan jawaban itu. Yang taruhannya besar (vault) dipisahkan tegas dari yang berisiko tinggi (untrusted).</p>
            </div>
          `,
          takeaways:[
            "Pikirkan aktivitas sebagai domain keamanan: work, personal, untrusted, dan vault (tanpa jaringan).",
            "Vault tanpa jaringan menyimpan rahasia (kunci PGP, password) hampir mustahil dicuri dari jauh.",
            "Kompromi di satu domain terkurung di sana; warna label membantu disiplin sehari-hari."
          ]
        },
        {
          id:"qubes-multi",
          title:"Bekerja dengan Banyak Domain Sekaligus",
          dur:"praktik",
          body:`
            <p class="lead">Salah satu hal yang membuat Qubes terasa ajaib pertama kali adalah ini: kamu bisa menjalankan aplikasi dari beberapa qube berbeda berdampingan di satu desktop, seakan semuanya satu sistem — padahal masing-masing terisolasi total.</p>

            <p>Bayangkan browser dari qube untrusted, klien email dari qube work, dan editor dari qube personal terbuka bersamaan. Yang membedakan mereka adalah <strong>warna bingkai jendela</strong>: tiap jendela mewarisi warna label qube asalnya. Sekilas lihat, kamu langsung tahu "jendela merah ini berasal dari lingkungan untrusted, jadi aku tak akan mengetik password bank di sini". Petunjuk visual sederhana ini adalah lapisan keamanan tersendiri — ia melawan kebiasaan ceroboh dengan membuat tingkat kepercayaan selalu terlihat.</p>

            <p>Yang penting dipahami: meski tampak menyatu, jendela-jendela ini tidak bisa saling mengintip. Aplikasi di qube untrusted tak bisa membaca apa yang ada di qube work, tak bisa menangkap ketikanmu di jendela lain, tak bisa mengakses file-nya. Integrasi ada di lapisan tampilan; isolasi tetap utuh di bawahnya.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kebiasaan kecil, dampak besar</div>
              <p>Biasakan melirik warna bingkai sebelum melakukan hal sensitif. Lama-lama refleks ini menjadi pelindung otomatis: tangan berhenti sendiri sebelum mengetik rahasia di jendela "berisiko".</p>
            </div>
          `,
          takeaways:[
            "Aplikasi dari banyak qube tampil berdampingan; warna bingkai menandai asal & kepercayaannya.",
            "Petunjuk warna adalah lapisan keamanan: tingkat kepercayaan selalu terlihat.",
            "Integrasi hanya di tampilan; jendela antar-qube tetap tak bisa saling mengintip."
          ]
        },
        {
          id:"qubes-files",
          title:"Memindahkan File & Teks Antar Domain",
          dur:"praktik",
          body:`
            <p class="lead">Kalau setiap qube terisolasi, bagaimana cara memindahkan satu file dari qube unduhan ke qube tempatmu bekerja? Qubes menyediakan mekanisme khusus yang sengaja dibuat sadar-keamanan — bukan drag-and-drop bebas seperti OS biasa.</p>

            <p>Untuk file, Qubes punya perintah seperti <strong>qvm-copy</strong> (dan menu klik-kanan "Copy to other qube") yang memindahkan file ke qube tujuan dengan aman, menempatkannya di folder khusus agar kamu sadar file itu "pendatang". Untuk teks, ada <strong>clipboard antar-qube</strong> dua langkah: kamu salin di qube asal, tekan kombinasi khusus untuk mengirimnya ke clipboard global, lalu kombinasi lain untuk menempelkannya di qube tujuan. Dua langkah ini disengaja — agar tak ada teks yang berpindah antar lingkungan tanpa kamu kehendaki.</p>

            <p>Yang krusial dipahami adalah <strong>arah kepercayaan</strong>. Menyalin file <em>dari</em> qube tepercaya <em>ke</em> qube tak tepercaya umumnya aman. Sebaliknya, membawa file dari qube tak tepercaya ke qube tepercaya (apalagi ke dom0) berisiko: file itu bisa membawa sesuatu yang berbahaya. Karena itu, file mencurigakan sebaiknya ditangani di disposable VM (materi berikutnya), bukan diseret ke qube pentingmu.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Jangan ke dom0</div>
              <p>Memindahkan file ke dom0 sangat tidak dianjurkan. dom0 adalah ruang kendali; satu file jahat di sana bisa membahayakan seluruh sistem. Kalau benar-benar perlu, ada prosedur khusus — tapi defaultnya: jangan.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buat file teks di satu qube, pindahkan ke qube lain dengan "Copy to other qube", lalu coba juga clipboard antar-qube. Perhatikan langkah-langkah sengaja yang membuatmu sadar setiap perpindahan.</p>`,
          takeaways:[
            "Pindah file dengan qvm-copy / 'Copy to other qube'; teks lewat clipboard antar-qube dua langkah.",
            "Mekanismenya sengaja sadar-keamanan, bukan drag-and-drop bebas.",
            "Perhatikan arah kepercayaan; jangan membawa file mencurigakan ke qube penting atau dom0."
          ]
        },
        {
          id:"qubes-install-sw",
          title:"Memasang Software ke Domain Tertentu",
          dur:"praktik",
          body:`
            <p class="lead">Cara menginstal software di Qubes sedikit berbeda dari kebiasaan, tapi begitu kamu paham logikanya, ia justru sangat rapi: kamu memasang software di <strong>template</strong>, bukan langsung di app qube tempat bekerja.</p>

            <p>Ingat dari materi dasar tadi: app qube meminjam software dari template-nya. Jadi kalau kamu ingin, misalnya, sebuah editor tersedia di qube work, kamu menginstalnya di template yang dipakai qube work (mis. template Debian atau Fedora), lalu me-restart qube tersebut. Semua app qube yang berbagi template itu kini punya editornya — sekali pasang, banyak yang menikmati, tanpa mengorbankan isolasi.</p>

            <p>Pendekatan ini punya bonus keamanan. Karena app qube biasanya tidak menyimpan perubahan sistem secara permanen (hanya data di folder rumahnya yang bertahan), perubahan yang tak diinginkan di sistem dasar akan hilang saat restart. Dan kalau kamu butuh software yang tak ingin kamu percayai sepenuhnya, kamu bisa membuat template terpisah khusus untuknya, sehingga ia tak "mengkontaminasi" lingkungan lain.</p>

            <div class="box tip">
              <div class="bx-title">◇ Pola pikir</div>
              <p>Template = "pabrik" software; app qube = "ruang kerja" yang memakai hasil pabrik. Kalau butuh sesuatu di mana-mana, pasang di pabriknya. Kalau butuh sesuatu yang berisiko, beri ia pabrik sendiri.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> instal sebuah aplikasi ringan di salah satu template, restart app qube yang memakainya, dan pastikan aplikasinya muncul. Perhatikan bahwa app qube lain dengan template sama juga mendapatkannya.</p>`,
          takeaways:[
            "Instal software di template, bukan langsung di app qube; restart agar app qube mendapatkannya.",
            "Sekali pasang di template, semua app qube yang memakainya menikmatinya — tetap terisolasi.",
            "Software berisiko bisa diberi template terpisah agar tak mengkontaminasi lingkungan lain."
          ]
        },
        {
          id:"qubes-malware",
          title:"Menangani File Mencurigakan & Malware dengan Aman",
          dur:"praktik · defensif",
          body:`
            <p class="lead">Di sinilah arsitektur Qubes benar-benar bersinar. Pernah ragu membuka sebuah lampiran karena takut berbahaya? Di Qubes, kamu bisa membukanya di ruangan sekali-pakai yang akan dibakar habis setelahnya — tanpa mempertaruhkan sistemmu.</p>

            <p>Kuncinya adalah <strong>disposable VM (DispVM)</strong> — qube sementara yang dibuat sesaat untuk satu tugas, lalu dihancurkan total beserta seluruh isinya begitu jendelanya ditutup. Kalau file yang kamu buka ternyata membawa malware, malware itu hanya hidup di dalam DispVM dan ikut lenyap saat qube-nya dibuang. Tak ada yang menetap, tak ada yang menyebar.</p>

            <p>Praktiknya mudah: klik-kanan sebuah file dan pilih membukanya di disposable VM, atau buka aplikasi langsung dalam DispVM untuk, misalnya, mengunjungi tautan yang kamu curigai. Qubes 4.3 bahkan menyiapkan disposable preloaded agar terbuka lebih cepat. Ini mengubah cara kamu menghadapi ketidakpastian: alih-alih menebak-nebak apakah sebuah file aman, kamu cukup membukanya di lingkungan yang memang dirancang untuk dikorbankan.</p>

            <div class="box warn">
              <div class="bx-title">▲ Catatan kejujuran</div>
              <p>DispVM melindungi sistem lainmu, tapi ia bukan jaminan anti-forensik sempurna, dan malware yang sangat canggih secara teori bisa mencoba menembus isolasi (sangat jarang). Tetap berpikir berlapis: DispVM untuk membuka, qube terpisah untuk hal sensitif, dan jangan pernah membawa file mencurigakan ke dom0.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buka sebuah dokumen biasa di disposable VM, lalu tutup dan amati bahwa qube-nya beserta isinya benar-benar lenyap. Bayangkan dokumen itu berbahaya — kini kamu punya cara aman menghadapinya.</p>`,
          takeaways:[
            "Disposable VM (DispVM) = qube sekali-pakai yang dihancurkan total setelah ditutup.",
            "Buka file/tautan mencurigakan di DispVM; malware ikut lenyap, tak menyebar ke sistem.",
            "Bukan jaminan anti-forensik mutlak; tetap berlapis dan jauhkan file mencurigakan dari dom0."
          ]
        },
        {
          id:"qubes-tor",
          title:"Menyambung ke TOR via Whonix Gateway",
          dur:"praktik",
          body:`
            <p class="lead">Di sinilah semua yang kita pelajari bertemu. Qubes terintegrasi dengan <strong>Whonix</strong> — pendekatan dua-VM yang kita gambarkan di diagram Bab TAILS — untuk memberi anonimitas TOR yang jauh lebih tahan bocor daripada sekadar menjalankan TOR Browser.</p>

            <p>Whonix di Qubes terdiri dari dua qube yang bekerja sama. <strong>sys-whonix</strong> adalah <em>gateway</em>: satu-satunya qube yang berbicara ke jaringan, dan ia memaksa <strong>seluruh</strong> trafik lewat TOR. <strong>anon-whonix</strong> adalah <em>workstation</em>: tempatmu menjalankan aplikasi, dan ia hanya boleh terhubung ke internet melalui gateway tadi. Keindahannya: workstation secara teknis tak pernah tahu alamat IP aslimu, karena ia tak punya akses langsung ke jaringan. Bahkan jika sebuah aplikasi di workstation mencoba "membocorkan" dengan menghubungi internet langsung, tak ada jalan keluar selain lewat TOR.</p>

            <p>Inilah yang menutup celah "kebocoran konfigurasi" yang kita bahas dulu: kesalahan setel di workstation tak bisa membuat trafik lolos ke luar TOR, karena pemisahan gateway/workstation memang dirancang untuk itu. Qubes 4.3 (dengan template Whonix 18) bahkan secara aktif mencegahmu mengubah netvm workstation ke jaringan biasa, justru untuk menghindari kebocoran IP yang tak sengaja.</p>

            <div class="box tip">
              <div class="bx-title">◇ Menyambung ke peta besar</div>
              <p>Bandingkan dengan Bab 1 (TOR Browser di OS biasa) dan Bab TAILS: di sini, anonimitas TOR berdiri di atas pondasi isolasi Qubes, dengan gateway terpisah sebagai penjaga gerbang. Ini bentuk paling tangguh dari yang sudah kamu pelajari.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> jalankan aplikasi di anon-whonix dan pastikan koneksinya lewat sys-whonix (TOR). Periksa bahwa workstation tak punya akses jaringan langsung — itu fitur, bukan bug.</p>`,
          takeaways:[
            "Whonix di Qubes = dua qube: sys-whonix (gateway, semua lewat TOR) + anon-whonix (workstation).",
            "Workstation tak punya akses jaringan langsung, jadi IP aslimu tak bisa bocor walau aplikasi mencoba.",
            "Pemisahan gateway/workstation menutup celah kebocoran konfigurasi; Qubes 4.3 mencegah ubah netvm ke clearnet."
          ]
        },
        {
          id:"qubes-whonix-sw",
          title:"Memasang Software di Whonix",
          dur:"praktik",
          body:`
            <p class="lead">Logika instalasi software di Whonix mengikuti aturan Qubes yang sudah kamu kenal — pasang di template, bukan di qube kerja — dengan satu kehati-hatian tambahan khas anonimitas.</p>

            <p>Software untuk lingkungan Whonix dipasang di <strong>template whonix-workstation</strong> (di Qubes 4.3, ini whonix-workstation-18). Begitu terpasang dan template di-restart, app qube Whonix-mu (seperti anon-whonix) akan mendapatkannya — sama persis dengan pola template yang kita bahas sebelumnya. Update pun sebaiknya dilakukan di template, dan karena ini Whonix, semua lalu lintas update otomatis lewat TOR.</p>

            <p>Kehati-hatian tambahannya bersifat OPSEC, bukan teknis: berhati-hatilah memasang software yang aneh atau tak tepercaya ke lingkungan anonim. Aplikasi bisa "membocorkan" identitasmu lewat cara halus — menghubungi server tertentu, meninggalkan jejak khas, atau membuat fingerprint unik. Prinsip dari Bab 1 tetap berlaku di sini: makin sedikit yang kamu ubah dari lingkungan standar, makin kecil kemungkinan kamu menonjol. Lingkungan anonim paling aman adalah yang tampak biasa-biasa saja, sama seperti pengguna Whonix lainnya.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian OPSEC</div>
              <p>Anonimitas teknis Whonix bisa dirusak oleh software yang kamu tambahkan sendiri. Tahan diri: instal hanya yang benar-benar perlu, dari sumber tepercaya, dan ingat bahwa setiap penambahan bisa membuatmu lebih mudah dibedakan.</p>
            </div>
          `,
          takeaways:[
            "Instal software Whonix di template whonix-workstation (di 4.3: whonix-workstation-18), lalu restart.",
            "Update di template; di Whonix semua lalu lintas otomatis lewat TOR.",
            "OPSEC: software asing bisa membocorkan/menonjolkanmu — instal seminimal mungkin, dari sumber tepercaya."
          ],
          quiz:{
            title:"Kuis Bab 11 — Qubes OS",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Filosofi inti Qubes OS adalah…",
               options:["Kecepatan maksimal","Keamanan lewat isolasi (compartmentalization)","Tanpa enkripsi","Satu lingkungan untuk semua"],
               answer:1,
               explain:"Tiap aktivitas hidup di qube terpisah; bila satu jebol, kerusakan terkotak."},
              {q:"Apa peran dom0?",
               options:["Browsing sehari-hari","Domain admin tanpa jaringan yang mengelola semua qube — dijaga sangat ketat","Menyimpan password","Menjalankan TOR"],
               answer:1,
               explain:"Kompromi dom0 = kompromi total, jadi ia tanpa jaringan dan tak boleh disentuh sembarangan."},
              {q:"Hubungan template dan app qube:",
               options:["Sama saja","App qube meminjam software dari template; instal di template lalu restart","Template untuk browsing","App qube menyimpan dom0"],
               answer:1,
               explain:"Sekali pasang di template, semua app qube yang memakainya mendapatkannya — tetap terisolasi."},
              {q:"Cara aman menangani file/lampiran mencurigakan di Qubes:",
               options:["Buka di dom0","Buka di disposable VM (DispVM) yang dihancurkan setelah ditutup","Kirim ke qube vault","Nonaktifkan isolasi"],
               answer:1,
               explain:"Malware di DispVM ikut lenyap saat qube dibuang; tak menyebar ke sistem."},
              {q:"Dalam Whonix di Qubes, sys-whonix berfungsi sebagai…",
               options:["Workstation aplikasi","Gateway yang memaksa semua trafik lewat TOR","Tempat menyimpan file","Template Fedora"],
               answer:1,
               explain:"anon-whonix (workstation) hanya bisa online lewat sys-whonix (gateway), sehingga IP asli tak bocor."},
              {q:"Kenapa workstation Whonix tak bisa membocorkan IP aslimu?",
               options:["Karena memakai VPN","Karena tak punya akses jaringan langsung — semua harus lewat gateway TOR","Karena dimatikan","Karena tak terenkripsi"],
               answer:1,
               explain:"Pemisahan gateway/workstation menutup celah kebocoran konfigurasi secara desain."}
            ]
          }
        }
      ]
    },

    /*__INSERT_NEW_CHAPTERS_HERE__*/
  ]
};

