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
          dur:"konsep",
          body:`
            <p class="lead">Bayangkan kalau setiap aktivitasmu di komputer hidup di kamarnya sendiri yang terkunci rapat: email kerja di satu kamar, perbankan di kamar lain, browsing sembarangan di kamar ketiga. Kalau satu kamar kebobolan, yang lain tetap aman. Itulah ide inti Qubes OS — keamanan lewat <strong>isolasi</strong>, atau yang mereka sebut <em>security by compartmentalization</em>.</p>

            <p>Secara teknis, Qubes menjalankan tiap "kamar" sebagai mesin virtual terpisah di atas hypervisor Xen, dengan bantuan fitur virtualisasi perangkat keras (VT-x/VT-d). Tiap mesin virtual ini disebut <strong>qube</strong>, dan masing-masing diberi tingkat kepercayaan berbeda. Yang membuatnya tetap nyaman dipakai sehari-hari: meski isinya banyak VM, pengalaman desktopnya terintegrasi — jendela dari qube berbeda muncul berdampingan di satu layar, dibedakan oleh warna bingkai.</p>

            <p>Bandingkan ini dengan pendekatan yang sudah kita bahas. TAILS hebat karena amnesik dan menghapus OS host dari persamaan, tapi ia satu lingkungan yang seragam. VM biasa mengisolasi satu hal, tapi pondasinya tetap Windows yang harus kamu percayai. Qubes mengambil jalan ketiga: <strong>seluruh sistem</strong> dibangun dari isolasi, sehingga tak ada satu lingkungan tunggal yang, bila jebol, membongkar segalanya. Inilah kenapa Qubes sering disebut "reasonably secure operating system" dan jadi favorit jurnalis serta peneliti keamanan berisiko tinggi.</p>

            <div class="box tip">
              <div class="bx-title">◇ Inti yang membedakan</div>
              <p>Di OS biasa, satu program jahat bisa menjelajah ke seluruh sistemmu. Di Qubes, ia terkurung di qube tempat ia berjalan. Kerusakan jadi terkotak, bukan menyebar.</p>
            </div>
          `,
          takeaways:[
            "Qubes = keamanan lewat isolasi: tiap aktivitas hidup di mesin virtual (qube) terpisah.",
            "Berbasis hypervisor Xen + virtualisasi perangkat keras; desktop tetap terintegrasi (bingkai berwarna).",
            "Bila satu qube jebol, kerusakan terkotak — tak membongkar seluruh sistem."
          ]
        },
        {
          id:"qubes-verify",
          title:"Opsi Instalasi & Memverifikasi Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Sebelum memasang sistem yang seluruh tujuannya adalah keamanan, langkah paling masuk akal adalah memastikan installer yang kamu unduh memang asli — bukan versi yang sudah disusupi. Untungnya, kamu sudah punya keterampilan ini dari Bab 8.</p>

            <p>Unduh ISO Qubes hanya dari situs resmi qubes-os.org (versi stabil terkini adalah seri 4.3, yang membawa template Whonix 18 dan disposable VM preloaded). Setelah itu, verifikasi keasliannya dengan dua hal yang disediakan tim Qubes: <strong>checksum</strong> untuk memastikan file tak rusak/berubah, dan <strong>tanda tangan PGP</strong> untuk membuktikan file benar-benar dari tim Qubes. Prosesnya: impor master signing key Qubes, verifikasi bahwa kunci itu sah, lalu jalankan verifikasi tanda tangan atas ISO. Hasil "Good signature" dari kunci Qubes yang sudah kamu percayai adalah lampu hijaunya.</p>

            <p>Soal opsi instalasi, ingat satu hal penting: Qubes bukan tipe sistem yang nyaman dijalankan di dalam VM (ia sendiri sebuah hypervisor). Ia paling baik dipasang langsung di perangkat keras — idealnya di komputer atau laptop yang memang kamu siapkan untuknya, bukan mesin utama yang berisi data pentingmu, setidaknya saat belajar.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>"Good signature" hanya bermakna kalau kunci penandatangannya sudah kamu verifikasi sebagai milik tim Qubes (lewat fingerprint dari sumber resmi). Tanpa itu, tanda tangan bisa saja berasal dari kunci palsu — persis pelajaran di Bab 8.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> unduh ISO Qubes resmi, lalu verifikasi checksum dan tanda tangan PGP-nya mengikuti panduan resmi. Anggap ini ujian praktik dari keterampilan verifikasi di Bab 8.</p>`,
          takeaways:[
            "Unduh ISO hanya dari qubes-os.org (kini seri 4.3, template Whonix 18).",
            "Verifikasi checksum (integritas) + tanda tangan PGP (keaslian) sebelum memasang.",
            "Qubes dipasang langsung di hardware, bukan di dalam VM; idealnya di mesin khusus."
          ]
        },
        {
          id:"qubes-flash",
          title:"Membuat USB Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Setelah ISO terverifikasi, langkah berikutnya menuliskannya ke USB agar bisa di-boot — mirip yang kita lakukan untuk TAILS, dengan sedikit perbedaan alat sesuai sistem operasi yang kamu pakai sekarang.</p>

            <p>Di Linux atau macOS, kamu bisa memakai perintah <code>dd</code> yang menyalin ISO byte-per-byte ke USB, atau alat grafis. Di Windows, gunakan <strong>Rufus</strong> (alat yang sama yang kini direkomendasikan untuk TAILS). Apa pun alatnya, gunakan USB berukuran cukup besar — installer Qubes relatif besar — dan pastikan kamu memilih perangkat USB yang benar, karena proses ini akan menghapus seluruh isi drive tujuan.</p>

            <p>Satu kebiasaan baik: setelah menulis, sebagian alat memungkinkan verifikasi ulang bahwa salinan di USB cocok dengan ISO asli. Mengingat seluruh tujuan Qubes adalah kepercayaan, langkah kecil ini sepadan.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Hati-hati memilih drive</div>
              <p>Menulis ke USB akan menghapus semuanya di drive itu. Periksa dua kali nama/label perangkat tujuan sebelum mengeksekusi — salah pilih bisa menghapus data di drive lain.</p>
            </div>
          `,
          takeaways:[
            "Tulis ISO terverifikasi ke USB: dd/alat grafis di Linux/macOS, Rufus di Windows.",
            "Pakai USB cukup besar; proses ini menghapus seluruh isi drive tujuan.",
            "Periksa dua kali perangkat tujuan agar tak salah menghapus drive lain."
          ]
        },
        {
          id:"qubes-prepare",
          title:"Menyiapkan Komputer untuk Qubes",
          dur:"praktik",
          body:`
            <p class="lead">Karena Qubes bersandar pada virtualisasi perangkat keras untuk mengisolasi qube-qube-nya, ada beberapa setelan di BIOS/UEFI yang harus dinyalakan lebih dulu. Tanpa ini, isolasi yang jadi inti Qubes tak bisa berjalan optimal.</p>

            <p>Masuk ke pengaturan BIOS/UEFI komputermu (biasanya dengan menekan F2, Del, atau tombol serupa saat menyala), lalu aktifkan fitur <strong>virtualisasi</strong>: pada perangkat Intel ini disebut <em>VT-x</em> dan <em>VT-d</em>, pada AMD disebut <em>AMD-V</em> dan <em>AMD-Vi/IOMMU</em>. VT-d/IOMMU penting karena memungkinkan Qubes mengisolasi perangkat keras (seperti kartu jaringan) ke qube tertentu. Kamu juga mungkin perlu menyesuaikan urutan boot atau menonaktifkan Secure Boot tergantung perangkat.</p>

            <p>Selain itu, perhatikan kebutuhan sumber daya. Karena Qubes menjalankan banyak VM sekaligus, ia lebih lapar RAM dan ruang disk daripada OS biasa — RAM yang lega dan SSD akan membuat pengalamannya jauh lebih nyaman. Cek daftar perangkat keras yang diketahui kompatibel (Hardware Compatibility List) di situs Qubes bila ragu, karena dukungan perangkat keras adalah salah satu kerewelan Qubes yang paling umum.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Kalau instalasi gagal di tengah jalan, tersangka pertama biasanya virtualisasi (VT-d/IOMMU) yang belum aktif, atau perangkat keras yang kurang cocok. Mengecek HCL sebelum mulai menghemat banyak frustrasi.</p>
            </div>
          `,
          takeaways:[
            "Aktifkan virtualisasi di BIOS/UEFI: VT-x/VT-d (Intel) atau AMD-V/AMD-Vi (AMD).",
            "VT-d/IOMMU memungkinkan isolasi perangkat keras ke qube tertentu.",
            "Qubes lapar RAM & disk; cek Hardware Compatibility List bila ragu."
          ]
        },
        {
          id:"qubes-install",
          title:"Memasang Qubes OS",
          dur:"praktik",
          body:`
            <p class="lead">Dengan USB siap dan BIOS sudah disetel, instalasi Qubes mengikuti alur installer yang cukup memandu, mirip memasang distribusi Linux pada umumnya, dengan beberapa langkah khas keamanan.</p>

            <p>Boot dari USB lewat boot menu (sama seperti TAILS di Bab 2), lalu ikuti installer. Dua hal layak kamu perhatikan baik-baik. Pertama, <strong>enkripsi disk</strong>: Qubes mengenkripsi seluruh penyimpanannya secara default (berbasis LUKS), jadi kamu akan membuat passphrase yang kuat — ini melindungi semua qube-mu bila perangkat hilang atau dicuri. Kedua, di akhir instalasi ada tahap <strong>konfigurasi awal</strong> di mana Qubes menawarkan untuk membuat qube-qube standar secara otomatis (work, personal, untrusted) dan menyiapkan template, termasuk opsi Whonix untuk koneksi TOR.</p>

            <p>Setelah selesai dan reboot pertama, kamu akan disambut desktop Qubes. Jangan kaget kalau terasa berbeda — kamu sebenarnya sedang melihat banyak sistem operasi kecil yang bekerja sama dalam satu layar.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Passphrase enkripsi disk adalah pelindung utama seluruh sistemmu. Pilih yang kuat dan jangan sampai lupa — tak ada jalan pintas untuk memulihkannya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> pasang Qubes di mesin uji/khusus, aktifkan enkripsi disk, dan biarkan installer membuat qube standar + template Whonix. Catat passphrase-mu dengan aman.</p>`,
          takeaways:[
            "Boot dari USB, ikuti installer; aktifkan enkripsi disk (LUKS) dengan passphrase kuat.",
            "Konfigurasi awal bisa membuat qube standar (work/personal/untrusted) + template Whonix otomatis.",
            "Setelah reboot, desktop Qubes sebenarnya banyak OS kecil yang bekerja bersama."
          ]
        },
        {
          id:"qubes-basics",
          title:"Dasar-Dasar Qubes OS",
          dur:"konsep",
          body:`
            <p class="lead">Untuk nyaman memakai Qubes, kamu cukup mengenal sedikit kosakata intinya. Begitu konsepnya klik, sisanya mengalir dengan sendirinya.</p>

            <p>Hal terpenting yang perlu dipahami adalah <strong>dom0</strong> — domain admin yang mengelola desktop dan semua qube lain. dom0 sengaja dijaga ketat: ia tidak punya akses jaringan sama sekali, karena kalau dom0 jebol, seluruh sistem jebol. Aturan emasnya: lakukan sesedikit mungkin di dom0, dan jangan pernah memindahkan file mencurigakan ke sana.</p>

            <p>Lalu ada konsep <strong>template</strong> dan <strong>app qube</strong>. Template adalah VM berisi sistem dasar dan software (misalnya berbasis Fedora atau Debian); app qube adalah tempatmu benar-benar bekerja, dan ia "meminjam" software dari template-nya. Trik cerdasnya: kamu menginstal software sekali di template, dan semua app qube yang memakai template itu langsung mendapatkannya — sambil tetap terisolasi satu sama lain. Selain itu ada <strong>disposable VM</strong> (qube sekali-pakai yang lenyap setelah ditutup) yang akan kita pakai untuk menangani hal-hal berisiko.</p>

            <p>Terakhir, tiap qube punya <strong>label warna</strong> (merah, kuning, hijau, dan seterusnya). Warna ini bukan sekadar hiasan — ia muncul di bingkai tiap jendela, memberitahumu sekilas seberapa tepercaya lingkungan tempat jendela itu berjalan.</p>

            <div class="box danger">
              <div class="bx-title">⚠ dom0 adalah jantungnya</div>
              <p>Perlakukan dom0 seperti ruang kendali yang tak boleh disentuh sembarangan. Jangan menjalankan aplikasi sehari-hari di sana, jangan menyalin file tak tepercaya ke sana. Kompromi dom0 = kompromi total.</p>
            </div>
          `,
          takeaways:[
            "dom0 = domain admin tanpa jaringan; jaga ketat, lakukan sesedikit mungkin di sana.",
            "Template menyimpan software; app qube tempat bekerja & meminjam dari template.",
            "Label warna di bingkai jendela menandai tingkat kepercayaan tiap qube."
          ]
        },
        {
          id:"qubes-domains",
          title:"Memahami Security Domains",
          dur:"konsep",
          body:`
            <p class="lead">Inti dari memakai Qubes dengan baik adalah memikirkan hidup digitalmu sebagai sekumpulan <strong>domain keamanan</strong> — kelompok aktivitas dengan tingkat kepercayaan yang sama, masing-masing di qube-nya sendiri.</p>

            <p>Pembagian klasik kira-kira begini. Qube <strong>work</strong> untuk urusan pekerjaan, <strong>personal</strong> untuk kehidupan pribadi, dan <strong>untrusted</strong> untuk browsing sembarangan yang kamu anggap berisiko. Untuk hal paling sensitif, ada pola <strong>vault</strong> — qube tanpa jaringan sama sekali, tempat menyimpan rahasia seperti kunci PGP atau database password. Karena vault tak pernah online, mencurinya dari jarak jauh nyaris mustahil.</p>

            <p>Kekuatan cara berpikir ini terlihat saat ada yang tidak beres. Misalkan kamu tak sengaja membuka lampiran jahat di qube untrusted — kerusakannya terkurung di sana, tak menyentuh qube work atau vault-mu. Kamu cukup membuang qube itu dan melanjutkan hidup. Warna label tadi membantu disiplin ini: kamu jadi terbiasa melihat apakah jendela yang sedang kamu pakai berwarna "aman" atau "berisiko" sebelum mengetik sesuatu yang sensitif.</p>

            <div class="box tip">
              <div class="bx-title">◇ Cara menentukan domain</div>
              <p>Tanyakan: "kalau lingkungan ini jebol, apa yang hilang?" Kelompokkan aktivitas berdasarkan jawaban itu. Yang taruhannya besar (vault) dipisahkan tegas dari yang berisiko tinggi (untrusted).</p>
            </div>
          `,
          takeaways:[
            "Pikirkan aktivitas sebagai domain keamanan: work, personal, untrusted, dan vault (tanpa jaringan).",
            "Vault tanpa jaringan menyimpan rahasia (kunci PGP, password) hampir mustahil dicuri dari jauh.",
            "Kompromi di satu domain terkurung di sana; warna label membantu disiplin sehari-hari."
          ]
        },
        {
          id:"qubes-multi",
          title:"Bekerja dengan Banyak Domain Sekaligus",
          dur:"praktik",
          body:`
            <p class="lead">Salah satu hal yang membuat Qubes terasa ajaib pertama kali adalah ini: kamu bisa menjalankan aplikasi dari beberapa qube berbeda berdampingan di satu desktop, seakan semuanya satu sistem — padahal masing-masing terisolasi total.</p>

            <p>Bayangkan browser dari qube untrusted, klien email dari qube work, dan editor dari qube personal terbuka bersamaan. Yang membedakan mereka adalah <strong>warna bingkai jendela</strong>: tiap jendela mewarisi warna label qube asalnya. Sekilas lihat, kamu langsung tahu "jendela merah ini berasal dari lingkungan untrusted, jadi aku tak akan mengetik password bank di sini". Petunjuk visual sederhana ini adalah lapisan keamanan tersendiri — ia melawan kebiasaan ceroboh dengan membuat tingkat kepercayaan selalu terlihat.</p>

            <p>Yang penting dipahami: meski tampak menyatu, jendela-jendela ini tidak bisa saling mengintip. Aplikasi di qube untrusted tak bisa membaca apa yang ada di qube work, tak bisa menangkap ketikanmu di jendela lain, tak bisa mengakses file-nya. Integrasi ada di lapisan tampilan; isolasi tetap utuh di bawahnya.</p>

            <div class="box tip">
              <div class="bx-title">◇ Kebiasaan kecil, dampak besar</div>
              <p>Biasakan melirik warna bingkai sebelum melakukan hal sensitif. Lama-lama refleks ini menjadi pelindung otomatis: tangan berhenti sendiri sebelum mengetik rahasia di jendela "berisiko".</p>
            </div>
          `,
          takeaways:[
            "Aplikasi dari banyak qube tampil berdampingan; warna bingkai menandai asal & kepercayaannya.",
            "Petunjuk warna adalah lapisan keamanan: tingkat kepercayaan selalu terlihat.",
            "Integrasi hanya di tampilan; jendela antar-qube tetap tak bisa saling mengintip."
          ]
        },
        {
          id:"qubes-files",
          title:"Memindahkan File & Teks Antar Domain",
          dur:"praktik",
          body:`
            <p class="lead">Kalau setiap qube terisolasi, bagaimana cara memindahkan satu file dari qube unduhan ke qube tempatmu bekerja? Qubes menyediakan mekanisme khusus yang sengaja dibuat sadar-keamanan — bukan drag-and-drop bebas seperti OS biasa.</p>

            <p>Untuk file, Qubes punya perintah seperti <strong>qvm-copy</strong> (dan menu klik-kanan "Copy to other qube") yang memindahkan file ke qube tujuan dengan aman, menempatkannya di folder khusus agar kamu sadar file itu "pendatang". Untuk teks, ada <strong>clipboard antar-qube</strong> dua langkah: kamu salin di qube asal, tekan kombinasi khusus untuk mengirimnya ke clipboard global, lalu kombinasi lain untuk menempelkannya di qube tujuan. Dua langkah ini disengaja — agar tak ada teks yang berpindah antar lingkungan tanpa kamu kehendaki.</p>

            <p>Yang krusial dipahami adalah <strong>arah kepercayaan</strong>. Menyalin file <em>dari</em> qube tepercaya <em>ke</em> qube tak tepercaya umumnya aman. Sebaliknya, membawa file dari qube tak tepercaya ke qube tepercaya (apalagi ke dom0) berisiko: file itu bisa membawa sesuatu yang berbahaya. Karena itu, file mencurigakan sebaiknya ditangani di disposable VM (materi berikutnya), bukan diseret ke qube pentingmu.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Jangan ke dom0</div>
              <p>Memindahkan file ke dom0 sangat tidak dianjurkan. dom0 adalah ruang kendali; satu file jahat di sana bisa membahayakan seluruh sistem. Kalau benar-benar perlu, ada prosedur khusus — tapi defaultnya: jangan.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buat file teks di satu qube, pindahkan ke qube lain dengan "Copy to other qube", lalu coba juga clipboard antar-qube. Perhatikan langkah-langkah sengaja yang membuatmu sadar setiap perpindahan.</p>`,
          takeaways:[
            "Pindah file dengan qvm-copy / 'Copy to other qube'; teks lewat clipboard antar-qube dua langkah.",
            "Mekanismenya sengaja sadar-keamanan, bukan drag-and-drop bebas.",
            "Perhatikan arah kepercayaan; jangan membawa file mencurigakan ke qube penting atau dom0."
          ]
        },
        {
          id:"qubes-install-sw",
          title:"Memasang Software ke Domain Tertentu",
          dur:"praktik",
          body:`
            <p class="lead">Cara menginstal software di Qubes sedikit berbeda dari kebiasaan, tapi begitu kamu paham logikanya, ia justru sangat rapi: kamu memasang software di <strong>template</strong>, bukan langsung di app qube tempat bekerja.</p>

            <p>Ingat dari materi dasar tadi: app qube meminjam software dari template-nya. Jadi kalau kamu ingin, misalnya, sebuah editor tersedia di qube work, kamu menginstalnya di template yang dipakai qube work (mis. template Debian atau Fedora), lalu me-restart qube tersebut. Semua app qube yang berbagi template itu kini punya editornya — sekali pasang, banyak yang menikmati, tanpa mengorbankan isolasi.</p>

            <p>Pendekatan ini punya bonus keamanan. Karena app qube biasanya tidak menyimpan perubahan sistem secara permanen (hanya data di folder rumahnya yang bertahan), perubahan yang tak diinginkan di sistem dasar akan hilang saat restart. Dan kalau kamu butuh software yang tak ingin kamu percayai sepenuhnya, kamu bisa membuat template terpisah khusus untuknya, sehingga ia tak "mengkontaminasi" lingkungan lain.</p>

            <div class="box tip">
              <div class="bx-title">◇ Pola pikir</div>
              <p>Template = "pabrik" software; app qube = "ruang kerja" yang memakai hasil pabrik. Kalau butuh sesuatu di mana-mana, pasang di pabriknya. Kalau butuh sesuatu yang berisiko, beri ia pabrik sendiri.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> instal sebuah aplikasi ringan di salah satu template, restart app qube yang memakainya, dan pastikan aplikasinya muncul. Perhatikan bahwa app qube lain dengan template sama juga mendapatkannya.</p>`,
          takeaways:[
            "Instal software di template, bukan langsung di app qube; restart agar app qube mendapatkannya.",
            "Sekali pasang di template, semua app qube yang memakainya menikmatinya — tetap terisolasi.",
            "Software berisiko bisa diberi template terpisah agar tak mengkontaminasi lingkungan lain."
          ]
        },
        {
          id:"qubes-malware",
          title:"Menangani File Mencurigakan & Malware dengan Aman",
          dur:"praktik · defensif",
          body:`
            <p class="lead">Di sinilah arsitektur Qubes benar-benar bersinar. Pernah ragu membuka sebuah lampiran karena takut berbahaya? Di Qubes, kamu bisa membukanya di ruangan sekali-pakai yang akan dibakar habis setelahnya — tanpa mempertaruhkan sistemmu.</p>

            <p>Kuncinya adalah <strong>disposable VM (DispVM)</strong> — qube sementara yang dibuat sesaat untuk satu tugas, lalu dihancurkan total beserta seluruh isinya begitu jendelanya ditutup. Kalau file yang kamu buka ternyata membawa malware, malware itu hanya hidup di dalam DispVM dan ikut lenyap saat qube-nya dibuang. Tak ada yang menetap, tak ada yang menyebar.</p>

            <p>Praktiknya mudah: klik-kanan sebuah file dan pilih membukanya di disposable VM, atau buka aplikasi langsung dalam DispVM untuk, misalnya, mengunjungi tautan yang kamu curigai. Qubes 4.3 bahkan menyiapkan disposable preloaded agar terbuka lebih cepat. Ini mengubah cara kamu menghadapi ketidakpastian: alih-alih menebak-nebak apakah sebuah file aman, kamu cukup membukanya di lingkungan yang memang dirancang untuk dikorbankan.</p>

            <div class="box warn">
              <div class="bx-title">▲ Catatan kejujuran</div>
              <p>DispVM melindungi sistem lainmu, tapi ia bukan jaminan anti-forensik sempurna, dan malware yang sangat canggih secara teori bisa mencoba menembus isolasi (sangat jarang). Tetap berpikir berlapis: DispVM untuk membuka, qube terpisah untuk hal sensitif, dan jangan pernah membawa file mencurigakan ke dom0.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buka sebuah dokumen biasa di disposable VM, lalu tutup dan amati bahwa qube-nya beserta isinya benar-benar lenyap. Bayangkan dokumen itu berbahaya — kini kamu punya cara aman menghadapinya.</p>`,
          takeaways:[
            "Disposable VM (DispVM) = qube sekali-pakai yang dihancurkan total setelah ditutup.",
            "Buka file/tautan mencurigakan di DispVM; malware ikut lenyap, tak menyebar ke sistem.",
            "Bukan jaminan anti-forensik mutlak; tetap berlapis dan jauhkan file mencurigakan dari dom0."
          ]
        },
        {
          id:"qubes-tor",
          title:"Menyambung ke TOR via Whonix Gateway",
          dur:"praktik",
          body:`
            <p class="lead">Di sinilah semua yang kita pelajari bertemu. Qubes terintegrasi dengan <strong>Whonix</strong> — pendekatan dua-VM yang kita gambarkan di diagram Bab TAILS — untuk memberi anonimitas TOR yang jauh lebih tahan bocor daripada sekadar menjalankan TOR Browser.</p>

            <p>Whonix di Qubes terdiri dari dua qube yang bekerja sama. <strong>sys-whonix</strong> adalah <em>gateway</em>: satu-satunya qube yang berbicara ke jaringan, dan ia memaksa <strong>seluruh</strong> trafik lewat TOR. <strong>anon-whonix</strong> adalah <em>workstation</em>: tempatmu menjalankan aplikasi, dan ia hanya boleh terhubung ke internet melalui gateway tadi. Keindahannya: workstation secara teknis tak pernah tahu alamat IP aslimu, karena ia tak punya akses langsung ke jaringan. Bahkan jika sebuah aplikasi di workstation mencoba "membocorkan" dengan menghubungi internet langsung, tak ada jalan keluar selain lewat TOR.</p>

            <p>Inilah yang menutup celah "kebocoran konfigurasi" yang kita bahas dulu: kesalahan setel di workstation tak bisa membuat trafik lolos ke luar TOR, karena pemisahan gateway/workstation memang dirancang untuk itu. Qubes 4.3 (dengan template Whonix 18) bahkan secara aktif mencegahmu mengubah netvm workstation ke jaringan biasa, justru untuk menghindari kebocoran IP yang tak sengaja.</p>

            <div class="box tip">
              <div class="bx-title">◇ Menyambung ke peta besar</div>
              <p>Bandingkan dengan Bab 1 (TOR Browser di OS biasa) dan Bab TAILS: di sini, anonimitas TOR berdiri di atas pondasi isolasi Qubes, dengan gateway terpisah sebagai penjaga gerbang. Ini bentuk paling tangguh dari yang sudah kamu pelajari.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> jalankan aplikasi di anon-whonix dan pastikan koneksinya lewat sys-whonix (TOR). Periksa bahwa workstation tak punya akses jaringan langsung — itu fitur, bukan bug.</p>`,
          takeaways:[
            "Whonix di Qubes = dua qube: sys-whonix (gateway, semua lewat TOR) + anon-whonix (workstation).",
            "Workstation tak punya akses jaringan langsung, jadi IP aslimu tak bisa bocor walau aplikasi mencoba.",
            "Pemisahan gateway/workstation menutup celah kebocoran konfigurasi; Qubes 4.3 mencegah ubah netvm ke clearnet."
          ]
        },
        {
          id:"qubes-whonix-sw",
          title:"Memasang Software di Whonix",
          dur:"praktik",
          body:`
            <p class="lead">Logika instalasi software di Whonix mengikuti aturan Qubes yang sudah kamu kenal — pasang di template, bukan di qube kerja — dengan satu kehati-hatian tambahan khas anonimitas.</p>

            <p>Software untuk lingkungan Whonix dipasang di <strong>template whonix-workstation</strong> (di Qubes 4.3, ini whonix-workstation-18). Begitu terpasang dan template di-restart, app qube Whonix-mu (seperti anon-whonix) akan mendapatkannya — sama persis dengan pola template yang kita bahas sebelumnya. Update pun sebaiknya dilakukan di template, dan karena ini Whonix, semua lalu lintas update otomatis lewat TOR.</p>

            <p>Kehati-hatian tambahannya bersifat OPSEC, bukan teknis: berhati-hatilah memasang software yang aneh atau tak tepercaya ke lingkungan anonim. Aplikasi bisa "membocorkan" identitasmu lewat cara halus — menghubungi server tertentu, meninggalkan jejak khas, atau membuat fingerprint unik. Prinsip dari Bab 1 tetap berlaku di sini: makin sedikit yang kamu ubah dari lingkungan standar, makin kecil kemungkinan kamu menonjol. Lingkungan anonim paling aman adalah yang tampak biasa-biasa saja, sama seperti pengguna Whonix lainnya.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian OPSEC</div>
              <p>Anonimitas teknis Whonix bisa dirusak oleh software yang kamu tambahkan sendiri. Tahan diri: instal hanya yang benar-benar perlu, dari sumber tepercaya, dan ingat bahwa setiap penambahan bisa membuatmu lebih mudah dibedakan.</p>
            </div>
          `,
          takeaways:[
            "Instal software Whonix di template whonix-workstation (di 4.3: whonix-workstation-18), lalu restart.",
            "Update di template; di Whonix semua lalu lintas otomatis lewat TOR.",
            "OPSEC: software asing bisa membocorkan/menonjolkanmu — instal seminimal mungkin, dari sumber tepercaya."
          ],
          quiz:{
            title:"Kuis Bab 11 — Qubes OS",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Filosofi inti Qubes OS adalah…",
               options:["Kecepatan maksimal","Keamanan lewat isolasi (compartmentalization)","Tanpa enkripsi","Satu lingkungan untuk semua"],
               answer:1,
               explain:"Tiap aktivitas hidup di qube terpisah; bila satu jebol, kerusakan terkotak."},
              {q:"Apa peran dom0?",
               options:["Browsing sehari-hari","Domain admin tanpa jaringan yang mengelola semua qube — dijaga sangat ketat","Menyimpan password","Menjalankan TOR"],
               answer:1,
               explain:"Kompromi dom0 = kompromi total, jadi ia tanpa jaringan dan tak boleh disentuh sembarangan."},
              {q:"Hubungan template dan app qube:",
               options:["Sama saja","App qube meminjam software dari template; instal di template lalu restart","Template untuk browsing","App qube menyimpan dom0"],
               answer:1,
               explain:"Sekali pasang di template, semua app qube yang memakainya mendapatkannya — tetap terisolasi."},
              {q:"Cara aman menangani file/lampiran mencurigakan di Qubes:",
               options:["Buka di dom0","Buka di disposable VM (DispVM) yang dihancurkan setelah ditutup","Kirim ke qube vault","Nonaktifkan isolasi"],
               answer:1,
               explain:"Malware di DispVM ikut lenyap saat qube dibuang; tak menyebar ke sistem."},
              {q:"Dalam Whonix di Qubes, sys-whonix berfungsi sebagai…",
               options:["Workstation aplikasi","Gateway yang memaksa semua trafik lewat TOR","Tempat menyimpan file","Template Fedora"],
               answer:1,
               explain:"anon-whonix (workstation) hanya bisa online lewat sys-whonix (gateway), sehingga IP asli tak bocor."},
              {q:"Kenapa workstation Whonix tak bisa membocorkan IP aslimu?",
               options:["Karena memakai VPN","Karena tak punya akses jaringan langsung — semua harus lewat gateway TOR","Karena dimatikan","Karena tak terenkripsi"],
               answer:1,
               explain:"Pemisahan gateway/workstation menutup celah kebocoran konfigurasi secara desain."}
            ]
          }
        }
      ]
    };
