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
          dur:"baca dulu · ± 8 menit",
          cover:true,
          body:`
            <p class="lead">Selamat datang. Modul ini mengajarkan <strong>privasi, anonimitas, dan keamanan digital secara defensif</strong> — cara melindungi identitas &amp; datamu, memahami teknologi anonimitas (TOR, TAILS, Qubes), dan memahami cara kerja dark web dengan kepala dingin. Fokusnya proteksi diri dan pemahaman teknis yang mendalam, bukan aktivitas ilegal. Tujuannya satu: kamu bisa terjun ke wilayah ini dengan <em>paham &amp; percaya diri</em>, bukan asal nekat.</p>

            <div class="badge-row">
              <div class="stat"><div class="n">11</div><div class="l">Bab inti + orientasi (fondasi, lab, komunikasi, file, enkripsi, finansial, sistem)</div></div>
              <div class="stat"><div class="n">84</div><div class="l">Materi &amp; lab praktik</div></div>
              <div class="stat"><div class="n">11</div><div class="l">Kuis evaluasi (tiap bab)</div></div>
            </div>

            <h4>Alur belajar — dari fondasi ke penguasaan</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur belajar modul dari TOR hingga Qubes">
                <defs><marker id="ari" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Peta perjalananmu</text>
                <g font-family="monospace" font-size="9">
                  <rect x="20" y="44" width="120" height="40" rx="8" fill="#15202b" stroke="#4fe0d0"/><text x="80" y="60" text-anchor="middle" fill="#4fe0d0">1 · TOR</text><text x="80" y="74" text-anchor="middle" fill="#9fb4c4">jaringan</text>
                  <rect x="160" y="44" width="120" height="40" rx="8" fill="#15202b" stroke="#4fe0d0"/><text x="220" y="60" text-anchor="middle" fill="#4fe0d0">2 · TAILS</text><text x="220" y="74" text-anchor="middle" fill="#9fb4c4">sistem amnesik</text>
                  <rect x="300" y="44" width="120" height="40" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="360" y="60" text-anchor="middle" fill="#6ad7ff">3 · Dark Net</text><text x="360" y="74" text-anchor="middle" fill="#9fb4c4">entry & anti-scam</text>
                  <rect x="440" y="44" width="120" height="40" rx="8" fill="#15202b" stroke="#6ad7ff"/><text x="500" y="60" text-anchor="middle" fill="#6ad7ff">4 · Labs</text><text x="500" y="74" text-anchor="middle" fill="#9fb4c4">8 praktik</text>
                  <rect x="580" y="44" width="120" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="640" y="60" text-anchor="middle" fill="#f5b748">5-6 · Komunikasi</text><text x="640" y="74" text-anchor="middle" fill="#9fb4c4">email & chat</text>

                  <rect x="160" y="130" width="120" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="220" y="146" text-anchor="middle" fill="#f5b748">7 · File</text><text x="220" y="160" text-anchor="middle" fill="#9fb4c4">metadata & wipe</text>
                  <rect x="300" y="130" width="120" height="40" rx="8" fill="#15202b" stroke="#f5b748"/><text x="360" y="146" text-anchor="middle" fill="#f5b748">8 · Enkripsi</text><text x="360" y="160" text-anchor="middle" fill="#9fb4c4">PGP & tanda tangan</text>
                  <rect x="440" y="130" width="120" height="40" rx="8" fill="#15202b" stroke="#fb7185"/><text x="500" y="146" text-anchor="middle" fill="#fb7185">9-10 · Kripto</text><text x="500" y="160" text-anchor="middle" fill="#9fb4c4">Bitcoin & Monero</text>
                  <rect x="580" y="130" width="120" height="40" rx="8" fill="#15202b" stroke="#5fd98a"/><text x="640" y="146" text-anchor="middle" fill="#5fd98a">11 · Qubes</text><text x="640" y="160" text-anchor="middle" fill="#9fb4c4">isolasi total</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="1.5" marker-end="url(#ari)">
                  <line x1="140" y1="64" x2="156" y2="64"/><line x1="280" y1="64" x2="296" y2="64"/><line x1="420" y1="64" x2="436" y2="64"/><line x1="560" y1="64" x2="576" y2="64"/>
                  <line x1="640" y1="84" x2="640" y2="104"/><line x1="640" y1="104" x2="220" y2="104"/><line x1="220" y1="104" x2="220" y2="126"/>
                  <line x1="280" y1="150" x2="296" y2="150"/><line x1="420" y1="150" x2="436" y2="150"/><line x1="560" y1="150" x2="576" y2="150"/>
                </g>
                <text x="360" y="205" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Tiap bab membangun di atas bab sebelumnya — kerjakan berurutan untuk hasil terbaik.</text>
                <text x="360" y="228" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="10">Jaringan → Sistem → Akses → Praktik → Komunikasi → Data → Finansial → Isolasi</text>
              </svg>
              <figcaption>Urutan sengaja menanjak: tiap lapisan keamanan menambah satu pertahanan, sampai semuanya menyatu di Qubes.</figcaption>
            </figure>

            <h4>Apa yang akan kamu kuasai</h4>
            <ul>
              <li>Menjelajah dengan <strong>TOR &amp; TAILS</strong> tanpa membocorkan IP atau meninggalkan jejak di komputer.</li>
              <li>Menemukan &amp; memverifikasi layanan <code>.onion</code> sah, dan <strong>mengenali penipuan/phishing</strong> sebelum jadi korban.</li>
              <li>Berkomunikasi rahasia lewat <strong>persona, email privat, XMPP+OTR, dan PGP</strong>.</li>
              <li>Menjaga <strong>file</strong>: membersihkan metadata, berbagi anonim, dan menghapus/mengenkripsi dengan benar.</li>
              <li>Memahami <strong>privasi finansial</strong> (Bitcoin pseudonim vs Monero) secara legal.</li>
              <li>Membangun lingkungan kerja terisolasi dengan <strong>Qubes OS + Whonix</strong>.</li>
              <li>Menyusun <strong>threat model &amp; rencana OPSEC pribadi</strong> — peta keputusanmu sendiri.</li>
            </ul>

            <h4>Cara pakai modul ini</h4>
            <ul>
              <li>Pilih materi dari panel kiri. Tandai <strong>“Tandai selesai”</strong> tiap kali rampung — progresmu tersimpan otomatis dan baris akan tercoret.</li>
              <li>Gunakan tombol <em>Sebelumnya / Berikutnya</em> (atau bilah bawah di HP) untuk belajar berurutan.</li>
              <li>Tiap bab punya <strong>kuis</strong> di materi terakhir untuk mengukur pemahaman.</li>
              <li>Perhatikan <strong>diagram</strong> di tiap materi — konsep kunci digambarkan agar mudah dicerna. Kotak <span style="color:var(--accent-2)">📷 Rekomendasi gambar</span> menyarankan screenshot nyata yang bisa kamu cari untuk melengkapi.</li>
              <li>Kotak <span style="color:var(--accent)">Tip</span>, <span style="color:var(--amber)">Perhatian</span>, dan <span style="color:var(--danger)">Bahaya</span> menandai poin penting — jangan dilewati.</li>
              <li>Bagian <strong>Latihan Praktik</strong> &amp; <strong>Poin Kunci</strong> di akhir materi membantu mengubah bacaan menjadi keterampilan.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Etika &amp; Legalitas — baca sebelum lanjut</div>
              <p>Memakai TOR/TAILS dan mengakses dark web <strong>legal</strong> di Indonesia dan kebanyakan negara — ini alat privasi yang dipakai jurnalis, aktivis, peneliti keamanan, dan orang biasa yang peduli privasi. <strong>Yang menentukan legal/tidaknya adalah apa yang kamu lakukan</strong>, bukan alatnya.</p>
              <p>Membeli/menjual barang ilegal, mengakses materi terlarang, menipu, atau membobol sistem orang lain tetap melanggar hukum — termasuk UU ITE dan KUHP di Indonesia. Modul ini <strong>tidak</strong> memberikan tautan ke pasar gelap atau instruksi untuk aktivitas ilegal. Pakai ilmunya untuk melindungi diri dan belajar, bukan merugikan orang lain.</p>
            </div>

            <h4>Peta belajar</h4>
            <div class="map">
              <div class="row"><span class="ix">01</span><div><h5>The TOR Browser</h5><p>Pondasi anonimitas: cara kerja onion routing, instalasi &amp; verifikasi aman (Windows), bridges &amp; pluggable transports untuk melawan sensor, kombinasi dengan VPN, dan setelan keamanan maksimum + teori informasi.</p></div></div>
              <div class="row"><span class="ix">02</span><div><h5>TAILS — Amnesic Incognito Live System</h5><p>Sistem operasi “lupa ingatan” yang merutekan semua trafik lewat Tor dan tak meninggalkan jejak. Membuat USB &amp; booting di Windows, dasar pemakaian, persistence terenkripsi, captive portal, dan soal VPN.</p></div></div>
              <div class="row"><span class="ix">03</span><div><h5>Mengakses Dark Net — Entry Points</h5><p>Memahami struktur web (clear/deep/dark) &amp; cara kerja onion service, menemukan hidden service lewat search &amp; direktori, dan — yang terpenting — memverifikasi keaslian serta mendeteksi tiruan/phishing.</p></div></div>
              <div class="row"><span class="ix">04</span><div><h5>Praktik Lanjutan — Hands-On Labs</h5><p>8 lab praktik bertingkat: membangun &amp; mengeraskan TAILS, uji kebocoran, mengunjungi onion sah, PGP, OnionShare, menjalankan onion service sendiri, deteksi penipuan, hingga menyusun threat model + rencana OPSEC pribadi.</p></div></div>
              <div class="row"><span class="ix">05</span><div><h5>Komunikasi Privat — Email</h5><p>Membangun persona pseudonim (OPSEC), email sementara, penyedia email privat (zero-access encryption), email darknet (.onion), dan memilih layanan yang tepat untuk tiap konteks.</p></div></div>
              <div class="row"><span class="ix">06</span><div><h5>Komunikasi Privat — Instant Messaging</h5><p>Protokol Jabber/XMPP terfederasi, menyiapkan akun lewat Pidgin di TAILS, mengaktifkan enkripsi end-to-end OTR, dan memverifikasi kontak untuk melawan serangan man-in-the-middle.</p></div></div>
              <div class="row"><span class="ix">07</span><div><h5>Manajemen &amp; Berbagi File</h5><p>Tiga dimensi keamanan file: membersihkan metadata (MAT2), berbagi anonim via OnionShare, penghapusan aman (dan kenapa shred gagal di SSD), serta enkripsi penuh storage (LUKS/VeraCrypt) &amp; crypto-erase.</p></div></div>
              <div class="row"><span class="ix">08</span><div><h5>Enkripsi</h5><p>Fondasi kriptografi: simetris vs asimetris vs hibrida, membuat &amp; mengelola PGP key pair, enkripsi/dekripsi teks &amp; file, serta tanda tangan digital untuk membuktikan keaslian &amp; keutuhan.</p></div></div>
              <div class="row"><span class="ix">09</span><div><h5>Cryptocurrency — Bitcoin &amp; Privasi Finansial</h5><p>Dompet &amp; seed phrase, mengapa Bitcoin pseudonim (bukan anonim), cara memperoleh secara legal, mengirim/menerima dengan kebiasaan privat, serta konsep mixer beserta realitas hukumnya. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">10</span><div><h5>Cryptocurrency — Monero</h5><p>Privacy coin paling kuat: ring signatures, stealth addresses, dan RingCT yang menutup pengirim, penerima, dan jumlah secara default. Membuat &amp; memulihkan dompet di TAILS, cara memperoleh, serta realitas hukum &amp; risiko delisting. Bukan nasihat hukum/finansial.</p></div></div>
              <div class="row"><span class="ix">11</span><div><h5>Qubes OS — Keamanan lewat Isolasi</h5><p>Sistem operasi yang mengurung tiap aktivitas dalam mesin virtual terpisah (qube). Instalasi &amp; verifikasi, security domains, memindahkan file/teks antar-domain, menangani file mencurigakan via disposable qube, dan menyambung ke TOR lewat Whonix Gateway.</p></div></div>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Prasyarat &amp; cara belajar yang sehat</div>
              <p>Tidak ada prasyarat teknis berat. Cukup terbiasa memakai komputer (Windows/macOS/Linux) dan USB flash drive. Belajarlah dengan ritme bebas, dan <strong>mulai dari yang sesuai kebutuhanmu</strong> — bagi banyak orang, TOR Browser + kebiasaan OPSEC saja sudah jauh. Naik ke TAILS lalu Qubes seiring kebutuhan. Keamanan adalah kebiasaan yang tumbuh, bukan garis akhir.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Satu janji untuk dirimu</div>
              <p>Refleks paling berharga di seluruh modul ini sederhana: <strong>berhenti dan berpikir saat ragu.</strong> Berani menutup tab, menunda klik, dan memverifikasi dulu. Alat melindungi celah teknis; kamu yang melindungi celah manusia.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Ilustrasi sampul "privasi &amp; anonimitas digital" dan diagram ringkas tumpukan keamanan (TOR + TAILS + PGP + Monero + Qubes) sebagai gambaran besar.</p>
              <p><span class="ir-key">Cari: "digital privacy anonymity illustration", "defense in depth privacy stack"</span></p>
            </div>
          `,
          takeaways:[
            "Alatnya (TOR/TAILS/Qubes) legal; tanggung jawab ada pada cara kamu memakainya.",
            "Tujuan modul: proteksi diri, pemahaman teknis mendalam, dan kesadaran keamanan — bukan aktivitas ilegal.",
            "Alur belajar menanjak: TOR → TAILS → Dark Net → Lab → Email → IM → File → Enkripsi → Bitcoin → Monero → Qubes; kerjakan kuis tiap bab.",
            "Refleks inti: berhenti & berpikir saat ragu. Mulai dari yang sesuai kebutuhanmu, naik bertahap."
          ]
        }
      ]
};
