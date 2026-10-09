---
name: "Pondok Sahabat — Griya Sahabat Pet Care"
description: "Dunia perawatan hewan yang ceria dan menyambut, dengan hijau taman yang tegas, cream hangat, serta coral ramah."
colors:
  cream: "#fff7e6"
  meadow: "#b9d776"
  leaf: "#23573d"
  ink: "#123222"
  muted: "#41543f"
  coral: "#eb7654"
  sky: "#d0e9e4"
  border: "#8a9e76"
  error: "#9d302a"
  field-surface: "#fffdf7"
typography:
  display:
    fontFamily: '"DynaPuff", sans-serif'
    fontSize: "clamp(2.4rem, 4.35vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"DynaPuff", sans-serif'
    fontSize: "clamp(2rem, 3.35vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"DynaPuff", sans-serif'
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"Noto Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  intro:
    fontFamily: '"Noto Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: '"Noto Sans", sans-serif'
    fontSize: "13px"
    fontWeight: 700
  action:
    fontFamily: '"Noto Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 700
  caption:
    fontFamily: '"Noto Sans", sans-serif'
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  choice: "8px"
  field: "10px"
  surface: "12px"
  portrait: "14px"
  desk: "16px"
  canopy: "0 0 28px 28px"
spacing:
  inline-tight: "8px"
  control-gap: "10px"
  control-block: "12px"
  group: "16px"
  field-grid: "18px"
  control-inline: "20px"
  gutter: "24px"
  column: "32px"
  section-mobile: "60px"
  section-desktop: "84px"
components:
  button-primary:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.cream}"
    typography: "{typography.action}"
    rounded: "{rounded.surface}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cream}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.leaf}"
    typography: "{typography.action}"
    rounded: "{rounded.surface}"
    padding: "12px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.meadow}"
  button-coral:
    backgroundColor: "{colors.coral}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.surface}"
    padding: "12px 20px"
  button-coral-hover:
    backgroundColor: "#f28764"
    textColor: "{colors.ink}"
  text-link:
    textColor: "{colors.leaf}"
    typography: "{typography.action}"
  field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "10px 12px"
  choice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.choice}"
    padding: "12px 16px"
  choice-selected:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.cream}"
  card-meadow:
    backgroundColor: "{colors.meadow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "24px"
  care-note:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
  navigation:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.canopy}"
  faq:
    textColor: "{colors.leaf}"
    padding: "20px 0"
---

# Design System: Pondok Sahabat

## Overview

**Creative North Star: "Pondok Sahabat"**

Pondok Sahabat terasa seperti sambutan di taman yang hangat: happy, welcoming, imut, dan dekat dengan karakter masing-masing hewan. Meadow yang lebih kuat, leaf yang dalam, cream yang hangat, dan coral membuat suasana ceria tetap jelas dibaca; pilihan ini mengikuti persetujuan pengguna, bukan mengembalikan preview yang terlalu soft.

Huruf display yang membulat memberi kepribadian, sementara teks isi dan kontrol tetap tenang serta praktis. Foto hewan nyata membawa ekspresi; caption menjelaskan status ilustrasinya. Nuansa taman adalah bahasa visual, bukan klaim tentang kebun binatang, fasilitas outdoor, atau kondisi operasional bisnis.

Sistem ini merekam sumber yang selesai di `src/styles/global.css` dan komponen terkait. Frontmatter memiliki nilai primitif normatif; `.impeccable/design.json` melengkapinya dengan metadata, ramp turunan untuk panel, depth, motion, breakpoint, dan contoh komponen. Keduanya adalah dokumentasi, bukan token runtime kedua. Komposisi tiga bagian hero dan strategi 14 bagian tetap milik `.impeccable/surfaces/src-pages-index-astro.md`, bukan kewajiban universal setiap layar.

**Key Characteristics:**
- Hijau taman tegas dengan foreground hijau gelap yang terbaca.
- DynaPuff ekspresif; Noto Sans praktis untuk isi dan kontrol.
- Permukaan hangat, sudut lembut, dan kedalaman yang hemat.
- Foto ekspresif dengan status ilustrasi yang terlihat.
- Kontrol native, fokus jelas, dan gerak yang mengikuti kebutuhan pengguna.

## Colors

Palet taman yang cerah menggunakan warna permukaan untuk suasana dan warna hijau dalam untuk keterbacaan; nilai tepatnya dimiliki frontmatter.

