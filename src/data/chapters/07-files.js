/* Bab 7 — id: "files"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"files",
      title:"Manajemen & Berbagi File",
      lectures:[
        {
          id:"files-intro",
          title:"Tiga Dimensi Keamanan File",
          dur:"konsep · ± 6 menit",
          body:`
            <p class="lead">Sebuah file bisa membongkarmu lewat tiga jalan berbeda, dan masing-masing butuh pertahanan sendiri. Kalau kamu hanya menjaga satu, dua celah lain tetap menganga. Bab ini membongkar ketiganya secara tuntas.</p>

            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tiga dimensi keamanan file">
                <text x="360" y="24" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="13" font-weight="700">Tiga jalan sebuah file membongkarmu</text>
                <g font-family="monospace">
                  <rect x="24" y="48" width="210" height="120" rx="12" fill="#15202b" stroke="#f5b748"/>
                  <text x="129" y="76" text-anchor="middle" fill="#f5b748" font-size="11" font-weight="700">1. ISI tersembunyi</text>
                  <text x="129" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">metadata: GPS foto,</text>
                  <text x="129" y="116" text-anchor="middle" fill="#9fb4c4" font-size="9.5">nama penulis, perangkat</text>
                  <text x="129" y="140" text-anchor="middle" fill="#5fd98a" font-size="9">→ bersihkan (MAT2)</text>

                  <rect x="255" y="48" width="210" height="120" rx="12" fill="#15202b" stroke="#6ad7ff"/>
                  <text x="360" y="76" text-anchor="middle" fill="#6ad7ff" font-size="11" font-weight="700">2. SALURAN kirim</text>
                  <text x="360" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">cloud/email mencatat</text>
                  <text x="360" y="116" text-anchor="middle" fill="#9fb4c4" font-size="9.5">siapa kirim ke siapa</text>
                  <text x="360" y="140" text-anchor="middle" fill="#5fd98a" font-size="9">→ berbagi anonim (OnionShare)</text>

                  <rect x="486" y="48" width="210" height="120" rx="12" fill="#15202b" stroke="#fb7185"/>
                  <text x="591" y="76" text-anchor="middle" fill="#fb7185" font-size="11" font-weight="700">3. JEJAK tersisa</text>
                  <text x="591" y="100" text-anchor="middle" fill="#9fb4c4" font-size="9.5">"hapus" tak benar-benar</text>
                  <text x="591" y="116" text-anchor="middle" fill="#9fb4c4" font-size="9.5">menghapus dari disk</text>
                  <text x="591" y="140" text-anchor="middle" fill="#5fd98a" font-size="9">→ enkripsi + crypto-erase</text>
                </g>
                <text x="360" y="190" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Jaga ketiganya — satu celah saja cukup untuk membongkar.</text>
              </svg>
              <figcaption>Isi tersembunyi (metadata), saluran pengiriman, dan jejak penghapusan — tiga front yang harus dijaga bersamaan.</figcaption>
            </figure>

            <ul>
              <li><strong>Isi tersembunyi (metadata).</strong> File menyimpan data tentang dirinya: foto bisa memuat koordinat GPS &amp; model kamera; dokumen bisa memuat nama penulis, organisasi, dan riwayat revisi. Kamu mengirim "foto biasa", tapi diam-diam mengirim lokasi rumahmu.</li>
              <li><strong>Saluran pengiriman.</strong> Cara kamu mengirim file bisa mencatat siapa-ke-siapa. Cloud dan email arus utama menyimpan log; itu metadata yang menautkanmu.</li>
              <li><strong>Jejak yang tersisa.</strong> Menekan "Delete" tidak benar-benar menghapus data dari disk — ia hanya menandai ruangnya "boleh ditimpa". Sampai tertimpa, data masih bisa dipulihkan secara forensik.</li>
            </ul>

            <div class="box tip">
              <div class="bx-title">◇ Peta bab ini</div>
              <p>Kita akan menutup ketiganya berurutan: membersihkan metadata (MAT2), berbagi anonim (OnionShare), lalu penghapusan &amp; enkripsi storage yang benar (termasuk kenapa "shred" gagal di SSD). Di TAILS, banyak dari ini sudah tersedia.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Infografis "tiga dimensi keamanan file" (metadata, saluran, penghapusan) sebagai ringkasan visual.</p>
              <p><span class="ir-key">Cari: "file metadata privacy infographic", "secure file handling diagram"</span></p>
            </div>
          `,
          takeaways:[
            "File bisa membongkarmu lewat tiga jalan: metadata tersembunyi, saluran pengiriman, dan jejak penghapusan.",
            "Metadata (GPS foto, penulis dokumen) sering terkirim tanpa kamu sadari.",
            "'Delete' biasa hanya menandai ruang boleh ditimpa — data masih bisa dipulihkan.",
            "Pertahanan: bersihkan metadata, berbagi anonim, dan hapus/enkripsi storage dengan benar."
          ]
        },
        {
          id:"files-metadata",
          title:"Membersihkan Metadata dengan MAT2",
          dur:"praktik · ± 7 menit",
          body:`
            <p class="lead">Metadata adalah "data tentang data" — informasi yang menempel di file tanpa terlihat saat dibuka biasa. Membersihkannya sebelum berbagi adalah kebiasaan wajib, dan di TAILS sudah ada alatnya: <strong>MAT2</strong>.</p>

            <h4>Apa yang bersembunyi di filemu</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metadata tersembunyi dalam file foto">
                <rect x="40" y="44" width="180" height="110" rx="10" fill="#15202b" stroke="#34475a"/>
                <text x="130" y="74" text-anchor="middle" fill="#e9f1f7" font-family="monospace" font-size="11" font-weight="700">foto.jpg</text>
                <text x="130" y="100" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">"cuma gambar biasa"</text>
                <text x="130" y="120" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="20">🖼</text>
                <text x="300" y="58" fill="#fb7185" font-family="monospace" font-size="10" font-weight="700">...tapi di dalamnya:</text>
                <g font-family="monospace" font-size="9.5" fill="#9fb4c4">
                  <text x="300" y="80">• Koordinat GPS (lokasi pengambilan)</text>
                  <text x="300" y="98">• Merk &amp; model kamera/HP</text>
                  <text x="300" y="116">• Tanggal &amp; jam persis</text>
                  <text x="300" y="134">• Kadang nama akun/perangkat</text>
                </g>
                <text x="360" y="170" text-anchor="middle" fill="#f5b748" font-family="monospace" font-size="10">Membuka foto tak menampilkan ini — tapi siapa pun bisa mengekstraknya.</text>
              </svg>
              <figcaption>Contoh EXIF pada foto: lokasi, perangkat, dan waktu menempel diam-diam.</figcaption>
            </figure>
            <ul>
              <li><strong>Foto (EXIF):</strong> koordinat GPS, model kamera/HP, tanggal-jam, kadang pengaturan &amp; identitas perangkat.</li>
              <li><strong>Dokumen (Word/PDF):</strong> nama penulis, organisasi, software pembuat, riwayat revisi, komentar tersembunyi.</li>
              <li><strong>Audio/video:</strong> perangkat perekam, lokasi, timestamp.</li>
            </ul>

            <h4>Membersihkan dengan MAT2 (di TAILS)</h4>
            <ol class="steps">
              <li>Salin file yang ingin dibersihkan ke folder kerja (idealnya di TAILS).</li>
              <li>Buka peramban berkas <strong>Files</strong>, klik kanan file → <strong>"Remove metadata"</strong> (TAILS mengintegrasikan MAT2 di menu klik-kanan). Atau jalankan MAT2 dari terminal.</li>
              <li>MAT2 menghasilkan salinan "bersih" (mis. <code>foto.cleaned.jpg</code>). Gunakan salinan ini untuk berbagi, bukan yang asli.</li>
              <li>Periksa hasilnya: MAT2 bisa menampilkan metadata yang tersisa. Idealnya tinggal yang tak bisa/tak perlu dihapus.</li>
            </ol>

            <div class="box warn">
              <div class="bx-title">▲ Batas MAT2 & kebiasaan aman</div>
              <p>MAT2 tidak bisa membersihkan <em>segala</em> format secara sempurna (sebagian format kompleks tetap menyisakan jejak). Karena itu: kurangi mengirim file berisiko tinggi (mis. foto langsung dari HP), pertimbangkan mengirim teks/PDF sederhana, dan selalu cek ulang. Untuk dokumen, sering lebih aman membuat ulang isinya di file baru daripada "membersihkan" yang lama.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Menu klik-kanan <strong>"Remove metadata"</strong> di TAILS Files, dan contoh output MAT2 sebelum/sesudah.</p>
              <p><span class="ir-key">Cari: "tails mat2 remove metadata", "exif metadata viewer before after"</span></p>
            </div>
          `,
          practice:`<p>Ambil sebuah foto dari HP, pindahkan ke TAILS, dan periksa metadatanya (MAT2 bisa menampilkannya). Catat apa saja yang terlihat — kemungkinan ada GPS &amp; model perangkat. Lalu bersihkan dengan MAT2 dan periksa lagi salinan bersihnya. Melihat sendiri "lokasi rumahku tadi ada di foto, sekarang hilang" jauh lebih membekas daripada teori.</p>`,
          takeaways:[
            "Metadata = data tersembunyi dalam file: GPS & kamera pada foto, penulis/revisi pada dokumen.",
            "Di TAILS, bersihkan via klik-kanan 'Remove metadata' (MAT2) atau terminal; pakai salinan .cleaned untuk berbagi.",
            "MAT2 tak sempurna untuk semua format — kurangi file berisiko, cek ulang, dan untuk dokumen pertimbangkan membuat ulang.",
            "Bersihkan metadata SEBELUM berbagi, selalu."
          ]
        },
        {
          id:"files-share",
          title:"Berbagi File Privat & Anonim",
          dur:"praktik · ± 6 menit",
          body:`
            <p class="lead">Setelah metadata bersih, dimensi kedua: <strong>cara mengirim</strong>. Tujuannya agar tak ada perantara yang mencatat "siapa mengirim apa ke siapa". Alat utamanya kamu sudah kenal — OnionShare — kini dengan disiplin penuh.</p>

            <h4>Kenapa bukan cloud/email biasa</h4>
            <p>Layanan cloud dan email arus utama menyimpan file di server mereka dan mencatat metadata pengiriman: akun pengirim, penerima, waktu, IP. Itu jejak yang menautkanmu. Untuk berbagi anonim, kamu ingin koneksi langsung lewat TOR tanpa perantara yang menyimpan log.</p>

            <h4>Alur berbagi aman (gabungan keterampilan)</h4>
            <ol class="steps">
              <li><strong>Bersihkan metadata</strong> file dengan MAT2 (materi sebelumnya). Ini langkah pertama yang tak boleh dilewati.</li>
              <li><strong>Pertimbangkan enkripsi isi</strong> dengan PGP bila file sangat sensitif — sehingga hanya penerima berkunci yang bisa membukanya, terlepas dari salurannya.</li>
              <li><strong>Kirim lewat OnionShare</strong> (mode Share). Bagikan alamat <code>.onion</code> + kunci akses ke penerima lewat saluran tepercaya.</li>
              <li><strong>Hentikan sesi</strong> setelah selesai; alamatnya mati dan tak ada jejak tersimpan di internet.</li>
            </ol>

            <h4>Menerima file dengan aman</h4>
            <p>Gunakan OnionShare mode <strong>Receive</strong> untuk membuka "kotak masuk" anonim. Tapi ingat: file yang kamu <em>terima</em> dari orang lain berpotensi berbahaya (malware, atau dokumen yang memuat sumber luar). Bersihkan metadatanya, jangan buka dokumen saat online sembarangan, dan untuk file mencurigakan pertimbangkan isolasi (Qubes — bab terakhir).</p>

            <div class="box tip">
              <div class="bx-title">◇ Saluran untuk membagikan alamat</div>
              <p>Alamat OnionShare sendiri perlu dikirim ke penerima. Pakai saluran yang sudah aman: XMPP+OTR terverifikasi (Bab 6) atau pesan ber-PGP. Jangan menyebar alamat lewat jalur yang tidak tepercaya.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Alur visual: file → bersihkan metadata → (PGP) → OnionShare → penerima; dan jendela OnionShare Receive.</p>
              <p><span class="ir-key">Cari: "onionshare share receive", "secure file sharing workflow"</span></p>
            </div>
          `,
          takeaways:[
            "Cloud/email biasa mencatat siapa-kirim-apa-ke-siapa; berbagi anonim butuh koneksi langsung lewat TOR.",
            "Alur aman: bersihkan metadata → (opsional PGP untuk isi) → OnionShare → hentikan sesi.",
            "File yang DITERIMA bisa berbahaya: bersihkan metadata, hati-hati membukanya, isolasi bila mencurigakan.",
            "Bagikan alamat OnionShare lewat saluran tepercaya (XMPP+OTR terverifikasi atau PGP)."
          ]
        },
        {
          id:"files-remove",
          title:"Menghapus File dengan Aman (& Kenapa shred Gagal di SSD)",
          dur:"konsep · praktik · ± 8 menit",
          body:`
            <p class="lead">Dimensi ketiga, dan paling sering disalahpahami: menghapus. "Delete" lalu "Empty Recycle Bin" <strong>tidak</strong> menghapus datamu. Dan trik klasik "timpa berkali-kali" (shred) yang ampuh di hard disk lama, justru <strong>gagal</strong> di SSD modern. Mari kita luruskan.</p>

            <h4>Kenapa "Delete" tidak menghapus</h4>
            <p>Saat kamu menghapus file, sistem hanya menghapus <em>penunjuk</em>-nya dan menandai ruang disk itu "boleh ditimpa". Isinya masih utuh di sana sampai kebetulan tertimpa data lain. Software pemulihan (recovery) bisa mengembalikannya dengan mudah. Inilah kenapa file "terhapus" sering bisa diselamatkan.</p>

            <h4>HDD vs SSD — kenapa shred tidak universal</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Perbedaan penghapusan pada HDD dan SSD">
                <rect x="30" y="44" width="310" height="130" rx="11" fill="#15202b" stroke="#4fe0d0"/>
                <text x="185" y="68" text-anchor="middle" fill="#4fe0d0" font-family="monospace" font-size="12" font-weight="700">HDD (cakram magnetik)</text>
                <text x="185" y="94" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">menimpa = menulis ke lokasi fisik sama</text>
                <text x="185" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">"shred" (timpa berulang) → EFEKTIF</text>
                <text x="185" y="138" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="9.5">data lama benar-benar tertimpa</text>

                <rect x="380" y="44" width="310" height="130" rx="11" fill="#15202b" stroke="#fb7185"/>
                <text x="535" y="68" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="12" font-weight="700">SSD (flash + wear leveling)</text>
                <text x="535" y="94" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">controller menyebar tulisan ke sel lain</text>
                <text x="535" y="114" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9.5">"shred" → TAK ANDAL</text>
                <text x="535" y="138" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="9.5">salinan lama bisa tertinggal di sel cadangan</text>
              </svg>
              <figcaption>Di HDD shred menimpa lokasi yang sama; di SSD, wear leveling menyebar tulisan sehingga salinan lama bisa lolos.</figcaption>
            </figure>
            <ul>
              <li><strong>HDD (hard disk magnetik):</strong> saat kamu menimpa, data ditulis ke lokasi fisik yang sama. Alat seperti <code>shred</code> yang menimpa berulang kali memang efektif menghapus.</li>
              <li><strong>SSD (flash modern):</strong> punya <em>wear leveling</em> — controller menyebar penulisan ke sel-sel berbeda agar awet. Akibatnya, saat kamu "menimpa", data lama bisa tetap tersimpan di sel cadangan yang tak bisa kamu sentuh langsung. <code>shred</code> jadi tidak andal. Fitur TRIM membantu, tapi tidak bisa kamu jadikan jaminan penghapusan.</li>
            </ul>

            <h4>Pendekatan yang benar di era SSD</h4>
            <p>Karena menimpa tak bisa diandalkan di SSD, strategi modern berbalik: <strong>enkripsi dulu, hapus kuncinya kemudian</strong> (crypto-erase). Bila seluruh disk/volume terenkripsi sejak awal, menghancurkan kunci membuat <em>semua</em> data jadi keacakan tak terbaca seketika — tak peduli di sel mana ia tersebar. Inilah jembatan ke materi terakhir.</p>

            <div class="box tip">
              <div class="bx-title">◇ Untuk file di TAILS</div>
              <p>Di TAILS, peramban berkas menyediakan opsi "Wipe" untuk menimpa file (berguna pada media magnetik/USB tertentu). Tapi untuk jaminan sejati di SSD, andalkan <strong>enkripsi penuh + crypto-erase</strong>, bukan sekadar menimpa.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Diagram <strong>wear leveling</strong> SSD dan perbandingan "overwrite di HDD vs SSD".</p>
              <p><span class="ir-key">Cari: "ssd wear leveling secure erase", "why shred fails on ssd"</span></p>
            </div>
          `,
          takeaways:[
            "'Delete' + kosongkan Recycle Bin hanya menandai ruang boleh ditimpa; data masih bisa dipulihkan.",
            "shred (timpa berulang) efektif di HDD karena menulis ke lokasi fisik sama.",
            "Di SSD, wear leveling menyebar tulisan → shred TIDAK andal; salinan lama bisa tertinggal.",
            "Solusi era SSD: enkripsi penuh sejak awal lalu hancurkan kuncinya (crypto-erase)."
          ]
        },
        {
          id:"files-wipe",
          title:"Menghapus & Mengenkripsi Storage dengan Aman",
          dur:"praktik · ± 8 menit",
          body:`
            <p class="lead">Solusi sejati untuk "data tak bisa dipulihkan" bukan menimpa, melainkan <strong>enkripsi penuh + crypto-erase</strong>. Bila disk terenkripsi sejak awal, menghapus kunci = menghapus semuanya, seketika dan menyeluruh.</p>

            <h4>Konsep crypto-erase</h4>
            <figure class="fig">
              <svg viewBox="0 0 720 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crypto-erase: hancurkan kunci, data jadi acak">
                <defs><marker id="arf" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#fb7185"/></marker></defs>
                <rect x="40" y="56" width="180" height="60" rx="10" fill="#15202b" stroke="#5fd98a"/>
                <text x="130" y="82" text-anchor="middle" fill="#5fd98a" font-family="monospace" font-size="11" font-weight="700">Disk terenkripsi</text>
                <text x="130" y="100" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">data + kunci kecil</text>
                <rect x="300" y="56" width="160" height="60" rx="10" fill="#15202b" stroke="#fb7185"/>
                <text x="380" y="82" text-anchor="middle" fill="#fb7185" font-family="monospace" font-size="11" font-weight="700">Hancurkan KUNCI</text>
                <text x="380" y="100" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">(crypto-erase)</text>
                <rect x="540" y="56" width="150" height="60" rx="10" fill="#15202b" stroke="#34475a"/>
                <text x="615" y="82" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="11" font-weight="700">Data = acak</text>
                <text x="615" y="100" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="9">tak terbaca selamanya</text>
                <g stroke="#fb7185" stroke-width="2" marker-end="url(#arf)"><line x1="220" y1="86" x2="296" y2="86"/><line x1="460" y1="86" x2="536" y2="86"/></g>
                <text x="360" y="150" text-anchor="middle" fill="#9fb4c4" font-family="monospace" font-size="10">Tak perlu menimpa gigabyte data — cukup hancurkan kunci kecilnya.</text>
              </svg>
              <figcaption>Kunci jauh lebih kecil dari data. Hancurkan kunci, dan seluruh disk seketika jadi keacakan.</figcaption>
            </figure>

            <h4>Alat enkripsi penuh</h4>
            <ul>
              <li><strong>LUKS</strong> — standar enkripsi disk di Linux, dipakai TAILS untuk Persistent Storage. Kuat dan terintegrasi.</li>
              <li><strong>VeraCrypt</strong> — lintas platform (termasuk <strong>Windows</strong>), gratis &amp; open-source. Bisa membuat "container" terenkripsi (file yang berfungsi seperti drive) atau mengenkripsi seluruh partisi/USB.</li>
              <li><strong>BitLocker</strong> (Windows) — enkripsi bawaan; berguna untuk enkripsi disk umum, meski komunitas privasi lebih memilih solusi open-source untuk kasus sensitif.</li>
            </ul>

            <h4>Latihan: container VeraCrypt di Windows</h4>
            <ol class="steps">
              <li>Unduh <strong>VeraCrypt</strong> dari situs resminya (verifikasi tanda tangannya seperti kebiasaan Bab 1).</li>
              <li>Buat <strong>volume baru</strong> → "Create an encrypted file container".</li>
              <li>Pilih lokasi &amp; ukuran, algoritma default sudah kuat, lalu tetapkan <strong>passphrase yang kuat</strong>.</li>
              <li>Gerakkan mouse secara acak saat diminta (mengumpulkan keacakan), lalu format. Container siap.</li>
              <li>"Mount" container memakai passphrase → muncul sebagai drive baru. Taruh file sensitif di sana; "Dismount" untuk menguncinya kembali.</li>
            </ol>

            <div class="box danger">
              <div class="bx-title">⚠ Passphrase & enkripsi sejak awal</div>
              <p>Crypto-erase hanya bekerja bila data <strong>sudah terenkripsi sejak awal</strong>. Mengenkripsi setelah data terlanjur ditulis polos tidak menghapus jejak lama. Jadi: enkripsi dulu, isi kemudian. Dan ingat — passphrase kuat tanpa pintu belakang berarti lupa = data hilang permanen.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Menggabungkan semuanya</div>
              <p>Praktik terbaik: simpan data sensitif hanya di volume terenkripsi (LUKS/VeraCrypt atau Persistent TAILS), bersihkan metadata sebelum berbagi, kirim via OnionShare, dan saat ingin "menghapus selamanya", andalkan crypto-erase. Tiga dimensi keamanan file tertutup sekaligus.</p>
            </div>

            <div class="imgrec">
              <div class="ir-title">📷 Rekomendasi gambar</div>
              <p>Wizard <strong>VeraCrypt "Create Volume"</strong> dan volume yang ter-mount sebagai drive di Windows.</p>
              <p><span class="ir-key">Cari: "veracrypt create encrypted container", "veracrypt mounted volume windows"</span></p>
            </div>
          `,
          practice:`<p>Di Windows, buat satu container VeraCrypt kecil (mis. 100 MB) dengan passphrase kuat, mount, simpan file uji di dalamnya, lalu dismount. Buka kembali untuk memastikan kamu paham siklus mount/dismount. Renungkan: bila kamu menghancurkan passphrase/kunci ini, isinya jadi keacakan permanen — itulah crypto-erase dalam praktik.</p>`,
          takeaways:[
            "Penghapusan sejati di era SSD = enkripsi penuh sejak awal + crypto-erase (hancurkan kunci).",
            "Kunci jauh lebih kecil dari data; menghancurkannya membuat seluruh disk jadi acak seketika.",
            "Alat: LUKS (Linux/TAILS), VeraCrypt (lintas platform termasuk Windows), BitLocker (bawaan Windows).",
            "Enkripsi HARUS sejak awal; passphrase kuat tanpa pintu belakang — lupa = data hilang permanen."
          ],
          quiz:{
            title:"Kuis Bab 7 — Manajemen & Berbagi File",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Apa tiga dimensi keamanan file yang dibahas?",
               options:["Ukuran, format, nama","Metadata tersembunyi, saluran pengiriman, jejak penghapusan","Warna, resolusi, kompresi","Cloud, lokal, USB"],
               answer:1,
               explain:"File bisa membongkarmu lewat metadata, cara pengiriman, dan jejak yang tersisa saat 'dihapus' — ketiganya harus dijaga."},
              {q:"Contoh metadata berbahaya pada sebuah foto adalah…",
               options:["Ukuran file","Koordinat GPS lokasi pengambilan & model perangkat","Nama file","Format JPG"],
               answer:1,
               explain:"EXIF foto sering memuat GPS, model kamera/HP, dan timestamp — terkirim diam-diam meski foto tampak biasa."},
              {q:"Alat di TAILS untuk membersihkan metadata adalah…",
               options:["MAT2","BitLocker","Pidgin","balenaEtcher"],
               answer:0,
               explain:"MAT2 (Metadata Anonymisation Toolkit) terintegrasi di TAILS, mis. lewat klik-kanan 'Remove metadata'."},
              {q:"Kenapa menekan 'Delete' tidak benar-benar menghapus data?",
               options:["File pindah ke cloud","Sistem hanya menandai ruang 'boleh ditimpa'; data masih ada sampai tertimpa","Data dienkripsi otomatis","File jadi tersembunyi"],
               answer:1,
               explain:"Delete menghapus penunjuk dan menandai ruang bebas; isinya utuh sampai kebetulan ditimpa, sehingga bisa dipulihkan."},
              {q:"Kenapa 'shred' (timpa berulang) TIDAK andal di SSD?",
               options:["SSD terlalu cepat","Wear leveling menyebar tulisan ke sel lain, sehingga salinan lama bisa tertinggal","SSD tidak bisa ditulis","shred hanya untuk gambar"],
               answer:1,
               explain:"Controller SSD menyebar penulisan demi keawetan; data lama bisa tetap di sel cadangan yang tak bisa kamu timpa langsung."},
              {q:"Pendekatan penghapusan yang andal di era SSD adalah…",
               options:["Menimpa 35 kali","Enkripsi penuh sejak awal lalu hancurkan kuncinya (crypto-erase)","Format cepat","Pindahkan ke Recycle Bin"],
               answer:1,
               explain:"Bila disk terenkripsi sejak awal, menghancurkan kunci membuat seluruh data jadi keacakan tak terbaca — tak peduli di sel mana tersebar."}
            ]
          }
        }
      ]
};
