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
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">Untuk obrolan real-time yang anonim, dunia privasi memilih <strong>XMPP</strong> (dulu disebut Jabber) — bukan WhatsApp atau Telegram. Alasannya satu kata: <strong>federasi</strong>. Tidak ada satu perusahaan yang memegang semua penggunanya.</p>

            <h4>Apa itu XMPP</h4>
            <p>XMPP adalah protokol pesan terbuka dan terstandar. Alih-alih satu aplikasi milik satu perusahaan, ada <em>banyak server independen</em> yang bisa saling berbicara — persis seperti email. Alamatmu berbentuk <code>nama@server</code> (disebut JID, mirip alamat email), dan kamu bisa mengobrol dengan orang di server lain tanpa masalah.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Federasi XMPP vs aplikasi terpusat">
                <text x="180" y="22" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="12" font-weight="700">Terpusat (WA/TG)</text>
                <circle cx="180" cy="95" r="26" fill="#15202b" stroke="#fb7185"/>
                <text x="180" y="99" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9">1 server</text>
                <g stroke="#fb7185" stroke-width="1.5">
                  <line x1="180" y1="69" x2="180" y2="44"/><line x1="206" y1="95" x2="246" y2="95"/>
                  <line x1="154" y1="95" x2="114" y2="95"/><line x1="180" y1="121" x2="180" y2="150"/>
                </g>
                <g fill="#9fb4c4" font-family="monospace" font-size="8.5">
                  <text x="180" y="40" text-anchor="middle">pengguna</text><text x="262" y="98" text-anchor="middle">pengguna</text>
                  <text x="100" y="98" text-anchor="middle">pengguna</text><text x="180" y="164" text-anchor="middle">pengguna</text>
                </g>
                <text x="180" y="190" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="8.5">satu pemilik tahu semua</text>

                <line x1="370" y1="30" x2="370" y2="180" stroke="#283643" stroke-width="1" stroke-dasharray="4 4"/>

                <text x="545" y="22" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">Federasi (XMPP)</text>
                <circle cx="470" cy="70" r="20" fill="#15202b" stroke="#5fd98a"/><text x="470" y="74" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="8">server A</text>
                <circle cx="620" cy="70" r="20" fill="#15202b" stroke="#5fd98a"/><text x="620" y="74" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="8">server B</text>
                <circle cx="545" cy="140" r="20" fill="#15202b" stroke="#5fd98a"/><text x="545" y="144" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="8">server C</text>
                <g stroke="#5fd98a" stroke-width="1.5">
                  <line x1="490" y1="70" x2="600" y2="70"/><line x1="478" y1="88" x2="535" y2="122"/><line x1="612" y1="88" x2="555" y2="122"/>
                </g>
                <text x="545" y="190" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="8.5">banyak server saling bicara</text>
              </svg>
              <figcaption>Seperti email: banyak server independen saling terhubung, tak ada satu pemilik yang menguasai semua pengguna.</figcaption>
            </figure>

            <h4>Kenapa federasi lebih baik untuk privasi</h4>
            <ul>
              <li><strong>Tidak ada titik kontrol tunggal.</strong> Pada layanan terpusat, satu perusahaan memegang semua data, metadata, dan bisa menyerahkan/menutupnya. Pada XMPP, kamu bisa memilih (atau bahkan menjalankan) server yang kamu percayai.</li>
              <li><strong>Bebas memilih server.</strong> Kamu bisa pilih server yang ramah privasi, tidak menyimpan log lama, dan dapat diakses lewat .onion.</li>
              <li><strong>Tahan sensor &amp; mati.</strong> Karena tersebar, mematikan satu server tidak mematikan jaringan.</li>
            </ul>

            <h4>Batas yang harus disadari</h4>
            <p>XMPP sendiri <strong>tidak otomatis terenkripsi ujung-ke-ujung</strong>. Server bisa melihat metadata (siapa mengobrol dengan siapa, kapan) dan, tanpa enkripsi tambahan, bahkan isi pesan. Karena itu XMPP selalu dipasangkan dengan enkripsi end-to-end seperti <strong>OTR</strong> atau OMEMO (dibahas berikutnya). Pilih JID dan server di balik <em>persona</em>-mu, dan akses selalu lewat TOR/TAILS.</p>

            <div class="box tip">
              <div class="bx-title">◇ Mirip email, dengan kebiasaan yang sama</div>
              <p>Kalau kamu sudah paham email (Bab 5), XMPP terasa akrab: alamat <code>nama@server</code>, banyak penyedia, butuh enkripsi tambahan untuk isi. Bawa semua disiplin persona &amp; TOR ke sini.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram <strong>federasi XMPP</strong> (banyak server saling terhubung) dan contoh format JID <code>nama@server</code>.</p>
              <p><span class="ir-key">Cari: "xmpp federation diagram", "jabber jid address format"</span></p>
            </div>
          `,
          takeaways:[
            "XMPP/Jabber = protokol pesan terbuka & terfederasi; alamat berbentuk nama@server (JID), mirip email.",
            "Federasi berarti tak ada titik kontrol tunggal — kamu memilih/menjalankan server yang dipercaya.",
            "XMPP tidak otomatis terenkripsi ujung-ke-ujung; server bisa lihat metadata & (tanpa enkripsi) isi.",
            "Selalu pasangkan dengan enkripsi E2E (OTR/OMEMO), di balik persona, dan akses via TOR/TAILS."
          ]
        },
        {
          id:"im-pidgin",
          title:"Menyiapkan XMPP dengan Pidgin di TAILS",
          dur:"praktik · ± 9 menit",
          body:`
            <p class="lead">Pidgin adalah aplikasi chat yang sudah terpasang di TAILS dan dikonfigurasi untuk berjalan lewat TOR. Di sini kamu membuat akun XMPP-mu untuk persona — semuanya anonim sejak detik pertama.</p>

            <h4>Kenapa Pidgin di TAILS</h4>
            <p>Di TAILS, Pidgin otomatis menyalurkan koneksinya lewat TOR, jadi server XMPP tak pernah melihat IP aslimu. Plus, dengan Persistent Storage, akun dan kuncimu bisa bertahan antar-reboot tanpa mengorbankan sifat amnesik sistem.</p>

            <h4>Langkah</h4>
            <ol class="steps">
              <li>Buka <strong>Pidgin</strong> dari menu aplikasi TAILS (Applications → Internet → Pidgin).</li>
              <li>Pilih <em>Accounts → Manage Accounts → Add</em>. Pada "Protocol", pilih <strong>XMPP</strong>.</li>
              <li>Isi <strong>Username</strong> (nama persona-mu), <strong>Domain</strong> (server XMPP pilihanmu), dan kata sandi yang kuat &amp; unik.</li>
              <li>Centang opsi untuk <strong>membuat akun baru di server ini</strong> bila kamu mendaftar pertama kali (register). Beberapa server butuh pendaftaran lewat halaman web mereka.</li>
              <li>Simpan dan hubungkan. Karena lewat TOR, koneksi awal mungkin terasa lebih lambat — itu normal.</li>
              <li>Tambahkan kontak lewat JID mereka (<code>nama@server</code>) dan tunggu mereka menyetujui (mirip "add friend").</li>
            </ol>

            <h4>Memilih server</h4>
            <ul>
              <li>Pilih server XMPP yang <strong>ramah privasi</strong>: kebijakan log minimal, mengizinkan pendaftaran via TOR, dan idealnya punya alamat <code>.onion</code>.</li>
              <li>Hindari mendaftar dengan data asli; tidak semua server meminta verifikasi, dan itu bagus untuk anonimitas.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Koneksi ≠ enkripsi isi</div>
              <p>Pidgin terhubung lewat TOR (koneksi terlindungi), tapi isi pesanmu <strong>belum</strong> terenkripsi ujung-ke-ujung sampai kamu mengaktifkan OTR di materi berikutnya. Jangan mengirim sesuatu yang sensitif sebelum OTR aktif &amp; kontak terverifikasi.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Jendela <strong>Pidgin "Add Account"</strong> dengan protokol XMPP terpilih, dan daftar kontak (buddy list).</p>
              <p><span class="ir-key">Cari: "pidgin add xmpp account", "pidgin buddy list tails"</span></p>
            </div>
          `,
          practice:`<p>Di TAILS, buat satu akun XMPP untuk persona latihanmu di sebuah server ramah-privasi, lalu (idealnya dengan bantuan teman atau akun kedua) tambahkan satu kontak dan kirim pesan "halo". Perhatikan: pada tahap ini pesan belum terenkripsi E2E — itulah kenapa materi berikutnya tentang OTR sangat penting. Simpan akun di Persistent agar tak hilang saat reboot.</p>`,
          takeaways:[
            "Pidgin sudah ada di TAILS & otomatis lewat TOR, jadi server tak melihat IP aslimu.",
            "Buat akun: Accounts → Add → protokol XMPP → isi username persona, domain server, sandi kuat.",
            "Pilih server ramah privasi (log minimal, izinkan TOR, idealnya punya .onion); jangan pakai data asli.",
            "Koneksi via TOR belum berarti isi terenkripsi — aktifkan OTR dulu sebelum kirim hal sensitif."
          ]
        },
        {
          id:"im-otr",
          title:"Mengaktifkan Enkripsi End-to-End (OTR)",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">OTR (<em>Off-the-Record</em>) mengubah obrolan XMPP-mu menjadi percakapan yang hanya bisa dibaca kamu dan lawan bicaramu — bahkan server tidak bisa mengintip. Tapi OTR memberi lebih dari sekadar enkripsi; ia punya empat sifat yang dirancang khusus untuk percakapan sensitif.</p>

            <h4>Empat sifat OTR</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empat sifat OTR">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Yang diberikan OTR</text>
                <g font-family="monospace">
                  <rect x="24" y="44" width="160" height="120" rx="11" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="104" y="74" text-anchor="middle" fill="#4fe0d0" font-size="11" font-weight="700">Enkripsi</text>
                  <text x="104" y="98" text-anchor="middle" fill="#9fb4c4" font-size="9">hanya kamu &amp;</text>
                  <text x="104" y="112" text-anchor="middle" fill="#9fb4c4" font-size="9">lawan bicara</text>
                  <text x="104" y="126" text-anchor="middle" fill="#9fb4c4" font-size="9">yang bisa baca</text>

                  <rect x="196" y="44" width="160" height="120" rx="11" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="276" y="74" text-anchor="middle" fill="#6ad7ff" font-size="11" font-weight="700">Autentikasi</text>
                  <text x="276" y="98" text-anchor="middle" fill="#9fb4c4" font-size="9">yakin kamu bicara</text>
                  <text x="276" y="112" text-anchor="middle" fill="#9fb4c4" font-size="9">dgn orang yang</text>
                  <text x="276" y="126" text-anchor="middle" fill="#9fb4c4" font-size="9">benar (anti-MITM)</text>

                  <rect x="368" y="44" width="160" height="120" rx="11" fill="#15202b" stroke="#f5b748"/>
                  <text x="448" y="74" text-anchor="middle" fill="#f5b748" font-size="11" font-weight="700">Deniability</text>
                  <text x="448" y="98" text-anchor="middle" fill="#9fb4c4" font-size="9">tak bisa dibuktikan</text>
                  <text x="448" y="112" text-anchor="middle" fill="#9fb4c4" font-size="9">ke pihak ketiga</text>
                  <text x="448" y="126" text-anchor="middle" fill="#9fb4c4" font-size="9">siapa menulis apa</text>

                  <rect x="540" y="44" width="160" height="120" rx="11" fill="#15202b" stroke="#5fd98a"/>
                  <text x="620" y="74" text-anchor="middle" fill="#5fd98a" font-size="11" font-weight="700">Forward secrecy</text>
                  <text x="620" y="98" text-anchor="middle" fill="#9fb4c4" font-size="9">kunci bocor pun,</text>
                  <text x="620" y="112" text-anchor="middle" fill="#9fb4c4" font-size="9">pesan LAMA tetap</text>
                  <text x="620" y="126" text-anchor="middle" fill="#9fb4c4" font-size="9">aman</text>
                </g>
                <text x="360" y="186" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Empat pilar untuk percakapan yang benar-benar privat.</text>
              </svg>
              <figcaption>OTR bukan cuma enkripsi: ada autentikasi, deniability, dan perfect forward secrecy.</figcaption>
            </figure>
            <ul>
              <li><strong>Enkripsi</strong> — isi pesan hanya terbaca oleh kamu dan lawan bicara.</li>
              <li><strong>Autentikasi</strong> — kamu bisa memastikan benar-benar berbicara dengan orang yang dimaksud, bukan penyusup (dibahas tuntas di materi verifikasi).</li>
              <li><strong>Deniability (penyangkalan)</strong> — setelah percakapan, tak ada bukti kriptografis yang bisa memaksakan bahwa kamu-lah penulis pesan tertentu.</li>
              <li><strong>Perfect forward secrecy</strong> — kunci berganti terus; bila satu kunci bocor di kemudian hari, pesan-pesan lama tetap tak bisa dibuka.</li>
            </ul>

            <h4>Mengaktifkan OTR di Pidgin</h4>
            <ol class="steps">
              <li>Pastikan plugin <strong>OTR</strong> aktif: <em>Tools → Plugins → Off-the-Record Messaging</em> (di TAILS sudah tersedia). Centang untuk mengaktifkan.</li>
              <li>Di <em>Configure plugin</em>, hasilkan kunci OTR untuk akunmu (sekali saja per akun).</li>
              <li>Buka jendela percakapan dengan kontak, lalu pilih <strong>"Start private conversation"</strong> (atau menu OTR → Start). Status berubah jadi "Private".</li>
              <li>Setelah "Private", isi pesan sudah terenkripsi end-to-end. Tapi belum selesai — kamu masih perlu <strong>memverifikasi</strong> kontak (materi berikutnya) agar status naik jadi "Verified".</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ OTR vs OMEMO</div>
              <p>OTR adalah standar klasik dan mudah dipahami. Alternatif yang lebih modern adalah <strong>OMEMO</strong> (berbasis protokol Signal) yang mendukung banyak perangkat dan pesan offline. Konsepnya sama (E2E, forward secrecy, verifikasi); pilih yang didukung klien &amp; kontakmu. Untuk Pidgin di TAILS, OTR adalah jalur paling langsung.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu <strong>OTR di Pidgin</strong> ("Start private conversation") dan indikator status percakapan berubah menjadi "Private"/"Unverified".</p>
              <p><span class="ir-key">Cari: "pidgin otr start private conversation", "pidgin otr unverified"</span></p>
            </div>
          `,
          takeaways:[
            "OTR memberi empat hal: enkripsi, autentikasi, deniability, dan perfect forward secrecy.",
            "Forward secrecy = kunci bocor di kemudian hari tetap tak membuka pesan lama.",
            "Aktifkan plugin OTR di Pidgin, hasilkan kunci, lalu 'Start private conversation' → status 'Private'.",
            "OMEMO adalah alternatif modern; apa pun pilihannya, status belum aman penuh sampai kontak diverifikasi."
          ]
        },
        {
          id:"im-verify",
          title:"Memverifikasi Kontak (Anti Man-in-the-Middle)",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Enkripsi tanpa verifikasi punya lubang: bagaimana kamu yakin yang di ujung sana benar orangnya, bukan penyusup yang menyamar? Inilah ancaman <strong>man-in-the-middle (MITM)</strong>, dan verifikasi kontak adalah cara menutupnya.</p>

            <h4>Bagaimana serangan MITM bekerja</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Serangan man-in-the-middle">
                <defs><marker id="arm" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#fb7185"/></marker></defs>
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tanpa verifikasi: penyusup bisa menyelinap</text>
                <g font-family="monospace" font-size="10.5">
                  <rect x="20" y="70" width="120" height="44" rx="9" fill="#15202b" stroke="#34475a"/><text x="80" y="96" text-anchor="middle" fill="#e9f1f7">Kamu</text>
                  <rect x="300" y="70" width="120" height="44" rx="9" fill="#15202b" stroke="#fb7185"/><text x="360" y="90" text-anchor="middle" fill="#fb7185" font-weight="700">Penyusup</text><text x="360" y="104" text-anchor="middle" fill="#9fb4c4" font-size="8.5">menyamar 2 arah</text>
                  <rect x="580" y="70" width="120" height="44" rx="9" fill="#15202b" stroke="#34475a"/><text x="640" y="96" text-anchor="middle" fill="#e9f1f7">Kontak</text>
                </g>
                <g stroke="#fb7185" stroke-width="2" marker-end="url(#arm)">
                  <line x1="140" y1="92" x2="296" y2="92"/><line x1="420" y1="92" x2="576" y2="92"/>
                </g>
                <text x="360" y="150" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Kedua sisi merasa "terenkripsi" — padahal penyusup membaca semuanya di tengah.</text>
              </svg>
              <figcaption>Penyusup membuka dua sesi terenkripsi terpisah dan menyampaikan ulang pesan — kecuali kamu memverifikasi identitas.</figcaption>
            </figure>
            <p>Penyusup yang menguasai jalur bisa berpura-pura menjadi "kamu" di hadapan kontakmu, dan menjadi "kontakmu" di hadapanmu. Keduanya merasa percakapannya terenkripsi, padahal penyusup membaca dan bahkan mengubah pesan di tengah. Enkripsi saja tidak mendeteksi ini — yang mendeteksi adalah <strong>verifikasi identitas</strong>.</p>

            <h4>Dua cara memverifikasi di OTR</h4>
            <ul>
              <li><strong>Cocokkan fingerprint.</strong> Setiap kunci OTR punya "sidik jari" (deretan karakter). Bandingkan fingerprint kontakmu lewat <em>saluran kedua yang tepercaya</em> — misalnya bertemu langsung, telepon suara yang kamu kenal, atau pesan ber-tanda tangan PGP. Bila cocok, tandai sebagai verified.</li>
              <li><strong>Pertanyaan rahasia (SMP — Socialist Millionaire Protocol).</strong> Kalian berdua memasukkan jawaban atas sebuah rahasia bersama yang hanya kalian tahu. OTR membandingkannya secara kriptografis tanpa membocorkan jawabannya. Bila cocok, identitas terverifikasi — cara praktis tanpa harus menukar fingerprint panjang.</li>
            </ul>

            <h4>Langkah di Pidgin</h4>
            <ol class="steps">
              <li>Dalam percakapan yang sudah "Private", buka menu <strong>OTR → Authenticate buddy</strong>.</li>
              <li>Pilih metode: <em>"Question and answer"</em> (SMP), <em>"Shared secret"</em>, atau <em>"Manual fingerprint verification"</em>.</li>
              <li>Untuk SMP: ajukan pertanyaan yang jawabannya hanya kalian berdua tahu. Untuk fingerprint: cocokkan deretan karakter lewat saluran tepercaya lain.</li>
              <li>Bila berhasil, status percakapan naik dari "Unverified" menjadi <strong>"Verified"</strong>. Sekarang kamu yakin tak ada penyusup di tengah.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Verifikasi lewat saluran berbeda</div>
              <p>Jangan memverifikasi fingerprint lewat saluran yang sama dengan obrolanmu — bila penyusup mengendalikan jalur itu, ia bisa memalsukan fingerprint juga. Gunakan saluran kedua yang independen. Untuk SMP, pastikan rahasianya benar-benar hanya diketahui kalian dan tidak mudah ditebak.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Dialog <strong>"Authenticate Buddy"</strong> di Pidgin (pilihan Question/Shared secret/Fingerprint) dan status percakapan "Verified".</p>
              <p><span class="ir-key">Cari: "pidgin otr authenticate buddy", "otr verified conversation"</span></p>
            </div>
          `,
          practice:`<p>Dengan satu kontak (atau akun keduamu), lakukan verifikasi OTR memakai metode SMP: ajukan pertanyaan yang jawabannya hanya kalian tahu, dan pastikan status berubah menjadi "Verified". Lalu coba juga membandingkan fingerprint lewat saluran kedua (mis. tuliskan di kertas/pesan PGP). Rasakan bedanya antara "terenkripsi tapi belum tentu benar orangnya" dan "terenkripsi + terverifikasi".</p>`,
          takeaways:[
            "Enkripsi tanpa verifikasi rawan man-in-the-middle: penyusup menyamar di dua sisi sekaligus.",
            "Verifikasi OTR: cocokkan fingerprint lewat saluran kedua tepercaya, atau pakai SMP (pertanyaan rahasia bersama).",
            "Di Pidgin: OTR → Authenticate buddy → status naik dari 'Unverified' ke 'Verified'.",
            "Jangan verifikasi lewat saluran yang sama dengan obrolan; pakai jalur independen."
          ],
          quiz:{
            title:"Kuis Bab 6 — Instant Messaging",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Apa keunggulan utama XMPP dibanding aplikasi chat terpusat untuk privasi?",
               options:["Lebih banyak stiker","Terfederasi — tak ada titik kontrol tunggal, kamu pilih/percaya servernya","Selalu gratis","Tidak butuh internet"],
               answer:1,
               explain:"XMPP terfederasi seperti email: banyak server independen saling terhubung, sehingga tak ada satu perusahaan yang menguasai semua pengguna & data."},
              {q:"Format alamat (JID) pada XMPP mirip dengan…",
               options:["Nomor telepon","Alamat email: nama@server","URL situs web","Nomor rekening"],
               answer:1,
               explain:"JID berbentuk nama@server, persis pola alamat email — itulah kenapa XMPP terasa akrab bila kamu paham email."},
              {q:"Apakah koneksi Pidgin lewat TOR sudah berarti isi pesan terenkripsi ujung-ke-ujung?",
               options:["Ya, otomatis","Belum — perlu mengaktifkan OTR/OMEMO untuk enkripsi isi","Hanya untuk gambar","Hanya jika memakai .onion"],
               answer:1,
               explain:"TOR melindungi koneksi (IP), tapi isi belum terenkripsi E2E sampai kamu mengaktifkan OTR atau OMEMO."},
              {q:"Apa yang dimaksud 'perfect forward secrecy' pada OTR?",
               options:["Pesan terkirim lebih cepat","Bila kunci bocor kelak, pesan-pesan LAMA tetap tak bisa dibuka","Pesan otomatis terhapus","Tidak butuh kata sandi"],
               answer:1,
               explain:"Kunci terus berganti, sehingga kompromi satu kunci di masa depan tidak membongkar percakapan lama."},
              {q:"Kenapa verifikasi kontak diperlukan meski sudah terenkripsi?",
               options:["Agar pesan lebih cepat","Untuk mencegah man-in-the-middle — memastikan kamu bicara dengan orang yang benar","Untuk menambah teman","Untuk backup pesan"],
               answer:1,
               explain:"Enkripsi tidak mendeteksi penyusup yang menyamar di dua sisi; verifikasi identitas (fingerprint/SMP) yang menutup celah MITM."},
              {q:"Saat memverifikasi fingerprint OTR, sebaiknya dilakukan lewat…",
               options:["Saluran obrolan yang sama","Saluran kedua yang independen & tepercaya","Tidak perlu, langsung percaya","Email sementara"],
               answer:1,
               explain:"Bila penyusup menguasai jalur obrolan, ia bisa memalsukan fingerprint juga. Gunakan saluran independen (tatap muka, suara dikenal, atau PGP)."}
            ]
          }
        }
      ]
};
