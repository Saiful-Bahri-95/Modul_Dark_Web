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
    };
