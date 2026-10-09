# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pet parents urban, terutama milenial dan Gen Z yang menganggap hewan sebagai keluarga; pemilik yang bepergian, pekerja yang membutuhkan daycare, serta pemilik puppy/kitten dan hewan senior.

## Product Purpose

Landing page Griya Sahabat Pet Care membantu pet parents memahami pet shop, grooming, hotel, dan daycare dalam satu tempat dan menyiapkan permintaan kunjungan. Redesign mempertahankan cakupan 14 bagian pada PRD sambil mengganti visual keseluruhan.

## Positioning

Rumah kedua untuk sahabat berbulu, bersayap, dan bersisik. Mekanisme pembeda dalam PRD: profil Paspor Sahabat, pemisahan zona kucing dan anjing, serta link akses CCTV yang diberikan saat check-in.

## Operating Context

Pengunjung membandingkan layanan dan tarif, memeriksa pengaturan keselamatan dan kenyamanan, membaca FAQ, lalu menyiapkan permintaan grooming/hotel/daycare. Form menghasilkan pesan yang dapat diedit dan disalin. Tautan WhatsApp hanya tersedia bila nomor bisnis terverifikasi dikonfigurasi; ketersediaan dan reservasi tidak dikonfirmasi otomatis.

## Capabilities and Constraints

- Pertahankan informasi dan tarif PRD sampai ada perubahan bisnis terverifikasi.
- Pengguna mengizinkan peningkatan PRD untuk memaksimalkan pengalaman; tidak mengizinkan pemalsuan bukti bisnis.
- Stack terpasang: Astro 7, React 19, Tailwind CSS 4, TypeScript strict. Mayoritas bagian dirender statis; Hero, BottomNav, dan CTA Booking memakai `client:load`. Motion memakai CSS native yang menghormati reduced motion; Framer Motion dan wrapper reveal lama sudah dilepas.
- Tidak ada backend CCTV, profil hewan, inventori, pembayaran, atau reservasi yang terverifikasi dalam repo. Preview fitur wajib diberi label ilustrasi; jangan tampilkan foto stok sebagai kamera live.
- Nomor `6281234567890` adalah contoh PRD dan ditolak sebagai tujuan WhatsApp. `PUBLIC_WHATSAPP_NUMBER` hanya boleh berisi nomor operasional yang telah dikonfirmasi pemilik bisnis. Kontak/alamat/jam operasional nyata tetap perlu dikonfirmasi sebelum publikasi.
- Semua 14 bagian PRD tetap tersedia; mobile harus dapat dibaca dan dinavigasi tanpa menyembunyikan informasi penting.

## Brand Commitments

Nama: Griya Sahabat Pet Care. Tagline PRD: Rumah Kedua Untuk Yang Berbulu, Bersayap, dan Bersisik.

Bahasa Indonesia hangat, empatik, sedikit playful, dan reassuring. Hindari bahasa klinis dingin atau menyebut hewan sebagai barang titipan.

Pengguna meminta redesign total yang ramah hewan, happy vibe, dan kaya gambar relevan; mengizinkan foto Pexels baru dan penggantian gambar lama. Pengguna harus memilih arah visual melalui browser sebelum redesign diterapkan.

Arahan pada re-roll kedua: nuansa seperti taman hewan yang ramah dan welcome, imut serta lucu, dengan visual yang membuat pet parents percaya pada brand. Terjemahkan sebagai lingkungan perawatan yang hangat dan natural, bukan klaim bahwa bisnis ini kebun binatang, sanctuary, atau fasilitas outdoor tertentu. Kepercayaan dibangun lewat penjelasan Paspor Sahabat, pemisahan zona, dan proses konfirmasi; bukan bukti bisnis rekaan.

Pengguna memilih Pondok Sahabat pada ronde ketiga dan meminta warna sedikit lebih kuat karena preview terlalu soft. Komposisi meja sambutan di antara dua potret dipertahankan; palet meadow/leaf, cream, dan coral memakai teks hijau lebih dalam demi keterbacaan.

## Evidence on Hand

- Sumber utama: `docs/181-182-griya-sahabat-pet-care-PRD.md` (dokumen lokal, diabaikan Git).
- Implementasi: `src/pages/index.astro`, `src/components/`, `src/styles/global.css`.
- PRD memuat tarif, tiga testimoni, klaim 500+ sahabat menginap, CCTV 24 jam, dan dokter hewan on-call; tidak tersedia bukti independen dalam repo. Jangan menambah atau memperkuat klaim tersebut; tandai kebutuhan verifikasi sebelum publikasi.
- Implementasi baru memakai 13 foto Pexels yang disimpan lokal dalam varian WebP 640/1280px, dengan kredit dan provenance; seluruh foto merupakan ilustrasi, bukan bukti fasilitas atau data pelanggan Griya. DynaPuff dan Noto Sans disimpan lokal dengan lisensi OFL.

## Product Principles

1. Kenyamanan hewan dan ketenangan pet parents menjadi inti pengalaman.
2. Empat layanan terasa sebagai satu ekosistem, dengan tindakan booking yang jelas.
3. Jelaskan cara kerja CCTV, Paspor, dan zona terpisah tanpa berpura-pura memiliki integrasi live.
4. Ceria tidak mengorbankan keterbacaan, aksesibilitas, atau kepercayaan.
5. Arah visual dipilih pengguna; keputusan desain yang belum dipilih tidak dianggap final.

## Accessibility & Inclusion

Semantik HTML, label form terhubung, navigasi keyboard, fokus terlihat, kontras memadai, reduced motion, dan layout tanpa overflow horizontal di mobile.
