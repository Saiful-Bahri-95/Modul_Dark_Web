/* Bab 1 — id: "tor" (rev: + materi deep-dive circuit/consensus)
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"tor",
      title:"The TOR Browser",
      lectures:[
        {
          id:"tor-what",
          title:"Apa Itu TOR Browser?",
          dur:"konsep · ± 8 menit",
          body:`
            <p class="lead">Bayangkan kamu mengirim surat, tapi tidak mau tukang pos, kantor pos, maupun si penerima tahu siapa pengirimnya dan dari mana asalnya. TOR melakukan persis itu untuk lalu lintas internetmu: ia memutus hubungan langsung antara "siapa kamu" dan "apa yang kamu buka".</p>

            <h4>Masalah nyata yang dipecahkan TOR</h4>
            <p>Setiap kali kamu membuka situs dengan browser biasa, ada banyak pihak yang diam-diam tahu aktivitasmu. <strong>ISP (provider internet)</strong> melihat setiap domain yang kamu kunjungi dan bisa menyimpannya berbulan-bulan. <strong>Pemilik WiFi</strong> (kantor, kampus, kafe) bisa mengintip trafik di jaringannya. Dan <strong>situs tujuan</strong> mencatat <em>alamat IP</em> kamu — deretan angka yang menunjukkan perkiraan lokasi dan bisa dipakai melacakmu lintas situs. IP itu seperti plat nomor kendaraan: tidak langsung menyebut namamu, tapi cukup untuk diikat ke identitasmu lewat catatan lain.</p>
            <p>Inti masalahnya: di internet biasa, ada satu garis lurus dari komputermu ke server tujuan. Siapa pun yang berdiri di sepanjang garis itu bisa melihat kedua ujungnya. TOR menghancurkan garis lurus tersebut.</p>

            <h4>Cara kerja: onion routing (perutean berlapis)</h4>
            <p>Nama TOR adalah singkatan dari <em>The Onion Router</em> — "bawang", karena trafikmu dibungkus berlapis-lapis enkripsi seperti kulit bawang. Alih-alih langsung ke tujuan, datamu dilewatkan melalui <strong>tiga komputer relawan (relay)</strong> yang dipilih acak dari ribuan relay di seluruh dunia:</p>

            <figure class="fig">
              <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram alur 3 relay TOR">
                <defs>
                  <marker id="ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker>
                </defs>
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="15" font-weight="700">Jalur trafik lewat 3 relay TOR</text>
                <!-- nodes -->
                <g font-family="monospace" font-size="12">
                  <rect x="12" y="70" width="96" height="54" rx="10" fill="#15202b" stroke="#34475a"/>
                  <text x="60" y="93" text-anchor="middle" fill="#e9f1f7" font-weight="700">Kamu</text>
                  <text x="60" y="111" text-anchor="middle" fill="#9fb4c4" font-size="10">perangkatmu</text>

                  <rect x="162" y="70" width="96" height="54" rx="10" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="210" y="92" text-anchor="middle" fill="#4fe0d0" font-weight="700">Guard</text>
                  <text x="210" y="110" text-anchor="middle" fill="#9fb4c4" font-size="10">relay masuk</text>

                  <rect x="312" y="70" width="96" height="54" rx="10" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="92" text-anchor="middle" fill="#6ad7ff" font-weight="700">Middle</text>
                  <text x="360" y="110" text-anchor="middle" fill="#9fb4c4" font-size="10">relay tengah</text>

                  <rect x="462" y="70" width="96" height="54" rx="10" fill="#15202b" stroke="#f5b748"/>
                  <text x="510" y="92" text-anchor="middle" fill="#f5b748" font-weight="700">Exit</text>
                  <text x="510" y="110" text-anchor="middle" fill="#9fb4c4" font-size="10">relay keluar</text>

                  <rect x="612" y="70" width="96" height="54" rx="10" fill="#15202b" stroke="#34475a"/>
                  <text x="660" y="93" text-anchor="middle" fill="#e9f1f7" font-weight="700">Situs</text>
                  <text x="660" y="111" text-anchor="middle" fill="#9fb4c4" font-size="10">tujuan</text>
                </g>
                <!-- arrows -->
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#ar)">
                  <line x1="110" y1="97" x2="158" y2="97"/>
                  <line x1="260" y1="97" x2="308" y2="97"/>
                  <line x1="410" y1="97" x2="458" y2="97"/>
                  <line x1="560" y1="97" x2="608" y2="97"/>
                </g>
                <!-- knows what -->
                <g font-family="monospace" font-size="10.5">
                  <text x="210" y="165" text-anchor="middle" fill="#5fd98a">tahu IP-mu</text>
                  <text x="210" y="181" text-anchor="middle" fill="#fb7185">TIDAK tahu tujuan</text>
                  <text x="360" y="165" text-anchor="middle" fill="#fb7185">tidak tahu IP</text>
                  <text x="360" y="181" text-anchor="middle" fill="#fb7185">tidak tahu tujuan</text>
                  <text x="510" y="165" text-anchor="middle" fill="#fb7185">TIDAK tahu IP-mu</text>
                  <text x="510" y="181" text-anchor="middle" fill="#5fd98a">tahu tujuan</text>
                </g>
                <rect x="120" y="214" width="480" height="58" rx="10" fill="rgba(79,224,208,0.06)" stroke="#283643"/>
                <text x="360" y="240" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="12" font-weight="700">Tidak ada satu relay pun yang tahu sumber DAN tujuan sekaligus.</text>
                <text x="360" y="259" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11">Itulah inti anonimitas TOR.</text>
              </svg>
              <figcaption>Trafikmu melompati tiga relay acak. Tiap relay hanya tahu "dari mana barusan" dan "ke mana berikutnya".</figcaption>
            </figure>

            <p>Yang penting dipahami: tiap relay hanya bisa mengupas <strong>satu lapis</strong> enkripsi — cukup untuk tahu ke mana harus meneruskan, tidak lebih. Guard tahu IP aslimu tapi buta soal tujuan akhirmu. Exit tahu situs tujuan tapi buta soal IP-mu. Middle berfungsi sebagai penyekat supaya Guard dan Exit tidak pernah "berkenalan" langsung. Karena tidak ada satu titik pun yang memegang gambaran utuh, tidak ada yang bisa berkata "si A membuka situs B".</p>
            <p>TOR juga mengganti jalur (disebut <em>circuit</em>) secara berkala — kira-kira tiap 10 menit untuk koneksi baru — dan bahkan memakai jalur berbeda untuk situs yang berbeda. Jadi pola aktivitasmu tidak menumpuk pada satu rute yang gampang diawasi.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kenapa pakai TOR Browser, bukan sekadar "jaringan TOR"?</div>
              <p>TOR Browser adalah Firefox yang sudah dimodifikasi dan dikeraskan: ia otomatis menyalurkan semua trafik lewat jaringan TOR, mematikan fitur yang membocorkan identitas, dan dibuat agar semua penggunanya terlihat seragam. Kamu tidak perlu menyetel apa pun untuk langsung anonim — cukup buka dan klik Connect.</p>
            </div>

            <h4>Yang DILINDUNGI vs yang TIDAK</h4>
            <p>Ini bagian yang paling sering disalahpahami. TOR menyembunyikan <strong>alamat IP dan jejak lokasimu</strong> dari situs dan dari pengintai jaringan. Tapi TOR <strong>bukan jubah ajaib</strong>:</p>
            <ul>
              <li>Kalau kamu <strong>login</strong> ke akun aslimu (email, media sosial, marketplace) lewat TOR, kamu sendiri yang membongkar identitasmu — TOR tetap anonim, tapi kamu sudah menempelkan nama pada sesi itu.</li>
              <li><strong>Exit node bisa membaca trafik yang tidak terenkripsi.</strong> Kalau situs masih HTTP polos (bukan HTTPS), relay keluar bisa melihat isinya. Maka utamakan situs HTTPS, dan untuk layanan <code>.onion</code> enkripsi berlapis tetap terjaga sampai ke tujuan.</li>
              <li>TOR tidak melindungimu dari <strong>kebiasaan</strong> yang khas: gaya menulis, jam aktif, file yang kamu unduh lalu buka saat online.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Tema yang akan terus berulang: OPSEC</div>
              <p>Anonimitas bukan soal alat, tapi soal <strong>perilaku (OPSEC — operational security)</strong>. Browser tercanggih sekalipun gagal kalau kebiasaanmu membongkar dirimu. Tanam pola pikir ini sejak sekarang: alat menutup celah teknis, kamu yang menutup celah manusia.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar halaman <strong>"How Tor Works"</strong> di situs resmi yang menampilkan ilustrasi 3 relay, untuk membandingkan dengan diagram di atas.</p>
              <p><span class="ir-key">Cari: "tor project how tor works diagram"</span> — sumber resmi: support.torproject.org.</p>
            </div>
          `,
          practice:`<p>Buka <code>torproject.org</code> di browser biasamu, masuk ke halaman "About". Tuliskan dengan kata-katamu sendiri tiga jenis orang yang memakai TOR untuk alasan sah (mis. jurnalis melindungi sumber, aktivis di negara tersensor, korban kekerasan menghindari pelacak, peneliti keamanan). Tujuannya: meyakinkan dirimu bahwa anonimitas adalah kebutuhan wajar, bukan tindakan mencurigakan.</p>`,
          takeaways:[
            "TOR memutus garis lurus antara kamu dan situs tujuan dengan melewatkan trafik lewat 3 relay acak.",
            "Guard tahu IP-mu tapi bukan tujuan; Exit tahu tujuan tapi bukan IP-mu; Middle menjaga keduanya tak saling kenal.",
            "TOR menyembunyikan IP & lokasi, tapi tidak menutup perilaku yang membongkar identitas (login, HTTP polos, kebiasaan).",
            "TOR Browser = Firefox yang dikeraskan & otomatis lewat TOR; tujuannya membuat semua pengguna tampak seragam."
          ]
        },
        {
          id:"tor-install",
          title:"Verifikasi & Instalasi TOR Browser (Panduan Windows)",
          dur:"praktik · ± 15 menit",
          body:`
            <p class="lead">Mengunduh TOR itu gampang. Yang menentukan aman atau tidaknya adalah <strong>memverifikasi keaslian file</strong> sebelum dipasang. Installer palsu yang disisipi malware adalah cara klasik membobol anonimitas seseorang sejak langkah pertama — jadi kita lakukan dengan benar.</p>

            <h4>Langkah 1 — Unduh dari sumber yang benar</h4>
            <p>Selalu unduh <strong>hanya</strong> dari <code>torproject.org</code>. Jangan dari hasil iklan di mesin pencari, situs "download gratis", APK dari mana-mana, atau tautan kiriman orang. Di halaman unduh, pilih versi <strong>Windows</strong>; kamu akan mendapat file seperti <code>tor-browser-windows-x86_64-portable-XX.x.exe</code>. Di sebelahnya ada tautan kecil bertuliskan <strong>"signature"</strong> — unduh juga file itu (berakhiran <code>.asc</code>). File <code>.asc</code> inilah "segel keaslian" yang akan kita cek.</p>

            <div class="box warn">
              <div class="bx-title">▲ Saat Windows menampilkan peringatan</div>
              <p>Windows SmartScreen atau antivirus kadang menandai installer TOR karena belum "populer" menurut mereka — ini <em>false positive</em> yang umum, bukan tanda virus. Selama file berasal dari torproject.org <strong>dan lolos verifikasi tanda tangan di Langkah 3</strong>, file itu sah. Kalau antivirus mengkarantina, kembalikan (restore) dari karantina, jangan dari sumber lain.</p>
            </div>

            <h4>Langkah 2 — Kenapa wajib verifikasi?</h4>
            <p>Penyerang atau penyensor bisa membuat situs tiruan yang mirip torproject.org dan menyajikan installer yang sudah "ditrojan" (disisipi pengintai). Dari luar file-nya tampak normal. Verifikasi tanda tangan digital memastikan file yang kamu pegang <strong>persis sama</strong> dengan yang dirilis Tor Project — bukan versi yang sudah diutak-atik. Anggap ini seperti memeriksa hologram dan segel pada kemasan obat sebelum diminum.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur verifikasi tanda tangan TOR">
                <defs>
                  <marker id="ar2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6ad7ff"/></marker>
                </defs>
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="15" font-weight="700">Alur memverifikasi installer</text>
                <g font-family="monospace" font-size="11">
                  <rect x="14" y="56" width="150" height="60" rx="10" fill="#15202b" stroke="#34475a"/>
                  <text x="89" y="80" text-anchor="middle" fill="#e9f1f7" font-weight="700">1. Unduh</text>
                  <text x="89" y="98" text-anchor="middle" fill="#9fb4c4">.exe + .asc</text>

                  <rect x="200" y="56" width="150" height="60" rx="10" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="275" y="80" text-anchor="middle" fill="#4fe0d0" font-weight="700">2. Impor kunci</text>
                  <text x="275" y="98" text-anchor="middle" fill="#9fb4c4">Tor Browser Devs</text>

                  <rect x="386" y="56" width="150" height="60" rx="10" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="461" y="80" text-anchor="middle" fill="#6ad7ff" font-weight="700">3. Verifikasi</text>
                  <text x="461" y="98" text-anchor="middle" fill="#9fb4c4">Kleopatra / gpg</text>

                  <rect x="556" y="56" width="150" height="60" rx="10" fill="#15202b" stroke="#5fd98a"/>
                  <text x="631" y="80" text-anchor="middle" fill="#5fd98a" font-weight="700">4. "Good</text>
                  <text x="631" y="98" text-anchor="middle" fill="#5fd98a" font-weight="700">signature"</text>
                </g>
                <g stroke="#6ad7ff" stroke-width="2" marker-end="url(#ar2)">
                  <line x1="166" y1="86" x2="196" y2="86"/>
                  <line x1="352" y1="86" x2="382" y2="86"/>
                  <line x1="538" y1="86" x2="552" y2="86"/>
                </g>
                <rect x="120" y="150" width="480" height="64" rx="10" fill="rgba(95,217,138,0.06)" stroke="#283643"/>
                <text x="360" y="176" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">Hasil "Good signature" = file ASLI, aman dipasang.</text>
                <text x="360" y="196" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11">Hasil "BAD signature" = JANGAN dipasang, unduh ulang dari sumber resmi.</text>
              </svg>
              <figcaption>Empat langkah verifikasi. Kuncinya: cocokkan installer dengan tanda tangan resmi Tor Project.</figcaption>
            </figure>

            <h4>Langkah 3 — Verifikasi di Windows dengan Gpg4win (Kleopatra)</h4>
            <p>Windows tidak punya alat GPG bawaan, jadi kita pasang <strong>Gpg4win</strong> — paket gratis berisi aplikasi <strong>Kleopatra</strong> (antarmuka klik-klik, tanpa harus hafal perintah).</p>
            <ol class="steps">
              <li>Unduh dan pasang <strong>Gpg4win</strong> dari <code>gpg4win.org</code>. Saat instalasi, pastikan komponen <strong>Kleopatra</strong> ikut tercentang.</li>
              <li>Ambil kunci penandatangan resmi. Tor menandatangani rilisnya dengan kunci "<strong>Tor Browser Developers</strong>". Cara termudah: di halaman dokumentasi resmi "Verifying signatures", ada perintah/berkas untuk mengimpor kunci dengan <em>fingerprint</em> <code>EF6E286DDA85EA2A4BA7DE684E2C6E8793298290</code>. Buka Kleopatra → menu <em>Lookup on Server</em> / impor berkas kunci tersebut.</li>
              <li>Letakkan installer <code>.exe</code> dan berkas <code>.asc</code> di <strong>folder yang sama</strong> (mis. folder Downloads).</li>
              <li>Di Kleopatra pilih menu <strong>"Decrypt/Verify"</strong>, lalu arahkan ke berkas <code>.asc</code>. Kleopatra otomatis mencari installer di sebelahnya dan mencocokkannya.</li>
              <li>Lihat hasilnya. Jika muncul keterangan tanda tangan sah dari "Tor Browser Developers" (setara <em>"Good signature"</em>), berarti installer asli. Jika gagal/merah, <strong>hapus file itu</strong> dan ulangi unduhan dari torproject.org.</li>
            </ol>
            <p>Catatan: pertama kali, kunci itu mungkin ditandai "belum tepercaya" (untrusted) — itu wajar dan tidak masalah; yang kita butuhkan adalah konfirmasi bahwa <em>tanda tangannya cocok</em> dengan kunci milik Tor, bukan status "trust" pribadimu. Karena perintah persis bisa berubah antar versi, selalu samakan dengan halaman resmi "Verifying signatures".</p>

            <h4>Langkah 4 — Memasang & menjalankan pertama kali</h4>
            <ol class="steps">
              <li>Jalankan installer yang sudah lolos verifikasi. Pilih bahasa, lalu pilih folder. TOR Browser bersifat <strong>portable</strong> — bisa ditaruh di folder mana saja, bahkan di flash drive USB.</li>
              <li>Buka TOR Browser. Akan muncul pilihan <strong>"Connect"</strong> (sambung langsung) atau <strong>"Configure Connection"</strong> (atur dulu, untuk yang jaringannya memblokir TOR — dibahas di materi bridge).</li>
              <li>Klik <strong>Connect</strong>. Setelah beberapa detik, kamu sudah berada di jaringan TOR.</li>
              <li>Pastikan berhasil: buka <code>check.torproject.org</code>. Halaman itu akan mengonfirmasi "Congratulations. This browser is configured to use Tor."</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Biarkan TOR Browser <strong>auto-update</strong> dan jangan menunda pembaruannya. Update sering menambal celah keamanan yang, kalau dibiarkan, bisa membongkar anonimitas. Versi lama = risiko nyata, bukan sekadar "ketinggalan fitur".</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Dua tangkapan layar: (1) jendela <strong>Kleopatra</strong> yang menampilkan hasil verifikasi tanda tangan, dan (2) layar awal TOR Browser dengan tombol <strong>Connect / Configure Connection</strong>.</p>
              <p><span class="ir-key">Cari: "Kleopatra verify signature", "tor browser connect screen"</span></p>
            </div>
          `,
          practice:`<p>Latihan aman tanpa risiko apa pun: pasang Gpg4win, unduh TOR Browser <em>beserta</em> file .asc-nya, lalu lakukan verifikasi penuh di Kleopatra sampai kamu melihat konfirmasi tanda tangan sah. Target latihan ini bukan sekadar "berhasil install", tapi memahami <em>alur</em> verifikasi sehingga ke depan kamu otomatis melakukannya untuk perangkat lunak sensitif apa pun.</p>`,
          takeaways:[
            "Unduh TOR hanya dari torproject.org, sekaligus file tanda tangan .asc di sebelahnya.",
            "Di Windows, verifikasi pakai Gpg4win/Kleopatra: impor kunci 'Tor Browser Developers' lalu Decrypt/Verify berkas .asc.",
            "Hasil tanda tangan sah = file asli; gagal = hapus & unduh ulang. Peringatan SmartScreen/antivirus sering false positive.",
            "Setelah pasang, cek di check.torproject.org dan biarkan auto-update tetap aktif."
          ]
        },
        {
          id:"tor-bridges",
          title:"TOR Bridges & Pluggable Transports",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">Daftar relay TOR bersifat publik — siapa pun bisa mengunduhnya, termasuk penyensor yang lalu memblokir semuanya. <strong>Bridge</strong> adalah relay rahasia yang tidak terdaftar, dan <strong>pluggable transport</strong> menyamarkan trafik TOR agar tidak dikenali. Keduanya senjata utama untuk tetap terhubung di jaringan yang memblokir TOR.</p>

            <h4>Kenapa relay biasa bisa diblokir</h4>
            <p>Supaya TOR Browser bisa membangun jalur, ia perlu daftar relay yang tersedia. Daftar ini sengaja dibuat publik agar jaringan transparan dan tepercaya. Sisi buruknya: penyensor (mis. pemerintah atau admin jaringan ketat) bisa mengunduh daftar yang sama, lalu memblokir <strong>semua alamat IP relay</strong> sekaligus. Lebih canggih lagi, mereka memakai <strong>Deep Packet Inspection (DPI)</strong> — alat yang mengintip "bentuk" paket data dan mengenali pola khas trafik TOR, sehingga bisa memblokir berdasarkan pola, bukan cuma daftar IP.</p>

            <h4>Bridge — relay yang tak ada di daftar publik</h4>
            <p>Bridge pada dasarnya relay TOR juga, tapi alamatnya <em>tidak</em> dipublikasikan di direktori. Alamat bridge dibagikan lewat jalur privat (situs khusus, email, atau bot Telegram resmi). Karena penyensor tidak punya daftar lengkapnya, mereka kesulitan memblokir sesuatu yang tidak mereka ketahui. Analogi: kalau pintu depan (relay publik) dijaga, bridge adalah pintu samping yang alamatnya hanya diberitahukan ke orang yang membutuhkan.</p>

            <h4>Pluggable transport — menyamarkan "bentuk" trafik</h4>
            <p>Bridge saja belum cukup melawan DPI, karena polanya masih bisa terlihat seperti TOR. Di sinilah <strong>pluggable transport</strong> bekerja: ia mengubah tampilan trafik TOR agar menyerupai sesuatu yang lain. Di TOR Browser, program bernama <code>Lyrebird</code> menjalankan beberapa transport:</p>

            <figure class="fig">
              <svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perbandingan koneksi diblokir vs bridge tersamarkan">
                <defs>
                  <marker id="arb" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#9fb4c4"/></marker>
                </defs>
                <!-- row 1: blocked -->
                <text x="20" y="40" fill="#fb7185" font-family="monospace" font-size="12" font-weight="700">TANPA bridge (relay publik):</text>
                <g font-family="monospace" font-size="11">
                  <rect x="20" y="52" width="80" height="40" rx="8" fill="#15202b" stroke="#34475a"/>
                  <text x="60" y="76" text-anchor="middle" fill="#e9f1f7">Kamu</text>
                  <rect x="300" y="52" width="150" height="40" rx="8" fill="#15202b" stroke="#fb7185"/>
                  <text x="375" y="70" text-anchor="middle" fill="#fb7185">Tembok sensor (DPI)</text>
                  <text x="375" y="85" text-anchor="middle" fill="#fb7185" font-size="9">"ini trafik TOR!"</text>
                  <rect x="600" y="52" width="100" height="40" rx="8" fill="#15202b" stroke="#34475a"/>
                  <text x="650" y="76" text-anchor="middle" fill="#9fb4c4">Relay TOR</text>
                </g>
                <line x1="100" y1="72" x2="296" y2="72" stroke="#9fb4c4" stroke-width="2" marker-end="url(#arb)"/>
                <line x1="455" y1="60" x2="595" y2="84" stroke="#fb7185" stroke-width="2" stroke-dasharray="5 4"/>
                <text x="525" y="64" fill="#fb7185" font-family="monospace" font-size="16" font-weight="700">×</text>
                <!-- row 2: bridge+PT -->
                <text x="20" y="150" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">DENGAN bridge + pluggable transport:</text>
                <g font-family="monospace" font-size="11">
                  <rect x="20" y="162" width="80" height="40" rx="8" fill="#15202b" stroke="#34475a"/>
                  <text x="60" y="186" text-anchor="middle" fill="#e9f1f7">Kamu</text>
                  <rect x="300" y="162" width="150" height="40" rx="8" fill="#15202b" stroke="#fb7185"/>
                  <text x="375" y="180" text-anchor="middle" fill="#9fb4c4">Tembok sensor (DPI)</text>
                  <text x="375" y="195" text-anchor="middle" fill="#5fd98a" font-size="9">"cuma HTTPS biasa"</text>
                  <rect x="600" y="162" width="100" height="40" rx="8" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="650" y="186" text-anchor="middle" fill="#4fe0d0">Bridge</text>
                </g>
                <line x1="100" y1="182" x2="296" y2="182" stroke="#5fd98a" stroke-width="2" marker-end="url(#arb)"/>
                <line x1="455" y1="182" x2="596" y2="182" stroke="#5fd98a" stroke-width="2" marker-end="url(#arb)"/>
                <text x="375" y="232" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11">Trafik disamarkan → lolos pemeriksaan → tembus ke jaringan TOR</text>
              </svg>
              <figcaption>Relay publik gampang diblokir DPI. Bridge + pluggable transport membuat trafik tampak biasa sehingga lolos.</figcaption>
            </figure>

            <ul>
              <li><strong>obfs4</strong> — membuat trafik tampak seperti byte acak tanpa pola. Pilihan pertama yang umum dan cocok untuk kebanyakan situasi sensor ringan-menengah.</li>
              <li><strong>WebTunnel</strong> — menyembunyikan TOR di dalam koneksi HTTPS biasa sehingga benar-benar tampak seperti kunjungan ke situs web normal. Transport relatif baru (mulai 2024) dan sangat sulit dibedakan dari trafik harian.</li>
              <li><strong>Snowflake</strong> — merutekan lewat proxy relawan dan menyamar seperti panggilan video (WebRTC). Sulit diblokir tanpa ikut merusak layanan video call yang dipakai orang banyak.</li>
              <li><strong>meek</strong> — menumpang lewat CDN raksasa (teknik <em>domain fronting</em>) sehingga seakan kamu mengakses layanan cloud besar. Andal di sensor agresif, tapi cenderung lebih lambat.</li>
            </ul>

            <h4>Cara mendapatkan bridge</h4>
            <ul>
              <li><strong>Built-in</strong> — TOR Browser sudah menyertakan beberapa bridge bawaan; paling mudah untuk memulai.</li>
              <li><strong>bridges.torproject.org</strong> — minta alamat bridge baru bila yang bawaan sudah ikut diblokir.</li>
              <li><strong>Email/Telegram</strong> — bila situs Tor Project sendiri sudah diblokir di wilayahmu, minta bridge lewat bot email resmi (kirim email ke alamat bridge Tor) atau bot Telegram resmi.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Urutan mencoba yang masuk akal</div>
              <p>Mulai dari <strong>obfs4</strong>. Kalau gagal, coba <strong>WebTunnel</strong>. Kalau masih gagal (kemungkinan bridge bawaan sudah diblokir), minta bridge custom lewat web/email/Telegram, lalu coba <strong>Snowflake</strong> atau <strong>meek</strong> untuk sensor yang paling agresif.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar panel <strong>Settings → Connection → Bridges</strong> di TOR Browser, memperlihatkan opsi "Select a Built-In Bridge" beserta daftar transport (obfs4, snowflake, dst).</p>
              <p><span class="ir-key">Cari: "tor browser bridges settings obfs4 snowflake"</span></p>
            </div>
          `,
          practice:`<p>Di TOR Browser, buka <em>Settings → Connection</em> dan temukan bagian <strong>Bridges → Select a Built-In Bridge</strong>. Catat transport apa saja yang tersedia dan cocokkan dengan penjelasan di atas (obfs4, WebTunnel, Snowflake, meek). Kamu tidak perlu mengaktifkannya kalau memang tidak sedang disensor — tujuannya mengenali letak dan pilihannya sebelum benar-benar membutuhkannya.</p>`,
          takeaways:[
            "Relay publik bisa diblokir lewat daftar IP maupun DPI; bridge adalah relay tak terdaftar yang lebih sulit diblokir.",
            "Pluggable transport (obfs4, WebTunnel, Snowflake, meek) menyamarkan bentuk trafik agar lolos DPI; dijalankan oleh Lyrebird.",
            "obfs4 = titik awal; WebTunnel meniru HTTPS; Snowflake meniru video call; meek menumpang CDN besar.",
            "Dapatkan bridge dari built-in, bridges.torproject.org, atau bot email/Telegram resmi bila situsnya diblokir."
          ]
        },
        {
          id:"tor-censorship",
          title:"Melewati Sensor TOR (Bypassing Censorship)",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Di jaringan atau negara yang memblokir TOR, kamu tetap bisa terhubung memakai bridge + pluggable transport. TOR Browser punya alat bantu otomatis supaya kamu tidak perlu menebak-nebak konfigurasi.</p>

            <h4>Connection Assist — biarkan TOR mencoba sendiri dulu</h4>
            <p>Saat TOR Browser dijalankan, alih-alih langsung klik Connect, pilih <strong>"Configure Connection"</strong>. Fitur <em>Connection Assist</em> akan otomatis mencoba mencari konfigurasi bridge yang bekerja di wilayahmu berdasarkan lokasi terdeteksi. Sering kali ini sudah cukup tanpa kamu menyetel apa pun secara manual — coba ini lebih dulu sebelum repot.</p>

            <h4>Langkah manual: memilih built-in bridge</h4>
            <ol class="steps">
              <li>Buka <em>Settings → Connection</em> (atau "Configure Connection" di layar awal).</li>
              <li>Pada bagian <strong>Bridges</strong>, pilih <strong>"Select a Built-In Bridge"</strong>.</li>
              <li>Pilih transport, mulai dari <code>obfs4</code>, lalu klik <strong>Connect</strong>.</li>
            </ol>

            <h4>Bila built-in juga diblokir</h4>
            <p>Minta bridge baru lewat <code>bridges.torproject.org</code>. Kalau situs itu sendiri sudah tidak bisa dibuka, gunakan jalur cadangan: kirim email ke bot bridge resmi Tor (balasannya berisi alamat bridge), atau pakai bot Telegram resmi. Lalu tempel alamat yang kamu terima ke kolom <strong>"Add a Bridge Manually"</strong>.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pohon keputusan melewati sensor">
                <defs>
                  <marker id="arc" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker>
                </defs>
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">Urutan saat TOR diblokir</text>
                <g font-family="monospace" font-size="11">
                  <rect x="40" y="50" width="150" height="48" rx="9" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="115" y="71" text-anchor="middle" fill="#4fe0d0">Connection Assist</text>
                  <text x="115" y="87" text-anchor="middle" fill="#9fb4c4" font-size="9">otomatis</text>

                  <rect x="285" y="50" width="150" height="48" rx="9" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="71" text-anchor="middle" fill="#6ad7ff">obfs4 built-in</text>
                  <text x="360" y="87" text-anchor="middle" fill="#9fb4c4" font-size="9">manual</text>

                  <rect x="530" y="50" width="160" height="48" rx="9" fill="#15202b" stroke="#f5b748"/>
                  <text x="610" y="71" text-anchor="middle" fill="#f5b748">minta bridge baru</text>
                  <text x="610" y="87" text-anchor="middle" fill="#9fb4c4" font-size="9">web/email/Telegram</text>

                  <rect x="285" y="140" width="150" height="48" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="360" y="161" text-anchor="middle" fill="#fb7185">WebTunnel</text>
                  <text x="360" y="177" text-anchor="middle" fill="#9fb4c4" font-size="9">sensor menengah</text>

                  <rect x="530" y="140" width="160" height="48" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="610" y="161" text-anchor="middle" fill="#fb7185">Snowflake / meek</text>
                  <text x="610" y="177" text-anchor="middle" fill="#9fb4c4" font-size="9">sensor agresif</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arc)">
                  <line x1="190" y1="74" x2="281" y2="74"/>
                  <line x1="435" y1="74" x2="526" y2="74"/>
                  <line x1="360" y1="98" x2="360" y2="136"/>
                  <line x1="435" y1="164" x2="526" y2="164"/>
                </g>
              </svg>
              <figcaption>Naik bertahap: dari paling mudah/otomatis ke transport yang paling tahan sensor.</figcaption>
            </figure>

            <div class="box warn">
              <div class="bx-title">▲ Cocokkan dengan model ancaman</div>
              <p>Pilih transport sesuai tingkat sensor. Sensor ringan → obfs4 sudah cukup. Sensor tingkat negara dengan DPI canggih → pertimbangkan WebTunnel atau Snowflake yang jauh lebih sulit dibedakan dari trafik harian.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Wajar kalau terasa lebih lambat</div>
              <p>Memakai bridge biasanya membuat koneksi <strong>lebih lambat</strong> karena ada lapisan penyamaran tambahan. Itu konsekuensi normal — aktifkan bridge hanya saat memang diperlukan untuk menembus blokir, bukan sebagai default sehari-hari.</p>
            </div>
          `,
          practice:`<p>Skenario simulasi: bayangkan kamu berada di jaringan yang memblokir TOR. Tuliskan urutan langkah yang akan kamu coba secara berurutan (Connection Assist → obfs4 built-in → minta bridge lewat email → WebTunnel/Snowflake). Menyusun "rencana darurat" ini melatih pola pikir tenang dan sistematis saat menghadapi sensor sungguhan, alih-alih panik mencoba acak.</p>`,
          takeaways:[
            "Klik 'Configure Connection' dan coba Connection Assist lebih dulu — sering sudah cukup otomatis.",
            "Bila perlu manual: pilih built-in bridge (mulai obfs4) atau tempel bridge dari web/email/Telegram.",
            "Naikkan tingkat transport sesuai keganasan sensor; bridge memang membuat koneksi lebih lambat."
          ]
        },
        {
          id:"tor-vpn",
          title:"VPN & Mengombinasikannya dengan TOR",
          dur:"konsep · ± 12 menit",
          body:`
            <p class="lead">VPN (Virtual Private Network) mengenkripsi trafikmu dan menyembunyikan IP-mu dari ISP, lalu mengirimnya lewat server milik penyedia VPN. Menggabungkannya dengan TOR bisa menambah privasi dalam kasus tertentu — tapi hanya berguna kalau kamu paham <strong>trade-off</strong>-nya, bukan karena "dua lapis pasti lebih aman".</p>

            <h4>Apa itu VPN, sederhananya</h4>
            <p>VPN membuat "terowongan" terenkripsi antara perangkatmu dan server VPN. ISP-mu hanya melihat bahwa kamu terhubung ke server VPN — bukan situs apa yang kamu buka. Situs tujuan pun melihat IP server VPN, bukan IP aslimu. Terdengar seperti anonimitas, tapi ada satu pihak yang tahu segalanya: <strong>penyedia VPN itu sendiri</strong>.</p>

            <h4>VPN vs TOR — beda model kepercayaan</h4>
            <ul>
              <li><strong>VPN:</strong> cepat dan praktis, tapi satu perusahaan (penyedia VPN) <em>tahu</em> IP aslimu sekaligus apa yang kamu akses. Kamu harus <strong>percaya</strong> bahwa mereka jujur dan tidak menyimpan log. Bagus untuk privasi sehari-hari, bukan untuk anonimitas kuat.</li>
              <li><strong>TOR:</strong> lebih lambat, tapi terdesentralisasi — <em>tidak ada</em> satu pihak pun yang tahu sumber sekaligus tujuan. Anonimitasnya tidak bergantung pada kepercayaan ke satu perusahaan, melainkan pada desain 3-relay yang sudah kamu pelajari.</li>
            </ul>
            <p>Kunci perbedaannya satu kata: <strong>kepercayaan</strong>. VPN memindahkan kepercayaan ke satu titik; TOR menyebarkannya sehingga tidak ada titik tunggal yang bisa membongkarmu.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Siapa melihat apa pada VPN, TOR, dan Tor-over-VPN">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">Siapa melihat apa?</text>
                <g font-family="monospace" font-size="10.5">
                  <!-- headers -->
                  <text x="150" y="52" text-anchor="middle" fill="#9fb4c4">ISP melihat</text>
                  <text x="370" y="52" text-anchor="middle" fill="#9fb4c4">Pihak perantara tahu</text>
                  <text x="600" y="52" text-anchor="middle" fill="#9fb4c4">Situs melihat</text>

                  <!-- row VPN -->
                  <text x="20" y="86" fill="#6ad7ff" font-weight="700">VPN saja</text>
                  <rect x="90" y="70" width="120" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="150" y="91" text-anchor="middle" fill="#f5b748" font-size="9.5">"terhubung VPN"</text>
                  <rect x="300" y="70" width="140" height="34" rx="7" fill="#15202b" stroke="#fb7185"/>
                  <text x="370" y="91" text-anchor="middle" fill="#fb7185" font-size="9.5">VPN tahu IP + tujuan</text>
                  <rect x="530" y="70" width="140" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="600" y="91" text-anchor="middle" fill="#9fb4c4" font-size="9.5">IP server VPN</text>

                  <!-- row TOR -->
                  <text x="20" y="146" fill="#4fe0d0" font-weight="700">TOR saja</text>
                  <rect x="90" y="130" width="120" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="150" y="151" text-anchor="middle" fill="#f5b748" font-size="9.5">"memakai TOR"</text>
                  <rect x="300" y="130" width="140" height="34" rx="7" fill="#15202b" stroke="#5fd98a"/>
                  <text x="370" y="151" text-anchor="middle" fill="#5fd98a" font-size="9.5">tak ada yg tahu dua-duanya</text>
                  <rect x="530" y="130" width="140" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="600" y="151" text-anchor="middle" fill="#9fb4c4" font-size="9.5">IP exit node</text>

                  <!-- row Tor over VPN -->
                  <text x="20" y="206" fill="#f5b748" font-weight="700">Tor-over-VPN</text>
                  <rect x="90" y="190" width="120" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="150" y="211" text-anchor="middle" fill="#5fd98a" font-size="9.5">cuma "VPN"</text>
                  <rect x="300" y="190" width="140" height="34" rx="7" fill="#15202b" stroke="#f5b748"/>
                  <text x="370" y="206" text-anchor="middle" fill="#f5b748" font-size="9">VPN tahu kamu pakai TOR</text>
                  <text x="370" y="218" text-anchor="middle" fill="#9fb4c4" font-size="8.5">(bukan isinya)</text>
                  <rect x="530" y="190" width="140" height="34" rx="7" fill="#15202b" stroke="#34475a"/>
                  <text x="600" y="211" text-anchor="middle" fill="#9fb4c4" font-size="9.5">IP exit node</text>
                </g>
                <text x="360" y="262" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11">Tor-over-VPN menyembunyikan fakta "saya pakai TOR" dari ISP,</text>
                <text x="360" y="280" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11">dengan menukar sebagian kepercayaan ke penyedia VPN.</text>
              </svg>
              <figcaption>Bandingkan kolom "pihak perantara": di TOR tidak ada satu pun yang tahu sumber+tujuan; di VPN, ada.</figcaption>
            </figure>

            <h4>Dua cara mengombinasikan</h4>
            <ul>
              <li><strong>Tor-over-VPN</strong> (kamu → VPN → TOR): ini yang paling umum. ISP hanya melihat trafik VPN dan <em>tidak</em> tahu kamu memakai TOR. Berguna untuk menyembunyikan pemakaian TOR (di tempat di mana "memakai TOR" sendiri mencurigakan) atau saat TOR diblokir. Catatannya: penyedia VPN jadi tahu kamu memakai TOR — meski tetap tidak tahu isi aktivitasmu.</li>
              <li><strong>VPN-over-Tor</strong> (kamu → TOR → VPN): jauh lebih rumit, jarang diperlukan, dan bisa menimbulkan masalah anonimitas baru (mis. menautkan sesi ke akun VPN). Ini wilayah pengguna lanjutan dengan kebutuhan sangat spesifik — pemula sebaiknya tidak menyentuhnya.</li>
            </ul>

            <h4>Manfaat dan batasannya</h4>
            <p>Manfaat utama Tor-over-VPN: menyembunyikan fakta "saya memakai TOR" dari ISP, dan menambah satu lapis bila kamu khawatir guard node melihat IP aslimu. Tapi batas pentingnya: kamu <strong>memindahkan kepercayaan</strong> ke penyedia VPN. VPN yang diam-diam menyimpan log bisa menjadi titik bocor tunggal. Jika memilih memakai VPN, pilih penyedia bereputasi baik, berkebijakan tanpa-log yang teruji/diaudit, dan idealnya bisa dibayar dengan cara yang menjaga privasi.</p>

            <div class="box warn">
              <div class="bx-title">▲ VPN bukan jubah anonim ajaib</div>
              <p>"No-log policy" hanya sebaik kejujuran dan audit penyedianya — kamu tidak bisa memverifikasinya sendiri. Untuk anonimitas serius, <strong>TOR (atau nanti TAILS) tetap pondasi utamanya</strong>; VPN adalah pelengkap dalam skenario tertentu, bukan pengganti. Jangan tertukar: membeli VPN mahal tidak otomatis membuatmu anonim.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram perbandingan <strong>"VPN vs Tor"</strong> dan skema <strong>"Tor over VPN"</strong> untuk memperkuat pemahaman alur dan siapa-melihat-apa.</p>
              <p><span class="ir-key">Cari: "tor over vpn diagram", "vpn vs tor trust model"</span></p>
            </div>
          `,
          practice:`<p>Buat tabel sederhana di catatanmu dengan tiga kolom: "Yang dilihat ISP", "Yang diketahui perantara", "Yang dilihat situs tujuan". Isi untuk tiga skenario: (1) hanya VPN, (2) hanya TOR, (3) Tor-over-VPN. Mengisi tabel ini memaksamu benar-benar memahami <em>siapa-tahu-apa</em> di tiap model — keterampilan inti untuk menilai keamanan setiap alat baru yang kamu temui nanti.</p>`,
          takeaways:[
            "VPN menyembunyikan trafik dari ISP tapi menaruh kepercayaan penuh pada satu penyedia yang tahu IP + tujuanmu.",
            "TOR menyebar kepercayaan lewat 3 relay sehingga tak ada titik tunggal yang tahu sumber sekaligus tujuan.",
            "Tor-over-VPN menyembunyikan pemakaian TOR dari ISP; VPN-over-Tor rumit dan jarang perlu.",
            "VPN melengkapi, bukan menggantikan, anonimitas TOR; 'no-log' hanya sebaik audit penyedianya."
          ]
        },
        {
          id:"tor-config",
          title:"Mengonfigurasi TOR untuk Anonimitas Maksimum",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Anonimitas kuat lahir dari kombinasi <strong>setelan yang benar</strong> dan <strong>perilaku yang disiplin</strong>. Kabar baiknya, TOR Browser sudah aman secara default — tugasmu adalah tidak merusaknya, plus mengenal beberapa fitur kunci.</p>

            <h4>Fitur penting yang wajib kamu kenal</h4>
            <ul>
              <li><strong>New Identity</strong> — menutup semua tab, menghapus state sesi, dan membangun circuit baru. Pakai saat kamu ingin "mulai dari nol bersih", misalnya setelah selesai satu tugas dan akan mengerjakan hal lain yang tak boleh tertaut.</li>
              <li><strong>New Tor Circuit for this Site</strong> — mengganti jalur relay khusus untuk satu situs (mis. saat koneksi macet atau exit-nya bermasalah) tanpa mereset seluruh identitasmu.</li>
              <li><strong>Onion-Location</strong> — bila sebuah situs punya versi <code>.onion</code> resmi, TOR akan menawarkan untuk pindah ke sana. Versi .onion lebih aman karena trafik tetap di dalam jaringan TOR sampai tujuan — tanpa melewati exit node sama sekali.</li>
            </ul>

            <h4>Aturan perilaku (OPSEC) yang benar-benar menentukan</h4>
            <p>Ini bagian yang lebih sering menggagalkan orang daripada masalah teknis mana pun. Pegang teguh:</p>
            <ul>
              <li><strong>Jangan login</strong> ke akun apa pun yang terhubung ke identitas aslimu saat kamu ingin anonim. Sekali login, kamu menempelkan nama pada sesi tersebut.</li>
              <li><strong>Jangan memaksimalkan atau mengubah ukuran jendela.</strong> Ukuran layar yang unik bisa dipakai untuk <em>fingerprinting</em>. Biarkan ukuran bawaan TOR Browser apa adanya.</li>
              <li><strong>Jangan memasang add-on/extension tambahan.</strong> Setiap perubahan membuatmu makin unik dan makin mudah dikenali dari kerumunan.</li>
              <li><strong>Jangan membuka dokumen yang diunduh saat masih online</strong> (PDF, DOC, dsb). Dokumen bisa diam-diam memuat sumber dari luar — di luar TOR — dan membongkar IP aslimu. Putus internet dulu, atau buka di lingkungan terisolasi (nanti dibahas di TAILS/Qubes).</li>
              <li><strong>Hindari torrent lewat TOR.</strong> Klien torrent kerap mengirim IP aslimu langsung, mengabaikan TOR, sekaligus membebani jaringan relawan.</li>
              <li><strong>Utamakan HTTPS.</strong> Exit node bisa membaca trafik HTTP polos. Ikon gembok bukan hiasan.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Inti yang paling sering dilupakan</div>
              <p>TOR berusaha membuat semua penggunanya <strong>tampak identik</strong>, supaya kamu "tenggelam dalam kerumunan". Begitu kamu mempersonalisasi browser (resize, tambah add-on, ganti font), kamu justru menonjol dan jadi mudah dibedakan. Prinsipnya berlawanan dengan kebiasaan biasa: <strong>tampil sebiasa mungkin = lebih anonim</strong>.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar menu TOR Browser yang menampilkan opsi <strong>"New Identity"</strong> dan <strong>"New Tor Circuit for this Site"</strong>, serta tampilan indikator circuit (klik ikon gembok) yang memperlihatkan tiga relay.</p>
              <p><span class="ir-key">Cari: "tor browser new identity menu", "tor circuit display lock icon"</span></p>
            </div>
          `,
          practice:`<p>Buka menu TOR Browser, temukan "New Identity" dan "New Tor Circuit for this Site". Kunjungi sebuah situs, klik ikon gembok di address bar untuk melihat tiga relay yang sedang dipakai, lalu klik "New Tor Circuit" dan amati ketiganya berubah. Latihan ini menghubungkan konsep 3-relay dari materi pertama dengan apa yang benar-benar terjadi di layar — bikin teori jadi nyata.</p>`,
          takeaways:[
            "Kenali New Identity (reset bersih), New Circuit (ganti jalur 1 situs), dan Onion-Location (versi .onion lebih aman).",
            "Aturan emas: jangan login akun asli, jangan resize jendela, jangan tambah add-on.",
            "Jangan buka dokumen unduhan saat online, hindari torrent lewat TOR, dan selalu utamakan HTTPS.",
            "Tampil 'sama seperti semua orang' justru membuatmu paling sulit dilacak."
          ]
        },
        {
          id:"tor-deepdive",
          title:"Deep-Dive: Di Dalam Jaringan TOR — Consensus, Circuit & Cell",
          dur:"deep-dive · ± 18 menit",
          body:`
            <p class="lead">Sampai sini kamu sudah bisa <em>memakai</em> TOR. Materi ini membuka kap mesinnya: dari mana TOR tahu relay mana yang ada, bagaimana tiga lapis enkripsi benar-benar dibangun, dan kenapa keputusan desain tertentu (guard yang "lengket", sel berukuran seragam) justru melindungimu. Paham mekanisme ini membuatmu bisa menilai sendiri klaim keamanan — bukan sekadar percaya.</p>

            <h4>1. Consensus: peta jaringan yang diperbarui tiap jam</h4>
            <p>Jaringan TOR terdiri dari ±7.000 relay relawan yang datang dan pergi. Siapa yang menjaga daftarnya? Sembilan server khusus bernama <strong>directory authorities</strong> — dioperasikan organisasi berbeda di negara berbeda, alamatnya tertanam (hardcoded) di dalam TOR Browser. Tiap jam mereka <em>memungut suara</em> tentang kondisi setiap relay, lalu menerbitkan dokumen kesepakatan bernama <strong>consensus</strong> yang ditandatangani mayoritas authority. Klienmu mengunduh consensus ini dan dari situlah ia tahu relay mana yang hidup, berapa bandwidth-nya, dan <em>flag</em> apa yang disandangnya:</p>
            <ul>
              <li><code>Guard</code> — cukup stabil & cepat untuk dipercaya jadi relay masuk;</li>
              <li><code>Exit</code> — pemiliknya mengizinkan trafik keluar ke internet biasa;</li>
              <li><code>Fast</code> / <code>Stable</code> — memenuhi ambang bandwidth & uptime;</li>
              <li><code>HSDir</code> — ikut menyimpan "buku telepon" onion service.</li>
            </ul>
            <p>Karena consensus ditandatangani banyak pihak independen, penyerang tidak bisa menyodorkan "peta palsu" berisi relay jahat saja — ia harus membobol mayoritas authority sekaligus. Ini contoh prinsip yang akan sering kamu lihat lagi: <strong>jangan pernah bergantung pada satu titik kepercayaan</strong>.</p>

            <h4>2. Membangun circuit: teleskop yang memanjang</h4>
            <p>Saat kamu klik Connect, klienmu tidak langsung "menembak" tiga relay sekaligus. Circuit dibangun bertahap seperti <em>teleskop</em>:</p>
            <ol class="steps">
              <li>Klien membuka koneksi TLS ke <strong>Guard</strong>, lalu melakukan pertukaran kunci <em>ntor</em> (berbasis kurva eliptik Curve25519). Hasilnya: kunci rahasia bersama #1 yang bahkan Guard-nya sendiri tidak bisa pakai untuk membaca lapisan berikutnya.</li>
              <li>Lewat terowongan itu, klien berkata pada Guard: "sambungkan aku ke relay X" (perintah <code>EXTEND</code>). Klien lalu ber-handshake dengan <strong>Middle</strong> <em>melalui</em> Guard — Guard hanya meneruskan surat tertutup, tidak ikut tahu isinya. Hasil: kunci bersama #2.</li>
              <li>Proses diulang sekali lagi ke <strong>Exit</strong>. Hasil: kunci bersama #3.</li>
            </ol>
            <p>Kini klien memegang tiga kunci. Setiap data yang dikirim dienkripsi <strong>tiga kali bertumpuk</strong> (kunci #3 paling dalam, #1 paling luar). Guard mengupas lapis pertama, Middle lapis kedua, Exit lapis ketiga — persis metafora bawang di materi pertama, tapi sekarang kamu tahu kuncinya dari mana dan kenapa tidak ada relay yang bisa mengupas lebih dari jatahnya.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga lapis enkripsi onion">
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="15" font-weight="700">Tiga lapis kunci, dikupas satu per satu</text>
                <g font-family="monospace" font-size="11.5">
                  <rect x="40" y="60" width="200" height="110" rx="12" fill="rgba(79,224,208,0.08)" stroke="#4fe0d0"/>
                  <rect x="65" y="85" width="150" height="85" rx="10" fill="rgba(106,215,255,0.10)" stroke="#6ad7ff"/>
                  <rect x="90" y="110" width="100" height="60" rx="8" fill="rgba(245,183,72,0.12)" stroke="#f5b748"/>
                  <text x="140" y="143" text-anchor="middle" fill="#e9f1f7" font-size="10.5">DATA</text>
                  <text x="140" y="78" text-anchor="middle" fill="#4fe0d0">kunci #1 (Guard)</text>
                  <text x="140" y="102" text-anchor="middle" fill="#6ad7ff" font-size="10.5">kunci #2 (Middle)</text>
                  <text x="245" y="78" fill="#9fb4c4" font-size="10">←
 dikupas duluan</text>
                </g>
                <g font-family="monospace" font-size="11">
                  <text x="420" y="80" fill="#4fe0d0">Guard  → kupas lapis #1, lihat: "teruskan ke Middle"</text>
                  <text x="420" y="110" fill="#6ad7ff">Middle → kupas lapis #2, lihat: "teruskan ke Exit"</text>
                  <text x="420" y="140" fill="#f5b748">Exit   → kupas lapis #3, lihat: data + tujuan</text>
                  <text x="420" y="178" fill="#fb7185" font-size="10.5">Tidak ada yang memegang ketiga kunci sekaligus — kecuali kamu.</text>
                </g>
              </svg>
              <figcaption>Telescoping circuit: tiap kunci disepakati langsung antara kamu dan relay ybs., relay lain cuma jadi kurir surat tertutup.</figcaption>
            </figure>

            <h4>3. Cell: kenapa semua paket berukuran sama</h4>
            <p>Semua data di dalam TOR dipotong menjadi <strong>cell berukuran seragam (512 byte)</strong>. Email pendek, gambar besar, atau sekadar "ping" — semuanya tampak sebagai deretan kotak identik. Tujuannya melawan <em>traffic analysis</em>: pengamat di tengah jaringan tidak bisa menebak isi dari bentuk dan ukuran paket. Beberapa koneksi (stream) ke situs yang sama juga <em>dimultipleks</em> ke dalam satu circuit, jadi pola "satu permintaan = satu koneksi" ikut kabur.</p>
            <p>Pasangannya adalah <strong>stream isolation</strong>: situs yang <em>berbeda</em> sengaja dilewatkan circuit yang <em>berbeda</em>. TOR Browser memisahkan circuit per domain utama yang kamu kunjungi — itulah kenapa ikon gembok menunjukkan relay berbeda untuk situs berbeda. Tanpa ini, satu exit node yang jahat bisa menghubungkan seluruh aktivitas sesimu menjadi satu profil.</p>

            <h4>4. Kenapa Guard-mu "lengket" (dan itu bagus)</h4>
            <p>Mungkin kamu sudah memperhatikan di latihan sebelumnya: saat circuit berganti, <strong>relay pertama hampir selalu sama</strong>. Itu bukan bug. Klienmu memilih satu guard dan memakainya selama <strong>±3–4 bulan</strong>. Logikanya kontra-intuitif tapi kuat: jika kamu mengganti relay masuk terus-menerus, cepat atau lambat kamu <em>pasti</em> mampir ke relay jahat (jika ada). Dengan guard tetap, hasilnya biner — kalau guard-mu jujur, kamu aman berbulan-bulan; kalau sial dapat yang jahat, paparanmu tetap terbatas pada satu titik yang tidak tahu tujuanmu. Statistik sederhana: lebih baik melempar dadu sekali daripada seribu kali jika satu angka berarti celaka.</p>

            <h4>5. Hands-on: membaca log & mengenal torrc</h4>
            <p>Dua keterampilan kecil yang membuatmu tidak panik saat ada masalah:</p>
            <ol class="steps">
              <li><strong>Lihat log bootstrap.</strong> Buka <em>Settings → Connection</em> di TOR Browser, cari tombol <strong>"View Logs"</strong>. Koneksi sehat diakhiri baris <code>Bootstrapped 100% (done)</code>. Simpan kebiasaan ini: log adalah tempat pertama mencari jawaban.</li>
              <li><strong>Kenali file konfigurasi <code>torrc</code></strong> di folder instalasimu: <code>Tor Browser\\Browser\\TorBrowser\\Data\\Tor\\torrc</code>. Di sinilah pengaturan bridge tersimpan. Kamu juga bisa menambah baris seperti <code>ExcludeExitNodes {ru},{cn}</code> (hindari exit di negara tertentu).</li>
            </ol>
            <div class="box warn">
              <div class="bx-title">▲ Godaan yang sebaiknya ditolak</div>
              <p>Internet penuh tip seperti "kunci exit node ke negara X biar cepat" (<code>ExitNodes {xx} StrictNodes 1</code>). Ingat pelajaran teori informasi: <strong>setiap penyimpangan dari default membuatmu lebih unik</strong> dan menyempitkan kerumunan tempatmu bersembunyi. Ubah torrc hanya jika kamu paham persis konsekuensinya — default TOR Browser sudah hasil riset bertahun-tahun.</p>
            </div>

            <h4>6. Troubleshooting: TOR tidak mau connect</h4>
            <ul>
              <li><strong>Macet di "Loading network status" / persentase kecil</strong> → buka log. Kata kunci <code>Clock skew</code> berarti <strong>jam komputermu meleset</strong>; TOR menolak consensus yang "datang dari masa depan/masa lalu". Sinkronkan jam & zona waktu Windows, restart TOR.</li>
              <li><strong>Log menyebut <code>TLS error</code> / koneksi putus berulang</strong> → jaringanmu kemungkinan memblokir TOR. Aktifkan bridge (obfs4/WebTunnel) seperti di materi bridges.</li>
              <li><strong>Terhubung tapi sangat lambat</strong> → wajar: trafikmu mungkin memutari tiga benua. Coba "New Tor Circuit for this Site". Kalau semua situs lambat berhari-hari, jangan tergoda "optimasi" torrc — cukup sabar atau ganti waktu pakai.</li>
              <li><strong>Antivirus/firewall pihak ketiga</strong> sering memutus koneksi lokal TOR (proses <code>tor.exe</code> ↔ browser). Tambahkan pengecualian folder Tor Browser bila perlu.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Studi kasus nyata: "satu-satunya pengguna TOR di gedung"</div>
              <p>Tahun 2013 seorang mahasiswa Harvard mengirim ancaman bom palsu lewat email anonim yang diakses via TOR — dan tertangkap dalam hitungan hari. Bukan karena TOR-nya jebol: pihak kampus cukup memeriksa <strong>log WiFi kampus</strong> dan bertanya, "siapa yang terhubung ke jaringan TOR pada jam pengiriman email itu?" Jawabannya: praktis hanya dia. Pelajarannya fundamental: TOR menyembunyikan <em>apa yang kamu lakukan</em>, tapi <strong>fakta bahwa kamu memakai TOR</strong> tetap terlihat oleh operator jaringan — dan dalam kerumunan yang kecil, itu saja sudah cukup untuk menunjukmu. Anonimitas butuh kerumunan; di jaringan kecil, pengguna TOR satu-satunya justru paling mencolok. (Bridge mengurangi jejak ini, tapi pelajaran utamanya adalah soal <em>kapan dan dari mana</em> kamu terhubung.)</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Tangkapan layar <strong>View Logs</strong> dengan baris "Bootstrapped 100%". (2) Grafik jumlah relay di <strong>metrics.torproject.org</strong> sebagai bukti skala jaringan relawan.</p>
              <p><span class="ir-key">Cari: "tor browser connection logs bootstrapped", "tor metrics relays graph"</span></p>
            </div>
          `,
          practice:`<p>Tiga percobaan singkat untuk membumikan teori: (1) Buka tiga situs berbeda di TOR Browser, klik ikon gembok di masing-masing — catat ketiga relay-nya. Kamu akan melihat <strong>Guard selalu sama</strong> sementara Middle/Exit berganti: itulah guard pinning + stream isolation bekerja di depan matamu. (2) Buka <em>Settings → Connection → View Logs</em>, temukan baris <code>Bootstrapped 100%</code>. (3) Buka file <code>torrc</code> dengan Notepad (jangan ubah apa pun dulu) dan kenali baris-baris bridge jika kamu pernah mengaktifkannya.</p>`,
          takeaways:[
            "Consensus dari 9 directory authorities (diperbarui tiap jam) adalah 'peta resmi' relay — ditandatangani mayoritas, sulit dipalsukan.",
            "Circuit dibangun teleskopik: tiga handshake ntor menghasilkan tiga kunci; tiap relay hanya bisa mengupas satu lapis.",
            "Cell seragam 512 byte + stream isolation melawan traffic analysis dan mencegah satu exit memprofilkan seluruh sesimu.",
            "Guard sengaja 'lengket' berbulan-bulan — dan kasus Harvard 2013 membuktikan: yang membongkarmu sering kali bukan kriptografi, tapi konteks (siapa pakai TOR, di mana, kapan)."
          ]
        },
        {
          id:"tor-security",
          title:"Security Level & Pengantar Teori Informasi",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">TOR Browser punya tiga tingkat keamanan. Memahami <em>kenapa</em> tiap tingkat ada akan membawamu ke konsep paling penting dalam anonimitas: <strong>teori informasi</strong> — gagasan bahwa keunikan itu sendiri bisa membongkarmu.</p>

            <h4>Tiga tingkat keamanan (Security Level)</h4>
            <p>Klik ikon perisai di TOR Browser untuk mengatur ini:</p>
            <ul>
              <li><strong>Standard</strong> — semua fitur aktif (JavaScript penuh, dll). Paling nyaman dipakai, tapi permukaan serangannya paling luas.</li>
              <li><strong>Safer</strong> — JavaScript dimatikan di situs non-HTTPS, sebagian font dan media dibatasi. Keseimbangan yang wajar untuk kebanyakan orang.</li>
              <li><strong>Safest</strong> — JavaScript dimatikan di <em>semua</em> situs, banyak fitur dinonaktifkan. Paling aman, tapi banyak situs jadi "rusak"/terbatas. Cocok untuk situasi berisiko tinggi.</li>
            </ul>

            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trade-off tingkat keamanan TOR">
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">Trade-off Security Level</text>
                <rect x="60" y="70" width="180" height="56" rx="10" fill="#15202b" stroke="#5fd98a"/>
                <text x="150" y="95" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="13" font-weight="700">Standard</text>
                <text x="150" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">paling nyaman</text>
                <rect x="270" y="70" width="180" height="56" rx="10" fill="#15202b" stroke="#f5b748"/>
                <text x="360" y="95" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="13" font-weight="700">Safer</text>
                <text x="360" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">seimbang (disarankan)</text>
                <rect x="480" y="70" width="180" height="56" rx="10" fill="#15202b" stroke="#fb7185"/>
                <text x="570" y="95" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="13" font-weight="700">Safest</text>
                <text x="570" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">paling aman</text>
                <text x="60" y="158" fill="#9fb4c4" font-family="monospace" font-size="10.5">← lebih banyak fitur, lebih banyak risiko</text>
                <text x="660" y="158" text-anchor="end" fill="#9fb4c4" font-family="monospace" font-size="10.5">lebih sedikit fitur, lebih aman →</text>
                <text x="360" y="184" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="11">Makin aman → makin banyak situs tak berfungsi. Pilih sesuai model ancaman.</text>
              </svg>
              <figcaption>Tidak ada pilihan "terbaik" mutlak — yang ada pilihan yang pas dengan tingkat risikomu.</figcaption>
            </figure>

            <h4>Teori informasi: kenapa keunikan = bahaya</h4>
            <p>Teori informasi mempelajari berapa banyak "informasi" yang dibawa sebuah sinyal. Dalam anonimitas, tiap detail kecil tentang dirimu — bahasa browser, zona waktu, resolusi layar, daftar font terpasang, add-on, bahkan ritme mengetik — menambah sedikit demi sedikit <strong>"bit identitas"</strong>. Satu detail mungkin dimiliki jutaan orang. Tapi gabungan banyak detail unik bisa menyempit sampai hanya cocok dengan <em>satu</em> orang — kamu — meski namamu tidak pernah disebut. Teknik ini disebut <strong>browser fingerprinting</strong>.</p>
            <p>Analogi: "memakai kaus hitam" tidak membedakanmu dari kerumunan. Tapi "kaus hitam + tinggi 183 cm + logat tertentu + jam tangan langka + berjalan pincang" bisa langsung menunjuk satu orang. Tiap atribut menambah informasi yang mempersempit kemungkinan.</p>
            <p>Itulah sebabnya TOR Browser berusaha membuat semua pengguna <strong>terlihat identik</strong> — entropi (keacakan/keunikan) antar pengguna ditekan serendah mungkin: ukuran jendela diseragamkan, daftar font dibatasi, setelan default dibuat sama. Setiap kali kamu "mempersonalisasi", kamu menambah keunikan dan menurunkan anonimitasmu sendiri.</p>

            <h4>Serangan korelasi (correlation attack)</h4>
            <p>Ada batas teoretis yang jujur perlu kamu tahu: pengintai yang mampu mengamati trafik di <em>kedua</em> ujung — dekat kamu (mis. ISP-mu) dan dekat tujuan (mis. server yang diawasi) — bisa mencocokkan pola waktu dan volume data untuk menebak bahwa keduanya orang yang sama, walau isinya terenkripsi. TOR tidak mengklaim kebal terhadap lawan sekuat itu. Ini alasan tambahan untuk menghindari pola yang khas dan tidak mengandalkan satu alat saja untuk hal yang sangat berisiko.</p>

            <div class="box tip">
              <div class="bx-title">◇ Rekomendasi praktis</div>
              <p>Untuk kebanyakan orang, <strong>Safer</strong> adalah titik manis antara aman dan tetap bisa dipakai. Naik ke <strong>Safest</strong> bila risikomu tinggi. Apa pun pilihanmu: jangan mengubah ukuran jendela dan jangan menambah ekstensi — dua hal kecil itu paling sering merusak anonimitas tanpa disadari.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Panel <strong>Security Level</strong> (ikon perisai) di TOR Browser. (2) Hasil uji dari <strong>coveryourtracks.eff.org</strong> yang menunjukkan seberapa unik sebuah browser — bandingkan browser biasamu vs TOR Browser.</p>
              <p><span class="ir-key">Cari: "tor browser security level shield", "EFF cover your tracks fingerprint result"</span></p>
            </div>
          `,
          practice:`<p>Kunjungi situs uji fingerprint <code>coveryourtracks.eff.org</code> (EFF) memakai browser <em>biasamu</em>, catat seberapa "unik" hasilnya. Lalu buka situs yang sama lewat TOR Browser dan bandingkan. Kamu akan melihat sendiri betapa jauh lebih "generik" (sulit dibedakan) TOR Browser — ini bukti nyata konsep entropi yang baru kamu pelajari, bukan sekadar teori.</p>`,
          takeaways:[
            "Tiga tingkat: Standard, Safer, Safest — makin aman makin banyak fitur dimatikan; Safer cocok untuk kebanyakan orang.",
            "Tiap detail unik menambah 'bit identitas'; fingerprinting menggabungkannya untuk mengenalimu tanpa perlu nama.",
            "TOR menyeragamkan pengguna agar entropi antar-pengguna rendah; personalisasi justru menurunkan anonimitas.",
            "Correlation attack (mengamati dua ujung sekaligus) adalah batas teoretis TOR — hindari pola khas untuk hal berisiko."
          ],
          quiz:{
            title:"Kuis Bab 1 — TOR Browser",
            sub:"8 soal · pilih satu jawaban",
            questions:[
              {q:"Pada jaringan TOR, relay mana yang mengetahui alamat IP aslimu?",
               options:["Exit node","Middle node","Guard / Entry node","Semua node tahu"],
               answer:2,
               explain:"Guard/entry node adalah relay pertama dan satu-satunya yang melihat IP-mu — tapi ia tidak tahu tujuan akhirmu. Pemisahan inilah inti anonimitas TOR."},
              {q:"Mengapa file tanda tangan .asc penting saat mengunduh TOR Browser?",
               options:["Mempercepat unduhan","Memastikan installer tidak dimodifikasi/ditrojan","Mengaktifkan bridge otomatis","Membuat akun TOR"],
               answer:1,
               explain:"Verifikasi tanda tangan memastikan file persis seperti rilis resmi Tor Project, mencegah installer palsu berisi malware terpasang sejak awal."},
              {q:"Di Windows, alat apa yang dipakai untuk memverifikasi tanda tangan TOR Browser dengan mudah?",
               options:["Notepad","Gpg4win / Kleopatra","Task Manager","Windows Defender"],
               answer:1,
               explain:"Gpg4win menyediakan Kleopatra, antarmuka klik-klik untuk mengimpor kunci 'Tor Browser Developers' dan memverifikasi berkas .asc tanpa perlu menghafal perintah."},
              {q:"Apa fungsi utama pluggable transport seperti obfs4?",
               options:["Mempercepat koneksi TOR","Menyamarkan bentuk trafik TOR agar lolos DPI","Menyimpan riwayat browsing","Mengganti exit node otomatis"],
               answer:1,
               explain:"Pluggable transport mengubah 'bentuk' trafik TOR agar tidak dikenali sistem Deep Packet Inspection milik penyensor."},
              {q:"Transport mana yang menyembunyikan TOR di dalam koneksi HTTPS biasa dan termasuk paling baru?",
               options:["meek","obfs4","WebTunnel","Snowflake"],
               answer:2,
               explain:"WebTunnel (mulai 2024) membungkus trafik TOR dalam HTTPS sehingga tampak seperti kunjungan ke situs web normal — sangat sulit dibedakan dari trafik harian."},
              {q:"Pada skema Tor-over-VPN, apa yang dilihat ISP-mu?",
               options:["Bahwa kamu memakai TOR","Hanya bahwa kamu terhubung ke VPN","Situs tujuan yang kamu buka","IP exit node TOR"],
               answer:1,
               explain:"ISP hanya melihat koneksi ke server VPN; fakta bahwa kamu memakai TOR tersembunyi di dalam terowongan VPN. Namun penyedia VPN jadi tahu kamu memakai TOR."},
              {q:"Mengapa sebaiknya TIDAK memaksimalkan/me-resize jendela TOR Browser?",
               options:["Membuat TOR lambat","Boros baterai","Ukuran layar unik bisa dipakai untuk fingerprinting","Melanggar aturan jaringan TOR"],
               answer:2,
               explain:"Ukuran jendela yang unik menambah entropi identitas dan memudahkan fingerprinting. Biarkan ukuran default agar kamu tetap menyatu dengan kerumunan."},
              {q:"Inti konsep teori informasi dalam anonimitas adalah…",
               options:["Makin banyak data makin cepat internet","Tiap detail unik menambah bit identitas yang bisa membongkarmu","Enkripsi membuatmu kebal pelacakan","VPN selalu lebih baik daripada TOR"],
               answer:1,
               explain:"Semakin unik konfigurasimu, semakin sedikit orang yang 'mirip' kamu, sehingga makin mudah diidentifikasi secara unik walau tanpa nama."}
            ]
          }
        }
      ]
    };
