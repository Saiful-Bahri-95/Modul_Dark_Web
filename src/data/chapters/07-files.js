/* Bab 7 — id: "files"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"files",
      title:"Manajemen & Berbagi File",
      lectures:[
        {
          id:"files-intro",
          title:"Pengantar Berbagi File Privat & Anonim",
          dur:"konsep",
          body:`
            <p class="lead">Berbagi file membawa dua risiko terpisah: <strong>isi</strong> file (siapa yang bisa membacanya) dan <strong>metadata</strong> (jejak tersembunyi yang bisa membongkar identitasmu). Keduanya butuh penanganan berbeda.</p>

            <h4>Tiga dimensi</h4>
            <ul>
              <li><strong>Privasi isi</strong> — dijawab dengan enkripsi (Bab Enkripsi/PGP).</li>
              <li><strong>Anonimitas transport</strong> — dijawab dengan menyalurkan lewat TOR (mis. OnionShare).</li>
              <li><strong>Kebersihan metadata</strong> — dijawab dengan membersihkan metadata sebelum berbagi (materi berikutnya).</li>
            </ul>

            <h4>Kenapa metadata berbahaya</h4>
            <p>File foto bisa menyimpan koordinat GPS, model kamera, dan waktu; dokumen menyimpan nama penulis, perangkat lunak, riwayat revisi. Berbagi file "biasa" bisa diam-diam membocorkan lokasi dan identitasmu tanpa kamu sadari.</p>

            <div class="box tip">
              <div class="bx-title">◇ Inti bab ini</div>
              <p>Berbagi yang benar-benar aman = isi terenkripsi + metadata dibersihkan + disalurkan lewat TOR. Tiga lapisan, tiga alat berbeda.</p>
            </div>
          `,
          takeaways:[
            "Berbagi file punya 3 dimensi: privasi isi, anonimitas transport, kebersihan metadata.",
            "Metadata (GPS foto, penulis dokumen) bisa membocorkan identitas diam-diam.",
            "Solusi lengkap: enkripsi isi + bersihkan metadata + salurkan via TOR."
          ]
        },
        {
          id:"files-metadata",
          title:"Membersihkan Metadata & Berbagi Dasar",
          dur:"praktik",
          body:`
            <p class="lead">Sebelum berbagi file apa pun, bersihkan metadatanya. TAILS menyertakan <strong>MAT2</strong> (Metadata Anonymization Toolkit) khusus untuk ini.</p>

            <h4>Jenis metadata yang umum</h4>
            <ul>
              <li><strong>Foto (EXIF)</strong> — koordinat GPS, model &amp; nomor seri kamera, tanggal/jam.</li>
              <li><strong>Dokumen (PDF/Office)</strong> — nama penulis, organisasi, perangkat lunak, riwayat revisi, komentar tersembunyi.</li>
              <li><strong>Audio/video</strong> — perangkat perekam, lokasi, waktu.</li>
            </ul>

            <h4>Membersihkan dengan MAT2 (di TAILS)</h4>
            <ol>
              <li>Buka pengelola file, klik kanan file → <strong>Remove metadata</strong> (terintegrasi MAT2), atau jalankan <code>mat2 namafile</code> di terminal.</li>
              <li>MAT2 menghasilkan salinan bersih (mis. <code>namafile.cleaned.jpg</code>).</li>
              <li>Periksa hasilnya dengan <code>mat2 --show namafile</code> untuk memastikan metadata sudah hilang.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Pembersihan metadata tak menghapus informasi yang ada <em>di dalam isi</em> file (mis. wajah di foto, nama di teks, atau pola gaya menulis). Periksa isinya juga, bukan hanya metadatanya.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> ambil sebuah foto dari ponsel, jalankan <code>mat2 --show</code> untuk melihat metadata aslinya (perhatikan GPS bila ada), bersihkan, lalu cek ulang. Kamu akan kaget berapa banyak yang tersimpan diam-diam.</p>`,
          takeaways:[
            "Selalu bersihkan metadata sebelum berbagi; di TAILS pakai MAT2.",
            "Metadata umum: GPS/kamera di foto, penulis/revisi di dokumen.",
            "Pembersihan metadata tak menghapus info di dalam isi file — periksa isinya juga."
          ]
        },
        {
          id:"files-share",
          title:"Berbagi File Privat & Anonim",
          dur:"praktik",
          body:`
            <p class="lead">Setelah metadata bersih dan isi terenkripsi, salurkan file lewat <strong>OnionShare</strong> (sudah kita kenal di Lab 05) — berbagi langsung lewat onion service sementara, tanpa server pihak ketiga.</p>

            <h4>Alur berbagi yang aman</h4>
            <ol>
              <li><strong>Bersihkan metadata</strong> dengan MAT2.</li>
              <li><strong>Enkripsi isi</strong> dengan PGP (Bab Enkripsi) bila rahasia.</li>
              <li><strong>Salurkan via OnionShare</strong> — bagikan alamat .onion sementara ke penerima lewat saluran aman.</li>
              <li>Tutup OnionShare setelah selesai; alamatnya langsung mati.</li>
            </ol>

            <h4>Kenapa lapisan ini saling melengkapi</h4>
            <p>OnionShare menyembunyikan <em>siapa &amp; dari mana</em> (anonimitas transport via TOR), PGP menyembunyikan <em>isi</em> (kerahasiaan), dan MAT2 menghapus <em>jejak tersembunyi</em> (metadata). Bersama, ketiganya menutup tiga vektor kebocoran sekaligus.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk menerima file dari orang lain secara anonim, pakai mode <strong>Receive</strong> di OnionShare — kamu memberi mereka alamat .onion untuk mengunggah.</p>
            </div>
          `,
          takeaways:[
            "Alur aman: bersihkan metadata → enkripsi PGP → salurkan via OnionShare → tutup.",
            "Tiga lapisan menutup tiga vektor: transport (TOR), isi (PGP), jejak (metadata).",
            "Mode Receive OnionShare untuk menerima file anonim."
          ]
        },
        {
          id:"files-remove",
          title:"Menghapus File dengan Aman",
          dur:"konsep · praktik",
          body:`
            <p class="lead">"Menghapus" file biasa <strong>tidak</strong> benar-benar menghapus datanya — sistem hanya menandai ruangnya sebagai bebas, sementara isinya masih bisa dipulihkan sampai tertimpa. Penghapusan aman menangani ini.</p>

            <h4>Kenapa delete biasa tak cukup</h4>
            <p>Saat kamu "hapus", file masih ada secara fisik di disk sampai data baru menimpanya. Alat forensik bisa memulihkannya. Penghapusan aman menimpa area itu dengan data acak agar tak dapat dipulihkan.</p>

            <h4>Alat penghapusan aman</h4>
            <ul>
              <li><strong><code>shred</code></strong> — menimpa file beberapa kali (tersedia di Linux/TAILS).</li>
              <li><strong>"Wipe" di pengelola file</strong> — sebagian lingkungan menyediakan opsi hapus-aman.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Penting: SSD &amp; flash berbeda</div>
              <p>Pada <strong>SSD dan USB flash</strong>, <code>shred</code> sering <em>tidak andal</em> karena <em>wear leveling</em> — controller memindahkan data ke sel fisik lain, sehingga "menimpa" tak menyentuh salinan aslinya. Untuk media ini, jawaban yang benar adalah <strong>enkripsi penuh sejak awal</strong> (materi berikutnya) atau fitur <em>secure erase</em> bawaan perangkat — bukan sekadar shred.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Tip TAILS</div>
              <p>Karena TAILS amnesik, file sesi otomatis lenyap saat reboot. Penghapusan aman manual terutama relevan untuk data di Persistent Storage atau media lain.</p>
            </div>
          `,
          takeaways:[
            "Delete biasa hanya menandai ruang bebas; data masih bisa dipulihkan sampai tertimpa.",
            "shred menimpa data — tapi tidak andal di SSD/flash karena wear leveling.",
            "Untuk SSD/flash, andalkan enkripsi penuh atau secure erase bawaan, bukan shred."
          ]
        },
        {
          id:"files-wipe",
          title:"Menghapus & Mengenkripsi Storage dengan Aman",
          dur:"praktik",
          body:`
            <p class="lead">Pendekatan paling tangguh bukan "menghapus dengan aman setelahnya", melainkan <strong>mengenkripsi seluruh media sejak awal</strong>. Bila semua data terenkripsi, "menghapus" cukup dengan membuang kuncinya.</p>

            <h4>Enkripsi penuh (full-disk encryption)</h4>
            <ul>
              <li><strong>LUKS</strong> — standar enkripsi disk di Linux; tersedia di TAILS lewat <strong>GNOME Disks</strong> untuk membuat USB/disk terenkripsi.</li>
              <li><strong>VeraCrypt</strong> — lintas-platform, bisa membuat kontainer atau mengenkripsi seluruh volume.</li>
              <li><strong>Persistent Storage TAILS</strong> — sudah berbasis LUKS (Bab 2).</li>
            </ul>

            <h4>"Crypto-erase": menghapus dengan membuang kunci</h4>
            <p>Bila media sudah terenkripsi penuh, kamu bisa menghapus seluruh isinya secara efektif hanya dengan <strong>menghancurkan kunci enkripsinya</strong> — datanya menjadi tumpukan byte acak yang tak berarti. Ini jauh lebih andal di SSD/flash daripada menimpa.</p>

            <h4>Menghapus seluruh perangkat</h4>
            <p>Untuk membersihkan total: gunakan fitur <strong>ATA Secure Erase</strong> bawaan SSD (dirancang khusus untuk media flash), atau buat ulang enkripsi (format LUKS baru) di GNOME Disks. Untuk HDD lama, menimpa penuh masih relevan.</p>

            <div class="box tip">
              <div class="bx-title">◇ Strategi praktis</div>
              <p>Enkripsi <em>dulu</em>, sebelum menaruh data apa pun. Dengan begitu, sepanjang umur media, datamu selalu terlindungi dan "penghapusan" jadi soal kunci, bukan menimpa byte.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> dengan USB cadangan, buat volume terenkripsi LUKS lewat GNOME Disks di TAILS, simpan file uji, cabut &amp; colok ulang, lalu buka kembali dengan passphrase. Rasakan bedanya antara "data terkunci" vs "data terhapus".</p>`,
          takeaways:[
            "Strategi terbaik: enkripsi penuh sejak awal (LUKS/VeraCrypt), bukan hapus-aman belakangan.",
            "Crypto-erase (buang kunci) andal di SSD/flash; ATA Secure Erase untuk hapus total.",
            "Enkripsi sebelum menaruh data agar 'menghapus' = membuang kunci."
          ],
          quiz:{
            title:"Kuis Bab 7 — Manajemen & Berbagi File",
            sub:"5 soal · pilih satu jawaban",
            questions:[
              {q:"Tiga dimensi berbagi file yang aman adalah…",
               options:["Ukuran, format, nama","Privasi isi, anonimitas transport, kebersihan metadata","Warna, resolusi, durasi","Harga, lisensi, hak cipta"],
               answer:1,
               explain:"Isi (enkripsi), transport (TOR/OnionShare), dan metadata (MAT2) — tiga vektor berbeda."},
              {q:"MAT2 di TAILS berfungsi untuk…",
               options:["Mengenkripsi file","Membersihkan metadata file","Menyalurkan file via TOR","Membuat dompet"],
               answer:1,
               explain:"MAT2 (Metadata Anonymization Toolkit) menghapus metadata seperti GPS dan info penulis."},
              {q:"Kenapa 'delete' biasa tidak aman?",
               options:["Terlalu lambat","Data masih bisa dipulihkan sampai tertimpa","Menghapus terlalu banyak","Butuh internet"],
               answer:1,
               explain:"Delete hanya menandai ruang bebas; isi fisik masih ada hingga ditimpa data baru."},
              {q:"Mengapa shred tidak andal di SSD/USB flash?",
               options:["SSD terlalu cepat","Wear leveling memindahkan data sehingga 'menimpa' tak menyentuh salinan asli","SSD tidak punya data","shred ilegal"],
               answer:1,
               explain:"Controller flash memindahkan data antar sel, jadi penimpaan tak menjamin penghapusan salinan asli."},
              {q:"Pendekatan paling tangguh untuk SSD/flash adalah…",
               options:["Shred berkali-kali","Enkripsi penuh sejak awal (lalu crypto-erase dengan membuang kunci)","Menamai ulang file","Memindahkan ke folder lain"],
               answer:1,
               explain:"Bila media terenkripsi penuh, menghapus kunci membuat seluruh data jadi byte acak tak berarti."}
            ]
          }
        }
      ]
    };
