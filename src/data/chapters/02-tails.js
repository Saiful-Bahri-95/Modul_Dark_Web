/* Bab 2 — id: "tails" (rev: + materi deep-dive internal TAILS)
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"tails",
      title:"TAILS — Amnesic Incognito Live System",
      lectures:[
        {
          id:"tails-why",
          title:"Kenapa TOR Browser di Windows Belum Cukup",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">TOR Browser melindungi <em>trafik</em>-mu dengan sangat baik. Tapi ia berjalan di atas Windows — dan Windows itu sendiri menyimpan jejak serta bisa "bocor" di banyak titik yang tak terlihat. Inilah lubang yang ditutup oleh TAILS.</p>

            <h4>Anonimitas hanya sekuat lapisan terlemahnya</h4>
            <p>Bayangkan kamu memakai brankas baja (TOR) untuk menyimpan dokumen rahasia, tapi brankas itu kamu taruh di ruang tamu yang kameranya menyala dan pintunya tak terkunci (Windows). Percuma. Penyerang tak perlu membobol brankas kalau ia sudah ada di dalam ruangan. Konsep ini akan terus muncul: <strong>satu titik lemah membatalkan semua lapisan kuat di atasnya.</strong></p>

            <h4>Empat cara Windows membocorkan jejakmu</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empat sumber kebocoran di Windows">
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">TOR aman, tapi Windows di bawahnya bocor</text>
                <rect x="250" y="44" width="220" height="40" rx="9" fill="#15202b" stroke="#4fe0d0"/>
                <text x="360" y="69" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="12" font-weight="700">TOR Browser (trafik aman)</text>
                <g font-family="monospace" font-size="10.5">
                  <rect x="30" y="120" width="150" height="78" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="105" y="142" text-anchor="middle" fill="#fb7185" font-weight="700">Jejak di disk</text>
                  <text x="105" y="160" text-anchor="middle" fill="#9fb4c4">pagefile, prefetch,</text>
                  <text x="105" y="174" text-anchor="middle" fill="#9fb4c4">thumbnail, riwayat</text>

                  <rect x="200" y="120" width="150" height="78" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="275" y="142" text-anchor="middle" fill="#fb7185" font-weight="700">Malware di host</text>
                  <text x="275" y="160" text-anchor="middle" fill="#9fb4c4">keylogger / spyware</text>
                  <text x="275" y="174" text-anchor="middle" fill="#9fb4c4">lihat sebelum TOR</text>

                  <rect x="370" y="120" width="150" height="78" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="445" y="142" text-anchor="middle" fill="#fb7185" font-weight="700">Telemetri & app</text>
                  <text x="445" y="160" text-anchor="middle" fill="#9fb4c4">kirim data di LUAR</text>
                  <text x="445" y="174" text-anchor="middle" fill="#9fb4c4">jalur TOR</text>

                  <rect x="540" y="120" width="150" height="78" rx="9" fill="#15202b" stroke="#fb7185"/>
                  <text x="615" y="142" text-anchor="middle" fill="#fb7185" font-weight="700">Tidak amnesik</text>
                  <text x="615" y="160" text-anchor="middle" fill="#9fb4c4">sistem "mengingat"</text>
                  <text x="615" y="174" text-anchor="middle" fill="#9fb4c4">setelah ditutup</text>
                </g>
                <text x="360" y="226" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11">Browser-nya anonim, tapi lingkungan di bawahnya tidak.</text>
              </svg>
              <figcaption>TOR mengamankan jalur keluar; ia tidak bisa membersihkan jejak yang ditinggalkan sistem operasi.</figcaption>
            </figure>

            <ul>
              <li><strong>Jejak di disk.</strong> Windows terus menulis ke penyimpanan: file <code>pagefile.sys</code>/<code>hiberfil.sys</code> (bisa memuat potongan isi memori), <em>prefetch</em>, thumbnail cache, daftar dokumen terakhir, dan banyak lagi. Bahkan setelah "bersih-bersih", sisa data sering tertinggal dan bisa dipulihkan secara forensik.</li>
              <li><strong>Malware di host.</strong> Kalau Windows-mu sudah terinfeksi keylogger atau spyware, anonimitas TOR jadi sia-sia: penyerang melihat ketikan dan layarmu <em>sebelum</em> data sempat dienkripsi TOR. TOR melindungi dari pengintai di jaringan, bukan dari mata-mata yang sudah ada di dalam komputermu.</li>
              <li><strong>Telemetri & aplikasi lain.</strong> Windows dan aplikasi lain (updater, cloud sync, antivirus) rutin mengirim data ke internet <em>di luar</em> TOR. Trafik sampingan ini bisa menautkan waktu dan pola aktivitasmu.</li>
              <li><strong>Tidak amnesik.</strong> TOR Browser hanyalah satu aplikasi; sisa sistem tetap "mengingat" segalanya setelah kamu menutupnya.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Kesimpulannya</div>
              <p>Browser anonim di atas OS yang penuh jejak dan berpotensi terinfeksi adalah <strong>tautan lemah</strong>. Kita butuh pendekatan di tingkat sistem operasi — bukan sekadar satu aplikasi. Di situlah TAILS hadir.</p>
            </div>
          `,
          takeaways:[
            "Anonimitas hanya sekuat lapisan terlemahnya; OS di bawah browser bisa membatalkan perlindungan TOR.",
            "Windows menulis jejak ke disk (pagefile, prefetch, thumbnail) yang bisa dipulihkan secara forensik.",
            "Malware di host melihat aktivitasmu sebelum TOR mengenkripsi; telemetri/app lain bocor di luar TOR.",
            "Solusinya pendekatan tingkat-OS yang amnesik — itulah TAILS."
          ]
        },
        {
          id:"tails-what",
          title:"Apa Itu TAILS?",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">TAILS (<em>The Amnesic Incognito Live System</em>) adalah sistem operasi berbasis Debian Linux yang dijalankan langsung dari USB. Ia merutekan <strong>semua</strong> trafik lewat TOR, dan setelah dimatikan ia <strong>tidak meninggalkan jejak apa pun</strong> di komputer yang kamu pakai.</p>

            <h4>Tiga sifat inti — kunci memahami TAILS</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga sifat inti TAILS">
                <text x="360" y="26" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="14" font-weight="700">A.I.L.S — tiga sifat inti</text>
                <g font-family="monospace">
                  <rect x="30" y="48" width="200" height="120" rx="12" fill="#15202b" stroke="#4fe0d0"/>
                  <text x="130" y="80" text-anchor="middle" fill="#4fe0d0" font-size="13" font-weight="700">Amnesik</text>
                  <text x="130" y="106" text-anchor="middle" fill="#9fb4c4" font-size="10">tak menulis apa pun</text>
                  <text x="130" y="122" text-anchor="middle" fill="#9fb4c4" font-size="10">ke disk komputer;</text>
                  <text x="130" y="138" text-anchor="middle" fill="#9fb4c4" font-size="10">tiap reboot = bersih</text>

                  <rect x="260" y="48" width="200" height="120" rx="12" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="80" text-anchor="middle" fill="#6ad7ff" font-size="13" font-weight="700">Incognito</text>
                  <text x="360" y="106" text-anchor="middle" fill="#9fb4c4" font-size="10">SEMUA koneksi</text>
                  <text x="360" y="122" text-anchor="middle" fill="#9fb4c4" font-size="10">dipaksa lewat TOR;</text>
                  <text x="360" y="138" text-anchor="middle" fill="#9fb4c4" font-size="10">koneksi langsung diblokir</text>

                  <rect x="490" y="48" width="200" height="120" rx="12" fill="#15202b" stroke="#f5b748"/>
                  <text x="590" y="80" text-anchor="middle" fill="#f5b748" font-size="13" font-weight="700">Live System</text>
                  <text x="590" y="106" text-anchor="middle" fill="#9fb4c4" font-size="10">boot dari USB,</text>
                  <text x="590" y="122" text-anchor="middle" fill="#9fb4c4" font-size="10">tak menyentuh OS</text>
                  <text x="590" y="138" text-anchor="middle" fill="#9fb4c4" font-size="10">asli di komputer</text>
                </g>
              </svg>
              <figcaption>Amnesik (tak berjejak), Incognito (semua lewat TOR), Live (jalan dari USB tanpa menyentuh hard disk).</figcaption>
            </figure>

            <ul>
              <li><strong>Amnesik</strong> — secara default TAILS berjalan sepenuhnya di RAM dan tidak menulis apa pun ke hard disk komputer. Begitu kamu reboot atau mencabut USB, semua sesi lenyap. Lembar baru setiap kali.</li>
              <li><strong>Incognito</strong> — TAILS memaksa <em>seluruh</em> koneksi lewat jaringan TOR. Aplikasi yang mencoba menghubungi internet secara langsung (di luar TOR) otomatis diblokir, jadi tidak ada kebocoran "tak sengaja".</li>
              <li><strong>Live system</strong> — TAILS boot langsung dari USB dan mengubah komputer mana pun menjadi mesin aman sementara, tanpa mengutak-atik Windows/macOS yang terpasang di komputer itu.</li>
            </ul>

            <h4>Siapa yang memakainya</h4>
            <p>Jurnalis investigasi, pelapor pelanggaran (whistleblower), aktivis HAM di negara represif, dan siapa pun yang butuh tidak meninggalkan jejak. TAILS adalah salah satu alat yang direkomendasikan untuk komunikasi sumber yang sangat sensitif — bukan karena "rahasia jahat", tapi karena perlindungan tingkat-OS memang sekuat itu.</p>

            <div class="box tip">
              <div class="bx-title">◇ Efek samping yang menguntungkan</div>
              <p>Karena amnesik, TAILS tahan terhadap banyak malware yang ingin "menetap": reboot mengembalikan sistem ke kondisi bersih. Konsekuensinya, kalau kamu ingin menyimpan sesuatu (kunci, dokumen, setelan), kamu harus <em>sengaja</em> mengaktifkan fitur Persistent Storage — dibahas khusus nanti.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar <strong>desktop TAILS</strong> (lingkungan GNOME) dan logo resmi, agar kamu mengenali tampilannya sebelum benar-benar mem-boot.</p>
              <p><span class="ir-key">Cari: "tails os desktop screenshot", "tails gnome desktop"</span> — sumber resmi: tails.net</p>
            </div>
          `,
          takeaways:[
            "TAILS = OS live berbasis Debian yang dijalankan dari USB.",
            "Tiga sifat inti: amnesik (tak berjejak, jalan di RAM), incognito (semua lewat TOR), live (tak menyentuh OS host).",
            "Dipakai jurnalis, whistleblower, aktivis; sifat amnesik juga membuatnya tahan malware persisten.",
            "Untuk menyimpan data dengan sengaja, perlu mengaktifkan Persistent Storage."
          ]
        },
        {
          id:"tails-vs-vm",
          title:"TAILS vs VM vs Whonix/Qubes — Memilih Lingkungan",
          dur:"konsep · ± 9 menit",
          body:`
            <p class="lead">Pertanyaan wajar: kalau cuma mau anonim, kenapa tidak jalankan TOR di mesin virtual (VirtualBox/VMware) saja yang lebih praktis? Jawabannya ada pada satu pertanyaan: <strong>siapa yang menjadi pondasi paling bawah dari tumpukan sistemmu?</strong></p>

            <h4>Konsep berlapis: yang di bawah memegang kendali</h4>
            <p>Anggap sistem sebagai tumpukan. Lapisan paling bawah selalu bisa mengintip dan mengontrol semua yang ada di atasnya — tidak peduli seberapa aman lapisan atas.</p>
            <figure class="fig">
              <svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perbandingan tumpukan sistem">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Siapa di lapisan paling bawah?</text>
                <g font-family="monospace" font-size="9.5">
                  <!-- TOR on Windows -->
                  <text x="90" y="48" text-anchor="middle" fill="#9fb4c4" font-size="10">TOR di Windows</text>
                  <rect x="20" y="54" width="140" height="22" fill="#15202b" stroke="#4fe0d0"/><text x="90" y="69" text-anchor="middle" fill="#4fe0d0">TOR</text>
                  <rect x="20" y="78" width="140" height="22" fill="#1b2733" stroke="#fb7185"/><text x="90" y="93" text-anchor="middle" fill="#fb7185">Windows</text>
                  <rect x="20" y="102" width="140" height="22" fill="#111922" stroke="#34475a"/><text x="90" y="117" text-anchor="middle" fill="#9fb4c4">Hardware</text>
                  <!-- TOR on VM -->
                  <text x="270" y="48" text-anchor="middle" fill="#9fb4c4" font-size="10">TOR di VM</text>
                  <rect x="200" y="42" width="140" height="18" fill="#15202b" stroke="#4fe0d0"/><text x="270" y="55" text-anchor="middle" fill="#4fe0d0">TOR</text>
                  <rect x="200" y="62" width="140" height="18" fill="#15202b" stroke="#6ad7ff"/><text x="270" y="75" text-anchor="middle" fill="#6ad7ff">Linux (guest)</text>
                  <rect x="200" y="82" width="140" height="18" fill="#15202b" stroke="#6ad7ff"/><text x="270" y="95" text-anchor="middle" fill="#6ad7ff">VirtualBox</text>
                  <rect x="200" y="102" width="140" height="18" fill="#1b2733" stroke="#fb7185"/><text x="270" y="115" text-anchor="middle" fill="#fb7185">Windows (host)</text>
                  <rect x="200" y="122" width="140" height="18" fill="#111922" stroke="#34475a"/><text x="270" y="135" text-anchor="middle" fill="#9fb4c4">Hardware</text>
                  <!-- TAILS -->
                  <text x="450" y="48" text-anchor="middle" fill="#9fb4c4" font-size="10">TAILS dari USB</text>
                  <rect x="380" y="60" width="140" height="22" fill="#15202b" stroke="#4fe0d0"/><text x="450" y="75" text-anchor="middle" fill="#4fe0d0">TOR</text>
                  <rect x="380" y="84" width="140" height="22" fill="#15202b" stroke="#5fd98a"/><text x="450" y="99" text-anchor="middle" fill="#5fd98a">TAILS</text>
                  <rect x="380" y="108" width="140" height="22" fill="#111922" stroke="#34475a"/><text x="450" y="123" text-anchor="middle" fill="#9fb4c4">Hardware</text>
                  <!-- Whonix/Qubes -->
                  <text x="630" y="48" text-anchor="middle" fill="#9fb4c4" font-size="10">Whonix di Qubes</text>
                  <rect x="560" y="54" width="140" height="18" fill="#15202b" stroke="#4fe0d0"/><text x="630" y="67" text-anchor="middle" fill="#4fe0d0">TOR (Gateway)</text>
                  <rect x="560" y="74" width="140" height="18" fill="#15202b" stroke="#6ad7ff"/><text x="630" y="87" text-anchor="middle" fill="#6ad7ff">VM terisolasi</text>
                  <rect x="560" y="94" width="140" height="18" fill="#15202b" stroke="#5fd98a"/><text x="630" y="107" text-anchor="middle" fill="#5fd98a">Qubes OS</text>
                  <rect x="560" y="114" width="140" height="18" fill="#111922" stroke="#34475a"/><text x="630" y="127" text-anchor="middle" fill="#9fb4c4">Hardware</text>
                </g>
                <text x="360" y="170" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="10.5">Merah = Windows jadi pondasi. Kalau Windows terinfeksi, semua di atasnya runtuh.</text>
                <text x="360" y="190" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="10.5">Hijau = TAILS/Qubes jadi pondasi; Windows tidak ikut berjalan.</text>
                <text x="360" y="226" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Lapisan terbawah selalu bisa mengintip semua lapisan di atasnya.</text>
              </svg>
              <figcaption>Di skenario VM, Windows tetap pondasi. Di TAILS, Windows tidak ikut jalan sama sekali.</figcaption>
            </figure>

            <h4>Kenapa "TOR di VM Windows" punya kelemahan</h4>
            <ul>
              <li><strong>Kalau Windows terinfeksi, semua runtuh.</strong> Keylogger/spyware di Windows berada di lapisan <em>bawah</em> VM-mu — ia bisa merekam ketikan dan menangkap layar VM <em>sebelum</em> TOR mengenkripsi. TOR menyembunyikan trafik dari jaringan, bukan dari mata-mata yang sudah ada di dalam sistem.</li>
              <li><strong>Host tetap meninggalkan jejak.</strong> Meski aktivitasmu di dalam VM, Windows tetap menulis ke disk: file swap/paging (bisa berisi potongan memori VM), log VirtualBox, telemetri. Sifat "amnesik" bocor ke host yang tidak amnesik.</li>
              <li><strong>Risiko salah setel jaringan.</strong> Konfigurasi VM yang keliru bisa membuat sebagian trafik lolos ke luar TOR tanpa kamu sadari.</li>
            </ul>

            <h4>Kapan pilih apa</h4>
            <ul>
              <li><strong>TAILS</strong> — paling pas untuk anonimitas sekali-pakai dan tanpa jejak, di komputer mana pun (termasuk komputer pinjaman). Cocok untuk mayoritas kebutuhan di kursus ini.</li>
              <li><strong>Qubes OS + Whonix</strong> — untuk keamanan harian berbasis isolasi (mengurung tiap aktivitas dalam VM terpisah). Lebih kuat untuk pemakaian rutin, tapi butuh komputer khusus dengan spesifikasi memadai. Dibahas di bab terakhir.</li>
              <li><strong>TOR di VM</strong> — boleh untuk belajar/eksperimen, tapi <strong>bukan</strong> untuk anonimitas serius karena Windows tetap jadi pondasi.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Intinya satu kalimat</div>
              <p>Jangan menumpuk perlindungan di atas pondasi yang tidak kamu percayai. TAILS dan Qubes menang karena merekalah yang menjadi pondasi — bukan menumpang di atas Windows.</p>
            </div>
          `,
          practice:`<p>Gambar ulang empat tumpukan di atas (TOR-di-Windows, TOR-di-VM, TAILS, Whonix-di-Qubes) di kertas, lalu lingkari lapisan paling bawah masing-masing. Untuk tiap tumpukan, tulis satu kalimat: "kalau lapisan bawah ini jahat/terinfeksi, apa yang bisa ia lihat?" Latihan ini menanamkan cara berpikir berlapis yang akan kamu pakai menilai sistem apa pun.</p>`,
          takeaways:[
            "Lapisan paling bawah selalu mengendalikan semua di atasnya — itulah penentu keamanan sebenarnya.",
            "TOR di VM Windows lemah: host bisa terinfeksi, meninggalkan jejak, dan salah setel bisa membocorkan trafik.",
            "TAILS & Qubes kuat karena menjadi pondasi; Windows tidak ikut berjalan.",
            "TAILS untuk anonim tanpa jejak sekali-pakai; Qubes untuk keamanan harian berbasis isolasi."
          ]
        },
        {
          id:"tails-install-options",
          title:"Opsi & Persyaratan Instalasi TAILS",
          dur:"konsep · ± 5 menit",
          body:`
            <p class="lead">Sebelum memasang, kenali pilihan medianya dan pastikan perangkatmu memenuhi syarat. Memilih media yang tepat sejak awal menghindari kekecewaan di tengah jalan.</p>

            <h4>Yang kamu butuhkan</h4>
            <ul>
              <li>Sebuah <strong>USB flash drive minimal 8 GB</strong> yang isinya boleh dihapus total — seluruh USB akan ditimpa oleh TAILS.</li>
              <li>Komputer <strong>64-bit</strong> (PC Windows/Linux atau Mac Intel; Mac chip Apple/M1 dst belum didukung untuk boot langsung).</li>
              <li>Kemampuan untuk <strong>boot dari USB</strong> (hampir semua komputer modern bisa — caranya dibahas di materi booting).</li>
              <li>Komputer kedua (HP atau laptop lain) sangat membantu untuk membaca panduan resmi sambil mem-boot TAILS di komputer pertama.</li>
            </ul>

            <h4>Pilihan media</h4>
            <ul>
              <li><strong>USB stick (paling direkomendasikan).</strong> Bisa di-boot, mendukung <em>Persistent Storage</em> terenkripsi, dan bisa di-update. Inilah cara standar memakai TAILS.</li>
              <li><strong>DVD.</strong> Bersifat read-only — aman dari modifikasi, tapi <em>tidak</em> bisa menyimpan apa pun (tanpa persistence) dan lambat. Cocok hanya untuk kasus khusus.</li>
              <li><strong>Mesin virtual (VM).</strong> Berguna untuk mencoba tampilan TAILS tanpa USB, tapi <strong>kurang aman</strong> untuk pemakaian sungguhan karena OS host (mis. Windows) tetap menjadi pondasi — persis kelemahan yang sudah kita bahas.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Penting soal USB</div>
              <p>Pakai USB <strong>berkualitas baik</strong> dan khusus untuk TAILS. USB murah/abal-abal sering korup dan membuat TAILS gagal boot di tengah jalan. Dan ingat: proses pemasangan <strong>menghapus seluruh isi USB</strong> — pindahkan dulu data penting darinya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Halaman unduh resmi TAILS yang menampilkan pilihan "Install from Windows", beserta ikon USB 8 GB.</p>
              <p><span class="ir-key">Cari: "tails download install from windows page"</span> — sumber resmi: tails.net/install</p>
            </div>
          `,
          takeaways:[
            "Butuh USB minimal 8 GB (isinya akan dihapus total) + komputer 64-bit yang bisa boot dari USB.",
            "USB stick = pilihan utama: bootable, mendukung Persistent Storage, bisa di-update.",
            "DVD read-only (tanpa simpan), VM hanya untuk coba-coba dan kurang aman.",
            "Gunakan USB berkualitas; USB abal-abal sering bikin TAILS gagal boot."
          ]
        },
        {
          id:"tails-install-all",
          title:"Memasang TAILS ke USB dari Windows",
          dur:"praktik · ± 30 menit",
          body:`
            <p class="lead">Di Windows, cara resmi termudah memasang TAILS adalah: unduh berkas <em>USB image</em>-nya, verifikasi keasliannya, lalu tulis (flash) ke USB memakai aplikasi <strong>balenaEtcher</strong>. Ikuti urut, jangan dilompati — verifikasi adalah bagian terpenting.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur memasang TAILS ke USB">
                <defs><marker id="art" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <g font-family="monospace" font-size="11">
                  <rect x="14" y="40" width="150" height="50" rx="9" fill="#15202b" stroke="#34475a"/>
                  <text x="89" y="62" text-anchor="middle" fill="#e9f1f7" font-weight="700">1. Unduh</text>
                  <text x="89" y="79" text-anchor="middle" fill="#9fb4c4">USB image (.img)</text>
                  <rect x="200" y="40" width="150" height="50" rx="9" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="275" y="62" text-anchor="middle" fill="#6ad7ff" font-weight="700">2. Verifikasi</text>
                  <text x="275" y="79" text-anchor="middle" fill="#9fb4c4">keaslian image</text>
                  <rect x="386" y="40" width="150" height="50" rx="9" fill="#15202b" stroke="#f5b748"/>
                  <text x="461" y="62" text-anchor="middle" fill="#f5b748" font-weight="700">3. Flash USB</text>
                  <text x="461" y="79" text-anchor="middle" fill="#9fb4c4">balenaEtcher</text>
                  <rect x="572" y="40" width="134" height="50" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="639" y="62" text-anchor="middle" fill="#5fd98a" font-weight="700">4. Selesai</text>
                  <text x="639" y="79" text-anchor="middle" fill="#9fb4c4">USB siap boot</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#art)">
                  <line x1="164" y1="65" x2="196" y2="65"/><line x1="350" y1="65" x2="382" y2="65"/><line x1="536" y1="65" x2="568" y2="65"/>
                </g>
              </svg>
              <figcaption>Empat langkah: unduh → verifikasi → flash → boot. Jangan lewati verifikasi.</figcaption>
            </figure>

            <h4>Langkah demi langkah (Windows)</h4>
            <ol class="steps">
              <li>Buka <code>tails.net/install</code> dan pilih jalur <strong>"Install from Windows"</strong>. Ikuti asisten di situs itu — ia akan menuntunmu sesuai versi terbaru.</li>
              <li><strong>Unduh USB image</strong> TAILS (berkas berukuran sekitar 1,5 GB, berakhiran <code>.img</code>).</li>
              <li><strong>Verifikasi keaslian.</strong> Situs TAILS menyediakan verifikasi otomatis lewat browser (ekstensi/halaman "Verify"): cukup pilih berkas yang baru kamu unduh, dan ia akan mengecek apakah cocok dengan rilis resmi. Bila mau lebih kuat, verifikasi tanda tangan OpenPGP-nya pakai Gpg4win/Kleopatra seperti pada bab TOR. <strong>Jangan lanjut bila verifikasi gagal.</strong></li>
              <li><strong>Unduh dan pasang balenaEtcher</strong> dari <code>balena.io/etcher</code> (gratis, untuk Windows). Etcher adalah alat untuk menulis image ke USB dengan aman.</li>
              <li>Tancapkan USB (≥ 8 GB). Buka Etcher → <strong>"Flash from file"</strong> → pilih berkas <code>.img</code> TAILS → <strong>"Select target"</strong> → pilih USB-mu (pastikan benar, jangan sampai salah pilih hard disk!) → <strong>"Flash!"</strong>.</li>
              <li>Tunggu hingga selesai dan tervalidasi. Setelah itu USB-mu sudah berisi TAILS dan siap di-boot. (Windows mungkin menampilkan pesan "drive perlu diformat" — <strong>abaikan dan klik Cancel</strong>; itu karena Windows tidak mengenali format Linux, bukan tanda gagal.)</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Hati-hati memilih target</div>
              <p>Saat memilih "target" di Etcher, <strong>pastikan yang terpilih adalah USB</strong>, bukan hard disk internalmu. Salah pilih = data di disk itu terhapus. Etcher biasanya menyembunyikan disk sistem demi keamanan, tapi tetap periksa kapasitas/nama drive sebelum menekan Flash.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar <strong>balenaEtcher</strong> tiga langkah (Flash from file → Select target → Flash), dan halaman "Verify" di situs TAILS.</p>
              <p><span class="ir-key">Cari: "balenaEtcher flash tails usb", "tails verify download browser"</span></p>
            </div>
          `,
          practice:`<p>Lakukan pemasangan sungguhan di USB kosong: unduh image TAILS, <em>verifikasi</em> sampai dinyatakan cocok, lalu flash dengan balenaEtcher. Jika kamu belum punya USB, minimal buka halaman tails.net/install dan baca alur "Install from Windows" sampai paham tiap langkahnya. Fokusnya: jangan pernah memakai image yang gagal verifikasi.</p>`,
          takeaways:[
            "Alur Windows: unduh USB image (.img) → verifikasi → flash dengan balenaEtcher → boot.",
            "Verifikasi keaslian wajib (lewat halaman Verify TAILS atau OpenPGP); gagal verifikasi = jangan dipakai.",
            "Saat flash, pilih target USB dengan cermat — salah pilih bisa menghapus hard disk.",
            "Pesan Windows 'perlu diformat' setelah flash itu normal; klik Cancel, bukan Format."
          ]
        },
        {
          id:"tails-start",
          title:"Menjalankan (Booting) TAILS di Windows",
          dur:"praktik · ± 12 menit",
          body:`
            <p class="lead">USB sudah jadi. Sekarang bagian yang sering bikin pemula bingung: menyuruh komputer <em>boot dari USB</em>, bukan dari Windows. Sebenarnya mudah begitu tahu tombolnya.</p>

            <h4>Dua cara masuk ke menu boot</h4>
            <ol class="steps">
              <li><strong>Cara cepat (Boot Menu).</strong> Matikan komputer. Tancapkan USB TAILS. Nyalakan, lalu segera tekan berulang tombol <strong>Boot Menu</strong>. Tombolnya berbeda tiap merek: umumnya <code>Esc</code>, <code>F12</code>, <code>F9</code>, <code>F10</code>, atau <code>F2</code> (HP sering F9, Dell F12, Lenovo F12/Fn+F12, Asus Esc/F8). Dari daftar yang muncul, pilih nama USB-mu.</li>
              <li><strong>Cara lewat Windows.</strong> Buka <em>Settings → System → Recovery → Advanced startup → Restart now</em>. Setelah restart, pilih <em>Use a device</em> lalu pilih USB-mu. Berguna kalau menu boot lewat tombol susah ditangkap.</li>
            </ol>

            <figure class="fig">
              <svg viewBox="0 0 720 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Alur booting TAILS">
                <defs><marker id="arbt" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6ad7ff"/></marker></defs>
                <g font-family="monospace" font-size="10.5">
                  <rect x="14" y="44" width="150" height="46" rx="9" fill="#15202b" stroke="#34475a"/>
                  <text x="89" y="64" text-anchor="middle" fill="#e9f1f7" font-weight="700">Matikan + colok USB</text>
                  <text x="89" y="80" text-anchor="middle" fill="#9fb4c4">lalu nyalakan</text>
                  <rect x="200" y="44" width="150" height="46" rx="9" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="275" y="64" text-anchor="middle" fill="#6ad7ff" font-weight="700">Tekan tombol</text>
                  <text x="275" y="80" text-anchor="middle" fill="#9fb4c4">Boot Menu (Esc/F12..)</text>
                  <rect x="386" y="44" width="150" height="46" rx="9" fill="#15202b" stroke="#f5b748"/>
                  <text x="461" y="64" text-anchor="middle" fill="#f5b748" font-weight="700">Pilih USB</text>
                  <text x="461" y="80" text-anchor="middle" fill="#9fb4c4">dari daftar</text>
                  <rect x="572" y="44" width="134" height="46" rx="9" fill="#15202b" stroke="#5fd98a"/>
                  <text x="639" y="64" text-anchor="middle" fill="#5fd98a" font-weight="700">Tails Greeter</text>
                  <text x="639" y="80" text-anchor="middle" fill="#9fb4c4">layar sambutan</text>
                </g>
                <g stroke="#6ad7ff" stroke-width="2" marker-end="url(#arbt)">
                  <line x1="164" y1="67" x2="196" y2="67"/><line x1="350" y1="67" x2="382" y2="67"/><line x1="536" y1="67" x2="568" y2="67"/>
                </g>
              </svg>
              <figcaption>Begitu komputer memilih USB, TAILS akan memuat dan menampilkan layar sambutan (Greeter).</figcaption>
            </figure>

            <h4>Kalau USB tidak muncul atau langsung masuk Windows</h4>
            <ul>
              <li><strong>Matikan Fast Startup.</strong> Fitur Windows ini bisa membuat komputer tidak benar-benar mati sehingga melewati menu boot. Matikan lewat <em>Control Panel → Power Options → Choose what the power buttons do → Turn on fast startup (hilangkan centang)</em>.</li>
              <li><strong>Secure Boot.</strong> TAILS versi baru umumnya mendukung Secure Boot. Bila tetap gagal, masuk BIOS/UEFI dan nonaktifkan Secure Boot sementara, lalu coba lagi.</li>
              <li><strong>Coba port USB lain</strong> (utamakan USB 2.0/port langsung di bodi, hindari hub), dan pastikan USB benar-benar sudah ter-flash dengan benar.</li>
            </ul>

            <h4>Tails Greeter — layar sambutan</h4>
            <p>Setelah TAILS memuat, muncul <strong>Tails Greeter</strong>. Di sini kamu memilih <strong>bahasa &amp; tata letak keyboard</strong>, membuka <em>Persistent Storage</em> (jika sudah kamu aktifkan — dibahas nanti), dan bisa mengatur opsi tambahan. Klik <strong>"Start Tails"</strong> untuk masuk ke desktop. Beberapa saat kemudian TAILS otomatis menyambungkan diri ke jaringan TOR.</p>

            <div class="box warn">
              <div class="bx-title">▲ Catatan BitLocker/dual-boot</div>
              <p>Mem-boot ke TAILS tidak mengubah Windows-mu. Tapi bila disk Windows-mu terenkripsi BitLocker, jangan panik melihat partisi terkunci di TAILS — itu wajar. TAILS tidak menyentuh atau merusak instalasi Windows; ia hanya berjalan dari USB.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Contoh layar <strong>Boot Menu</strong> sebuah laptop. (2) Tampilan <strong>Tails Greeter</strong> (pemilihan bahasa & tombol Start Tails).</p>
              <p><span class="ir-key">Cari: "laptop boot menu usb select", "tails greeter welcome screen"</span></p>
            </div>
          `,
          practice:`<p>Cari tahu tombol Boot Menu untuk merek komputermu (sebut mereknya, mis. "HP boot menu key"). Catat tombolnya. Lalu coba boot ke TAILS: matikan, colok USB, tekan tombol itu berulang, pilih USB, dan sampai ke Tails Greeter. Kalau gagal, terapkan tips "Fast Startup/Secure Boot" di atas. Berhasil mencapai Greeter = kamu sudah menguasai langkah tersulit.</p>`,
          takeaways:[
            "Boot dari USB lewat Boot Menu (Esc/F12/F9/F2, beda tiap merek) atau via Windows Advanced startup → Use a device.",
            "Jika USB tak muncul: matikan Fast Startup, nonaktifkan Secure Boot bila perlu, coba port USB lain.",
            "Tails Greeter = layar sambutan untuk pilih bahasa, buka Persistent Storage, lalu Start Tails.",
            "Mem-boot TAILS tidak mengubah/merusak Windows; partisi BitLocker yang terkunci itu normal."
          ]
        },
        {
          id:"tails-basics",
          title:"Dasar-Dasar Memakai TAILS",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Begitu masuk desktop, TAILS terasa seperti sistem biasa — ada menu aplikasi, peramban berkas, dan koneksi internet. Bedanya, semua sudah disetel untuk privasi. Kenali komponen pentingnya supaya tidak meraba-raba.</p>

            <h4>Menyambung ke TOR lebih dulu</h4>
            <p>Setelah Start Tails, muncul asisten <strong>Tor Connection</strong>. Untuk jaringan normal, pilih "Connect to Tor automatically". Bila kamu berada di jaringan yang memblokir TOR, pilih opsi konfigurasi bridge (persis konsep bridge/pluggable transport dari Bab 1). Status koneksi TOR ditampilkan lewat ikon <em>Onion Circuits</em> di pojok — dari situ kamu bisa melihat circuit yang sedang aktif.</p>

            <h4>Aplikasi bawaan yang penting</h4>
            <ul>
              <li><strong>Tor Browser</strong> — peramban utama, sudah terkonfigurasi lewat TOR.</li>
              <li><strong>Thunderbird</strong> — untuk email (berguna di bab Komunikasi).</li>
              <li><strong>KeePassXC</strong> — pengelola kata sandi; penting karena kamu butuh menyimpan passphrase yang kuat.</li>
              <li><strong>Files (peramban berkas), GIMP, LibreOffice, Audacity</strong> — kebutuhan sehari-hari.</li>
              <li><strong>Persistent Storage &amp; Configure persistent volume</strong> — pengaturan penyimpanan permanen (materi berikutnya).</li>
              <li><strong>Unsafe Browser</strong> — peramban <em>tanpa</em> TOR, dipakai HANYA untuk login captive portal WiFi (dibahas khusus). Jangan dipakai untuk browsing biasa.</li>
            </ul>

            <h4>Hal-hal khas yang perlu kamu tahu</h4>
            <ul>
              <li><strong>Semua amnesik secara default.</strong> Apa pun yang kamu simpan ke folder biasa akan hilang saat reboot — kecuali kamu mengaktifkan Persistent Storage.</li>
              <li><strong>Mematikan = membersihkan.</strong> Saat kamu shutdown atau mencabut USB, TAILS sengaja menimpa isi RAM agar tak ada sisa data yang bisa diambil. Ini fitur, bukan bug.</li>
              <li><strong>Jam &amp; zona waktu</strong> dijaga agar tidak membocorkan lokasimu; biarkan apa adanya.</li>
              <li><strong>Administration password</strong> (opsional) bisa diatur di Greeter bila kamu butuh hak admin untuk tugas tertentu; secara default tidak ada demi keamanan.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Kebiasaan baik sejak awal</div>
              <p>Perlakukan tiap sesi TAILS sebagai "sekali pakai". Jangan login ke akun pribadimu, jangan mencampur identitas anonim dengan identitas asli dalam satu sesi, dan biasakan menutup sesi dengan shutdown yang benar — bukan langsung cabut.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar <strong>menu Applications TAILS</strong> dan ikon <strong>Onion Circuits</strong> yang menunjukkan status koneksi TOR.</p>
              <p><span class="ir-key">Cari: "tails applications menu", "tails onion circuits"</span></p>
            </div>
          `,
          practice:`<p>Di dalam TAILS, jelajahi menu Applications dan temukan: Tor Browser, KeePassXC, Persistent Storage, dan Unsafe Browser. Buka Onion Circuits dan amati circuit TOR yang aktif (hubungkan dengan konsep 3-relay Bab 1). Lalu lakukan shutdown yang benar lewat menu daya. Tujuannya: terbiasa dengan tata letak sebelum melakukan tugas sungguhan.</p>`,
          takeaways:[
            "Sambungkan ke TOR dulu lewat asisten Tor Connection; pakai bridge bila jaringan memblokir.",
            "Aplikasi inti: Tor Browser, Thunderbird, KeePassXC; Unsafe Browser hanya untuk captive portal.",
            "Semua amnesik kecuali Persistent Storage; shutdown sengaja menimpa RAM untuk hapus jejak.",
            "Perlakukan tiap sesi sebagai sekali-pakai dan jangan campur identitas anonim dengan asli."
          ]
        },
        {
          id:"tails-persistence",
          title:"Apa Itu Persistence & Kenapa Kita Butuh?",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Sifat amnesik TAILS hebat untuk privasi, tapi merepotkan kalau kamu harus mengetik ulang semua setelan, kunci, dan dokumen setiap kali boot. <strong>Persistent Storage</strong> adalah jalan tengahnya: sebuah brankas terenkripsi di USB yang sama, yang isinya bertahan antar-reboot.</p>

            <h4>Cara kerjanya</h4>
            <p>Saat kamu mengaktifkan fitur ini, TAILS membuat sebuah area terenkripsi (memakai LUKS, standar enkripsi disk Linux) di sisa ruang USB-mu. Hanya area itu yang permanen; sisanya tetap amnesik. Untuk membukanya, kamu memasukkan <strong>passphrase</strong> di Tails Greeter saat boot. Tanpa passphrase yang benar, isinya hanya tumpukan data acak yang tak terbaca — bahkan bila USB-mu hilang atau dicuri.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="USB TAILS: bagian amnesik vs persisten">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Satu USB, dua wilayah</text>
                <rect x="60" y="50" width="280" height="90" rx="12" fill="#15202b" stroke="#6ad7ff"/>
                <text x="200" y="84" text-anchor="middle" fill="#6ad7ff" font-family="monospace" font-size="12" font-weight="700">Sistem TAILS</text>
                <text x="200" y="106" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">amnesik · jalan di RAM</text>
                <text x="200" y="122" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">bersih tiap reboot</text>
                <rect x="380" y="50" width="280" height="90" rx="12" fill="#15202b" stroke="#5fd98a"/>
                <text x="520" y="80" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="12" font-weight="700">Persistent Storage 🔒</text>
                <text x="520" y="102" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">terenkripsi (LUKS)</text>
                <text x="520" y="118" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">bertahan · butuh passphrase</text>
                <text x="360" y="166" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10.5">Tanpa passphrase, wilayah persisten = data acak tak terbaca.</text>
              </svg>
              <figcaption>Persistent Storage menambah "brankas" terenkripsi tanpa menghilangkan sifat amnesik sistem.</figcaption>
            </figure>

            <h4>Apa saja yang bisa dipermanenkan</h4>
            <ul>
              <li><strong>Personal Data</strong> — folder dokumen pribadimu.</li>
              <li><strong>GnuPG</strong> — kunci PGP-mu (sangat berguna di bab Enkripsi).</li>
              <li><strong>Tor Bridges</strong> — agar tak perlu memasukkan bridge tiap kali.</li>
              <li><strong>Thunderbird</strong> — akun & email.</li>
              <li><strong>Dotfiles &amp; Additional Software</strong> — setelan dan paket aplikasi tambahan agar terpasang otomatis tiap boot.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Trade-off yang harus disadari</div>
              <p>Makin banyak yang kamu permanenkan, makin berkurang manfaat "lembar bersih" TAILS — dan makin besar yang bisa terungkap bila passphrase-mu bocor. Prinsipnya: <strong>aktifkan hanya yang benar-benar kamu butuhkan.</strong> Untuk anonimitas paling ketat, sebagian orang sengaja tidak memakai persistence sama sekali.</p>
            </div>
          `,
          takeaways:[
            "Persistent Storage = area terenkripsi (LUKS) di USB yang sama, bertahan antar-reboot.",
            "Dibuka dengan passphrase di Greeter; tanpa itu isinya hanya data acak tak terbaca.",
            "Bisa menyimpan Personal Data, kunci GnuPG, Tor Bridges, Thunderbird, dotfiles, software tambahan.",
            "Trade-off: makin banyak dipermanenkan, makin berkurang manfaat amnesik — aktifkan seperlunya saja."
          ]
        },
        {
          id:"tails-enable-persistence",
          title:"Mengaktifkan Persistent Storage Terenkripsi",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Mengaktifkannya hanya butuh beberapa menit, tapi satu keputusan di sini menentukan keamanan seluruh datamu: <strong>passphrase</strong>. Pilih yang kuat, karena inilah satu-satunya kunci brankasmu.</p>

            <h4>Langkah demi langkah</h4>
            <ol class="steps">
              <li>Di dalam TAILS, buka <em>Applications → Tails → <strong>Persistent Storage</strong></em> (di versi baru namanya "Persistent Storage", dulu "Configure persistent volume").</li>
              <li>Buat <strong>passphrase</strong> yang kuat dan unik. Gunakan frasa panjang yang mudah kamu ingat tapi sulit ditebak (beberapa kata acak digabung jauh lebih kuat daripada satu kata berangka). Ini tidak bisa dipulihkan jika lupa — tidak ada "reset password".</li>
              <li>Setelah area terenkripsi dibuat, kamu akan melihat daftar <strong>fitur yang bisa diaktifkan</strong> (Personal Data, GnuPG, Tor Bridges, Thunderbird, dst). Nyalakan hanya yang kamu perlukan.</li>
              <li><strong>Reboot.</strong> Saat boot berikutnya, di Tails Greeter akan muncul kolom untuk memasukkan passphrase Persistent Storage. Masukkan untuk membuka brankas; biarkan kosong bila ingin sesi murni amnesik.</li>
            </ol>

            <h4>Memakai & menjaga keamanannya</h4>
            <ul>
              <li>File yang kamu taruh di folder <strong>Persistent</strong> akan tetap ada setelah reboot; file di folder lain tetap hilang.</li>
              <li>Simpan passphrase di kepala, atau di pengelola kata sandi terpisah yang aman — jangan ditulis di tempat yang sama dengan USB-nya.</li>
              <li>Kalau merasa USB pernah jatuh ke tangan orang lain, anggap brankas berpotensi dikompromikan: buat ulang dengan passphrase baru dan pindahkan data penting.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Passphrase = satu-satunya kunci</div>
              <p>Enkripsi LUKS sangat kuat — justru karena itu, <strong>lupa passphrase berarti data hilang permanen</strong>, tidak ada pintu belakang. Pilih frasa yang kuat sekaligus benar-benar kamu ingat. Jangan pakai passphrase yang sama dengan akun lain.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar jendela <strong>Persistent Storage</strong> TAILS (daftar fitur dengan tombol on/off) dan kolom passphrase di Greeter.</p>
              <p><span class="ir-key">Cari: "tails persistent storage settings", "tails greeter persistent passphrase"</span></p>
            </div>
          `,
          practice:`<p>Aktifkan Persistent Storage di USB TAILS-mu dengan passphrase kuat (uji buat frasa 4-5 kata acak). Nyalakan fitur "Personal Data" dan "GnuPG" saja dulu. Reboot, buka kembali dengan passphrase, simpan sebuah file uji di folder Persistent, reboot lagi, dan pastikan file itu masih ada. Ini membuktikan kamu paham beda wilayah amnesik vs persisten.</p>`,
          takeaways:[
            "Aktifkan lewat Applications → Tails → Persistent Storage, lalu buat passphrase kuat & unik.",
            "Nyalakan hanya fitur yang diperlukan; masukkan passphrase di Greeter saat boot untuk membukanya.",
            "File di folder Persistent bertahan; folder lain tetap amnesik.",
            "LUKS tanpa pintu belakang: lupa passphrase = data hilang permanen. Jangan samakan dgn akun lain."
          ]
        },
        {
          id:"tails-tor-browser",
          title:"Memakai TOR Browser di TAILS",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">TOR Browser di TAILS mirip dengan di Windows, tapi ada beberapa perbedaan penting yang lahir dari sifat amnesik dan dari fakta bahwa seluruh sistem sudah berada di balik TOR.</p>

            <h4>Yang sama dan yang beda</h4>
            <ul>
              <li><strong>Sama:</strong> semua aturan OPSEC Bab 1 tetap berlaku — jangan login akun asli, jangan resize jendela, jangan tambah add-on, utamakan HTTPS, manfaatkan New Identity/New Circuit dan Onion-Location.</li>
              <li><strong>Beda — unduhan butuh persistence.</strong> Karena TAILS amnesik, file yang kamu unduh akan hilang saat reboot. Untuk menyimpannya, taruh di folder <strong>Persistent</strong>. TOR Browser di TAILS hanya bisa membaca/menulis di area tertentu demi keamanan, jadi gunakan folder Tor Browser/Persistent yang disediakan.</li>
              <li><strong>Beda — seluruh sistem sudah lewat TOR.</strong> Tidak ada risiko "lupa menyalakan TOR" seperti di Windows; bahkan aplikasi lain pun dipaksa lewat TOR.</li>
            </ul>

            <h4>Security level tetap kamu yang atur</h4>
            <p>Sama seperti di Bab 1, klik ikon perisai untuk memilih Standard / Safer / Safest. Untuk kebanyakan orang, <strong>Safer</strong> tetap titik manis. Konsep fingerprinting dan entropi juga berlaku sama — jangan personalisasi.</p>

            <div class="box tip">
              <div class="bx-title">◇ Membuka dokumen unduhan dengan aman</div>
              <p>Ingat aturan Bab 1: jangan membuka dokumen (PDF/DOC) saat online karena bisa memuat sumber luar dan membongkar IP. Di TAILS ini lebih aman karena seluruh trafik tetap lewat TOR, tapi kebiasaan terbaik tetap: simpan dulu, putus dari aktivitas sensitif, baru buka. Bab Qubes nanti menawarkan isolasi yang lebih kuat lagi untuk file mencurigakan.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tangkapan layar TOR Browser berjalan di desktop TAILS, dengan ikon perisai (Security Level) dan indikator circuit terlihat.</p>
              <p><span class="ir-key">Cari: "tor browser on tails security level"</span></p>
            </div>
          `,
          takeaways:[
            "Aturan OPSEC TOR (no login, no resize, no add-on, HTTPS) tetap berlaku penuh di TAILS.",
            "Unduhan bersifat amnesik; simpan ke folder Persistent agar bertahan setelah reboot.",
            "Seluruh sistem TAILS sudah lewat TOR, jadi tak ada risiko 'lupa menyalakan TOR'.",
            "Security level (Safer disarankan) dan konsep anti-fingerprinting sama seperti Bab 1."
          ]
        },
        {
          id:"tails-captive",
          title:"Menghubungkan ke Captive Portal WiFi",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">WiFi hotel, kampus, bandara, atau kafe sering memunculkan halaman login (captive portal) sebelum memberi akses internet. Ini masalah klasik di TAILS: TAILS memaksa semua lewat TOR, padahal halaman login itu harus dibuka <em>sebelum</em> TOR bisa tersambung. Inilah satu-satunya pengecualian yang sah untuk Unsafe Browser.</p>

            <h4>Kenapa terasa "macet"</h4>
            <p>Saat tersambung ke WiFi berportal, TAILS mencoba menyambung ke TOR tapi gagal, karena jaringan belum mengizinkan internet sampai kamu login lewat halaman portal. TOR tidak bisa membuka halaman portal itu (yang justru harus diakses langsung), jadi terjadi kebuntuan.</p>

            <h4>Solusinya: Unsafe Browser</h4>
            <ol class="steps">
              <li>Aktifkan <strong>Unsafe Browser</strong> bila belum: di Tails Greeter, pada opsi tambahan, izinkan Unsafe Browser (di versi tertentu perlu diaktifkan dulu).</li>
              <li>Sambungkan ke WiFi seperti biasa. Saat TOR gagal tersambung, buka <em>Applications → Internet → <strong>Unsafe Browser</strong></em>.</li>
              <li>Di Unsafe Browser, buka sembarang situs HTTP (mis. ketik alamat apa saja) supaya captive portal muncul, lalu <strong>selesaikan login portal</strong> (setujui syarat, masukkan kode, dsb).</li>
              <li>Setelah portal memberi akses, <strong>tutup Unsafe Browser</strong>. TAILS akan otomatis menyambung ke TOR. Mulai sekarang, kembali pakai Tor Browser untuk semua aktivitas.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Unsafe Browser TIDAK lewat TOR</div>
              <p>Sesuai namanya, Unsafe Browser berjalan <strong>tanpa</strong> TOR — trafiknya terlihat oleh jaringan. Pakai HANYA untuk menembus captive portal, jangan pernah untuk browsing, login akun, atau apa pun yang sensitif. Anggap ia "pintu darurat", bukan peramban harian.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Contoh halaman <strong>captive portal</strong> WiFi publik, dan ikon/peringatan <strong>Unsafe Browser</strong> di TAILS (biasanya berwarna mencolok sebagai pengingat).</p>
              <p><span class="ir-key">Cari: "captive portal wifi login page", "tails unsafe browser warning"</span></p>
            </div>
          `,
          practice:`<p>Lain kali kamu di WiFi publik berportal, latih alurnya: sambungkan, biarkan TOR gagal, buka Unsafe Browser, selesaikan login portal, tutup, lalu pastikan TOR akhirnya tersambung. Tuliskan untuk dirimu sendiri: "Unsafe Browser hanya untuk portal, lalu segera ditutup." Mengulang ini membuatmu tidak panik saat menghadapinya di lapangan.</p>`,
          takeaways:[
            "Captive portal harus dibuka sebelum TOR bisa konek, menimbulkan kebuntuan di TAILS.",
            "Pakai Unsafe Browser khusus untuk menyelesaikan login portal, lalu tutup.",
            "Unsafe Browser TIDAK lewat TOR — jangan dipakai untuk apa pun yang sensitif.",
            "Setelah portal lolos, TAILS menyambung TOR; kembali pakai Tor Browser."
          ]
        },
        {
          id:"tails-deepdive",
          title:"Deep-Dive: Di Balik Layar TAILS — Boot, RAM & Jalur Paksa ke TOR",
          dur:"deep-dive · ± 18 menit",
          body:`
            <p class="lead">Kamu sudah bisa membuat, mem-boot, dan memakai TAILS. Sekarang kita bongkar mesinnya: bagaimana sistem operasi utuh bisa hidup dari USB tanpa menyentuh hard disk, ke mana perginya semua datamu saat shutdown, dan mekanisme apa yang <em>menjamin</em> tidak ada satu aplikasi pun yang bisa "kabur" keluar TOR. Setelah ini, klaim "amnesic" dan "incognito" bukan lagi slogan buatmu — kamu tahu persis tuasnya.</p>

            <h4>1. Anatomi boot: dari USB ke RAM</h4>
            <p>Saat komputer boot dari USB TAILS, yang terjadi kira-kira begini: bootloader memuat kernel Linux + <em>initramfs</em> ke RAM, lalu sistem file utama dimuat dari satu file terkompresi raksasa bernama <strong>SquashFS</strong> — bayangkan seluruh sistem operasi dikemas jadi satu arsip <em>baca-saja</em> (read-only). Di atas lapisan baca-saja itu dipasang lapisan tulis yang hidup <strong>sepenuhnya di RAM</strong> (overlay). Setiap file yang kamu "ubah" atau "simpan" sebenarnya hanya menulis ke lapisan RAM ini.</p>
            <ul>
              <li><strong>Hard disk internal tidak pernah di-mount.</strong> Bukan "tidak dipakai", tapi benar-benar tidak disentuh — Windows-mu tidak tahu apa-apa.</li>
              <li><strong>Tidak ada swap.</strong> Linux biasa menulis isi RAM yang penuh ke disk (swap); TAILS mematikannya total, karena swap = jejak permanen.</li>
              <li><strong>Listrik padam = data lenyap.</strong> RAM kehilangan isinya tanpa daya. Inilah akar sifat <em>amnesic</em> — bukan fitur "hapus riwayat", tapi konsekuensi fisika.</li>
            </ul>

            <h4>2. Memory wipe saat shutdown: melawan cold boot attack</h4>
            <p>Ada detail yang jarang disadari: isi RAM tidak hilang <em>seketika</em> saat listrik putus — pada suhu normal ia memudar dalam hitungan detik, dan jika chip didinginkan (semprotan udara terbalik), bisa bertahan menit-menit. Serangan membaca sisa RAM ini disebut <strong>cold boot attack</strong>. Karena itu saat kamu shutdown, TAILS <strong>menimpa hampir seluruh RAM dengan data acak</strong> sebelum benar-benar mati — itulah jeda beberapa detik dengan layar penuh teks yang kamu lihat. Mencabut USB saat sistem berjalan juga memicu shutdown darurat + wipe yang sama. Jadi "cabut USB kalau ada yang menggedor pintu" bukan mitos film — itu fitur yang didesain serius.</p>

            <h4>3. MAC spoofing: identitas perangkat keras juga disamarkan</h4>
            <p>Setiap kartu WiFi/ethernet punya <strong>MAC address</strong> — nomor seri unik yang terlihat oleh router mana pun yang kamu sambungi. IP bisa disembunyikan TOR, tapi MAC tercatat di log router kafe/kampus dan bisa mengikat <em>perangkat fisikmu</em> ke lokasi & waktu. Karena itu, secara default TAILS <strong>mengacak MAC address</strong> setiap kali boot: router melihat perangkat yang "belum pernah ada". Catatan praktis: pada segelintir kartu WiFi, spoofing bikin koneksi gagal — opsi mematikannya ada di Welcome Screen (Additional Settings), dengan kesadaran bahwa kamu menukar sedikit anonimitas lokasi demi konektivitas.</p>

            <h4>4. Jalur paksa ke TOR: bukan janji, tapi firewall</h4>
            <p>Di Windows, "semua trafik lewat TOR" adalah <em>harapan</em> — aplikasi nakal bisa saja konek langsung. Di TAILS, itu <strong>aturan firewall (iptables) yang kaku</strong>:</p>
            <ul>
              <li>Satu-satunya proses yang boleh menyentuh internet langsung adalah <strong>proses TOR itu sendiri</strong> (dijalankan sebagai user khusus <code>debian-tor</code>).</li>
              <li>Aplikasi lain — browser, email, chat, bahkan perintah <code>ping</code> — <strong>ditolak firewall</strong> jika mencoba keluar tanpa lewat TOR. Bukan disembunyikan: benar-benar diblokir.</li>
              <li>Permintaan DNS pun dipaksa lewat resolver TOR — menutup <strong>DNS leak</strong>, kebocoran klasik pengguna VPN/proxy di OS biasa.</li>
            </ul>
            <p>Konsekuensi yang sering membingungkan pemula: aplikasi yang tidak dirancang untuk TOR akan tampak "internetnya mati" di TAILS. Itu bukan rusak — itu firewall melakukan tugasnya. Desain ini disebut <em>fail-closed</em>: kalau ada yang salah, hasilnya <strong>tidak ada koneksi</strong>, bukan koneksi bocor.</p>

            <h4>5. Persistence: LUKS di balik "folder ajaib"</h4>
            <p>Persistent Storage yang kamu aktifkan sebelumnya secara teknis adalah <strong>partisi terenkripsi LUKS</strong> (standar enkripsi disk di Linux) di sisa ruang USB. Saat kamu memasukkan passphrase di Welcome Screen, kunci enkripsi diturunkan dari passphrase-mu (melalui fungsi yang sengaja lambat, agar brute-force mahal), partisi dibuka, dan folder-folder yang kamu pilih (dotfiles, PGP key, dsb.) di-mount ke tempatnya. Dua implikasi penting: <strong>(1)</strong> kekuatan seluruh sistem = kekuatan passphrase-mu — kalimat panjang &gt; kata rumit pendek; <strong>(2)</strong> tanpa passphrase, isi partisi adalah derau acak — tidak ada "lupa password? klik di sini".</p>

            <h4>6. Troubleshooting boot: dari pengalaman paling umum</h4>
            <ul>
              <li><strong>USB tidak muncul di Boot Menu</strong> → masuk BIOS/UEFI: pastikan <em>USB boot</em> aktif dan mode <strong>UEFI</strong> dipakai (TAILS modern butuh UEFI; coba matikan <em>Legacy/CSM</em>). Coba juga port USB lain — port USB 2.0 kadang lebih kooperatif daripada 3.0.</li>
              <li><strong>"Secure Boot violation"</strong> → TAILS kini umumnya lolos Secure Boot, tapi pada firmware lama/bermasalah, matikan <em>Secure Boot</em> sementara di BIOS.</li>
              <li><strong>Boot berhenti di layar hitam / logo</strong> → di menu boot TAILS, pilih entri <strong>Troubleshooting Mode</strong> — ia mematikan fitur grafis yang sering bentrok dengan GPU tertentu.</li>
              <li><strong>Boot ulang selalu "lupa" persistence</strong> → pastikan kamu membuka kunci Persistent Storage di Welcome Screen <em>setiap boot</em>; ia tidak otomatis.</li>
              <li><strong>WiFi tidak terdeteksi sama sekali</strong> → kemungkinan chip WiFi-mu butuh firmware proprietary yang tidak disertakan. Solusi paling andal: <strong>adapter USB WiFi</strong> yang dikenal kompatibel, atau kabel ethernet.</li>
              <li><strong>Macet "Connecting to Tor…"</strong> → ingat materi captive portal (mungkin harus login WiFi dulu) dan materi bridge (jaringan memblokir TOR). Urutan diagnosis: portal dulu → jam sistem → bridge.</li>
            </ul>

            <div class="box warn">
              <div class="bx-title">▲ Studi kasus nyata: amnesia sebagai alibi teknis</div>
              <p>Dokumen internal yang bocor tahun 2014 menunjukkan lembaga intelijen besar menandai TAILS sebagai "ancaman" justru karena sifat amnesianya: tidak ada riwayat yang bisa disita, tidak ada cache yang bisa diforensik, dan setiap boot adalah perangkat "baru". Bandingkan dengan kasus-kasus forensik umum: kebanyakan orang terjerat oleh <em>artefak lokal</em> — thumbnail, riwayat, file temporer — bukan oleh jebolnya enkripsi. Pelajaran untukmu: <strong>jejak paling berbahaya sering ada di perangkatmu sendiri</strong>, dan TAILS menyerang masalah itu dari akarnya. Tapi ingat batasnya: TAILS tidak menghapus jejak di <em>sisi lain</em> — akun yang kamu login, pesan yang kamu kirim, log server tujuan.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Uji pemahaman cepat</div>
              <p>Coba jawab tanpa membaca ulang: kenapa TAILS tidak butuh antivirus yang memindai "infeksi permanen"? <em>(Karena sistem baca-saja di-boot segar dari SquashFS tiap kali — malware yang menulis dirinya ke "sistem" sebenarnya hanya menulis ke RAM, dan mati bersama shutdown. Pengecualian: jika kamu sendiri menyimpannya ke Persistent Storage.)</em></p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>(1) Layar <strong>memory wipe</strong> saat shutdown TAILS. (2) Welcome Screen dengan opsi <strong>MAC Address Anonymization</strong> di Additional Settings.</p>
              <p><span class="ir-key">Cari: "tails shutdown memory wipe screen", "tails welcome screen mac spoofing"</span></p>
            </div>
          `,
          practice:`<p>Boot TAILS dan lakukan tiga verifikasi mandiri: (1) Buka <em>Files</em> dan amati bahwa hard disk internalmu terlihat sebagai perangkat <em>yang tidak ter-mount</em> — jangan di-mount, cukup sadari TAILS membiarkannya. (2) Buka Terminal, jalankan <code>ip link</code> dua kali di dua sesi boot berbeda dan bandingkan MAC address WiFi-mu — kamu akan melihat ia berganti tiap boot. (3) Masih di Terminal, coba <code>curl https://example.com</code> — perhatikan ia gagal, lalu pahami kenapa: curl tidak diarahkan lewat TOR, dan firewall fail-closed menolaknya. Tiga pengamatan kecil ini adalah bukti empiris dari tiga klaim besar materi ini.</p>`,
          takeaways:[
            "TAILS = SquashFS baca-saja + lapisan tulis di RAM; tanpa swap, tanpa mount disk internal — amnesia adalah konsekuensi arsitektur, bukan fitur 'hapus riwayat'.",
            "Saat shutdown, RAM ditimpa data acak untuk melawan cold boot attack; cabut USB = shutdown darurat + wipe.",
            "MAC address diacak tiap boot; firewall fail-closed memaksa SEMUA trafik (termasuk DNS) lewat TOR — aplikasi non-TOR memang 'mati internet'.",
            "Persistent Storage = partisi LUKS; kekuatannya setara passphrase-mu, dan tidak ada jalur pemulihan jika lupa."
          ]
        },
        {
          id:"tails-vpn",
          title:"VPN di TAILS — Bisakah & Perlukah?",
          dur:"lanjutan · ± 7 menit",
          body:`
            <p class="lead">Pertanyaan umum: "Bisakah saya menambah VPN di TAILS?" Jawaban singkatnya: secara desain, TAILS sengaja <strong>tidak</strong> mendukung VPN dengan mudah — dan untuk mayoritas orang, itu memang keputusan yang benar.</p>

            <h4>Kenapa TAILS tidak mempermudah VPN</h4>
            <p>TAILS dibangun di atas satu prinsip tegas: <strong>semua trafik lewat TOR, titik.</strong> Menyisipkan VPN berarti menambah pihak yang harus kamu percayai dan berisiko menciptakan kebocoran atau pola unik yang justru menurunkan anonimitas. Karena itu TAILS tidak menyediakan tombol "nyalakan VPN"; menambahkannya butuh konfigurasi lanjutan dan bukan jalur yang didukung resmi untuk pengguna umum.</p>

            <h4>Kalau memang perlu, kenali dua skema</h4>
            <ul>
              <li><strong>VPN sebelum TOR (di tingkat jaringan/router)</strong> — mirip Tor-over-VPN dari Bab 1: ISP hanya melihat VPN, tidak tahu kamu memakai TOR. Ini bisa dilakukan di luar TAILS (mis. VPN di router) tanpa mengutak-atik TAILS itu sendiri. Berguna untuk menyembunyikan fakta "memakai TOR" dari ISP.</li>
              <li><strong>VPN setelah TOR</strong> — jauh lebih rumit, jarang diperlukan, dan gampang merusak anonimitas. Ini wilayah pakar dengan kebutuhan sangat spesifik; pemula sebaiknya tidak menyentuhnya.</li>
            </ul>

            <h4>Rekomendasi jujur</h4>
            <p>Untuk hampir semua orang: <strong>jangan</strong> menambah VPN ke TAILS. TAILS + TOR sudah merupakan pondasi anonimitas yang sangat kuat, dan menambah VPN lebih sering menambah risiko ketimbang manfaat. Bila kebutuhanmu cuma "menyembunyikan pemakaian TOR dari ISP", lakukan di lapisan jaringan (mis. VPN di router) sebelum TAILS boot — bukan di dalam TAILS.</p>

            <div class="box warn">
              <div class="bx-title">▲ Ingat pelajaran Bab 1</div>
              <p>VPN memindahkan kepercayaan ke satu penyedia. Di TAILS yang justru dirancang agar tak ada titik kepercayaan tunggal, menambah VPN bertentangan dengan filosofinya. Lebih banyak lapisan tidak otomatis berarti lebih aman.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram "VPN → TOR" di tingkat router (di luar TAILS) vs konsep menambah VPN di dalam TAILS, untuk menegaskan di mana VPN sebaiknya diletakkan bila benar-benar perlu.</p>
              <p><span class="ir-key">Cari: "vpn before tor router diagram", "tails vpn not recommended"</span></p>
            </div>
          `,
          takeaways:[
            "TAILS sengaja tidak mempermudah VPN karena prinsipnya: semua trafik lewat TOR.",
            "Bila perlu menyembunyikan pemakaian TOR dari ISP, lakukan VPN di lapisan jaringan/router sebelum TAILS (mirip Tor-over-VPN).",
            "VPN setelah TOR rumit dan berisiko; bukan untuk pemula.",
            "Untuk mayoritas orang: jangan tambah VPN ke TAILS — lebih banyak lapisan tak otomatis lebih aman."
          ],
          quiz:{
            title:"Kuis Bab 2 — TAILS",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Kenapa menjalankan TOR Browser di Windows biasa kurang aman dibanding TAILS?",
               options:["TOR-nya versi lama","Windows meninggalkan jejak di disk & bisa terinfeksi malware di lapisan bawah","Windows tidak punya browser","TAILS lebih cepat"],
               answer:1,
               explain:"Windows tetap menjadi pondasi: ia menulis jejak ke disk dan, bila terinfeksi, melihat aktivitasmu sebelum TOR mengenkripsi. TAILS menutup celah tingkat-OS ini."},
              {q:"Apa arti 'amnesik' pada TAILS?",
               options:["Hanya bisa dipakai sekali","Tidak menulis apa pun ke disk komputer; tiap reboot kembali bersih","Tidak bisa menyimpan kata sandi","Selalu lupa kata sandi WiFi"],
               answer:1,
               explain:"TAILS berjalan di RAM dan secara default tidak menulis ke hard disk; setiap reboot mengembalikannya ke kondisi bersih tanpa jejak."},
              {q:"Pada perbandingan tumpukan sistem, kenapa 'TOR di VM Windows' lemah?",
               options:["VM terlalu cepat","Windows tetap jadi pondasi yang bisa mengintip & meninggalkan jejak","TOR tidak jalan di VM","VM tidak punya internet"],
               answer:1,
               explain:"Lapisan paling bawah (Windows) mengendalikan semua di atasnya; bila terinfeksi/berjejak, anonimitas di dalam VM ikut runtuh."},
              {q:"Di Windows, aplikasi apa yang dipakai untuk menulis image TAILS ke USB?",
               options:["Microsoft Word","balenaEtcher","Notepad","WinRAR"],
               answer:1,
               explain:"Cara resmi di Windows: unduh USB image TAILS, verifikasi, lalu flash ke USB memakai balenaEtcher."},
              {q:"Apa fungsi Persistent Storage di TAILS?",
               options:["Mempercepat TOR","Area terenkripsi di USB untuk menyimpan data antar-reboot","Menghapus RAM otomatis","Mengganti exit node"],
               answer:1,
               explain:"Persistent Storage adalah volume terenkripsi (LUKS) di USB yang sama, dibuka dengan passphrase, untuk menyimpan data/kunci/setelan secara permanen."},
              {q:"Kapan boleh memakai Unsafe Browser di TAILS?",
               options:["Untuk browsing sehari-hari","Hanya untuk menyelesaikan login captive portal WiFi","Untuk login akun bank","Untuk mengunduh file besar"],
               answer:1,
               explain:"Unsafe Browser berjalan tanpa TOR — hanya untuk menembus captive portal, lalu segera ditutup. Jangan untuk apa pun yang sensitif."},
              {q:"Apa rekomendasi soal menambah VPN ke dalam TAILS?",
               options:["Wajib, supaya lebih aman","Umumnya tidak perlu; bila perlu, letakkan VPN di lapisan jaringan sebelum TAILS","Selalu pasang dua VPN","VPN menggantikan TOR di TAILS"],
               answer:1,
               explain:"TAILS dirancang agar semua lewat TOR tanpa titik kepercayaan tunggal. Menambah VPN umumnya menambah risiko; bila perlu, lakukan di tingkat jaringan/router sebelum TAILS boot."}
            ]
          }
        }
      ]
};