### Primary
- **Leaf / Hijau Daun Dalam:** aksi utama, tautan, selected state, fokus, dan permukaan gelap; pada latar leaf gunakan cream sebagai teks.
- **Meadow / Hijau Padang Ceria:** bidang sambutan, bagian terpilih, kartu kategori, serta hover tombol sekunder; pasangkan dengan ink atau muted.

### Secondary
- **Coral / Coral Sambutan:** aksi kunjungan di header dan text selection; pasangkan dengan ink, bukan teks terang.

### Tertiary
- **Sky / Embun Sejuk:** catatan perawatan, ringkasan pilihan, serta wadah cerita yang tenang; bukan aksen aksi yang bersaing dengan leaf.

### Neutral
- **Cream / Cream Hangat:** latar halaman, form, navigasi, dan teks di permukaan leaf.
- **Ink / Hijau Tinta:** foreground utama dan hover aksi leaf.
- **Muted / Hijau Sekunder:** penjelasan, placeholder, dan caption pada permukaan terang; bukan abu-abu netral dingin.
- **Border / Batas Daun:** garis field, pemisah daftar, dan batas navigasi.
- **Field Surface / Cream Field:** permukaan input serta pesan permintaan yang bisa diedit.
- **Error / Merah Koreksi:** batas field invalid dan pesan masalah yang menjelaskan pemulihan.

**The Readable Garden Rule.** Gunakan ink atau muted di meadow, ink di coral, dan cream di leaf; warna ceria tidak menggantikan kontras teks, label, atau status.

Browser juga mengikuti palet: selection coral/ink, caret leaf, accent native leaf, scrollbar leaf/cream, dan underline tautan berjarak dari huruf. Ramp delapan langkah di sidecar hanya turunan visualisasi OKLCH, bukan warna baru yang telah dipakai aplikasi.

## Typography

**Display Font:** DynaPuff, fallback sans-serif. **Body Font:** Noto Sans, fallback sans-serif. Kedua font disimpan lokal; DynaPuff memiliki rentang bobot 400–700 dan Noto Sans 100–900, dengan `font-display: swap`.

**Character:** Display gemuk-membulat membuat sambutan ramah tanpa mengubah semua teks menjadi dekorasi. Noto Sans menjaga petunjuk, tarif, pilihan native, dan penjelasan panjang tetap mudah dipindai.

### Hierarchy
- **Display:** headline sambutan; bobot, clamp, leading, dan tracking ada pada `typography.display`. Pada viewport hingga 767px sumber memakai `clamp(2.25rem, 8.8vw, 3rem)`.
- **Headline:** judul bagian dengan clamp yang lebih kecil; batas lebar judul bagian (24ch), heading balanced.
- **Title:** judul komponen umum; ukuran bervariasi sesuai kepadatan (20–30px), sementara frontmatter merekam langkah umum 24px. Form juga memakai judul 21–23px; tidak ada rasio skala tetap yang diwajibkan.
- **Body / Intro:** isi utama dan pengantar; intro dibatasi (68ch), welcome intro (65ch), sedangkan catatan praktis boleh lebih pendek.
- **Label / Action:** label field dan tindakan memakai bobot tegas; jangan memakai display untuk nilai input atau instruksi panjang.
- **Caption:** konteks foto dan catatan perawatan; status ilustrasi tetap terlihat, bukan disembunyikan dalam hover.

**The Two Voices Rule.** DynaPuff membawa judul dan nama brand; Noto Sans membawa isi, label, tarif, dan tindakan. Heading memakai tracking yang sama dan text wrapping yang seimbang.

Tarif serta input tanggal memakai angka tabular. Nama brand dan caption potret memiliki variasi display lokal; bukan alasan membuat semua caption memakai DynaPuff.

## Layout

Kontainer utama berpusat dengan lebar maksimum (1180px), lebar penuh, dan gutter horizontal (24px). Bagian memiliki jarak vertikal (84px), turun menjadi (60px) hingga 767px. Kelompok kontrol rapat, sedangkan antar-kolom dan antar-bagian lebih longgar; spacing frontmatter merekam langkah yang benar-benar berulang, bukan grid wajib untuk semua kebutuhan.

