/* Bab 6 — id: "im"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
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
    };
