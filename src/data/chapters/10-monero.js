/* Bab 10 — id: "monero"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"monero",
      title:"Cryptocurrency — Monero",
      lectures:[
        {
          id:"xmr-intro",
          title:"Mengenal Monero — Privasi by Default",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">Kalau Bitcoin adalah buku besar transparan tempat semua bisa mengintip, Monero adalah kebalikannya: privasi bukan fitur tambahan, melainkan <strong>bawaan yang tak bisa dimatikan</strong>. Setiap transaksi Monero menyembunyikan pengirim, penerima, dan jumlah — secara default, untuk semua orang.</p>

            <h4>Tiga teknologi yang membuatnya privat</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga teknologi privasi Monero">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Monero menyembunyikan ketiganya, otomatis</text>
                <g font-family="monospace">
                  <rect x="24" y="46" width="216" height="130" rx="12" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="132" y="74" text-anchor="middle" fill="#4fe0d0" font-size="11" font-weight="700">Ring Signatures</text>
                  <text x="132" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">menyamarkan PENGIRIM</text>
                  <text x="132" y="118" text-anchor="middle" fill="#9fb4c4" font-size="9.5">tanda tangan bercampur</text>
                  <text x="132" y="134" text-anchor="middle" fill="#9fb4c4" font-size="9.5">dgn banyak "umpan"</text>
                  <text x="132" y="156" text-anchor="middle" fill="#5fd98a" font-size="9">siapa yang benar? kabur</text>

                  <rect x="252" y="46" width="216" height="130" rx="12" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="74" text-anchor="middle" fill="#6ad7ff" font-size="11" font-weight="700">Stealth Addresses</text>
                  <text x="360" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">menyamarkan PENERIMA</text>
                  <text x="360" y="118" text-anchor="middle" fill="#9fb4c4" font-size="9.5">alamat sekali-pakai unik</text>
                  <text x="360" y="134" text-anchor="middle" fill="#9fb4c4" font-size="9.5">tiap transaksi</text>
                  <text x="360" y="156" text-anchor="middle" fill="#5fd98a" font-size="9">tak terlihat di ledger</text>

                  <rect x="480" y="46" width="216" height="130" rx="12" fill="#15202b" stroke="#f5b748"/>
                  <text x="588" y="74" text-anchor="middle" fill="#f5b748" font-size="11" font-weight="700">RingCT</text>
                  <text x="588" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">menyamarkan JUMLAH</text>
                  <text x="588" y="118" text-anchor="middle" fill="#9fb4c4" font-size="9.5">nilai transaksi</text>
                  <text x="588" y="134" text-anchor="middle" fill="#9fb4c4" font-size="9.5">tersembunyi</text>
                  <text x="588" y="156" text-anchor="middle" fill="#5fd98a" font-size="9">tetap bisa diverifikasi</text>
                </g>
              </svg>
              <figcaption>Ring signatures (pengirim) + stealth addresses (penerima) + RingCT (jumlah) = privasi menyeluruh secara default.</figcaption>
            </figure>

            <ul>
              <li><strong>Ring signatures</strong> — saat kamu mengirim, tanda tanganmu dicampur dengan sejumlah "umpan" (decoy) dari pengguna lain. Pengamat melihat sekelompok kemungkinan pengirim tanpa bisa memastikan mana yang asli.</li>
              <li><strong>Stealth addresses</strong> — untuk tiap transaksi, dibuat alamat penerima sekali-pakai yang unik. Bahkan bila kamu memberikan alamat publikmu ke banyak orang, transaksi ke kamu tidak terlihat saling terkait di ledger.</li>
              <li><strong>RingCT (Ring Confidential Transactions)</strong> — menyembunyikan <em>jumlah</em> yang ditransaksikan, sambil tetap memungkinkan jaringan memverifikasi bahwa tidak ada koin yang diciptakan dari udara.</li>
            </ul>

            <h4>Bitcoin vs Monero — beda filosofi</h4>
            <p>Di Bitcoin, privasi adalah <em>usaha tambahan</em> yang harus kamu kejar (alamat baru, kebiasaan, dan tetap rentan chain analysis). Di Monero, privasi adalah <em>kondisi default</em> yang berlaku untuk semua transaksi sekaligus — yang justru memperkuat semua orang, karena tidak ada "transaksi transparan" yang bisa dijadikan titik banding. Inilah kenapa Monero disebut privacy coin paling kuat saat ini.</p>

            <div class="box tip">
              <div class="bx-title">◇ Fungibility — bonus penting</div>
              <p>Karena semua koin Monero tak bisa dibedakan riwayatnya, Monero bersifat <strong>fungible</strong>: satu XMR selalu setara satu XMR. Bandingkan Bitcoin, di mana koin yang pernah lewat alamat "bermasalah" bisa ditolak/dianggap "tercemar". Di Monero, masalah "koin tercemar" praktis tidak ada.</p>
            </div>

            <div class="box danger">
              <div class="bx-title">⚠ Bukan nasihat hukum/finansial</div>
              <p>Monero legal dimiliki &amp; dipakai di banyak negara, tapi tekanan regulasi membuatnya di-<em>delist</em> dari sejumlah bursa, dan aturannya berbeda tiap yurisdiksi. Materi ini edukatif. Selalu cek aturan terbaru di wilayahmu; privasi yang kuat tetap harus dipakai untuk tujuan yang sah.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram tiga teknologi Monero (ring signatures, stealth address, RingCT) dan perbandingan ledger Bitcoin (transparan) vs Monero (tersamarkan).</p>
              <p><span class="ir-key">Cari: "monero ring signatures stealth address ringct diagram", "bitcoin vs monero privacy"</span></p>
            </div>
          `,
          takeaways:[
            "Monero menyembunyikan pengirim, penerima, dan jumlah secara DEFAULT untuk semua transaksi.",
            "Tiga teknologi: ring signatures (pengirim), stealth addresses (penerima), RingCT (jumlah).",
            "Beda filosofi: di Bitcoin privasi adalah usaha tambahan; di Monero privasi adalah kondisi bawaan.",
            "Monero fungible (tak ada 'koin tercemar'); legal di banyak tempat tapi sering di-delist — cek aturan setempat."
          ]
        },
        {
          id:"xmr-wallet-create",
          title:"Membuat Dompet Monero",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Membuat dompet Monero mirip Bitcoin, dengan beberapa istilah khas. Yang terpenting tetap sama: amankan seed phrase-mu, karena ia adalah satu-satunya kunci ke seluruh danamu.</p>

            <h4>Pilihan dompet</h4>
            <ul>
              <li><strong>Monero GUI/CLI resmi</strong> (getmonero.org) — dompet penuh resmi; GUI ramah pemula, CLI untuk pengguna lanjutan.</li>
              <li><strong>Feather Wallet</strong> — dompet ringan yang populer untuk privasi, mudah dijalankan lewat TOR dan cocok di TAILS.</li>
            </ul>
            <p>Apa pun pilihannya: unduh dari sumber resmi dan <strong>verifikasi tanda tangannya</strong> (kebiasaan Bab 1/8).</p>

            <h4>Istilah khas Monero</h4>
            <ul>
              <li><strong>Seed 25 kata</strong> — Monero memakai mnemonic 25 kata (berbeda dari 12/24 kata gaya BIP39). Fungsinya sama: kunci induk &amp; cara pemulihan.</li>
              <li><strong>Restore height</strong> — "tinggi blok" tempat dompet mulai memindai saat dipulihkan; mempercepat sinkronisasi (dibahas di materi pulih).</li>
              <li><strong>View key &amp; spend key</strong> — Monero memisahkan kunci untuk <em>melihat</em> transaksi masuk (view) dan untuk <em>membelanjakan</em> (spend). View key bisa dibagikan untuk audit tanpa memberi kuasa membelanjakan.</li>
            </ul>

            <h4>Langkah</h4>
            <ol class="steps">
              <li>Unduh &amp; verifikasi dompet (Feather atau Monero GUI), idealnya jalankan dari TAILS / lewat TOR.</li>
              <li>Pilih <strong>"Create new wallet"</strong>, beri nama &amp; kata sandi file dompet.</li>
              <li>Dompet menampilkan <strong>seed 25 kata</strong>. Tulis offline di kertas — jangan difoto/diketik ke perangkat online.</li>
              <li>Catat juga <strong>restore height</strong> (atau tanggal pembuatan) untuk mempermudah pemulihan nanti.</li>
              <li>Selesaikan; dompet akan menyinkronkan dengan jaringan (bisa makan waktu).</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Seed 25 kata = seluruh danamu</div>
              <p>Sama seperti Bitcoin: tak ada reset, tak ada dukungan pelanggan yang bisa memulihkan seed hilang. Bocor = dicuri, hilang = lenyap. Simpan offline dengan aman, dan jangan pernah memasukkannya ke situs yang memintanya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tampilan <strong>Feather Wallet / Monero GUI</strong> saat membuat dompet dan menampilkan seed 25 kata (diblur).</p>
              <p><span class="ir-key">Cari: "feather wallet create", "monero gui 25 word seed"</span></p>
            </div>
          `,
          practice:`<p>Buat dompet Monero latihan (Feather atau GUI resmi) setelah memverifikasi unduhannya. Tulis seed 25 kata di kertas dan catat restore height-nya. Jangan simpan saldo nyata dulu — tujuan latihan ini memahami alur pembuatan, istilah khas (view/spend key, restore height), dan kebiasaan mengamankan seed.</p>`,
          takeaways:[
            "Pilihan dompet: Monero GUI/CLI resmi atau Feather (ringan, cocok TOR/TAILS); selalu verifikasi unduhan.",
            "Istilah khas: seed 25 kata, restore height, serta view key (lihat) vs spend key (belanja) yang terpisah.",
            "Tulis seed 25 kata offline & catat restore height; jangan difoto atau dimasukkan ke situs.",
            "Seed = seluruh dana; tak ada reset — amankan seperti tabunganmu."
          ]
        },
        {
          id:"xmr-restore-tails",
          title:"Memulihkan Dompet Monero di TAILS",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Karena TAILS amnesik, memulihkan dompet dari seed adalah keterampilan rutin — dan menjalankan Monero di TAILS menggabungkan privasi coin dengan privasi sistem. Mari satukan keduanya.</p>

            <h4>Kenapa memulihkan di TAILS</h4>
            <p>Di TAILS, semua trafik lewat TOR dan tak ada jejak tertinggal setelah reboot. Menjalankan dompet Monero di sini berarti aktivitasmu terlindungi di dua lapis: privasi transaksi (Monero) + privasi jaringan/sistem (TAILS). Dengan Persistent Storage, kamu bisa menyimpan file dompet agar tak perlu memulihkan dari seed tiap kali.</p>

            <h4>Langkah memulihkan</h4>
            <ol class="steps">
              <li>Jalankan dompet (mis. Feather) di TAILS. Pilih <strong>"Restore wallet from seed"</strong>.</li>
              <li>Masukkan <strong>seed 25 kata</strong>-mu dengan teliti (urutan &amp; ejaan penting).</li>
              <li>Isi <strong>restore height</strong> (atau perkiraan tanggal). Ini membuat dompet hanya memindai dari titik itu, jauh lebih cepat daripada memindai seluruh blockchain dari awal.</li>
              <li>Tetapkan kata sandi file dompet, lalu biarkan sinkronisasi berjalan lewat TOR.</li>
              <li>Untuk pemakaian berulang, simpan file dompet di <strong>Persistent Storage</strong> (tetap terlindungi passphrase Persistent).</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Sinkronisasi lewat TOR memang lebih lambat</div>
              <p>Memindai blockchain Monero lewat TOR bisa terasa lambat — itu wajar. Mengisi restore height yang benar sangat membantu. Bersabarlah; privasi sepadan dengan sedikit waktu ekstra.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Node: bawaan vs sendiri</div>
              <p>Dompet ringan terhubung ke "node" untuk berinteraksi dengan jaringan. Node pihak ketiga bisa melihat sebagian metadata koneksimu (bukan isi transaksi privatmu). Untuk privasi maksimal, pengguna lanjutan menjalankan node sendiri; bagi kebanyakan orang, node tepercaya lewat TOR sudah memadai.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Layar <strong>"Restore from seed"</strong> (kolom 25 kata + restore height) dan dompet Monero menyinkron di TAILS.</p>
              <p><span class="ir-key">Cari: "feather wallet restore seed height", "monero wallet tails tor"</span></p>
            </div>
          `,
          practice:`<p>Di TAILS, pulihkan dompet latihanmu dari seed 25 kata, isi restore height yang kamu catat, dan biarkan menyinkron lewat TOR. Lalu simpan file dompet di Persistent dan reboot untuk memastikan dompet bisa dibuka kembali tanpa memulihkan ulang. Ini melatih alur kerja Monero-di-TAILS yang sesungguhnya.</p>`,
          takeaways:[
            "Menjalankan Monero di TAILS = privasi transaksi (coin) + privasi jaringan/sistem (TAILS).",
            "Pulihkan: Restore from seed → masukkan 25 kata → isi restore height (mempercepat sinkronisasi) → set sandi.",
            "Simpan file dompet di Persistent agar tak memulihkan dari seed tiap kali.",
            "Sinkron lewat TOR lebih lambat (wajar); node pihak ketiga lihat sebagian metadata — node sendiri = privasi maksimal."
          ]
        },
        {
          id:"xmr-acquire",
          title:"Cara Memperoleh Monero (dan Trade-off-nya)",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">Memperoleh Monero punya beberapa jalur, masing-masing dengan keseimbangan berbeda antara kemudahan, privasi, dan kepatuhan. Tidak ada yang sempurna; pilih sesuai kebutuhan &amp; hukum setempat.</p>

            <h4>Jalur umum</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trade-off cara memperoleh Monero">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Kemudahan vs Privasi</text>
                <g font-family="monospace" font-size="9.5">
                  <rect x="30" y="46" width="200" height="120" rx="11" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="130" y="70" text-anchor="middle" fill="#6ad7ff" font-weight="700">Bursa (KYC)</text>
                  <text x="130" y="92" text-anchor="middle" fill="#5fd98a">+ mudah, fiat langsung</text>
                  <text x="130" y="110" text-anchor="middle" fill="#fb7185">- KYC, sering delist XMR</text>
                  <text x="130" y="128" text-anchor="middle" fill="#9fb4c4">identitas tertaut</text>

                  <rect x="260" y="46" width="200" height="120" rx="11" fill="#15202b" stroke="#f5b748"/>
                  <text x="360" y="70" text-anchor="middle" fill="#f5b748" font-weight="700">Swap / penukar</text>
                  <text x="360" y="92" text-anchor="middle" fill="#5fd98a">+ tukar BTC→XMR cepat</text>
                  <text x="360" y="110" text-anchor="middle" fill="#9fb4c4">~ KYC bervariasi</text>
                  <text x="360" y="128" text-anchor="middle" fill="#9fb4c4">cek reputasi penukar</text>

                  <rect x="490" y="46" width="200" height="120" rx="11" fill="#15202b" stroke="#5fd98a"/>
                  <text x="590" y="70" text-anchor="middle" fill="#5fd98a" font-weight="700">P2P / atomic swap</text>
                  <text x="590" y="92" text-anchor="middle" fill="#5fd98a">+ privasi lebih tinggi</text>
                  <text x="590" y="110" text-anchor="middle" fill="#fb7185">- risiko penipuan/teknis</text>
                  <text x="590" y="128" text-anchor="middle" fill="#9fb4c4">butuh kehati-hatian</text>
                </g>
                <text x="360" y="188" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Makin privat biasanya makin ribet/berisiko — pilih sesuai threat model & hukummu.</text>
              </svg>
              <figcaption>Bursa mudah tapi ber-KYC; swap di tengah; P2P/atomic swap lebih privat tapi menuntut kehati-hatian.</figcaption>
            </figure>

            <ul>
              <li><strong>Bursa terdaftar (KYC).</strong> Paling mudah membeli dengan Rupiah, tapi identitasmu tertaut, dan banyak bursa kini <strong>men-delist Monero</strong> karena tekanan regulasi. Ketersediaan bervariasi.</li>
              <li><strong>Penukar instan (swap).</strong> Menukar koin lain (mis. BTC) ke XMR. Tingkat KYC berbeda-beda; pilih yang bereputasi dan waspada penipuan.</li>
              <li><strong>P2P / atomic swap.</strong> Membeli langsung dari orang, atau menukar BTC↔XMR secara terdesentralisasi (atomic swap). Privasi lebih tinggi, tapi butuh kehati-hatian teknis &amp; anti-penipuan.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Ingat: legal use</div>
              <p>Memperoleh &amp; memiliki Monero lewat jalur sah adalah hal yang legal di banyak tempat; yang dilarang tetap penyalahgunaannya. Patuhi aturan &amp; kewajiban pajak/pelaporan yurisdiksimu, dan utamakan platform yang sah.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tabel perbandingan jalur memperoleh Monero (bursa/swap/P2P) dengan kolom kemudahan, KYC, privasi.</p>
              <p><span class="ir-key">Cari: "how to buy monero comparison", "monero atomic swap"</span></p>
            </div>
          `,
          takeaways:[
            "Tiga jalur: bursa KYC (mudah, identitas tertaut, sering delist XMR), penukar/swap (di tengah), P2P/atomic swap (privat, butuh hati-hati).",
            "Makin privat biasanya makin ribet/berisiko — pilih sesuai threat model & hukum setempat.",
            "Atomic swap memungkinkan tukar BTC↔XMR secara terdesentralisasi.",
            "Memperoleh & memiliki via jalur sah itu legal di banyak tempat; patuhi aturan & pajak setempat."
          ]
        },
        {
          id:"xmr-exchanges",
          title:"Crypto-exchange — Menukar Satu Koin ke Koin Lain",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Sering kali kamu sudah punya satu koin (mis. Bitcoin) dan ingin menukarnya ke Monero, atau sebaliknya. Di sinilah <strong>penukar (exchange/swap)</strong> berperan. Memahami jenis &amp; jejaknya membantumu memilih dengan bijak.</p>

            <h4>Dua model penukar</h4>
            <ul>
              <li><strong>Bursa terpusat (CEX).</strong> Kamu menyetor koin ke platform, menukar, lalu menarik. Praktis &amp; likuiditas besar, tapi umumnya ber-KYC dan menyimpan log; banyak yang men-delist Monero.</li>
              <li><strong>Penukar instan (instant swap).</strong> Layanan yang menukar koin "lewat" tanpa membuat akun penuh — kamu kirim koin A, terima koin B di alamat yang kamu tentukan. Tingkat KYC bervariasi; beberapa minimal, beberapa meminta verifikasi bila transaksi ditandai.</li>
            </ul>

            <h4>Contoh alur BTC → XMR (instant swap)</h4>
            <ol class="steps">
              <li>Buka penukar bereputasi (idealnya lewat TOR/Tor Browser), pilih pasangan BTC → XMR.</li>
              <li>Masukkan <strong>alamat Monero tujuan</strong>-mu (dompet yang kamu kontrol).</li>
              <li>Penukar memberi alamat BTC untuk kamu kirimi; kirim BTC-mu ke sana.</li>
              <li>Setelah konfirmasi, penukar mengirim XMR ke alamatmu. Begitu masuk ke Monero, sifat privasi default mulai berlaku.</li>
            </ol>

            <h4>Hal yang perlu diperiksa</h4>
            <ul>
              <li><strong>Reputasi &amp; keaslian situs</strong> — penukar palsu/phishing marak. Verifikasi alamat situs (Bab 3), waspadai clone.</li>
              <li><strong>Kurs &amp; biaya</strong> — bandingkan; kurs buruk = biaya tersembunyi.</li>
              <li><strong>Kebijakan KYC/refund</strong> — pahami apa yang terjadi bila transaksi "ditahan" untuk verifikasi.</li>
              <li><strong>Jejak di sisi BTC</strong> — ingat, sisi Bitcoin dari transaksi tetap transparan &amp; bisa dianalisis; privasi penuh baru berlaku di sisi Monero.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Akses lewat TOR</div>
              <p>Apa pun penukarnya, mengaksesnya lewat TOR/Tor Browser mencegah penautan IP. Banyak layanan privasi bahkan menyediakan alamat .onion resmi — verifikasi dari sumber resmi mereka.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Antarmuka <strong>instant swap</strong> (pilih pasangan, masukkan alamat tujuan, dapat alamat setor) untuk alur BTC→XMR.</p>
              <p><span class="ir-key">Cari: "instant crypto swap btc to xmr interface"</span></p>
            </div>
          `,
          takeaways:[
            "Dua model: bursa terpusat (KYC, likuid, sering delist XMR) dan penukar instan (akun minimal, KYC bervariasi).",
            "Alur BTC→XMR: pilih pasangan → beri alamat XMR tujuan → kirim BTC ke alamat setor → terima XMR.",
            "Periksa reputasi/keaslian situs (anti-clone), kurs & biaya, serta kebijakan KYC/refund.",
            "Sisi Bitcoin tetap transparan; privasi penuh baru berlaku setelah masuk Monero — akses lewat TOR."
          ]
        },
        {
          id:"xmr-anonymity-reality",
          title:"Privacy Coin: Kekuatan, Batas & Realitas Hukum",
          dur:"konsep penting · ± 8 menit",
          body:`
            <p class="lead">Monero memang privacy coin terkuat, tapi "kuat" bukan berarti "ajaib" atau "bebas konsekuensi". Materi ini menyeimbangkan: apa yang benar-benar dilindungi Monero, di mana batasnya, dan realitas hukum yang harus kamu sadari.</p>

            <h4>Yang dilindungi vs yang tidak</h4>
            <ul>
              <li><strong>Dilindungi (di dalam Monero):</strong> pengirim, penerima, dan jumlah transaksi tersembunyi secara default. Ini perlindungan kuat yang tidak dimiliki Bitcoin.</li>
              <li><strong>Tidak otomatis terlindungi:</strong> <em>metadata jaringan</em> (IP saat berinteraksi dengan node) — karena itu tetap pakai TOR/TAILS. Dan <em>titik sentuh dunia nyata</em>: saat kamu menukar XMR ke fiat lewat bursa KYC, atau memakai IP/identitas asli, kamu bisa menautkan dirimu.</li>
              <li><strong>OPSEC tetap menentukan:</strong> coin paling privat pun gagal bila kebiasaanmu (login asli, alamat dibagikan sembarangan, perangkat terinfeksi) membongkarmu. Privasi adalah rantai; Monero memperkuat satu mata rantai, bukan semuanya.</li>
            </ul>

            <h4>Realitas hukum &amp; regulasi</h4>
            <div class="box danger">
              <div class="bx-title">⚠ Baca dengan saksama</div>
              <p>Memiliki &amp; memakai Monero <strong>legal di banyak negara</strong>, tapi menghadapi tekanan regulasi: sejumlah bursa men-<em>delist</em>-nya, beberapa yurisdiksi membatasi/melarang privacy coin, dan aturan terus berubah. Status legal di satu negara tidak berlaku universal. Yang membuat sesuatu ilegal tetap <strong>perbuatannya</strong> (pencucian uang, transaksi barang terlarang) — bukan teknologinya — tapi memakai privacy coin bisa menarik perhatian regulator. Selalu periksa hukum yurisdiksimu &amp; patuhi kewajiban pajak/pelaporan.</p>
            </div>

            <h4>Pemakaian yang sah &amp; wajar</h4>
            <p>Privacy coin punya banyak kegunaan sah: melindungi gaji/donasi dari pengintaian, menjaga jurnalis &amp; aktivis, mencegah pelacakan komersial atas kebiasaan belanja, dan menjaga keamanan pribadi (tidak mengumumkan kekayaan). Menginginkan privasi finansial bukan tanda berbuat salah — selama caranya sah.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kesimpulan berimbang</div>
              <p>Monero = alat privasi finansial terbaik secara teknis, tapi tetap satu bagian dari sistem yang lebih besar (TOR, TAILS, OPSEC, kepatuhan hukum). Pakai sebagai bagian dari strategi menyeluruh untuk tujuan yang sah, bukan sebagai "tongkat ajaib" yang membebaskan dari konsekuensi.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Infografis "yang dilindungi vs tidak" oleh Monero, dan peta status regulasi privacy coin (ilustratif).</p>
              <p><span class="ir-key">Cari: "monero what it hides limits", "privacy coin regulation map"</span></p>
            </div>
          `,
          takeaways:[
            "Monero melindungi pengirim/penerima/jumlah, tapi TIDAK otomatis melindungi metadata jaringan & titik sentuh dunia nyata.",
            "Tetap pakai TOR/TAILS & OPSEC; coin privat pun gagal bila kebiasaanmu membongkar identitas.",
            "Legal di banyak negara tapi menghadapi delisting & pembatasan; status berbeda tiap yurisdiksi — cek hukum setempat.",
            "Privacy coin punya banyak kegunaan sah; pakai sebagai bagian strategi menyeluruh untuk tujuan yang sah."
          ]
        },
        {
          id:"xmr-conclusion",
          title:"Penutup Monero",
          dur:"ringkasan · ± 5 menit",
          body:`
            <p class="lead">Mari rangkum: Monero adalah lompatan besar dalam privasi finansial karena menjadikan privasi sebagai bawaan, bukan usaha. Tapi ia bekerja paling baik sebagai bagian dari keseluruhan yang sudah kamu pelajari.</p>

            <h4>Inti yang perlu kamu bawa</h4>
            <ul>
              <li><strong>Privasi by default</strong> lewat ring signatures (pengirim), stealth addresses (penerima), dan RingCT (jumlah) — plus fungibility yang membebaskan dari masalah "koin tercemar".</li>
              <li><strong>Amankan seed 25 kata</strong> persis seperti Bitcoin: offline, tak pernah dibagikan, tak ada reset.</li>
              <li><strong>Jalankan di TAILS / lewat TOR</strong> untuk menutup celah metadata jaringan yang tidak dilindungi coin.</li>
              <li><strong>Sadari batas &amp; hukum</strong>: titik sentuh dunia nyata bisa membongkarmu; status legal beragam &amp; berubah.</li>
            </ul>

            <h4>Bagaimana Monero melengkapi kursus ini</h4>
            <p>Lihat pola besarnya: TOR menyembunyikan jaringan, TAILS menyembunyikan jejak sistem, PGP mengamankan komunikasi, dan Monero mengamankan dimensi finansial. Masing-masing menutup satu permukaan; bersama-sama mereka membentuk OPSEC yang utuh. Tidak ada satu alat yang cukup sendirian — kekuatannya ada pada kombinasi yang cocok dengan threat model-mu (Bab 4).</p>

            <div class="box tip">
              <div class="bx-title">◇ Langkah berikutnya</div>
              <p>Bab terakhir, Qubes OS, mengangkat semuanya ke level isolasi: menjalankan tiap aktivitas dalam "kompartemen" virtual terpisah sehingga satu kompromi tidak meruntuhkan yang lain. Itu menyatukan semua tema kursus ini menjadi satu lingkungan kerja yang tangguh.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Infografis ringkasan "tumpukan privasi": TOR + TAILS + PGP + Monero sebagai lapisan yang saling melengkapi.</p>
              <p><span class="ir-key">Cari: "privacy stack tor tails pgp monero"</span></p>
            </div>
          `,
          takeaways:[
            "Monero = privasi finansial by-default (ring sig + stealth + RingCT) plus fungibility.",
            "Amankan seed 25 kata offline; jalankan via TAILS/TOR untuk menutup celah metadata jaringan.",
            "Sadari batas (titik sentuh dunia nyata) & realitas hukum yang beragam dan berubah.",
            "Monero menutup dimensi finansial; kekuatan sejati ada pada kombinasi TOR+TAILS+PGP+Monero sesuai threat model."
          ],
          quiz:{
            title:"Kuis Bab 10 — Monero",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Apa keunggulan utama Monero dibanding Bitcoin?",
               options:["Lebih cepat ditambang","Privasi by default: pengirim, penerima, & jumlah disembunyikan otomatis","Lebih murah","Tidak ada blockchain"],
               answer:1,
               explain:"Di Monero privasi adalah kondisi bawaan untuk semua transaksi, bukan usaha tambahan seperti di Bitcoin."},
              {q:"Teknologi Monero yang menyamarkan PENGIRIM adalah…",
               options:["Stealth addresses","Ring signatures","RingCT","Seed phrase"],
               answer:1,
               explain:"Ring signatures mencampur tanda tangan asli dengan banyak umpan, mengaburkan siapa pengirim sebenarnya."},
              {q:"Stealth addresses berfungsi untuk…",
               options:["Menyembunyikan jumlah","Menyamarkan penerima lewat alamat sekali-pakai unik tiap transaksi","Mempercepat sinkronisasi","Menggantikan seed"],
               answer:1,
               explain:"Stealth address membuat alamat penerima unik per transaksi sehingga transaksi ke kamu tak terlihat saling terkait di ledger."},
              {q:"Apa arti Monero bersifat 'fungible'?",
               options:["Bisa ditambang siapa saja","Setiap koin tak bisa dibedakan riwayatnya, jadi tak ada 'koin tercemar'","Harganya stabil","Gratis biaya transaksi"],
               answer:1,
               explain:"Karena riwayat tersembunyi & seragam, 1 XMR selalu setara 1 XMR — berbeda dari Bitcoin yang bisa punya koin 'tercemar'."},
              {q:"Berapa kata seed phrase khas Monero?",
               options:["12 kata","24 kata","25 kata","8 kata"],
               answer:2,
               explain:"Monero memakai mnemonic 25 kata (berbeda dari 12/24 kata gaya BIP39), tetap berfungsi sebagai kunci induk & pemulihan."},
              {q:"Apa yang TIDAK otomatis dilindungi oleh Monero?",
               options:["Jumlah transaksi","Identitas pengirim","Metadata jaringan (IP) & titik sentuh dunia nyata (KYC)","Identitas penerima"],
               answer:2,
               explain:"Monero menyembunyikan detail transaksi, tapi IP/metadata jaringan & momen tukar ke fiat ber-KYC bisa membongkarmu — tetap pakai TOR/TAILS."},
              {q:"Pernyataan paling tepat soal hukum Monero?",
               options:["Ilegal di semua negara","Legal di banyak negara tapi menghadapi delisting/pembatasan; status berbeda & berubah","Dijamin anonim tanpa konsekuensi","Wajib dipakai semua orang"],
               answer:1,
               explain:"Monero legal di banyak tempat namun menghadapi tekanan regulasi & delisting; aturan beragam dan berubah — selalu cek hukum setempat."}
            ]
          }
        }
      ]
};
