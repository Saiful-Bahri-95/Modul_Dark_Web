/* Bab 4 — id: "labs"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"labs",
      title:"Praktik Lanjutan — Hands-On Labs",
      lectures:[
        {
          id:"lab-intro",
          title:"Cara Kerja Lab & Aturan Main",
          dur:"baca dulu · ± 6 menit",
          body:`
            <p class="lead">Sampai sini kamu sudah punya teorinya. Bab ini mengubah teori jadi keterampilan otot lewat 8 lab yang semuanya bisa kamu kerjakan sendiri, aman, dan legal. Tujuannya satu: saat kamu benar-benar berada di dark web, tanganmu sudah hafal apa yang harus dilakukan.</p>

            <h4>Yang kamu butuhkan</h4>
            <ul>
              <li>USB TAILS yang sudah kamu buat (Bab 2). Kalau belum, Lab 01 akan menuntunmu.</li>
              <li>Komputer yang bisa boot dari USB, plus idealnya <strong>perangkat kedua</strong> (HP/laptop) untuk membaca panduan sambil mengerjakan.</li>
              <li>Sebuah USB kedua kecil atau folder Persistent untuk menyimpan kunci & catatan latihan.</li>
              <li>Waktu tenang tanpa terburu-buru. OPSEC yang baik lahir dari kebiasaan, bukan kebut-kebutan.</li>
            </ul>

            <h4>Peta 8 lab</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Peta progres 8 lab">
                <defs><marker id="arl" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Dari fondasi menuju mahir</text>
                <g font-family="monospace" font-size="9">
                  <rect x="18" y="44" width="150" height="40" rx="8" fill="#15202b" stroke="#4fe0d0"/><text x="93" y="60" text-anchor="middle" fill="#4fe0d0">01 Bangun TAILS</text><text x="93" y="74" text-anchor="middle" fill="#9fb4c4">fondasi</text>
                  <rect x="190" y="44" width="150" height="40" rx="8" fill="#15202b" stroke="#4fe0d0"/><text x="265" y="60" text-anchor="middle" fill="#4fe0d0">02 Hardening + leak</text><text x="265" y="74" text-anchor="middle" fill="#9fb4c4">uji kebocoran</text>
                  <rect x="362" y="44" width="150" height="40" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="437" y="60" text-anchor="middle" fill="#6ad7ff">03 Onion sah</text><text x="437" y="74" text-anchor="middle" fill="#9fb4c4">verifikasi</text>
                  <rect x="534" y="44" width="168" height="40" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="618" y="60" text-anchor="middle" fill="#6ad7ff">04 PGP/GnuPG</text><text x="618" y="74" text-anchor="middle" fill="#9fb4c4">enkripsi pesan</text>
                  <rect x="18" y="110" width="150" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="93" y="126" text-anchor="middle" fill="#f5b748">05 OnionShare</text><text x="93" y="140" text-anchor="middle" fill="#9fb4c4">berbagi file</text>
                  <rect x="190" y="110" width="150" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="265" y="126" text-anchor="middle" fill="#f5b748">06 Host onion</text><text x="265" y="140" text-anchor="middle" fill="#9fb4c4">situs sendiri</text>
                  <rect x="362" y="110" width="150" height="40" rx="8" fill="#15202b" stroke="#fb7185"/><text x="437" y="126" text-anchor="middle" fill="#fb7185">07 Deteksi scam</text><text x="437" y="140" text-anchor="middle" fill="#9fb4c4">anti-phishing</text>
                  <rect x="534" y="110" width="168" height="40" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="618" y="126" text-anchor="middle" fill="#5fd98a">08 Threat model</text><text x="618" y="140" text-anchor="middle" fill="#9fb4c4">capstone</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="1.6" marker-end="url(#arl)">
                  <line x1="168" y1="64" x2="186" y2="64"/><line x1="340" y1="64" x2="358" y2="64"/><line x1="512" y1="64" x2="530" y2="64"/>
                  <line x1="168" y1="130" x2="186" y2="130"/><line x1="340" y1="130" x2="358" y2="130"/><line x1="512" y1="130" x2="530" y2="130"/>
                </g>
                <text x="360" y="186" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Kerjakan berurutan; tiap lab memakai keterampilan dari lab sebelumnya.</text>
              </svg>
              <figcaption>Urutan sengaja menanjak: fondasi → kebersihan → interaksi → membuat → bertahan → menyusun rencana.</figcaption>
            </figure>

            <h4>Aturan main</h4>
            <ul>
              <li><strong>Setiap lab punya kriteria keberhasilan.</strong> Jangan lanjut sebelum kriterianya terpenuhi — di dunia nyata, "kira-kira berhasil" sama dengan gagal.</li>
              <li><strong>Pakai data latihan, bukan identitas asli.</strong> Buat persona/akun khusus latihan; jangan campur dengan email/nama aslimu.</li>
              <li><strong>Berhenti dan pikir saat ragu.</strong> Refleks paling berharga di dark web adalah berani menutup tab ketika ada yang janggal.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Batas yang tidak kita lewati</div>
              <p>Semua lab di sini bersifat <strong>defensif dan legal</strong>: melindungi diri, memahami teknologi, menguji sistemmu sendiri. Modul ini tidak mengajarkan dan tidak memfasilitasi pembelian barang ilegal, akses konten terlarang, atau membobol sistem milik orang lain — itu melanggar hukum dan membahayakanmu. Keterampilan di bawah inilah yang membuatmu aman menjelajah, dan itu sudah cukup.</p>
            </div>
          `,
          takeaways:[
            "8 lab disusun menanjak: fondasi → kebersihan → interaksi → membuat → bertahan → rencana.",
            "Siapkan USB TAILS, komputer yang bisa boot USB, dan idealnya perangkat kedua untuk panduan.",
            "Tiap lab punya kriteria keberhasilan; jangan lanjut sebelum terpenuhi.",
            "Semua lab defensif & legal; pakai persona latihan, bukan identitas asli."
          ]
        },
        {
          id:"lab-tails-build",
          title:"Lab 01 — Membangun & Memverifikasi USB TAILS",
          dur:"lab · 45–60 mnt",
          body:`
            <p class="lead">Fondasi dari segalanya. Di lab ini kamu membangun lingkungan kerja amnesik yang akan dipakai di semua lab berikutnya — dan, yang sama penting, membuktikan bahwa ia <em>asli</em> dan <em>berfungsi</em>.</p>

            <h4>Tujuan</h4>
            <p>Memiliki USB TAILS yang terverifikasi keasliannya, bisa boot, tersambung ke TOR, dan punya Persistent Storage terenkripsi.</p>

            <h4>Langkah (ringkasan dari Bab 2, sebagai checklist)</h4>
            <ol class="steps">
              <li><strong>Unduh USB image TAILS</strong> dari <code>tails.net/install</code> (jalur "Install from Windows").</li>
              <li><strong>Verifikasi keaslian</strong> lewat halaman Verify di situs TAILS, atau OpenPGP via Gpg4win/Kleopatra. Jangan lanjut bila gagal.</li>
              <li><strong>Flash ke USB</strong> (≥ 8 GB) memakai <strong>balenaEtcher</strong>. Periksa target agar tidak salah pilih disk.</li>
              <li><strong>Boot dari USB</strong> lewat Boot Menu (Esc/F12/F9/F2 tergantung merek) atau Windows → Advanced startup → Use a device.</li>
              <li><strong>Sambungkan ke TOR</strong> di asisten Tor Connection, lalu buka <code>check.torproject.org</code> untuk konfirmasi.</li>
              <li><strong>Aktifkan Persistent Storage</strong> dengan passphrase kuat; nyalakan fitur Personal Data &amp; GnuPG.</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Lab ini selesai bila: (1) verifikasi image dinyatakan cocok, (2) TAILS boot sampai desktop, (3) <code>check.torproject.org</code> menyatakan kamu di TOR, dan (4) sebuah file uji yang kamu simpan di folder Persistent masih ada setelah reboot.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Masalah umum & solusi</div>
              <p>USB tak muncul di boot menu → matikan Fast Startup, nonaktifkan Secure Boot sementara, coba port USB lain. Pesan Windows "drive perlu diformat" setelah flash → klik Cancel (itu normal). TAILS gagal boot acak → kemungkinan USB berkualitas rendah; ganti USB yang lebih baik.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar konfirmasi <strong>check.torproject.org</strong> ("Congratulations...") dan jendela Persistent Storage yang aktif.</p>
              <p><span class="ir-key">Cari: "check.torproject.org congratulations", "tails persistent storage enabled"</span></p>
            </div>
          `,
          practice:`<p>Selesaikan keempat kriteria keberhasilan. Sebagai bukti pribadi, catat (di folder Persistent): tanggal pembuatan, versi TAILS, dan hasil cek TOR. Reboot sekali lagi untuk memastikan file catatan itu bertahan — ini membuktikan Persistent Storage-mu benar-benar berfungsi.</p>`,
          takeaways:[
            "Bangun USB TAILS: unduh image → verifikasi → flash (balenaEtcher) → boot → sambung TOR → aktifkan Persistent.",
            "Verifikasi keaslian adalah langkah yang tidak boleh dilewati.",
            "Kriteria sukses: image cocok, boot ke desktop, check.torproject.org OK, file Persistent bertahan setelah reboot.",
            "Masalah boot biasanya: Fast Startup/Secure Boot/port USB atau USB berkualitas rendah."
          ]
        },
        {
          id:"lab-harden",
          title:"Lab 02 — Hardening & Uji Kebocoran (Leak Testing)",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">USB sudah jadi; sekarang kita "kencangkan baut"-nya dan buktikan tidak ada yang bocor. Uji kebocoran mengubah keyakinan "harusnya aman" menjadi "terbukti aman".</p>

            <h4>Bagian A — Hardening</h4>
            <ul>
              <li><strong>Atur Security Level</strong> di Tor Browser (ikon perisai) ke <strong>Safer</strong> (atau Safest bila risikomu tinggi). Ingat trade-off dari Bab 1.</li>
              <li><strong>Jangan personalisasi</strong>: biarkan ukuran jendela default, tanpa add-on, tanpa font tambahan — supaya entropi fingerprint tetap rendah.</li>
              <li><strong>Pahami MAC address.</strong> TAILS secara default mengacak (spoof) MAC address kartu jaringanmu agar perangkatmu tidak dikenali di jaringan lokal. Biarkan fitur ini aktif (ada opsinya di Greeter).</li>
            </ul>

            <h4>Bagian B — Uji kebocoran</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga uji kebocoran">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tiga hal yang diuji</text>
                <g font-family="monospace" font-size="10">
                  <rect x="30" y="48" width="200" height="74" rx="10" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="130" y="74" text-anchor="middle" fill="#4fe0d0" font-weight="700">IP / lokasi</text>
                  <text x="130" y="94" text-anchor="middle" fill="#9fb4c4">apakah IP yang terlihat</text>
                  <text x="130" y="108" text-anchor="middle" fill="#9fb4c4">= IP exit TOR?</text>
                  <rect x="260" y="48" width="200" height="74" rx="10" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="74" text-anchor="middle" fill="#6ad7ff" font-weight="700">DNS</text>
                  <text x="360" y="94" text-anchor="middle" fill="#9fb4c4">apakah kueri DNS</text>
                  <text x="360" y="108" text-anchor="middle" fill="#9fb4c4">bocor ke luar TOR?</text>
                  <rect x="490" y="48" width="200" height="74" rx="10" fill="#15202b" stroke="#f5b748"/>
                  <text x="590" y="74" text-anchor="middle" fill="#f5b748" font-weight="700">Fingerprint</text>
                  <text x="590" y="94" text-anchor="middle" fill="#9fb4c4">seberapa unik</text>
                  <text x="590" y="108" text-anchor="middle" fill="#9fb4c4">browser-mu?</text>
                </g>
                <text x="360" y="148" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Di TAILS, ketiganya seharusnya "bersih" karena semua trafik dipaksa lewat TOR.</text>
              </svg>
              <figcaption>Tiga sudut uji: IP/lokasi, DNS, dan keunikan fingerprint.</figcaption>
            </figure>
            <ol class="steps">
              <li><strong>IP &amp; lokasi:</strong> buka <code>check.torproject.org</code> dan sebuah situs cek IP (mis. <code>ipleak.net</code>). IP yang muncul harus IP exit node TOR, bukan IP rumahmu. Bandingkan dengan IP aslimu di Windows (sebelum TAILS) untuk membuktikan bedanya.</li>
              <li><strong>DNS:</strong> di halaman seperti <code>ipleak.net</code>, perhatikan server DNS yang terdeteksi — seharusnya tidak menunjuk ke ISP rumahmu. Di TAILS, DNS pun dipaksa lewat TOR.</li>
              <li><strong>Fingerprint:</strong> buka <code>coveryourtracks.eff.org</code> dan jalankan tes. Perhatikan Tor Browser tampil "generik". Bandingkan dengan hasil browser biasamu untuk melihat kontrasnya.</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>(1) check.torproject.org positif; (2) IP &amp; DNS yang terdeteksi bukan milik ISP/rumahmu; (3) hasil fingerprint Tor Browser jelas lebih generik daripada browser biasamu. Catat ketiga hasil di folder Persistent.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Kenapa "tidak bocor" itu wajar di TAILS</div>
              <p>Di Windows + VPN, kebocoran DNS/IP adalah momok nyata. Di TAILS, seluruh sistem dipaksa lewat TOR sejak tingkat OS, jadi uji ini umumnya lolos otomatis. Tujuan lab ini bukan menemukan masalah, tapi melatihmu <em>cara menguji</em> — keterampilan yang berlaku untuk setup apa pun nanti.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Hasil <strong>ipleak.net</strong> di Tor Browser (menampilkan IP exit node) dan skor <strong>Cover Your Tracks</strong>.</p>
              <p><span class="ir-key">Cari: "ipleak.net tor browser result", "eff cover your tracks score"</span></p>
            </div>
          `,
          practice:`<p>Lakukan ketiga uji di dalam TAILS dan catat hasilnya. Sebagai pembanding yang menohok, jalankan uji IP &amp; fingerprint yang sama di browser biasa di Windows-mu, lalu tempelkan kedua hasil berdampingan di catatanmu. Melihat kontras "telanjang vs terlindungi" secara langsung jauh lebih membekas daripada sekadar membaca teori.</p>`,
          takeaways:[
            "Hardening: set Security Level (Safer), jangan personalisasi, biarkan MAC spoofing TAILS aktif.",
            "Uji tiga hal: IP/lokasi, DNS, dan fingerprint — semuanya harus 'bersih' di TAILS.",
            "Kriteria sukses: IP/DNS bukan milik ISP rumah, dan fingerprint Tor Browser jauh lebih generik.",
            "Tujuan utama: menguasai CARA menguji kebocoran, keterampilan yang berlaku untuk setup mana pun."
          ]
        },
        {
          id:"lab-legit-onion",
          title:"Lab 03 — Mengunjungi Onion Service Sah dengan Aman",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">Sekarang kita masuk ke wilayah .onion sungguhan — tapi ke layanan yang sah dan tepercaya, supaya kamu melatih refleks verifikasi tanpa risiko. Inilah "latihan terbang" sebelum penerbangan sesungguhnya.</p>

            <h4>Tujuan</h4>
            <p>Mengunjungi beberapa onion service sah, memverifikasi alamatnya dari sumber resmi, dan menyimpannya sebagai bookmark terverifikasi.</p>

            <h4>Target latihan (semua legal)</h4>
            <ul>
              <li><strong>DuckDuckGo</strong> — punya versi .onion resmi untuk pencarian privat.</li>
              <li><strong>Tor Project</strong> — situs resminya tersedia sebagai onion service.</li>
              <li><strong>Sebuah media besar</strong> — banyak (mis. BBC, ProPublica) menyediakan .onion atau kotak SecureDrop untuk pembaca/sumber.</li>
            </ul>

            <h4>Langkah</h4>
            <ol class="steps">
              <li>Di clear web (boleh dari komputer biasa), buka situs <strong>resmi</strong> organisasinya dan temukan alamat .onion yang mereka cantumkan. Ini "sumber kebenaran"-mu.</li>
              <li>Di Tor Browser (idealnya dalam TAILS), buka alamat .onion tersebut. Atau, buka situs clear web-nya di Tor Browser dan klik tombol <strong>Onion-Location</strong> (".onion available") bila muncul.</li>
              <li><strong>Cocokkan alamat</strong> di address bar dengan sumber resmi — karakter demi karakter, bukan cuma awalan.</li>
              <li>Setelah cocok, <strong>bookmark</strong> dan simpan (di TAILS: Persistent) agar tak perlu mencari ulang.</li>
              <li>Klik ikon gembok untuk melihat circuit; perhatikan untuk .onion tidak ada exit node (sesuai Bab 3).</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Kamu berhasil membuka minimal dua onion service sah, memverifikasi alamatnya dari sumber resmi, dan menyimpannya sebagai bookmark. Bonus: kamu bisa menjelaskan kenapa circuit .onion berbeda dari situs biasa.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Tetap waspada walau "sah"</div>
              <p>Justru karena layanan populer, banyak tiruannya. Jangan ambil alamat .onion dari hasil pencarian acak atau forum — selalu dari situs resmi organisasi atau Onion-Location. Latih kebiasaan ini sekarang, saat taruhannya nol.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tor Browser membuka <strong>DuckDuckGo .onion</strong> dengan address bar terlihat, dan tampilan circuit (klik gembok) untuk situs .onion.</p>
              <p><span class="ir-key">Cari: "duckduckgo onion address bar", "tor circuit onion service no exit"</span></p>
            </div>
          `,
          practice:`<p>Kunjungi dan verifikasi dua onion service sah, lalu bookmark. Untuk salah satunya, sengaja cari "alamat .onion"-nya lewat mesin pencari acak dan bandingkan dengan yang dari situs resmi — perhatikan apakah ada versi berbeda yang beredar. Latihan ini menanamkan refleks "sumber resmi dulu, baru percaya".</p>`,
          takeaways:[
            "Latih verifikasi di onion service sah (DuckDuckGo, Tor Project, media ber-SecureDrop) sebelum yang berisiko.",
            "Selalu ambil alamat dari situs resmi/Onion-Location, lalu cocokkan karakter demi karakter.",
            "Simpan bookmark terverifikasi (Persistent) agar tak mengetik ulang.",
            "Circuit .onion tidak punya exit node — bukti konsep Bab 3."
          ]
        },
        {
          id:"lab-pgp",
          title:"Lab 04 — Komunikasi Terenkripsi dengan PGP/GnuPG",
          dur:"lab · 45 mnt",
          body:`
            <p class="lead">PGP adalah "amplop tersegel" dunia digital: hanya penerima yang dituju bisa membukanya, dan kamu bisa membuktikan sebuah pesan benar darimu. Ini keterampilan inti komunikasi anonim — dan dasarnya akan kita pakai lagi di bab Enkripsi.</p>

            <h4>Konsep sepuluh detik: dua kunci</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cara kerja kunci publik dan privat PGP">
                <defs><marker id="arp" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Kunci publik mengunci, kunci privat membuka</text>
                <g font-family="monospace" font-size="10">
                  <rect x="20" y="50" width="140" height="44" rx="9" fill="#15202b" stroke="#34475a"/><text x="90" y="70" text-anchor="middle" fill="#e9f1f7">Pengirim</text><text x="90" y="85" text-anchor="middle" fill="#9fb4c4">tulis pesan</text>
                  <rect x="200" y="50" width="150" height="44" rx="9" fill="#15202b" stroke="#f5b748"/><text x="275" y="70" text-anchor="middle" fill="#f5b748">Kunci PUBLIK</text><text x="275" y="85" text-anchor="middle" fill="#9fb4c4">penerima → mengunci</text>
                  <rect x="390" y="50" width="150" height="44" rx="9" fill="#15202b" stroke="#fb7185"/><text x="465" y="70" text-anchor="middle" fill="#fb7185">Pesan terenkripsi</text><text x="465" y="85" text-anchor="middle" fill="#9fb4c4">aman di perjalanan</text>
                  <rect x="575" y="50" width="130" height="44" rx="9" fill="#15202b" stroke="#5fd98a"/><text x="640" y="70" text-anchor="middle" fill="#5fd98a">Kunci PRIVAT</text><text x="640" y="85" text-anchor="middle" fill="#9fb4c4">penerima → buka</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arp)">
                  <line x1="160" y1="72" x2="196" y2="72"/><line x1="350" y1="72" x2="386" y2="72"/><line x1="540" y1="72" x2="571" y2="72"/>
                </g>
                <text x="360" y="130" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10.5">Kunci PUBLIK dibagikan bebas (untuk mengunci pesan KEPADAmu).</text>
                <text x="360" y="150" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10.5">Kunci PRIVAT kamu rahasiakan mati-matian (untuk membuka).</text>
                <text x="360" y="174" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="10">Untuk tanda tangan: dibalik — privat menandatangani, publik memverifikasi.</text>
              </svg>
              <figcaption>Publik untuk mengunci & memverifikasi; privat untuk membuka & menandatangani. Jangan pernah bagikan kunci privat.</figcaption>
            </figure>

            <h4>Langkah (di TAILS pakai aplikasi Kleopatra/OpenPGP, atau di Windows pakai Gpg4win)</h4>
            <ol class="steps">
              <li><strong>Buat key pair.</strong> Buka pengelola kunci (Kleopatra di Windows/TAILS), pilih "New Key Pair", isi nama persona &amp; email <em>latihan</em> (bukan identitas asli), beri passphrase kuat pada kunci privat.</li>
              <li><strong>Ekspor kunci publik.</strong> Simpan kunci publikmu ke file <code>.asc</code> — ini yang kamu bagikan ke orang lain agar mereka bisa mengirim pesan terenkripsi kepadamu.</li>
              <li><strong>Lindungi kunci privat.</strong> Jangan pernah mengekspor/membagikan kunci privat. Di TAILS, simpan keyring di Persistent (fitur GnuPG) agar tidak hilang saat reboot.</li>
              <li><strong>Enkripsi pesan.</strong> Tulis pesan, enkripsikan memakai kunci publik penerima. Untuk latihan, enkripsikan ke kunci publikmu sendiri.</li>
              <li><strong>Dekripsi.</strong> Buka pesan terenkripsi dengan kunci privat + passphrase-mu. Berhasil terbaca = alur enkripsi-dekripsi sukses.</li>
              <li><strong>Tanda tangan &amp; verifikasi.</strong> Tandatangani sebuah teks dengan kunci privatmu, lalu verifikasi dengan kunci publik — ini membuktikan keaslian &amp; keutuhan pesan.</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Kamu bisa: membuat key pair, mengekspor kunci publik, mengenkripsi lalu mendekripsi sebuah pesan ke dirimu sendiri, dan menandatangani lalu memverifikasi sebuah teks. Simpan keyring di Persistent.</p>
            </div>

            <div class="box danger">
              <div class="bx-title">⚠ Kunci privat = identitasmu</div>
              <p>Siapa pun yang memegang kunci privat + passphrase-mu bisa menyamar jadi kamu dan membaca pesan untukmu. Lindungi keduanya seperti kunci brankas. Jangan pernah menempelkan kunci privat ke layanan online atau mengirimnya ke siapa pun.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Jendela <strong>Kleopatra</strong> saat "New Key Pair" dan saat menampilkan pesan terenkripsi/terverifikasi.</p>
              <p><span class="ir-key">Cari: "kleopatra new key pair", "kleopatra encrypt decrypt message"</span></p>
            </div>
          `,
          practice:`<p>Buat key pair latihan, lalu kirim "surat untuk dirimu sendiri": tulis pesan, enkripsi dengan kunci publikmu, tutup, buka kembali file terenkripsinya, dan dekripsi dengan kunci privat. Terakhir, tandatangani satu kalimat dan verifikasi. Bila keempatnya berhasil, kamu sudah menguasai siklus PGP penuh.</p>`,
          takeaways:[
            "PGP memakai dua kunci: publik (dibagikan, untuk mengunci pesan kepadamu) dan privat (rahasia, untuk membuka).",
            "Untuk tanda tangan: privat menandatangani, publik memverifikasi keaslian & keutuhan.",
            "Alur lab: buat key pair → ekspor publik → enkripsi → dekripsi → sign → verify; simpan keyring di Persistent.",
            "Kunci privat + passphrase = identitasmu; jangan pernah dibagikan atau diunggah."
          ]
        },
        {
          id:"lab-onionshare",
          title:"Lab 05 — Berbagi File Anonim dengan OnionShare",
          dur:"lab · 25 mnt",
          body:`
            <p class="lead">OnionShare membiarkanmu berbagi file langsung dari komputermu lewat onion service sementara — tanpa cloud, tanpa perantara, tanpa mendaftar akun. Penerima cukup membuka alamat .onion yang kamu beri lewat Tor Browser.</p>

            <h4>Kenapa ini istimewa</h4>
            <p>Berbagi lewat layanan cloud biasa berarti mempercayai pihak ketiga yang menyimpan filemu dan mencatat siapa mengunduh apa. OnionShare menghapus perantara itu: file tetap di komputermu, dan koneksi terjadi langsung lewat jaringan TOR. Alamatnya bersifat sementara dan acak, sehingga hanya orang yang kamu beri alamat yang bisa mengaksesnya.</p>

            <h4>Tiga mode</h4>
            <ul>
              <li><strong>Share (kirim file)</strong> — bagikan satu/banyak file; bisa diatur agar berhenti otomatis setelah diunduh.</li>
              <li><strong>Receive (terima file)</strong> — buka "kotak masuk" agar orang lain bisa mengunggah file kepadamu dengan aman.</li>
              <li><strong>Chat</strong> — ruang obrolan anonim sementara, tanpa jejak tersimpan.</li>
            </ul>

            <h4>Langkah (OnionShare sudah tersedia di TAILS)</h4>
            <ol class="steps">
              <li>Buka <strong>OnionShare</strong> dari menu aplikasi (di TAILS sudah terpasang).</li>
              <li>Pilih mode <strong>Share</strong>, tambahkan sebuah file uji.</li>
              <li>Klik "Start sharing". OnionShare membuat alamat <code>.onion</code> sementara (dan biasanya kunci akses). Salin keduanya.</li>
              <li>Buka alamat itu di Tor Browser (boleh di perangkat lain) untuk mengetes unduhan, masukkan kunci akses bila diminta.</li>
              <li>Setelah selesai, hentikan berbagi. Alamatnya langsung mati — tidak ada jejak yang tertinggal di internet.</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Kamu berhasil membagikan sebuah file lewat OnionShare dan mengunduhnya kembali dari Tor Browser memakai alamat .onion + kunci akses, lalu menghentikan sesi sehingga alamatnya mati.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tetap pakai OPSEC</div>
              <p>OnionShare menganonimkan <em>jalur</em>-nya, tapi isi file tetap tanggung jawabmu. Bersihkan metadata file sebelum berbagi (dibahas di bab Manajemen File) dan jangan berbagi sesuatu yang menautkanmu ke identitas asli.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Jendela <strong>OnionShare</strong> mode Share yang menampilkan alamat .onion + kunci akses, dan tampilan unduhan di Tor Browser.</p>
              <p><span class="ir-key">Cari: "onionshare share files screenshot", "onionshare download tor browser"</span></p>
            </div>
          `,
          practice:`<p>Bagikan sebuah file uji (mis. dokumen teks kosong) lewat OnionShare, lalu unduh kembali dari Tor Browser memakai alamat + kunci. Coba juga mode Receive: buka kotak masuk dan unggah sebuah file ke dirimu sendiri. Hentikan kedua sesi dan pastikan alamatnya tidak lagi bisa dibuka.</p>`,
          takeaways:[
            "OnionShare berbagi file langsung lewat onion service sementara — tanpa cloud/akun/perantara.",
            "Tiga mode: Share (kirim), Receive (terima), Chat (obrolan sementara).",
            "Alamat .onion + kunci akses bersifat sementara; setelah dihentikan, jejaknya hilang.",
            "Jalur dianonimkan, tapi bersihkan metadata & jangan berbagi yang menautkan ke identitas asli."
          ]
        },
        {
          id:"lab-host-onion",
          title:"Lab 06 — Menjalankan Onion Service-mu Sendiri",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">Cara terbaik memahami dark web adalah membangun sepotong kecilnya sendiri. Di lab ini kamu menjalankan onion service-mu sendiri — pengalaman yang membuat konsep "alamat dari kunci kripto" dan "tanpa exit node" terasa nyata di tanganmu.</p>

            <h4>Jalur mudah: OnionShare mode Website</h4>
            <p>OnionShare bisa menyajikan folder berisi halaman web statis sebagai onion service — tanpa perlu menyentuh file konfigurasi. Ini cara tercepat dan teraman untuk pemula.</p>
            <ol class="steps">
              <li>Buat folder berisi sebuah file <code>index.html</code> sederhana (cukup teks "Halo dari onion service-ku").</li>
              <li>Buka OnionShare, pilih mode <strong>Website</strong>, tambahkan folder itu.</li>
              <li>Start. OnionShare memberi alamat <code>.onion</code>. Buka alamat itu di Tor Browser — halamanmu kini hidup di dalam jaringan TOR.</li>
              <li>Perhatikan: alamatnya diturunkan dari kunci yang dibuat OnionShare, dan koneksinya tak melewati exit node. Persis konsep Bab 3.</li>
            </ol>

            <h4>Jalur lanjutan: konfigurasi Tor manual (konsep)</h4>
            <p>Onion service "permanen" dibuat dengan mengatur Tor langsung lewat berkas konfigurasi <code>torrc</code>: kamu menentukan sebuah <em>HiddenServiceDir</em> dan port. Tor lalu menghasilkan pasangan kunci dan alamat <code>.onion</code> di folder itu. Karena ini butuh server yang selalu menyala dan pengelolaan kunci yang hati-hati, di lab ini cukup pahami konsepnya; OnionShare sudah cukup untuk membuktikan prinsipnya.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cara onion service dipublikasikan">
                <defs><marker id="arh" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <g font-family="monospace" font-size="10.5">
                  <rect x="20" y="52" width="160" height="46" rx="9" fill="#15202b" stroke="#5fd98a"/><text x="100" y="72" text-anchor="middle" fill="#5fd98a" font-weight="700">Servermu</text><text x="100" y="88" text-anchor="middle" fill="#9fb4c4">buat pasangan kunci</text>
                  <rect x="230" y="52" width="200" height="46" rx="9" fill="#15202b" stroke="#4fe0d0"/><text x="330" y="72" text-anchor="middle" fill="#4fe0d0" font-weight="700">Alamat .onion lahir</text><text x="330" y="88" text-anchor="middle" fill="#9fb4c4">diturunkan dari kunci</text>
                  <rect x="480" y="52" width="220" height="46" rx="9" fill="#15202b" stroke="#6ad7ff"/><text x="590" y="72" text-anchor="middle" fill="#6ad7ff" font-weight="700">Pengunjung via TOR</text><text x="590" y="88" text-anchor="middle" fill="#9fb4c4">bertemu di rendezvous</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arh)"><line x1="180" y1="75" x2="226" y2="75"/><line x1="430" y1="75" x2="476" y2="75"/></g>
                <text x="360" y="128" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Alamat = sidik jari kunci → tidak bisa dipalsukan tanpa kunci privatnya.</text>
              </svg>
              <figcaption>Server membuat kunci, alamat .onion lahir dari kunci itu, pengunjung bertemu di dalam TOR.</figcaption>
            </figure>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Halaman web statismu bisa dibuka lewat alamat .onion di Tor Browser, dan kamu bisa menjelaskan dari mana alamat itu berasal serta kenapa tak ada exit node.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Tanggung jawab sebagai operator</div>
              <p>Menjalankan onion service legal, tapi kamu bertanggung jawab atas isinya. Jangan menyajikan konten ilegal. Untuk latihan, cukup halaman "hello world". Jaga kunci privat onion service-mu seperti kunci lainnya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>OnionShare mode <strong>Website</strong> menampilkan alamat .onion, dan halaman statismu terbuka di Tor Browser.</p>
              <p><span class="ir-key">Cari: "onionshare website mode", "tor hidden service torrc HiddenServiceDir"</span></p>
            </div>
          `,
          practice:`<p>Buat <code>index.html</code> sederhana, sajikan lewat OnionShare mode Website, lalu buka alamat .onion-nya di Tor Browser (idealnya dari perangkat lain). Setelah berhasil, tulis dengan kata-katamu sendiri: "alamat .onion saya berasal dari ___, dan koneksi pengunjung tidak melewati ___." Mengisi titik-titik itu membuktikan kamu paham, bukan sekadar mengikuti langkah.</p>`,
          takeaways:[
            "Jalur mudah menjalankan onion service: OnionShare mode Website (tanpa konfigurasi manual).",
            "Jalur lanjutan: atur Tor lewat torrc (HiddenServiceDir + port) — pahami konsepnya.",
            "Alamat .onion lahir dari pasangan kunci server, jadi tak bisa dipalsukan tanpa kunci privat.",
            "Operator bertanggung jawab atas isi; untuk latihan cukup halaman sederhana, dan jaga kuncinya."
          ]
        },
        {
          id:"lab-scam",
          title:"Lab 07 — Mendeteksi Penipuan, Kloning & Phishing",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">Ancaman terbesar bagi pengguna dark web biasa bukan polisi atau hacker canggih — melainkan <strong>penipu</strong>. Lab ini melatih mata dan nalurimu untuk mengenali jebakan sebelum kamu terperosok.</p>

            <h4>Drill 1 — Bandingkan alamat (anti-clone)</h4>
            <p>Ambil satu alamat .onion sah yang sudah kamu verifikasi. Buat tiga "tiruan" versimu sendiri dengan mengubah beberapa karakter di posisi berbeda (awal, tengah, akhir). Acak urutannya, lalu latih dirimu menemukan mana yang asli dengan mencocokkan ke sumber resmi — karakter demi karakter. Ulangi sampai cepat.</p>

            <h4>Drill 2 — Kenali tanda bahaya (red flags)</h4>
            <ul>
              <li><strong>Urgensi dibuat-buat:</strong> "mirror baru, login sekarang atau kehilangan akses".</li>
              <li><strong>Iming-iming tak masuk akal:</strong> "gandakan kripto-mu", "bonus pendaftaran".</li>
              <li><strong>Minta pembayaran/kredensial duluan</strong> sebelum kamu bisa memverifikasi apa pun.</li>
              <li><strong>Alamat dari sumber acak:</strong> komentar forum, iklan, hasil pencarian yang dipromosikan.</li>
              <li><strong>Tidak ada/lemahnya bukti keaslian:</strong> tidak ada pesan ber-tanda tangan PGP dari admin/operator resmi.</li>
            </ul>

            <h4>Drill 3 — Verifikasi pesan ber-tanda tangan PGP</h4>
            <p>Banyak operator/komunitas sah mengumumkan alamat resmi lewat pesan yang ditandatangani PGP. Pakai keterampilan Lab 04: ambil kunci publik resmi mereka (dari sumber tepercaya), lalu verifikasi pesan pengumuman. Tanda tangan valid = pesan benar dari pemegang kunci itu dan tidak diubah. Ini cara paling kuat memastikan "alamat resmi terbaru".</p>

            <div class="box danger">
              <div class="bx-title">⚠ Mitos "escrow pasti aman"</div>
              <p>Penipu sering menyalahgunakan istilah teknis (escrow, multisig, "terverifikasi") untuk membangun rasa percaya palsu. Jangan tertipu jargon. Tidak ada mekanisme yang membuatmu kebal; satu-satunya pelindung nyata adalah verifikasi dari sumber resmi + memisahkan identitas + tidak menaruh sesuatu yang tak sanggup kamu relakan.</p>
            </div>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Kamu bisa: (1) menemukan alamat asli di antara tiruan secara konsisten, (2) menyebut minimal 4 red flag dari ingatan, dan (3) memverifikasi sebuah pesan ber-tanda tangan PGP.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Contoh pesan pengumuman ber-<strong>tanda tangan PGP</strong> dan tampilan "Good signature" saat diverifikasi, plus contoh halaman phishing dengan red flag yang ditandai.</p>
              <p><span class="ir-key">Cari: "pgp signed message good signature", "darknet phishing red flags"</span></p>
            </div>
          `,
          practice:`<p>Lakukan ketiga drill. Untuk Drill 3, mintalah teman (atau buat sendiri di key pair latihan kedua) sebuah pesan ber-tanda tangan PGP, lalu verifikasi. Tulis "kartu contekan" pribadi berisi 5 red flag favoritmu dan tempel di dekat meja — refleks cepat mengenali jebakan jauh lebih berharga daripada hafalan teori.</p>`,
          takeaways:[
            "Ancaman terbesar pengguna biasa adalah penipu, bukan peretas canggih.",
            "Lawan clone dengan mencocokkan seluruh alamat ke sumber resmi; latih sampai cepat.",
            "Hafal red flag: urgensi, iming-iming, minta bayar/kredensial dulu, alamat dari sumber acak.",
            "Verifikasi pesan ber-tanda tangan PGP adalah cara terkuat memastikan keaslian; jangan tertipu jargon 'escrow/aman'."
          ]
        },
        {
          id:"lab-opsec",
          title:"Lab 08 — Threat Model & Rencana OPSEC Pribadi (Capstone)",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">Semua alat dan teknik tidak ada artinya tanpa rencana. Capstone ini menyatukan seluruh kursus menjadi satu dokumen pribadi: <strong>model ancaman</strong>-mu dan <strong>rencana OPSEC</strong> yang mengalir darinya. Inilah yang membuatmu "terjun dengan tenang", bukan asal nekat.</p>

            <h4>Apa itu threat model</h4>
            <p>Threat model adalah jawaban jujur atas empat pertanyaan: <strong>Apa yang kulindungi? Dari siapa? Seberapa mampu lawan itu? Apa konsekuensinya bila gagal?</strong> Jawabannya menentukan seberapa ketat OPSEC yang kamu butuhkan. Tidak ada "paling aman" universal — yang ada "cukup aman untuk ancaman yang kamu hadapi".</p>

            <figure class="fig">
              <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empat pertanyaan threat model">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Empat pertanyaan inti</text>
                <g font-family="monospace" font-size="11">
                  <rect x="40" y="44" width="290" height="70" rx="10" fill="#15202b" stroke="#4fe0d0"/><text x="185" y="74" text-anchor="middle" fill="#4fe0d0" font-weight="700">1. Apa yang dilindungi?</text><text x="185" y="94" text-anchor="middle" fill="#9fb4c4" font-size="9.5">aset: identitas, lokasi, data, kontak</text>
                  <rect x="390" y="44" width="290" height="70" rx="10" fill="#15202b" stroke="#6ad7ff"/><text x="535" y="74" text-anchor="middle" fill="#6ad7ff" font-weight="700">2. Dari siapa?</text><text x="535" y="94" text-anchor="middle" fill="#9fb4c4" font-size="9.5">lawan: penipu, ISP, peretas, dst</text>
                  <rect x="40" y="126" width="290" height="70" rx="10" fill="#15202b" stroke="#f5b748"/><text x="185" y="156" text-anchor="middle" fill="#f5b748" font-weight="700">3. Seberapa mampu lawan?</text><text x="185" y="176" text-anchor="middle" fill="#9fb4c4" font-size="9.5">kemampuan & sumber dayanya</text>
                  <rect x="390" y="126" width="290" height="70" rx="10" fill="#15202b" stroke="#fb7185"/><text x="535" y="156" text-anchor="middle" fill="#fb7185" font-weight="700">4. Konsekuensi bila gagal?</text><text x="535" y="176" text-anchor="middle" fill="#9fb4c4" font-size="9.5">seberapa besar dampaknya bagimu</text>
                </g>
              </svg>
              <figcaption>Jawaban keempatnya menentukan seberapa ketat OPSEC yang masuk akal untukmu.</figcaption>
            </figure>

            <h4>Susun rencana OPSEC-mu (template)</h4>
            <ol class="steps">
              <li><strong>Daftar aset.</strong> Tulis apa yang benar-benar harus terlindungi (mis. "identitas asli tidak boleh tertaut ke aktivitas riset X").</li>
              <li><strong>Daftar lawan &amp; kemampuannya.</strong> Realistis: bagi kebanyakan orang, ancaman teratas adalah penipu dan pelacakan komersial, bukan negara.</li>
              <li><strong>Petakan risiko → mitigasi.</strong> Untuk tiap risiko, tulis tindakan konkret: "akses hanya dari TAILS", "persona terpisah", "verifikasi alamat dari sumber resmi", "PGP untuk komunikasi sensitif".</li>
              <li><strong>Tetapkan aturan pribadi.</strong> Mis. "tidak pernah login akun asli di sesi anonim", "tidak buka dokumen unduhan saat online", "satu persona = satu tujuan".</li>
              <li><strong>Rencana pemulihan.</strong> Apa yang kamu lakukan bila USB hilang, passphrase bocor, atau kamu menduga tertipu. Menyiapkan ini sebelum panik = keputusan lebih baik.</li>
            </ol>

            <div class="box practice" style="margin-top:18px">
              <div class="bx-title">✔ Kriteria keberhasilan</div>
              <p>Kamu memiliki satu dokumen ringkas (disimpan di Persistent atau dienkripsi PGP) berisi: aset, lawan + kemampuan, tabel risiko→mitigasi, aturan pribadi, dan rencana pemulihan.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Dokumen hidup</div>
              <p>Threat model bukan sekali jadi. Tinjau ulang saat situasimu berubah (alat baru, kebutuhan baru, kesalahan yang kamu pelajari). OPSEC terbaik adalah kebiasaan yang terus diperbarui, bukan daftar yang dilupakan.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Contoh tabel <strong>threat model</strong> sederhana (kolom: aset, lawan, risiko, mitigasi) sebagai inspirasi format catatanmu.</p>
              <p><span class="ir-key">Cari: "threat model table example", "personal opsec plan template"</span></p>
            </div>
          `,
          practice:`<p>Tulis rencana OPSEC pribadimu memakai template di atas — minimal: 3 aset, 3 lawan beserta kemampuannya, tabel 5 baris risiko→mitigasi, 5 aturan pribadi, dan 3 skenario pemulihan. Simpan terenkripsi (PGP) atau di Persistent. Inilah hasil paling berharga dari seluruh kursus: peta keputusanmu sendiri.</p>`,
          takeaways:[
            "Threat model menjawab: apa yang dilindungi, dari siapa, seberapa mampu lawan, dan konsekuensi bila gagal.",
            "Tidak ada 'paling aman' universal — hanya 'cukup aman' untuk ancaman yang nyata bagimu.",
            "Rencana OPSEC: daftar aset → lawan → risiko/mitigasi → aturan pribadi → rencana pemulihan.",
            "Threat model adalah dokumen hidup; tinjau ulang saat situasimu berubah."
          ],
          quiz:{
            title:"Kuis Bab 4 — Hands-On Labs",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Apa kriteria membuktikan Persistent Storage berfungsi di Lab 01?",
               options:["TAILS bisa boot","File yang disimpan di folder Persistent masih ada setelah reboot","TOR tersambung","USB berkapasitas 8 GB"],
               answer:1,
               explain:"Bukti nyata: file di folder Persistent bertahan melewati reboot, sementara folder lain tetap amnesik."},
              {q:"Tujuan utama uji kebocoran (leak testing) di Lab 02 adalah…",
               options:["Mempercepat TOR","Membuktikan IP/DNS/fingerprint tidak membocorkanmu, dan melatih CARA menguji","Mengganti exit node","Menghapus RAM"],
               answer:1,
               explain:"Di TAILS uji ini umumnya lolos otomatis; nilainya adalah melatih keterampilan menguji yang berlaku untuk setup apa pun."},
              {q:"Saat mengunjungi onion service sah (Lab 03), dari mana sebaiknya kamu ambil alamatnya?",
               options:["Hasil pencarian acak","Komentar forum","Situs resmi organisasi / Onion-Location","Iklan di situs lain"],
               answer:2,
               explain:"Sumber resmi atau Onion-Location adalah jalur tepercaya; alamat dari sumber acak rawan tiruan."},
              {q:"Dalam PGP (Lab 04), kunci mana yang BOLEH kamu bagikan bebas?",
               options:["Kunci privat","Kunci publik","Passphrase","Keduanya"],
               answer:1,
               explain:"Kunci publik dibagikan agar orang bisa mengenkripsi pesan kepadamu; kunci privat & passphrase wajib dirahasiakan."},
              {q:"Apa keunggulan utama OnionShare (Lab 05) dibanding cloud biasa?",
               options:["Lebih cepat","Tanpa perantara/akun; file tetap di komputermu lewat onion service sementara","Gratis selamanya","Otomatis backup"],
               answer:1,
               explain:"OnionShare menghapus pihak ketiga: koneksi langsung lewat TOR dengan alamat .onion sementara yang mati setelah dihentikan."},
              {q:"Cara paling kuat memastikan 'alamat resmi terbaru' dari sebuah operator (Lab 07)?",
               options:["Percaya yang paling banyak dibagikan","Verifikasi pesan pengumuman ber-tanda tangan PGP","Pilih yang muncul pertama di pencarian","Tanya di forum"],
               answer:1,
               explain:"Tanda tangan PGP yang valid membuktikan pesan benar dari pemegang kunci dan tidak diubah — bukti keaslian terkuat."},
              {q:"Inti dari threat model (Lab 08) adalah…",
               options:["Memakai semua alat keamanan yang ada","Menentukan apa yang dilindungi, dari siapa, kemampuan lawan, dan konsekuensinya","Membeli VPN termahal","Menghafal semua perintah Linux"],
               answer:1,
               explain:"OPSEC yang tepat mengalir dari threat model: 'cukup aman' untuk ancaman nyata bagimu, bukan menumpuk alat tanpa arah."}
            ]
          }
        }
      ]
};
