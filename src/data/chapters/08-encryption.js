/* Bab 8 — id: "encryption"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"encryption",
      title:"Enkripsi",
      lectures:[
        {
          id:"enc-what",
          title:"Apa Itu Enkripsi & Kenapa Penting?",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">Enkripsi adalah seni mengubah pesan yang bisa dibaca siapa saja menjadi kekacauan yang hanya bisa dipulihkan oleh pemegang kunci. Ia adalah fondasi dari hampir semua hal di kursus ini — TOR, TAILS, PGP, dompet kripto, semuanya bersandar padanya.</p>

            <h4>Dari plaintext ke ciphertext</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plaintext dienkripsi menjadi ciphertext">
                <defs><marker id="are" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <rect x="24" y="54" width="150" height="52" rx="9" fill="#15202b" stroke="#5fd98a"/>
                <text x="99" y="78" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">Plaintext</text>
                <text x="99" y="95" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">"halo dunia"</text>
                <rect x="270" y="54" width="180" height="52" rx="9" fill="#15202b" stroke="#f5b748"/>
                <text x="360" y="78" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="11" font-weight="700">Algoritma + Kunci</text>
                <text x="360" y="95" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">mengacak</text>
                <rect x="546" y="54" width="150" height="52" rx="9" fill="#15202b" stroke="#fb7185"/>
                <text x="621" y="78" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">Ciphertext</text>
                <text x="621" y="95" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">"x9$mK2!q..."</text>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#are)"><line x1="174" y1="80" x2="266" y2="80"/><line x1="450" y1="80" x2="542" y2="80"/></g>
                <text x="360" y="140" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Tanpa kunci yang benar, ciphertext hanyalah keacakan tak bermakna.</text>
              </svg>
              <figcaption>Algoritma + kunci mengubah pesan terbaca menjadi keacakan; hanya kunci yang benar bisa membaliknya.</figcaption>
            </figure>

            <h4>Tiga hal yang dijamin kriptografi</h4>
            <ul>
              <li><strong>Kerahasiaan (confidentiality)</strong> — hanya pihak berkunci yang bisa membaca isi. Ini fungsi enkripsi yang paling dikenal.</li>
              <li><strong>Keutuhan (integrity)</strong> — kamu bisa mendeteksi bila pesan diubah sedikit pun di perjalanan (lewat hash &amp; tanda tangan).</li>
              <li><strong>Keaslian (authenticity)</strong> — kamu bisa membuktikan siapa pengirim sebenarnya (lewat tanda tangan digital).</li>
            </ul>

            <h4>Kenapa ini penting bagimu</h4>
            <p>Enkripsi yang kuat bersifat <strong>asimetris dalam usaha</strong>: mengunci itu murah, tapi membuka tanpa kunci butuh waktu yang secara praktis mustahil (jutaan tahun untuk algoritma modern). Inilah yang membuat privasi mungkin: kamu tak perlu menyembunyikan pesanmu secara fisik, cukup menguncinya. Kamu sudah memakainya tiap hari (HTTPS, perbankan), tapi di kursus ini kamu belajar memegang kuncinya sendiri — bukan menitipkannya ke perusahaan.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kunci, bukan algoritma, yang rahasia</div>
              <p>Prinsip Kerckhoffs: keamanan sistem yang baik tidak bergantung pada merahasiakan <em>algoritma</em>-nya (yang justru terbuka &amp; teruji publik), melainkan pada merahasiakan <em>kunci</em>-nya. Itu sebabnya alat open-source seperti GnuPG justru lebih tepercaya — siapa pun bisa memeriksa kebenarannya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Ilustrasi sederhana plaintext → (gembok/kunci) → ciphertext, dan ikon HTTPS sebagai contoh enkripsi sehari-hari.</p>
              <p><span class="ir-key">Cari: "encryption plaintext ciphertext diagram", "https padlock encryption"</span></p>
            </div>
          `,
          takeaways:[
            "Enkripsi mengubah plaintext jadi ciphertext lewat algoritma + kunci; tanpa kunci benar, hasilnya keacakan.",
            "Kriptografi menjamin tiga hal: kerahasiaan, keutuhan, dan keaslian.",
            "Mengunci itu murah, membuka tanpa kunci praktis mustahil — itulah yang membuat privasi mungkin.",
            "Prinsip Kerckhoffs: yang rahasia adalah KUNCI, bukan algoritma — karena itu open-source lebih tepercaya."
          ]
        },
        {
          id:"enc-sym-asym",
          title:"Enkripsi Simetris vs Asimetris (& Hibrida)",
          dur:"konsep · ± 8 menit",
          body:`
            <p class="lead">Ada dua keluarga besar enkripsi, dan memahami beda keduanya membuka rahasia kenapa PGP, HTTPS, dan hampir semua sistem modern bekerja seperti sekarang. Kuncinya ada pada satu masalah: bagaimana membagikan kunci dengan aman.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simetris vs asimetris">
                <text x="180" y="22" text-anchor="middle" fill="#6ad7ff" font-family="monospace" font-size="12" font-weight="700">SIMETRIS</text>
                <text x="180" y="40" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">satu kunci sama untuk kunci &amp; buka</text>
                <rect x="60" y="56" width="100" height="38" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="110" y="80" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="9">kunci 🔑</text>
                <rect x="200" y="56" width="100" height="38" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="250" y="80" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="9">kunci 🔑</text>
                <text x="180" y="116" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="9">+ cepat, untuk data besar</text>
                <text x="180" y="132" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9">- bagaimana kirim kuncinya aman?</text>

                <line x1="360" y1="30" x2="360" y2="210" stroke="#283643" stroke-dasharray="4 4"/>

                <text x="540" y="22" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">ASIMETRIS</text>
                <text x="540" y="40" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">sepasang: publik + privat</text>
                <rect x="420" y="56" width="110" height="38" rx="8" fill="#15202b" stroke="#f5b748"/><text x="475" y="80" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9">publik (kunci)</text>
                <rect x="560" y="56" width="110" height="38" rx="8" fill="#15202b" stroke="#fb7185"/><text x="615" y="80" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9">privat (buka)</text>
                <text x="540" y="116" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="9">+ tak perlu tukar kunci rahasia</text>
                <text x="540" y="132" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9">- lebih lambat</text>

                <rect x="120" y="158" width="480" height="50" rx="10" fill="rgba(79,224,208,0.06)" stroke="#283643"/>
                <text x="360" y="180" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="11" font-weight="700">HIBRIDA = gabungan keduanya</text>
                <text x="360" y="198" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">asimetris untuk menukar kunci simetris, lalu simetris untuk data — inilah cara PGP/HTTPS</text>
              </svg>
              <figcaption>Simetris cepat tapi sulit berbagi kunci; asimetris memecahkan distribusi kunci tapi lambat. Sistem nyata menggabungkan keduanya.</figcaption>
            </figure>

            <h4>Simetris — satu kunci untuk semua</h4>
            <p>Pada enkripsi simetris, <strong>kunci yang sama</strong> dipakai untuk mengunci dan membuka (contoh algoritma: AES). Cepat dan efisien untuk data besar. Masalahnya satu tapi besar: <strong>bagaimana kamu mengirim kunci itu ke lawan bicara dengan aman?</strong> Kalau kamu kirim lewat jalur yang sama, penyadap bisa ikut menangkapnya. Inilah "masalah distribusi kunci".</p>

            <h4>Asimetris — sepasang kunci</h4>
            <p>Enkripsi asimetris memakai <strong>sepasang kunci</strong>: publik dan privat (contoh: RSA, kurva eliptik). Apa yang dikunci kunci publik hanya bisa dibuka kunci privat pasangannya. Ini memecahkan masalah distribusi: kamu sebarkan kunci publik bebas-bebas, orang memakainya untuk mengunci pesan kepadamu, dan hanya kamu (pemegang kunci privat) yang bisa membukanya. Tak perlu menukar rahasia lebih dulu. Harganya: jauh lebih lambat untuk data besar.</p>

            <h4>Hibrida — yang sebenarnya dipakai</h4>
            <p>Sistem nyata seperti PGP dan HTTPS menggabungkan keduanya: pakai <strong>asimetris</strong> untuk dengan aman menukar sebuah <strong>kunci simetris</strong> sekali pakai, lalu pakai kunci simetris yang cepat itu untuk mengenkripsi isi pesan/data yang besar. Dapat keduanya: keamanan distribusi kunci sekaligus kecepatan. Saat kamu "mengenkripsi dengan PGP", di balik layar inilah yang terjadi.</p>

            <div class="box tip">
              <div class="bx-title">◇ Analogi gembok</div>
              <p>Asimetris seperti gembok terbuka yang kamu bagikan ke semua orang (kunci publik): siapa pun bisa mengunci kotak untukmu, tapi hanya kamu yang punya anak kuncinya (kunci privat). Tak perlu pernah menyerahkan anak kunci ke siapa pun.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram perbandingan simetris vs asimetris, dan skema enkripsi hibrida PGP.</p>
              <p><span class="ir-key">Cari: "symmetric vs asymmetric encryption diagram", "pgp hybrid encryption"</span></p>
            </div>
          `,
          takeaways:[
            "Simetris: satu kunci sama untuk kunci & buka — cepat, tapi sulit membagikan kunci dengan aman.",
            "Asimetris: sepasang kunci (publik mengunci, privat membuka) — memecahkan distribusi kunci, tapi lambat.",
            "Hibrida: asimetris menukar kunci simetris sekali pakai, lalu simetris untuk data — cara PGP & HTTPS.",
            "Analogi: kunci publik = gembok yang dibagikan; kunci privat = anak kunci yang tak pernah diserahkan."
          ]
        },
        {
          id:"enc-keygen",
          title:"Membuat PGP Key Pair",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Sekarang kita praktik. Membuat key pair PGP adalah langkah pertama memiliki "identitas kripto"-mu sendiri. Beberapa pilihan saat pembuatan menentukan keamanan jangka panjang, jadi mari lakukan dengan benar.</p>

            <h4>Alat</h4>
            <p>Di <strong>Windows</strong> pakai <strong>Kleopatra</strong> (bagian dari Gpg4win). Di <strong>TAILS</strong>, gunakan utilitas OpenPGP/Kleopatra bawaan dan simpan keyring di Persistent (fitur GnuPG). Prinsipnya sama.</p>

            <h4>Langkah</h4>
            <ol class="steps">
              <li>Buka Kleopatra → <strong>File → New Key Pair</strong> → "Create a personal OpenPGP key pair".</li>
              <li>Isi <strong>nama &amp; email persona</strong> (bukan identitas asli, sesuai Bab 5).</li>
              <li>Buka "Advanced Settings" bila ingin mengatur: jenis kunci (RSA 4096-bit atau kurva eliptik modern keduanya kuat) dan <strong>masa berlaku (expiry)</strong>. Memberi expiry itu praktik baik — kunci yang telantar akan kedaluwarsa, bukan berlaku selamanya.</li>
              <li>Tetapkan <strong>passphrase yang kuat</strong> untuk melindungi kunci privat. Ini lapisan terakhir bila file kunci jatuh ke tangan orang lain.</li>
              <li>Selesaikan pembuatan. Kleopatra menampilkan <strong>fingerprint</strong> kuncimu — sidik jari unik yang nanti dipakai orang lain untuk memverifikasi keasliannya.</li>
            </ol>

            <h4>Dua hal yang sering dilupakan</h4>
            <ul>
              <li><strong>Sertifikat pencabutan (revocation certificate).</strong> Buat dan simpan di tempat aman terpisah. Bila kunci privatmu hilang/bocor, sertifikat ini memberitahu dunia "jangan pakai kunci ini lagi". Tanpa itu, kamu tak bisa mencabut kunci yang sudah disebar.</li>
              <li><strong>Cadangkan kunci privat dengan aman.</strong> Kehilangan kunci privat = kehilangan kemampuan membaca semua pesan terenkripsi untukmu. Simpan cadangan terenkripsi (mis. di Persistent TAILS atau container VeraCrypt).</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Kunci privat & passphrase = identitasmu</div>
              <p>Siapa pun yang memiliki keduanya bisa menyamar jadi kamu dan membaca pesan untukmu. Jangan pernah mengekspor kunci privat ke layanan online, mengirimnya, atau memakai passphrase lemah. Perlakukan seperti kunci brankas hidupmu.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Wizard <strong>Kleopatra "New Key Pair"</strong> termasuk Advanced Settings (jenis kunci & expiry) dan tampilan fingerprint.</p>
              <p><span class="ir-key">Cari: "kleopatra create openpgp key pair advanced", "gpg key fingerprint"</span></p>
            </div>
          `,
          practice:`<p>Buat satu key pair PGP untuk persona latihanmu (beri expiry, mis. 1-2 tahun, dan passphrase kuat). Catat fingerprint-nya. Lalu buat sertifikat pencabutan dan simpan terpisah di tempat aman. Terakhir, cadangkan kunci privat ke lokasi terenkripsi. Tiga langkah ini membedakan "punya kunci" dari "mengelola kunci dengan benar".</p>`,
          takeaways:[
            "Buat key pair di Kleopatra (Windows/TAILS): isi persona, atur jenis kunci (RSA 4096/ECC) & expiry.",
            "Beri masa berlaku agar kunci telantar otomatis kedaluwarsa, bukan berlaku selamanya.",
            "Wajib: buat sertifikat pencabutan (revocation) & cadangkan kunci privat secara terenkripsi.",
            "Kunci privat + passphrase = identitasmu; jangan pernah dibagikan atau diunggah."
          ]
        },
        {
          id:"enc-keys",
          title:"Impor & Ekspor Kunci",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">PGP hanya berguna kalau orang bisa saling bertukar kunci publik. Di sini kamu belajar membagikan kunci publikmu dan menerima kunci publik orang lain — sambil memverifikasi keasliannya, karena di sinilah celah penyamaran bisa muncul.</p>

            <h4>Ekspor kunci publikmu</h4>
            <ol class="steps">
              <li>Di Kleopatra, pilih kuncimu → <strong>Export</strong> → simpan ke file <code>.asc</code>. Ini kunci PUBLIK — aman dibagikan.</li>
              <li>Bagikan file/teks itu lewat profil, situs, atau pesan. Orang memakainya untuk mengenkripsi pesan kepadamu &amp; memverifikasi tanda tanganmu.</li>
              <li><strong>Jangan pernah</strong> memilih "Export Secret Keys" untuk dibagikan — itu kunci privatmu.</li>
            </ol>

            <h4>Impor kunci publik orang lain</h4>
            <ol class="steps">
              <li>Terima file <code>.asc</code> kunci publik mereka, lalu di Kleopatra pilih <strong>Import</strong>.</li>
              <li><strong>Verifikasi fingerprint</strong> kunci itu lewat saluran kedua tepercaya (tatap muka, suara yang dikenal, atau sumber resmi) — persis prinsip anti-MITM di Bab 6. Tanpa verifikasi, kamu bisa saja mengimpor kunci milik penyusup.</li>
              <li>Setelah yakin, kamu bisa menandai tingkat kepercayaan kunci itu (certify).</li>
            </ol>

            <h4>Keyserver & WKD</h4>
            <p>Ada server kunci publik (keyserver) dan mekanisme seperti WKD untuk menemukan kunci berdasarkan email. Praktis, tapi <strong>menemukan</strong> kunci tidak sama dengan <strong>memverifikasi</strong>-nya — siapa pun bisa mengunggah kunci dengan nama siapa saja. Selalu cocokkan fingerprint dari sumber resmi sebelum percaya.</p>

            <div class="box warn">
              <div class="bx-title">▲ Fingerprint adalah jangkar kepercayaan</div>
              <p>Nama &amp; email pada kunci bisa dipalsukan; fingerprint tidak. Saat ragu apakah sebuah kunci benar milik seseorang, satu-satunya jawaban adalah mencocokkan fingerprint lewat jalur independen yang tepercaya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu <strong>Export/Import</strong> di Kleopatra dan tampilan daftar kunci dengan kolom fingerprint.</p>
              <p><span class="ir-key">Cari: "kleopatra export import key", "gpg keyserver fingerprint"</span></p>
            </div>
          `,
          takeaways:[
            "Ekspor kunci PUBLIK (.asc) untuk dibagikan; jangan pernah membagikan kunci privat ('secret key').",
            "Impor kunci publik orang lain, lalu VERIFIKASI fingerprint-nya lewat saluran kedua tepercaya.",
            "Keyserver/WKD memudahkan menemukan kunci, tapi menemukan ≠ memverifikasi.",
            "Nama/email bisa dipalsukan; fingerprint adalah jangkar kepercayaan yang sebenarnya."
          ]
        },
        {
          id:"enc-text",
          title:"Enkripsi & Dekripsi Teks",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Inilah inti pemakaian PGP sehari-hari: mengubah pesan biasa menjadi blok terenkripsi yang hanya bisa dibuka penerima, dan sebaliknya. Setelah ini terasa otomatis, komunikasi rahasia jadi kebiasaan, bukan kerepotan.</p>

            <h4>Mengenkripsi pesan untuk seseorang</h4>
            <ol class="steps">
              <li>Pastikan kamu sudah <strong>mengimpor &amp; memverifikasi kunci publik penerima</strong> (materi sebelumnya).</li>
              <li>Di Kleopatra, gunakan <strong>Notepad</strong> bawaannya (atau fitur clipboard): tulis/tempel pesanmu.</li>
              <li>Pilih <strong>Encrypt</strong>, lalu pilih penerima (kunci publiknya). Bisa tambahkan dirimu sendiri sebagai penerima agar kamu juga bisa membaca arsipnya nanti.</li>
              <li>Hasilnya blok teks <code>-----BEGIN PGP MESSAGE-----</code> ... Salin dan kirim lewat saluran apa pun (email, chat) — isinya tetap aman walau salurannya tidak.</li>
            </ol>

            <h4>Mendekripsi pesan untukmu</h4>
            <ol class="steps">
              <li>Salin blok PGP MESSAGE yang kamu terima ke Notepad Kleopatra.</li>
              <li>Pilih <strong>Decrypt</strong>, masukkan <strong>passphrase</strong> kunci privatmu.</li>
              <li>Pesan asli muncul. Kleopatra juga akan memberi tahu bila pesan itu sekaligus ditandatangani &amp; valid.</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Kombinasi yang kuat: enkripsi + tanda tangan</div>
              <p>Praktik terbaik adalah <strong>mengenkripsi sekaligus menandatangani</strong>: penerima tahu pesan rahasia (terenkripsi) DAN benar darimu serta utuh (ditandatangani). Tanda tangan dibahas di materi berikutnya.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Ingat batas: metadata tetap terlihat</div>
              <p>PGP menyembunyikan ISI, bukan fakta bahwa kamu berkomunikasi dengan seseorang. Subjek email, pengirim, penerima, dan waktu tetap terlihat. Pasangkan dengan persona &amp; TOR untuk menutup celah itu (Bab 5).</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Kleopatra <strong>Notepad</strong> menampilkan teks asli vs blok "BEGIN PGP MESSAGE", dan dialog pemilihan penerima.</p>
              <p><span class="ir-key">Cari: "kleopatra notepad encrypt text", "pgp begin pgp message block"</span></p>
            </div>
          `,
          practice:`<p>Enkripsikan sebuah pesan untuk dirimu sendiri (pakai kunci publikmu), salin blok hasilnya ke tempat lain, lalu dekripsi kembali dengan kunci privat + passphrase. Bila punya teman dengan PGP, tukar kunci publik (verifikasi fingerprint!), lalu saling kirim pesan terenkripsi. Mengulang siklus ini sampai lancar adalah inti keterampilan komunikasi rahasia.</p>`,
          takeaways:[
            "Enkripsi teks: tulis di Kleopatra Notepad → Encrypt → pilih kunci publik penerima → kirim blok PGP MESSAGE.",
            "Dekripsi: tempel blok → Decrypt → masukkan passphrase kunci privat.",
            "Tambahkan dirimu sebagai penerima agar bisa membaca arsipmu sendiri kelak.",
            "PGP menyembunyikan isi, bukan metadata; gabungkan dengan persona & TOR."
          ]
        },
        {
          id:"enc-sign-intro",
          title:"Pengantar Tanda Tangan Digital",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">Enkripsi menjaga pesan tetap rahasia. <strong>Tanda tangan digital</strong> melakukan hal yang berbeda namun sama pentingnya: membuktikan <em>siapa</em> yang menulis dan bahwa isinya <em>tidak diubah</em>. Ini fondasi dari verifikasi yang kamu pakai sejak Bab 1 (verifikasi installer TOR).</p>

            <h4>Tanda tangan = kebalikan enkripsi kunci</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur tanda tangan digital">
                <defs><marker id="ars" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <text x="180" y="22" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">MENANDATANGANI (pengirim)</text>
                <rect x="40" y="40" width="120" height="40" rx="8" fill="#15202b" stroke="#34475a"/><text x="100" y="64" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="9">pesan</text>
                <rect x="200" y="40" width="130" height="40" rx="8" fill="#15202b" stroke="#fb7185"/><text x="265" y="60" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9">kunci PRIVAT</text><text x="265" y="73" text-anchor="middle" fill="#9fb4c4" font-size="8">membuat tanda tangan</text>
                <line x1="160" y1="60" x2="196" y2="60" stroke="#4fe0d0" stroke-width="2" marker-end="url(#ars)"/>
                <text x="180" y="116" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">MEMVERIFIKASI (penerima)</text>
                <rect x="40" y="132" width="120" height="40" rx="8" fill="#15202b" stroke="#34475a"/><text x="100" y="156" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="9">pesan + ttd</text>
                <rect x="200" y="132" width="130" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="265" y="152" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="9">kunci PUBLIK</text><text x="265" y="165" text-anchor="middle" fill="#9fb4c4" font-size="8">mengecek tanda tangan</text>
                <line x1="160" y1="152" x2="196" y2="152" stroke="#4fe0d0" stroke-width="2" marker-end="url(#ars)"/>
                <rect x="380" y="70" width="310" height="70" rx="10" fill="rgba(95,217,138,0.06)" stroke="#283643"/>
                <text x="535" y="98" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">Cocok = ASLI &amp; UTUH</text>
                <text x="535" y="120" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">benar dari pemilik kunci, tak diubah sedikit pun</text>
              </svg>
              <figcaption>Pada enkripsi, publik mengunci & privat membuka. Pada tanda tangan, dibalik: privat menandatangani, publik memverifikasi.</figcaption>
            </figure>

            <h4>Cara kerjanya (sederhana)</h4>
            <p>Saat menandatangani, perangkatmu menghitung "ringkasan unik" pesan (hash) lalu menguncinya dengan <strong>kunci privat</strong>-mu — itulah tanda tangannya. Penerima memakai <strong>kunci publik</strong>-mu untuk memeriksa: bila pesan diubah satu karakter pun, hash berubah dan tanda tangan jadi tidak valid; bila tanda tangan cocok, berarti pesan benar darimu (hanya kamu yang punya kunci privat) dan utuh.</p>

            <h4>Dua hal yang dibuktikan</h4>
            <ul>
              <li><strong>Keaslian (authenticity)</strong> — pesan benar berasal dari pemegang kunci privat itu.</li>
              <li><strong>Keutuhan (integrity)</strong> — pesan tidak diubah sejak ditandatangani.</li>
            </ul>
            <p>Inilah mekanisme yang sama persis di balik "Good signature" saat kamu memverifikasi installer TOR (Bab 1) dan pengumuman ber-tanda tangan dari operator (Bab 4). Sekarang kamu memahami mesinnya.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tanda tangan ≠ enkripsi</div>
              <p>Pesan bertanda tangan tetap bisa dibaca siapa saja (tidak rahasia) — yang dijamin hanyalah asal &amp; keutuhannya. Untuk rahasia + keaslian sekaligus, enkripsi DAN tanda tangani.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram alur "sign with private key / verify with public key" dan contoh hasil "Good signature".</p>
              <p><span class="ir-key">Cari: "digital signature sign verify diagram", "gpg good signature"</span></p>
            </div>
          `,
          takeaways:[
            "Tanda tangan digital membuktikan keaslian (siapa penulis) & keutuhan (tak diubah), bukan kerahasiaan.",
            "Mekanismenya kebalikan enkripsi: privat MENANDATANGANI, publik MEMVERIFIKASI.",
            "Bila pesan diubah sedikit pun, tanda tangan jadi tidak valid (lewat hash).",
            "Ini mesin yang sama di balik 'Good signature' saat verifikasi installer TOR & pengumuman operator."
          ]
        },
        {
          id:"enc-sign",
          title:"Menandatangani & Memverifikasi Pesan",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Mari praktikkan tanda tangan pada teks. Keterampilan ini membuatmu bisa membuktikan keaslian pengumuman/pesanmu sendiri, sekaligus memeriksa keaslian pesan orang lain — pertahanan langsung terhadap penipuan.</p>

            <h4>Menandatangani pesan</h4>
            <ol class="steps">
              <li>Di Kleopatra Notepad, tulis pesanmu.</li>
              <li>Pilih <strong>Sign</strong> (atau "Sign/Encrypt" lalu hanya centang Sign), pilih kunci privatmu, masukkan passphrase.</li>
              <li>Hasilnya pesan dengan blok tanda tangan (atau <em>clear-signed</em>: teks asli tetap terbaca, dengan tanda tangan menempel di bawahnya). Kirim apa adanya.</li>
            </ol>

            <h4>Memverifikasi pesan orang lain</h4>
            <ol class="steps">
              <li>Pastikan kamu sudah mengimpor &amp; <strong>memverifikasi fingerprint</strong> kunci publik penulisnya.</li>
              <li>Tempel pesan ber-tanda tangan ke Kleopatra → <strong>Verify</strong>.</li>
              <li>Bila valid, muncul konfirmasi tanda tangan sah dari pemilik kunci itu. Bila pesan telah diubah atau kunci tak dikenal, Kleopatra memperingatkan — <strong>jangan percaya</strong> pesan yang gagal verifikasi.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Verifikasi hanya sekuat kunci yang kamu percaya</div>
              <p>"Good signature" hanya berarti "ditandatangani oleh kunci ini". Apakah kunci itu benar milik orang yang dimaksud bergantung pada apakah kamu sudah memverifikasi fingerprint-nya. Penipu bisa menandatangani dengan kuncinya sendiri dan mengaku sebagai orang lain — verifikasi fingerprint yang menutup celah ini.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Kleopatra menampilkan pesan <strong>clear-signed</strong> dan hasil <strong>Verify</strong> ("valid signature").</p>
              <p><span class="ir-key">Cari: "gpg clearsign message", "kleopatra verify signature result"</span></p>
            </div>
          `,
          practice:`<p>Tandatangani sebuah kalimat dengan kunci privatmu, lalu verifikasi sendiri hasilnya. Untuk membuktikan deteksi perubahan: ubah satu huruf pada pesan ber-tanda tangan, verifikasi lagi, dan lihat tanda tangannya jadi tidak valid. Eksperimen kecil ini membuktikan "keutuhan" bukan sekadar teori.</p>`,
          takeaways:[
            "Tandatangani: Kleopatra Notepad → Sign → kunci privat + passphrase (clear-signed tetap terbaca).",
            "Verifikasi: impor & verifikasi fingerprint penulis dulu, lalu Verify pesannya.",
            "'Good signature' berarti ditandatangani oleh kunci itu — keasliannya tergantung verifikasi fingerprint.",
            "Mengubah satu huruf membuat tanda tangan tidak valid — itulah jaminan keutuhan."
          ]
        },
        {
          id:"enc-files",
          title:"Enkripsi & Dekripsi File",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Prinsip yang sama berlaku untuk file utuh, bukan hanya teks. Mengenkripsi file membuatmu bisa menyimpan dan mengirim dokumen, foto, atau arsip apa pun dengan aman — bahkan lewat saluran yang tidak tepercaya.</p>

            <h4>Mengenkripsi file</h4>
            <ol class="steps">
              <li>Di Kleopatra, pilih <strong>Sign/Encrypt Files</strong>, lalu pilih file yang ingin diamankan.</li>
              <li>Pilih <strong>Encrypt</strong> dan tentukan penerima (kunci publiknya); tambahkan dirimu agar bisa membuka arsipnya sendiri.</li>
              <li>Kleopatra menghasilkan file terenkripsi (mis. <code>dokumen.pdf.gpg</code> atau <code>.pgp</code>). Hanya pemegang kunci privat yang sesuai bisa membukanya.</li>
              <li>Kirim file terenkripsi itu lewat OnionShare/email/chat — isinya tetap rahasia walau salurannya tidak.</li>
            </ol>

            <h4>Mendekripsi file</h4>
            <ol class="steps">
              <li>Pilih file <code>.gpg</code>/<code>.pgp</code> yang kamu terima → <strong>Decrypt/Verify</strong>.</li>
              <li>Masukkan passphrase kunci privatmu; file asli dipulihkan.</li>
            </ol>

            <h4>Dua pilihan: enkripsi PGP vs container</h4>
            <ul>
              <li><strong>Enkripsi PGP per file</strong> — paling cocok untuk <em>mengirim</em> file ke orang tertentu (memakai kunci publik penerima).</li>
              <li><strong>Container terenkripsi (VeraCrypt/LUKS, Bab 7)</strong> — lebih cocok untuk <em>menyimpan</em> banyak file sensitif jangka panjang di perangkatmu sendiri.</li>
            </ul>
            <p>Keduanya saling melengkapi: simpan di container, kirim dengan PGP.</p>

            <div class="box tip">
              <div class="bx-title">◇ Bersihkan dulu, enkripsi kemudian</div>
              <p>Sebelum mengenkripsi &amp; mengirim, ingat Bab 7: bersihkan metadata file (MAT2). Enkripsi melindungi isi dari pihak luar, tapi penerima yang sah tetap akan melihat metadata di dalamnya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Dialog <strong>Kleopatra "Sign/Encrypt Files"</strong> dan file hasil ber-ekstensi .gpg.</p>
              <p><span class="ir-key">Cari: "kleopatra sign encrypt files", "gpg encrypted file .gpg"</span></p>
            </div>
          `,
          takeaways:[
            "Enkripsi file: Kleopatra → Sign/Encrypt Files → pilih penerima (kunci publik) → hasil .gpg/.pgp.",
            "Dekripsi: Decrypt/Verify + passphrase kunci privat.",
            "PGP per file cocok untuk MENGIRIM; container (VeraCrypt/LUKS) cocok untuk MENYIMPAN jangka panjang.",
            "Bersihkan metadata (MAT2) sebelum mengenkripsi & mengirim."
          ]
        },
        {
          id:"enc-sign-files",
          title:"Menandatangani & Memverifikasi File",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Tanda tangan pada file adalah keterampilan yang sudah kamu pakai sejak Bab 1 — verifikasi installer. Sekarang kamu melakukannya dari kedua sisi: menandatangani file buatanmu, dan memverifikasi file dari orang lain.</p>

            <h4>Menandatangani file</h4>
            <ol class="steps">
              <li>Di Kleopatra, <strong>Sign/Encrypt Files</strong> → pilih file → centang <strong>Sign</strong> (tanpa encrypt bila hanya ingin membuktikan keaslian).</li>
              <li>Pilih kunci privatmu + passphrase. Kleopatra menghasilkan berkas tanda tangan terpisah (mis. <code>file.sig</code> atau <code>.asc</code>) di samping file asli.</li>
              <li>Bagikan file asli BESERTA berkas tanda tangannya. Penerima memakai keduanya untuk memverifikasi.</li>
            </ol>

            <h4>Memverifikasi file</h4>
            <ol class="steps">
              <li>Letakkan file dan berkas tanda tangan (<code>.sig</code>/<code>.asc</code>) di folder yang sama.</li>
              <li>Pastikan kunci publik penanda tangan sudah diimpor &amp; <strong>fingerprint-nya terverifikasi</strong>.</li>
              <li>Di Kleopatra, <strong>Decrypt/Verify</strong> pada berkas tanda tangan. Hasil sah = file asli &amp; benar dari penanda tangan; gagal = file berubah atau kunci tak tepercaya.</li>
            </ol>

            <h4>Menutup lingkaran</h4>
            <p>Inilah persis yang kamu lakukan saat memverifikasi installer TOR (Bab 1) dan TAILS (Bab 2): mengunduh file + berkas tanda tangan, mengimpor kunci pengembang, lalu memverifikasi. Sekarang kamu tak hanya bisa <em>memverifikasi</em> file orang lain, tapi juga <em>menandatangani</em> milikmu — lingkaran kepercayaan lengkap.</p>

            <div class="box tip">
              <div class="bx-title">◇ Enkripsi + tanda tangan untuk file penting</div>
              <p>Untuk file sensitif yang dikirim ke orang tertentu, lakukan keduanya: <strong>Sign + Encrypt</strong>. Penerima dapat jaminan rahasia (terenkripsi), asli, dan utuh (ditandatangani) sekaligus.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Kleopatra menghasilkan berkas <strong>.sig</strong> dan hasil verifikasi file ("valid signature").</p>
              <p><span class="ir-key">Cari: "gpg detached signature .sig verify", "kleopatra verify file signature"</span></p>
            </div>
          `,
          practice:`<p>Tandatangani sebuah file uji (mis. PDF), lalu verifikasi sendiri memakai berkas tanda tangannya. Untuk membuktikan deteksi perubahan, ubah sedikit isi file (atau ganti dengan file lain bernama sama) dan verifikasi lagi — tanda tangan akan gagal. Bandingkan pengalaman ini dengan saat kamu memverifikasi installer TOR di Bab 1; kini kamu menguasai kedua sisinya.</p>`,
          takeaways:[
            "Tandatangani file: Sign/Encrypt Files → Sign → kunci privat; hasilnya berkas .sig/.asc terpisah.",
            "Verifikasi: taruh file + .sig bersama, impor & verifikasi kunci publik penanda tangan, lalu Decrypt/Verify.",
            "Ini mekanisme sama dengan verifikasi installer TOR/TAILS — kini kamu bisa kedua sisinya.",
            "Untuk file penting ke orang tertentu: Sign + Encrypt sekaligus (rahasia + asli + utuh)."
          ],
          quiz:{
            title:"Kuis Bab 8 — Enkripsi",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Apa tiga jaminan utama kriptografi?",
               options:["Kecepatan, ukuran, harga","Kerahasiaan, keutuhan, keaslian","Warna, bentuk, format","Cloud, lokal, backup"],
               answer:1,
               explain:"Kriptografi menjamin kerahasiaan (hanya berkunci yang baca), keutuhan (deteksi perubahan), dan keaslian (bukti pengirim)."},
              {q:"Apa kelemahan utama enkripsi simetris?",
               options:["Terlalu lambat","Masalah distribusi kunci — bagaimana membagikan satu kunci rahasia dengan aman","Tidak aman sama sekali","Butuh internet"],
               answer:1,
               explain:"Simetris cepat, tapi kedua pihak butuh kunci rahasia yang sama; membagikannya dengan aman lewat jalur tak aman adalah masalahnya."},
              {q:"Bagaimana enkripsi asimetris memecahkan masalah itu?",
               options:["Dengan kunci lebih panjang","Dengan sepasang kunci: publik disebar untuk mengunci, privat dirahasiakan untuk membuka","Dengan mematikan internet","Dengan kompresi"],
               answer:1,
               explain:"Kunci publik bisa disebar bebas untuk mengunci pesan kepadamu; hanya kunci privatmu yang membuka — tak perlu menukar rahasia lebih dulu."},
              {q:"Sistem nyata seperti PGP/HTTPS sebenarnya memakai…",
               options:["Hanya simetris","Hanya asimetris","Hibrida: asimetris menukar kunci simetris, lalu simetris untuk data","Tanpa enkripsi"],
               answer:2,
               explain:"Hibrida menggabungkan keamanan distribusi kunci (asimetris) dengan kecepatan (simetris) untuk data besar."},
              {q:"Pada tanda tangan digital, kunci mana yang dipakai untuk MENANDATANGANI?",
               options:["Kunci publik","Kunci privat","Passphrase saja","Tidak butuh kunci"],
               answer:1,
               explain:"Menandatangani memakai kunci PRIVAT; memverifikasi memakai kunci PUBLIK — kebalikan dari alur enkripsi."},
              {q:"Apa yang dibuktikan oleh tanda tangan digital yang valid?",
               options:["Pesan itu rahasia","Pesan asli dari pemegang kunci & tidak diubah (keaslian + keutuhan)","Pesan terkirim cepat","Pengirim memakai TOR"],
               answer:1,
               explain:"Tanda tangan membuktikan keaslian & keutuhan, bukan kerahasiaan — pesan bertanda tangan tetap bisa dibaca siapa saja."},
              {q:"'Good signature' saat verifikasi berarti…",
               options:["Pasti dari orang yang dimaksud","Ditandatangani oleh kunci itu — keasliannya tergantung apakah kamu sudah memverifikasi fingerprint-nya","Pesan terenkripsi","File bebas virus"],
               answer:1,
               explain:"Good signature hanya menyatakan kunci mana yang menandatangani; apakah kunci itu benar milik orang yang dimaksud bergantung pada verifikasi fingerprint."}
            ]
          }
        }
      ]
};
