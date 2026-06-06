/* Bab 10 — id: "monero"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"monero",
      title:"Cryptocurrency — Monero",
      lectures:[
        {
          id:"xmr-intro",
          title:"Mengenal Monero",
          dur:"konsep",
          body:`
            <p class="lead">Kalau di bab Bitcoin kita menyimpulkan bahwa Bitcoin itu pseudonim — bukan anonim — Monero lahir justru untuk menjawab kelemahan itu. Di Bitcoin, setiap transaksi memamerkan tiga hal ke seluruh dunia, selamanya: dari alamat mana, ke alamat mana, dan berapa jumlahnya. Monero menutup ketiganya secara default.</p>

            <p>Yang menarik, Monero tidak menyelesaikannya dengan satu trik, melainkan tiga lapisan yang saling melengkapi — karena ketiga kebocoran tadi memang masalah yang berbeda. <strong>Ring signatures</strong> menyembunyikan pengirim dengan mencampur tanda tangan transaksimu bersama sejumlah "umpan" dari pengguna lain, sehingga pengamat tak bisa memastikan mana yang benar-benar membelanjakan koin. <strong>Stealth addresses</strong> membuat setiap transaksi mendarat di alamat sekali-pakai yang dihasilkan otomatis, jadi penerima tak terlihat di blockchain. Dan <strong>RingCT</strong> menyembunyikan jumlahnya. Tambahan lagi, di lapisan jaringan ada Dandelion++ yang mengaburkan dari node mana sebuah transaksi pertama kali muncul.</p>

            <p>Konsekuensi dari desain ini adalah sifat yang disebut <em>fungibility</em> — setiap satu XMR setara dengan XMR mana pun. Di Bitcoin, koin bisa "ternoda" karena riwayatnya terlacak (misalnya pernah lewat pasar gelap), lalu ditolak bursa. Di Monero, karena riwayat tersembunyi secara matematis, tak ada konsep koin bersih vs kotor. Inilah yang membuat sebagian orang menyebutnya privacy coin paling kuat yang ada.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Lingkup & hukum — baca dulu</div>
              <p>Sama seperti bab Bitcoin: ini literasi privasi finansial, bukan nasihat hukum/finansial, dan bukan panduan menyembunyikan dana ilegal. Justru karena Monero begitu efektif, ia berada di bawah sorotan regulator — banyak bursa besar kini membatasi atau menghapusnya (delisting) demi mematuhi aturan AML/KYC. Di Indonesia, aset kripto diawasi OJK. Pahami konsepnya, tapi selalu periksa hukum yang berlaku di wilayahmu.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Satu hal yang sering dilupakan</div>
              <p>Privasi on-chain Monero kuat, tapi ia tak menyelamatkanmu dari kebocoran <em>di luar</em> blockchain. Kalau kamu membeli XMR di bursa ber-KYC, atau memakai dompet tanpa TOR sehingga IP-mu terlihat, tautan ke identitasmu tetap bisa terbentuk di "pinggiran" sistem. Privasi tetap soal kebiasaan, bukan cuma teknologi.</p>
            </div>
          `,
          takeaways:[
            "Monero menutup tiga kebocoran Bitcoin: pengirim (ring signatures), penerima (stealth addresses), jumlah (RingCT).",
            "Karena riwayat tersembunyi, Monero bersifat fungible — tiap XMR setara, tak bisa 'ternoda'.",
            "Efektivitasnya memicu delisting di banyak bursa; privasi tetap bergantung pada OPSEC di luar blockchain."
          ]
        },
        {
          id:"xmr-wallet-create",
          title:"Membuat Dompet Monero",
          dur:"praktik",
          body:`
            <p class="lead">Membuat dompet Monero tidak jauh berbeda dari Bitcoin secara prinsip — yang kamu jaga adalah kuncinya, bukan koinnya — tapi ada beberapa hal khas Monero yang perlu kamu kenali.</p>

            <p>Untuk mulai, kamu bisa memakai dompet resmi seperti <strong>Monero GUI/CLI</strong> dari getmonero.org, atau dompet ringan populer seperti <strong>Cake Wallet</strong> dan <strong>Feather Wallet</strong>. Apa pun pilihanmu, unduh dari sumber resmi dan verifikasi tanda tangannya (keterampilan dari Bab 8) — dompet palsu adalah jebakan klasik untuk mencuri kunci.</p>

            <p>Saat membuat dompet baru, Monero memberimu sebuah <strong>seed mnemonic 25 kata</strong> (berbeda dari Bitcoin yang umumnya 12–24 kata). Catat offline, jangan difoto, jangan disimpan di cloud — siapa pun yang memegangnya menguasai seluruh danamu. Di balik layar, dompetmu sebenarnya punya beberapa kunci: <strong>spend key</strong> (untuk membelanjakan) dan <strong>view key</strong> (hanya untuk melihat transaksi masuk). Pemisahan ini berguna; misalnya kamu bisa memberi akuntan view key untuk audit tanpa pernah memberi kuasa membelanjakan.</p>

            <p>Untuk menerima dana, biasakan memakai <strong>subaddress</strong> — alamat turunan yang bisa kamu buat sebanyak-banyaknya dari satu dompet. Memakai subaddress baru tiap transaksi adalah kebiasaan privasi yang baik, mirip prinsip "jangan pakai ulang alamat" di Bitcoin.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Bedakan baik-baik: spend key (atau seed 25 kata) adalah rahasia mutlak. View key boleh dibagikan dalam situasi tertentu, tapi tetap mengurangi privasimu karena penerimanya bisa melihat dana masuk. Jangan menukar keduanya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan (aman):</strong> di dompet uji, buat dompet Monero baru, perhatikan seed 25 kata-nya, lalu buat dua subaddress. Tanpa dana nyata dulu — fokus memahami beda spend key vs view key dan kenapa subaddress berguna.</p>`,
          takeaways:[
            "Pakai dompet resmi (Monero GUI/CLI, Cake, Feather) dan verifikasi unduhannya.",
            "Monero memberi seed mnemonic 25 kata; ada spend key (rahasia) dan view key (lihat-saja).",
            "Gunakan subaddress baru tiap menerima sebagai kebiasaan privasi."
          ]
        },
        {
          id:"xmr-restore-tails",
          title:"Memulihkan Dompet Monero di TAILS",
          dur:"praktik",
          body:`
            <p class="lead">Karena TAILS bersifat amnesik — lupa segalanya saat reboot — memulihkan dompet Monero di dalamnya adalah skenario yang sangat masuk akal: kamu menyimpan seed dengan aman di luar, lalu "membangkitkan" dompet hanya saat dibutuhkan, di lingkungan yang bersih dan merutekan semuanya lewat TOR.</p>

            <p>Alurnya sederhana. Buka dompet Monero, pilih opsi <em>restore from seed</em>, lalu masukkan seed mnemonic 25 kata-mu. Satu langkah yang sering bikin pemula bingung adalah <strong>restore height</strong> — yaitu nomor blok kira-kira saat dompet itu dibuat. Mengisinya dengan benar membuat proses sinkronisasi jauh lebih cepat, karena dompet tak perlu memindai seluruh sejarah blockchain dari awal. Kalau ragu, isi perkiraan tanggal pembuatan; lebih baik sedikit terlalu awal daripada terlalu lambat.</p>

            <p>Ada dua cara mengelola ini di TAILS. Tanpa persistence, dompet hidup hanya selama sesi dan benar-benar lenyap saat shutdown — paling aman dari sisi jejak, tapi kamu harus restore tiap kali. Dengan <strong>Persistent Storage</strong> terenkripsi (Bab 2), file dompetmu bisa bertahan antar sesi sehingga tak perlu restore berulang — lebih praktis, dengan sedikit pengurangan sifat amnesik. Pilih sesuai model ancamanmu.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Karena Monero di TAILS otomatis lewat TOR, sinkronisasi bisa terasa lambat. Bersabarlah, atau pertimbangkan menghubungkan ke remote node tepercaya untuk mempercepat — dengan catatan remote node bisa melihat alamat IP koneksimu (di TAILS, itu IP TOR, bukan IP aslimu) dan sebagian metadata.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> di TAILS, restore dompet uji dari seed dengan mengisi restore height kira-kira. Bandingkan kecepatan sinkronisasi saat restore height diisi vs dikosongkan.</p>`,
          takeaways:[
            "TAILS yang amnesik cocok untuk 'membangkitkan' dompet hanya saat perlu, lewat TOR.",
            "Restore from seed + isi restore height agar sinkronisasi tak memindai seluruh blockchain.",
            "Tanpa persistence = paling sedikit jejak; dengan Persistent Storage = lebih praktis."
          ]
        },
        {
          id:"xmr-acquire",
          title:"Cara Memperoleh Monero (dan Trade-off-nya)",
          dur:"konsep",
          body:`
            <p class="lead">Ada beberapa jalur untuk mendapatkan Monero, dan masing-masing menukar kepraktisan dengan privasi dan kepatuhan dengan cara berbeda. Penting memahaminya sebagai peta trade-off, bukan sebagai resep "cara jadi tak terlacak".</p>

            <p>Jalur paling umum adalah <strong>bursa terpusat (CEX)</strong> yang masih melayani XMR. Ini paling mudah dan likuid, tapi paling sedikit privasinya: kamu lewat KYC, sehingga pembelian XMR-mu tertaut ke identitasmu di catatan bursa. Perlu dicatat, makin banyak bursa besar (seperti Binance, Coinbase, Kraken di wilayah teregulasi) yang membatasi atau menghapus XMR demi mematuhi AML — jadi ketersediaannya terus menyusut.</p>

            <p>Sebagai gantinya, muncul <strong>layanan swap non-kustodian tanpa registrasi</strong> dan <strong>DEX</strong> seperti Haveno (bursa Monero terdesentralisasi bergaya P2P dengan escrow multisig). Ada juga pasar <strong>P2P</strong> seperti AgoraDesk (penerus LocalMonero) yang mempertemukan pembeli-penjual langsung. Dua jalur lain adalah <strong>mining</strong> (Monero dirancang ramah CPU, jadi menambang dengan komputer biasa masih relevan) dan <strong>menerima XMR sebagai pembayaran</strong> atas barang/jasa yang sah.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Garis yang harus jelas</div>
              <p>Mencari privasi finansial atas dana yang sah itu boleh. Tapi <strong>sengaja menghindari KYC/AML untuk menyamarkan asal dana</strong>, apalagi bila dananya hasil kejahatan, bisa menjadi pelanggaran serius (pencucian uang) — terlepas dari alat yang dipakai. Penegakan aturan seperti FATF "Travel Rule" makin ketat secara global. Niat dan sumber dana menentukan legalitas, bukan jalur teknisnya.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Catatan jujur soal privasi</div>
              <p>Privasi on-chain Monero akan percuma kalau <em>titik masuknya</em> tertaut KYC. Kalau kamu beli XMR dengan identitas terverifikasi, lalu mengirimnya ke dompetmu, bursa tetap tahu kamu pembelinya. Privasi mulai dari hulu, bukan ditambal di hilir.</p>
            </div>
          `,
          takeaways:[
            "Jalur: CEX (mudah, KYC, makin langka untuk XMR), swap/DEX (Haveno), P2P (AgoraDesk), mining, menerima pembayaran.",
            "Tiap jalur menukar kepraktisan dengan privasi & kepatuhan — pahami sebagai peta trade-off.",
            "Menghindari KYC untuk menyamarkan asal dana bisa = pencucian uang; niat & sumber dana yang menentukan."
          ]
        },
        {
          id:"xmr-exchanges",
          title:"Crypto-exchange — Menukar Satu Koin ke Koin Lain",
          dur:"konsep",
          body:`
            <p class="lead">Sebelum membahas hubungannya dengan privasi, mari pahami dulu apa itu menukar (swap) satu cryptocurrency ke yang lain, karena ini operasi sehari-hari yang sangat umum dan, dengan sendirinya, sepenuhnya biasa.</p>

            <p>Secara garis besar ada tiga model. <strong>Bursa terpusat (CEX)</strong> menyimpan danamu di akun dan kamu berdagang di dalam platform mereka — nyaman dan likuid, tapi kustodial (mereka memegang kuncimu) dan ber-KYC. <strong>Layanan swap instan non-kustodian</strong> bekerja sederhana: kamu pilih pasangan (misalnya koin A ke koin B), kirim koin A ke alamat sekali-pakai, lalu menerima koin B di dompetmu sendiri, tanpa akun. <strong>DEX (bursa terdesentralisasi)</strong> mempertemukan order langsung antar pengguna lewat smart contract atau escrow, tanpa operator yang memegang dana.</p>

            <p>Orang menukar koin karena banyak alasan biasa: menyeimbangkan portofolio, membayar dengan koin yang diterima merchant, memanfaatkan likuiditas, atau sekadar berpindah jaringan. Yang perlu kamu perhatikan di sisi praktis adalah <strong>biaya</strong> (tiap swap memotong sedikit), <strong>kurs &amp; slippage</strong> (koin privasi kerap likuiditasnya lebih tipis), dan <strong>keandalan/keamanan layanan</strong> (untuk yang kustodial, kamu mempercayakan dana sementara ke operator).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk privasi jaringan, layanan swap non-kustodian umumnya bisa diakses lewat TOR, dan beberapa punya alamat .onion resmi. Tetap verifikasi alamatnya dari sumber resmi agar tak masuk ke situs tiruan (Bab 4).</p>
            </div>
          `,
          takeaways:[
            "Tiga model: CEX (kustodial, KYC), swap instan non-kustodian (tanpa akun), dan DEX.",
            "Menukar koin adalah operasi biasa; perhatikan biaya, slippage, dan keandalan layanan.",
            "Koin privasi sering likuiditasnya lebih tipis sehingga slippage bisa lebih besar."
          ]
        },
        {
          id:"xmr-anonymity-reality",
          title:"Menukar Lewat Privacy Coin: Konsep & Realitas Hukum",
          dur:"konsep penting",
          body:`
            <p class="lead">Di sinilah privasi finansial paling sering bersinggungan dengan hukum, jadi materi ini sengaja menahan diri pada <strong>konsep dan realitas hukum</strong> — bukan resep operasional. Tujuannya agar kamu paham apa yang terjadi dan di mana batasnya, bukan menyediakan tata-cara memutus jejak dana.</p>

            <p>Konsepnya begini. Karena blockchain seperti Bitcoin transparan, sebagian orang berargumen bahwa mengubah dana menjadi koin privasi seperti Monero "memutus" jejak transparan itu: begitu dana masuk ke Monero, analisis rantai kehilangan jejak ke mana ia pergi. Ini secara fungsi mirip dengan apa yang dilakukan mixer pada bab Bitcoin — dan karena itu, ia menghuni <strong>zona risiko hukum yang sama</strong>.</p>

            <p>Realitasnya, batas legal di sini tidak ditentukan oleh "alatnya", melainkan oleh <strong>niat, sumber dana, lisensi, dan yurisdiksi</strong>. Memutus tautan privasi atas dana yang sah sangat berbeda dari menyamarkan hasil kejahatan — yang kedua adalah pencucian uang, kejahatan serius. Penegakan aturan AML dan FATF "Travel Rule" makin agresif, dan kita sudah melihat di bab Bitcoin bahwa operator layanan pemutus-jejak bisa dipidana meski kodenya dianggap legal. Konversi via privacy coin tidak otomatis menjadikan apa pun legal.</p>

            <p>Maka, alih-alih "cara meningkatkan anonimitas", yang sehat untuk dipelajari adalah <strong>praktik privasi finansial yang tetap dalam koridor hukum</strong>: jangan memakai ulang alamat, pisahkan dompet per-tujuan, akses lewat TOR agar IP tak tertaut, pahami coin control, dan simpan catatan untuk kepatuhan pajak/pelaporan sesuai aturan wilayahmu.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Penegasan</div>
              <p>Materi ini tidak memberi langkah-demi-langkah memutus jejak dana, karena bila dipakai untuk menyamarkan dana ilegal itu adalah kejahatan. Ini juga bukan nasihat hukum. Sebelum memakai teknik privasi finansial apa pun, periksa hukum yang berlaku dan konsultasikan ke profesional untuk hal yang serius.</p>
            </div>
          `,
          takeaways:[
            "Konversi via privacy coin secara fungsi mirip mixing — menghuni zona risiko hukum yang sama.",
            "Batas legal = niat, sumber dana, lisensi, yurisdiksi; konversi tak otomatis menjadikan sesuatu legal.",
            "Yang sehat dipelajari: praktik privasi finansial yang tetap patuh hukum, bukan resep memutus jejak."
          ]
        },
        {
          id:"xmr-conclusion",
          title:"Penutup Monero",
          dur:"ringkasan",
          body:`
            <p class="lead">Kalau kita rangkum, Monero adalah jawaban teknis atas keterbatasan privasi Bitcoin: ia menyembunyikan pengirim, penerima, dan jumlah secara default, dan dari situ memperoleh sifat fungible. Tapi justru kekuatan itulah yang membuatnya berada di bawah tekanan regulasi yang berat.</p>

            <p>Dua pelajaran besar layak kamu bawa pulang. Pertama, <strong>teknologi bukan tongkat ajaib</strong>: privasi on-chain Monero bisa runtuh oleh kebocoran di luar rantai — KYC di titik masuk, IP yang terlihat, kebiasaan ceroboh. Privasi tetaplah disiplin, persis seperti OPSEC di Bab 1 dan Lab 08. Kedua, <strong>privasi dan hukum bukan hal yang sama</strong>: mencari privasi atas dana yang sah itu wajar, tapi memakai privasi untuk menyamarkan kejahatan tetap kejahatan, dan lanskap hukumnya berubah cepat.</p>

            <p>Pakailah pemahaman ini untuk melindungi diri secara sah — bukan untuk menghindari tanggung jawab hukum.</p>

            <div class="box tip">
              <div class="bx-title">◇ Menyambung ke bab berikutnya</div>
              <p>Sejauh ini kita banyak bicara soal menjaga jejak di jaringan dan di blockchain. Bab terakhir naik satu level: <strong>Qubes OS</strong>, sistem operasi yang membangun keamanan lewat isolasi — tempat ideal untuk menjalankan semua yang sudah kamu pelajari, termasuk Whonix di atasnya.</p>
            </div>
          `,
          takeaways:[
            "Monero = privasi default (pengirim/penerima/jumlah) + fungibility; tapi penuh tekanan regulasi.",
            "Teknologi tak menggantikan OPSEC; kebocoran di luar rantai tetap bisa membongkar.",
            "Privasi ≠ kebal hukum; pakai untuk proteksi diri yang sah, bukan menyamarkan kejahatan."
          ],
          quiz:{
            title:"Kuis Bab 10 — Monero",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Tiga lapisan privasi Monero menyembunyikan…",
               options:["Hanya jumlah","Pengirim (ring signatures), penerima (stealth addresses), jumlah (RingCT)","Hanya pengirim","Tidak ada, semua publik"],
               answer:1,
               explain:"Ketiganya orthogonal: masing-masing menutup satu kebocoran berbeda."},
              {q:"Sifat 'fungibility' Monero berarti…",
               options:["Koin bisa diprogram","Setiap XMR setara; tak ada koin 'ternoda' yang bisa di-blacklist","Monero lebih cepat","Monero gratis"],
               answer:1,
               explain:"Karena riwayat tersembunyi, tak ada konsep koin bersih vs kotor seperti di Bitcoin."},
              {q:"Seed mnemonic dompet Monero umumnya terdiri dari…",
               options:["6 kata","25 kata","Tidak ada seed","Hanya angka"],
               answer:1,
               explain:"Monero memakai seed 25 kata; catat offline & rahasiakan."},
              {q:"Apa fungsi 'restore height' saat memulihkan dompet?",
               options:["Mengubah saldo","Mempercepat sinkronisasi dengan menandai blok awal dompet","Mengenkripsi seed","Menghapus riwayat"],
               answer:1,
               explain:"Tanpa restore height, dompet memindai seluruh blockchain dari awal — jauh lebih lambat."},
              {q:"Kenapa privasi on-chain Monero bisa tetap bocor?",
               options:["Algoritmanya lemah","Kebocoran di luar rantai: KYC di titik masuk, IP terlihat, kebiasaan ceroboh","Monero menyimpan nama","Blockchain-nya publik penuh"],
               answer:1,
               explain:"Privasi tetap soal OPSEC; tautan bisa terbentuk di 'pinggiran' sistem, bukan di rantainya."},
              {q:"Konversi dana lewat privacy coin, secara hukum…",
               options:["Selalu legal karena memakai teknologi privasi","Menghuni zona risiko yang sama dengan mixing; legalitas tergantung niat, sumber dana, lisensi, yurisdiksi","Selalu ilegal","Tak diatur sama sekali"],
               answer:1,
               explain:"Konversi tak otomatis melegalkan apa pun; menyamarkan dana ilegal tetap pencucian uang."}
            ]
          }
        }
      ]
    };