Grid bersifat editorial dan mengikuti isi: foto, penjelasan, daftar tarif, serta form tidak perlu dibungkus dalam kartu identik. Contoh layout booking memakai kolom (.8fr / 1.2fr), gap (64px), lalu satu kolom dengan gap (28px) pada mobile. Field booking berubah dari dua kolom dengan gap (18px) menjadi satu kolom dengan gap (16px); jangan menyembunyikan field atau informasi penting untuk membuat layout muat.

Ada dua jenis breakpoint yang sama-sama nyata: utility responsif pada minimum (640px, 768px, 1024px) dan stylesheet khusus pada maksimum (767px, 1099px). Navigasi desktop berubah ke menu native hingga 1099px. Hingga 767px, header lebih pendek, CTA header hilang, dan bottom navigation muncul dengan area aman perangkat. Body menyediakan ruang bawah (72px + safe-area); anchor scroll menyisakan ruang header (100px desktop, 86px mobile).

## Elevation & Depth

Kedalaman terutama berasal dari perbedaan warna permukaan, pemisah tipis, dan hierarki isi. Bayangan lembut bukan atribut umum semua kartu: ia hadir pada potret sebagai benda foto ringan dan sesaat dalam perubahan catatan perawatan. Tidak ada material kaca, tekstur kayu/kertas, atau shadow keras yang perlu diwariskan.

### Shadow Vocabulary
- **Portrait lift** (`0 12px 28px #173e2d15`): angkat potret secara lembut tanpa border tambahan; kemiringan kecil adalah komposisi lokal hero.
- **Care settle start** (`0 6px 18px #23573d16`): awal animasi catatan, kemudian hilang menjadi `0 0 0 #23573d00`; bukan elevation permanen.

**The Quiet Depth Rule.** Gunakan bidang warna dan garis untuk struktur; jangan menambahkan bayangan pada setiap kartu atau baris hanya demi terasa interaktif.

Motion authored adalah `care-settle` (350ms, `cubic-bezier(.16, 1, .3, 1)`): latar hangat sementara (`#fbd2b5`) kembali ke sky sambil bayangan mereda. Default content sudah terlihat. Transisi warna tombol (180ms, ease) memberi respons sederhana; reduced motion meniadakan animasi/transisi dan mengganti smooth scroll menjadi auto.

## Shapes

Sudut mengikuti fungsi: pilihan kecil (8px), field dan catatan (10px), tombol/foto/wadah umum (12px), bingkai potret (14px), dan meja/form (16px). Kanopi header memiliki sudut bawah lebih besar (28px) dan garis bawah tipis. Radius ini bukan token CSS baru; frontmatter menamai nilai sumber untuk pembacaan dokumentasi.

Foto menggunakan object-fit cover dengan bingkai persegi panjang yang membulat, bukan masking subjek geometris. Rasio foto mengikuti isi dan viewport; jangan menganggap satu rasio foto sebagai hukum global. Daftar layanan, tarif, dan FAQ banyak memakai garis pemisah (1px), bukan tumpukan kartu bersarang.

## Components

### Buttons

Tegas tetapi ramah: tinggi minimum (48px), padding (12px 20px), gap ikon (10px), sudut surface, dan Noto Sans action. Primary leaf/cream berubah ke ink saat hover; secondary transparan dengan border leaf (1px) berubah ke meadow. Varian coral/ink dipakai untuk ajakan kunjungan header dan mempunyai hover hangat tersendiri.

Fokus global memakai outline leaf (3px), offset (5px); pada leaf dan footer outline cream. Disabled menggunakan cursor wait dan opacity (.65), sebagaimana saat penyalinan sedang berlangsung. Tidak ada transform atau pressed animation tambahan yang harus dibuat. Ikon berasal dari satu keluarga Phosphor, digambar sebagai SVG, umumnya (17–20px) dalam tindakan.

### Links

Tautan teks bergaris bawah, warna leaf, bobot action, dan tinggi minimum (44px). Hover mempertebal underline (2px), bukan memberi kartu bayangan. Di leaf, tautan memakai cream; garis dekorasi dapat memakai meadow.

### Native Choices

Pilihan profil dan cerita adalah radio native dalam label berbentuk kontrol, bukan tab ARIA palsu. Tinggi minimum (44px), padding (12px 16px), gap (8px), sudut choice, dan border border. Checked menjadi leaf/cream; fokus input memberi outline pada label (`3px solid #173e2d`, offset 4px). Gunakan keyboard native dan `fieldset`/`legend` yang memberi nama grup. Tanpa dukungan selector `:has`, contoh isi tetap terbaca, bukan hilang.

