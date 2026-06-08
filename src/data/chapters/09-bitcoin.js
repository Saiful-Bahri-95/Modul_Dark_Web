/* Bab 9 — id: "bitcoin"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"bitcoin",
      title:"Cryptocurrency — Bitcoin & Privasi Finansial",
      lectures:[
        {
          id:"btc-intro-note",
          title:"Catatan Pembuka: Lingkup & Hukum",
          dur:"baca dulu · ± 5 menit",
          body:`
            <p class="lead">Sebelum masuk teknis, satu kejujuran penting: bab ini mengajarkan <strong>cara kerja Bitcoin &amp; privasi finansial yang sah</strong> — bukan cara menghindari hukum. Pahami batas dan konteksnya dulu agar kamu belajar dengan kepala jernih.</p>

            <h4>Apa yang kamu pelajari di sini</h4>
            <ul>
              <li>Cara kerja dompet, seed phrase, dan transaksi Bitcoin.</li>
              <li>Kenapa Bitcoin <strong>pseudonim, bukan anonim</strong> — dan apa konsekuensinya.</li>
              <li>Kebiasaan menjaga privasi finansial yang wajar dan legal.</li>
              <li>Konsep mixer/tumbler beserta <em>realitas hukumnya</em> (banyak yang ilegal/disanksi).</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Bukan nasihat hukum/finansial</div>
              <p>Materi ini bersifat edukatif, bukan nasihat hukum maupun finansial. Aku bukan pengacara atau penasihat keuangan. Aturan kripto berbeda tiap negara dan berubah cepat — selalu cek aturan terbaru di yurisdiksimu sebelum bertindak, dan konsultasikan dengan profesional bila taruhannya besar.</p>
            </div>

            <h4>Konteks hukum di Indonesia (gambaran umum)</h4>
            <p>Di Indonesia, aset kripto seperti Bitcoin <strong>legal diperdagangkan sebagai komoditas/aset investasi</strong> lewat pedagang fisik aset kripto yang terdaftar/diawasi regulator (dulu Bappebti, lalu beralih ke OJK). Namun kripto <strong>tidak diakui sebagai alat pembayaran yang sah</strong> — Rupiah tetap satu-satunya mata uang resmi. Artinya: memiliki, menabung, dan memperdagangkan kripto lewat platform legal itu sah; memakainya untuk transaksi ilegal (membeli barang terlarang, pencucian uang, penipuan) tetap melanggar hukum.</p>

            <div class="box tip">
              <div class="bx-title">◇ Privasi finansial yang sah itu wajar</div>
              <p>Ingin transaksimu tidak terekspos publik bukanlah hal mencurigakan — sama seperti kamu tidak menempel mutasi rekeningmu di papan pengumuman. Privasi finansial adalah kebutuhan normal warga biasa, jurnalis, dan pelaku usaha. Bab ini membantumu memahaminya, bukan menyalahgunakannya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Ilustrasi netral "Bitcoin sebagai aset" dan ikon regulator (OJK/Bappebti) untuk konteks legal Indonesia.</p>
              <p><span class="ir-key">Cari: "bitcoin asset illustration", "regulasi kripto indonesia ojk"</span></p>
            </div>
          `,
          takeaways:[
            "Bab ini mengajarkan cara kerja Bitcoin & privasi finansial yang SAH, bukan menghindari hukum.",
            "Bukan nasihat hukum/finansial; aturan kripto beda tiap negara & berubah cepat — cek aturan terbaru.",
            "Di Indonesia: kripto legal sebagai aset/komoditas lewat platform terdaftar, tapi BUKAN alat pembayaran sah.",
            "Privasi finansial adalah kebutuhan normal — yang dilarang adalah penyalahgunaannya."
          ]
        },
        {
          id:"btc-wallet-install",
          title:"Memasang Dompet Bitcoin (Wallet)",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Dompet (wallet) bukan tempat menyimpan koin — koin "ada" di blockchain. Dompet menyimpan <strong>kunci</strong> yang membuktikan kamu berhak memindahkan koin tersebut. Memahami jenis dompet adalah keputusan keamanan pertama dan terpenting.</p>

            <h4>Dua sumbu penting</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jenis dompet: custodial vs non-custodial, hot vs cold">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Memilih jenis dompet</text>
                <rect x="30" y="44" width="320" height="80" rx="10" fill="#15202b" stroke="#fb7185"/>
                <text x="190" y="68" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">Custodial (pihak lain pegang kunci)</text>
                <text x="190" y="90" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">mis. akun di bursa; praktis</text>
                <text x="190" y="106" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">"not your keys, not your coins" + KYC</text>
                <rect x="370" y="44" width="320" height="80" rx="10" fill="#15202b" stroke="#5fd98a"/>
                <text x="530" y="68" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">Non-custodial (KAMU pegang kunci)</text>
                <text x="530" y="90" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">mis. Electrum; kontrol penuh</text>
                <text x="530" y="106" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">tanggung jawab penuh juga</text>
                <rect x="30" y="138" width="320" height="74" rx="10" fill="#15202b" stroke="#f5b748"/>
                <text x="190" y="162" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="11" font-weight="700">Hot wallet (online)</text>
                <text x="190" y="184" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">praktis untuk transaksi harian</text>
                <text x="190" y="200" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">lebih rentan diretas</text>
                <rect x="370" y="138" width="320" height="74" rx="10" fill="#15202b" stroke="#6ad7ff"/>
                <text x="530" y="162" text-anchor="middle" fill="#6ad7ff" font-family="monospace" font-size="11" font-weight="700">Cold wallet (offline)</text>
                <text x="530" y="184" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">hardware/kertas; untuk simpanan</text>
                <text x="530" y="200" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">paling aman dari peretasan online</text>
              </svg>
              <figcaption>Dua keputusan: siapa pegang kunci (custodial/non-custodial) dan apakah online (hot/cold).</figcaption>
            </figure>

            <ul>
              <li><strong>Custodial</strong> — pihak ketiga (mis. bursa) yang memegang kuncimu. Praktis &amp; mudah pulih bila lupa sandi, tapi kamu bergantung pada mereka, tunduk pada KYC, dan "not your keys, not your coins" (kalau bursa bermasalah, danamu berisiko).</li>
              <li><strong>Non-custodial</strong> — kamu memegang kunci sendiri (mis. Electrum). Kontrol &amp; privasi lebih besar, tapi tanggung jawab penuh: kehilangan kunci = kehilangan dana.</li>
              <li><strong>Hot</strong> (terhubung internet) untuk transaksi sehari-hari; <strong>Cold</strong> (offline, hardware/kertas) untuk menyimpan jumlah besar jangka panjang.</li>
            </ul>

            <h4>Memasang dengan aman</h4>
            <ol class="steps">
              <li>Pilih dompet bereputasi &amp; open-source. <strong>Electrum</strong> adalah dompet non-custodial klasik untuk desktop (termasuk Windows) dan bisa dirutekan lewat TOR.</li>
              <li><strong>Unduh hanya dari situs resmi</strong> dan <strong>verifikasi tanda tangannya</strong> (PGP) — persis kebiasaan Bab 1/8. Dompet palsu adalah cara klasik mencuri dana.</li>
              <li>Bila ingin privasi jaringan, atur dompet agar terhubung lewat TOR (Electrum mendukung ini), atau jalankan dari TAILS.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Verifikasi installer dompet = wajib</div>
              <p>Dompet palsu/ditrojan akan mencuri seluruh danamu begitu kamu memasukkan seed. Selalu unduh dari situs resmi dan verifikasi tanda tangan sebelum memasang — keterampilan dari Bab 8 langsung berguna di sini.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tampilan dompet <strong>Electrum</strong> dan halaman verifikasi tanda tangan rilisnya.</p>
              <p><span class="ir-key">Cari: "electrum wallet interface", "electrum verify signature"</span></p>
            </div>
          `,
          takeaways:[
            "Dompet menyimpan KUNCI (bukti hak), bukan koin; koin ada di blockchain.",
            "Custodial = pihak lain pegang kunci (praktis, KYC, berisiko); non-custodial = kamu pegang (kontrol + tanggung jawab penuh).",
            "Hot (online) untuk harian; cold (offline) untuk simpanan besar.",
            "Unduh dompet hanya dari situs resmi & VERIFIKASI tanda tangannya; pertimbangkan jalankan lewat TOR/TAILS."
          ]
        },
        {
          id:"btc-wallet-create",
          title:"Membuat Dompet & Mengamankan Seed Phrase",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Saat membuat dompet non-custodial, kamu akan diberi <strong>seed phrase</strong> — 12 atau 24 kata yang merupakan "kunci induk" seluruh dompetmu. Mengamankan kata-kata ini adalah hal terpenting dalam seluruh bab kripto.</p>

            <h4>Apa itu seed phrase</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seed phrase sebagai kunci induk dompet">
                <defs><marker id="arseed" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <rect x="40" y="56" width="220" height="58" rx="10" fill="#15202b" stroke="#f5b748"/>
                <text x="150" y="80" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="11" font-weight="700">Seed phrase</text>
                <text x="150" y="98" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">12/24 kata (kunci induk)</text>
                <rect x="440" y="36" width="250" height="32" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="565" y="57" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">semua kunci privat</text>
                <rect x="440" y="76" width="250" height="32" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="565" y="97" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">semua alamat</text>
                <rect x="440" y="116" width="250" height="32" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="565" y="137" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">akses pulih di dompet lain</text>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arseed)">
                  <line x1="260" y1="80" x2="436" y2="52"/><line x1="260" y1="85" x2="436" y2="92"/><line x1="260" y1="90" x2="436" y2="132"/>
                </g>
                <text x="360" y="166" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="10">Siapa pun yang tahu seed = menguasai seluruh danamu.</text>
              </svg>
              <figcaption>Dari satu seed phrase diturunkan semua kunci & alamat dompet — sekaligus cara memulihkannya.</figcaption>
            </figure>
            <p>Seed phrase adalah representasi manusiawi dari kunci induk dompetmu. Dari situ semua kunci privat dan alamat diturunkan. Karena itu, ia bisa <strong>memulihkan</strong> seluruh dompetmu di aplikasi lain bila perangkatmu hilang — tapi juga berarti siapa pun yang memilikinya bisa menguras danamu.</p>

            <h4>Aturan mengamankan seed</h4>
            <ol class="steps">
              <li><strong>Tulis di kertas (offline), jangan difoto/diketik ke perangkat online.</strong> Foto di galeri atau catatan di cloud adalah target empuk.</li>
              <li><strong>Simpan di tempat aman &amp; tahan bencana</strong> (mis. dua salinan di lokasi berbeda). Pertimbangkan media logam untuk tahan api/air bila jumlah besar.</li>
              <li><strong>Jangan pernah memasukkan seed ke situs/aplikasi yang memintanya</strong> di luar proses pemulihan resmi dompetmu. Permintaan seed = hampir selalu penipuan.</li>
              <li>Bila pakai TAILS, kamu bisa menyimpan dompet di Persistent — tapi seed offline tetap cadangan utamamu.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Tidak ada "lupa seed, reset"</div>
              <p>Tidak ada dukungan pelanggan yang bisa memulihkan seed yang hilang — ini desain, bukan kekurangan. Kehilangan seed = kehilangan dana selamanya. Membocorkan seed = kehilangan dana ke pencuri. Perlakukan 12/24 kata itu seperti seluruh tabunganmu, karena memang begitu.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Contoh layar dompet menampilkan <strong>seed phrase</strong> (kata-kata diblur) dan kartu logam penyimpan seed.</p>
              <p><span class="ir-key">Cari: "wallet seed phrase backup", "metal seed phrase storage"</span></p>
            </div>
          `,
          practice:`<p>Buat dompet non-custodial baru (mis. Electrum) sebagai latihan. Saat seed phrase muncul, tuliskan di kertas — jangan difoto. Lalu uji pemulihan: tutup dompet, buat ulang dari seed yang kamu tulis, dan pastikan dompet yang sama kembali. Latihan ini membuktikan kamu paham bahwa seed = dompet, sekaligus melatih cadangan yang benar.</p>`,
          takeaways:[
            "Seed phrase (12/24 kata) = kunci induk; dari situ semua kunci & alamat diturunkan dan dompet bisa dipulihkan.",
            "Tulis seed offline di kertas/logam; jangan difoto, diketik ke perangkat online, atau ditaruh di cloud.",
            "Jangan pernah memasukkan seed ke situs/aplikasi yang memintanya — itu hampir selalu penipuan.",
            "Tidak ada reset: hilang seed = dana hilang; bocor seed = dana dicuri."
          ]
        },
        {
          id:"btc-pseudonym",
          title:"Bitcoin itu Pseudonim, Bukan Anonim",
          dur:"konsep penting · ± 8 menit",
          body:`
            <p class="lead">Ini salah paham paling berbahaya soal Bitcoin. Banyak yang mengira Bitcoin "uang anonim". Kenyataannya, <strong>setiap transaksi tercatat permanen di buku besar publik yang bisa dibaca siapa saja, selamanya.</strong> Bitcoin bukan tunai digital yang tak terlacak — ia justru sangat transparan.</p>

            <h4>Buku besar (blockchain) yang terbuka</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blockchain publik dan keterlacakan alamat">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Setiap transaksi terlihat publik &amp; permanen</text>
                <g font-family="monospace" font-size="9">
                  <rect x="40" y="50" width="120" height="50" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="100" y="72" text-anchor="middle" fill="#6ad7ff">alamat A</text><text x="100" y="88" text-anchor="middle" fill="#9fb4c4">0.5 BTC →</text>
                  <rect x="220" y="50" width="120" height="50" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="280" y="72" text-anchor="middle" fill="#6ad7ff">alamat B</text><text x="280" y="88" text-anchor="middle" fill="#9fb4c4">→ 0.3 BTC →</text>
                  <rect x="400" y="50" width="120" height="50" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="460" y="72" text-anchor="middle" fill="#6ad7ff">alamat C</text><text x="460" y="88" text-anchor="middle" fill="#9fb4c4">→ ...</text>
                  <rect x="580" y="50" width="110" height="50" rx="8" fill="#15202b" stroke="#fb7185"/><text x="635" y="72" text-anchor="middle" fill="#fb7185">Bursa (KYC)</text><text x="635" y="88" text-anchor="middle" fill="#9fb4c4">= namamu!</text>
                </g>
                <g stroke="#9fb4c4" stroke-width="1.5"><line x1="160" y1="75" x2="218" y2="75"/><line x1="340" y1="75" x2="398" y2="75"/><line x1="520" y1="75" x2="578" y2="75"/></g>
                <text x="360" y="138" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="10">Analisis rantai (chain analysis) mengikuti aliran &amp; mengaitkan alamat.</text>
                <text x="360" y="158" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="10">Begitu satu alamat tertaut ke identitas (mis. via KYC bursa), riwayatnya bisa terbongkar.</text>
              </svg>
              <figcaption>Alamat memang bukan nama — tapi aliran dana bisa diikuti, dan satu titik KYC bisa membongkar seluruh jejak.</figcaption>
            </figure>

            <h4>Pseudonim, bukan anonim — apa bedanya</h4>
            <p>Alamat Bitcoin (deretan karakter) bukan namamu — itulah sisi "pseudonim". Tapi karena semua transaksi publik dan permanen, pihak dengan alat <strong>analisis rantai (chain analysis)</strong> bisa mengikuti aliran dana antar-alamat, mengelompokkan alamat milik satu orang, dan — yang menentukan — <strong>mengaitkan alamat ke identitas asli</strong> begitu ada satu titik yang membongkarmu (mis. saat kamu beli/jual di bursa ber-KYC, atau memakai IP aslimu).</p>

            <h4>Kebiasaan yang membocorkan</h4>
            <ul>
              <li><strong>Memakai ulang alamat.</strong> Satu alamat untuk banyak transaksi memudahkan pelacakan. Gunakan alamat baru tiap menerima (dompet modern melakukannya otomatis).</li>
              <li><strong>Menautkan ke KYC.</strong> Membeli di bursa yang meminta identitas menautkan namamu ke alamat itu dan semua yang terhubung dengannya.</li>
              <li><strong>Membocorkan IP.</strong> Menyiarkan transaksi tanpa TOR bisa menautkan alamat ke lokasimu. Jalankan dompet lewat TOR/TAILS.</li>
              <li><strong>Menggabungkan dana</strong> dari sumber teridentifikasi dan privat dalam satu transaksi bisa saling "mencemari".</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Implikasi besar</div>
              <p>Karena ledger permanen, sebuah transaksi yang hari ini tampak "tak bernama" bisa terbongkar bertahun-tahun kemudian saat teknik analisis membaik atau satu penaut muncul. Untuk privasi finansial yang lebih kuat secara default, ada coin yang dirancang berbeda — Monero, bab berikutnya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Visualisasi <strong>blockchain explorer</strong> (aliran transaksi antar-alamat) dan diagram chain analysis.</p>
              <p><span class="ir-key">Cari: "bitcoin blockchain explorer transaction graph", "chain analysis address clustering"</span></p>
            </div>
          `,
          takeaways:[
            "Bitcoin pseudonim, bukan anonim: semua transaksi tercatat publik & permanen di blockchain.",
            "Chain analysis mengikuti aliran dana & mengelompokkan alamat; satu titik KYC/IP bisa membongkar identitas.",
            "Kebiasaan bocor: memakai ulang alamat, menaut KYC, membocorkan IP, menggabungkan dana teridentifikasi+privat.",
            "Transaksi 'tak bernama' hari ini bisa terbongkar kelak — untuk privasi default lebih kuat, lihat Monero."
          ]
        },
        {
          id:"btc-atm",
          title:"Bitcoin ATM — Cara Memperoleh & Realitasnya",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Bitcoin ATM (BTM) adalah mesin fisik untuk membeli (kadang menjual) Bitcoin dengan uang tunai. Sering dianggap "jalur privat", tapi realitasnya lebih bernuansa — dan ketersediaannya di Indonesia terbatas.</p>

            <h4>Cara kerjanya</h4>
            <ol class="steps">
              <li>Kamu datang ke mesin, pilih "beli", masukkan uang tunai.</li>
              <li>Tunjukkan alamat dompetmu (biasanya lewat QR dari aplikasi dompet).</li>
              <li>Mesin mengirim Bitcoin senilai uangmu ke alamat itu (dikurangi biaya, yang sering tinggi).</li>
            </ol>

            <h4>Realitas privasi &amp; hukum</h4>
            <ul>
              <li><strong>KYC makin umum.</strong> Banyak BTM kini meminta nomor HP, foto, bahkan identitas untuk jumlah di atas ambang tertentu — sesuai aturan anti pencucian uang. "Beli tunai = otomatis anonim" tidak lagi selalu benar.</li>
              <li><strong>Biaya tinggi.</strong> BTM cenderung mengenakan markup besar dibanding bursa.</li>
              <li><strong>Kamera &amp; lokasi.</strong> Mesin ada di lokasi fisik dengan CCTV; kehadiranmu terekam.</li>
              <li><strong>Ketersediaan.</strong> Di Indonesia, BTM sangat jarang/terbatas; jalur paling umum &amp; legal adalah bursa terdaftar (dengan KYC).</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Trade-off, bukan keajaiban</div>
              <p>Tiap cara memperoleh kripto punya trade-off antara kemudahan, biaya, dan privasi. Tidak ada yang "sempurna anonim" tanpa konsekuensi. Pilih jalur legal yang sesuai kebutuhanmu, dan sadari jejak yang ditinggalkan masing-masing.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Foto sebuah <strong>Bitcoin ATM</strong> dan alur layar belinya (scan QR alamat dompet).</p>
              <p><span class="ir-key">Cari: "bitcoin atm machine", "btm buy bitcoin qr"</span></p>
            </div>
          `,
          takeaways:[
            "Bitcoin ATM membeli/menjual BTC dengan tunai via scan QR alamat dompetmu.",
            "Privasi kini terbatas: banyak BTM meminta KYC di atas ambang tertentu, biaya tinggi, dan ada CCTV.",
            "Di Indonesia BTM sangat jarang; jalur umum & legal adalah bursa terdaftar (ber-KYC).",
            "Tiap cara memperoleh kripto = trade-off kemudahan/biaya/privasi; tak ada yang sempurna anonim."
          ]
        },
        {
          id:"btc-p2p",
          title:"Layanan P2P (Peer-to-Peer)",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Selain bursa terpusat, ada platform <strong>peer-to-peer (P2P)</strong> yang mempertemukan pembeli &amp; penjual langsung. Modelnya menarik untuk fleksibilitas pembayaran, tapi membawa risiko penipuan tersendiri.</p>

            <h4>Cara kerja umum</h4>
            <p>Di marketplace P2P, penjual memasang penawaran (harga, metode pembayaran), pembeli memilih, lalu transaksi diamankan lewat <strong>escrow</strong>: platform menahan kripto penjual sampai pembeli mengonfirmasi pembayaran terkirim, baru melepasnya. Reputasi/rating tiap pihak membantu menilai kepercayaan.</p>

            <h4>Kelebihan &amp; risiko</h4>
            <ul>
              <li><strong>+ Fleksibel:</strong> beragam metode pembayaran, kadang lebih sesuai kebutuhan lokal.</li>
              <li><strong>+ Tanpa perantara terpusat tunggal</strong> untuk pencocokan harga.</li>
              <li><strong>- Risiko penipuan tinggi:</strong> rekan transaksi bisa curang (mis. klaim palsu, chargeback pada metode pembayaran tertentu).</li>
              <li><strong>- KYC tetap mungkin:</strong> banyak platform P2P besar tetap menerapkan verifikasi identitas.</li>
            </ul>

            <h4>Kebiasaan aman (dari keterampilan kursus ini)</h4>
            <ul>
              <li>Utamakan escrow resmi platform; jangan tergoda "transaksi di luar platform" yang menghilangkan perlindungan.</li>
              <li>Periksa reputasi rekan transaksi; mulai dari jumlah kecil.</li>
              <li>Terapkan anti-phishing (Bab 3/4): verifikasi alamat/identitas, waspadai urgensi &amp; iming-iming.</li>
              <li>Pilih platform legal/terdaftar; ingat batas hukum dari materi pembuka.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Escrow bukan jaminan mutlak</div>
              <p>Escrow mengurangi risiko, tapi penipu kreatif tetap mencari celah (mis. memaksa keluar dari escrow, bukti bayar palsu). Tetap waspada; perlindungan terbaik adalah kombinasi escrow + reputasi + kehati-hatianmu sendiri.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tampilan marketplace <strong>P2P</strong> (daftar penawaran + escrow) dan indikator reputasi penjual.</p>
              <p><span class="ir-key">Cari: "p2p crypto marketplace escrow", "p2p trade reputation rating"</span></p>
            </div>
          `,
          takeaways:[
            "P2P mempertemukan pembeli & penjual langsung, diamankan escrow (kripto ditahan sampai pembayaran dikonfirmasi).",
            "Kelebihan: fleksibel; risiko: penipuan tinggi & KYC tetap mungkin di platform besar.",
            "Aman: pakai escrow resmi, cek reputasi, mulai kecil, terapkan anti-phishing, pilih platform legal.",
            "Escrow mengurangi risiko tapi bukan jaminan mutlak — kewaspadaanmu tetap kunci."
          ]
        },
        {
          id:"btc-send-receive",
          title:"Mengirim & Menerima Bitcoin (dengan Kebiasaan Privat)",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Transaksi Bitcoin itu sederhana secara mekanis, tapi tiap langkah punya implikasi privasi. Mari lakukan dengan benar — termasuk kebiasaan yang menjaga jejakmu seminim mungkin.</p>

            <h4>Menerima</h4>
            <ol class="steps">
              <li>Di dompetmu, pilih <strong>Receive</strong>. Dompet menampilkan alamat (dan QR).</li>
              <li><strong>Gunakan alamat baru tiap penerimaan.</strong> Dompet modern menghasilkan alamat baru otomatis — ini mempersulit pelacakan dibanding memakai ulang satu alamat.</li>
              <li>Bagikan alamat ke pengirim lewat saluran tepercaya. Cocokkan beberapa karakter awal &amp; akhir untuk menghindari malware penukar-clipboard.</li>
            </ol>

            <h4>Mengirim</h4>
            <ol class="steps">
              <li>Pilih <strong>Send</strong>, tempel alamat tujuan, masukkan jumlah.</li>
              <li>Atur <strong>biaya (fee)</strong>: makin tinggi, makin cepat dikonfirmasi; makin rendah, makin lambat. Sesuaikan dengan urgensi.</li>
              <li>Periksa ulang alamat tujuan (malware bisa menukar alamat yang kamu tempel!), lalu kirim.</li>
              <li>Transaksi disiarkan ke jaringan dan menunggu <strong>konfirmasi</strong> (dimasukkan ke blok). Umumnya makin banyak konfirmasi makin final.</li>
            </ol>

            <h4>Kebiasaan menjaga privasi</h4>
            <ul>
              <li><strong>Jalankan dompet lewat TOR</strong> (atau dari TAILS) agar penyiaran transaksi tidak menautkan alamat ke IP aslimu.</li>
              <li><strong>Hindari memakai ulang alamat</strong> dan berhati-hati menggabungkan dana dari sumber berbeda dalam satu transaksi.</li>
              <li><strong>Sadari "uang kembalian" (change).</strong> Transaksi Bitcoin sering menghasilkan alamat kembalian; dompet mengelolanya, tapi pahami bahwa ini bagian dari jejak yang bisa dianalisis.</li>
              <li><strong>Verifikasi alamat dari malware clipboard:</strong> selalu cek alamat yang tertempel benar-benar sama dengan yang dimaksud.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Transaksi tak bisa dibatalkan</div>
              <p>Bitcoin bersifat final — salah kirim alamat atau jumlah berarti dana hilang tanpa "undo" atau bank yang bisa membatalkan. Periksa dua kali sebelum menekan kirim. Ini kebebasan sekaligus tanggung jawab penuh.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Layar <strong>Send/Receive</strong> dompet (alamat + QR + pengaturan fee) dan indikator konfirmasi transaksi.</p>
              <p><span class="ir-key">Cari: "bitcoin wallet send receive screen", "bitcoin transaction confirmations"</span></p>
            </div>
          `,
          takeaways:[
            "Terima: gunakan alamat baru tiap kali (otomatis di dompet modern) untuk mempersulit pelacakan.",
            "Kirim: tempel alamat, atur fee (cepat/lambat), periksa ulang alamat (waspada malware clipboard), tunggu konfirmasi.",
            "Privasi: jalankan dompet lewat TOR/TAILS, hindari pakai ulang alamat, sadari alamat 'change'.",
            "Transaksi final & tak bisa dibatalkan — periksa dua kali sebelum mengirim."
          ]
        },
        {
          id:"btc-mixers",
          title:"Pengantar Mixer / Tumbler (Konsep & Peringatan)",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Karena Bitcoin transparan, muncul layanan bernama <strong>mixer</strong> (tumbler) yang mengklaim "mengaburkan" jejak transaksi. Penting memahami konsepnya — dan jauh lebih penting memahami <strong>realitas hukumnya</strong>, karena di sinilah banyak orang terjerat masalah serius.</p>

            <h4>Konsep (apa yang mereka klaim lakukan)</h4>
            <p>Secara konsep, mixer menggabungkan koin dari banyak pengguna lalu mendistribusikannya kembali, sehingga hubungan "siapa mengirim ke siapa" menjadi kabur bagi analisis rantai. Tujuannya memutus tautan antara alamat asal dan tujuan.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Realitas hukum — baca baik-baik</div>
              <p>Banyak mixer terkenal telah <strong>dikenai sanksi, ditutup, atau operatornya ditangkap</strong> karena dipakai untuk pencucian uang. Di banyak yurisdiksi, memakai mixer bisa <strong>menandai danamu sebagai mencurigakan</strong> (bursa sah bisa menolak/menahan koin yang pernah lewat mixer), dan dalam konteks tertentu dapat dianggap sebagai upaya pencucian uang — pelanggaran pidana serius. Ini bukan "trik privasi gratis"; konsekuensinya bisa berat.</p>
            </div>

            <h4>Risiko praktis (selain hukum)</h4>
            <ul>
              <li><strong>Penipuan:</strong> banyak "mixer" sekadar mencuri koin yang kamu setor.</li>
              <li><strong>Koin "tercemar":</strong> dana yang pernah lewat mixer bisa ditolak bursa/layanan sah.</li>
              <li><strong>Tidak seampuh klaimnya:</strong> analisis rantai modern sering tetap bisa mengurai sebagian.</li>
            </ul>

            <h4>Alternatif yang sah untuk privasi finansial</h4>
            <p>Bila tujuanmu privasi finansial yang wajar &amp; legal, pendekatan yang lebih sehat: (1) kebiasaan privasi yang sudah dibahas (alamat baru, TOR/TAILS, hindari pakai ulang), dan (2) memakai <strong>privacy coin yang dirancang privat secara default</strong> seperti <strong>Monero</strong> (bab berikutnya) — yang menyembunyikan pengirim, penerima, dan jumlah tanpa perlu "mencuci" apa pun. Ini solusi by-design, bukan tambalan yang berisiko hukum.</p>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram konsep mixer (banyak input → diaduk → banyak output) dengan label peringatan hukum yang jelas.</p>
              <p><span class="ir-key">Cari: "bitcoin mixer concept diagram", "crypto mixer sanctioned"</span></p>
            </div>
          `,
          takeaways:[
            "Mixer mengklaim mengaburkan jejak dengan mengaduk koin banyak pengguna.",
            "Realitas hukum berat: banyak mixer disanksi/ditutup; memakainya bisa menandai dana mencurigakan & berisiko pidana.",
            "Risiko praktis: penipuan, koin 'tercemar' ditolak bursa, dan sering tak seampuh klaimnya.",
            "Untuk privasi sah by-design, pilih privacy coin seperti Monero — bukan tambalan berisiko hukum."
          ]
        },
        {
          id:"btc-legal",
          title:"Realitas Hukum & Privasi Finansial yang Sah",
          dur:"konsep penting · ± 7 menit",
          body:`
            <p class="lead">Mari rangkum bab ini menjadi peta keputusan yang jernih: apa yang sah, apa yang berisiko, dan bagaimana mencapai privasi finansial tanpa melanggar hukum.</p>

            <h4>Garis yang jelas</h4>
            <ul>
              <li><strong>Sah:</strong> memiliki, menyimpan, dan memperdagangkan kripto sebagai aset lewat platform terdaftar; menjaga privasi transaksimu dari publik; memakai dompet non-custodial &amp; TOR/TAILS untuk melindungi diri.</li>
              <li><strong>Berisiko/abu-abu:</strong> mixer/tumbler (bisa menandai dana &amp; berimplikasi pidana di banyak yurisdiksi), pembelian dari sumber tak jelas.</li>
              <li><strong>Ilegal:</strong> memakai kripto untuk membeli/menjual barang terlarang, penipuan, atau pencucian uang — apa pun teknologinya. Teknologi netral; perbuatannya yang dinilai.</li>
            </ul>

            <h4>Kenapa privasi finansial sah itu penting</h4>
            <p>Privasi finansial melindungi orang biasa: mencegah pelacak komersial memetakan kebiasaanmu, melindungi jurnalis &amp; aktivis, dan menjaga keamanan pribadi (orang yang diketahui memegang aset bisa jadi target). Menginginkannya bukan tanda berbuat salah — sama wajarnya dengan tidak mengumumkan saldo rekeningmu.</p>

            <h4>Praktik privasi finansial yang sehat &amp; legal</h4>
            <ol class="steps">
              <li>Gunakan dompet <strong>non-custodial</strong> dan jalankan lewat <strong>TOR/TAILS</strong>.</li>
              <li>Jangan memakai ulang alamat; biarkan dompet mengelola alamat baru.</li>
              <li>Pisahkan "kompartemen" finansial seperti kamu memisahkan persona (Bab 5).</li>
              <li>Untuk privasi default yang kuat, pertimbangkan <strong>Monero</strong> (bab berikutnya) lewat jalur legal.</li>
              <li>Patuhi hukum yurisdiksimu &amp; simpan catatan untuk kewajiban pajak/pelaporan yang berlaku.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Penutup yang jujur</div>
              <p>Bukan nasihat hukum/finansial. Aturan berbeda &amp; berubah; konsekuensi salah langkah bisa serius. Pakai ilmu ini untuk <strong>melindungi diri secara sah</strong>, bukan untuk melanggar hukum. Bila ragu soal legalitas suatu tindakan, jangan lakukan sampai kamu yakin — dan bila perlu, konsultasikan dengan profesional.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Infografis "sah / abu-abu / ilegal" untuk pemakaian kripto sebagai ringkasan keputusan.</p>
              <p><span class="ir-key">Cari: "legal crypto use infographic", "financial privacy legitimate"</span></p>
            </div>
          `,
          takeaways:[
            "Sah: memiliki/menyimpan/memperdagangkan kripto lewat platform terdaftar & menjaga privasi transaksi.",
            "Berisiko: mixer/tumbler & sumber tak jelas; Ilegal: barang terlarang, penipuan, pencucian uang.",
            "Privasi finansial sah melindungi orang biasa, jurnalis, aktivis — menginginkannya bukan tanda bersalah.",
            "Praktik sehat: dompet non-custodial via TOR/TAILS, alamat baru, kompartementalisasi, pertimbangkan Monero — patuhi hukum & pajak."
          ],
          quiz:{
            title:"Kuis Bab 9 — Bitcoin & Privasi Finansial",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Apa yang sebenarnya disimpan oleh sebuah dompet (wallet)?",
               options:["Koin itu sendiri","Kunci yang membuktikan hak memindahkan koin (koin ada di blockchain)","Riwayat browsing","Kata sandi email"],
               answer:1,
               explain:"Koin 'ada' di blockchain; dompet menyimpan kunci yang membuktikan kamu berhak memindahkannya."},
              {q:"Apa itu seed phrase?",
               options:["Kata sandi WiFi","12/24 kata yang merupakan kunci induk seluruh dompet & bisa memulihkannya","Alamat penerima","Nomor transaksi"],
               answer:1,
               explain:"Dari seed phrase semua kunci & alamat diturunkan; siapa pun yang memilikinya menguasai seluruh dana. Tak ada reset bila hilang."},
              {q:"Pernyataan paling tepat tentang Bitcoin:",
               options:["Sepenuhnya anonim","Pseudonim: transaksi publik & permanen, alamat bisa ditautkan ke identitas","Tak bisa dilacak sama sekali","Tidak mencatat transaksi"],
               answer:1,
               explain:"Bitcoin pseudonim, bukan anonim: ledger publik + chain analysis + titik KYC/IP bisa membongkar identitas."},
              {q:"Kebiasaan mana yang MENINGKATKAN privasi saat memakai Bitcoin?",
               options:["Memakai ulang satu alamat","Menjalankan dompet lewat TOR/TAILS & memakai alamat baru tiap kali","Menyiarkan transaksi dari IP rumah","Menautkan semua ke akun KYC"],
               answer:1,
               explain:"TOR/TAILS mencegah penautan IP, dan alamat baru tiap transaksi mempersulit pelacakan."},
              {q:"Soal Bitcoin ATM saat ini, mana yang benar?",
               options:["Selalu sepenuhnya anonim","Banyak kini menerapkan KYC di atas ambang, biaya tinggi, & ada CCTV","Gratis biaya","Tersedia di mana-mana di Indonesia"],
               answer:1,
               explain:"BTM modern sering meminta KYC, mengenakan markup besar, dan berada di lokasi ber-CCTV; di Indonesia pun sangat terbatas."},
              {q:"Apa realitas hukum utama tentang mixer/tumbler?",
               options:["Cara aman & legal untuk semua orang","Banyak disanksi/ditutup; bisa menandai dana mencurigakan & berimplikasi pidana","Wajib dipakai untuk tiap transaksi","Dijamin pemerintah"],
               answer:1,
               explain:"Banyak mixer dipakai untuk pencucian uang sehingga disanksi/ditutup; memakainya berisiko hukum & dana bisa ditolak bursa sah."},
              {q:"Pendekatan privasi finansial yang lebih sehat & by-design daripada mixer adalah…",
               options:["Memakai banyak mixer sekaligus","Privacy coin seperti Monero (lewat jalur legal) + kebiasaan privasi","Menyimpan di bursa KYC","Menyiarkan transaksi tanpa TOR"],
               answer:1,
               explain:"Monero menyembunyikan pengirim/penerima/jumlah secara default tanpa 'mencuci' apa pun — solusi by-design, bukan tambalan berisiko hukum."}
            ]
          }
        }
      ]
};
