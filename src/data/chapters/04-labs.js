/* Bab 4 — id: "labs"
   Data satu bab. Diimpor & digabung di ../courseData.js.
   'body'/'practice' tetap string HTML (dirender via dangerouslySetInnerHTML). */

export const chapter = {
      id:"labs",
      title:"Praktik Lanjutan — Hands-On Labs",
      lectures:[
        {
          id:"lab-intro",
          title:"Cara Kerja Lab & Aturan Main",
          dur:"baca dulu",
          body:`
            <p class="lead">Bab ini bukan teori lagi — ini <strong>lab</strong>. Tiap lab punya tujuan, alat, langkah, dan cara memverifikasi bahwa kamu berhasil. Targetnya membangun keterampilan teknis nyata, bukan menghafal.</p>

            <h4>Lingkungan yang disarankan</h4>
            <p>Sebagian besar lab paling aman dikerjakan di dalam <strong>TAILS</strong> (dari Bab 2) atau, untuk lab non-anonim seperti menjalankan onion service uji, di mesin Linux/VM yang kamu kendalikan. Jangan campur lingkungan eksperimen dengan identitas/akun pribadimu.</p>

            <h4>Format tiap lab</h4>
            <ul>
              <li><strong>🎯 Tujuan</strong> — apa yang akan kamu kuasai.</li>
              <li><strong>🧰 Alat</strong> — yang perlu disiapkan.</li>
              <li><strong>▸ Langkah</strong> — instruksi praktik.</li>
              <li><strong>✅ Verifikasi</strong> — cara tahu kamu berhasil.</li>
              <li><strong>🧠 Debrief</strong> — kenapa ini penting.</li>
            </ul>

            <div class="box danger">
              <div class="bx-title">⚠ Aturan main (wajib)</div>
              <p>Semua lab di sini bersifat <strong>defensif &amp; legal</strong>: mengeraskan sistemmu sendiri, mengunjungi layanan yang sah, mengenkripsi komunikasimu sendiri, dan menjalankan layanan uji milikmu sendiri. Jangan memakai keterampilan ini untuk mengakses pasar/konten ilegal, membobol sistem orang lain, atau menipu. Patuhi UU yang berlaku — kamu sudah menyatakan komitmen ini, dan lab ini dirancang agar tetap di jalur itu.</p>
            </div>

            <div class="box tip">
              <div class="bx-title">◇ Mindset</div>
              <p>Aturan emas seluruh bab: <strong>uji di lingkungan terisolasi, verifikasi setiap asumsi, jangan pernah mencampur identitas.</strong> Profesional keamanan dibedakan dari amatir bukan oleh alat, tapi oleh disiplin ini.</p>
            </div>
          `,
          takeaways:[
            "Lab dikerjakan di lingkungan terisolasi (TAILS / VM), terpisah dari identitas pribadi.",
            "Tiap lab: Tujuan → Alat → Langkah → Verifikasi → Debrief.",
            "Semua lab defensif & legal: harden, verifikasi, enkripsi, dan layanan uji milik sendiri."
          ]
        },
        {
          id:"lab-tails-build",
          title:"Lab 01 — Membangun & Memverifikasi USB TAILS",
          dur:"lab · 45–60 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> punya USB TAILS yang terverifikasi asli, bisa boot, dan benar-benar amnesik — fondasi semua lab berikutnya.</p>

            <h4>🧰 Alat</h4>
            <ul>
              <li>USB flash drive kosong ≥ 8 GB (isinya akan terhapus).</li>
              <li>Komputer + internet untuk mengunduh image (± 1.2 GB).</li>
              <li>GnuPG (untuk verifikasi) — sudah ada di Linux/macOS; di Windows pakai Gpg4win.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Unduh USB image TAILS dari <code>tails.net</code> (bukan sumber lain).</li>
              <li><strong>Verifikasi keaslian</strong> — pakai verifikasi otomatis di browser yang disediakan tails.net, ATAU verifikasi manual: impor kunci penandatangan Tails, unduh file signature, lalu jalankan <code>gpg --verify tails-*.img.sig tails-*.img</code>. Cari hasil <em>“Good signature”</em>.</li>
              <li><strong>Tulis ke USB</strong> dengan balenaEtcher (lintas-OS) atau <code>dd</code> di Linux (hati-hati pilih device yang benar).</li>
              <li><strong>Boot</strong> dari USB lewat boot menu / BIOS-UEFI (lihat Bab 2).</li>
              <li>Dari Welcome Screen, sambungkan ke TOR (Tor Connection).</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Verifikasi GPG menghasilkan <em>“Good signature”</em> dari kunci Tails resmi.</li>
              <li>Komputer berhasil boot ke desktop TAILS dari USB.</li>
              <li>Tor Connection berhasil tersambung.</li>
              <li><strong>Uji amnesia</strong>: buat file di Desktop, reboot tanpa persistence — file harus hilang. Ini bukti sifat amnesik bekerja.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Langkah verifikasi GPG adalah yang paling sering dilewati orang — padahal di sinilah serangan rantai pasok (image palsu) terjadi. Dengan menyelesaikan lab ini, kamu sudah mempraktikkan kontrol keamanan yang bahkan banyak pengguna “mahir” abaikan.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Pastikan kamu memilih device USB yang benar saat menulis image. Salah pilih bisa menimpa drive lain. Cabut drive eksternal lain yang tidak perlu selama proses ini.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> dokumentasikan fingerprint kunci penandatangan Tails yang kamu pakai untuk verifikasi, dan cocokkan dengan yang dipublikasikan di tails.net. Menuliskannya melatih kebiasaan memverifikasi <em>kunci</em>, bukan hanya menjalankan perintah.</p>`,
          takeaways:[
            "Verifikasi GPG image ('Good signature') sebelum menulis ke USB.",
            "Tulis dengan balenaEtcher/dd, pilih device dengan hati-hati.",
            "Uji amnesia: buat file → reboot → harus hilang."
          ]
        },
        {
          id:"lab-harden",
          title:"Lab 02 — Hardening & Uji Kebocoran (Leak Testing)",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> membuktikan secara empiris bahwa lingkunganmu tidak membocorkan identitas — bukan sekadar berasumsi “TOR pasti aman”.</p>

            <h4>🧰 Alat</h4>
            <ul>
              <li>TAILS yang sudah jalan (Lab 01), atau TOR Browser di OS biasamu untuk sebagian tes.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li><strong>Konfirmasi semua trafik lewat TOR.</strong> Di TAILS ini dipaksa secara desain; verifikasi dengan membuka <code>check.torproject.org</code> — harus muncul konfirmasi bahwa kamu memakai TOR.</li>
              <li><strong>Uji fingerprint browser.</strong> Buka <code>coveryourtracks.eff.org</code> (EFF). Bandingkan keunikan TOR Browser vs browser biasamu. Catat metrik “bits of identifying information”.</li>
              <li><strong>Uji konsistensi waktu/zona.</strong> Pastikan zona waktu &amp; locale browser tidak membocorkan lokasi aslimu (TOR Browser menyeragamkan ini — verifikasi tidak ada yang aneh).</li>
              <li><strong>Cek MAC spoofing (TAILS).</strong> Di terminal, bandingkan MAC yang dilaporkan dengan MAC fisik perangkat — TAILS mengacaknya secara default.</li>
              <li><strong>Disiplin perilaku.</strong> Konfirmasi ukuran jendela default (tidak di-maximize), tidak ada add-on tambahan, JavaScript sesuai Security Level yang kamu pilih.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li><code>check.torproject.org</code> mengonfirmasi koneksi TOR.</li>
              <li>Skor fingerprint TOR Browser jauh lebih generik daripada browser biasamu.</li>
              <li>MAC address (di TAILS) berbeda dari MAC fisik.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Anonimitas yang “dirasakan” sering berbeda dari yang “terbukti”. Lab ini mengubah keyakinan jadi pengukuran. Browser fingerprinting adalah ancaman nyata yang tak bergantung pada IP — dan satu-satunya cara melawannya adalah tampil identik dengan jutaan pengguna lain (ingat teori informasi di Bab 1).</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Jadikan uji fingerprint kebiasaan rutin setelah update besar — perubahan kecil bisa diam-diam menambah keunikanmu.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> jalankan tes fingerprint pada (a) browser harianmu, (b) TOR Browser Standard, (c) TOR Browser Safest. Buat tabel perbandingan “bits of identifying info”. Datamu sendiri jadi bukti paling meyakinkan tentang trade-off keamanan vs kenyamanan.</p>`,
          takeaways:[
            "Verifikasi koneksi TOR via check.torproject.org, bukan berasumsi.",
            "Ukur fingerprint dengan EFF Cover Your Tracks; TOR Browser harus generik.",
            "Konfirmasi MAC spoofing di TAILS; jaga disiplin perilaku."
          ]
        },
        {
          id:"lab-legit-onion",
          title:"Lab 03 — Mengunjungi Onion Service Sah dengan Aman",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> berlatih “turun langsung” ke onion service — tapi ke tujuan yang <strong>sah, aman, dan terverifikasi</strong> — sambil melatih keterampilan paling penting: verifikasi alamat.</p>

            <h4>🧰 Alat</h4>
            <ul><li>TOR Browser (di TAILS atau desktop).</li></ul>

            <h4>▸ Langkah — metode verifikasi yang benar</h4>
            <ol>
              <li><strong>Mulai dari clear web resmi.</strong> Buka situs resmi layanan di clear web, lalu temukan alamat <code>.onion</code> yang <em>mereka publikasikan sendiri</em>. Inilah sumber kebenaran — bukan direktori acak.</li>
              <li><strong>Salin alamat dari sumber resmi</strong> dan buka di TOR Browser.</li>
              <li><strong>Perhatikan Onion-Location.</strong> Banyak situs sah otomatis menawarkan beralih ke versi .onion saat dibuka di TOR — ini sinyal keaslian yang kuat.</li>
              <li><strong>Inspeksi sirkuit.</strong> Klik ikon gembok untuk melihat sirkuit TOR; untuk .onion, perhatikan tidak ada exit node (koneksi tetap di dalam jaringan TOR).</li>
            </ol>

            <h4>Target latihan yang sah (ambil alamatnya dari situs resmi mereka)</h4>
            <ul>
              <li><strong>Tor Project</strong> — proyek di balik TOR itu sendiri.</li>
              <li><strong>DuckDuckGo</strong> — mesin pencari dengan onion resmi.</li>
              <li><strong>SecureDrop milik media tepercaya</strong> (mis. ProPublica, The Guardian) — sistem komunikasi sumber.</li>
              <li><strong>Mirror berita</strong> (mis. BBC) yang menembus sensor.</li>
              <li><strong>Facebook</strong> &amp; beberapa layanan email terenkripsi yang menyediakan onion resmi.</li>
            </ul>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu membuka minimal satu onion service yang alamatnya kamu verifikasi dari sumber resmi clear web.</li>
              <li>Kamu bisa menjelaskan kenapa kamu yakin alamat itu asli (dipublikasikan resmi + Onion-Location).</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Inilah inti “masuk dark web” yang sehat: bukan mengklik tautan acak, melainkan menjangkau layanan yang kamu <em>verifikasi</em>. Begitu kamu kuasai alur verifikasi ini, kamu kebal terhadap mayoritas penipuan kloning — karena kamu tak pernah mempercayai alamat yang tak bisa kamu telusuri ke sumber resmi.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Jangan</div>
              <p>Jangan menyalin alamat .onion dari catatan/teman/forum tanpa memverifikasi ke sumber resmi. Alamat onion acak panjang dirancang sulit dibedakan — satu karakter beda bisa jadi situs kloning.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan verifikasi-silang:</strong> pilih satu layanan, lalu temukan alamat .onion-nya dari DUA sumber resmi berbeda (mis. situs utama + akun/repo resmi). Pastikan keduanya cocok persis. Bila berbeda, jangan dipercaya. Ini drill anti-phishing paling ampuh.</p>`,
          takeaways:[
            "Selalu ambil alamat .onion dari sumber resmi clear web, bukan direktori acak.",
            "Onion-Location & sirkuit tanpa exit node = sinyal keaslian.",
            "Verifikasi-silang dari dua sumber resmi mengalahkan mayoritas penipuan kloning."
          ]
        },
        {
          id:"lab-pgp",
          title:"Lab 04 — Komunikasi Terenkripsi dengan PGP/GnuPG",
          dur:"lab · 45 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> menguasai enkripsi end-to-end dengan PGP — keterampilan inti untuk komunikasi sensitif yang isinya hanya bisa dibaca penerima yang dituju.</p>

            <h4>🧰 Alat</h4>
            <ul><li>GnuPG (bawaan TAILS/Linux/macOS; Gpg4win di Windows). Opsional: KeePassXC untuk menyimpan kunci/passphrase.</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li><strong>Buat keypair:</strong> <code>gpg --full-generate-key</code> (pilih kunci modern, beri masa berlaku, dan passphrase kuat).</li>
              <li><strong>Ekspor kunci publikmu:</strong> <code>gpg --armor --export NAMA &gt; publik.asc</code> — ini yang kamu bagikan ke orang lain.</li>
              <li><strong>Impor kunci publik lawan bicara:</strong> <code>gpg --import kunci_mereka.asc</code>.</li>
              <li><strong>Verifikasi fingerprint secara out-of-band</strong> — bandingkan fingerprint lewat saluran berbeda (telepon/tatap muka) untuk memastikan kunci benar-benar milik orang itu, bukan penyusup.</li>
              <li><strong>Enkripsi + tanda tangani pesan:</strong> <code>gpg --encrypt --sign --armor -r PENERIMA pesan.txt</code>.</li>
              <li><strong>Dekripsi &amp; verifikasi:</strong> <code>gpg --decrypt pesan.asc</code> — perhatikan konfirmasi “Good signature”.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu bisa mengenkripsi pesan ke kunci publikmu sendiri lalu mendekripsinya kembali (latihan solo).</li>
              <li>Saat mendekripsi pesan bertanda tangan, GnuPG melaporkan tanda tangan valid.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Kunci publik untuk mengenkripsi, kunci privat untuk mendekripsi; tanda tangan membuktikan asal &amp; keaslian. Bagian tersulit bukan perintahnya, melainkan <strong>memverifikasi fingerprint</strong> — tanpa itu, kamu bisa mengenkripsi ke penyusup yang menyamar. Inilah “web of trust”.</p>

            <div class="box warn">
              <div class="bx-title">▲ Perhatian</div>
              <p>Kunci privat + passphrase adalah identitasmu. Simpan kunci privat hanya di lingkungan tepercaya (mis. Persistent Storage TAILS terenkripsi), dan jangan pernah membagikannya. Yang dibagikan hanya kunci <em>publik</em>.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> buat dua keypair (mewakili dua orang) di lingkungan uji, lalu kirim pesan terenkripsi bolak-balik di antara keduanya, lengkap dengan verifikasi tanda tangan. Mensimulasikan kedua sisi membuatmu paham alur penuh enkripsi & otentikasi.</p>`,
          takeaways:[
            "Publik untuk enkripsi, privat untuk dekripsi; tanda tangan membuktikan keaslian.",
            "Verifikasi fingerprint out-of-band — langkah krusial yang sering dilupakan.",
            "Lindungi kunci privat; bagikan hanya kunci publik."
          ]
        },
        {
          id:"lab-onionshare",
          title:"Lab 05 — Berbagi File Anonim dengan OnionShare",
          dur:"lab · 25 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> berbagi file langsung ke orang lain lewat onion service sementara — tanpa server pihak ketiga, tanpa meninggalkan jejak akun.</p>

            <h4>🧰 Alat</h4>
            <ul><li>OnionShare (bawaan TAILS; tersedia juga lintas-OS). Idealnya dua perangkat milikmu untuk uji coba.</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Buka OnionShare, mode <strong>Share Files</strong>, tambahkan file uji.</li>
              <li>OnionShare membuat <strong>onion service sementara</strong> dan memberi alamat + kunci akses.</li>
              <li>Buka alamat itu di TOR Browser pada perangkat keduamu, unduh file.</li>
              <li>Coba mode lain: <strong>Receive</strong> (menerima file dari orang lain) dan <strong>Chat</strong> (obrolan anonim sementara).</li>
              <li>Tutup OnionShare — alamatnya langsung mati. Tidak ada yang tersisa.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>File berpindah antar perangkatmu lewat alamat .onion sementara.</li>
              <li>Setelah ditutup, alamat tidak lagi bisa diakses.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>OnionShare menunjukkan kekuatan hidden service untuk hal sah: berbagi file P2P yang aman tanpa cloud, tanpa akun, tanpa metadata terpusat. Inilah teknologi yang sama yang dipakai jurnalis &amp; sumber untuk bertukar dokumen dengan aman.</p>

            <div class="box tip">
              <div class="bx-title">◇ Tip</div>
              <p>Untuk berbagi yang lebih aman, gabungkan dengan Lab 04: enkripsi file dengan PGP dulu, baru kirim lewat OnionShare. Dua lapis: anonimitas transport + kerahasiaan isi.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> enkripsi sebuah file dengan PGP (Lab 04), kirim lewat OnionShare ke perangkat keduamu, lalu dekripsi di sana. Kamu baru saja membangun alur transfer rahasia ujung-ke-ujung dari nol.</p>`,
          takeaways:[
            "OnionShare membuat onion service sementara untuk berbagi/menerima file & chat.",
            "Tidak ada server pihak ketiga; alamat mati saat ditutup.",
            "Gabungkan dengan PGP untuk kerahasiaan isi + anonimitas transport."
          ]
        },
        {
          id:"lab-host-onion",
          title:"Lab 06 — Menjalankan Onion Service-mu Sendiri",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> memahami hidden service dari <em>dalam</em> dengan menjalankan satu milikmu sendiri — cara terbaik benar-benar mengerti cara kerja .onion.</p>

            <h4>🧰 Alat</h4>
            <ul><li>Mesin Linux/VM yang kamu kendalikan, paket <code>tor</code>, dan web server lokal sederhana (mis. <code>python3 -m http.server 8080</code>).</li></ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Jalankan web server lokal di port 8080 yang menyajikan halaman HTML sederhana buatanmu.</li>
              <li>Edit file konfigurasi Tor (<code>torrc</code>) dan tambahkan:
                <br><code>HiddenServiceDir /var/lib/tor/lab_service/</code>
                <br><code>HiddenServicePort 80 127.0.0.1:8080</code></li>
              <li>Restart Tor. Tor otomatis membuat kunci dan alamat <strong>v3 .onion</strong> di folder <code>HiddenServiceDir</code> (lihat file <code>hostname</code>).</li>
              <li>Buka alamat .onion itu di TOR Browser — kamu sedang mengunjungi situs yang kamu host sendiri lewat jaringan TOR.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>File <code>hostname</code> berisi alamat .onion-mu.</li>
              <li>Halaman buatanmu terbuka di TOR Browser lewat alamat tersebut.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Sekarang konsep abstrak jadi nyata: alamat .onion sebenarnya adalah representasi <strong>kunci publik</strong> layanan; tak ada DNS, tak ada IP yang terekspos. Memahami ini dari sisi operator membuatmu jauh lebih jago menilai layanan dari sisi pengunjung.</p>

            <div class="box danger">
              <div class="bx-title">⚠ Hanya konten yang sah</div>
              <p>Host <strong>hanya</strong> konten yang legal dan boleh kamu sebarkan (mis. halaman uji buatanmu). Menjalankan onion service untuk menyajikan konten ilegal tetap melanggar hukum. Lab ini murni untuk memahami teknologi.</p>
            </div>
          `,
          practice:`<p><strong>Tantangan:</strong> amankan layanan ujimu dengan <em>client authorization</em> (hanya klien dengan kunci yang kamu izinkan yang bisa membuka). Ini memperkenalkanmu pada onion service privat — pola yang dipakai untuk berbagi terbatas.</p>`,
          takeaways:[
            "Onion service dibuat lewat HiddenServiceDir + HiddenServicePort di torrc.",
            "Alamat v3 .onion = representasi kunci publik layanan; tanpa DNS/IP terekspos.",
            "Host hanya konten legal; lab ini untuk memahami teknologi dari sisi operator."
          ]
        },
        {
          id:"lab-scam",
          title:"Lab 07 — Mendeteksi Penipuan, Kloning & Phishing",
          dur:"lab · 30 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> melatih “otak skeptis” — kemampuan menilai keaslian &amp; risiko sebuah layanan sebelum percaya, keterampilan yang menyelamatkanmu dari mayoritas bahaya.</p>

            <h4>Red flags yang harus kamu kenali</h4>
            <ul>
              <li><strong>Alamat tak terverifikasi</strong> — tidak bisa ditelusuri ke sumber resmi clear web.</li>
              <li><strong>Tekanan &amp; urgensi</strong> — “buruan, stok terbatas”, “kirim dulu baru dapat akses”.</li>
              <li><strong>Minta data/identitas/pembayaran</strong> tanpa alasan jelas dan tanpa keaslian yang terbukti.</li>
              <li><strong>Tanpa tanda tangan/PGP</strong> — layanan serius sering menandatangani pengumuman dengan PGP yang bisa kamu verifikasi.</li>
              <li><strong>Warrant canary mati/janggal</strong> — beberapa layanan memuat pernyataan rutin (“canary”); hilangnya bisa jadi sinyal.</li>
            </ul>

            <h4>▸ Langkah (drill penilaian)</h4>
            <ol>
              <li><strong>Skenario A:</strong> kamu menerima alamat .onion sebuah “layanan email aman” dari postingan forum, tanpa tautan ke situs resmi. Apa langkahmu? (Jawab: jangan percaya; cari alamat resmi dari situs penyedia di clear web, cocokkan.)</li>
              <li><strong>Skenario B:</strong> sebuah situs mendesakmu login dengan kredensial layanan lain. Red flag apa yang menyala? (Jawab: permintaan kredensial lintas-layanan + urgensi = phishing klasik.)</li>
              <li><strong>Skenario C:</strong> dua alamat .onion “resmi” beredar untuk satu layanan, berbeda di beberapa karakter. Bagaimana memutuskan? (Jawab: hanya percaya yang dipublikasikan di kanal resmi penyedia; verifikasi tanda tangan PGP pengumuman bila ada.)</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Untuk tiap skenario, kamu bisa menyebut red flag dan langkah verifikasi yang benar.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Penipu mengandalkan rasa percaya yang tergesa. Pertahanan terbaik bukan alat, melainkan <strong>kebiasaan memverifikasi sebelum percaya</strong>. Gabungkan dengan Lab 03 (verifikasi alamat) dan Lab 04 (verifikasi tanda tangan PGP), dan kamu menutup hampir semua vektor penipuan umum.</p>
          `,
          practice:`<p><strong>Tantangan:</strong> tulis “checklist verifikasi 5 langkah” versimu sendiri yang akan kamu jalankan SEBELUM mempercayai layanan apa pun. Checklist personal yang kamu rancang sendiri jauh lebih mungkin kamu patuhi.</p>`,
          takeaways:[
            "Red flags: alamat tak terverifikasi, urgensi, permintaan data/uang, tanpa tanda tangan PGP.",
            "Selalu verifikasi ke sumber resmi + tanda tangan PGP sebelum percaya.",
            "Pertahanan utama adalah kebiasaan 'verifikasi sebelum percaya', bukan alat."
          ]
        },
        {
          id:"lab-opsec",
          title:"Lab 08 — Threat Model & Rencana OPSEC Pribadi (Capstone)",
          dur:"lab · 40 mnt",
          body:`
            <p class="lead">🎯 <strong>Tujuan:</strong> menyatukan semua materi menjadi sebuah <strong>rencana keamanan personal</strong> yang sesuai situasimu — inilah yang membedakan praktisi dari sekadar pengguna alat.</p>

            <h4>Kerangka threat model (jawab 4 pertanyaan)</h4>
            <ol>
              <li><strong>Apa yang kulindungi?</strong> (aset: identitas, lokasi, komunikasi, file)</li>
              <li><strong>Dari siapa?</strong> (adversary: pengintai jaringan, peretas oportunis, korporasi pengiklan, dst.)</li>
              <li><strong>Seberapa mampu mereka?</strong> (kapabilitas &amp; sumber daya lawan menentukan setelan: Standard vs Safest, perlu bridge atau tidak)</li>
              <li><strong>Apa konsekuensi bila gagal?</strong> (menentukan seberapa ketat disiplinmu)</li>
            </ol>

            <h4>Prinsip OPSEC yang menyatukan semua lab</h4>
            <ul>
              <li><strong>Kompartementalisasi</strong> — pisahkan aktivitas/identitas ke “kotak” terpisah yang tak saling bocor.</li>
              <li><strong>Pemisahan identitas</strong> — jangan pernah mencampur identitas anonim dengan akun/data aslimu. Satu kebocoran kecil bisa menautkan semuanya.</li>
              <li><strong>Minimalkan jejak</strong> — amnesia TAILS, tanpa add-on, tanpa login asli (Bab 1–2).</li>
              <li><strong>Verifikasi sebelum percaya</strong> — alamat (Lab 03), kunci (Lab 04), keaslian layanan (Lab 07).</li>
              <li><strong>Konsistensi</strong> — satu kebiasaan ceroboh membatalkan semua disiplin lainnya.</li>
            </ul>

            <h4>▸ Langkah</h4>
            <ol>
              <li>Isi 4 pertanyaan threat model untuk situasimu sendiri.</li>
              <li>Petakan tiap risiko ke kontrol konkret dari lab-lab sebelumnya.</li>
              <li>Tulis “protokol harianmu”: lingkungan apa, setelan apa, kebiasaan apa.</li>
              <li>Identifikasi titik terlemahmu (biasanya perilaku, bukan alat) dan rencana memperbaikinya.</li>
            </ol>

            <h4>✅ Verifikasi keberhasilan</h4>
            <ul>
              <li>Kamu punya satu halaman rencana OPSEC yang menautkan setiap risiko ke kontrol nyata.</li>
              <li>Kamu bisa menyebut tautan terlemah dalam rantai keamananmu sendiri.</li>
            </ul>

            <h4>🧠 Debrief</h4>
            <p>Tidak ada “anonimitas sempurna” — yang ada adalah keamanan yang <em>cukup</em> untuk model ancamanmu, dijalankan secara konsisten. Selamat: dari memahami onion routing sampai menjalankan hidden service &amp; menyusun OPSEC sendiri, kamu telah melewati jalur praktik yang utuh.</p>

            <div class="box tip">
              <div class="bx-title">◇ Langkah selanjutnya</div>
              <p>Tinjau rencana OPSEC-mu setiap beberapa bulan. Ancaman, alat, dan situasimu berubah — keamanan adalah proses, bukan status sekali jadi.</p>
            </div>
          `,
          practice:`<p><strong>Capstone:</strong> tulis dokumen threat model + rencana OPSEC satu halaman penuh untuk dirimu sendiri, lalu uji satu skenario realistis terhadapnya (“Bila X terjadi, kontrol mana yang menahan?”). Simpan dan revisi berkala.</p>`,
          takeaways:[
            "Threat model = lindungi apa, dari siapa, sekuat apa lawan, konsekuensi gagal.",
            "Prinsip pemersatu: kompartementalisasi, pemisahan identitas, minim jejak, verifikasi, konsistensi.",
            "Keamanan adalah proses yang ditinjau berkala, bukan status sekali jadi."
          ],
          quiz:{
            title:"Kuis Bab 4 — Praktik Lanjutan",
            sub:"6 soal · pilih satu jawaban",
            questions:[
              {q:"Langkah verifikasi yang paling sering dilewati saat memasang TAILS adalah…",
               options:["Mencolok USB","Verifikasi GPG image (Good signature)","Memilih bahasa","Menyambung WiFi"],
               answer:1,
               explain:"Verifikasi GPG memastikan image tidak palsu/dimodifikasi — di sinilah serangan rantai pasok dicegah."},
              {q:"Cara membuktikan (bukan sekadar berasumsi) trafikmu lewat TOR adalah…",
               options:["Melihat ikon TOR","Membuka check.torproject.org","Mematikan WiFi","Memakai VPN"],
               answer:1,
               explain:"check.torproject.org mengonfirmasi secara empiris bahwa koneksimu memang lewat jaringan TOR."},
              {q:"Saat memverifikasi kunci PGP seseorang, langkah krusial yang sering dilupakan adalah…",
               options:["Menyimpan kunci di cloud","Membandingkan fingerprint lewat saluran terpisah (out-of-band)","Mengganti passphrase","Menghapus kunci publik"],
               answer:1,
               explain:"Verifikasi fingerprint out-of-band memastikan kunci benar milik orang itu, bukan penyusup."},
              {q:"Alamat v3 .onion pada dasarnya adalah representasi dari…",
               options:["Alamat IP server","Nama domain DNS","Kunci publik layanan","Nomor port"],
               answer:2,
               explain:"Alamat .onion diturunkan dari kunci publik layanan — tanpa DNS dan tanpa mengekspos IP."},
              {q:"Cara paling tepat memvalidasi alamat .onion sebuah layanan sah adalah…",
               options:["Memakai yang pertama muncul di pencarian","Mencocokkannya dari sumber resmi clear web layanan tersebut","Memilih yang paling pendek","Menanyakannya di forum"],
               answer:1,
               explain:"Sumber kebenaran adalah alamat yang dipublikasikan resmi oleh penyedia di clear web."},
              {q:"Dalam rantai keamanan, tautan terlemah biasanya adalah…",
               options:["Algoritma enkripsi","Perilaku/kebiasaan pengguna (OPSEC)","Versi TOR","Kecepatan internet"],
               answer:1,
               explain:"Alat boleh canggih, tapi satu kebiasaan ceroboh (mis. mencampur identitas) bisa membatalkan semuanya."}
            ]
          }
        }
      ]
    };
