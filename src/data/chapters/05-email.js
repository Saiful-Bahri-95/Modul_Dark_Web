/* Bab 5 — id: "email"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"email",
      title:"Komunikasi Privat & Anonim — Email",
      lectures:[
        {
          id:"email-identity",
          title:"Membuat Identitas Anonim (Persona)",
          dur:"konsep · OPSEC · ± 9 menit",
          body:`
            <p class="lead">Sebelum membuat satu pun akun email, kamu perlu menyiapkan "wadah"-nya: sebuah <strong>persona</strong> — identitas pseudonim yang sengaja kamu pisahkan total dari dirimu yang asli. Email anonim yang dibuat dengan nama, foto, atau kebiasaan aslimu sama sekali tidak anonim.</p>

            <h4>Kenapa persona, bukan sekadar "nama samaran"</h4>
            <p>Anonimitas bocor bukan lewat satu kesalahan besar, melainkan lewat banyak remah kecil yang saling menautkan: email pemulihan yang sama, nomor HP yang sama, gaya menulis yang khas, foto profil yang pernah dipakai di akun asli, bahkan jam online yang konsisten. Persona yang baik adalah <strong>kompartemen tertutup</strong> — tidak ada satu pun benang yang bisa ditarik kembali ke identitas aslimu.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kompartementalisasi identitas asli vs persona">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tembok pemisah identitas</text>
                <rect x="30" y="44" width="290" height="150" rx="12" fill="#15202b" stroke="#fb7185"/>
                <text x="175" y="68" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="12" font-weight="700">Identitas ASLI</text>
                <g font-family="monospace" font-size="10" fill="#9fb4c4">
                  <text x="175" y="92" text-anchor="middle">nama asli, foto</text>
                  <text x="175" y="110" text-anchor="middle">email &amp; nomor HP utama</text>
                  <text x="175" y="128" text-anchor="middle">media sosial</text>
                  <text x="175" y="146" text-anchor="middle">lokasi &amp; kebiasaan</text>
                  <text x="175" y="164" text-anchor="middle">kartu/rekening</text>
                </g>
                <rect x="400" y="44" width="290" height="150" rx="12" fill="#15202b" stroke="#5fd98a"/>
                <text x="545" y="68" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">PERSONA anonim</text>
                <g font-family="monospace" font-size="10" fill="#9fb4c4">
                  <text x="545" y="92" text-anchor="middle">nama samaran baru</text>
                  <text x="545" y="110" text-anchor="middle">email khusus persona</text>
                  <text x="545" y="128" text-anchor="middle">kata sandi unik</text>
                  <text x="545" y="146" text-anchor="middle">tanpa data asli apa pun</text>
                  <text x="545" y="164" text-anchor="middle">dipakai via TOR/TAILS</text>
                </g>
                <line x1="360" y1="40" x2="360" y2="198" stroke="#f5b748" stroke-width="3" stroke-dasharray="6 5"/>
                <text x="360" y="214" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="10">Tidak ada satu pun data yang menyeberang tembok ini.</text>
              </svg>
              <figcaption>Persona adalah kompartemen tertutup: tak ada email, nomor, foto, atau kebiasaan yang menyeberang ke sisi asli.</figcaption>
            </figure>

            <h4>Aturan membangun persona</h4>
            <ul>
              <li><strong>Mulai dari nol.</strong> Nama, tanggal lahir, dan detail apa pun harus baru — jangan memakai variasi data aslimu (mis. nama panggilan + tahun lahir).</li>
              <li><strong>Tanpa penaut.</strong> Jangan pakai email/nomor HP aslimu sebagai pemulihan. Bila layanan butuh verifikasi, pikirkan cara yang tidak menautkanmu (mis. email persona lain).</li>
              <li><strong>Kata sandi unik.</strong> Setiap akun persona punya kata sandi berbeda dan kuat. Pakai pengelola sandi (KeePassXC) — jangan mengandalkan ingatan atau menyamakan dengan akun asli.</li>
              <li><strong>Satu persona = satu tujuan.</strong> Jangan mencampur aktivitas. Persona untuk riset A jangan dipakai untuk hal B; tautan antar-aktivitas adalah cara klasik terbongkar.</li>
              <li><strong>Jaga gaya menulis (stylometry).</strong> Cara mengetik, kosakata khas, emoji favorit, salam pembuka — semuanya bisa mencocokkanmu dengan tulisan di akun asli. Saat memakai persona, tulis sedikit berbeda dan sadar diri.</li>
              <li><strong>Selalu lewat TOR/TAILS.</strong> Akses persona hanya dari lingkungan anonim. Sekali saja login dari IP aslimu, kompartemen bisa bocor.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Satu remah cukup</div>
              <p>Penyidik dan pelacak tidak butuh kesalahan besar — satu nomor HP yang dipakai ulang, satu foto yang sama, satu kalimat khas, sudah cukup menautkan persona ke dirimu. Bangun temboknya dengan disiplin sejak awal, karena menambal kebocoran setelah terjadi nyaris mustahil.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram <strong>compartmentalization</strong> identitas (lingkaran "real" vs "persona" yang terpisah) dan ikon KeePassXC untuk pengelolaan sandi persona.</p>
              <p><span class="ir-key">Cari: "opsec identity compartmentalization diagram", "keepassxc password manager"</span></p>
            </div>
          `,
          practice:`<p>Rancang satu persona latihan di atas kertas (atau di KeePassXC): nama samaran, "kepribadian" singkat, dan daftar aturan pribadi untuknya (sandi unik, akses hanya via TOR/TAILS, tanpa data asli). Lalu uji dirimu: tuliskan tiga cara persona ini bisa tertaut ke identitas aslimu, dan bagaimana mencegah masing-masing. Latihan berpikir seperti "penyerang" inilah yang menutup celah.</p>`,
          takeaways:[
            "Email anonim hanya seaman persona di belakangnya; bangun identitas pseudonim yang terpisah total.",
            "Persona = kompartemen tertutup: tanpa email/nomor/foto/kebiasaan yang menyeberang ke identitas asli.",
            "Aturan: data baru dari nol, kata sandi unik (KeePassXC), satu persona satu tujuan, jaga gaya menulis, akses via TOR/TAILS.",
            "Satu remah (nomor/foto/kalimat khas yang dipakai ulang) cukup untuk membongkar — disiplin sejak awal."
          ]
        },
        {
          id:"email-temp",
          title:"Email Sementara (Temporary / Disposable)",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Email sementara adalah alamat "sekali pakai" yang hidup beberapa menit sampai beberapa jam, lalu lenyap. Ia bukan untuk privasi mendalam, melainkan untuk satu pekerjaan spesifik: menerima kode verifikasi tanpa memberikan alamat asli/persona pentingmu.</p>

            <h4>Untuk apa ini cocok</h4>
            <ul>
              <li><strong>Pendaftaran sekali jalan</strong> di situs yang hanya butuh "verifikasi email" dan tak akan kamu pakai lagi.</li>
              <li><strong>Menghindari spam</strong> dan menjaga alamat persona utamamu tetap bersih.</li>
              <li><strong>Uji coba layanan</strong> tanpa menautkannya ke identitas apa pun yang penting.</li>
            </ul>

            <h4>Batasan yang wajib disadari</h4>
            <ul>
              <li><strong>Bukan privat, hanya sementara.</strong> Banyak layanan email sementara bersifat <em>publik</em> — siapa pun yang tahu alamatnya bisa membaca inbox-nya. Jangan pernah mengirim/menerima sesuatu yang sensitif ke sana.</li>
              <li><strong>Mudah hilang.</strong> Pesan dan alamatnya bisa terhapus kapan saja. Jangan pakai untuk akun yang perlu pemulihan di kemudian hari.</li>
              <li><strong>Sering diblokir.</strong> Banyak situs menolak domain email sementara yang dikenal.</li>
              <li><strong>Tetap akses via TOR.</strong> Membuka email sementara dari IP aslimu tetap membocorkan lokasimu ke layanan itu.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Posisikan dengan benar</div>
              <p>Anggap email sementara seperti "nomor antrean" — berguna sesaat, lalu dibuang. Untuk komunikasi yang perlu dibaca hanya olehmu, atau yang berlanjut, kamu butuh email <em>privat</em> (materi berikutnya), bukan email sementara.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tampilan sebuah layanan <strong>email sementara</strong> (inbox publik dengan alamat acak dan hitung mundur kedaluwarsa).</p>
              <p><span class="ir-key">Cari: "temporary disposable email inbox"</span></p>
            </div>
          `,
          takeaways:[
            "Email sementara = alamat sekali pakai untuk menerima kode verifikasi, bukan untuk privasi mendalam.",
            "Banyak yang bersifat publik (inbox bisa dibaca siapa saja) dan mudah hilang/diblokir.",
            "Jangan pernah kirim/terima hal sensitif ke email sementara; tetap akses via TOR.",
            "Untuk komunikasi yang berlanjut atau rahasia, pakai email privat — bukan email sementara."
          ]
        },
        {
          id:"email-private",
          title:"Penyedia Email Privat (Zero-Access Encryption)",
          dur:"konsep · ± 8 menit",
          body:`
            <p class="lead">Email privat adalah inti komunikasi anonim yang berkelanjutan. Penyedia terbaik memakai <strong>zero-access encryption</strong>: bahkan penyedianya sendiri tidak bisa membaca isi pesanmu. Tapi ada satu hal yang tetap terlihat — dan kamu harus tahu itu.</p>

            <h4>Apa itu zero-access encryption</h4>
            <p>Pada email biasa (mis. layanan gratis arus utama), penyedia menyimpan pesanmu dalam bentuk yang bisa mereka baca — untuk iklan, pemindaian, atau diserahkan bila diminta otoritas. Pada penyedia privat dengan zero-access encryption, pesanmu dienkripsi dengan kunci yang <em>hanya</em> bisa dibuka olehmu (diturunkan dari kata sandimu). Penyedia menyimpan data terenkripsi yang, bagi mereka, hanya tampak sebagai keacakan.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Zero-access encryption pada email privat">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Apa yang dilihat penyedia?</text>
                <g font-family="monospace" font-size="10">
                  <rect x="30" y="44" width="300" height="92" rx="10" fill="#15202b" stroke="#fb7185"/>
                  <text x="180" y="66" text-anchor="middle" fill="#fb7185" font-weight="700">Email biasa</text>
                  <text x="180" y="90" text-anchor="middle" fill="#9fb4c4">isi pesan terbaca penyedia</text>
                  <text x="180" y="108" text-anchor="middle" fill="#9fb4c4">bisa dipindai / diserahkan</text>
                  <rect x="390" y="44" width="300" height="92" rx="10" fill="#15202b" stroke="#5fd98a"/>
                  <text x="540" y="66" text-anchor="middle" fill="#5fd98a" font-weight="700">Email privat (zero-access)</text>
                  <text x="540" y="90" text-anchor="middle" fill="#9fb4c4">isi = data acak bagi penyedia</text>
                  <text x="540" y="108" text-anchor="middle" fill="#f5b748">TAPI metadata tetap terlihat</text>
                </g>
                <text x="360" y="158" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Metadata = siapa-ke-siapa, kapan, subjek. Enkripsi isi tidak menyembunyikan ini.</text>
              </svg>
              <figcaption>Zero-access menyembunyikan ISI, bukan metadata. Sadari batas ini.</figcaption>
            </figure>

            <h4>Batas penting: metadata tetap ada</h4>
            <p>Enkripsi isi tidak menyembunyikan <strong>metadata</strong>: alamat pengirim &amp; penerima, waktu kirim, dan sering kali subjek email. Bila kamu mengirim ke penerima yang memakai layanan biasa, isi mungkin tak terenkripsi ujung-ke-ujung sama sekali. Untuk kerahasiaan isi yang sejati lintas penyedia, gabungkan dengan <strong>PGP</strong> (Bab 4) — itu mengenkripsi isi terlepas dari penyedia.</p>

            <h4>Memilih &amp; mendaftar dengan aman</h4>
            <ul>
              <li>Pilih penyedia bereputasi dengan zero-access/end-to-end encryption (contoh yang dikenal: Proton Mail, Tuta). Periksa kebijakan log &amp; yurisdiksinya.</li>
              <li><strong>Daftar lewat TOR.</strong> Idealnya dari TAILS, sehingga IP aslimu tak pernah menyentuh proses pendaftaran.</li>
              <li><strong>Jangan tautkan data asli</strong> sebagai pemulihan. Bila diminta nomor HP untuk verifikasi, pertimbangkan ulang — itu penaut kuat ke identitasmu.</li>
              <li><strong>Bila berbayar</strong>, gunakan metode pembayaran yang menjaga privasi (beberapa penyedia menerima kripto). Pembayaran adalah penaut yang sering dilupakan.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Isi vs metadata — ingat baik-baik</div>
              <p>"Penyedia tidak bisa baca isiku" itu bagus, tapi bukan anonimitas penuh. Pola siapa-berkomunikasi-dengan-siapa (metadata) sering lebih mengungkap daripada isi. PGP + persona terpisah + akses via TOR menutup celah yang ditinggalkan enkripsi isi.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Halaman pendaftaran <strong>Proton Mail / Tuta</strong> dibuka di Tor Browser, dan ilustrasi "end-to-end / zero-access encryption".</p>
              <p><span class="ir-key">Cari: "proton mail tor signup", "zero access encryption diagram"</span></p>
            </div>
          `,
          takeaways:[
            "Email privat dengan zero-access encryption: bahkan penyedia tak bisa membaca isi pesanmu.",
            "Batas penting: metadata (siapa-ke-siapa, kapan, subjek) tetap terlihat — enkripsi isi tidak menyembunyikannya.",
            "Untuk kerahasiaan isi lintas penyedia, gabungkan dengan PGP (Bab 4).",
            "Daftar via TOR/TAILS, jangan tautkan data asli sebagai pemulihan, dan jaga privasi metode pembayaran."
          ]
        },
        {
          id:"email-darknet",
          title:"Email DarkNet (Onion Email)",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Sebagian penyedia email bisa diakses lewat alamat <code>.onion</code>. Ini menambah lapisan: kamu tak hanya mengenkripsi isi, tapi juga menjaga agar koneksimu ke kotak suratmu tetap di dalam jaringan TOR — tanpa exit node.</p>

            <h4>Kenapa onion email berguna</h4>
            <ul>
              <li><strong>Tanpa exit node.</strong> Mengakses email lewat .onion berarti trafik tak pernah keluar TOR, mengurangi titik intip dan memperkuat ketahanan terhadap sensor.</li>
              <li><strong>Tahan blokir.</strong> Di jaringan yang memblokir situs penyedia email, alamat .onion sering tetap bisa dijangkau.</li>
              <li><strong>Sinyal komitmen privasi.</strong> Penyedia yang menyediakan .onion resmi (mis. Proton Mail punya alamat onion resmi) umumnya serius soal privasi penggunanya.</li>
            </ul>

            <h4>Trade-off &amp; kehati-hatian</h4>
            <ul>
              <li><strong>Verifikasi alamat .onion-nya</strong> dari situs resmi penyedia (Bab 3). Penyedia email adalah target empuk untuk tiruan phishing — jangan ambil alamat dari sumber acak.</li>
              <li><strong>Deliverability &amp; kecepatan.</strong> Mengirim email ke dunia luar tetap melewati jalur normal di sisi penerima; onion hanya melindungi koneksimu ke penyedia. Koneksi via TOR juga lebih lambat.</li>
              <li><strong>Hindari penyedia "darknet-only" yang tak jelas.</strong> Banyak layanan email yang hanya hidup di .onion tanpa reputasi adalah jebakan atau tidak andal. Utamakan penyedia mapan yang <em>juga</em> menyediakan .onion.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Onion bukan pengganti PGP</div>
              <p>Mengakses email lewat .onion melindungi <em>koneksimu</em>, bukan otomatis mengenkripsi isi ujung-ke-ujung ke penerima. Untuk kerahasiaan isi, tetap pakai PGP. Onion + zero-access + PGP + persona adalah kombinasi yang saling melengkapi.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Contoh penyedia email mapan yang menampilkan <strong>alamat .onion resmi</strong>-nya, dibuka di Tor Browser.</p>
              <p><span class="ir-key">Cari: "proton mail onion address", "email provider tor onion"</span></p>
            </div>
          `,
          takeaways:[
            "Onion email = akses kotak suratmu lewat .onion: tanpa exit node, tahan blokir, sinyal komitmen privasi.",
            "Verifikasi alamat .onion penyedia dari situs resmi — penyedia email sering ditiru untuk phishing.",
            "Onion melindungi koneksimu, bukan mengenkripsi isi ke penerima; tetap pakai PGP untuk isi.",
            "Hindari layanan 'darknet-only' tak jelas; utamakan penyedia mapan yang juga menyediakan .onion."
          ]
        },
        {
          id:"email-pick",
          title:"Memilih Layanan Email yang Tepat",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Tidak ada satu email "paling anonim" untuk semua situasi. Pilihan yang tepat mengalir dari <strong>threat model</strong>-mu (Bab 4) dan dari satu pertanyaan: apa tujuan email ini?</p>

            <figure class="fig">
              <svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Memilih jenis email sesuai kebutuhan">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Cocokkan kebutuhan dengan jenisnya</text>
                <g font-family="monospace" font-size="10">
                  <rect x="30" y="44" width="200" height="160" rx="10" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="130" y="68" text-anchor="middle" fill="#6ad7ff" font-weight="700">Email Sementara</text>
                  <text x="130" y="92" text-anchor="middle" fill="#9fb4c4">verifikasi sekali jalan</text>
                  <text x="130" y="110" text-anchor="middle" fill="#9fb4c4">hindari spam</text>
                  <text x="130" y="134" text-anchor="middle" fill="#fb7185">✗ tidak privat</text>
                  <text x="130" y="152" text-anchor="middle" fill="#fb7185">✗ tidak berlanjut</text>

                  <rect x="260" y="44" width="200" height="160" rx="10" fill="#15202b" stroke="#5fd98a"/>
                  <text x="360" y="68" text-anchor="middle" fill="#5fd98a" font-weight="700">Email Privat</text>
                  <text x="360" y="92" text-anchor="middle" fill="#9fb4c4">komunikasi berlanjut</text>
                  <text x="360" y="110" text-anchor="middle" fill="#9fb4c4">zero-access encryption</text>
                  <text x="360" y="134" text-anchor="middle" fill="#5fd98a">✓ isi terlindungi</text>
                  <text x="360" y="152" text-anchor="middle" fill="#f5b748">~ metadata tetap ada</text>

                  <rect x="490" y="44" width="200" height="160" rx="10" fill="#15202b" stroke="#f5b748"/>
                  <text x="590" y="68" text-anchor="middle" fill="#f5b748" font-weight="700">Onion Email</text>
                  <text x="590" y="92" text-anchor="middle" fill="#9fb4c4">koneksi tetap di TOR</text>
                  <text x="590" y="110" text-anchor="middle" fill="#9fb4c4">tahan blokir/sensor</text>
                  <text x="590" y="134" text-anchor="middle" fill="#5fd98a">✓ tanpa exit node</text>
                  <text x="590" y="152" text-anchor="middle" fill="#f5b748">~ verifikasi alamat!</text>
                </g>
                <text x="360" y="222" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Untuk kerahasiaan isi sejati lintas penyedia, tambahkan PGP di atas mana pun.</text>
              </svg>
              <figcaption>Sementara untuk sekali pakai, privat untuk berlanjut, onion untuk koneksi tahan sensor — PGP melengkapi semuanya.</figcaption>
            </figure>

            <h4>Panduan memilih</h4>
            <ul>
              <li><strong>Butuh kode verifikasi sekali, lalu buang?</strong> → Email sementara.</li>
              <li><strong>Butuh komunikasi pseudonim yang berlanjut &amp; isinya terlindungi?</strong> → Email privat (zero-access) di balik persona, didaftarkan via TOR.</li>
              <li><strong>Berada di jaringan tersensor / ingin koneksi tak pernah keluar TOR?</strong> → Penyedia privat yang juga punya .onion resmi.</li>
              <li><strong>Isi benar-benar rahasia, apa pun penyedianya?</strong> → Tambahkan <strong>PGP</strong> di atas semua pilihan di atas.</li>
            </ul>

            <h4>Prinsip yang menyatukan semuanya</h4>
            <p>Apa pun pilihanmu: jalankan di belakang <strong>persona</strong> yang bersih, akses via <strong>TOR/TAILS</strong>, jangan tautkan data asli, dan ingat batas tiap alat (sementara ≠ privat; zero-access ≠ menyembunyikan metadata; onion ≠ enkripsi isi). Keamanan datang dari <em>kombinasi</em> yang cocok dengan kebutuhanmu, bukan dari satu produk ajaib.</p>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tabel perbandingan jenis email (sementara/privat/onion) dengan kolom: tujuan, privasi isi, metadata, kapan dipakai.</p>
              <p><span class="ir-key">Cari: "email privacy comparison table temporary vs encrypted"</span></p>
            </div>
          `,
          takeaways:[
            "Tidak ada email 'paling anonim' universal; pilih sesuai tujuan & threat model.",
            "Sementara = sekali pakai; privat = berlanjut & isi terlindungi; onion = koneksi tahan sensor tanpa exit node.",
            "PGP melengkapi semuanya untuk kerahasiaan isi sejati lintas penyedia.",
            "Apa pun pilihannya: jalankan di balik persona bersih, akses via TOR/TAILS, jangan tautkan data asli."
          ],
          quiz:{
            title:"Kuis Bab 5 — Email",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Kenapa persona harus dipisahkan total dari identitas asli?",
               options:["Agar email lebih cepat","Karena satu remah yang dipakai ulang (nomor/foto/kalimat khas) bisa menautkanmu","Supaya gratis","Agar lolos CAPTCHA"],
               answer:1,
               explain:"Anonimitas bocor lewat penaut kecil yang berulang. Persona harus jadi kompartemen tertutup tanpa data asli yang menyeberang."},
              {q:"Email sementara paling tepat dipakai untuk…",
               options:["Komunikasi rahasia jangka panjang","Menerima kode verifikasi sekali jalan","Menyimpan dokumen penting","Pemulihan akun penting"],
               answer:1,
               explain:"Email sementara bersifat sekali pakai dan sering publik; cocok untuk verifikasi sekali jalan, bukan privasi atau komunikasi berlanjut."},
              {q:"Apa arti zero-access encryption pada email privat?",
               options:["Email tanpa kata sandi","Bahkan penyedia tidak bisa membaca isi pesanmu","Tidak ada metadata sama sekali","Email yang tak bisa dihapus"],
               answer:1,
               explain:"Isi dienkripsi dengan kunci yang hanya bisa kamu buka; bagi penyedia, isinya tampak sebagai data acak."},
              {q:"Apa yang TETAP terlihat meski isi email dienkripsi (zero-access)?",
               options:["Tidak ada apa-apa","Metadata: pengirim, penerima, waktu, sering subjek","Kata sandimu","Isi lampiran"],
               answer:1,
               explain:"Enkripsi isi tidak menyembunyikan metadata. Pola siapa-ke-siapa sering lebih mengungkap daripada isi."},
              {q:"Keunggulan utama mengakses email lewat alamat .onion adalah…",
               options:["Mengenkripsi isi ke penerima otomatis","Koneksi tetap di dalam TOR (tanpa exit node) & tahan blokir","Email jadi gratis","Tidak butuh kata sandi"],
               answer:1,
               explain:"Onion melindungi koneksimu ke penyedia (tanpa exit node, tahan sensor), tapi tidak menggantikan PGP untuk kerahasiaan isi."},
              {q:"Untuk kerahasiaan ISI yang sejati lintas penyedia, kamu sebaiknya…",
               options:["Cukup pakai email biasa","Menambahkan PGP di atas layanan email apa pun","Memakai email sementara","Mematikan TOR"],
               answer:1,
               explain:"PGP mengenkripsi isi terlepas dari penyedia, sehingga hanya penerima yang dituju bisa membacanya."}
            ]
          }
        }
      ]
};
