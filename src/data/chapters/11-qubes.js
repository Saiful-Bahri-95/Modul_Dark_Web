/* Bab 11 — id: "qubes"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"qubes",
      title:"Qubes OS",
      lectures:[
        {
          id:"qubes-what",
          title:"Apa Itu Qubes & Kenapa Memakainya?",
          dur:"konsep · ± 8 menit",
          body:`
            <p class="lead">Qubes OS adalah sistem operasi dengan filosofi radikal: <strong>keamanan lewat isolasi (compartmentalization)</strong>. Alih-alih satu sistem besar tempat satu kebobolan meruntuhkan segalanya, Qubes mengurung tiap aktivitas dalam "kompartemen" virtual terpisah — sehingga satu kompromi tidak menjalar ke yang lain.</p>

            <h4>Masalah yang dipecahkan</h4>
            <p>Pada OS biasa (Windows/macOS/Linux), semua aplikasimu berbagi satu lingkungan. Buka satu lampiran berbahaya, dan malware-nya bisa mengakses peramban, dokumen, kata sandi — segalanya. Satu titik gagal = seluruh sistem jatuh. Qubes berasumsi <strong>kompromi pasti terjadi cepat atau lambat</strong>, lalu merancang agar dampaknya terkurung.</p>

            <h4>Cara kerjanya: qube = mesin virtual terisolasi</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isolasi qube di atas hypervisor">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tiap aktivitas dalam qube terpisah</text>
                <g font-family="monospace" font-size="9.5">
                  <rect x="40" y="44" width="140" height="56" rx="9" fill="#15202b" stroke="#5fd98a"/><text x="110" y="68" text-anchor="middle" fill="#5fd98a" font-weight="700">qube: Kerja</text><text x="110" y="86" text-anchor="middle" fill="#9fb4c4">email, dokumen</text>
                  <rect x="200" y="44" width="140" height="56" rx="9" fill="#15202b" stroke="#6ad7ff"/><text x="270" y="68" text-anchor="middle" fill="#6ad7ff" font-weight="700">qube: Pribadi</text><text x="270" y="86" text-anchor="middle" fill="#9fb4c4">medsos, foto</text>
                  <rect x="360" y="44" width="140" height="56" rx="9" fill="#15202b" stroke="#fb7185"/><text x="430" y="68" text-anchor="middle" fill="#fb7185" font-weight="700">qube: Untrusted</text><text x="430" y="86" text-anchor="middle" fill="#9fb4c4">browsing acak</text>
                  <rect x="520" y="44" width="160" height="56" rx="9" fill="#15202b" stroke="#f5b748"/><text x="600" y="68" text-anchor="middle" fill="#f5b748" font-weight="700">qube: Vault</text><text x="600" y="86" text-anchor="middle" fill="#9fb4c4">kunci, sandi (offline)</text>
                </g>
                <rect x="40" y="120" width="640" height="34" rx="8" fill="#1b2733" stroke="#34475a"/>
                <text x="360" y="142" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Hypervisor Xen — menjaga tiap qube terisolasi satu sama lain</text>
                <rect x="40" y="166" width="640" height="34" rx="8" fill="#111922" stroke="#34475a"/>
                <text x="360" y="188" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Hardware</text>
              </svg>
              <figcaption>Tiap qube adalah VM terisolasi di atas hypervisor Xen; kebobolan di satu qube tak menyentuh yang lain.</figcaption>
            </figure>
            <p>Di balik layar, Qubes memakai <strong>hypervisor Xen</strong> untuk menjalankan tiap "qube" sebagai mesin virtual yang terisolasi kuat. Kamu mengelompokkan aktivitas berdasarkan tingkat kepercayaan: qube "Kerja", "Pribadi", "Untrusted" (untuk hal berisiko), dan "Vault" (offline, untuk menyimpan kunci/sandi). Tiap qube diberi warna agar mudah dikenali.</p>

            <h4>dom0 — otak yang dijaga ketat</h4>
            <p>Ada satu qube administratif istimewa bernama <strong>dom0</strong> yang mengelola tampilan &amp; perangkat keras. dom0 sengaja <strong>tidak punya akses internet</strong> dan tidak dipakai untuk aktivitas biasa — menjaganya bersih adalah inti keamanan Qubes. Kamu hampir tidak pernah "bekerja" di dom0.</p>

            <div class="box tip">
              <div class="bx-title">◇ Qubes vs TAILS — kapan pakai apa</div>
              <p>TAILS unggul untuk anonimitas sekali-pakai tanpa jejak di komputer mana pun. Qubes unggul untuk <strong>keamanan harian</strong> di komputer milikmu sendiri, mengurung banyak aktivitas berbeda sekaligus. Keduanya bahkan bisa berpadu (Qubes bisa menjalankan Whonix untuk TOR). Pilih sesuai kebutuhan.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Bukan untuk sembarang perangkat</div>
              <p>Qubes menuntut perangkat keras yang memadai (RAM besar, dukungan virtualisasi). Ini bukan OS ringan; ia menukar kenyamanan demi keamanan. Pastikan komputermu memenuhi syarat (materi berikutnya) sebelum berkomitmen.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Desktop Qubes dengan jendela aplikasi <strong>berwarna sesuai qube</strong>, dan diagram arsitektur Xen + dom0.</p>
              <p><span class="ir-key">Cari: "qubes os desktop colored windows", "qubes architecture xen dom0"</span></p>
            </div>
          `,
          takeaways:[
            "Qubes = keamanan lewat isolasi: tiap aktivitas dikurung dalam 'qube' (VM) terpisah agar satu kompromi tak menjalar.",
            "Berasumsi kompromi pasti terjadi, lalu membatasi dampaknya — bukan berpura-pura sistem tak akan kebobolan.",
            "Qube dikelompokkan per kepercayaan (Kerja/Pribadi/Untrusted/Vault) & diberi warna; di atas hypervisor Xen.",
            "dom0 adalah qube administratif tanpa internet — dijaga bersih; TAILS untuk anonim sekali-pakai, Qubes untuk keamanan harian."
          ]
        },
        {
          id:"qubes-verify",
          title:"Opsi Instalasi & Memverifikasi Qubes",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Seperti TOR &amp; TAILS, langkah pertama adalah mengunduh dan <strong>memverifikasi keaslian</strong> Qubes — installer OS adalah target empuk untuk dimanipulasi. Sekaligus, pastikan perangkatmu memenuhi syarat sebelum repot.</p>

            <h4>Persyaratan perangkat keras</h4>
            <ul>
              <li><strong>RAM</strong>: minimal 16 GB sangat dianjurkan (tiap qube memakai memori). 8 GB bisa, tapi sempit.</li>
              <li><strong>Virtualisasi</strong>: CPU dengan <strong>VT-x + VT-d</strong> (Intel) atau <strong>AMD-V + AMD-Vi/IOMMU</strong> (AMD), diaktifkan di BIOS/UEFI.</li>
              <li><strong>Penyimpanan</strong>: SSD ber- kapasitas memadai (mis. 60 GB+); SSD sangat membantu performa.</li>
              <li><strong>Catatan:</strong> kompatibilitas perangkat keras bervariasi; cek Hardware Compatibility List (HCL) Qubes bila ragu.</li>
            </ul>

            <h4>Mengunduh &amp; memverifikasi (kebiasaan yang kini sudah kamu kuasai)</h4>
            <ol class="steps">
              <li>Unduh ISO Qubes hanya dari <code>qubes-os.org</code>, beserta berkas tanda tangan (<code>.asc</code>) dan kunci penandatangan.</li>
              <li>Impor <strong>Qubes Master Signing Key</strong>, lalu kunci rilis yang ditandatangani olehnya (rantai kepercayaan).</li>
              <li>Verifikasi ISO dengan GPG (di Windows: Gpg4win/Kleopatra). Hasil tanda tangan sah = ISO asli; gagal = jangan dipakai.</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Rantai kepercayaan Qubes</div>
              <p>Qubes memakai Master Signing Key yang menandatangani kunci-kunci rilis. Dengan memverifikasi rantai ini, kamu memastikan ISO benar-benar dari tim Qubes — bukan tiruan. Konsepnya sama dengan verifikasi installer di Bab 1/8, hanya berlapis.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Jangan lewati verifikasi</div>
              <p>OS adalah fondasi paling bawah (ingat konsep berlapis Bab 2). ISO yang dimanipulasi berarti seluruh keamanan Qubes runtuh sejak awal. Verifikasi adalah harga mati.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Halaman unduh Qubes (ISO + signature) dan verifikasi tanda tangan di Kleopatra.</p>
              <p><span class="ir-key">Cari: "qubes os download verify signature", "qubes master signing key"</span></p>
            </div>
          `,
          practice:`<p>Sebelum memasang, cek apakah komputermu memenuhi syarat: lihat jumlah RAM dan apakah CPU-mu mendukung virtualisasi (VT-x/VT-d atau AMD-V/IOMMU). Lalu unduh ISO Qubes beserta tanda tangannya dan lakukan verifikasi GPG sampai dinyatakan sah. Bila perangkatmu tak memenuhi syarat, kamu tetap bisa mempelajari konsepnya untuk diterapkan kelak.</p>`,
          takeaways:[
            "Syarat: RAM ~16 GB, dukungan virtualisasi VT-x/VT-d (Intel) atau AMD-V/IOMMU (AMD) aktif di BIOS, SSD memadai.",
            "Unduh ISO hanya dari qubes-os.org + berkas tanda tangan & kunci penandatangan.",
            "Verifikasi rantai: impor Qubes Master Signing Key → kunci rilis → verifikasi ISO (Gpg4win/Kleopatra).",
            "OS adalah fondasi terbawah; ISO termanipulasi meruntuhkan semuanya — verifikasi wajib."
          ]
        },
        {
          id:"qubes-flash",
          title:"Membuat USB Qubes",
          dur:"praktik · ± 5 menit",
          body:`
            <p class="lead">Setelah ISO terverifikasi, tulis (flash) ke USB agar bisa di-boot untuk instalasi. Prosesnya mirip membuat USB TAILS.</p>

            <h4>Langkah (Windows)</h4>
            <ol class="steps">
              <li>Siapkan USB <strong>minimal 8 GB</strong> (isinya akan terhapus total).</li>
              <li>Gunakan <strong>Rufus</strong> atau <strong>balenaEtcher</strong> di Windows untuk menulis ISO Qubes ke USB. Untuk Rufus, pilih mode penulisan "DD image" bila diminta agar ISO ditulis apa adanya.</li>
              <li>Pilih ISO Qubes yang sudah kamu verifikasi, pilih target USB dengan teliti (jangan salah pilih disk!), lalu tulis.</li>
              <li>Tunggu selesai. USB kini berisi installer Qubes.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Periksa target USB</div>
              <p>Sama seperti membuat USB TAILS: pastikan target yang terpilih benar-benar USB-mu, bukan hard disk internal. Salah pilih = data terhapus. Periksa kapasitas/nama drive sebelum menekan tulis.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Verifikasi dulu, flash kemudian</div>
              <p>Pastikan kamu hanya mem-flash ISO yang <em>sudah lolos verifikasi tanda tangan</em> (materi sebelumnya). Mem-flash ISO yang belum diverifikasi sama saja memasang fondasi yang mungkin sudah dimanipulasi.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Tampilan <strong>Rufus</strong> (pilih ISO Qubes, mode DD, target USB) atau balenaEtcher.</p>
              <p><span class="ir-key">Cari: "rufus write iso dd mode", "balenaetcher flash iso usb"</span></p>
            </div>
          `,
          takeaways:[
            "Tulis ISO Qubes (yang sudah diverifikasi) ke USB ≥ 8 GB memakai Rufus (mode DD) atau balenaEtcher.",
            "Periksa target USB dengan teliti — salah pilih bisa menghapus hard disk.",
            "Hanya flash ISO yang sudah lolos verifikasi tanda tangan.",
            "USB hasil = installer Qubes yang siap di-boot."
          ]
        },
        {
          id:"qubes-prepare",
          title:"Menyiapkan Komputer untuk Qubes",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Qubes butuh fitur virtualisasi perangkat keras yang sering tidak aktif secara default. Menyiapkan BIOS/UEFI dengan benar adalah kunci agar instalasi mulus.</p>

            <h4>Mengaktifkan virtualisasi di BIOS/UEFI</h4>
            <ol class="steps">
              <li>Masuk BIOS/UEFI saat menyalakan komputer (tombol umum: <code>Del</code>, <code>F2</code>, <code>F10</code>, tergantung merek).</li>
              <li>Aktifkan <strong>Intel VT-x &amp; VT-d</strong> (atau <strong>AMD-V &amp; AMD IOMMU/AMD-Vi</strong>). Sering berada di menu "Advanced", "CPU Configuration", atau "Security".</li>
              <li>Bila diperlukan, <strong>nonaktifkan Secure Boot</strong> (Qubes secara historis tidak mendukung Secure Boot pada banyak konfigurasi; cek dokumentasi versi terbarumu).</li>
              <li>Atur urutan boot atau gunakan Boot Menu (Esc/F12/F9) agar boot dari USB Qubes.</li>
              <li>Simpan &amp; keluar, lalu boot dari USB.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Kalau VT-d tidak ada/diabaikan</div>
              <p>VT-d/IOMMU penting untuk isolasi perangkat (mis. mengurung kartu jaringan/USB dalam qube khusus). Tanpa itu, sebagian perlindungan Qubes berkurang. Bila CPU/motherboard-mu tak mendukungnya, Qubes mungkin tetap jalan tapi tidak seaman semestinya — pertimbangkan perangkat lain untuk kebutuhan serius.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Cadangkan data dulu</div>
              <p>Memasang Qubes umumnya menggantikan OS yang ada (dual-boot dengan Qubes itu rumit &amp; tidak dianjurkan untuk keamanan). Cadangkan data pentingmu sebelum melanjutkan — anggap ini komputer yang akan didedikasikan untuk Qubes.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu BIOS/UEFI yang menampilkan opsi <strong>VT-x/VT-d</strong> (atau AMD-V/IOMMU) dan pengaturan Secure Boot.</p>
              <p><span class="ir-key">Cari: "enable VT-d bios setting", "disable secure boot uefi"</span></p>
            </div>
          `,
          takeaways:[
            "Masuk BIOS/UEFI lalu aktifkan VT-x & VT-d (Intel) atau AMD-V & IOMMU (AMD); nonaktifkan Secure Boot bila perlu.",
            "VT-d/IOMMU penting untuk isolasi perangkat — tanpanya perlindungan Qubes berkurang.",
            "Atur boot dari USB Qubes lewat urutan boot / Boot Menu.",
            "Qubes umumnya menggantikan OS lama; cadangkan data & dedikasikan komputernya."
          ]
        },
        {
          id:"qubes-install",
          title:"Memasang Qubes OS",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Instalasi Qubes mirip memasang Linux pada umumnya, dengan dua keputusan keamanan penting: <strong>enkripsi disk</strong> dan <strong>qube bawaan yang dibuat otomatis</strong>.</p>

            <h4>Langkah inti</h4>
            <ol class="steps">
              <li>Boot dari USB Qubes, pilih <strong>Install Qubes OS</strong>.</li>
              <li>Pilih bahasa &amp; tata letak keyboard.</li>
              <li><strong>Aktifkan enkripsi disk (LUKS)</strong> dan tetapkan <strong>passphrase yang kuat</strong>. Ini melindungi seluruh sistemmu bila perangkat hilang/dicuri — ingat crypto-erase di Bab 7.</li>
              <li>Tentukan partisi (umumnya gunakan seluruh disk yang didedikasikan untuk Qubes), lalu mulai instalasi.</li>
              <li>Reboot. Pada <strong>konfigurasi awal pasca-instalasi</strong>, Qubes menawarkan membuat qube bawaan: <em>sys-net</em> (jaringan), <em>sys-firewall</em> (firewall), qube <em>work</em>, <em>personal</em>, <em>vault</em>, dan opsi <strong>Whonix</strong> untuk TOR.</li>
              <li>Pilih untuk membuat qube Whonix bila ingin integrasi TOR (sangat dianjurkan untuk kursus ini), lalu selesaikan.</li>
            </ol>

            <h4>Memahami yang baru saja dibuat</h4>
            <ul>
              <li><strong>sys-net</strong> mengurung perangkat keras jaringan dalam satu qube — bila ada serangan lewat jaringan, ia terkurung di sini.</li>
              <li><strong>sys-firewall</strong> menyaring lalu lintas antar-qube dan ke internet.</li>
              <li><strong>work / personal / vault</strong> adalah qube tempatmu beraktivitas, sesuai tingkat kepercayaan.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Passphrase enkripsi disk = kunci segalanya</div>
              <p>Enkripsi LUKS melindungi seluruh sistem Qubes saat mati. Passphrase kuat tanpa pintu belakang berarti lupa = data hilang permanen. Pilih frasa yang kuat sekaligus benar-benar kamu ingat, dan berbeda dari passphrase lain.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Layar installer Qubes (opsi enkripsi disk) dan layar konfigurasi awal yang membuat qube bawaan + Whonix.</p>
              <p><span class="ir-key">Cari: "qubes installer disk encryption", "qubes initial setup default qubes whonix"</span></p>
            </div>
          `,
          practice:`<p>Pasang Qubes (pada perangkat yang memenuhi syarat &amp; sudah dicadangkan), aktifkan enkripsi disk dengan passphrase kuat, dan pada konfigurasi awal pilih membuat qube Whonix. Setelah masuk desktop, buka Qube Manager dan kenali qube bawaan (sys-net, sys-firewall, work, personal, vault, sys-whonix). Ini fondasi untuk semua materi berikutnya.</p>`,
          takeaways:[
            "Instalasi: boot USB → Install → AKTIFKAN enkripsi disk (LUKS) dengan passphrase kuat → pasang → rebut.",
            "Konfigurasi awal membuat qube bawaan: sys-net, sys-firewall, work, personal, vault, dan opsi Whonix (pilih untuk TOR).",
            "sys-net mengurung jaringan, sys-firewall menyaring lalu lintas; work/personal/vault untuk aktivitas per kepercayaan.",
            "Passphrase enkripsi disk tanpa pintu belakang: lupa = data hilang; pilih kuat & unik."
          ]
        },
        {
          id:"qubes-basics",
          title:"Dasar-Dasar Qubes OS",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">Memakai Qubes terasa seperti desktop biasa, tapi dengan satu kebiasaan baru yang menjadi inti keamanannya: <strong>selalu sadar di qube mana sebuah aplikasi berjalan</strong>. Warna jendela membantumu mengetahuinya sekilas.</p>

            <h4>Komponen yang sering kamu pakai</h4>
            <ul>
              <li><strong>Qube Manager</strong> — pusat kendali: melihat, menyalakan, mematikan, dan mengatur semua qube.</li>
              <li><strong>Menu aplikasi</strong> — dikelompokkan per qube. Membuka "Firefox (work)" menjalankannya di qube work; "Firefox (personal)" di qube personal — keduanya terpisah total.</li>
              <li><strong>Warna jendela</strong> — tiap qube punya warna; bingkai jendela aplikasi mengikuti warna qube-nya, sehingga kamu langsung tahu konteks keamanannya.</li>
              <li><strong>dom0</strong> — tempat desktop &amp; pengelolaan berada. <strong>Jangan</strong> menjalankan aplikasi biasa atau membuka file mencurigakan di dom0.</li>
            </ul>

            <h4>Template vs App qube</h4>
            <p>Konsep penting: <strong>Template qube</strong> menyimpan sistem &amp; software dasar (mis. Fedora/Debian); <strong>App qube</strong> yang kamu pakai sehari-hari "meminjam" sistem dari template tapi menyimpan datamu sendiri. Memasang software dilakukan di template, lalu tersedia untuk semua app qube yang memakainya (dibahas khusus nanti). Ini hemat ruang &amp; memudahkan pembaruan terpusat.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kebiasaan inti: "aku di qube mana?"</div>
              <p>Sebelum mengetik kata sandi atau membuka file, tanyakan: aplikasi ini berjalan di qube apa, dan apakah itu konteks yang benar? Memasukkan kredensial kerja di qube "untrusted" adalah kesalahan klasik. Warna jendela ada untuk mencegah ini.</p>
            </div>

            <div class="box warn">
              <div class="bx-title">▲ Jaga dom0 tetap bersih</div>
              <p>dom0 mengendalikan segalanya dan tak punya internet demi keamanan. Jangan menyalin file mencurigakan ke dom0 atau memakainya untuk browsing. Kompromi dom0 = kompromi seluruh sistem.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p><strong>Qube Manager</strong> dan menu aplikasi yang dikelompokkan per qube, dengan jendela berwarna.</p>
              <p><span class="ir-key">Cari: "qubes manager interface", "qubes app menu per qube"</span></p>
            </div>
          `,
          takeaways:[
            "Inti kebiasaan Qubes: selalu sadar di qube mana aplikasi berjalan — warna jendela menandainya.",
            "Qube Manager mengatur semua qube; menu aplikasi dikelompokkan per qube (Firefox work vs personal terpisah).",
            "Template qube menyimpan sistem/software; App qube memakainya tapi menyimpan data sendiri — software dipasang di template.",
            "Jaga dom0 bersih: tanpa internet, jangan untuk aplikasi biasa/file mencurigakan."
          ]
        },
        {
          id:"qubes-domains",
          title:"Memahami Security Domains",
          dur:"konsep · ± 7 menit",
          body:`
            <p class="lead">"Security domain" adalah cara kamu mengelompokkan aktivitas berdasarkan tingkat kepercayaan &amp; tujuan. Merancang domain dengan baik adalah seni utama memakai Qubes — di sinilah isolasi berubah dari fitur teknis menjadi keamanan nyata.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Contoh pembagian security domains">
                <text x="360" y="22" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Mengelompokkan per kepercayaan & tujuan</text>
                <g font-family="monospace" font-size="9.5">
                  <rect x="30" y="44" width="200" height="64" rx="10" fill="#15202b" stroke="#5fd98a"/><text x="130" y="68" text-anchor="middle" fill="#5fd98a" font-weight="700">Vault (paling tepercaya)</text><text x="130" y="86" text-anchor="middle" fill="#9fb4c4">kunci & sandi, OFFLINE</text><text x="130" y="100" text-anchor="middle" fill="#9fb4c4">tanpa jaringan</text>
                  <rect x="260" y="44" width="200" height="64" rx="10" fill="#15202b" stroke="#6ad7ff"/><text x="360" y="68" text-anchor="middle" fill="#6ad7ff" font-weight="700">Work / Personal</text><text x="360" y="86" text-anchor="middle" fill="#9fb4c4">aktivitas penting,</text><text x="360" y="100" text-anchor="middle" fill="#9fb4c4">terpisah satu sama lain</text>
                  <rect x="490" y="44" width="200" height="64" rx="10" fill="#15202b" stroke="#fb7185"/><text x="590" y="68" text-anchor="middle" fill="#fb7185" font-weight="700">Untrusted (paling berisiko)</text><text x="590" y="86" text-anchor="middle" fill="#9fb4c4">browsing acak, file</text><text x="590" y="100" text-anchor="middle" fill="#9fb4c4">tak dikenal</text>
                </g>
                <text x="360" y="140" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Makin tepercaya → makin sedikit paparan ke internet/risiko.</text>
                <text x="360" y="162" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="10">Disposable qube: sekali-pakai, otomatis terhapus setelah ditutup.</text>
                <text x="360" y="186" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">Pisahkan juga per IDENTITAS (mirip persona Bab 5) bila perlu.</text>
              </svg>
              <figcaption>Rancang domain dari "paling tepercaya & offline" (vault) sampai "paling berisiko & sekali-pakai" (untrusted/disposable).</figcaption>
            </figure>

            <h4>Pola domain yang umum</h4>
            <ul>
              <li><strong>Vault</strong> — qube paling tepercaya, <em>tanpa jaringan</em>, untuk menyimpan kunci PGP, database kata sandi. Karena offline, sangat sulit dikompromikan dari luar.</li>
              <li><strong>Work &amp; Personal</strong> — dipisah agar aktivitas kerja dan pribadi tidak saling mencemari (mis. dokumen kantor vs media sosial).</li>
              <li><strong>Untrusted</strong> — untuk hal berisiko: membuka tautan acak, file tak dikenal. Anggap qube ini "kotor".</li>
              <li><strong>Disposable qube</strong> — qube sekali-pakai yang otomatis terhapus saat ditutup; ideal untuk membuka sesuatu yang mencurigakan sekali lalu buang (materi malware).</li>
            </ul>

            <h4>Prinsip merancang</h4>
            <p>Pisahkan berdasarkan <strong>kepercayaan</strong> (seberapa berisiko) dan <strong>identitas/tujuan</strong> (mirip persona di Bab 5). Tujuannya: bila satu qube jatuh, kerusakannya terbatas pada qube itu. Jangan menumpuk semua di satu qube — itu menghapus seluruh manfaat Qubes.</p>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram pembagian security domains (vault/work/personal/untrusted/disposable) dengan warna.</p>
              <p><span class="ir-key">Cari: "qubes security domains diagram", "qubes vault disposable qube"</span></p>
            </div>
          `,
          takeaways:[
            "Security domain = mengelompokkan aktivitas per kepercayaan & tujuan; merancangnya adalah inti memakai Qubes.",
            "Pola umum: Vault (offline, kunci/sandi), Work & Personal (terpisah), Untrusted (berisiko), Disposable (sekali-pakai).",
            "Vault tanpa jaringan sangat sulit dikompromikan dari luar — ideal untuk rahasia.",
            "Pisahkan per kepercayaan & identitas agar satu qube jatuh tak meruntuhkan yang lain."
          ]
        },
        {
          id:"qubes-multi",
          title:"Bekerja dengan Banyak Domain Sekaligus",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Kekuatan Qubes terasa saat kamu menjalankan banyak qube bersamaan dalam satu desktop — aplikasi dari domain berbeda tampil berdampingan, tetap terisolasi, dan warna jendela menjaga kamu tak tertukar konteks.</p>

            <h4>Mengelola banyak qube</h4>
            <ul>
              <li><strong>Jalankan sesuai kebutuhan.</strong> Qube menyala saat aplikasinya dibuka dan bisa dimatikan untuk menghemat memori. Qube Manager menampilkan mana yang aktif &amp; pemakaian RAM-nya.</li>
              <li><strong>Warna = konteks.</strong> Jendela "work" (mis. hijau) dan "untrusted" (mis. merah) bisa bersebelahan; warnanya mencegah kamu salah mengira sedang di qube aman padahal di qube berisiko.</li>
              <li><strong>Perhatikan memori.</strong> Tiap qube memakai RAM. Tutup qube yang tak dipakai; inilah kenapa RAM besar penting.</li>
            </ul>

            <h4>Alur kerja contoh</h4>
            <p>Kamu bisa, dalam satu layar: membaca email di qube <em>work</em> (hijau), meriset sumber tak dikenal di qube <em>untrusted</em> (merah), sambil kunci PGP-mu aman di <em>vault</em> (hitam, offline). Tiap aktivitas terkurung; bila qube untrusted terinfeksi, email kerja &amp; kuncimu tetap aman.</p>

            <div class="box tip">
              <div class="bx-title">◇ Disiplin warna</div>
              <p>Biasakan melirik warna bingkai sebelum bertindak. Banyak insiden keamanan terjadi karena orang mengetik kredensial di jendela yang ternyata milik qube yang salah. Di Qubes, warna adalah pengaman visual yang murah tapi ampuh.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Desktop Qubes dengan beberapa jendela <strong>berbeda warna</strong> berdampingan (work hijau, untrusted merah, dll).</p>
              <p><span class="ir-key">Cari: "qubes multiple colored windows desktop"</span></p>
            </div>
          `,
          takeaways:[
            "Qubes menjalankan banyak qube bersamaan dalam satu desktop, tetap terisolasi.",
            "Warna bingkai jendela = konteks keamanan; cegah salah qube sebelum bertindak.",
            "Tiap qube memakai RAM; tutup yang tak dipakai (alasan RAM besar penting).",
            "Contoh: work (email) + untrusted (riset) + vault (kunci, offline) berjalan aman berdampingan."
          ]
        },
        {
          id:"qubes-files",
          title:"Memindahkan File & Teks Antar Domain",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Karena qube terisolasi, kamu tak bisa sekadar drag-and-drop seperti biasa — dan itu memang disengaja. Qubes menyediakan cara <strong>terkendali &amp; aman</strong> untuk memindahkan file dan teks, sehingga perpindahan selalu disadari, bukan tak sengaja.</p>

            <h4>Menyalin file antar-qube</h4>
            <ol class="steps">
              <li>Di peramban berkas qube asal, klik kanan file → <strong>"Copy to other qube"</strong> (perintah <code>qvm-copy</code>).</li>
              <li>Pilih qube tujuan. File muncul di folder khusus (mis. <code>QubesIncoming</code>) di qube tujuan.</li>
              <li>Qubes meminta konfirmasi — perpindahan tak pernah terjadi diam-diam; kamu yang menyetujui.</li>
            </ol>

            <h4>Menyalin teks (clipboard antar-qube)</h4>
            <ol class="steps">
              <li>Salin teks seperti biasa (Ctrl+C) di qube asal.</li>
              <li>Tekan <strong>Ctrl+Shift+C</strong> untuk menaruhnya ke "clipboard antar-qube" global Qubes.</li>
              <li>Pindah ke qube tujuan, tekan <strong>Ctrl+Shift+V</strong> untuk memasukkannya ke clipboard lokal qube itu, lalu Ctrl+V seperti biasa.</li>
            </ol>

            <h4>Kenapa dibuat "ribet" — itu fiturnya</h4>
            <p>Langkah ekstra ini memastikan tidak ada data yang berpindah antar-domain tanpa kamu sadari. Clipboard global Qubes hanya menyimpan satu item terakhir dan butuh aksi sengaja, mencegah kebocoran tak sengaja antar-konteks. Gesekan kecil ini adalah harga dari isolasi yang kuat.</p>

            <div class="box warn">
              <div class="bx-title">▲ Arah perpindahan = keputusan kepercayaan</div>
              <p>Menyalin file dari qube "untrusted" ke qube "work" berarti membawa sesuatu yang mungkin berbahaya ke lingkungan tepercaya. Pikirkan arahnya: dari kotor ke bersih perlu kehati-hatian ekstra (lihat materi malware). Jangan pernah menyalin file mencurigakan ke dom0.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu klik-kanan <strong>"Copy to other qube"</strong> dan dialog konfirmasi pemilihan qube tujuan.</p>
              <p><span class="ir-key">Cari: "qubes copy to other qube", "qubes inter-qube clipboard"</span></p>
            </div>
          `,
          practice:`<p>Buat file teks sederhana di satu qube (mis. personal), lalu salin ke qube lain (mis. work) lewat "Copy to other qube" dan temukan di folder QubesIncoming. Latih juga clipboard antar-qube: Ctrl+Shift+C di satu qube, Ctrl+Shift+V di qube lain. Perhatikan tiap perpindahan butuh persetujuanmu — itulah isolasi yang bekerja.</p>`,
          takeaways:[
            "Salin file antar-qube: klik kanan → 'Copy to other qube' (qvm-copy) → muncul di folder QubesIncoming, dengan konfirmasi.",
            "Salin teks: Ctrl+Shift+C (ke clipboard global) lalu Ctrl+Shift+V di qube tujuan.",
            "Langkah ekstra disengaja: mencegah data berpindah antar-domain tanpa disadari.",
            "Arah perpindahan = keputusan kepercayaan; dari kotor ke bersih perlu hati-hati, jangan ke dom0."
          ]
        },
        {
          id:"qubes-install-sw",
          title:"Memasang Software ke Domain Tertentu",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Di Qubes, kamu biasanya <strong>tidak</strong> memasang software langsung ke app qube. Software dipasang ke <strong>template</strong>, lalu app qube yang memakai template itu otomatis mendapatkannya. Memahami ini menghindari kebingungan umum pemula.</p>

            <h4>Kenapa lewat template</h4>
            <p>App qube "meminjam" sistem dari template-nya dan hanya menyimpan data pribadinya. Memasang software di template berarti: satu kali pasang, tersedia untuk semua app qube berbasis template itu, dan pembaruan keamanan terpusat. Perubahan sistem di app qube bersifat sementara (hilang saat restart) — itu memang desainnya.</p>

            <h4>Langkah</h4>
            <ol class="steps">
              <li>Buka <strong>terminal/aplikasi software di template</strong> yang relevan (mis. template Debian atau Fedora).</li>
              <li>Pasang software lewat package manager template tersebut (mis. <code>apt</code> di Debian, <code>dnf</code> di Fedora).</li>
              <li>Tutup template, lalu <strong>restart app qube</strong> yang memakainya agar software baru muncul.</li>
              <li>Atur agar aplikasi baru tampil di menu qube (lewat pengaturan "Applications" qube tersebut bila perlu).</li>
            </ol>

            <h4>Memilih qube untuk software berisiko</h4>
            <ul>
              <li>Software tepercaya &amp; umum → pasang di template utama.</li>
              <li>Software berisiko/eksperimental → pertimbangkan template terpisah atau qube khusus, agar tidak mencemari template utama yang dipakai banyak qube.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Pembaruan terpusat = keamanan</div>
              <p>Karena banyak app qube berbagi satu template, memperbarui template sekali langsung mengamankan semuanya. Jaga template tetap mutakhir, dan jangan jalankan aktivitas berisiko langsung di template.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Terminal di <strong>template qube</strong> memasang paket, dan app qube menampilkan aplikasi baru di menunya.</p>
              <p><span class="ir-key">Cari: "qubes install software template", "qubes template app qube"</span></p>
            </div>
          `,
          takeaways:[
            "Software dipasang ke TEMPLATE, bukan langsung ke app qube; app qube otomatis mendapatkannya.",
            "Perubahan sistem di app qube bersifat sementara (hilang saat restart) — itu desain.",
            "Langkah: pasang via package manager template → restart app qube → atur menu aplikasi.",
            "Software berisiko sebaiknya di template/qube terpisah; jaga template utama tetap mutakhir & bersih."
          ]
        },
        {
          id:"qubes-malware",
          title:"Menangani File Mencurigakan & Malware dengan Aman",
          dur:"praktik · defensif · ± 7 menit",
          body:`
            <p class="lead">Di sinilah Qubes benar-benar bersinar. Saat kamu harus membuka file yang mungkin berbahaya — lampiran tak dikenal, dokumen dari sumber meragukan — Qubes membiarkanmu melakukannya tanpa mempertaruhkan sistem utamamu, lewat <strong>disposable qube</strong>.</p>

            <h4>Disposable qube — "ruang sekali pakai"</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disposable qube membuka file berbahaya lalu dihancurkan">
                <defs><marker id="arq" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <g font-family="monospace" font-size="10">
                  <rect x="20" y="56" width="150" height="56" rx="9" fill="#15202b" stroke="#fb7185"/><text x="95" y="80" text-anchor="middle" fill="#fb7185" font-weight="700">File mencurigakan</text><text x="95" y="98" text-anchor="middle" fill="#9fb4c4">lampiran tak dikenal</text>
                  <rect x="240" y="56" width="170" height="56" rx="9" fill="#15202b" stroke="#f5b748"/><text x="325" y="80" text-anchor="middle" fill="#f5b748" font-weight="700">Disposable qube</text><text x="325" y="98" text-anchor="middle" fill="#9fb4c4">buka di sini, terisolasi</text>
                  <rect x="480" y="56" width="220" height="56" rx="9" fill="#15202b" stroke="#5fd98a"/><text x="590" y="80" text-anchor="middle" fill="#5fd98a" font-weight="700">Tutup = HANCUR</text><text x="590" y="98" text-anchor="middle" fill="#9fb4c4">malware ikut lenyap</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arq)"><line x1="170" y1="84" x2="236" y2="84"/><line x1="410" y1="84" x2="476" y2="84"/></g>
                <text x="360" y="146" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Sistem utamamu tak pernah tersentuh.</text>
              </svg>
              <figcaption>Buka file berisiko di disposable qube; saat ditutup, qube beserta malware apa pun di dalamnya dihancurkan.</figcaption>
            </figure>
            <p>Disposable qube dibuat baru dari template, dipakai sekali, lalu <strong>dihancurkan total saat ditutup</strong> — termasuk malware apa pun yang menyusup. Bila sebuah dokumen ternyata berbahaya, kerusakannya terkurung dalam qube sekali-pakai itu dan lenyap bersamanya.</p>

            <h4>Alur menangani file mencurigakan</h4>
            <ol class="steps">
              <li>Jangan buka file mencurigakan di qube tepercaya/dom0. Sebagai gantinya, klik kanan file → <strong>"Open in Disposable VM"</strong>.</li>
              <li>File terbuka di disposable qube yang terisolasi. Periksa isinya di sana.</li>
              <li>Bila perlu mengubah dokumen tak tepercaya menjadi aman, gunakan alat seperti <strong>"Convert to Trusted PDF"</strong> Qubes — yang mem-flatten dokumen menjadi PDF bersih tanpa konten aktif berbahaya.</li>
              <li>Tutup disposable qube saat selesai; semuanya, termasuk potensi malware, dihancurkan.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Defensif, bukan ofensif</div>
              <p>Materi ini soal <strong>melindungi diri</strong> dari file berbahaya — bukan membuat atau menyebarkan malware (itu ilegal dan di luar lingkup modul). Qubes memberimu keberanian membuka hal tak dikenal dengan aman, yang sangat berguna saat menjelajah wilayah tak tepercaya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu <strong>"Open in Disposable VM"</strong> dan fitur "Convert to Trusted PDF" di Qubes.</p>
              <p><span class="ir-key">Cari: "qubes open in disposable vm", "qubes convert to trusted pdf"</span></p>
            </div>
          `,
          practice:`<p>Ambil sebuah dokumen biasa (mis. PDF), klik kanan → "Open in Disposable VM", dan amati ia terbuka di qube sekali-pakai (warna berbeda). Tutup, lalu pastikan qube itu lenyap dari Qube Manager. Bayangkan dokumen tadi berbahaya — kini kamu paham kenapa membukanya di disposable qube melindungi sistem utamamu. (Defensif saja; jangan menangani malware nyata tanpa keahlian.)</p>`,
          takeaways:[
            "Disposable qube = ruang sekali-pakai yang dihancurkan total saat ditutup, termasuk malware di dalamnya.",
            "Buka file mencurigakan via klik kanan → 'Open in Disposable VM', jangan di qube tepercaya/dom0.",
            "'Convert to Trusted PDF' mengubah dokumen tak tepercaya jadi PDF bersih tanpa konten aktif.",
            "Tujuannya defensif (melindungi diri), bukan membuat/menyebarkan malware."
          ]
        },
        {
          id:"qubes-tor",
          title:"Menyambung ke TOR via Whonix Gateway",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Qubes berpadu indah dengan <strong>Whonix</strong> untuk menghadirkan anonimitas TOR yang tangguh. Rahasianya: memisahkan "gerbang TOR" dari "tempat kerja" ke dalam dua qube berbeda, sehingga aplikasimu tak pernah bisa membocorkan IP asli — bahkan bila terinfeksi.</p>

            <h4>Dua bagian Whonix</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Whonix Gateway dan Workstation">
                <defs><marker id="arw" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#4fe0d0"/></marker></defs>
                <g font-family="monospace" font-size="10">
                  <rect x="20" y="60" width="180" height="58" rx="9" fill="#15202b" stroke="#6ad7ff"/><text x="110" y="84" text-anchor="middle" fill="#6ad7ff" font-weight="700">Workstation</text><text x="110" y="102" text-anchor="middle" fill="#9fb4c4">tempatmu bekerja</text>
                  <rect x="270" y="60" width="180" height="58" rx="9" fill="#15202b" stroke="#f5b748"/><text x="360" y="80" text-anchor="middle" fill="#f5b748" font-weight="700">Gateway (sys-whonix)</text><text x="360" y="98" text-anchor="middle" fill="#9fb4c4">paksa semua lewat TOR</text>
                  <rect x="520" y="60" width="180" height="58" rx="9" fill="#15202b" stroke="#5fd98a"/><text x="610" y="84" text-anchor="middle" fill="#5fd98a" font-weight="700">Jaringan TOR</text><text x="610" y="102" text-anchor="middle" fill="#9fb4c4">→ internet</text>
                </g>
                <g stroke="#4fe0d0" stroke-width="2" marker-end="url(#arw)"><line x1="200" y1="89" x2="266" y2="89"/><line x1="450" y1="89" x2="516" y2="89"/></g>
                <text x="360" y="150" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Workstation TIDAK punya akses langsung ke internet — hanya lewat Gateway.</text>
                <text x="360" y="168" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9.5">Walau Workstation terinfeksi, ia tak bisa membocorkan IP asli — ia tak punya jalan keluar selain TOR.</text>
              </svg>
              <figcaption>Gateway memaksa semua trafik lewat TOR; Workstation tak punya jalur internet lain — proteksi struktural anti-kebocoran IP.</figcaption>
            </figure>

            <ul>
              <li><strong>Whonix Gateway (sys-whonix)</strong> — qube yang menjalankan TOR dan menjadi satu-satunya pintu ke internet bagi qube di belakangnya.</li>
              <li><strong>Whonix Workstation</strong> — qube tempatmu beraktivitas. Ia diatur agar <em>hanya</em> bisa terhubung lewat Gateway, tak punya akses internet langsung.</li>
            </ul>

            <h4>Kenapa pemisahan ini sangat kuat</h4>
            <p>Pada TOR Browser biasa, malware yang membobol browser berpotensi mencari jalan membocorkan IP asli. Di model Whonix-Qubes, Workstation <strong>secara struktural tidak punya jalan keluar selain TOR</strong> — bahkan bila aplikasinya dikompromikan total, ia tak tahu &amp; tak bisa menjangkau IP aslimu, karena itu hanya diketahui Gateway yang terpisah. Isolasi mengubah "harus berperilaku benar" menjadi "tak mungkin bocor secara struktural".</p>

            <h4>Memakainya</h4>
            <ol class="steps">
              <li>Pastikan qube Whonix dibuat saat instalasi (atau buat kemudian). Akan ada <strong>sys-whonix</strong> (gateway) dan template/qube Workstation.</li>
              <li>Jalankan aplikasi (mis. Tor Browser Whonix) dari qube Workstation; trafiknya otomatis lewat sys-whonix → TOR.</li>
              <li>Untuk anonimitas, lakukan aktivitas sensitif di Workstation Whonix, bukan di qube biasa.</li>
            </ol>

            <div class="box tip">
              <div class="bx-title">◇ Qubes + Whonix vs TAILS</div>
              <p>TAILS = anonim sekali-pakai tanpa jejak. Qubes+Whonix = anonimitas TOR yang terisolasi kuat untuk pemakaian harian di mesinmu sendiri, berdampingan dengan qube lain. Keduanya alat hebat; pilih sesuai konteks (ingat Bab 2).</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram <strong>Whonix Gateway + Workstation</strong> di Qubes dan ikon sys-whonix di Qube Manager.</p>
              <p><span class="ir-key">Cari: "whonix gateway workstation qubes diagram", "qubes sys-whonix"</span></p>
            </div>
          `,
          takeaways:[
            "Whonix memisahkan Gateway (sys-whonix, menjalankan TOR) dari Workstation (tempat kerja).",
            "Workstation tak punya akses internet langsung — hanya lewat Gateway, sehingga IP asli tak bisa bocor walau terinfeksi.",
            "Isolasi mengubah 'harus berperilaku benar' jadi 'tak mungkin bocor secara struktural'.",
            "Lakukan aktivitas sensitif di Workstation Whonix; Qubes+Whonix = anonimitas TOR terisolasi untuk harian."
          ]
        },
        {
          id:"qubes-whonix-sw",
          title:"Memasang Software di Whonix & Penutup Kursus",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Sebagai penutup, kita pasang software di lingkungan Whonix dengan benar — dan menarik benang merah seluruh kursus menjadi satu gambaran utuh.</p>

            <h4>Memasang software di Whonix</h4>
            <p>Sama seperti qube lain, software dipasang di <strong>template</strong>-nya — di sini <strong>template Whonix Workstation</strong>, bukan di qube Workstation harian. Caranya:</p>
            <ol class="steps">
              <li>Buka terminal di <strong>template Whonix Workstation</strong>.</li>
              <li>Pasang software lewat package manager (Whonix berbasis Debian, jadi <code>apt</code>) — idealnya pembaruan/instalasi Whonix tetap lewat TOR sesuai desainnya.</li>
              <li>Restart qube Workstation Whonix agar software baru tersedia.</li>
              <li>Jaga template Whonix tetap diperbarui untuk menambal celah keamanan.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Jangan rusak isolasi Whonix</div>
              <p>Hindari mengkonfigurasi software di Workstation agar "mengakali" Gateway atau menambah jalur internet langsung — itu menghancurkan seluruh jaminan anti-kebocoran. Biarkan semua tetap lewat Gateway.</p>
            </div>

            <h4>Menarik benang merah seluruh kursus</h4>
            <p>Lihat kembali perjalananmu: <strong>TOR</strong> menyembunyikan jaringan, <strong>TAILS</strong> menghapus jejak sistem, <strong>komunikasi</strong> (email/XMPP) diamankan persona + <strong>PGP/OTR</strong>, <strong>file</strong> dibersihkan metadata &amp; dienkripsi, <strong>finansial</strong> dilindungi kebiasaan privat &amp; Monero, dan <strong>Qubes</strong> mengurung segalanya dalam kompartemen terisolasi. Tidak ada satu alat yang cukup sendirian — kekuatan sejati lahir dari <strong>kombinasi yang dipandu threat model-mu</strong> (Bab 4).</p>

            <div class="box tip">
              <div class="bx-title">◇ Langkah selanjutnya untukmu</div>
              <p>Mulai dari yang sesuai kebutuhanmu, bukan langsung yang paling rumit. Bagi banyak orang: TOR Browser + kebiasaan OPSEC sudah jauh. Naik ke TAILS untuk tanpa-jejak, lalu Qubes untuk keamanan harian berlapis bila perangkat &amp; kebutuhanmu mendukung. Tinjau threat model-mu berkala — keamanan adalah kebiasaan yang tumbuh, bukan tujuan akhir.</p>
            </div>

            <div class="box danger">
              <div class="bx-title">⚠ Penutup etis</div>
              <p>Semua ilmu di kursus ini adalah alat netral yang dipakai jurnalis, aktivis, peneliti, dan orang biasa untuk melindungi diri. Pakailah untuk tujuan yang sah &amp; melindungi, bukan merugikan orang lain. Privasi adalah hak; tanggung jawab atas penggunaannya ada padamu.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Infografis ringkasan "tumpukan keamanan" seluruh kursus: TOR → TAILS → Komunikasi/PGP → File → Kripto → Qubes.</p>
              <p><span class="ir-key">Cari: "privacy security stack overview", "defense in depth privacy"</span></p>
            </div>
          `,
          takeaways:[
            "Pasang software Whonix di TEMPLATE Whonix Workstation (apt), lalu restart qube; jaga tetap diperbarui lewat TOR.",
            "Jangan mengakali isolasi Gateway — itu menghancurkan jaminan anti-kebocoran IP.",
            "Benang merah kursus: TOR + TAILS + PGP/OTR + privasi file + Monero + Qubes saling melengkapi.",
            "Tidak ada alat tunggal yang cukup; kekuatan ada pada kombinasi sesuai threat model. Pakai untuk tujuan yang sah."
          ],
          quiz:{
            title:"Kuis Bab 11 — Qubes OS",
            sub:"7 soal · pilih satu jawaban",
            questions:[
              {q:"Apa filosofi inti Qubes OS?",
               options:["Membuat sistem mustahil dibobol","Keamanan lewat isolasi: mengurung tiap aktivitas agar satu kompromi tak menjalar","Mempercepat komputer","Menghapus semua data otomatis"],
               answer:1,
               explain:"Qubes berasumsi kompromi pasti terjadi, lalu membatasi dampaknya dengan mengurung aktivitas dalam qube terpisah."},
              {q:"Apa peran dom0 di Qubes?",
               options:["Qube untuk browsing harian","Qube administratif tanpa internet yang harus dijaga bersih","Tempat menyimpan kunci","Gateway TOR"],
               answer:1,
               explain:"dom0 mengelola tampilan & perangkat keras, sengaja tanpa internet; menjaganya bersih adalah inti keamanan Qubes."},
              {q:"Di Qubes, di mana software biasanya dipasang?",
               options:["Langsung di tiap app qube","Di template, lalu app qube yang memakainya mendapatkannya","Di dom0","Di disposable qube"],
               answer:1,
               explain:"Software dipasang di template; app qube meminjam sistem template tapi menyimpan datanya sendiri."},
              {q:"Apa fungsi disposable qube?",
               options:["Menyimpan data permanen","Ruang sekali-pakai yang dihancurkan saat ditutup — ideal membuka file mencurigakan","Menjalankan TOR","Mengganti dom0"],
               answer:1,
               explain:"Disposable qube dipakai sekali lalu dihancurkan total, sehingga malware dari file berbahaya ikut lenyap."},
              {q:"Bagaimana cara aman menyalin file antar-qube?",
               options:["Drag-and-drop bebas","Klik kanan → 'Copy to other qube' (qvm-copy) dengan konfirmasi","Email ke diri sendiri","Simpan di dom0 dulu"],
               answer:1,
               explain:"Qubes memakai qvm-copy yang butuh persetujuan, mencegah perpindahan data antar-domain tanpa disadari."},
              {q:"Kenapa model Whonix (Gateway + Workstation) sangat kuat melawan kebocoran IP?",
               options:["Karena lebih cepat","Workstation tak punya akses internet langsung — hanya lewat Gateway, jadi IP asli tak bisa bocor walau terinfeksi","Karena memakai dua VPN","Karena menyembunyikan layar"],
               answer:1,
               explain:"IP asli hanya diketahui Gateway; Workstation secara struktural tak punya jalan keluar selain TOR, sehingga kebocoran jadi tak mungkin secara desain."},
              {q:"Benang merah seluruh kursus ini adalah…",
               options:["Satu alat ajaib mengatasi semua","Kombinasi alat (TOR, TAILS, PGP, Monero, Qubes) dipandu threat model","VPN cukup untuk segalanya","Menghindari internet sepenuhnya"],
               answer:1,
               explain:"Tidak ada alat tunggal yang cukup; keamanan nyata lahir dari kombinasi yang sesuai dengan threat model-mu."}
            ]
          }
        }
      ]
};
