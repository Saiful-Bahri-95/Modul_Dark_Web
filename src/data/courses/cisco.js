/* Materi: Kitab Ilmu Putih — Cisco Networking — dikonversi dari HTML asli ke format modul. */
export const course = {
 "id": "cisco",
 "title": "Kitab Ilmu Putih — Cisco Networking",
 "subtitle": "Materi jaringan Cisco: OSI, IP & subnetting, routing, switching, dan konfigurasi IOS.",
 "kicker": "Jaringan / Networking",
 "accent": "#f5b748",
 "icon": "🌐",
 "chapters": [
  {
   "id": "the-cisco-ios-operating-system-putty",
   "title": "The Cisco IOS Operating System & PuTTY",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — The Cisco IOS Operating System & PuTTY",
     "dur": "konsep",
     "body": "<p><strong>PuTTY</strong> adalah aplikasi klien yang digunakan untuk koneksi jarak jauh melalui jaringan. Sangat populer di dunia administrasi jaringan untuk mengakses dan mengelola server atau perangkat jaringan dari jarak jauh.</p>"
    },
    {
     "id": "protokol-yang-didukung-putty",
     "title": "Protokol yang Didukung PuTTY",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>SSH (Secure Shell)</strong> – Koneksi terenkripsi untuk manajemen jarak jauh yang aman.</li>\n        <li><strong>Telnet</strong> – Koneksi sederhana ke switch atau router (tidak terenkripsi, tidak direkomendasikan di lingkungan produksi).</li>\n        <li><strong>rlogin</strong> – Protokol akses jarak jauh lama (jarang digunakan).</li>\n        <li><strong>Serial</strong> – Koneksi langsung melalui port serial (out-of-band management).</li>\n      </ul>\n\n        <span>ℹ</span>\n        <p>PuTTY mendukung transfer file via <strong>SCP</strong> (Secure Copy) dan <strong>SFTP</strong> (SSH File Transfer Protocol). Profil koneksi dapat disimpan agar tidak perlu mengisi ulang setiap kali login.</p>"
    },
    {
     "id": "in-band-vs-out-of-band-management",
     "title": "In-Band vs Out-of-Band Management",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Jenis</th><th>Jalur</th><th>Contoh Penggunaan</th><th>Kelebihan</th><th>Kekurangan</th></tr></thead>\n          <tbody>\n            <tr>\n              <td><strong>In-Band</strong></td>\n              <td>Jaringan produksi (sama dengan data)</td>\n              <td>SSH/Telnet melalui jaringan utama</td>\n              <td>Mudah dikonfigurasi, tidak butuh infrastruktur tambahan</td>\n              <td>Tidak bisa diakses jika jaringan utama down</td>\n            </tr>\n            <tr>\n              <td><strong>Out-of-Band</strong></td>\n              <td>Jaringan terpisah / port khusus</td>\n              <td>Console serial, port manajemen dedicat</td>\n              <td>Tetap bisa akses meski jaringan utama down</td>\n              <td>Butuh infrastruktur tambahan</td>\n            </tr>\n          </tbody>\n        </table>\n\n    <!-- ══════════════════════════════════════\n         SECTION: OSI LAYER 4\n    ══════════════════════════════════════ -->\n\n      02 · OSI Model"
    }
   ]
  },
  {
   "id": "osi-layer-4-the-transport-layer",
   "title": "OSI Layer 4 – The Transport Layer",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — OSI Layer 4 – The Transport Layer",
     "dur": "konsep",
     "body": "<p>Layer 4 (Transport Layer) bertanggung jawab untuk pengiriman data dari pengirim ke penerima secara end-to-end. Ada dua protokol utama yang digunakan:</p>"
    },
    {
     "id": "tcp-transmission-control-protocol",
     "title": "TCP (Transmission Control Protocol)",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>Connection-Oriented</strong> – Membangun koneksi terlebih dahulu sebelum data dikirim (Three-Way Handshake: SYN → SYN-ACK → ACK).</li>\n        <li><strong>Reliable Delivery</strong> – Data yang hilang atau rusak akan diminta ulang (retransmission).</li>\n        <li><strong>Data Sequencing</strong> – Segmen diurutkan agar data dirakit dengan benar di penerima.</li>\n        <li><strong>Flow Control</strong> – Mengatur kecepatan pengiriman agar penerima tidak kewalahan (menggunakan sliding window).</li>\n        <li><strong>Contoh penggunaan:</strong> HTTP/HTTPS, SMTP, IMAP, FTP, SSH, Telnet.</li>\n      </ul>"
    },
    {
     "id": "udp-user-datagram-protocol",
     "title": "UDP (User Datagram Protocol)",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>Connectionless</strong> – Langsung mengirim data tanpa setup koneksi.</li>\n        <li><strong>Unreliable Delivery</strong> – Tidak ada konfirmasi bahwa data diterima.</li>\n        <li><strong>Low Latency</strong> – Lebih cepat karena minim overhead.</li>\n        <li><strong>Contoh penggunaan:</strong> Streaming video/audio (YouTube, Netflix), VoIP, DNS, DHCP, SNMP, TFTP.</li>\n      </ul>\n\n        <table>\n          <thead><tr><th>Fitur</th><th>TCP</th><th>UDP</th></tr></thead>\n          <tbody>\n            <tr><td>Koneksi</td><td>Connection-oriented (3-way handshake)</td><td>Connectionless</td></tr>\n            <tr><td>Reliabilitas</td><td>✅ Reliable (ACK + retransmit)</td><td>❌ Unreliable</td></tr>\n            <tr><td>Urutan Data</td><td>✅ Dijaga (sequencing)</td><td>❌ Tidak dijaga</td></tr>\n            <tr><td>Kecepatan</td><td>Lebih lambat</td><td>Lebih cepat</td></tr>\n            <tr><td>Flow Control</td><td>✅ Ada</td><td>❌ Tidak ada</td></tr>\n            <tr><td>Cocok untuk</td><td>File transfer, email, web</td><td>Streaming, VoIP, DNS</td></tr>\n          </tbody>\n        </table>\n\n    <!-- ══════════════════════════════════════\n         SECTION: OSI LAYER 3\n    ══════════════════════════════════════ -->"
    }
   ]
  },
  {
   "id": "osi-layer-3-the-network-layer",
   "title": "OSI Layer 3 – The Network Layer",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — OSI Layer 3 – The Network Layer",
     "dur": "konsep",
     "body": "<p>Layer 3 (Network Layer) berfungsi menentukan jalur terbaik (routing) untuk mengirimkan data antar jaringan yang berbeda.</p>"
    },
    {
     "id": "protokol-di-layer-3",
     "title": "Protokol di Layer 3",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>IP (Internet Protocol)</strong> – Protokol utama pengalamatan dan routing. Versi: IPv4 (32-bit) dan IPv6 (128-bit).</li>\n        <li><strong>ICMP</strong> – Mengirim pesan error dan status (digunakan oleh perintah <code>ping</code> dan <code>traceroute</code>).</li>\n        <li><strong>ARP (Address Resolution Protocol)</strong> – Memetakan IP address ke MAC address dalam LAN.</li>\n        <li><strong>RIP, OSPF, EIGRP, BGP</strong> – Protokol routing untuk menentukan rute terbaik.</li>\n      </ul>"
    },
    {
     "id": "cara-kerja-layer-3",
     "title": "Cara Kerja Layer 3",
     "dur": "konsep",
     "body": "<ol>\n        <li><strong>Pengalamatan</strong> – Setiap perangkat memiliki IP address unik sebagai identitas logis di jaringan.</li>\n        <li><strong>Routing</strong> – Router membaca header paket (IP tujuan) dan mencari rute terbaik via routing table.</li>\n        <li><strong>Forwarding</strong> – Paket diteruskan hop-by-hop dari router ke router hingga sampai tujuan.</li>\n        <li><strong>Fragmentasi &amp; Reassembly</strong> – Jika paket terlalu besar melebihi MTU jaringan, router akan memecah (fragment) paket dan penerima akan menyusun ulang (reassembly).</li>\n      </ol>\n\n    <!-- ══════════════════════════════════════\n         SECTION: SUBNETTING\n    ══════════════════════════════════════ -->\n\n      03 · IP Address & Subnetting"
    }
   ]
  },
  {
   "id": "ip-address-subnetting",
   "title": "IP Address & Subnetting",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — IP Address & Subnetting",
     "dur": "konsep",
     "body": "<p>IP address terdiri dari <strong>32 bit</strong> yang dibagi menjadi 4 oktet (masing-masing 8 bit). Setiap oktet bernilai antara <strong>0 – 255</strong>.</p>"
    },
    {
     "id": "konversi-desimal-ke-biner",
     "title": "Konversi Desimal ke Biner",
     "dur": "konsep",
     "body": "<p>Setiap oktet menggunakan bobot bit: 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1</p>\n\n        <table>\n          <thead><tr><th>Desimal</th><th>Biner</th><th>Perhitungan</th></tr></thead>\n          <tbody>\n            <tr><td>236</td><td>11101100</td><td>128 + 64 + 32 + 8 + 4 = 236</td></tr>\n            <tr><td>179</td><td>10110011</td><td>128 + 32 + 16 + 2 + 1 = 179</td></tr>\n            <tr><td>192</td><td>11000000</td><td>128 + 64 = 192</td></tr>\n            <tr><td>168</td><td>10101000</td><td>128 + 32 + 8 = 168</td></tr>\n            <tr><td>255</td><td>11111111</td><td>128+64+32+16+8+4+2+1 = 255</td></tr>\n            <tr><td>0</td><td>00000000</td><td>semua bit = 0</td></tr>\n          </tbody>\n        </table>\n\n        <span>💡</span>\n        <p><strong>Contoh konversi IP 192.168.10.15 ke biner:</strong><br>\n        192 = <code>11000000</code> | 168 = <code>10101000</code> | 10 = <code>00001010</code> | 15 = <code>00001111</code><br>\n        Hasil: <code>11000000.10101000.00001010.00001111</code></p>\n\n    <!-- IP CLASSES -->"
    }
   ]
  },
  {
   "id": "kelas-ip-address-classful",
   "title": "Kelas IP Address (Classful)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Kelas IP Address (Classful)",
     "dur": "konsep",
     "body": "<table>\n          <thead>\n            <tr>\n              <th>Kelas</th><th>Rentang</th><th>Format Biner Awal</th>\n              <th>Network ID</th><th>Host ID</th>\n              <th>Subnet Mask Default</th>\n              <th>Jumlah Jaringan</th><th>Host per Jaringan</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td><strong>A</strong></td><td>1.0.0.0 – 126.255.255.255</td><td><code>0xxxxxxx</code></td>\n              <td>8 bit</td><td>24 bit</td><td><code>255.0.0.0 (/8)</code></td>\n              <td>126</td><td>16.777.214</td>\n            </tr>\n            <tr>\n              <td><strong>B</strong></td><td>128.0.0.0 – 191.255.255.255</td><td><code>10xxxxxx</code></td>\n              <td>16 bit</td><td>16 bit</td><td><code>255.255.0.0 (/16)</code></td>\n              <td>16.384</td><td>65.534</td>\n            </tr>\n            <tr>\n              <td><strong>C</strong></td><td>192.0.0.0 – 223.255.255.255</td><td><code>110xxxxx</code></td>\n              <td>24 bit</td><td>8 bit</td><td><code>255.255.255.0 (/24)</code></td>\n              <td>2.097.152</td><td>254</td>\n            </tr>\n            <tr>\n              <td><strong>D</strong></td><td>224.0.0.0 – 239.255.255.255</td><td><code>1110xxxx</code></td>\n              <td colspan=\"5\">Multicast – tidak digunakan untuk host biasa</td>\n            </tr>\n            <tr>\n              <td><strong>E</strong></td><td>240.0.0.0 – 255.255.255.255</td><td><code>1111xxxx</code></td>\n              <td colspan=\"5\">Reserved / eksperimental</td>\n            </tr>\n          </tbody>\n        </table>\n\n        <span>ℹ</span>\n        <p>Alamat <strong>127.x.x.x</strong> dikhususkan untuk <strong>loopback</strong> (self-test). Ketika kamu ping 127.0.0.1, paket tidak keluar ke jaringan tetapi dikembalikan ke interface loopback. Alamat ini tidak digunakan sebagai IP jaringan publik.</p>\n\n    <!-- IP PRIVATE -->"
    }
   ]
  },
  {
   "id": "ip-address-privat-rfc-1918",
   "title": "IP Address Privat (RFC 1918)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — IP Address Privat (RFC 1918)",
     "dur": "konsep",
     "body": "<p>IP privat digunakan dalam jaringan lokal dan <strong>tidak dapat dirutekan di internet publik</strong>. Untuk akses internet, IP privat harus ditranslasikan ke IP publik menggunakan NAT.</p>\n\n        <table>\n          <thead><tr><th>Kelas</th><th>Rentang IP Privat</th><th>Subnet Mask</th><th>Jumlah Jaringan Privat</th><th>Host per Jaringan</th></tr></thead>\n          <tbody>\n            <tr><td>A</td><td>10.0.0.0 – 10.255.255.255</td><td>255.0.0.0 (/8)</td><td>1 jaringan</td><td>16.777.214</td></tr>\n            <tr><td>B</td><td>172.16.0.0 – 172.31.255.255</td><td>255.240.0.0 (/12)</td><td>16 jaringan</td><td>1.048.574</td></tr>\n            <tr><td>C</td><td>192.168.0.0 – 192.168.255.255</td><td>255.255.0.0 (/16)</td><td>256 jaringan</td><td>65.534</td></tr>\n          </tbody>\n        </table>\n\n    <!-- CIDR & SUBNETTING -->"
    }
   ]
  },
  {
   "id": "cidr-subnetting",
   "title": "CIDR & Subnetting",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — CIDR & Subnetting",
     "dur": "konsep",
     "body": "<p><strong>CIDR (Classless Inter-Domain Routing)</strong> memungkinkan subnetting yang lebih fleksibel dibanding pengalamatan classful. Prefix menentukan berapa bit digunakan untuk bagian network.</p>"
    },
    {
     "id": "rumus-jumlah-host",
     "title": "Rumus Jumlah Host",
     "dur": "konsep",
     "body": "Jumlah Host = 2<sup>(32 – Panjang Prefix)</sup> – 2\n\n          <span>/24 :</span> 2<sup>(32–24)</sup> – 2 = 256 – 2 = <strong>254 host</strong>\n          <span>/25 :</span> 2<sup>(32–25)</sup> – 2 = 128 – 2 = <strong>126 host</strong>\n          <span>/26 :</span> 2<sup>(32–26)</sup> – 2 = 64 – 2 = <strong>62 host</strong>\n          <span>/27 :</span> 2<sup>(32–27)</sup> – 2 = 32 – 2 = <strong>30 host</strong>\n          <span>/28 :</span> 2<sup>(32–28)</sup> – 2 = 16 – 2 = <strong>14 host</strong>\n          <span>/30 :</span> 2<sup>(32–30)</sup> – 2 = 4 – 2 = <strong>2 host</strong> (biasa digunakan untuk link point-to-point antar router)\n\n        <span>📌</span>\n        <p>Dua alamat selalu dikurangi: satu untuk <strong>Network Address</strong> (host bits semua 0) dan satu untuk <strong>Broadcast Address</strong> (host bits semua 1). Keduanya tidak bisa diberikan ke host.</p>"
    },
    {
     "id": "menentukan-octet-yang-di-subnet",
     "title": "Menentukan Octet yang Di-Subnet",
     "dur": "konsep",
     "body": "<ul>\n        <li><code>/1</code> hingga <code>/8</code> = Subnetting pada oktet ke-1</li>\n        <li><code>/9</code> hingga <code>/16</code> = Subnetting pada oktet ke-2</li>\n        <li><code>/17</code> hingga <code>/24</code> = Subnetting pada oktet ke-3</li>\n        <li><code>/25</code> hingga <code>/31</code> = Subnetting pada oktet ke-4</li>\n      </ul>"
    },
    {
     "id": "tabel-referensi-prefix-cepat",
     "title": "Tabel Referensi Prefix Cepat",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Prefix</th><th>Subnet Mask</th><th>Total IP</th><th>Host Usable</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td>/8</td><td>255.0.0.0</td><td>16.777.216</td><td>16.777.214</td><td>Kelas A default</td></tr>\n            <tr><td>/16</td><td>255.255.0.0</td><td>65.536</td><td>65.534</td><td>Kelas B default</td></tr>\n            <tr><td>/24</td><td>255.255.255.0</td><td>256</td><td>254</td><td>Kelas C default, paling umum</td></tr>\n            <tr><td>/25</td><td>255.255.255.128</td><td>128</td><td>126</td><td>Split /24 jadi 2</td></tr>\n            <tr><td>/26</td><td>255.255.255.192</td><td>64</td><td>62</td><td>Split /24 jadi 4</td></tr>\n            <tr><td>/27</td><td>255.255.255.224</td><td>32</td><td>30</td><td>Split /24 jadi 8</td></tr>\n            <tr><td>/28</td><td>255.255.255.240</td><td>16</td><td>14</td><td>Jaringan kecil</td></tr>\n            <tr><td>/29</td><td>255.255.255.248</td><td>8</td><td>6</td><td>—</td></tr>\n            <tr><td>/30</td><td>255.255.255.252</td><td>4</td><td>2</td><td>Point-to-point link</td></tr>\n            <tr><td>/32</td><td>255.255.255.255</td><td>1</td><td>0</td><td>Host route / loopback</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "menghitung-subnet-mask-dari-prefix",
     "title": "Menghitung Subnet Mask dari Prefix",
     "dur": "konsep",
     "body": "<p>Rumus: <strong>Subnet Mask oktet terakhir = 256 – Jumlah Total IP</strong></p>\n      <p>Contoh untuk /28 (16 total IP): 256 – 16 = <strong>240</strong> → Subnet mask: <code>255.255.255.240</code></p>"
    },
    {
     "id": "tabel-perpangkatan-2-referensi-cepat",
     "title": "Tabel Perpangkatan 2 (Referensi Cepat)",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>2^n</th><th>Nilai</th><th>Cocok untuk Prefix</th></tr></thead>\n          <tbody>\n            <tr><td>2^1 = 2</td><td>2</td><td>/31 (point-to-point)</td></tr>\n            <tr><td>2^2 = 4</td><td>4</td><td>/30 (2 host)</td></tr>\n            <tr><td>2^3 = 8</td><td>8</td><td>/29 (6 host)</td></tr>\n            <tr><td>2^4 = 16</td><td>16</td><td>/28 (14 host)</td></tr>\n            <tr><td>2^5 = 32</td><td>32</td><td>/27 (30 host)</td></tr>\n            <tr><td>2^6 = 64</td><td>64</td><td>/26 (62 host)</td></tr>\n            <tr><td>2^7 = 128</td><td>128</td><td>/25 (126 host)</td></tr>\n            <tr><td>2^8 = 256</td><td>256</td><td>/24 (254 host)</td></tr>\n          </tbody>\n        </table>\n\n    <!-- MAGIC NUMBER METHOD -->"
    }
   ]
  },
  {
   "id": "the-magic-number-method",
   "title": "The Magic Number Method",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — The Magic Number Method",
     "dur": "konsep",
     "body": "<p>Cara cepat mencari network address, broadcast address, dan range host valid tanpa biner manual.</p>"
    },
    {
     "id": "langkah-langkah",
     "title": "Langkah-Langkah",
     "dur": "konsep",
     "body": "<ol>\n        <li>Tentukan <strong>subnet mask</strong> dari prefix (lihat tabel di atas).</li>\n        <li>Hitung <strong>magic number</strong>: <code>256 – nilai oktet subnet mask yang aktif</code>.</li>\n        <li>Network address adalah <strong>kelipatan magic number</strong> yang ≤ IP address kita.</li>\n        <li>Next network = network address + magic number.</li>\n        <li>Broadcast = next network – 1.</li>\n        <li>Host valid = (network address + 1) hingga (broadcast – 1).</li>\n      </ol>"
    },
    {
     "id": "contoh-1-135-15-10-138-29",
     "title": "Contoh 1 – 135.15.10.138/29",
     "dur": "konsep",
     "body": "<p>Subnet mask /29 = 255.255.255.248 | Magic number = 256 – 248 = <strong>8</strong></p>\n      <ul>\n        <li>Kelipatan 8: …128, <strong>136</strong>, 144… → Network address = <code>135.15.10.136</code></li>\n        <li>Next network = <code>135.15.10.144</code></li>\n        <li>Broadcast = <code>135.15.10.143</code></li>\n        <li>Host valid = <code>135.15.10.137</code> – <code>135.15.10.142</code></li>\n      </ul>"
    },
    {
     "id": "contoh-2-60-15-10-75-28",
     "title": "Contoh 2 – 60.15.10.75/28",
     "dur": "konsep",
     "body": "<p>Subnet mask /28 = 255.255.255.240 | Magic number = 256 – 240 = <strong>16</strong></p>\n      <ul>\n        <li>Kelipatan 16: …48, <strong>64</strong>, 80… → Network address = <code>60.15.10.64</code></li>\n        <li>Next network = <code>60.15.10.80</code></li>\n        <li>Broadcast = <code>60.15.10.79</code></li>\n        <li>Host valid = <code>60.15.10.65</code> – <code>60.15.10.78</code></li>\n      </ul>"
    },
    {
     "id": "contoh-3-subnetting-pada-oktet-ke-3-172-19-216-5",
     "title": "Contoh 3 – Subnetting pada Oktet ke-3: 172.19.216.50/23",
     "dur": "konsep",
     "body": "<p>Prefix /23 berarti subnetting pada <strong>oktet ke-3</strong>. Magic number = 256 – 254 = <strong>2</strong>.</p>\n      <ul>\n        <li>Kelipatan 2 pada oktet ke-3: …214, <strong>216</strong>, 218… → Network address = <code>172.19.216.0</code></li>\n        <li>Next network = <code>172.19.218.0</code></li>\n        <li>Broadcast = <code>172.19.217.255</code></li>\n        <li>Host valid = <code>172.19.216.1</code> – <code>172.19.217.254</code></li>\n      </ul>\n\n        <span>⚠</span>\n        <p>Saat subnetting pada oktet ke-3, <strong>broadcast address menggunakan 255 di oktet ke-4</strong>, bukan 0. Kesalahan umum adalah menulis <code>172.19.217.0</code> sebagai broadcast — padahal itu adalah host valid!</p>\n\n    <!-- ══════════════════════════════════════\n         SECTION: BASIC CONFIG\n    ══════════════════════════════════════ -->\n\n      04 · Konfigurasi Cisco"
    }
   ]
  },
  {
   "id": "basic-konfigurasi",
   "title": "Basic Konfigurasi",
   "lectures": [
    {
     "id": "troubleshooting-dengan-traceroute",
     "title": "Troubleshooting dengan TraceRoute",
     "dur": "konsep",
     "body": "<pre><span>Router#</span> <span>traceroute</span> <span>10.10.30.1</span>   <span>! Cek jalur paket ke IP tujuan</span>\n<span>Router#</span> <span>ping</span> <span>192.168.1.1</span>          <span>! Cek konektivitas dasar</span></pre>"
    },
    {
     "id": "konfigurasi-ip-address-router",
     "title": "Konfigurasi IP Address Router",
     "dur": "konsep",
     "body": "<pre><span>Router#</span> <span>configure terminal</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>192.168.0.1 255.255.255.0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>           <span>! Aktifkan interface (default: shutdown)</span>\n<span>Router(config-if)#</span> <span>exit</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>192.168.1.1 255.255.255.0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span></pre>"
    },
    {
     "id": "konfigurasi-ip-address-di-switch-vlan-1",
     "title": "Konfigurasi IP Address di Switch (VLAN 1)",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface vlan 1</span>\n<span>Switch(config-if)#</span> <span>ip address</span> <span>192.168.0.10 255.255.255.0</span>\n<span>Switch(config-if)#</span> <span>no shutdown</span>\n<span>Switch(config-if)#</span> <span>exit</span>\n<span>Switch(config)#</span> <span>ip default-gateway</span> <span>192.168.0.1</span>   <span>! Wajib agar switch bisa diakses dari luar subnet</span></pre>"
    },
    {
     "id": "konfigurasi-hostname-description",
     "title": "Konfigurasi Hostname & Description",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>hostname</span> <span>SW1</span>\n<span>SW1(config)#</span> <span>interface</span> <span>FastEthernet 0/1</span>\n<span>SW1(config-if)#</span> <span>description</span> <span>Link to R1</span>   <span>! Deskripsi membantu troubleshooting</span></pre>"
    },
    {
     "id": "duplex-speed-setting",
     "title": "Duplex & Speed Setting",
     "dur": "konsep",
     "body": "<pre><span>SW1(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>SW1(config-if)#</span> <span>duplex</span> <span>full</span>   <span>! half | full | auto</span>\n<span>SW1(config-if)#</span> <span>speed</span> <span>100</span>    <span>! 10 | 100 | 1000 | auto</span></pre>\n\n        <span>💡</span>\n        <p>Selalu samakan setting duplex dan speed di kedua ujung link. Mismatch duplex (misalnya satu full, satu half) akan menyebabkan banyak collision dan performa buruk.</p>"
    },
    {
     "id": "verifikasi-commands",
     "title": "Verifikasi Commands",
     "dur": "konsep",
     "body": "<pre><span>SW1#</span> <span>show running-config</span>             <span>! Lihat konfigurasi yang berjalan saat ini</span>\n<span>SW1#</span> <span>show ip interface brief</span>          <span>! Ringkasan status semua interface</span>\n<span>SW1#</span> <span>show run interface vlan 1</span>         <span>! Lihat konfigurasi interface VLAN 1</span>\n<span>SW1#</span> <span>show interfaces vlan 1</span>            <span>! Detail status VLAN 1</span>\n<span>SW1#</span> <span>show version</span>                      <span>! Info IOS, hardware, uptime</span></pre>\n\n    <!-- CDP & LLDP -->"
    }
   ]
  },
  {
   "id": "cdp-lldp-neighbor-discovery",
   "title": "CDP & LLDP – Neighbor Discovery",
   "lectures": [
    {
     "id": "cdp-cisco-discovery-protocol",
     "title": "CDP (Cisco Discovery Protocol)",
     "dur": "konsep",
     "body": "<p>Protokol <strong>proprietary Cisco</strong> untuk menemukan informasi perangkat Cisco yang terhubung langsung. Bekerja di Layer 2 sehingga tidak membutuhkan IP address untuk beroperasi.</p>\n      <p>Informasi yang dikumpulkan: hostname, model perangkat, IP address, versi IOS, port yang terhubung.</p>\n      <pre><span>SW1(config)#</span> <span>cdp run</span>                        <span>! Aktifkan CDP secara global</span>\n<span>SW1(config)#</span> <span>no cdp run</span>                     <span>! Nonaktifkan CDP secara global</span>\n<span>SW1(config-if)#</span> <span>no cdp enable</span>              <span>! Nonaktifkan CDP per interface</span>\n<span>SW1#</span> <span>show cdp</span>                               <span>! Info CDP global (timer, holdtime)</span>\n<span>SW1#</span> <span>show cdp neighbors</span>                    <span>! Daftar neighbor ringkas</span>\n<span>SW1#</span> <span>show cdp neighbors detail</span>             <span>! Detail lengkap semua neighbor</span></pre>"
    },
    {
     "id": "lldp-link-layer-discovery-protocol",
     "title": "LLDP (Link Layer Discovery Protocol)",
     "dur": "konsep",
     "body": "<p>Protokol standar terbuka <strong>IEEE 802.1AB</strong>, kompatibel dengan perangkat dari berbagai vendor (tidak eksklusif Cisco). Di perangkat Cisco, LLDP default-nya <em>disabled</em>.</p>\n      <pre><span>SW1(config)#</span> <span>lldp run</span>                        <span>! Aktifkan LLDP secara global</span>\n<span>SW1(config)#</span> <span>no lldp run</span>                     <span>! Nonaktifkan LLDP secara global</span>\n<span>SW1(config-if)#</span> <span>no lldp transmit</span>           <span>! Stop kirim LLDP dari interface ini</span>\n<span>SW1(config-if)#</span> <span>no lldp receive</span>            <span>! Stop terima LLDP di interface ini</span>\n<span>SW1#</span> <span>show lldp neighbors</span>                    <span>! Daftar neighbor LLDP</span>\n<span>SW1#</span> <span>show lldp neighbors detail</span>             <span>! Detail neighbor LLDP</span></pre>\n\n        <table>\n          <thead><tr><th>Fitur</th><th>CDP</th><th>LLDP</th></tr></thead>\n          <tbody>\n            <tr><td>Standar</td><td>Proprietary (Cisco)</td><td>IEEE 802.1AB (Open)</td></tr>\n            <tr><td>Kompatibilitas</td><td>Hanya perangkat Cisco</td><td>Multi-vendor</td></tr>\n            <tr><td>Default</td><td>Enabled di Cisco</td><td>Disabled di Cisco</td></tr>\n            <tr><td>Layer</td><td>Layer 2</td><td>Layer 2</td></tr>\n          </tbody>\n        </table>\n\n    <!-- DEVICE MANAGEMENT -->"
    }
   ]
  },
  {
   "id": "device-management",
   "title": "Device Management",
   "lectures": [
    {
     "id": "menyimpan-konfigurasi",
     "title": "Menyimpan Konfigurasi",
     "dur": "konsep",
     "body": "<pre><span>Router#</span> <span>copy running-config startup-config</span>   <span>! Simpan ke NVRAM agar tidak hilang saat reboot</span>\n<span>Router#</span> <span>write</span>                                  <span>! Shortcut perintah di atas</span>\n<span>Router(config)#</span> <span>do write</span>                      <span>! Simpan dari dalam global config mode</span></pre>"
    },
    {
     "id": "config-register",
     "title": "Config Register",
     "dur": "konsep",
     "body": "<p>Config register digunakan untuk mengatur cara boot router:</p>\n      <pre><span>Router(config)#</span> <span>config-register</span> <span>0x2102</span>   <span>! Boot normal (default)</span>\n<span>Router(config)#</span> <span>config-register</span> <span>0x2120</span>   <span>! Boot ke ROMmon mode</span>\n<span>Router(config)#</span> <span>config-register</span> <span>0x2142</span>   <span>! Bypass startup-config (password recovery!)</span></pre>\n\n        <span>⚠</span>\n        <p><code>0x2142</code> digunakan untuk <strong>password recovery</strong>: router akan boot tanpa membaca startup-config sehingga kamu bisa masuk dan mereset password. Jangan gunakan di lingkungan produksi tanpa alasan yang jelas.</p>"
    },
    {
     "id": "backup-konfigurasi-ios-image",
     "title": "Backup Konfigurasi & IOS Image",
     "dur": "konsep",
     "body": "<pre><span>Router#</span> <span>show flash</span>                               <span>! Lihat file di flash (IOS image)</span>\n<span>Router#</span> <span>copy flash tftp</span>                           <span>! Backup IOS image ke TFTP server</span>\n<span>Router#</span> <span>copy running-config tftp</span>                  <span>! Backup running-config ke TFTP</span>\n<span>Router#</span> <span>copy startup-config usb</span>                   <span>! Backup startup-config ke USB</span></pre>\n      <p>Saat backup ke TFTP, masukkan IP TFTP server (misal <code>10.10.10.10</code>) dan nama file tujuan (misal <code>R1-Monday</code>).</p>\n\n    <!-- ══════════════════════════════════════\n         SECTION: ROUTING\n    ══════════════════════════════════════ -->\n\n      05 · Routing"
    }
   ]
  },
  {
   "id": "routing-fundamentals",
   "title": "Routing Fundamentals",
   "lectures": [
    {
     "id": "konfigurasi-ip-address-router",
     "title": "Konfigurasi IP Address Router",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>10.0.0.1 255.255.255.0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa1/0</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>10.0.1.1 255.255.255.0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span></pre>\n\n      <pre><span>Router#</span> <span>show ip route</span>   <span>! Tampilkan routing table</span></pre>\n\n    <!-- STATIC ROUTE -->"
    }
   ]
  },
  {
   "id": "static-route",
   "title": "Static Route",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Static Route",
     "dur": "konsep",
     "body": "<p>Static routing dikonfigurasi manual oleh admin. Cocok untuk jaringan kecil yang tidak sering berubah.</p>"
    },
    {
     "id": "sintaks-static-route",
     "title": "Sintaks Static Route",
     "dur": "konsep",
     "body": "<pre><span>! ip route [network tujuan] [subnet mask] [next-hop IP atau exit interface]</span>\n<span>Router(config)#</span> <span>ip route</span> <span>10.1.0.0 255.255.255.0 10.0.0.2</span>\n<span>! Ringkasan dengan /16 (summarization): menggabungkan semua subnet 10.1.x.x</span>\n<span>Router(config)#</span> <span>ip route</span> <span>10.1.0.0 255.255.0.0 10.0.0.2</span></pre>"
    },
    {
     "id": "default-route",
     "title": "Default Route",
     "dur": "konsep",
     "body": "<pre><span>! Default route: mengirim semua traffic yang tidak ada di routing table ke gateway ISP</span>\n<span>Router(config)#</span> <span>ip route</span> <span>0.0.0.0 0.0.0.0 10.20.20.1</span></pre>"
    },
    {
     "id": "floating-static-route-backup-route",
     "title": "Floating Static Route (Backup Route)",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>ip route</span> <span>10.0.1.0 255.255.255.0 10.1.1.2</span>        <span>! Primary route (AD = 1)</span>\n<span>Router(config)#</span> <span>ip route</span> <span>10.0.1.0 255.255.255.0 10.1.3.2 5</span>     <span>! Backup route (AD = 5, lebih tinggi)</span></pre>\n\n        <span>ℹ</span>\n        <p>Floating static route hanya digunakan jika primary route down. Angka di akhir perintah adalah <strong>Administrative Distance (AD)</strong> — semakin rendah, semakin diprioritaskan. AD static route default = 1.</p>\n\n    <!-- DYNAMIC ROUTING -->"
    }
   ]
  },
  {
   "id": "dynamic-routing-protocol",
   "title": "Dynamic Routing Protocol",
   "lectures": [
    {
     "id": "administrative-distance-ad-referensi",
     "title": "Administrative Distance (AD) – Referensi",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Route Source</th><th>Default AD</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td>Connected Interface</td><td>0</td><td>Terpercaya penuh</td></tr>\n            <tr><td>Static Route</td><td>1</td><td>—</td></tr>\n            <tr><td>External BGP (eBGP)</td><td>20</td><td>—</td></tr>\n            <tr><td>EIGRP</td><td>90</td><td>—</td></tr>\n            <tr><td>OSPF</td><td>110</td><td>—</td></tr>\n            <tr><td>IS-IS</td><td>115</td><td>—</td></tr>\n            <tr><td>RIP</td><td>120</td><td>—</td></tr>\n            <tr><td>Internal BGP (iBGP)</td><td>200</td><td>—</td></tr>\n            <tr><td>Unknown / Unreachable</td><td>255</td><td>Tidak digunakan</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "igp-interior-gateway-protocol",
     "title": "IGP (Interior Gateway Protocol)",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Protokol</th><th>Tipe</th><th>AD</th><th>Max Hop</th><th>Standar</th><th>Keunggulan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>RIP v2</strong></td><td>Distance Vector</td><td>120</td><td>15 hop</td><td>Open</td><td>Mudah dikonfigurasi, cocok jaringan kecil</td></tr>\n            <tr><td><strong>OSPF</strong></td><td>Link-State</td><td>110</td><td>Tidak terbatas</td><td>Open</td><td>Konvergensi cepat, jaringan besar, area-based</td></tr>\n            <tr><td><strong>EIGRP</strong></td><td>Hybrid (DUAL)</td><td>90</td><td>Tidak terbatas</td><td>Cisco</td><td>Konvergensi sangat cepat, efisien bandwidth</td></tr>\n            <tr><td><strong>IS-IS</strong></td><td>Link-State</td><td>115</td><td>Tidak terbatas</td><td>Open</td><td>Digunakan ISP skala besar</td></tr>\n          </tbody>\n        </table>\n\n    <!-- RIP -->"
    },
    {
     "id": "konfigurasi-rip-v2",
     "title": "Konfigurasi RIP v2",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>router rip</span>\n<span>Router(config-router)#</span> <span>version 2</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.1.0</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.2.0</span>\n<span>Router(config-router)#</span> <span>no auto-summary</span>   <span>! Wajib di RIPv2 untuk support VLSM/CIDR</span></pre>\n\n    <!-- EIGRP -->"
    }
   ]
  },
  {
   "id": "eigrp-enhanced-interior-gateway-routing-protocol",
   "title": "EIGRP (Enhanced Interior Gateway Routing Protocol)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — EIGRP (Enhanced Interior Gateway Routing Protocol)",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>router eigrp</span> <span>100</span>          <span>! 100 = AS number, harus sama di semua router</span>\n<span>Router(config-router)#</span> <span>no auto-summary</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.0.0.0 0.255.255.255</span>   <span>! Wildcard mask</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.1.0</span>\n\n<span>! Verifikasi EIGRP neighbor</span>\n<span>Router#</span> <span>show ip eigrp neighbors</span>\n\n<span>! Menambahkan network baru ke EIGRP</span>\n<span>Router(config)#</span> <span>router eigrp</span> <span>100</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.20.20.0</span></pre>\n\n    <!-- OSPF -->"
    }
   ]
  },
  {
   "id": "ospf-open-shortest-path-first",
   "title": "OSPF (Open Shortest Path First)",
   "lectures": [
    {
     "id": "wildcard-mask",
     "title": "Wildcard Mask",
     "dur": "konsep",
     "body": "<p>Wildcard mask adalah kebalikan dari subnet mask: <code>255.255.255.255 – subnet mask</code></p>\n      <p>Contoh: subnet mask <code>255.255.255.0</code> → wildcard mask = <code>0.0.0.255</code></p>\n      <p>Subnet mask <code>255.255.255.252</code> (/30) → wildcard mask = <code>0.0.0.3</code></p>\n\n      <pre><span>Router(config)#</span> <span>router ospf</span> <span>1</span>          <span>! Process ID (lokal, boleh berbeda antar router)</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.10.10.0 0.0.0.255</span> <span>area 0</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.1.0 0.0.0.255</span> <span>area 0</span>\n\n<span>! Menambahkan subnet baru (/30 → wildcard 0.0.0.3)</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.20.20.0 0.0.0.3</span> <span>area 0</span></pre>"
    },
    {
     "id": "floating-ospf-route-backup",
     "title": "Floating OSPF Route (Backup)",
     "dur": "konsep",
     "body": "<pre><span>! AD OSPF = 110, jadi gunakan AD > 110 untuk floating</span>\n<span>Router(config)#</span> <span>ip route</span> <span>10.0.1.0 255.255.255.0 10.1.3.2 115</span></pre>"
    },
    {
     "id": "loopback-interface-untuk-ospf",
     "title": "Loopback Interface untuk OSPF",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>interface loopback 0</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>1.1.1.1 255.255.255.255</span>   <span>! /32 = host route</span>\n<span>Router(config-if)#</span> <span>exit</span>\n<span>! Tambahkan ke OSPF sebagai Router ID</span>\n<span>Router(config)#</span> <span>router ospf 1</span>\n<span>Router(config-router)#</span> <span>network</span> <span>1.1.1.1 0.0.0.0</span> <span>area 0</span></pre>\n\n        <span>ℹ</span>\n        <p>Loopback interface selalu <strong>UP</strong> selama router aktif. Dalam OSPF, IP loopback dijadikan <strong>Router ID</strong> karena stabilitasnya. Dalam BGP, loopback dijadikan endpoint peering.</p>\n\n    <!-- IS-IS -->"
    },
    {
     "id": "konfigurasi-is-is",
     "title": "Konfigurasi IS-IS",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>router isis</span>\n<span>Router(config-router)#</span> <span>net</span> <span>49.0001.0000.0000.0002.00</span>   <span>! NET address (network entity title)</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip router isis</span>\n<span>! Lakukan hal yang sama untuk semua interface yang terhubung ke IS-IS router lain</span></pre>\n\n    <!-- BGP -->"
    }
   ]
  },
  {
   "id": "bgp-border-gateway-protocol",
   "title": "BGP (Border Gateway Protocol)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — BGP (Border Gateway Protocol)",
     "dur": "konsep",
     "body": "<p>BGP adalah protokol routing <strong>EGP (Exterior Gateway Protocol)</strong> yang digunakan untuk routing antar <strong>Autonomous System (AS)</strong>. Digunakan oleh ISP dan organisasi besar untuk pertukaran routing di internet.</p>\n\n      <pre><span>! Router 1 (AS 1)</span>\n<span>Router(config)#</span> <span>router bgp</span> <span>1</span>\n<span>Router(config-router)#</span> <span>neighbor</span> <span>10.10.10.2</span> <span>remote-as</span> <span>2</span>   <span>! IP neighbor + AS-nya</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.10.10.0</span> <span>mask</span> <span>255.255.255.252</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.1.0</span> <span>mask</span> <span>255.255.255.0</span>\n\n<span>! Router 2 (AS 2) — AS number tidak boleh sama antar router yang berbeda AS</span>\n<span>Router(config)#</span> <span>router bgp</span> <span>2</span>\n<span>Router(config-router)#</span> <span>neighbor</span> <span>10.10.10.1</span> <span>remote-as</span> <span>1</span>\n<span>Router(config-router)#</span> <span>network</span> <span>10.10.10.0</span> <span>mask</span> <span>255.255.255.252</span>\n<span>Router(config-router)#</span> <span>network</span> <span>192.168.2.0</span> <span>mask</span> <span>255.255.255.0</span></pre>\n\n    <!-- ══════════════════════════════════════\n         NETWORKING MODEL\n    ══════════════════════════════════════ -->\n\n      06 · Model Jaringan"
    }
   ]
  },
  {
   "id": "model-tcp-ip-osi",
   "title": "Model TCP/IP & OSI",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Model TCP/IP & OSI",
     "dur": "konsep",
     "body": "<table>\n          <thead>\n            <tr><th>OSI Layer</th><th>TCP/IP Layer</th><th>Nama Data</th><th>Protokol Utama</th><th>Perangkat</th></tr>\n          </thead>\n          <tbody>\n            <tr><td>7 – Application</td><td rowspan=\"3\">Application</td><td rowspan=\"3\">Data</td><td>HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH, Telnet, SNMP</td><td>—</td></tr>\n            <tr><td>6 – Presentation</td><td>SSL/TLS, JPEG, MPEG</td><td>—</td></tr>\n            <tr><td>5 – Session</td><td>NetBIOS, RPC</td><td>—</td></tr>\n            <tr><td>4 – Transport</td><td>Transport</td><td>Segment</td><td>TCP, UDP</td><td>Firewall (L4)</td></tr>\n            <tr><td>3 – Network</td><td>Internet</td><td>Packet</td><td>IP, ICMP, OSPF, EIGRP, BGP</td><td>Router</td></tr>\n            <tr><td>2 – Data Link</td><td>Network Access</td><td>Frame</td><td>Ethernet, ARP, PPP, HDLC, STP</td><td>Switch (L2)</td></tr>\n            <tr><td>1 – Physical</td><td>Network Access</td><td>Bits</td><td>Ethernet (fisik), Wi-Fi, DSL, Fiber</td><td>Hub, Kabel, NIC</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "encapsulation-decapsulation",
     "title": "Encapsulation & Decapsulation",
     "dur": "konsep",
     "body": "<p><strong>Encapsulation</strong>: Data dari aplikasi dibungkus header oleh setiap layer saat menuju bawah (sender side): Data → Segment → Packet → Frame → Bits.</p>\n      <p><strong>Decapsulation</strong>: Header dilepas satu per satu saat data naik ke layer atas (receiver side).</p>\n\n    <!-- ══════════════════════════════════════\n         CISCO CLI INTRO\n    ══════════════════════════════════════ -->\n\n      07 · Cisco CLI"
    }
   ]
  },
  {
   "id": "pengenalan-cisco-cli",
   "title": "Pengenalan Cisco CLI",
   "lectures": [
    {
     "id": "mode-mode-cli",
     "title": "Mode-Mode CLI",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Mode</th><th>Prompt</th><th>Keterangan</th><th>Cara Masuk</th></tr></thead>\n          <tbody>\n            <tr><td>User EXEC</td><td><code>Router></code></td><td>Monitoring dasar, akses terbatas</td><td>Login awal</td></tr>\n            <tr><td>Privileged EXEC</td><td><code>Router#</code></td><td>Akses penuh, show commands, debug</td><td><code>enable</code></td></tr>\n            <tr><td>Global Config</td><td><code>Router(config)#</code></td><td>Konfigurasi global perangkat</td><td><code>configure terminal</code></td></tr>\n            <tr><td>Interface Config</td><td><code>Router(config-if)#</code></td><td>Konfigurasi per interface</td><td><code>interface fa0/0</code></td></tr>\n            <tr><td>Line Config</td><td><code>Router(config-line)#</code></td><td>Konfigurasi console/VTY/AUX</td><td><code>line vty 0 4</code></td></tr>\n            <tr><td>Router Config</td><td><code>Router(config-router)#</code></td><td>Konfigurasi routing protocol</td><td><code>router ospf 1</code></td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "perintah-dasar",
     "title": "Perintah Dasar",
     "dur": "konsep",
     "body": "<pre><span>Router></span> <span>enable</span>                          <span>! Masuk ke privileged mode</span>\n<span>Router#</span> <span>configure terminal</span>               <span>! Masuk ke global config</span>\n<span>Router(config)#</span> <span>enable password</span> <span>123</span>     <span>! Set password (tidak terenkripsi)</span>\n<span>Router(config)#</span> <span>enable secret</span> <span>cisco</span>     <span>! Set password terenkripsi (MD5) — lebih aman!</span>\n<span>Router(config)#</span> <span>no enable password</span>      <span>! Hapus password (tambah 'no' di depan)</span>\n<span>Router(config)#</span> <span>service password-encryption</span>  <span>! Enkripsi semua password plaintext di config</span></pre>\n\n        <span>💡</span>\n        <p>Gunakan <code>enable secret</code> bukan <code>enable password</code> karena secret menggunakan enkripsi MD5, sedangkan password disimpan dalam plaintext (mudah terbaca di <code>show running-config</code>).</p>"
    },
    {
     "id": "konfigurasi-ip-address-via-cli",
     "title": "Konfigurasi IP Address via CLI",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>192.168.1.1 255.255.255.0</span>\n<span>Router(config)#</span> <span>do write</span>   <span>! Simpan konfigurasi</span></pre>\n\n    <!-- ══════════════════════════════════════\n         VLAN & TRUNKING\n    ══════════════════════════════════════ -->\n\n      08 · VLAN & Trunking"
    }
   ]
  },
  {
   "id": "vlan-trunking",
   "title": "VLAN & Trunking",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — VLAN & Trunking",
     "dur": "konsep",
     "body": "<p><strong>VLAN (Virtual LAN)</strong> memungkinkan segmentasi jaringan fisik menjadi beberapa jaringan logis terpisah. Manfaat utama:</p>\n      <ul>\n        <li>Segmentasi broadcast domain – mengurangi traffic broadcast yang tidak perlu.</li>\n        <li>Keamanan – memisahkan traffic sensitif (misal keuangan) dari pengguna umum.</li>\n        <li>Fleksibilitas – tidak perlu ubah kabel fisik untuk mengubah segmentasi jaringan.</li>\n      </ul>"
    },
    {
     "id": "konfigurasi-vlan",
     "title": "Konfigurasi VLAN",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>vlan 10</span>\n<span>Switch(config-vlan)#</span> <span>name</span> <span>Accounting</span>\n<span>Switch(config-vlan)#</span> <span>exit</span>\n<span>Switch(config)#</span> <span>vlan 20</span>\n<span>Switch(config-vlan)#</span> <span>name</span> <span>Marketing</span>\n<span>Switch(config)#</span> <span>do show vlan brief</span>   <span>! Verifikasi VLAN</span></pre>"
    },
    {
     "id": "assign-port-ke-vlan-access-mode",
     "title": "Assign Port ke VLAN (Access Mode)",
     "dur": "konsep",
     "body": "<pre><span>! Single port</span>\n<span>Switch(config)#</span> <span>interface</span> <span>fa0/2</span>\n<span>Switch(config-if)#</span> <span>switchport mode access</span>\n<span>Switch(config-if)#</span> <span>switchport access vlan 10</span>\n\n<span>! Multiple port sekaligus (range)</span>\n<span>Switch(config)#</span> <span>interface range</span> <span>fa0/1-2</span>\n<span>Switch(config-if-range)#</span> <span>switchport mode access</span>\n<span>Switch(config-if-range)#</span> <span>switchport access vlan 10</span>\n\n<span>! Range tidak urut (gunakan koma)</span>\n<span>Switch(config)#</span> <span>interface range</span> <span>fa0/1,fa0/4,fa0/7</span></pre>"
    },
    {
     "id": "trunk-menghubungkan-switch-ke-switch",
     "title": "Trunk – Menghubungkan Switch ke Switch",
     "dur": "konsep",
     "body": "<p><strong>Trunk</strong> membawa traffic dari <em>banyak VLAN</em> melalui satu link fisik. Digunakan antar switch dan antara switch ke router (Router-on-a-Stick).</p>\n      <pre><span>Switch(config)#</span> <span>interface</span> <span>fa0/5</span>\n<span>Switch(config-if)#</span> <span>switchport mode trunk</span>\n<span>Switch#</span> <span>do show interfaces trunk</span>   <span>! Verifikasi trunk</span>\n\n<span>! Untuk switch yang mendukung protokol ISL dan 802.1Q, tentukan enkapsulasi:</span>\n<span>Switch(config-if)#</span> <span>switchport trunk encapsulation dot1q</span>   <span>! Gunakan IEEE 802.1Q</span>\n<span>Switch(config-if)#</span> <span>switchport mode trunk</span></pre>"
    },
    {
     "id": "allowed-vlan-pada-trunk",
     "title": "Allowed VLAN pada Trunk",
     "dur": "konsep",
     "body": "<pre><span>! Hanya izinkan VLAN 10 dan 20 melewati trunk</span>\n<span>Switch(config-if)#</span> <span>switchport trunk allowed vlan</span> <span>10,20</span>\n<span>! Tambah VLAN 30</span>\n<span>Switch(config-if)#</span> <span>switchport trunk allowed vlan add</span> <span>30</span>\n<span>! Hapus VLAN 10</span>\n<span>Switch(config-if)#</span> <span>switchport trunk allowed vlan remove</span> <span>10</span></pre>"
    },
    {
     "id": "native-vlan",
     "title": "Native VLAN",
     "dur": "konsep",
     "body": "<p>Native VLAN menerima frame yang <strong>tidak memiliki tag VLAN</strong> pada trunk link. Default native VLAN = VLAN 1.</p>\n      <pre><span>Switch(config-if)#</span> <span>switchport trunk native vlan</span> <span>20</span>   <span>! Ubah native VLAN ke 20</span></pre>\n\n        <span>⚠</span>\n        <p>Untuk keamanan, sangat dianjurkan mengubah native VLAN dari VLAN 1 ke VLAN yang tidak digunakan oleh host (misalnya VLAN 999). Ini mencegah serangan <strong>VLAN hopping</strong>.</p>"
    },
    {
     "id": "router-on-a-stick-inter-vlan-routing",
     "title": "Router-on-a-Stick (Inter-VLAN Routing)",
     "dur": "konsep",
     "body": "<pre><span>! Di switch: port menuju router harus trunk</span>\n<span>Switch(config)#</span> <span>interface</span> <span>fa0/8</span>\n<span>Switch(config-if)#</span> <span>switchport mode trunk</span>\n\n<span>! Di router: buat sub-interface untuk setiap VLAN</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0.10</span>\n<span>Router(config-subif)#</span> <span>encapsulation dot1Q</span> <span>10</span>\n<span>Router(config-subif)#</span> <span>ip address</span> <span>192.168.10.1 255.255.255.0</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0.20</span>\n<span>Router(config-subif)#</span> <span>encapsulation dot1Q</span> <span>20</span>\n<span>Router(config-subif)#</span> <span>ip address</span> <span>192.168.20.1 255.255.255.0</span></pre>\n\n    <!-- DHCP -->"
    }
   ]
  },
  {
   "id": "dhcp-server",
   "title": "DHCP Server",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — DHCP Server",
     "dur": "konsep",
     "body": "<p>DHCP secara otomatis mendistribusikan IP address, subnet mask, default gateway, dan DNS ke client dalam jaringan.</p>"
    },
    {
     "id": "konfigurasi-dhcp-di-router",
     "title": "Konfigurasi DHCP di Router",
     "dur": "konsep",
     "body": "<pre><span>! Exclude IP yang tidak ingin dibagikan (misal untuk gateway, server)</span>\n<span>Router(config)#</span> <span>ip dhcp excluded-address</span> <span>192.168.10.1 192.168.10.10</span>\n\n<span>Router(config)#</span> <span>ip dhcp pool</span> <span>VLAN10</span>\n<span>Router(dhcp-config)#</span> <span>network</span> <span>192.168.10.0 255.255.255.0</span>\n<span>Router(dhcp-config)#</span> <span>default-router</span> <span>192.168.10.1</span>   <span>! IP gateway</span>\n<span>Router(dhcp-config)#</span> <span>dns-server</span> <span>8.8.8.8</span>           <span>! DNS server (Google DNS)</span>\n<span>Router(dhcp-config)#</span> <span>lease</span> <span>7</span>                       <span>! Durasi lease 7 hari (default: 1 hari)</span></pre>\n\n        <span>ℹ</span>\n        <p>Perintah <code>ip dhcp excluded-address</code> harus dikonfigurasi <strong>sebelum</strong> membuat pool. IP yang di-exclude tidak akan diberikan ke client DHCP, sehingga kamu bisa menggunakannya untuk gateway, server statis, dsb.</p>"
    },
    {
     "id": "svi-switch-virtual-interface-multilayer-switch",
     "title": "SVI (Switch Virtual Interface) – Multilayer Switch",
     "dur": "konsep",
     "body": "<p>Switch Layer 3 (misal Cisco 3560) bisa routing antar VLAN tanpa router terpisah menggunakan SVI.</p>\n      <pre><span>Switch(config)#</span> <span>interface vlan 10</span>\n<span>Switch(config-if)#</span> <span>ip address</span> <span>192.168.10.1 255.255.255.0</span>\n<span>Switch(config-if)#</span> <span>no shutdown</span>\n<span>Switch(config)#</span> <span>interface vlan 20</span>\n<span>Switch(config-if)#</span> <span>ip address</span> <span>192.168.20.1 255.255.255.0</span>\n<span>Switch(config-if)#</span> <span>no shutdown</span>\n<span>Switch(config)#</span> <span>ip routing</span>   <span>! Aktifkan routing di switch Layer 3 (wajib!)</span>\n<span>Switch#</span> <span>show ip route</span></pre>\n\n    <!-- SSH & TELNET -->"
    }
   ]
  },
  {
   "id": "ssh-telnet",
   "title": "SSH & Telnet",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — SSH & Telnet",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Fitur</th><th>Telnet</th><th>SSH</th></tr></thead>\n          <tbody>\n            <tr><td>Port default</td><td>23</td><td>22</td></tr>\n            <tr><td>Enkripsi</td><td>❌ Tidak (plaintext)</td><td>✅ Ya (enkripsi kuat)</td></tr>\n            <tr><td>Keamanan</td><td>Tidak aman</td><td>Aman</td></tr>\n            <tr><td>Rekomendasi</td><td>Hanya di lab/test</td><td>✅ Digunakan di produksi</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-telnet",
     "title": "Konfigurasi Telnet",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>line vty 0 4</span>            <span>! 5 sesi VTY (0-4), max 15 (0-15)</span>\n<span>Router(config-line)#</span> <span>password</span> <span>telnet123</span>\n<span>Router(config-line)#</span> <span>login</span>\n<span>Router(config-line)#</span> <span>transport input telnet</span>\n<span>Router(config)#</span> <span>enable secret</span> <span>cisco</span>     <span>! Password masuk ke privileged mode</span></pre>"
    },
    {
     "id": "telnet-dengan-username-password",
     "title": "Telnet dengan Username & Password",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>username</span> <span>user1</span> <span>secret</span> <span>password1</span>\n<span>Router(config)#</span> <span>line vty 0 4</span>\n<span>Router(config-line)#</span> <span>login local</span>   <span>! Gunakan local database (username/password)</span></pre>"
    },
    {
     "id": "konfigurasi-ssh",
     "title": "Konfigurasi SSH",
     "dur": "konsep",
     "body": "<pre><span>! Step 1: Set hostname (wajib)</span>\n<span>Router(config)#</span> <span>hostname</span> <span>Core-Router</span>\n\n<span>! Step 2: Set domain name (wajib untuk generate RSA key)</span>\n<span>Core-Router(config)#</span> <span>ip domain-name</span> <span>perusahaan.com</span>\n\n<span>! Step 3: Generate RSA key pair</span>\n<span>Core-Router(config)#</span> <span>crypto key generate rsa</span>\n<span>! Pilih modulus bits: minimal 1024 (rekomendasinya 2048 untuk keamanan lebih baik)</span>\n\n<span>! Step 4: Buat user lokal</span>\n<span>Core-Router(config)#</span> <span>username</span> <span>admin</span> <span>privilege 15 secret</span> <span>StrongPass123</span>\n\n<span>! Step 5: Konfigurasi VTY untuk SSH only</span>\n<span>Core-Router(config)#</span> <span>line vty 0 4</span>\n<span>Core-Router(config-line)#</span> <span>login local</span>\n<span>Core-Router(config-line)#</span> <span>transport input ssh</span>   <span>! Hanya izinkan SSH, blokir Telnet</span>\n\n<span>! Step 6: Set versi SSH</span>\n<span>Core-Router(config)#</span> <span>ip ssh version 2</span>   <span>! SSHv2 lebih aman dari v1</span></pre>\n\n    <!-- VTP -->"
    }
   ]
  },
  {
   "id": "vtp-vlan-trunking-protocol",
   "title": "VTP (VLAN Trunking Protocol)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — VTP (VLAN Trunking Protocol)",
     "dur": "konsep",
     "body": "<p>VTP memungkinkan switch Cisco berbagi informasi VLAN secara terpusat dalam satu domain, sehingga tidak perlu konfigurasi VLAN manual di setiap switch.</p>\n\n        <table>\n          <thead><tr><th>Mode</th><th>Buat/Ubah VLAN</th><th>Sebar Info VLAN</th><th>Terima dari Server</th><th>Teruskan VTP Ads</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Server</strong></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>\n            <tr><td><strong>Client</strong></td><td>❌</td><td>❌</td><td>✅</td><td>✅</td></tr>\n            <tr><td><strong>Transparent</strong></td><td>✅ (lokal saja)</td><td>❌</td><td>❌</td><td>✅</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-vtp",
     "title": "Konfigurasi VTP",
     "dur": "konsep",
     "body": "<pre><span>! Pastikan semua port antar switch sudah trunk terlebih dahulu!</span>\n<span>! VTP Server</span>\n<span>Switch(config)#</span> <span>vtp mode server</span>\n<span>Switch(config)#</span> <span>vtp domain</span> <span>SAIFUL</span>\n<span>Switch(config)#</span> <span>vtp password</span> <span>Cisco123</span>\n\n<span>! VTP Client (domain & password harus sama dengan server)</span>\n<span>Switch(config)#</span> <span>vtp mode client</span>\n<span>Switch(config)#</span> <span>vtp domain</span> <span>SAIFUL</span>\n<span>Switch(config)#</span> <span>vtp password</span> <span>Cisco123</span>\n\n<span>! VTP Transparent</span>\n<span>Switch(config)#</span> <span>vtp mode transparent</span>\n<span>Switch(config)#</span> <span>vtp domain</span> <span>SAIFUL</span>\n<span>Switch(config)#</span> <span>vtp password</span> <span>Cisco123</span>\n\n<span>! Verifikasi</span>\n<span>Switch#</span> <span>show vtp status</span></pre>\n\n        <span>⚠</span>\n        <p><strong>VTP Revision Number Risk:</strong> Switch baru dengan revision number lebih tinggi akan <em>menimpa</em> konfigurasi VLAN semua switch lain dalam domain. Selalu <strong>reset revision number ke 0</strong> sebelum menambahkan switch baru: ubah ke mode Transparent, cek <code>show vtp status</code>, lalu ubah ke mode yang diinginkan.</p>\n\n    <!-- PORT SECURITY -->"
    }
   ]
  },
  {
   "id": "port-security",
   "title": "Port Security",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Port Security",
     "dur": "konsep",
     "body": "<p>Port Security membatasi perangkat yang boleh terhubung ke port switch berdasarkan MAC address.</p>\n\n        <table>\n          <thead><tr><th>Violation Mode</th><th>Kirim Log/SNMP</th><th>Increment Counter</th><th>Status Port</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Shutdown</strong> (default)</td><td>✅</td><td>✅</td><td>Port mati (err-disabled)</td></tr>\n            <tr><td><strong>Restrict</strong></td><td>✅</td><td>✅</td><td>Port tetap aktif, paket dibuang</td></tr>\n            <tr><td><strong>Protect</strong></td><td>❌</td><td>❌</td><td>Port tetap aktif, paket dibuang, tanpa log</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-port-security-manual",
     "title": "Konfigurasi Port Security Manual",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>Switch(config-if)#</span> <span>switchport mode access</span>\n<span>Switch(config-if)#</span> <span>switchport port-security</span>\n<span>Switch(config-if)#</span> <span>switchport port-security mac-address</span> <span>00E0.B09A.213A</span>\n<span>Switch(config-if)#</span> <span>switchport port-security maximum</span> <span>1</span>\n<span>Switch(config-if)#</span> <span>switchport port-security violation shutdown</span>\n<span>Switch#</span> <span>show port-security interface fa0/1</span>   <span>! Verifikasi</span></pre>"
    },
    {
     "id": "konfigurasi-mac-address-sticky-belajar-otomatis",
     "title": "Konfigurasi MAC Address Sticky (Belajar Otomatis)",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>Switch(config-if)#</span> <span>switchport mode access</span>\n<span>Switch(config-if)#</span> <span>switchport port-security</span>\n<span>Switch(config-if)#</span> <span>switchport port-security mac-address sticky</span>   <span>! Auto-learn MAC</span>\n<span>Switch(config-if)#</span> <span>switchport port-security maximum</span> <span>1</span>\n<span>Switch(config-if)#</span> <span>switchport port-security violation shutdown</span></pre>"
    },
    {
     "id": "memulihkan-port-yang-kena-violation-err-disabled",
     "title": "Memulihkan Port yang Kena Violation (err-disabled)",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>Switch(config-if)#</span> <span>shutdown</span>\n<span>Switch(config-if)#</span> <span>no shutdown</span>   <span>! Hidupkan kembali setelah masalah teratasi</span>\n\n<span>! Atau gunakan auto-recovery (jika dikonfigurasi)</span>\n<span>Switch(config)#</span> <span>errdisable recovery cause psecure-violation</span>\n<span>Switch(config)#</span> <span>errdisable recovery interval</span> <span>300</span>   <span>! Auto-recover setelah 300 detik</span></pre>\n\n    <!-- ETHERCHANNEL -->"
    }
   ]
  },
  {
   "id": "etherchannel",
   "title": "EtherChannel",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — EtherChannel",
     "dur": "konsep",
     "body": "<p>EtherChannel menggabungkan beberapa link fisik Ethernet menjadi <strong>satu link logis</strong>, memberikan bandwidth lebih besar dan redundansi.</p>\n\n        <table>\n          <thead><tr><th>Protokol</th><th>Standar</th><th>Mode</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>LACP</strong></td><td>IEEE 802.3ad (Open)</td><td>active / passive</td><td>Setidaknya satu sisi harus <code>active</code></td></tr>\n            <tr><td><strong>PAgP</strong></td><td>Cisco Proprietary</td><td>desirable / auto</td><td>Setidaknya satu sisi harus <code>desirable</code></td></tr>\n            <tr><td><strong>Static</strong></td><td>—</td><td>on</td><td>Kedua sisi harus <code>on</code>, tidak ada negosiasi</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-lacp",
     "title": "Konfigurasi LACP",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface range</span> <span>fa0/1-3</span>\n<span>Switch(config-if-range)#</span> <span>switchport mode trunk</span>\n<span>Switch(config-if-range)#</span> <span>channel-group 1 mode active</span>   <span>! Sisi lain bisa active atau passive</span>\n<span>Switch#</span> <span>show etherchannel summary</span>   <span>! Verifikasi (lihat flag P = bundled, I = stand-alone)</span></pre>"
    },
    {
     "id": "konfigurasi-pagp",
     "title": "Konfigurasi PAgP",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface range</span> <span>fa0/5-7</span>\n<span>Switch(config-if-range)#</span> <span>switchport trunk encapsulation dot1q</span>   <span>! Jika diperlukan</span>\n<span>Switch(config-if-range)#</span> <span>switchport mode trunk</span>\n<span>Switch(config-if-range)#</span> <span>channel-group 2 mode desirable</span></pre>"
    },
    {
     "id": "static-etherchannel-dengan-ip-l3",
     "title": "Static EtherChannel dengan IP (L3)",
     "dur": "konsep",
     "body": "<pre><span>Switch(config)#</span> <span>interface range</span> <span>fa0/1-3</span>\n<span>Switch(config-if-range)#</span> <span>no switchport</span>   <span>! Jadikan L3 port (routed port)</span>\n<span>Switch(config-if-range)#</span> <span>channel-group 1 mode on</span>\n<span>Switch(config)#</span> <span>interface port-channel 1</span>\n<span>Switch(config-if)#</span> <span>ip address</span> <span>10.10.10.1 255.255.255.0</span></pre>\n\n    <!-- ACL -->\n\n      09 · Access Control List"
    }
   ]
  },
  {
   "id": "access-control-list-acl",
   "title": "Access Control List (ACL)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Access Control List (ACL)",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Jenis</th><th>Nomor</th><th>Filter Berdasarkan</th><th>Penempatan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Standard ACL</strong></td><td>1–99, 1300–1999</td><td>Source IP saja</td><td>Dekat destination</td></tr>\n            <tr><td><strong>Extended ACL</strong></td><td>100–199, 2000–2699</td><td>Source IP, Dest IP, Protokol, Port</td><td>Dekat source</td></tr>\n            <tr><td><strong>Named ACL</strong></td><td>Nama bebas</td><td>Standard atau Extended</td><td>Sesuai jenis</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "standard-acl",
     "title": "Standard ACL",
     "dur": "konsep",
     "body": "<pre><span>! Blokir seluruh VLAN 20 (192.168.20.0/24)</span>\n<span>Router(config)#</span> <span>access-list 1 deny</span> <span>192.168.20.0 0.0.0.255</span>\n<span>Router(config)#</span> <span>access-list 1 permit any</span>   <span>! Izinkan semua selain yang di-deny di atas</span>\n\n<span>! Terapkan di interface (IN = arah masuk, OUT = arah keluar)</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip access-group 1 out</span>\n\n<span>! Blokir 1 host spesifik</span>\n<span>Router(config)#</span> <span>access-list 1 deny host</span> <span>192.168.10.2</span>\n<span>Router(config)#</span> <span>access-list 1 permit any</span></pre>\n\n        <span>💡</span>\n        <p>ACL diproses <strong>top-down</strong> (dari baris pertama ke bawah). Urutan rule sangat penting — rule yang lebih spesifik harus di atas rule yang lebih umum. Setiap ACL memiliki implicit <code>deny any</code> di bagian paling bawah.</p>"
    },
    {
     "id": "named-acl-edit-nomor-sequence",
     "title": "Named ACL & Edit Nomor Sequence",
     "dur": "konsep",
     "body": "<pre><span>! Lihat sequence number</span>\n<span>Router#</span> <span>show access-list</span>\n\n<span>! Edit ACL (masuk ke ACL config mode)</span>\n<span>Router(config)#</span> <span>ip access-list standard 1</span>\n<span>Router(config-std-nacl)#</span> <span>no 30</span>              <span>! Hapus rule di sequence 30</span>\n<span>Router(config-std-nacl)#</span> <span>15</span> <span>deny host</span> <span>192.168.10.2</span>   <span>! Tambah di sequence 15</span>\n\n<span>! Named Standard ACL</span>\n<span>Router(config)#</span> <span>ip access-list standard</span> <span>PermitVLAN30</span>\n<span>Router(config-std-nacl)#</span> <span>permit</span> <span>192.168.30.0 0.0.0.255</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip access-group PermitVLAN30 out</span></pre>"
    },
    {
     "id": "extended-acl",
     "title": "Extended ACL",
     "dur": "konsep",
     "body": "<pre><span>! Blokir HTTP (port 80) dari semua ke jaringan 192.168.1.0/24</span>\n<span>Router(config)#</span> <span>access-list 100 deny tcp any</span> <span>192.168.1.0 0.0.0.255</span> <span>eq</span> <span>80</span>\n\n<span>! Izinkan semua traffic ke server 1 (192.168.1.2) dari siapapun</span>\n<span>Router(config)#</span> <span>access-list 100 permit ip any host</span> <span>192.168.1.2</span>\n\n<span>! Hanya VLAN 20 bisa akses server 2 (192.168.1.3)</span>\n<span>Router(config)#</span> <span>access-list 100 permit ip</span> <span>192.168.20.0 0.0.0.255</span> <span>host</span> <span>192.168.1.3</span>\n\n<span>! Terapkan di interface (dekat sumber traffic)</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>Router(config-if)#</span> <span>ip access-group 100 out</span></pre>\n\n      <h4>Port Number Referensi</h4>\n\n        <table>\n          <thead><tr><th>Protokol</th><th>Port</th><th>Protokol</th><th>Port</th></tr></thead>\n          <tbody>\n            <tr><td>HTTP</td><td>80</td><td>HTTPS</td><td>443</td></tr>\n            <tr><td>FTP (data)</td><td>20</td><td>FTP (control)</td><td>21</td></tr>\n            <tr><td>SSH</td><td>22</td><td>Telnet</td><td>23</td></tr>\n            <tr><td>SMTP</td><td>25</td><td>DNS</td><td>53</td></tr>\n            <tr><td>DHCP server</td><td>67</td><td>DHCP client</td><td>68</td></tr>\n            <tr><td>TFTP</td><td>69</td><td>SNMP</td><td>161</td></tr>\n          </tbody>\n        </table>\n\n    <!-- NAT -->\n\n      10 · NAT"
    }
   ]
  },
  {
   "id": "nat-network-address-translation",
   "title": "NAT (Network Address Translation)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — NAT (Network Address Translation)",
     "dur": "konsep",
     "body": "<p>NAT menerjemahkan IP privat ke IP publik sehingga perangkat di jaringan lokal bisa mengakses internet.</p>\n\n        <table>\n          <thead><tr><th>Jenis NAT</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Static NAT</strong></td><td>Satu IP privat ↔ satu IP publik (tetap). Biasa untuk server.</td></tr>\n            <tr><td><strong>Dynamic NAT</strong></td><td>Pool IP privat → pool IP publik. Alokasi dinamis.</td></tr>\n            <tr><td><strong>PAT / NAT Overload</strong></td><td>Banyak IP privat → satu IP publik (menggunakan port number). Paling umum digunakan di rumah/kantor.</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-nat-overload-pat",
     "title": "Konfigurasi NAT Overload (PAT)",
     "dur": "konsep",
     "body": "<pre><span>! Step 1: Buat default route ke ISP</span>\n<span>Router(config)#</span> <span>ip route</span> <span>0.0.0.0 0.0.0.0 10.20.20.1</span>\n\n<span>! Step 2: Buat access-list yang mencakup jaringan privat yang akan di-NAT</span>\n<span>Router(config)#</span> <span>access-list 1 permit</span> <span>192.168.10.0 0.0.0.255</span>\n<span>Router(config)#</span> <span>access-list 1 permit</span> <span>192.168.20.0 0.0.0.255</span>\n\n<span>! Step 3: Konfigurasi NAT overload (PAT)</span>\n<span>Router(config)#</span> <span>ip nat inside source list 1 interface</span> <span>fa0/0</span> <span>overload</span>\n<span>! 'list 1' = ACL yang berisi jaringan privat\n! 'interface fa0/0' = interface yang mengarah ke ISP (IP publik diambil dari sini)\n! 'overload' = PAT (banyak IP privat → 1 IP publik)</span>\n\n<span>! Step 4: Tandai interface inside dan outside</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>           <span>! Mengarah ke ISP</span>\n<span>Router(config-if)#</span> <span>ip nat outside</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0.10</span>        <span>! Sub-interface VLAN 10 (dalam)</span>\n<span>Router(config-if)#</span> <span>ip nat inside</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0.20</span>        <span>! Sub-interface VLAN 20 (dalam)</span>\n<span>Router(config-if)#</span> <span>ip nat inside</span>\n\n<span>! Verifikasi NAT</span>\n<span>Router#</span> <span>show ip nat translations</span>\n<span>Router#</span> <span>show ip nat statistics</span></pre>\n\n    <hr>\n\n    <!-- ══════════════════════════════════════\n         SECTION: STP\n    ══════════════════════════════════════ -->\n\n      11 · Spanning Tree Protocol"
    }
   ]
  },
  {
   "id": "spanning-tree-protocol-stp-deep-dive",
   "title": "Spanning Tree Protocol (STP) – Deep Dive",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Spanning Tree Protocol (STP) – Deep Dive",
     "dur": "konsep",
     "body": "<p>STP (IEEE 802.1D) mencegah <strong>switching loop</strong> di jaringan Layer 2. Loop terjadi ketika ada jalur redundan antar switch — tanpa STP, frame broadcast akan berputar tanpa henti (<em>broadcast storm</em>) dan membuat seluruh jaringan lumpuh dalam hitungan detik.</p>"
    },
    {
     "id": "mengapa-loop-layer-2-sangat-berbahaya",
     "title": "Mengapa Loop Layer 2 Sangat Berbahaya?",
     "dur": "konsep",
     "body": "<p>Tidak seperti Layer 3 yang memiliki TTL (Time-to-Live) untuk membatasi umur paket, frame Ethernet di Layer 2 <strong>tidak memiliki TTL</strong>. Akibatnya:</p>\n      <ul>\n        <li>Frame broadcast beredar terus-menerus di semua port (<em>broadcast storm</em>).</li>\n        <li>Switch memperbarui CAM table setiap menerima frame — <em>MAC address table instability</em>.</li>\n        <li>CPU switch 100%, jaringan tidak bisa digunakan, semua host terputus.</li>\n        <li>Dalam hitungan detik, loop bisa meratakan jaringan 100+ switch.</li>\n      </ul>"
    },
    {
     "id": "proses-pemilihan-root-bridge-step-by-step",
     "title": "Proses Pemilihan Root Bridge (Step-by-Step)",
     "dur": "konsep",
     "body": "<p>STP memilih Root Bridge secara otomatis menggunakan proses berikut:</p>\n      <ol>\n        <li><strong>Semua switch menganggap dirinya Root Bridge</strong> — mereka mulai mengirim BPDU dengan BID sendiri.</li>\n        <li><strong>Bandingkan Bridge Priority</strong> (default 32768). Nilai terendah menang.</li>\n        <li>Jika priority sama → bandingkan <strong>MAC address</strong>. MAC terendah (numerik) menang.</li>\n        <li>Switch yang menang menjadi <strong>Root Bridge</strong>. Semua port Root Bridge = Designated Port (Forwarding).</li>\n        <li>Switch lain pilih <strong>Root Port</strong> (port dengan path cost terendah ke Root Bridge).</li>\n        <li>Di setiap segmen, switch dengan path cost terendah ke Root Bridge = Designated Port. Yang lain = Non-Designated (Blocking).</li>\n      </ol>\n\n        <span>⚠</span>\n        <p><strong>Masalah umum:</strong> Jika tidak diatur manual, switch dengan MAC address terendah (biasanya switch lama) akan terpilih jadi Root Bridge — bukan switch yang paling powerful atau central. Selalu set Root Bridge secara manual!</p>"
    },
    {
     "id": "istilah-istilah-penting-stp",
     "title": "Istilah-Istilah Penting STP",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Istilah</th><th>Penjelasan</th><th>Keterangan Tambahan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Root Bridge</strong></td><td>Switch pusat STP, dipilih berdasarkan BID terendah</td><td>Semua port Root Bridge = Designated (Forwarding)</td></tr>\n            <tr><td><strong>Bridge ID (BID)</strong></td><td>Priority (16-bit) + MAC address (48-bit)</td><td>Format: <code>[Priority].[VLAN].[MAC]</code> — contoh: <code>32768.10.001A.2B3C.4D5E</code></td></tr>\n            <tr><td><strong>Root Port (RP)</strong></td><td>Port di non-root switch dengan path cost terkecil ke Root Bridge</td><td>Hanya satu Root Port per switch (kecuali Root Bridge)</td></tr>\n            <tr><td><strong>Designated Port (DP)</strong></td><td>Port terbaik di setiap segmen untuk meneruskan traffic ke Root Bridge</td><td>Satu Designated Port per segmen</td></tr>\n            <tr><td><strong>Non-Designated Port</strong></td><td>Port yang diblokir untuk mencegah loop</td><td>Tetap standby, menerima BPDU, siap aktif jika DP mati</td></tr>\n            <tr><td><strong>Path Cost</strong></td><td>Nilai berdasarkan bandwidth link — makin cepat, makin rendah</td><td>Akumulatif dari switch ke Root Bridge (sum of all hop costs)</td></tr>\n            <tr><td><strong>BPDU</strong></td><td>Bridge Protocol Data Unit — pesan hello STP antar switch</td><td>Dikirim setiap 2 detik (Hello Timer). Berisi BID, path cost, port info</td></tr>\n            <tr><td><strong>Hello Timer</strong></td><td>Interval BPDU dikirim (default: 2 detik)</td><td>—</td></tr>\n            <tr><td><strong>Max Age</strong></td><td>Waktu tunggu sebelum port memproses BPDU baru (default: 20 detik)</td><td>= waktu port tetap di Blocking state</td></tr>\n            <tr><td><strong>Forward Delay</strong></td><td>Waktu di Listening dan Learning state (default: 15 detik)</td><td>Total konvergensi STP = 20 + 15 + 15 = <strong>50 detik</strong></td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "path-cost-berdasarkan-bandwidth",
     "title": "Path Cost Berdasarkan Bandwidth",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Bandwidth Link</th><th>IEEE 802.1D-1998 (lama)</th><th>IEEE 802.1D-2004 (baru)</th></tr></thead>\n          <tbody>\n            <tr><td>10 Mbps</td><td>100</td><td>2.000.000</td></tr>\n            <tr><td>100 Mbps (FastEthernet)</td><td>19</td><td>200.000</td></tr>\n            <tr><td>1 Gbps (GigabitEthernet)</td><td>4</td><td>20.000</td></tr>\n            <tr><td>10 Gbps</td><td>2</td><td>2.000</td></tr>\n            <tr><td>100 Gbps</td><td>—</td><td>200</td></tr>\n          </tbody>\n        </table>\n\n        <span>💡</span>\n        <p>Cost dihitung secara <strong>kumulatif</strong>. Contoh: jika SW-A → SW-B (100 Mbps, cost 19) → Root Bridge (100 Mbps, cost 19), maka total path cost SW-A = 19 + 19 = <strong>38</strong>. Makin rendah total cost = jalur yang dipilih.</p>"
    },
    {
     "id": "status-port-stp-802-1d",
     "title": "Status Port STP (802.1D)",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>State</th><th>Terima BPDU</th><th>Kirim BPDU</th><th>Forward Frame</th><th>Belajar MAC</th><th>Durasi</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Blocking</strong></td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>Max Age = 20 detik</td></tr>\n            <tr><td><strong>Listening</strong></td><td>✅</td><td>✅</td><td>❌</td><td>❌</td><td>Forward Delay = 15 detik</td></tr>\n            <tr><td><strong>Learning</strong></td><td>✅</td><td>✅</td><td>❌</td><td>✅</td><td>Forward Delay = 15 detik</td></tr>\n            <tr><td><strong>Forwarding</strong></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td><td>Normal operasi</td></tr>\n            <tr><td><strong>Disabled</strong></td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>Admin <code>shutdown</code></td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-stp-di-cisco-lengkap",
     "title": "Konfigurasi STP di Cisco – Lengkap",
     "dur": "konsep",
     "body": "<pre><span>! ── VERIFIKASI ──────────────────────────────────────────</span>\n<span>Switch#</span> <span>show spanning-tree</span>                          <span>! Status STP semua VLAN</span>\n<span>Switch#</span> <span>show spanning-tree vlan 10</span>                  <span>! Fokus VLAN 10 — lihat Root Bridge, port state</span>\n<span>Switch#</span> <span>show spanning-tree detail</span>                   <span>! Detail lengkap (timer, cost, BID)</span>\n<span>Switch#</span> <span>show spanning-tree summary</span>                  <span>! Ringkasan — jumlah port per state</span>\n\n<span>! ── SET ROOT BRIDGE MANUAL ──────────────────────────────</span>\n<span>! Cara 1: Set priority manual (harus kelipatan 4096)</span>\n<span>SW-CORE(config)#</span> <span>spanning-tree vlan 10 priority</span> <span>4096</span>\n<span>SW-CORE(config)#</span> <span>spanning-tree vlan 20 priority</span> <span>4096</span>\n\n<span>! Cara 2: Perintah otomatis (lebih simpel)</span>\n<span>SW-CORE(config)#</span> <span>spanning-tree vlan 10,20 root primary</span>   <span>! Jadi Primary Root</span>\n<span>SW-DIST(config)#</span> <span>spanning-tree vlan 10,20 root secondary</span> <span>! Jadi Backup Root</span>\n\n<span>! ── MANIPULASI PATH COST & PORT PRIORITY ────────────────</span>\n<span>! Paksa SW-A menggunakan jalur via fa0/1 (bukan fa0/2) ke Root Bridge</span>\n<span>SW-A(config)#</span> <span>interface</span> <span>fa0/1</span>\n<span>SW-A(config-if)#</span> <span>spanning-tree cost</span> <span>10</span>              <span>! Set cost rendah = jalur diutamakan</span>\n<span>SW-A(config)#</span> <span>interface</span> <span>fa0/2</span>\n<span>SW-A(config-if)#</span> <span>spanning-tree cost</span> <span>100</span>             <span>! Set cost tinggi = jalur backup</span>\n\n<span>! Port priority (pengaruh jika ada 2 port dengan cost sama ke Root)</span>\n<span>SW-A(config-if)#</span> <span>spanning-tree port-priority</span> <span>64</span>      <span>! Default 128. Lebih rendah = lebih diprioritaskan</span></pre>"
    },
    {
     "id": "kasus-nyata-1-broadcast-storm-setelah-kabel-dita",
     "title": "Kasus Nyata 1 — Broadcast Storm Setelah Kabel Ditambahkan",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> Teknisi menambahkan kabel backup antara SW-A dan SW-B tanpa sadar sudah ada kabel existing. Tiba-tiba seluruh jaringan kantor lumpuh — komputer tidak bisa ping, email tidak bisa terkirim, semua lampu LED switch berkedip sangat cepat.<br><br>\n        <strong>Penyebab:</strong> Terbentuk loop Layer 2. Frame broadcast ARP dari setiap PC beredar terus di loop, memenuhi bandwidth 100%.<br><br>\n        <strong>Solusi cepat:</strong> Cabut salah satu kabel yang membentuk loop. Untuk solusi permanen, pastikan STP aktif (<code>show spanning-tree</code> harus menampilkan port Blocking di segmen yang redundan).</p>"
    },
    {
     "id": "kasus-nyata-2-root-bridge-salah-tempat",
     "title": "Kasus Nyata 2 — Root Bridge Salah Tempat",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> Jaringan berjalan tapi terasa lambat. Setelah dicek, Root Bridge ternyata adalah SW-ACCESS-03 (switch murah di lantai 3), bukan SW-CORE (switch 48-port di ruang server).<br><br>\n        <strong>Penyebab:</strong> SW-ACCESS-03 kebetulan punya MAC address terendah sehingga terpilih jadi Root Bridge secara default. Akibatnya semua traffic harus melewati switch yang tidak optimal.<br><br>\n        <strong>Solusi:</strong></p>\n\n      <pre><span>! Di SW-CORE — jadikan Root Bridge permanen</span>\n<span>SW-CORE(config)#</span> <span>spanning-tree vlan 1-4094 root primary</span>\n<span>! Verifikasi: Root Bridge sekarang harus SW-CORE</span>\n<span>SW-CORE#</span> <span>show spanning-tree vlan 10</span>\n<span>! Output: \"This bridge is the root\"</span></pre>\n\n    <!-- STP TYPES -->"
    }
   ]
  },
  {
   "id": "rstp-pvst-portfast-stp-security",
   "title": "RSTP, PVST+, PortFast, & STP Security",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — RSTP, PVST+, PortFast, & STP Security",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Protokol</th><th>Standar</th><th>Konvergensi</th><th>VLAN Support</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>STP</strong></td><td>IEEE 802.1D</td><td>30–50 detik</td><td>Satu instance (semua VLAN)</td><td>Klasik, sudah usang</td></tr>\n            <tr><td><strong>PVST+</strong></td><td>Cisco proprietary</td><td>30–50 detik</td><td>Per-VLAN (1 STP per VLAN)</td><td>Default lama Cisco — boros CPU untuk banyak VLAN</td></tr>\n            <tr><td><strong>RSTP</strong></td><td>IEEE 802.1w</td><td>1–2 detik</td><td>Satu instance (semua VLAN)</td><td>Konvergensi cepat dengan mekanisme proposal/agreement</td></tr>\n            <tr><td><strong>Rapid PVST+</strong></td><td>Cisco</td><td>1–2 detik</td><td>Per-VLAN</td><td>✅ Default modern Cisco — gabungan RSTP + PVST+</td></tr>\n            <tr><td><strong>MSTP (802.1s)</strong></td><td>IEEE</td><td>1–2 detik</td><td>Grup VLAN per instance</td><td>Efisien untuk jaringan banyak VLAN — satu instance bisa handle banyak VLAN</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "rstp-perbedaan-utama-dari-stp-klasik",
     "title": "RSTP — Perbedaan Utama dari STP Klasik",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>Port state disederhanakan:</strong> Discarding (Blocking+Listening) → Learning → Forwarding.</li>\n        <li><strong>Port role baru:</strong> Alternate Port (cadangan Root Port) dan Backup Port (cadangan Designated Port).</li>\n        <li><strong>Konvergensi aktif:</strong> RSTP tidak menunggu timer. Port langsung negosiasi dengan neighbor via mekanisme <em>proposal/agreement</em> — selesai dalam 1–2 detik.</li>\n        <li><strong>Edge Port:</strong> Setara PortFast di RSTP — langsung Forwarding tanpa negosiasi.</li>\n      </ul>"
    },
    {
     "id": "portfast-bpdu-guard-bpdu-filter",
     "title": "PortFast, BPDU Guard, & BPDU Filter",
     "dur": "konsep",
     "body": "<p><strong>PortFast</strong> membuat port akses langsung masuk ke state Forwarding, melewati Listening dan Learning (menghemat 30 detik). Hanya untuk port end device — <strong>JANGAN</strong> diaktifkan di port yang terhubung ke switch lain.</p>\n      <pre><span>! ── PORTFAST ────────────────────────────────────────────</span>\n<span>Switch(config)#</span> <span>interface range</span> <span>fa0/1-24</span>\n<span>Switch(config-if-range)#</span> <span>spanning-tree portfast</span>       <span>! Per interface</span>\n<span>Switch(config)#</span> <span>spanning-tree portfast default</span>           <span>! Global: semua access port</span>\n\n<span>! ── BPDU GUARD (paling penting!) ────────────────────────</span>\n<span>! Jika port PortFast menerima BPDU → port langsung err-disabled</span>\n<span>! Mencegah user iseng colok switch pribadi ke port kantor</span>\n<span>Switch(config-if)#</span> <span>spanning-tree bpduguard enable</span>       <span>! Per interface</span>\n<span>Switch(config)#</span> <span>spanning-tree portfast bpduguard default</span> <span>! Global: semua PortFast port</span>\n\n<span>! ── BPDU FILTER ─────────────────────────────────────────</span>\n<span>! STOP kirim/terima BPDU di port ini. Gunakan dengan sangat hati-hati!</span>\n<span>! Jika digunakan global pada PortFast port = hentikan BPDU hanya jika tidak ada neighbor</span>\n<span>Switch(config-if)#</span> <span>spanning-tree bpdufilter enable</span>\n\n<span>! ── RAPID PVST+ ─────────────────────────────────────────</span>\n<span>Switch(config)#</span> <span>spanning-tree mode rapid-pvst</span>\n\n<span>! ── ROOT GUARD ──────────────────────────────────────────</span>\n<span>! Mencegah switch di port ini menjadi Root Bridge</span>\n<span>! Pasang di semua port menuju switch yang TIDAK boleh jadi Root Bridge</span>\n<span>Switch(config)#</span> <span>interface</span> <span>fa0/5</span>\n<span>Switch(config-if)#</span> <span>spanning-tree guard root</span>\n\n<span>! ── LOOP GUARD ──────────────────────────────────────────</span>\n<span>! Mencegah port Non-Designated berubah ke Forwarding jika BPDU berhenti diterima</span>\n<span>Switch(config)#</span> <span>spanning-tree loopguard default</span>           <span>! Aktifkan global</span>\n\n<span>! ── AUTO-RECOVERY BPDU GUARD ────────────────────────────</span>\n<span>Switch(config)#</span> <span>errdisable recovery cause bpduguard</span>\n<span>Switch(config)#</span> <span>errdisable recovery interval</span> <span>300</span>           <span>! Recover otomatis 5 menit</span></pre>\n\n        <table>\n          <thead><tr><th>Fitur STP Security</th><th>Fungsi</th><th>Pasang di Mana</th></tr></thead>\n          <tbody>\n            <tr><td><strong>PortFast</strong></td><td>Bypass STP timer untuk end device</td><td>Semua access port (PC, printer, server)</td></tr>\n            <tr><td><strong>BPDU Guard</strong></td><td>Matikan port jika ada BPDU masuk</td><td>Semua PortFast port</td></tr>\n            <tr><td><strong>BPDU Filter</strong></td><td>Stop kirim/terima BPDU</td><td>Edge port ke perangkat non-switch</td></tr>\n            <tr><td><strong>Root Guard</strong></td><td>Cegah switch luar jadi Root Bridge</td><td>Port menuju switch downstream (bukan Core)</td></tr>\n            <tr><td><strong>Loop Guard</strong></td><td>Cegah port Non-Designated pindah ke Forwarding akibat BPDU loss</td><td>Semua Non-Designated port / port uplink</td></tr>\n          </tbody>\n        </table>\n\n        <span>💡</span>\n        <p><strong>Template best practice STP untuk switch akses:</strong><br>\n        1. <code>spanning-tree mode rapid-pvst</code><br>\n        2. <code>spanning-tree portfast default</code> (semua access port)<br>\n        3. <code>spanning-tree portfast bpduguard default</code> (proteksi)<br>\n        4. <code>spanning-tree loopguard default</code> (proteksi uplink)<br>\n        5. <code>spanning-tree vlan X root primary/secondary</code> di switch Core/Distribution</p>\n\n    <!-- ══════════════════════════════════════\n         SECTION: WIRELESS\n    ══════════════════════════════════════ -->\n\n      12 · Wireless Networking"
    }
   ]
  },
  {
   "id": "wireless-networking-wi-fi-deep-dive",
   "title": "Wireless Networking (Wi-Fi) – Deep Dive",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Wireless Networking (Wi-Fi) – Deep Dive",
     "dur": "konsep",
     "body": "<p>Jaringan wireless menggunakan gelombang radio untuk transmisi data. Memahami konsep RF, channel planning, dan arsitektur enterprise adalah kunci membangun jaringan Wi-Fi yang stabil, cepat, dan aman.</p>"
    },
    {
     "id": "standar-wi-fi-ieee-802-11-evolusi",
     "title": "Standar Wi-Fi (IEEE 802.11) — Evolusi",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Standar</th><th>Nama</th><th>Band</th><th>Kecepatan Maks</th><th>Teknologi Kunci</th><th>Cocok untuk</th></tr></thead>\n          <tbody>\n            <tr><td>802.11b</td><td>Wi-Fi 1</td><td>2.4 GHz</td><td>11 Mbps</td><td>DSSS</td><td>Legacy, tidak dipakai</td></tr>\n            <tr><td>802.11g</td><td>Wi-Fi 3</td><td>2.4 GHz</td><td>54 Mbps</td><td>OFDM</td><td>Legacy</td></tr>\n            <tr><td>802.11n</td><td>Wi-Fi 4</td><td>2.4 / 5 GHz</td><td>600 Mbps</td><td>MIMO (4×4), channel bonding</td><td>Rumah, kantor kecil</td></tr>\n            <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td><td>3.5 Gbps</td><td>MU-MIMO (8×8), 256-QAM, beamforming</td><td>Kantor, apartemen</td></tr>\n            <tr><td>802.11ax</td><td>Wi-Fi 6/6E</td><td>2.4/5/6 GHz</td><td>9.6 Gbps</td><td>OFDMA, MU-MIMO (8×8), BSS Coloring, TWT</td><td>Area padat, enterprise</td></tr>\n            <tr><td>802.11be</td><td>Wi-Fi 7</td><td>2.4/5/6 GHz</td><td>46 Gbps</td><td>Multi-Link Operation (MLO), 4096-QAM</td><td>Ultra high-density, AR/VR</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "arsitektur-wireless-enterprise",
     "title": "Arsitektur Wireless Enterprise",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Komponen</th><th>Fungsi</th><th>Keterangan Penting</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Access Point (AP)</strong></td><td>Menyediakan koneksi wireless untuk klien</td><td>Terhubung ke switch via kabel (PoE)</td></tr>\n            <tr><td><strong>WLC (Wireless LAN Controller)</strong></td><td>Mengelola banyak AP secara terpusat</td><td>Konfigurasi, firmware, roaming — semua dari WLC</td></tr>\n            <tr><td><strong>CAPWAP Tunnel</strong></td><td>Tunnel kontrol + data antara AP dan WLC</td><td>Port UDP 5246 (control), 5247 (data)</td></tr>\n            <tr><td><strong>SSID</strong></td><td>Nama jaringan Wi-Fi yang terlihat klien</td><td>Satu AP bisa broadcast beberapa SSID (BSS)</td></tr>\n            <tr><td><strong>BSS / BSSID</strong></td><td>Basic Service Set — satu radio AP + klien-nya</td><td>BSSID = MAC address radio AP</td></tr>\n            <tr><td><strong>ESS</strong></td><td>Extended SS — banyak AP dengan SSID sama</td><td>Memungkinkan seamless roaming antar AP</td></tr>\n            <tr><td><strong>Lightweight AP</strong></td><td>AP yang semua fungsinya dikontrol WLC</td><td>AP hanya meneruskan traffic ke WLC (split-MAC)</td></tr>\n            <tr><td><strong>Autonomous AP</strong></td><td>AP standalone, konfigurasi mandiri</td><td>Cocok untuk deployment kecil tanpa WLC</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "channel-planning-mencegah-interferensi",
     "title": "Channel Planning — Mencegah Interferensi",
     "dur": "konsep",
     "body": "<p>Interferensi antar AP di channel yang sama (<em>co-channel interference</em>) adalah penyebab utama Wi-Fi lambat di lingkungan padat. Solusinya: gunakan channel non-overlapping.</p>\n\n      <p><strong>2.4 GHz:</strong> Hanya 3 channel non-overlapping: <strong>1, 6, 11</strong>. Channel lain akan saling tumpang tindih. Gunakan pola \"1-6-11\" untuk AP berdekatan.</p>\n      <p><strong>5 GHz:</strong> Tersedia 24+ channel non-overlapping (36, 40, 44, 48, 52, 56, 60, 64, 100, 104, 108...149, 153, 157, 161, 165). Lebih fleksibel, lebih sedikit gangguan.</p>\n      <p><strong>6 GHz (Wi-Fi 6E):</strong> 59 channel non-overlapping. Ideal untuk deployment baru di area sangat padat.</p>\n\n        <span>💡</span>\n        <p><strong>Tips channel planning 2.4 GHz:</strong> Jika punya 3 AP berdekatan (misal satu ruangan per lantai), assign channel 1, 6, 11 bergantian. Jangan pernah set dua AP berdekatan di channel yang sama — koneksi akan sering putus meski sinyal kuat.</p>"
    },
    {
     "id": "roaming-di-wi-fi-enterprise",
     "title": "Roaming di Wi-Fi Enterprise",
     "dur": "konsep",
     "body": "<p>Roaming terjadi ketika klien berpindah dari satu AP ke AP lain dengan SSID yang sama (ESS). Ada dua tipe:</p>\n      <ul>\n        <li><strong>Layer 2 Roaming</strong> – Klien pindah AP tapi tetap di subnet yang sama. IP address tidak berubah, cepat.</li>\n        <li><strong>Layer 3 Roaming</strong> – Klien pindah AP di subnet berbeda. WLC menangani ini via mobility tunnel agar IP tetap sama.</li>\n      </ul>\n      <p>WLC modern menggunakan protokol <strong>802.11r (Fast BSS Transition)</strong> untuk roaming yang hampir tanpa putus — penting untuk VoIP dan video call.</p>"
    },
    {
     "id": "kasus-nyata-wi-fi-lemot-di-kantor-open-space",
     "title": "Kasus Nyata — Wi-Fi Lemot di Kantor Open-Space",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> Kantor 3 lantai dengan 20 AP, semua dikonfigurasi di channel 6 (default pabrik). Keluhan: Wi-Fi sangat lambat terutama jam 9–12 siang (jam kerja). Kecepatan hanya 5–10 Mbps padahal link AP ke switch adalah GigabitEthernet.<br><br>\n        <strong>Diagnosa:</strong> Semua 20 AP di channel yang sama = co-channel interference masif. Setiap AP \"mendengar\" semua AP lain, memaksa mereka menunggu sebelum transmit (CSMA/CA mechanism).<br><br>\n        <strong>Solusi:</strong></p>\n\n      <ul>\n        <li>Lantai 1: AP A=ch1, AP B=ch6, AP C=ch11, AP D=ch1, ...</li>\n        <li>Lantai 2: Geser satu posisi: AP E=ch6, AP F=ch11, AP G=ch1, ...</li>\n        <li>Migrasikan device baru ke band 5 GHz (lebih banyak channel, lebih sedikit gangguan).</li>\n        <li>Aktifkan <strong>Band Steering</strong> di WLC untuk mendorong klien dual-band ke 5 GHz secara otomatis.</li>\n      </ul>"
    },
    {
     "id": "mode-operasi-ap",
     "title": "Mode Operasi AP",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>Infrastructure / AP Mode</strong> – Normal, klien terhubung ke AP.</li>\n        <li><strong>Repeater/Extender</strong> – AP memperluas coverage AP lain secara wireless (half the throughput).</li>\n        <li><strong>Bridge / Workgroup Bridge</strong> – Menghubungkan dua segmen kabel via wireless.</li>\n        <li><strong>Mesh</strong> – AP saling terhubung wireless membentuk mesh. Cocok untuk area luas tanpa kabel.</li>\n        <li><strong>Monitor Mode</strong> – AP mendengarkan semua channel untuk deteksi Rogue AP dan interferensi.</li>\n        <li><strong>Sniffer Mode</strong> – AP mengirimkan semua paket ke Wireshark untuk analisis.</li>\n        <li><strong>Rogue Detector Mode</strong> – AP mendeteksi AP tidak sah di jaringan kabel.</li>\n      </ul>\n\n    <!-- WIRELESS SECURITY -->"
    }
   ]
  },
  {
   "id": "wireless-security-level-menengah",
   "title": "Wireless Security – Level Menengah",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Wireless Security – Level Menengah",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Protokol</th><th>Enkripsi</th><th>Auth</th><th>Kelemahan</th><th>Status</th></tr></thead>\n          <tbody>\n            <tr><td><strong>WEP</strong></td><td>RC4 (40-bit)</td><td>Shared Key</td><td>IV reuse, mudah crack ≤5 menit</td><td>❌ Jangan digunakan</td></tr>\n            <tr><td><strong>WPA</strong></td><td>TKIP (RC4)</td><td>PSK/802.1X</td><td>TKIP rentan serangan KRACK</td><td>⚠️ Deprecated</td></tr>\n            <tr><td><strong>WPA2-Personal</strong></td><td>AES-CCMP 128-bit</td><td>PSK</td><td>Rentan offline dictionary attack</td><td>✅ Masih aman jika password kuat</td></tr>\n            <tr><td><strong>WPA2-Enterprise</strong></td><td>AES-CCMP 128-bit</td><td>802.1X/RADIUS</td><td>Perlu RADIUS server</td><td>✅✅ Sangat aman untuk enterprise</td></tr>\n            <tr><td><strong>WPA3-Personal</strong></td><td>AES-GCMP 128-bit</td><td>SAE (Dragonfly)</td><td>Butuh hardware baru</td><td>✅✅ Tahan brute-force</td></tr>\n            <tr><td><strong>WPA3-Enterprise</strong></td><td>AES-GCMP 256-bit</td><td>802.1X+SAE</td><td>Kompleks</td><td>✅✅✅ Standar tertinggi</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "wpa2-enterprise-dengan-radius-cara-kerja",
     "title": "WPA2-Enterprise dengan RADIUS — Cara Kerja",
     "dur": "konsep",
     "body": "<p>Di jaringan enterprise, setiap karyawan punya username/password sendiri (bukan satu PSK bersama). Alur autentikasi:</p>\n      <ol>\n        <li>Klien mencoba konek ke AP → AP meneruskan ke WLC.</li>\n        <li>WLC mengirim request ke <strong>RADIUS Server</strong> (misal Cisco ISE, FreeRADIUS, Windows NPS).</li>\n        <li>RADIUS memverifikasi kredensial (username/password atau sertifikat) terhadap database (AD/LDAP).</li>\n        <li>Jika valid → RADIUS kirim Access-Accept + kunci enkripsi ke WLC → klien terhubung.</li>\n        <li>Jika invalid → RADIUS kirim Access-Reject → klien ditolak.</li>\n      </ol>\n      <p>Manfaat utama: Jika karyawan resign, cukup <strong>hapus akun AD-nya</strong> — otomatis tidak bisa konek Wi-Fi. Tidak perlu ganti password PSK dan memberi tahu semua karyawan.</p>"
    },
    {
     "id": "rogue-ap-detection-mitigation",
     "title": "Rogue AP Detection & Mitigation",
     "dur": "konsep",
     "body": "<p><strong>Rogue AP</strong> adalah AP tidak sah yang terhubung ke jaringan kabel kantor — bisa dipasang oleh karyawan iseng atau penyerang untuk mencuri traffic.</p>\n      <pre><span>! Di Cisco WLC — aktifkan Rogue Detection</span>\n<span>! WLC > Security > Wireless Protection Policies > Rogue Policies</span>\n<span>! Atau via CLI WLC:</span>\n<span>WLC></span> <span>config rogue detection enable</span>\n<span>WLC></span> <span>config rogue ap timeout</span> <span>1200</span>\n<span>WLC></span> <span>show rogue ap summary</span>     <span>! Lihat daftar Rogue AP yang terdeteksi</span>\n<span>WLC></span> <span>show rogue ap detailed</span> <span>[MAC-AP]</span></pre>"
    },
    {
     "id": "wireless-security-best-practice",
     "title": "Wireless Security Best Practice",
     "dur": "konsep",
     "body": "<ul>\n        <li>Gunakan <strong>WPA2-Enterprise</strong> (802.1X) untuk jaringan korporat — satu password per user.</li>\n        <li>Pisahkan SSID tamu ke <strong>VLAN terpisah</strong> yang hanya bisa akses internet, tidak ke internal network.</li>\n        <li>Aktifkan <strong>client isolation</strong> di SSID tamu — cegah antar-device tamu saling komunikasi.</li>\n        <li>Nonaktifkan <strong>WPS</strong> — PIN 8-digit mudah di-brute-force (maksimal 10⁸ kombinasi, bisa dipecah jadi dua bagian 4-digit = hanya 11.000 percobaan).</li>\n        <li>Set minimum security ke <strong>WPA2</strong> — nonaktifkan WPA/WEP.</li>\n        <li>Gunakan <strong>Management Frame Protection (802.11w)</strong> untuk mencegah deauthentication attack.</li>\n        <li>Update firmware AP dan WLC secara rutin.</li>\n      </ul>"
    },
    {
     "id": "kasus-nyata-evil-twin-attack",
     "title": "Kasus Nyata — Evil Twin Attack",
     "dur": "konsep",
     "body": "<span>⚠</span>\n        <p><strong>Skenario:</strong> Penyerang membawa laptop ke kafe, membuat hotspot dengan SSID \"KopiBagus_WiFi\" (sama dengan SSID kafe asli) dengan sinyal yang lebih kuat. Korban terhubung ke hotspot penyerang tanpa sadar.<br><br>\n        <strong>Dampak:</strong> Semua traffic HTTP korban bisa dibaca penyerang. Login ke situs non-HTTPS, cookie session bisa dicuri.<br><br>\n        <strong>Mitigasi untuk pengguna:</strong> Selalu periksa sertifikat HTTPS, gunakan VPN, hindari login penting di jaringan publik.<br><br>\n        <strong>Mitigasi untuk admin jaringan:</strong> Implementasi 802.1X — Evil Twin tidak bisa mereplikasi RADIUS server yang sah. Aktifkan 802.11w (MFP) untuk mencegah deauth spoofing.</p>\n\n    <!-- ══════════════════════════════════════\n         SECTION: IPv6\n    ══════════════════════════════════════ -->\n\n      13 · IPv6 & Dual Stack"
    }
   ]
  },
  {
   "id": "ipv6-dual-stack",
   "title": "IPv6 & Dual Stack",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — IPv6 & Dual Stack",
     "dur": "konsep",
     "body": "<p>IPv4 hanya memiliki ~4,3 miliar alamat (32-bit) yang sudah hampir habis. <strong>IPv6</strong> hadir dengan alamat <strong>128-bit</strong>, memberikan sekitar 3,4 × 10<sup>38</sup> alamat — praktis tidak terbatas.</p>"
    },
    {
     "id": "format-alamat-ipv6",
     "title": "Format Alamat IPv6",
     "dur": "konsep",
     "body": "<p>IPv6 ditulis dalam <strong>8 grup hexadecimal</strong>, masing-masing 16-bit, dipisahkan titik dua (<code>:</code>).</p>\n      <p>Contoh: <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></p>\n\n      <h4>Aturan Penyingkatan IPv6</h4>\n      <ul>\n        <li><strong>Hilangkan nol di depan</strong> setiap grup: <code>0001</code> → <code>1</code></li>\n        <li><strong>Double colon (<code>::</code>)</strong> menggantikan satu atau lebih grup nol berturutan — <em>hanya boleh digunakan sekali</em> dalam satu alamat.</li>\n        <li>Contoh: <code>2001:0db8:0000:0000:0000:0000:0000:0001</code> → <code>2001:db8::1</code></li>\n      </ul>"
    },
    {
     "id": "tipe-alamat-ipv6",
     "title": "Tipe Alamat IPv6",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Tipe</th><th>Prefix</th><th>Setara IPv4</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Global Unicast</strong></td><td>2000::/3</td><td>IP Publik</td><td>Routable di internet, dimulai dengan 2 atau 3</td></tr>\n            <tr><td><strong>Link-Local</strong></td><td>FE80::/10</td><td>APIPA (169.254.x.x)</td><td>Auto-configured, hanya valid dalam satu link, tidak di-routing</td></tr>\n            <tr><td><strong>Unique Local</strong></td><td>FC00::/7</td><td>IP Privat (RFC 1918)</td><td>Routable dalam satu organisasi, tidak ke internet</td></tr>\n            <tr><td><strong>Loopback</strong></td><td>::1/128</td><td>127.0.0.1</td><td>Self-loop testing</td></tr>\n            <tr><td><strong>Multicast</strong></td><td>FF00::/8</td><td>224.0.0.0/4</td><td>Kirim ke grup penerima. IPv6 tidak menggunakan broadcast!</td></tr>\n            <tr><td><strong>Unspecified</strong></td><td>::/128</td><td>0.0.0.0</td><td>Source address saat belum punya alamat</td></tr>\n            <tr><td><strong>Anycast</strong></td><td>—</td><td>—</td><td>Satu alamat, dikirim ke perangkat terdekat dalam grup</td></tr>\n          </tbody>\n        </table>\n\n        <span>ℹ</span>\n        <p>IPv6 <strong>tidak memiliki broadcast</strong>. Fungsinya digantikan oleh <strong>multicast</strong>. Contoh: <code>FF02::1</code> = all nodes, <code>FF02::2</code> = all routers, <code>FF02::5</code> = all OSPF routers.</p>"
    },
    {
     "id": "ipv6-vs-ipv4-perbedaan-utama",
     "title": "IPv6 vs IPv4 — Perbedaan Utama",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Aspek</th><th>IPv4</th><th>IPv6</th></tr></thead>\n          <tbody>\n            <tr><td>Panjang alamat</td><td>32-bit (4 oktet)</td><td>128-bit (8 grup hex)</td></tr>\n            <tr><td>Jumlah alamat</td><td>~4,3 miliar</td><td>~3,4 × 10<sup>38</sup></td></tr>\n            <tr><td>Format</td><td>Desimal (192.168.1.1)</td><td>Hexadecimal (2001:db8::1)</td></tr>\n            <tr><td>Broadcast</td><td>✅ Ada</td><td>❌ Tidak ada (diganti multicast)</td></tr>\n            <tr><td>NAT</td><td>Diperlukan</td><td>Tidak diperlukan (setiap perangkat bisa punya IP publik)</td></tr>\n            <tr><td>Header</td><td>Variable (20–60 byte)</td><td>Fixed (40 byte) — lebih efisien</td></tr>\n            <tr><td>Auto-config</td><td>DHCP</td><td>SLAAC (Stateless Address Autoconfiguration) + DHCPv6</td></tr>\n            <tr><td>Keamanan</td><td>IPSec opsional</td><td>IPSec built-in</td></tr>\n          </tbody>\n        </table>\n\n    <!-- IPv6 CONFIG -->"
    }
   ]
  },
  {
   "id": "konfigurasi-ipv6",
   "title": "Konfigurasi IPv6",
   "lectures": [
    {
     "id": "enable-ipv6-konfigurasi-alamat",
     "title": "Enable IPv6 & Konfigurasi Alamat",
     "dur": "konsep",
     "body": "<pre><span>! Aktifkan IPv6 routing (wajib di router)</span>\n<span>Router(config)#</span> <span>ipv6 unicast-routing</span>\n\n<span>! Konfigurasi IPv6 di interface</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ipv6 address</span> <span>2001:db8:1::1/64</span>\n<span>Router(config-if)#</span> <span>ipv6 address</span> <span>FE80::1</span> <span>link-local</span>   <span>! Set link-local manual</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n\n<span>! Auto-konfigurasi Link-Local (otomatis dari MAC address)</span>\n<span>Router(config-if)#</span> <span>ipv6 enable</span>   <span>! Aktifkan IPv6 + generate link-local otomatis</span>\n\n<span>! SLAAC untuk klien (router harus kirim RA)</span>\n<span>Router(config-if)#</span> <span>ipv6 nd ra suppress</span>   <span>! Matikan RA jika tidak ingin SLAAC</span></pre>"
    },
    {
     "id": "ipv6-static-route",
     "title": "IPv6 Static Route",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>ipv6 route</span> <span>2001:db8:2::/64</span> <span>2001:db8:1::2</span>      <span>! Via next-hop IP</span>\n<span>Router(config)#</span> <span>ipv6 route</span> <span>::/0</span> <span>2001:db8:1::1</span>               <span>! Default route IPv6</span></pre>"
    },
    {
     "id": "ospfv3-untuk-ipv6",
     "title": "OSPFv3 untuk IPv6",
     "dur": "konsep",
     "body": "<pre><span>Router(config)#</span> <span>ipv6 router ospf</span> <span>1</span>\n<span>Router(config-rtr)#</span> <span>router-id</span> <span>1.1.1.1</span>   <span>! Router ID tetap 32-bit format IPv4</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ipv6 ospf 1 area 0</span>   <span>! Assign interface ke OSPFv3 process 1, area 0</span></pre>"
    },
    {
     "id": "dual-stack-ipv4-ipv6-bersamaan",
     "title": "Dual Stack (IPv4 + IPv6 Bersamaan)",
     "dur": "konsep",
     "body": "<p><strong>Dual Stack</strong> adalah metode transisi paling umum dari IPv4 ke IPv6. Perangkat dikonfigurasi dengan <em>kedua alamat sekaligus</em> — IPv4 dan IPv6 berjalan bersama di interface yang sama.</p>\n      <pre><span>Router(config)#</span> <span>ipv6 unicast-routing</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>192.168.1.1 255.255.255.0</span>      <span>! IPv4</span>\n<span>Router(config-if)#</span> <span>ipv6 address</span> <span>2001:db8:1::1/64</span>             <span>! IPv6</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n\n<span>! Verifikasi</span>\n<span>Router#</span> <span>show ipv6 interface brief</span>\n<span>Router#</span> <span>show ipv6 route</span>\n<span>Router#</span> <span>ping ipv6</span> <span>2001:db8:2::1</span></pre>\n\n    <!-- ══════════════════════════════════════\n         SECTION: NETWORK SECURITY\n    ══════════════════════════════════════ -->\n\n      14 · Network Security"
    }
   ]
  },
  {
   "id": "network-security-level-menengah",
   "title": "Network Security – Level Menengah",
   "lectures": [
    {
     "id": "cia-triad-defense-in-depth",
     "title": "CIA Triad & Defense-in-Depth",
     "dur": "konsep",
     "body": "<p>Tiga pilar utama keamanan jaringan:</p>\n      <ul>\n        <li><strong>Confidentiality</strong> – Data hanya bisa dibaca pihak berwenang. Tools: enkripsi (AES, TLS), VPN, ACL.</li>\n        <li><strong>Integrity</strong> – Data tidak berubah tanpa sepengetahuan. Tools: hashing (SHA-256, SHA-3), digital signature, HMAC.</li>\n        <li><strong>Availability</strong> – Sistem selalu tersedia. Tools: redundansi, failover, anti-DDoS, UPS.</li>\n      </ul>\n      <p><strong>Defense-in-Depth</strong> adalah strategi berlapis — jika satu lapisan ditembus, lapisan berikutnya masih melindungi. Contoh lapisan: Perimeter Firewall → IPS → VLAN Segmentation → ACL → Host Firewall → Endpoint AV.</p>"
    },
    {
     "id": "jenis-serangan-layer-2-yang-paling-sering-terjad",
     "title": "Jenis Serangan Layer 2 — Yang Paling Sering Terjadi di Internal Network",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Serangan</th><th>Cara Kerja</th><th>Dampak</th><th>Mitigasi di Cisco</th></tr></thead>\n          <tbody>\n            <tr>\n              <td><strong>MAC Flooding</strong></td>\n              <td>Kirim ribuan frame dengan MAC src palsu → CAM table penuh → switch broadcast semua frame ke semua port (mode hub)</td>\n              <td>Semua traffic bisa disadap oleh penyerang</td>\n              <td>Port Security: <code>switchport port-security maximum</code></td>\n            </tr>\n            <tr>\n              <td><strong>ARP Spoofing / Poisoning</strong></td>\n              <td>Kirim ARP reply palsu → korban update ARP table → traffic dialihkan ke penyerang (MITM)</td>\n              <td>Penyadapan, injeksi data, session hijacking</td>\n              <td>Dynamic ARP Inspection (DAI)</td>\n            </tr>\n            <tr>\n              <td><strong>DHCP Starvation</strong></td>\n              <td>Request DHCP lease ribuan kali dengan MAC palsu → DHCP pool habis → host baru tidak bisa dapat IP</td>\n              <td>DoS terhadap layanan DHCP</td>\n              <td>DHCP Snooping rate limiting</td>\n            </tr>\n            <tr>\n              <td><strong>Rogue DHCP</strong></td>\n              <td>Pasang DHCP server palsu → klien dapat gateway/DNS palsu → traffic dirutekan ke penyerang</td>\n              <td>MITM seluruh subnet</td>\n              <td>DHCP Snooping trusted port</td>\n            </tr>\n            <tr>\n              <td><strong>VLAN Hopping (Switch Spoofing)</strong></td>\n              <td>Kirim DTP frames → negosiasi trunk dengan switch → akses VLAN lain</td>\n              <td>Akses ke VLAN yang tidak seharusnya</td>\n              <td>Nonaktifkan DTP: <code>switchport nonegotiate</code>, ubah native VLAN</td>\n            </tr>\n            <tr>\n              <td><strong>VLAN Hopping (Double Tagging)</strong></td>\n              <td>Frame dengan dua tag VLAN — switch pertama strip tag luar, switch kedua teruskan ke VLAN target</td>\n              <td>Akses satu arah ke VLAN lain</td>\n              <td>Ubah native VLAN ke VLAN yang tidak digunakan (misal VLAN 999)</td>\n            </tr>\n            <tr>\n              <td><strong>STP Attack / BPDU Flood</strong></td>\n              <td>Kirim BPDU dengan BID rendah → memenangkan Root Bridge election → kontrol topologi jaringan</td>\n              <td>Traffic dirutekan via penyerang, MITM, DoS</td>\n              <td>Root Guard, BPDU Guard</td>\n            </tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "dhcp-snooping-konfigurasi-lengkap",
     "title": "DHCP Snooping — Konfigurasi Lengkap",
     "dur": "konsep",
     "body": "<p>DHCP Snooping membuat tabel binding (IP ↔ MAC ↔ Port ↔ VLAN) yang digunakan juga oleh DAI dan IP Source Guard.</p>\n      <pre><span>! ── AKTIFKAN DHCP SNOOPING ──────────────────────────────</span>\n<span>SW-DIST(config)#</span> <span>ip dhcp snooping</span>\n<span>SW-DIST(config)#</span> <span>ip dhcp snooping vlan 10,20,30</span>\n<span>SW-DIST(config)#</span> <span>no ip dhcp snooping information option</span>  <span>! Nonaktifkan option 82 (jika tidak ada relay)</span>\n\n<span>! ── SET TRUSTED PORT (menuju DHCP server / uplink ke Core) ─</span>\n<span>SW-DIST(config)#</span> <span>interface</span> <span>gi0/1</span>             <span>! Port uplink ke Core/DHCP server</span>\n<span>SW-DIST(config-if)#</span> <span>ip dhcp snooping trust</span>\n\n<span>! ── RATE LIMIT DHCP REQUEST (anti DHCP starvation) ────────</span>\n<span>SW-DIST(config)#</span> <span>interface range</span> <span>fa0/1-24</span>    <span>! Semua access port</span>\n<span>SW-DIST(config-if-range)#</span> <span>ip dhcp snooping limit rate</span> <span>10</span>  <span>! Max 10 req/detik per port</span>\n\n<span>! ── VERIFIKASI ──────────────────────────────────────────────</span>\n<span>SW-DIST#</span> <span>show ip dhcp snooping</span>               <span>! Status global</span>\n<span>SW-DIST#</span> <span>show ip dhcp snooping binding</span>       <span>! Tabel IP-MAC-Port-VLAN (penting untuk DAI)</span>\n<span>SW-DIST#</span> <span>show ip dhcp snooping statistics</span>    <span>! Paket yang di-drop</span></pre>"
    },
    {
     "id": "dynamic-arp-inspection-dai-konfigurasi-lengkap",
     "title": "Dynamic ARP Inspection (DAI) — Konfigurasi Lengkap",
     "dur": "konsep",
     "body": "<p>DAI memvalidasi setiap paket ARP dengan mencocokkan IP-MAC terhadap tabel DHCP Snooping. ARP yang tidak sesuai akan di-drop dan di-log.</p>\n      <pre><span>! DHCP Snooping harus aktif dulu sebelum DAI</span>\n<span>SW-DIST(config)#</span> <span>ip arp inspection vlan 10,20,30</span>\n\n<span>! Trusted port (uplink / port ke router yang punya static IP)</span>\n<span>SW-DIST(config)#</span> <span>interface</span> <span>gi0/1</span>\n<span>SW-DIST(config-if)#</span> <span>ip arp inspection trust</span>\n\n<span>! ARP ACL — untuk device dengan static IP (tidak ada di DHCP snooping binding)</span>\n<span>SW-DIST(config)#</span> <span>arp access-list</span> <span>STATIC-DEVICES</span>\n<span>SW-DIST(config-arp-nacl)#</span> <span>permit ip host</span> <span>192.168.10.1</span> <span>mac host</span> <span>001A.2B3C.4D5E</span>\n<span>SW-DIST(config)#</span> <span>ip arp inspection filter</span> <span>STATIC-DEVICES</span> <span>vlan 10</span>\n\n<span>! Rate limit ARP (anti ARP flood)</span>\n<span>SW-DIST(config)#</span> <span>interface range</span> <span>fa0/1-24</span>\n<span>SW-DIST(config-if-range)#</span> <span>ip arp inspection limit rate</span> <span>100</span>  <span>! Max 100 ARP/detik</span>\n\n<span>! Verifikasi</span>\n<span>SW-DIST#</span> <span>show ip arp inspection</span>\n<span>SW-DIST#</span> <span>show ip arp inspection statistics</span>\n<span>SW-DIST#</span> <span>show ip arp inspection vlan 10</span></pre>"
    },
    {
     "id": "ip-source-guard",
     "title": "IP Source Guard",
     "dur": "konsep",
     "body": "<p>IP Source Guard memblokir traffic dari port jika source IP-nya tidak cocok dengan tabel DHCP Snooping binding. Mencegah IP Spoofing di Layer 2.</p>\n      <pre><span>! Aktifkan di access port (DHCP Snooping harus aktif)</span>\n<span>SW-DIST(config)#</span> <span>interface</span> <span>fa0/5</span>\n<span>SW-DIST(config-if)#</span> <span>ip verify source</span>             <span>! Filter berdasarkan IP saja</span>\n<span>SW-DIST(config-if)#</span> <span>ip verify source port-security</span> <span>! Filter IP + MAC (lebih ketat)</span>\n<span>SW-DIST#</span> <span>show ip verify source</span></pre>"
    },
    {
     "id": "hardening-switch-checklist-lengkap",
     "title": "Hardening Switch — Checklist Lengkap",
     "dur": "konsep",
     "body": "<pre><span>! ── NONAKTIFKAN PORT YANG TIDAK DIGUNAKAN ───────────────</span>\n<span>SW(config)#</span> <span>interface range</span> <span>fa0/10-24</span>        <span>! Port yang tidak ada device-nya</span>\n<span>SW(config-if-range)#</span> <span>shutdown</span>\n<span>SW(config-if-range)#</span> <span>switchport mode access</span>\n<span>SW(config-if-range)#</span> <span>switchport access vlan 999</span>   <span>! Masukkan ke \"dead VLAN\"</span>\n\n<span>! ── NONAKTIFKAN DTP (cegah VLAN hopping) ────────────────</span>\n<span>SW(config)#</span> <span>interface range</span> <span>fa0/1-24</span>\n<span>SW(config-if-range)#</span> <span>switchport nonegotiate</span>        <span>! Stop DTP negotiation</span>\n\n<span>! ── UBAH NATIVE VLAN (cegah double-tag attack) ──────────</span>\n<span>SW(config)#</span> <span>interface</span> <span>gi0/1</span>                  <span>! Trunk port</span>\n<span>SW(config-if)#</span> <span>switchport trunk native vlan</span> <span>999</span>  <span>! VLAN 999 = unused</span>\n\n<span>! ── NONAKTIFKAN CDP DI ACCESS PORT ──────────────────────</span>\n<span>SW(config)#</span> <span>interface range</span> <span>fa0/1-24</span>\n<span>SW(config-if-range)#</span> <span>no cdp enable</span>                 <span>! CDP hanya ke switch/router saja</span>\n\n<span>! ── SECURE MANAGEMENT ACCESS ─────────────────────────────</span>\n<span>SW(config)#</span> <span>no service telnet</span>\n<span>SW(config)#</span> <span>line vty 0 4</span>\n<span>SW(config-line)#</span> <span>transport input ssh</span>\n<span>SW(config-line)#</span> <span>exec-timeout</span> <span>5 0</span>                 <span>! Auto-logout 5 menit idle</span>\n<span>SW(config-line)#</span> <span>login local</span>\n\n<span>! ── BANNER WARNING ───────────────────────────────────────</span>\n<span>SW(config)#</span> <span>banner motd</span> <span>#</span>\n<span>PERINGATAN: Akses tidak sah dilarang. Semua aktivitas dipantau dan dicatat.</span>\n<span>#</span></pre>\n\n    <!-- FIREWALL & IDS -->"
    }
   ]
  },
  {
   "id": "firewall-ids-ips-vpn-level-menengah",
   "title": "Firewall, IDS/IPS & VPN – Level Menengah",
   "lectures": [
    {
     "id": "evolusi-firewall",
     "title": "Evolusi Firewall",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Generasi</th><th>Jenis</th><th>Cara Kerja</th><th>Kelebihan</th><th>Kekurangan</th></tr></thead>\n          <tbody>\n            <tr><td>Gen 1</td><td>Packet Filter</td><td>Filter per paket: IP, port, protokol (stateless)</td><td>Sangat cepat, low resource</td><td>Tidak lihat context koneksi, mudah di-spoof</td></tr>\n            <tr><td>Gen 2</td><td>Stateful Firewall</td><td>Melacak state koneksi TCP (SYN, ESTABLISHED, FIN)</td><td>Mengenali koneksi sah vs spoofed</td><td>Tidak bisa baca isi payload aplikasi</td></tr>\n            <tr><td>Gen 3</td><td>Application Layer / Proxy</td><td>Inspeksi hingga Layer 7 (buka dan baca payload)</td><td>Deteksi serangan aplikasi (SQL injection, XSS)</td><td>Lambat, butuh resource besar</td></tr>\n            <tr><td>Gen 4</td><td>NGFW (Next-Gen)</td><td>Stateful + DPI + IPS + App Awareness + User Identity</td><td>Visibilitas penuh, proteksi komprehensif</td><td>Paling mahal dan resource-intensive</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "dmz-demilitarized-zone-arsitektur-umum",
     "title": "DMZ (Demilitarized Zone) — Arsitektur Umum",
     "dur": "konsep",
     "body": "<p>DMZ adalah segmen jaringan untuk server yang perlu diakses publik (web server, mail server, DNS) tapi harus terisolasi dari internal network.</p>\n      <pre><span>! Topologi: Internet → OUTSIDE → [Firewall] → DMZ (web/mail server)\n!                                            → INSIDE (LAN internal)\n!\n! Rules:\n! - Internet → DMZ: allow port 80, 443, 25 only\n! - DMZ → Internet: allow established connections\n! - DMZ → INSIDE: DENY semua (DMZ tidak boleh akses LAN)\n! - INSIDE → DMZ: allow (staff bisa akses internal server)\n! - INSIDE → Internet: allow (via NAT)\n! - Internet → INSIDE: DENY semua</span>\n\n<span>! Konfigurasi Cisco ASA (Adaptive Security Appliance) — konsep security level</span>\n<span>! Security level: 0 (tidak trusted) hingga 100 (fully trusted)</span>\n<span>! Traffic dari level tinggi ke rendah: default ALLOW</span>\n<span>! Traffic dari level rendah ke tinggi: default DENY (butuh ACL eksplisit)</span>\n<span>ASA(config)#</span> <span>interface</span> <span>GigabitEthernet0</span>\n<span>ASA(config-if)#</span> <span>nameif</span> <span>outside</span>\n<span>ASA(config-if)#</span> <span>security-level</span> <span>0</span>\n<span>ASA(config-if)#</span> <span>ip address</span> <span>203.0.113.1 255.255.255.0</span>\n<span>ASA(config)#</span> <span>interface</span> <span>GigabitEthernet1</span>\n<span>ASA(config-if)#</span> <span>nameif</span> <span>inside</span>\n<span>ASA(config-if)#</span> <span>security-level</span> <span>100</span>\n<span>ASA(config-if)#</span> <span>ip address</span> <span>192.168.1.1 255.255.255.0</span>\n<span>ASA(config)#</span> <span>interface</span> <span>GigabitEthernet2</span>\n<span>ASA(config-if)#</span> <span>nameif</span> <span>dmz</span>\n<span>ASA(config-if)#</span> <span>security-level</span> <span>50</span>\n<span>ASA(config-if)#</span> <span>ip address</span> <span>172.16.1.1 255.255.255.0</span>\n\n<span>! Allow traffic dari outside ke DMZ port 80 dan 443</span>\n<span>ASA(config)#</span> <span>access-list OUTSIDE-TO-DMZ permit tcp any host</span> <span>172.16.1.10</span> <span>eq</span> <span>80</span>\n<span>ASA(config)#</span> <span>access-list OUTSIDE-TO-DMZ permit tcp any host</span> <span>172.16.1.10</span> <span>eq</span> <span>443</span>\n<span>ASA(config)#</span> <span>access-group OUTSIDE-TO-DMZ in interface</span> <span>outside</span></pre>"
    },
    {
     "id": "ids-vs-ips-lebih-dalam",
     "title": "IDS vs IPS — Lebih Dalam",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Aspek</th><th>IDS</th><th>IPS</th></tr></thead>\n          <tbody>\n            <tr><td>Posisi di jaringan</td><td>Out-of-band (TAP/SPAN port)</td><td>Inline (serial path — traffic lewat IPS)</td></tr>\n            <tr><td>Aksi saat serangan</td><td>Alert/log saja — tidak blokir</td><td>Blokir, reset koneksi, quarantine</td></tr>\n            <tr><td>Dampak latency</td><td>Nol (pasif)</td><td>Tambah 1–5ms (masih acceptable)</td></tr>\n            <tr><td>False positive impact</td><td>Alarm palsu — admin investigate</td><td>Alarm palsu → traffic SAH diblokir (berbahaya!)</td></tr>\n            <tr><td>Mode deteksi</td><td colspan=\"2\">Signature-based, Anomaly-based, Policy-based, Reputation-based</td></tr>\n            <tr><td>Contoh produk</td><td>Snort (passive), Suricata (passive), Zeek</td><td>Cisco Firepower (Snort engine), Palo Alto IPS, Suricata (inline)</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "metode-deteksi-ids-ips",
     "title": "Metode Deteksi IDS/IPS",
     "dur": "konsep",
     "body": "<ul>\n        <li><strong>Signature-based</strong> – Cocokkan traffic dengan database pola serangan yang diketahui. Akurat untuk serangan lama, tidak bisa deteksi zero-day.</li>\n        <li><strong>Anomaly-based</strong> – Belajar pola traffic normal, alert jika ada penyimpangan. Bisa deteksi serangan baru, tapi banyak false positive.</li>\n        <li><strong>Policy-based</strong> – Alert jika traffic melanggar policy yang ditetapkan admin (misal: ada traffic ke port 23/Telnet dari internal).</li>\n        <li><strong>Reputation-based</strong> – Block traffic dari IP yang tercantum dalam blacklist (known malicious IPs, botnet C&C).</li>\n      </ul>"
    },
    {
     "id": "site-to-site-vpn-dengan-ipsec-konsep-konfigurasi",
     "title": "Site-to-Site VPN dengan IPSec — Konsep & Konfigurasi",
     "dur": "konsep",
     "body": "<p>IPSec VPN mengenkripsi traffic antara dua lokasi. Terdiri dari dua fase: <strong>IKE Phase 1</strong> (negosiasi parameter, bangun secure tunnel) dan <strong>IKE Phase 2</strong> (enkripsi data aktual).</p>\n      <pre><span>! ── SITE-TO-SITE IPSEC VPN (Cisco IOS) ─────────────────</span>\n<span>! Topologi: R1 (10.1.1.0/24) ←── IPSec VPN ───→ R2 (10.2.2.0/24)\n! R1 public IP: 203.0.113.1 | R2 public IP: 198.51.100.1</span>\n\n<span>! ── DI R1 ───────────────────────────────────────────────</span>\n<span>! Phase 1: IKE Policy</span>\n<span>R1(config)#</span> <span>crypto isakmp policy</span> <span>10</span>\n<span>R1(config-isakmp)#</span> <span>encryption aes 256</span>\n<span>R1(config-isakmp)#</span> <span>hash sha256</span>\n<span>R1(config-isakmp)#</span> <span>authentication pre-share</span>\n<span>R1(config-isakmp)#</span> <span>group 14</span>                    <span>! DH group 14 (2048-bit)</span>\n<span>R1(config)#</span> <span>crypto isakmp key</span> <span>VPNsecretKey!</span> <span>address</span> <span>198.51.100.1</span>\n\n<span>! Phase 2: IPSec Transform Set</span>\n<span>R1(config)#</span> <span>crypto ipsec transform-set</span> <span>VPN-TSET</span> <span>esp-aes 256</span> <span>esp-sha256-hmac</span>\n<span>R1(cfg-crypto-trans)#</span> <span>mode tunnel</span>\n\n<span>! ACL traffic yang akan di-enkripsi (interesting traffic)</span>\n<span>R1(config)#</span> <span>access-list 100 permit ip</span> <span>10.1.1.0 0.0.0.255</span> <span>10.2.2.0 0.0.0.255</span>\n\n<span>! Crypto Map — ikat semua komponen</span>\n<span>R1(config)#</span> <span>crypto map</span> <span>VPN-MAP 10 ipsec-isakmp</span>\n<span>R1(config-crypto-map)#</span> <span>set peer</span> <span>198.51.100.1</span>\n<span>R1(config-crypto-map)#</span> <span>set transform-set</span> <span>VPN-TSET</span>\n<span>R1(config-crypto-map)#</span> <span>match address</span> <span>100</span>\n<span>R1(config)#</span> <span>interface</span> <span>fa0/0</span>                    <span>! Interface public/WAN</span>\n<span>R1(config-if)#</span> <span>crypto map</span> <span>VPN-MAP</span>\n\n<span>! Verifikasi</span>\n<span>R1#</span> <span>show crypto isakmp sa</span>                        <span>! Status Phase 1</span>\n<span>R1#</span> <span>show crypto ipsec sa</span>                         <span>! Status Phase 2 + statistik paket</span>\n<span>R1#</span> <span>debug crypto isakmp</span>                          <span>! Debug negosiasi (matikan setelah selesai!)</span></pre>\n\n        <span>💡</span>\n        <p><strong>Checklist VPN tidak terbentuk:</strong> (1) Pastikan <em>interesting traffic</em> ACL di kedua sisi mirror (R1: src=10.1.1.0, dst=10.2.2.0 ↔ R2: src=10.2.2.0, dst=10.1.1.0). (2) Pre-shared key harus identik. (3) IKE policy parameter harus sama di kedua sisi. (4) Pastikan route ke peer VPN ada di routing table.</p>"
    },
    {
     "id": "kasus-nyata-arp-poisoning-di-kantor",
     "title": "Kasus Nyata — ARP Poisoning di Kantor",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> Salah satu karyawan mengeluh password email-nya dicuri meski sudah diganti berkali-kali. IT admin mengecek log switch dan menemukan ada PC yang terus-menerus mengirim ARP reply dengan MAC address sendiri untuk semua IP di subnet.<br><br>\n        <strong>Analisis:</strong> PC tersebut menjalankan software ARP poisoning (bisa Ettercap atau Cain &amp; Abel). Semua traffic HTTP/SMTP di subnet dialihkan melalui PC penyerang sebelum diteruskan ke gateway — semua password yang tidak terenkripsi terbaca.<br><br>\n        <strong>Solusi jangka pendek:</strong> Isolasi port switch PC tersebut segera (<code>shutdown</code>).<br>\n        <strong>Solusi permanen:</strong></p>\n\n      <pre><span>! Aktifkan DAI + DHCP Snooping di seluruh switch akses</span>\n<span>SW(config)#</span> <span>ip dhcp snooping</span>\n<span>SW(config)#</span> <span>ip dhcp snooping vlan 10</span>\n<span>SW(config)#</span> <span>ip arp inspection vlan 10</span>\n<span>! Sekarang setiap ARP palsu akan langsung di-drop dan port penyerang di-error-disable</span></pre>\n\n    <!-- ══════════════════════════════════════\n         SECTION: WAN\n    ══════════════════════════════════════ -->\n\n      15 · WAN Technologies"
    }
   ]
  },
  {
   "id": "wan-technologies",
   "title": "WAN Technologies",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — WAN Technologies",
     "dur": "konsep",
     "body": "<p>WAN (Wide Area Network) menghubungkan jaringan yang terpisah secara geografis, biasanya melalui infrastruktur milik ISP atau telco.</p>"
    },
    {
     "id": "perbandingan-teknologi-wan",
     "title": "Perbandingan Teknologi WAN",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Teknologi</th><th>Kecepatan</th><th>Status</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Leased Line</strong></td><td>64 Kbps – 622 Mbps</td><td>Legacy</td><td>Koneksi point-to-point dedicated. Mahal tapi reliable.</td></tr>\n            <tr><td><strong>Frame Relay</strong></td><td>64 Kbps – 45 Mbps</td><td>Legacy</td><td>Packet-switched, berbagi bandwidth. Sudah jarang digunakan.</td></tr>\n            <tr><td><strong>DSL</strong></td><td>1–100 Mbps</td><td>Aktif</td><td>Melalui kabel telepon. ADSL (asymmetric) paling umum.</td></tr>\n            <tr><td><strong>Cable (HFC)</strong></td><td>10–1000 Mbps</td><td>Aktif</td><td>Melalui kabel TV coaxial. Shared bandwidth dengan tetangga.</td></tr>\n            <tr><td><strong>Fiber Optic</strong></td><td>100 Mbps – 100+ Gbps</td><td>Aktif</td><td>Kecepatan tertinggi, latensi terendah. Metro Ethernet.</td></tr>\n            <tr><td><strong>MPLS</strong></td><td>Varies (bergantung ISP)</td><td>Aktif</td><td>Label switching. Populer untuk enterprise multi-site.</td></tr>\n            <tr><td><strong>SD-WAN</strong></td><td>Bergantung link fisik</td><td>Modern</td><td>Software-defined WAN. Manajemen terpusat, overlay di berbagai link.</td></tr>\n            <tr><td><strong>4G/5G</strong></td><td>10–1000 Mbps</td><td>Aktif</td><td>WAN wireless via jaringan seluler. Backup atau remote site.</td></tr>\n          </tbody>\n        </table>\n\n    <!-- PPP & HDLC -->"
    }
   ]
  },
  {
   "id": "ppp-hdlc",
   "title": "PPP & HDLC",
   "lectures": [
    {
     "id": "hdlc-high-level-data-link-control",
     "title": "HDLC (High-Level Data Link Control)",
     "dur": "konsep",
     "body": "<p>Protokol Layer 2 default di serial interface Cisco. <strong>Proprietary Cisco</strong> — tidak kompatibel dengan vendor lain tanpa modifikasi.</p>\n      <pre><span>Router(config)#</span> <span>interface</span> <span>serial 0/0/0</span>\n<span>Router(config-if)#</span> <span>encapsulation hdlc</span>   <span>! Default, biasanya tidak perlu ditulis</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>10.0.0.1 255.255.255.252</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n<span>Router(config-if)#</span> <span>clock rate</span> <span>64000</span>   <span>! Wajib di sisi DCE (Data Circuit-terminating Equipment)</span></pre>"
    },
    {
     "id": "ppp-point-to-point-protocol",
     "title": "PPP (Point-to-Point Protocol)",
     "dur": "konsep",
     "body": "<p>Protokol Layer 2 standar terbuka (RFC 1661) untuk koneksi serial. Mendukung <strong>autentikasi</strong> (PAP/CHAP) dan <strong>multilink</strong>. Kompatibel antar vendor.</p>\n      <pre><span>Router(config)#</span> <span>interface</span> <span>serial 0/0/0</span>\n<span>Router(config-if)#</span> <span>encapsulation ppp</span>\n<span>Router(config-if)#</span> <span>ip address</span> <span>10.0.0.1 255.255.255.252</span>\n<span>Router(config-if)#</span> <span>no shutdown</span>\n\n<span>! PPP Authentication dengan CHAP (lebih aman dari PAP)</span>\n<span>Router(config)#</span> <span>hostname</span> <span>R1</span>\n<span>R1(config)#</span> <span>username</span> <span>R2</span> <span>password</span> <span>cisco</span>   <span>! Username = hostname router lawan</span>\n<span>R1(config)#</span> <span>interface</span> <span>serial 0/0/0</span>\n<span>R1(config-if)#</span> <span>ppp authentication chap</span>\n\n<span>! PPP Multilink (gabungkan beberapa serial link)</span>\n<span>R1(config)#</span> <span>interface multilink 1</span>\n<span>R1(config-if)#</span> <span>ip address</span> <span>10.0.0.1 255.255.255.252</span>\n<span>R1(config-if)#</span> <span>ppp multilink</span>\n<span>R1(config-if)#</span> <span>ppp multilink group 1</span>\n<span>R1(config)#</span> <span>interface</span> <span>serial 0/0/0</span>\n<span>R1(config-if)#</span> <span>encapsulation ppp</span>\n<span>R1(config-if)#</span> <span>ppp multilink group 1</span></pre>\n\n        <table>\n          <thead><tr><th>Aspek</th><th>PAP</th><th>CHAP</th></tr></thead>\n          <tbody>\n            <tr><td>Keamanan</td><td>Rendah (plaintext)</td><td>Tinggi (MD5 challenge-response)</td></tr>\n            <tr><td>Password dikirim</td><td>Sekali saat setup</td><td>Tidak pernah — hanya hash</td></tr>\n            <tr><td>Proteksi replay attack</td><td>❌</td><td>✅ (menggunakan random challenge)</td></tr>\n            <tr><td>Rekomendasi</td><td>Tidak disarankan</td><td>✅ Gunakan ini</td></tr>\n          </tbody>\n        </table>\n\n    <!-- MPLS -->"
    }
   ]
  },
  {
   "id": "mpls-multiprotocol-label-switching",
   "title": "MPLS (Multiprotocol Label Switching)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — MPLS (Multiprotocol Label Switching)",
     "dur": "konsep",
     "body": "<p>MPLS adalah teknologi forwarding paket yang menggunakan <strong>label pendek</strong> (bukan IP address) untuk meneruskan paket. Jauh lebih cepat daripada IP routing tradisional karena router hanya melihat label, bukan melakukan longest-prefix match.</p>"
    },
    {
     "id": "cara-kerja-mpls",
     "title": "Cara Kerja MPLS",
     "dur": "konsep",
     "body": "<ol>\n        <li><strong>Ingress LER</strong> (Label Edge Router) menerima paket IP dan menambahkan label MPLS (label push).</li>\n        <li><strong>LSR</strong> (Label Switching Router) di tengah mem-forward paket hanya berdasarkan label (swap label).</li>\n        <li><strong>Egress LER</strong> melepas label (label pop) dan meneruskan sebagai paket IP biasa.</li>\n      </ol>\n\n        <table>\n          <thead><tr><th>Istilah</th><th>Penjelasan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Label</strong></td><td>Header 32-bit yang disisipkan antara Layer 2 dan Layer 3 header (sering disebut \"Layer 2.5\")</td></tr>\n            <tr><td><strong>LSP</strong></td><td>Label Switched Path — jalur tetap yang ditentukan untuk paket MPLS</td></tr>\n            <tr><td><strong>LDP</strong></td><td>Label Distribution Protocol — protokol distribusi label antar LSR</td></tr>\n            <tr><td><strong>FEC</strong></td><td>Forwarding Equivalence Class — grup paket yang diperlakukan sama (same label, same path)</td></tr>\n            <tr><td><strong>VRF</strong></td><td>Virtual Routing and Forwarding — tabel routing virtual terpisah per customer di MPLS VPN</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-mpls-dasar",
     "title": "Konfigurasi MPLS Dasar",
     "dur": "konsep",
     "body": "<pre><span>! Aktifkan MPLS LDP di router</span>\n<span>Router(config)#</span> <span>mpls ip</span>   <span>! Aktifkan MPLS secara global</span>\n<span>Router(config)#</span> <span>mpls label protocol ldp</span>\n\n<span>! Aktifkan MPLS di interface</span>\n<span>Router(config)#</span> <span>interface</span> <span>fa0/0</span>\n<span>Router(config-if)#</span> <span>mpls ip</span>\n\n<span>! Verifikasi</span>\n<span>Router#</span> <span>show mpls interfaces</span>\n<span>Router#</span> <span>show mpls ldp neighbor</span>\n<span>Router#</span> <span>show mpls forwarding-table</span></pre>\n\n    <!-- ══════════════════════════════════════\n         SECTION: QoS\n    ══════════════════════════════════════ -->\n\n      16 · QoS"
    }
   ]
  },
  {
   "id": "qos-quality-of-service",
   "title": "QoS (Quality of Service)",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — QoS (Quality of Service)",
     "dur": "konsep",
     "body": "<p>QoS adalah mekanisme untuk <strong>memprioritaskan jenis traffic tertentu</strong> di jaringan. Penting saat bandwidth terbatas agar aplikasi kritis (VoIP, video conference) mendapat prioritas lebih tinggi dari traffic biasa (download file, browsing).</p>"
    },
    {
     "id": "masalah-yang-diselesaikan-qos",
     "title": "Masalah yang Diselesaikan QoS",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Masalah</th><th>Penjelasan</th><th>Dampak</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Bandwidth</strong></td><td>Kapasitas link tidak cukup untuk semua traffic</td><td>Traffic lambat, koneksi terputus</td></tr>\n            <tr><td><strong>Delay/Latency</strong></td><td>Waktu tempuh paket dari sumber ke tujuan terlalu tinggi</td><td>VoIP terdengar delay, video choppy</td></tr>\n            <tr><td><strong>Jitter</strong></td><td>Variasi delay antar paket tidak konsisten</td><td>Audio/video putus-putus</td></tr>\n            <tr><td><strong>Packet Loss</strong></td><td>Paket dibuang karena antrian penuh</td><td>Retransmit, kualitas buruk</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "dscp-ip-precedence-layer-3-marking",
     "title": "DSCP & IP Precedence (Layer 3 Marking)",
     "dur": "konsep",
     "body": "<p>Paket IP ditandai menggunakan field <strong>DSCP</strong> (Differentiated Services Code Point) di header IP untuk menentukan prioritasnya.</p>\n\n        <table>\n          <thead><tr><th>DSCP Value</th><th>Nama</th><th>Contoh Penggunaan</th></tr></thead>\n          <tbody>\n            <tr><td>EF (46)</td><td>Expedited Forwarding</td><td>VoIP media (prioritas tertinggi)</td></tr>\n            <tr><td>AF41 (34)</td><td>Assured Forwarding 4-1</td><td>Video conference</td></tr>\n            <tr><td>AF31 (26)</td><td>Assured Forwarding 3-1</td><td>Streaming video</td></tr>\n            <tr><td>AF21 (18)</td><td>Assured Forwarding 2-1</td><td>Transactional data</td></tr>\n            <tr><td>AF11 (10)</td><td>Assured Forwarding 1-1</td><td>Bulk data</td></tr>\n            <tr><td>CS0 / BE (0)</td><td>Best Effort</td><td>Default — traffic biasa</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "metode-qos",
     "title": "Metode QoS",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Mekanisme</th><th>Fungsi</th><th>Keterangan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Classification</strong></td><td>Identifikasi jenis traffic</td><td>Berdasarkan ACL, DSCP, protokol, port</td></tr>\n            <tr><td><strong>Marking</strong></td><td>Tandai paket dengan nilai prioritas</td><td>Set DSCP/CoS value</td></tr>\n            <tr><td><strong>Queuing</strong></td><td>Antrian berprioritas</td><td>CBWFQ, LLQ untuk VoIP</td></tr>\n            <tr><td><strong>Scheduling</strong></td><td>Tentukan urutan paket yang dikirim</td><td>FIFO, WFQ, PQ</td></tr>\n            <tr><td><strong>Policing</strong></td><td>Batasi traffic, buang yang melebihi batas</td><td>Traffic yang melebihi rate di-drop</td></tr>\n            <tr><td><strong>Shaping</strong></td><td>Batasi traffic, buffer yang melebihi batas</td><td>Traffic di-delay (buffered), tidak di-drop</td></tr>\n            <tr><td><strong>Compression</strong></td><td>Kompres header paket</td><td>cRTP untuk VoIP header compression</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "konfigurasi-qos-dengan-mqc-modular-qos-cli",
     "title": "Konfigurasi QoS dengan MQC (Modular QoS CLI)",
     "dur": "konsep",
     "body": "<pre><span>! Step 1: Class-map — klasifikasikan traffic</span>\n<span>Router(config)#</span> <span>class-map match-any</span> <span>VOIP-CLASS</span>\n<span>Router(config-cmap)#</span> <span>match ip dscp ef</span>             <span>! Match DSCP EF (VoIP)</span>\n\n<span>Router(config)#</span> <span>class-map match-any</span> <span>VIDEO-CLASS</span>\n<span>Router(config-cmap)#</span> <span>match ip dscp af41</span>           <span>! Match DSCP AF41 (Video)</span>\n\n<span>! Step 2: Policy-map — tentukan tindakan per class</span>\n<span>Router(config)#</span> <span>policy-map</span> <span>WAN-QOS-POLICY</span>\n<span>Router(config-pmap)#</span> <span>class</span> <span>VOIP-CLASS</span>\n<span>Router(config-pmap-c)#</span> <span>priority</span> <span>128</span>               <span>! LLQ: prioritas 128 kbps untuk VoIP</span>\n<span>Router(config-pmap)#</span> <span>class</span> <span>VIDEO-CLASS</span>\n<span>Router(config-pmap-c)#</span> <span>bandwidth</span> <span>512</span>              <span>! Jamin 512 kbps untuk video</span>\n<span>Router(config-pmap)#</span> <span>class class-default</span>\n<span>Router(config-pmap-c)#</span> <span>fair-queue</span>                 <span>! WFQ untuk traffic lainnya</span>\n\n<span>! Step 3: Service-policy — terapkan ke interface</span>\n<span>Router(config)#</span> <span>interface</span> <span>serial 0/0/0</span>\n<span>Router(config-if)#</span> <span>service-policy output</span> <span>WAN-QOS-POLICY</span>\n\n<span>! Verifikasi</span>\n<span>Router#</span> <span>show policy-map interface</span> <span>serial 0/0/0</span></pre>\n\n    <!-- ══════════════════════════════════════\n         SECTION: TROUBLESHOOTING\n    ══════════════════════════════════════ -->\n\n      17 · Troubleshooting"
    }
   ]
  },
  {
   "id": "network-troubleshooting-level-menengah",
   "title": "Network Troubleshooting – Level Menengah",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Network Troubleshooting – Level Menengah",
     "dur": "konsep",
     "body": "<p>Troubleshooting yang efektif bukan trial-and-error — melainkan proses sistematis berbasis data. Kemampuan ini yang membedakan network engineer junior dari senior.</p>"
    },
    {
     "id": "metodologi-7-langkah-cisco-model",
     "title": "Metodologi 7 Langkah (Cisco Model)",
     "dur": "konsep",
     "body": "<ol>\n        <li><strong>Define the Problem</strong> – Apa gejalanya? Siapa terpengaruh (satu user, satu VLAN, semua)? Kapan mulai? Ada perubahan konfigurasi/hardware baru-baru ini?</li>\n        <li><strong>Gather Information</strong> – Kumpulkan output <code>show</code>, log syslog, output CDP/LLDP, ping, traceroute dari berbagai titik.</li>\n        <li><strong>Analyze Information</strong> – Bandingkan dengan kondisi normal (baseline). Cari pola — apakah terjadi intermittent atau terus-menerus?</li>\n        <li><strong>Eliminate Possible Causes</strong> – Persempit berdasarkan data. Jika ping berhasil, eliminasi Layer 1–3. Fokus ke Layer 4+.</li>\n        <li><strong>Propose Hypothesis</strong> – Tentukan penyebab paling mungkin dengan confidence level tertinggi.</li>\n        <li><strong>Test Hypothesis</strong> – Buat satu perubahan kecil dan ukur hasilnya. Jangan ubah banyak hal sekaligus.</li>\n        <li><strong>Solve & Document</strong> – Setelah solved, dokumentasikan: gejala, penyebab root cause, solusi, waktu resolusi. Penting untuk referensi tim.</li>\n      </ol>"
    },
    {
     "id": "pendekatan-per-layer-kapan-digunakan",
     "title": "Pendekatan per Layer — Kapan Digunakan",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Pendekatan</th><th>Arah</th><th>Ideal untuk</th><th>Kelemahan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Bottom-Up</strong></td><td>L1 → L7</td><td>Masalah tidak diketahui. Baru install infrastruktur baru.</td><td>Lambat jika masalah ada di layer atas</td></tr>\n            <tr><td><strong>Top-Down</strong></td><td>L7 → L1</td><td>Satu aplikasi spesifik gagal, yang lain normal</td><td>Butuh akses ke semua layer aplikasi</td></tr>\n            <tr><td><strong>Divide &amp; Conquer</strong></td><td>Mulai L3</td><td>✅ Paling efisien. Test ping dulu — atas atau bawah L3?</td><td>Kadang miss masalah L2 yang subtle</td></tr>\n            <tr><td><strong>Follow the Path</strong></td><td>Src → Dst</td><td>Masalah intermittent / terjadi di hop tertentu</td><td>Perlu akses ke semua perangkat di path</td></tr>\n            <tr><td><strong>Compare Configuration</strong></td><td>—</td><td>Ada perangkat baru/pengganti — bandingkan config dengan yang lama</td><td>Butuh baseline config yang tersimpan</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "toolkit-troubleshooting-per-layer-lengkap",
     "title": "Toolkit Troubleshooting per Layer — Lengkap",
     "dur": "konsep",
     "body": "<h4>Layer 1 — Physical</h4>\n      <pre><span>Switch#</span> <span>show interfaces</span> <span>fa0/1</span>\n<span>! Output penting yang harus dicek:\n! \"FastEthernet0/1 is up, line protocol is down\" → L2 masalah (encaps, duplex)\n! \"FastEthernet0/1 is administratively down\" → port di-shutdown, cek no shutdown\n! Input errors > 0 → kemungkinan duplex mismatch atau kabel rusak\n! CRC errors tinggi → kabel buruk, interferensi, atau collision domain\n! Runts (< 64 byte) → collision, duplex mismatch\n! Giants (> 1518 byte) → jumbo frames, atau VLAN tagging issue\n! Input drops → buffer overflow, terlalu banyak traffic masuk</span>\n\n<span>Switch#</span> <span>show interfaces</span> <span>fa0/1</span> <span>counters</span>      <span>! Counter detail TX/RX per interface</span>\n<span>Switch#</span> <span>show interfaces</span> <span>fa0/1</span> <span>status</span>        <span>! Status singkat: speed, duplex, VLAN</span></pre>\n\n      <h4>Layer 2 — Data Link / Switching</h4>\n      <pre><span>Switch#</span> <span>show mac address-table</span>                   <span>! Cek apakah MAC terdaftar di port yang benar</span>\n<span>Switch#</span> <span>show mac address-table address</span> <span>001A.2B3C.4D5E</span>  <span>! Cari MAC spesifik</span>\n<span>Switch#</span> <span>show mac address-table dynamic</span>             <span>! Hanya MAC yang dipelajari dinamis</span>\n<span>Switch#</span> <span>show vlan brief</span>                           <span>! Port ada di VLAN yang benar?</span>\n<span>Switch#</span> <span>show interfaces trunk</span>                     <span>! VLAN allowed di trunk? Native VLAN cocok?</span>\n<span>Switch#</span> <span>show spanning-tree vlan 10</span>               <span>! Ada port yang stuck di Blocking?</span>\n<span>Switch#</span> <span>show cdp neighbors detail</span>               <span>! Verify physical connectivity ke neighbor</span></pre>\n\n      <h4>Layer 3 — Routing</h4>\n      <pre><span>Router#</span> <span>show ip interface brief</span>      <span>! Semua interface up/up? Ada yang admin down?</span>\n<span>Router#</span> <span>show ip route</span>               <span>! Ada route ke network tujuan?</span>\n<span>Router#</span> <span>show ip route</span> <span>192.168.2.0</span>  <span>! Route spesifik ke subnet ini</span>\n<span>Router#</span> <span>show ip arp</span>                 <span>! ARP table — gateway punya ARP untuk tujuan?</span>\n<span>Router#</span> <span>show ip arp</span> <span>192.168.1.1</span>    <span>! ARP untuk IP spesifik</span>\n\n<span>! Extended ping — lebih powerful dari ping biasa</span>\n<span>Router#</span> <span>ping</span> <span>192.168.2.1</span> <span>source</span> <span>192.168.1.1</span>   <span>! Ping dari interface spesifik</span>\n<span>Router#</span> <span>ping</span> <span>192.168.2.1</span> <span>repeat</span> <span>100</span>            <span>! 100 kali ping (deteksi packet loss intermittent)</span>\n<span>Router#</span> <span>ping</span> <span>192.168.2.1</span> <span>size</span> <span>1500</span>             <span>! Test dengan packet besar (deteksi MTU issue)</span>\n\n<span>! Traceroute — identify di mana paket berhenti</span>\n<span>Router#</span> <span>traceroute</span> <span>8.8.8.8</span>\n<span>Router#</span> <span>traceroute</span> <span>8.8.8.8</span> <span>source</span> <span>fa0/0</span>          <span>! Trace dari interface tertentu</span></pre>\n\n      <h4>Layer 4–7 — Transport & Application</h4>\n      <pre><span>! Test port TCP menggunakan Telnet (bukan untuk remote access — untuk test)</span>\n<span>Router#</span> <span>telnet</span> <span>192.168.1.10 80</span>     <span>! Terhubung = port 80 terbuka. Connection refused = port tutup.</span>\n<span>Router#</span> <span>telnet</span> <span>192.168.1.10 443</span>\n<span>Router#</span> <span>telnet</span> <span>192.168.1.10 22</span>\n\n<span>! Cek apakah ACL memblokir traffic</span>\n<span>Router#</span> <span>show ip access-lists</span>        <span>! Lihat hit count — rule mana yang terkena?</span>\n<span>Router#</span> <span>show ip access-lists</span> <span>100</span>    <span>! ACL spesifik nomor 100</span>\n\n<span>! Cek NAT</span>\n<span>Router#</span> <span>show ip nat translations</span>     <span>! Ada translasi aktif? Inside local ↔ Inside global?</span>\n<span>Router#</span> <span>show ip nat statistics</span>       <span>! Total hits, miss, expired</span>\n<span>Router#</span> <span>debug ip nat</span>                 <span>! Real-time NAT debug (matikan sesudahnya!)</span></pre>"
    },
    {
     "id": "kasus-nyata-1-internet-tidak-bisa-tapi-lan-bisa",
     "title": "Kasus Nyata 1 — \"Internet Tidak Bisa Tapi LAN Bisa\"",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Gejala:</strong> PC bisa ping sesama PC di LAN, tapi tidak bisa akses internet dan tidak bisa ping ke 8.8.8.8.</p>\n\n      <pre><span>! Step 1: Cek apakah ada default route</span>\n<span>Router#</span> <span>show ip route</span>\n<span>! Jika tidak ada baris \"S* 0.0.0.0/0\" → default route hilang → tambahkan:\n! ip route 0.0.0.0 0.0.0.0 [IP-ISP-GATEWAY]</span>\n\n<span>! Step 2: Cek apakah interface WAN up</span>\n<span>Router#</span> <span>show ip interface brief</span>\n<span>! fa0/0 down/down → kabel ISP, atau port ISP belum aktif</span>\n\n<span>! Step 3: Cek NAT — apakah translasi terjadi?</span>\n<span>Router#</span> <span>show ip nat translations</span>\n<span>! Jika kosong saat ada PC ping → NAT tidak bekerja\n! Periksa: ip nat inside/outside di interface yang benar?\n! access-list 1 mencakup subnet PC?</span>\n\n<span>! Step 4: Ping dari router sendiri ke ISP dan internet</span>\n<span>Router#</span> <span>ping</span> <span>203.0.113.1</span>      <span>! IP gateway ISP — berhasil? Jika tidak, ISP link masalah</span>\n<span>Router#</span> <span>ping</span> <span>8.8.8.8</span>          <span>! Jika berhasil tapi PC tidak bisa → masalah di NAT atau routing ke PC</span></pre>"
    },
    {
     "id": "kasus-nyata-2-ospf-neighbor-tidak-terbentuk",
     "title": "Kasus Nyata 2 — \"OSPF Neighbor Tidak Terbentuk\"",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Gejala:</strong> Dua router baru dipasang dengan OSPF, tapi <code>show ip ospf neighbor</code> selalu kosong.</p>\n\n      <pre><span>R1#</span> <span>show ip ospf neighbor</span>        <span>! Kosong → OSPF neighbor tidak terbentuk</span>\n\n<span>! Checklist OSPF neighbor tidak terbentuk:</span>\n<span>! 1. Cek apakah interface masuk ke OSPF</span>\n<span>R1#</span> <span>show ip ospf interface</span> <span>fa0/0</span>\n<span>! Jika tidak muncul → network statement tidak cocok dengan IP interface</span>\n\n<span>! 2. Cek area — harus sama di kedua router</span>\n<span>R1#</span> <span>show ip ospf</span>               <span>! Lihat area yang dikonfigurasi</span>\n\n<span>! 3. Cek hello/dead timer — harus identik</span>\n<span>R1#</span> <span>show ip ospf interface</span> <span>fa0/0</span> <span>! Hello interval: 10, Dead interval: 40 (default)</span>\n<span>! Jika berbeda, samakan:</span>\n<span>R1(config-if)#</span> <span>ip ospf hello-interval</span> <span>10</span>\n<span>R1(config-if)#</span> <span>ip ospf dead-interval</span> <span>40</span>\n\n<span>! 4. Cek subnet mask — interface harus dalam subnet yang sama</span>\n<span>R1#</span> <span>show ip interface brief</span>     <span>! IP R1: 10.1.1.1/24 | IP R2: 10.1.2.1/24 → beda subnet!</span>\n\n<span>! 5. Cek apakah ada ACL yang memblokir multicast 224.0.0.5</span>\n<span>R1#</span> <span>show ip access-lists</span>\n<span>! OSPF menggunakan multicast 224.0.0.5 (all OSPF routers) dan 224.0.0.6</span>\n\n<span>! 6. Debug OSPF untuk melihat alasan penolakan</span>\n<span>R1#</span> <span>debug ip ospf adj</span>            <span>! Debug adjacency formation</span>\n<span>! Matikan setelah selesai: undebug all</span></pre>"
    },
    {
     "id": "kasus-nyata-3-port-tiba-tiba-err-disabled",
     "title": "Kasus Nyata 3 — \"Port Tiba-Tiba err-disabled\"",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Gejala:</strong> Seorang karyawan tiba-tiba tidak bisa koneksi ke jaringan. LED port switch mati. IT dipanggil.</p>\n\n      <pre><span>Switch#</span> <span>show interfaces</span> <span>fa0/15</span>\n<span>! Output: \"FastEthernet0/15 is err-disabled\"</span>\n<span>Switch#</span> <span>show interfaces status err-disabled</span>   <span>! Lihat semua port err-disabled + penyebabnya</span>\n\n<span>! Penyebab umum err-disabled:\n! - bpduguard → karyawan colok switch ke port akses\n! - psecure-violation → device baru dengan MAC yang tidak dikenal\n! - channel-misconfig → EtherChannel salah konfigurasi\n! - loopback → kabel loop terpasang di port\n\n! Identifikasi penyebab:</span>\n<span>Switch#</span> <span>show log</span> <span>! Cari baris \"%SPANTREE-2-BLOCK_BPDUGUARD\" atau \"%PORT_SECURITY-2-PSECURE_VIOLATION\"</span>\n\n<span>! Recovery manual:</span>\n<span>Switch(config)#</span> <span>interface</span> <span>fa0/15</span>\n<span>Switch(config-if)#</span> <span>shutdown</span>\n<span>Switch(config-if)#</span> <span>no shutdown</span>\n\n<span>! Recovery otomatis (agar tidak perlu manual setiap kali):</span>\n<span>Switch(config)#</span> <span>errdisable recovery cause bpduguard</span>\n<span>Switch(config)#</span> <span>errdisable recovery cause psecure-violation</span>\n<span>Switch(config)#</span> <span>errdisable recovery interval</span> <span>300</span>    <span>! Coba recover setelah 5 menit</span></pre>"
    },
    {
     "id": "kasus-nyata-4-intermittent-packet-loss-ke-server",
     "title": "Kasus Nyata 4 — \"Intermittent Packet Loss Ke Server\"",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Gejala:</strong> Ping ke server database berhasil tapi sekali-kali ada timeout. Aplikasi sering putus-putus saat jam sibuk.</p>\n\n      <pre><span>! Test packet loss dengan ping 1000 kali</span>\n<span>Router#</span> <span>ping</span> <span>10.1.1.100</span> <span>repeat</span> <span>1000</span>\n<span>! Jika ada timeout → ada packet loss</span>\n\n<span>! Cek interface error counter (apakah naik terus?)</span>\n<span>Switch#</span> <span>show interfaces</span> <span>fa0/1</span> <span>! Catat jumlah errors</span>\n<span>! Tunggu 1 menit, cek lagi — apakah counter naik? Jika ya → masalah fisik ongoing</span>\n\n<span>! Cek apakah ada duplex mismatch (penyebab paling umum intermittent loss)</span>\n<span>Switch#</span> <span>show interfaces</span> <span>fa0/1</span> <span>! \"Half-duplex\" sementara sisi lain \"Full-duplex\" → mismatch!</span>\n<span>! Solusi: set manual di kedua sisi:</span>\n<span>Switch(config-if)#</span> <span>duplex full</span>\n<span>Switch(config-if)#</span> <span>speed 100</span>\n\n<span>! Cek CPU utilization switch/router</span>\n<span>Router#</span> <span>show processes cpu sorted</span>   <span>! Proses apa yang paling banyak makan CPU?</span>\n<span>Router#</span> <span>show processes memory sorted</span>\n\n<span>! Cek apakah ada spanning-tree topology change (TCN) yang sering</span>\n<span>Switch#</span> <span>show spanning-tree detail</span> <span>! Lihat \"Number of topology changes\" — jika tinggi, ada flapping port</span></pre>"
    },
    {
     "id": "common-issues-tabel-lengkap",
     "title": "Common Issues — Tabel Lengkap",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Gejala</th><th>Root Cause Paling Mungkin</th><th>Command Diagnosis</th><th>Solusi</th></tr></thead>\n          <tbody>\n            <tr><td>Interface down/down</td><td>Kabel lepas, port shutdown</td><td><code>show int brief</code></td><td>Cek kabel, <code>no shutdown</code></td></tr>\n            <tr><td>Interface up/down (Line protocol down)</td><td>Duplex mismatch, encapsulation salah, clock rate tidak ada (serial)</td><td><code>show int fa0/0</code></td><td>Samakan duplex/encap, set <code>clock rate</code> di DCE</td></tr>\n            <tr><td>Ping timeout ke semua destination</td><td>Default route tidak ada, interface WAN down, NAT salah</td><td><code>show ip route</code>, <code>show ip nat stat</code></td><td>Tambah default route, cek NAT inside/outside</td></tr>\n            <tr><td>Ping timeout ke subnet tertentu saja</td><td>Route ke subnet itu tidak ada, ACL memblokir</td><td><code>show ip route [subnet]</code>, <code>show access-lists</code></td><td>Tambah route, cek ACL hit count</td></tr>\n            <tr><td>PC dapat IP 169.254.x.x</td><td>DHCP server tidak reachable atau DHCP pool habis</td><td><code>show ip dhcp pool</code>, <code>show ip dhcp binding</code></td><td>Cek koneksi ke DHCP server, expand pool</td></tr>\n            <tr><td>Dua PC di VLAN sama tidak bisa saling ping</td><td>Port salah VLAN assignment, STP blocking</td><td><code>show vlan brief</code>, <code>show spanning-tree</code></td><td>Fix port VLAN, cek STP state</td></tr>\n            <tr><td>Antar-VLAN tidak bisa ping</td><td>Router sub-interface tidak dikonfigurasi, SVI down, <code>ip routing</code> tidak aktif</td><td><code>show ip int brief</code>, <code>show ip route</code></td><td>Konfigurasi sub-interface/SVI, aktifkan <code>ip routing</code></td></tr>\n            <tr><td>EIGRP/OSPF neighbor tidak muncul</td><td>AS number/area berbeda, subnet tidak cocok, timer mismatch, ACL blokir</td><td><code>show ip ospf neighbor</code>, <code>debug ip ospf adj</code></td><td>Samakan parameter, cek ACL</td></tr>\n            <tr><td>Port err-disabled</td><td>BPDU Guard triggered, Port Security violation, loop</td><td><code>show interfaces status err-disabled</code>, <code>show log</code></td><td>Atasi penyebab, shutdown/no shutdown</td></tr>\n            <tr><td>STP tidak stabil / jaringan flapping</td><td>Root Bridge salah, kabel buruk, duplex mismatch</td><td><code>show spanning-tree detail</code></td><td>Set root bridge manual, cek kabel</td></tr>\n          </tbody>\n        </table>\n\n    <!-- ══════════════════════════════════════\n         SECTION: SNMP & SYSLOG\n    ══════════════════════════════════════ -->\n\n      18 · Monitoring"
    }
   ]
  },
  {
   "id": "snmp-syslog-ntp-level-menengah",
   "title": "SNMP, Syslog & NTP – Level Menengah",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — SNMP, Syslog & NTP – Level Menengah",
     "dur": "konsep",
     "body": "<p>Monitoring proaktif adalah perbedaan antara mengetahui masalah <em>sebelum</em> user komplain vs bereaksi setelah jaringan sudah down. Tiga komponen utama: <strong>SNMP</strong> (polling + trap), <strong>Syslog</strong> (event logging), dan <strong>NTP</strong> (sinkronisasi waktu untuk korelasi log).</p>"
    },
    {
     "id": "snmp-get-vs-trap-vs-inform",
     "title": "SNMP Get vs Trap vs Inform",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Mekanisme</th><th>Arah</th><th>Cara Kerja</th><th>Keandalan</th></tr></thead>\n          <tbody>\n            <tr><td><strong>Get / GetBulk</strong></td><td>NMS → Agent</td><td>NMS polling berkala (setiap 5 menit)</td><td>Andal — NMS kontrol</td></tr>\n            <tr><td><strong>Set</strong></td><td>NMS → Agent</td><td>NMS ubah konfigurasi via SNMP</td><td>Andal — tapi berbahaya jika tidak diamankan</td></tr>\n            <tr><td><strong>Trap</strong></td><td>Agent → NMS</td><td>Agent kirim notifikasi event real-time</td><td>❌ UDP, tidak ada konfirmasi penerimaan</td></tr>\n            <tr><td><strong>Inform</strong></td><td>Agent → NMS</td><td>Seperti trap + acknowledgment dari NMS</td><td>✅ Lebih andal dari trap</td></tr>\n          </tbody>\n        </table>"
    },
    {
     "id": "snmpv3-konfigurasi-lengkap-aman",
     "title": "SNMPv3 — Konfigurasi Lengkap & Aman",
     "dur": "konsep",
     "body": "<pre><span>! SNMPv3 security level:\n! noAuthNoPriv = tidak ada auth, tidak ada enkripsi (seperti v2c — jangan dipakai)\n! authNoPriv   = ada auth SHA/MD5, tidak ada enkripsi\n! authPriv     = auth + enkripsi AES/DES → GUNAKAN INI di produksi!</span>\n\n<span>! ── SNMP VIEW ────────────────────────────────────────────────</span>\n<span>Router(config)#</span> <span>snmp-server view</span> <span>READONLY-VIEW</span> <span>1.3.6.1.2.1</span> <span>included</span>  <span>! Hanya MIB-II</span>\n\n<span>! ── SNMP GROUP & USER ────────────────────────────────────────</span>\n<span>Router(config)#</span> <span>snmp-server group</span> <span>MONITORING-GROUP</span> <span>v3 priv read</span> <span>READONLY-VIEW</span>\n<span>Router(config)#</span> <span>snmp-server user</span> <span>monitor-user MONITORING-GROUP</span> <span>v3 auth sha</span> <span>Auth@Pass2024!</span> <span>priv aes 256</span> <span>Priv@Pass2024!</span>\n\n<span>! ── SNMP HOST + TRAP ─────────────────────────────────────────</span>\n<span>Router(config)#</span> <span>snmp-server host</span> <span>10.10.10.100</span> <span>version 3 priv</span> <span>monitor-user</span>\n<span>Router(config)#</span> <span>snmp-server enable traps snmp linkdown linkup</span>\n<span>Router(config)#</span> <span>snmp-server enable traps cpu threshold</span>\n<span>Router(config)#</span> <span>snmp-server enable traps ospf</span>\n<span>Router(config)#</span> <span>snmp-server enable traps envmon</span>       <span>! Temp, power, fan</span>\n<span>Router(config)#</span> <span>process cpu threshold type total rising</span> <span>80</span> <span>interval</span> <span>5</span>\n\n<span>! ── METADATA PERANGKAT ───────────────────────────────────────</span>\n<span>Router(config)#</span> <span>snmp-server location</span> <span>DataCenter-Jakarta-Rack-A3</span>\n<span>Router(config)#</span> <span>snmp-server contact</span> <span>noc@perusahaan.com</span>\n\n<span>! ── VERIFIKASI ───────────────────────────────────────────────</span>\n<span>Router#</span> <span>show snmp</span>\n<span>Router#</span> <span>show snmp user</span>\n<span>Router#</span> <span>show snmp group</span></pre>\n\n        <span>⚠</span>\n        <p>Jangan pernah gunakan community string default <code>public</code>/<code>private</code> atau SNMPv2c RW di jaringan produksi. Penyerang yang bisa SNMP Set ke router bisa mengubah routing table, mematikan interface, atau exfiltrate seluruh konfigurasi.</p>"
    },
    {
     "id": "syslog-format-best-practice-produksi",
     "title": "Syslog — Format & Best Practice Produksi",
     "dur": "konsep",
     "body": "<pre><span>! Format pesan syslog Cisco:\n! %FACILITY-SEVERITY-MNEMONIC: message text\n!\n! Contoh nyata:\n! %LINK-3-UPDOWN: Interface FastEthernet0/1, changed state to down\n! %SYS-5-CONFIG_I: Configured from console by admin on vty0 (192.168.1.100)\n! %SPANTREE-2-BLOCK_BPDUGUARD: Received BPDU on port Fa0/5 with BPDU Guard enabled\n! %SEC_LOGIN-5-LOGIN_SUCCESS: Login Success [user: admin] [Source: 192.168.1.50]\n! %SEC_LOGIN-4-LOGIN_FAILED: Login failed [user: admin] [Source: 10.0.0.99]</span></pre>\n\n        <table>\n          <thead><tr><th>Level</th><th>Nama</th><th>Contoh Nyata di Cisco</th><th>Rekomendasi Log ke Server</th></tr></thead>\n          <tbody>\n            <tr><td>0</td><td>Emergency</td><td>Router crash, kernel panic</td><td>✅ Wajib</td></tr>\n            <tr><td>1</td><td>Alert</td><td>Temperature kritis, power supply gagal</td><td>✅ Wajib</td></tr>\n            <tr><td>2</td><td>Critical</td><td>Hardware failure, memory exhaustion</td><td>✅ Wajib</td></tr>\n            <tr><td>3</td><td>Error</td><td>Interface error, routing protocol error</td><td>✅ Wajib</td></tr>\n            <tr><td>4</td><td>Warning</td><td>Interface flapping, high CPU, auth failure</td><td>✅ Wajib</td></tr>\n            <tr><td>5</td><td>Notice</td><td>Interface up/down, user login, config change</td><td>✅ Direkomendasikan</td></tr>\n            <tr><td>6</td><td>Informational</td><td>Protocol adjacency, STP topology change</td><td>⚠️ Opsional (volume tinggi)</td></tr>\n            <tr><td>7</td><td>Debugging</td><td>Detail paket, routing update detail</td><td>❌ Hanya saat troubleshooting</td></tr>\n          </tbody>\n        </table>\n\n      <pre><span>! ── TIMESTAMP (krusial untuk forensik & korelasi) ────────────</span>\n<span>Router(config)#</span> <span>service timestamps log datetime msec localtime show-timezone</span>\n\n<span>! ── SYSLOG SERVER ────────────────────────────────────────────</span>\n<span>Router(config)#</span> <span>logging host</span> <span>10.10.10.200</span>\n<span>Router(config)#</span> <span>logging host</span> <span>10.10.10.201</span>           <span>! Backup syslog server</span>\n<span>Router(config)#</span> <span>logging trap</span> <span>warnings</span>               <span>! Kirim level 0–4 ke server (balance antara detail dan noise)</span>\n<span>Router(config)#</span> <span>logging source-interface</span> <span>loopback0</span>   <span>! Gunakan IP stabil sebagai source</span>\n\n<span>! ── BUFFER LOKAL & CONSOLE ───────────────────────────────────</span>\n<span>Router(config)#</span> <span>logging buffered</span> <span>64000</span> <span>informational</span>\n<span>Router(config)#</span> <span>logging console</span> <span>warnings</span>\n\n<span>! ── ARCHIVE LOG CONFIG (audit perubahan konfigurasi) ─────────</span>\n<span>Router(config)#</span> <span>archive</span>\n<span>Router(config-archive)#</span> <span>log config</span>\n<span>Router(config-archive-log-cfg)#</span> <span>logging enable</span>\n<span>Router(config-archive-log-cfg)#</span> <span>notify syslog</span>\n<span>Router(config-archive-log-cfg)#</span> <span>hidekeys</span>\n\n<span>! ── VERIFIKASI ───────────────────────────────────────────────</span>\n<span>Router#</span> <span>show logging</span>\n<span>Router#</span> <span>show logging | include ERROR</span>\n<span>Router#</span> <span>terminal monitor</span>                <span>! Aktifkan log real-time di SSH session</span></pre>"
    },
    {
     "id": "ntp-hierarki-autentikasi",
     "title": "NTP — Hierarki & Autentikasi",
     "dur": "konsep",
     "body": "<pre><span>! ── NTP CLIENT ───────────────────────────────────────────────</span>\n<span>Router(config)#</span> <span>ntp server</span> <span>10.10.10.1</span> <span>prefer</span>\n<span>Router(config)#</span> <span>ntp server</span> <span>0.id.pool.ntp.org</span>\n<span>Router(config)#</span> <span>clock timezone</span> <span>WIB 7</span>\n\n<span>! ── NTP MASTER ───────────────────────────────────────────────</span>\n<span>CoreRouter(config)#</span> <span>ntp master</span> <span>2</span>\n\n<span>! ── NTP AUTHENTICATION (cegah spoofing) ──────────────────────</span>\n<span>Router(config)#</span> <span>ntp authenticate</span>\n<span>Router(config)#</span> <span>ntp authentication-key</span> <span>1</span> <span>md5</span> <span>NTPsecretKey!</span>\n<span>Router(config)#</span> <span>ntp trusted-key</span> <span>1</span>\n<span>Router(config)#</span> <span>ntp server</span> <span>10.10.10.1</span> <span>key</span> <span>1</span>\n\n<span>! ── VERIFIKASI ───────────────────────────────────────────────</span>\n<span>Router#</span> <span>show ntp status</span>      <span>! \"Clock is synchronized\" = OK | \"unsynchronized\" = masalah</span>\n<span>Router#</span> <span>show ntp associations</span>\n<span>Router#</span> <span>show clock detail</span></pre>"
    },
    {
     "id": "kasus-nyata-1-snmp-deteksi-cpu-spike-sebelum-dow",
     "title": "Kasus Nyata 1 — SNMP: Deteksi CPU Spike Sebelum Down",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> PRTG mengirim alert: CPU router core &gt;85% selama 3 menit. Admin investigasi sebelum jaringan down.</p>\n\n      <pre><span>Router#</span> <span>show processes cpu sorted</span>\n<span>! \"IP Input\" 70% → banjir paket ke CPU (broadcast storm? routing loop? DoS?)</span>\n<span>Router#</span> <span>show interface fa0/0</span>   <span>! Input rate 99% → traffic abnormal di fa0/0</span>\n<span>Router#</span> <span>show ip traffic</span>        <span>! Statistik IP — banyak broadcast/multicast?</span>\n<span>! Temukan source dan rate-limit atau block dengan ACL</span></pre>"
    },
    {
     "id": "kasus-nyata-2-syslog-melacak-pelaku-perubahan-ko",
     "title": "Kasus Nyata 2 — Syslog: Melacak Pelaku Perubahan Konfigurasi",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> Routing kantor tiba-tiba berubah Senin pagi. Manager curiga ada perubahan ilegal akhir pekan.</p>\n\n      <pre><span>Router#</span> <span>show logging | include CONFIG</span>\n<span>! Output:\n! Nov 23 23:47:13 WIB: %SYS-5-CONFIG_I: Configured from console by john on vty2 (192.168.1.55)\n! Terbukti: user \"john\" dari IP 192.168.1.55 pukul 23:47 Minggu malam\n! NTP memastikan timestamp akurat → bukti valid untuk audit</span>\n<span>Router#</span> <span>show archive log config all</span>   <span>! Detail baris yang diubah (jika archive dikonfigurasi)</span></pre>"
    },
    {
     "id": "kasus-nyata-3-korelasi-log-interface-flapping",
     "title": "Kasus Nyata 3 — Korelasi Log: Interface Flapping",
     "dur": "konsep",
     "body": "<span>📋</span>\n        <p><strong>Skenario:</strong> User komplain koneksi putus tiap beberapa menit. Syslog menunjukkan ratusan <code>LINK-3-UPDOWN</code> dari SW-Floor3 fa0/2.</p>\n\n      <pre><span>SW-Floor3#</span> <span>show interfaces fa0/2</span>\n<span>! CRC errors: 847 dan naik terus → kabel rusak atau konektor longgar\n! Solusi: ganti kabel fisik fa0/2\n! Pencegahan routing update storm saat flapping:</span>\n<span>SW-Floor3(config-if)#</span> <span>carrier-delay msec 500</span>   <span>! Tunggu 500ms sebelum deklarasi down</span></pre>\n\n    <!-- ══════════════════════════════════════\n         QUICK REFERENCE\n    ══════════════════════════════════════ -->\n    <hr>\n\n    <!-- QUICK REFERENCE -->\n\n      Referensi Cepat"
    }
   ]
  },
  {
   "id": "command-quick-reference",
   "title": "Command Quick Reference",
   "lectures": [
    {
     "id": "pengantar",
     "title": "Pengantar — Command Quick Reference",
     "dur": "konsep",
     "body": "<table>\n          <thead><tr><th>Kategori</th><th>Perintah</th><th>Fungsi</th></tr></thead>\n          <tbody>\n            <tr><td>Status</td><td><code>show ip interface brief</code></td><td>Ringkasan status semua interface</td></tr>\n            <tr><td>Status</td><td><code>show running-config</code></td><td>Konfigurasi aktif saat ini</td></tr>\n            <tr><td>Status</td><td><code>show startup-config</code></td><td>Konfigurasi tersimpan di NVRAM</td></tr>\n            <tr><td>Status</td><td><code>show ip route</code></td><td>Tabel routing</td></tr>\n            <tr><td>Status</td><td><code>show version</code></td><td>Info IOS, hardware, uptime</td></tr>\n            <tr><td>Debug</td><td><code>ping [ip]</code></td><td>Test konektivitas Layer 3</td></tr>\n            <tr><td>Debug</td><td><code>traceroute [ip]</code></td><td>Lacak jalur paket</td></tr>\n            <tr><td>Debug</td><td><code>debug ip routing</code></td><td>Debug routing changes</td></tr>\n            <tr><td>VLAN</td><td><code>show vlan brief</code></td><td>Daftar VLAN dan port</td></tr>\n            <tr><td>VLAN</td><td><code>show interfaces trunk</code></td><td>Status trunk ports</td></tr>\n            <tr><td>CDP</td><td><code>show cdp neighbors detail</code></td><td>Info lengkap neighbor Cisco</td></tr>\n            <tr><td>Save</td><td><code>copy run start</code></td><td>Simpan konfigurasi</td></tr>\n            <tr><td>STP</td><td><code>show spanning-tree</code></td><td>Status STP semua VLAN</td></tr>\n            <tr><td>STP</td><td><code>show spanning-tree vlan 10</code></td><td>Status STP untuk VLAN 10</td></tr>\n            <tr><td>IPv6</td><td><code>show ipv6 interface brief</code></td><td>Status interface IPv6</td></tr>\n            <tr><td>IPv6</td><td><code>show ipv6 route</code></td><td>Routing table IPv6</td></tr>\n            <tr><td>Security</td><td><code>show ip dhcp snooping binding</code></td><td>Tabel DHCP snooping</td></tr>\n            <tr><td>Security</td><td><code>show ip arp inspection</code></td><td>Status Dynamic ARP Inspection</td></tr>\n            <tr><td>SNMP</td><td><code>show snmp</code></td><td>Status SNMP</td></tr>\n            <tr><td>Log</td><td><code>show logging</code></td><td>Log buffer dan konfigurasi syslog</td></tr>\n            <tr><td>NTP</td><td><code>show ntp status</code></td><td>Status sinkronisasi NTP</td></tr>\n            <tr><td>NTP</td><td><code>show clock</code></td><td>Waktu perangkat saat ini</td></tr>\n            <tr><td>MPLS</td><td><code>show mpls forwarding-table</code></td><td>Tabel forwarding MPLS</td></tr>\n            <tr><td>QoS</td><td><code>show policy-map interface</code></td><td>Statistik QoS per interface</td></tr>\n          </tbody>\n        </table>\n\n  </main>\n\n<footer>\n  <span>Kitab Ilmu Putih 2024 –"
    }
   ]
  }
 ]
};