### Cards / Containers

Kartu kategori meadow memiliki sudut surface dan padding (24px); wadah profil cream serta wadah cerita sky memakai sudut surface dengan padding responsif. Form/desk cream memakai sudut desk. Wadah ini diam saat hover; hanya tautan atau kontrolnya yang bereaksi. Konten tidak otomatis menjadi kartu hanya karena memiliki heading.

### Inputs / Fields

Label terhubung ke input, select, atau textarea. Field minimum (46px), border (1px), sudut field, padding (10px 12px), teks ink, latar field-surface, placeholder muted, caret leaf. Select dan date tetap native. Fokus mengikuti outline global, tanpa glow tambahan. Invalid memakai border error bersama pesan teks error (13px, leading 1.5) dan relasi `aria-describedby`; warna bukan satu-satunya pembeda. Saat form belum siap, fieldset disabled; jangan meniru status ini dengan komponen kontrol dekoratif.

### Navigation

Header cream sticky, z-index (40), dengan kanopi membulat dan border bawah. Link desktop (13px, bobot 600) memberi underline saat hover. Menu mobile menggunakan `details`/`summary`; target summary minimum (44px), open state meadow, panel cream dengan border dan sudut surface. Sumber menutup menu setelah pemilihan link atau Escape dan mengembalikan fokus ke summary saat Escape. Bottom navigation mobile memakai target yang lapang, leaf/cream untuk tindakan kunjungan, dan meadow transparan untuk lokasi aktif.

### FAQ

FAQ adalah `details`/`summary` native dengan pemisah border. Summary minimum (64px), padding vertikal (20px), teks leaf bold, hover ink, dan fokus leaf (3px) dengan offset (4px). Chevron berupa geometri CSS berputar ketika open, bukan glyph teks. Jawaban tetap berada di alur dokumen; tidak memakai modal atau accordion yang mensyaratkan runtime untuk membaca isi.

### Care Note

Catatan singkat di permukaan sky, sudut field, padding (12px 14px), dan ukuran caption. Perubahan pilihan boleh memakai care-settle yang terdokumentasi; catatan menerangkan kebutuhan hewan, bukan sekadar mengganti dekorasi. Ringkasan paket memakai bahasa permukaan yang sama dengan tindakan ubah yang nyata.

## Do's and Don'ts

### Do:
- **Do** gunakan ink atau muted pada meadow, ink pada coral, dan cream pada leaf, termasuk label serta informasi pendukung.
- **Do** pertahankan DynaPuff untuk judul dan Noto Sans untuk isi serta kontrol; muat font lokal dengan fallback yang wajar.
- **Do** gunakan foto relevan dengan alt yang deskriptif dan caption ilustrasi yang terlihat; pisahkan suasana visual dari bukti fasilitas.
- **Do** gunakan kontrol native, label terhubung, fokus keyboard yang jelas, dan pesan masalah yang bisa dipahami tanpa mengandalkan warna.
- **Do** sesuaikan grid dengan isi; pertahankan informasi, target tindakan, safe-area mobile, serta preferensi reduced motion.
- **Do** jaga tarif, kutipan PRD, dan status konfirmasi sesuai sumber produk; kehangatan visual tidak boleh membuat ilustrasi terasa seperti bukti operasional.

### Don't:
- **Don't** melembutkan palet kembali ke preview yang ditolak atau mengganti dunia Pondok Sahabat yang sudah disetujui.
- **Don't** memakai teks terang di meadow/coral, teks muted di coral/leaf, atau status error yang hanya dibedakan lewat warna.
- **Don't** membuat semua isi menjadi kartu identik, menambah bayangan universal, atau menciptakan material kaca dan tekstur yang tidak ada di sumber.
- **Don't** mengubah radio, select, date, atau FAQ native menjadi tiruan nonsemantik hanya demi tampilan.
- **Don't** mengangkat komposisi hero tiga bagian atau urutan 14 bagian menjadi template universal desain sistem.
- **Don't** mencatat ramp panel, nama dokumentasi radius/spacing, atau contoh snippet sebagai token runtime baru maupun sumber otoritas kedua.
