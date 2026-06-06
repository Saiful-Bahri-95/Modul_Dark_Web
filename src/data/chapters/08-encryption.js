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
    };
