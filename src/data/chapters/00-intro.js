/* Bab 0 — id: "intro"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"intro",
      title:"Mulai di Sini",
      lectures:[
        {
          id:"orientasi",
          title:"Orientasi, Etika & Cara Pakai Modul",
          dur:"baca dulu",
          cover:true,
          body:`
            <p class="lead">Modul ini mengajarkan <strong>privasi, anonimitas, dan keamanan digital secara defensif</strong> — cara melindungi identitas dan datamu, memahami teknologi anonimitas (TOR, TAILS), dan memahami cara kerja dark web. Fokusnya pada proteksi diri dan pemahaman teknis, bukan aktivitas ilegal.</p>

            <div class="badge-row">
              <div class="stat"><div class="n">11</div><div class="l">Bab (fondasi, lab, komunikasi, file, enkripsi, finansial, sistem)</div></div>
              <div class="stat"><div class="n">84</div><div class="l">Materi & lab</div></div>
              <div class="stat"><div class="n">11</div><div class="l">Kuis evaluasi</div></div>
            </div>

            <h4>Cara pakai modul ini</h4>
            <ul>
              <li>Pilih materi dari panel kiri. Tandai <strong>“Tandai selesai”</strong> tiap kali rampung — progresmu tersimpan otomatis dan baris akan tercoret.</li>
              <li>Gunakan tombol <em>Sebelumnya / Berikutnya</em> di bawah tiap materi untuk belajar berurutan.</li>
              <li>Tiap bab punya <strong>kuis</strong> di materi terakhir untuk mengukur pemahaman.</li>
              <li>Kotak <span style="color:var(--accent)">Tip</span>, <span style="color:var(--amber)">Perhatian</span>, dan <span style="color:var(--danger)">Bahaya</span> menandai poin penting — jangan dilewati.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Etika &amp; Legalitas — baca sebelum lanjut</div>
              <p>Memakai TOR/TAILS dan mengakses dark web <strong>legal</strong> di Indonesia dan kebanyakan negara — ini alat privasi yang dipakai jurnalis, aktivis, peneliti keamanan, dan orang biasa yang peduli privasi. <strong>Yang menentukan legal/tidaknya adalah apa yang kamu lakukan</strong>, bukan alatnya.</p>
              <p>Membeli/menjual barang ilegal, mengakses materi terlarang, menipu, atau membobol sistem orang lain tetap melanggar hukum — termasuk UU ITE dan KUHP di Indonesia. Modul ini <strong>tidak</strong> memberikan tautan ke pasar gelap atau instruksi untuk aktivitas ilegal. Pakai ilmunya untuk melindungi diri dan belajar, bukan merugikan orang lain.</p>
            </div>

            <h4>Peta belajar</h4>
            <div class="map">
              <div class="row"><span class="ix">01</span><div><h5>The TOR Browser</h5><p>Pondasi anonimitas: cara kerja onion routing, instalasi aman, bridges &amp; pluggable transports untuk melawan sensor, kombinasi dengan VPN, dan setelan keamanan maksimum.</p></div></div>
              <div class="row"><span class="ix">02</span><div><h5>TAILS — Amnesic Incognito Live System</h5><p>Sistem operasi “lupa ingatan” yang merutekan semua trafik lewat Tor dan tak meninggalkan jejak. Instalasi, booting, dasar pemakaian, dan persistence terenkripsi.</p></div></div>
              <div class="row"><span class="ix">03</span><div><h5>Mengakses Dark Net — Entry Points</h5><p>Memahami struktur web (clear/deep/dark), cara menemukan hidden service lewat search engine &amp; direktori, dan — yang terpenting — cara menilai keamanan, menghindari penipuan, serta menjaga OPSEC.</p></div></div>
              <div class="row"><span class="ix">04</span><div><h5>Praktik Lanjutan — Hands-On Labs</h5><p>8 lab praktik: membangun &amp; mengeraskan TAILS, uji kebocoran, mengunjungi onion service sah, enkripsi PGP, OnionShare, menjalankan hidden service sendiri, deteksi penipuan, dan menyusun threat model + rencana OPSEC pribadi.</p></div></div>
              <div class="row"><span class="ix">05</span><div><h5>Komunikasi Privat — Email</h5><p>Membangun persona pseudonim (OPSEC), email sementara, penyedia email privat (zero-access encryption), email darknet (.onion), dan memilih layanan yang tepat untuk tiap konteks.</p></div></div>
              <div class="row"><span class="ix">06</span><div><h5>Komunikasi Privat — Instant Messaging</h5><p>Protokol Jabber/XMPP terfederasi, menyiapkan akun lewat Pidgin di TAILS, mengaktifkan enkripsi end-to-end OTR, dan memverifikasi kontak untuk melawan serangan man-in-the-middle.</p></div></div>
              <div class="row"><span class="ix">07</span><div><h5>Manajemen &amp; Berbagi File</h5><p>Tiga dimensi keamanan file: membersihkan metadata (MAT2), berbagi anonim via OnionShare, penghapusan aman (dan kenapa shred gagal di SSD), serta enkripsi penuh storage (LUKS/VeraCrypt) &amp; crypto-erase.</p></div></div>
              <div class="row"><span class="ix">08</span><div><h5>Enkripsi</h5><p>Fondasi kriptografi: simetris vs asimetris vs hibrida, membuat &amp; mengelola PGP key pair, enkripsi/dekripsi teks &amp; file, serta tanda tangan digital untuk membuktikan keaslian &amp; integritas.</p></div></div>
              <div class="row"><span class="ix">09</span><div><h5>Cryptocurrency — Bitcoin &amp; Privasi Finansial</h5><p>Dompet &amp; seed phrase, mengapa Bitcoin pseudonim (bukan anonim), cara memperoleh secara legal, mengirim/menerima dengan kebiasaan privat, serta konsep mixer beserta realitas hukumnya. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">10</span><div><h5>Cryptocurrency — Monero</h5><p>Privacy coin paling kuat: ring signatures, stealth addresses, dan RingCT yang menutup pengirim, penerima, dan jumlah secara default. Membuat &amp; memulihkan dompet di TAILS, cara memperoleh, serta realitas hukum &amp; risiko delisting. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">11</span><div><h5>Qubes OS — Keamanan lewat Isolasi</h5><p>Sistem operasi yang mengurung tiap aktivitas dalam mesin virtual terpisah (qube). Instalasi &amp; verifikasi, security domains, memindahkan file/teks antar-domain dengan aman, menangani file mencurigakan, dan menyambung ke TOR lewat Whonix Gateway.</p></div></div>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Prasyarat</div>
              <p>Tidak ada prasyarat teknis berat. Cukup terbiasa memakai komputer (Windows/macOS/Linux) dan USB flash drive. Disiapkan untuk belajar mandiri dengan ritme bebas.</p>
            </div>
          `,
          takeaways:[
            "Alatnya (TOR/TAILS) legal; tanggung jawab ada pada cara kamu memakainya.",
            "Tujuan modul: proteksi diri, pemahaman teknis, dan kesadaran keamanan — bukan aktivitas ilegal.",
            "Alur belajar: TOR → TAILS → Dark Net → Lab praktik → Email, Instant Messaging, File, Enkripsi, Bitcoin, Monero, dan Qubes OS; kerjakan kuis tiap bab."
          ]
        }
      ]
    };
