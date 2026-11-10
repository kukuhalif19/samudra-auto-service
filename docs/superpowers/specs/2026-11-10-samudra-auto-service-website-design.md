# Samudra Auto Service Website — Design Specification

Tanggal: 2026-11-10
Status: Draft untuk review pemilik proyek

## 1. Tujuan

Membuat prototype website presentasi yang meyakinkan pemilik Samudra Auto Service untuk menyetujui website final. Prototype harus terasa seperti website bisnis nyata, bukan landing page kosong, dengan fokus pada kepercayaan, kejelasan layanan, dan keunggulan home service di Pekanbaru.

## 2. Positioning yang Disetujui

**Bengkel fisik terpercaya + layanan home service Pekanbaru.**

Arah visual: **Trusted Workshop** — tenang, premium, editorial, dan profesional. Website tidak memakai emoji pada UI; ikon menggunakan SVG inline.

## 3. Pengguna dan Tujuan Bisnis

- Pemilik Samudra Auto Service: menilai kualitas dan potensi website final.
- Calon pelanggan: memahami layanan, memilih bengkel atau home service, lalu menghubungi WhatsApp.
- Tujuan utama: membangun rasa percaya dan mendorong konsultasi/booking.

## 4. Struktur Homepage

1. Announcement bar: area layanan dan jam operasional.
2. Sticky navigation: brand, anchor layanan, home service, lokasi, standar kerja, CTA WhatsApp.
3. Hero: headline manfaat, penjelasan bengkel fisik dan home service, CTA booking, CTA Google Maps, tiga proof points.
4. Simulasi konsultasi: pilihan ke bengkel/home service, jenis layanan, kendaraan, area; nomor kontak sementara `XXXXX`.
5. Brand strip: merek kendaraan populer yang dilayani.
6. Service grid: service berkala, kaki-kaki, ganti oli, transmisi auto matic, kopling, serta kartu komitmen transparansi.
7. Home service spotlight: alasan, cakupan, dan alur tiga langkah.
8. Workshop dan lokasi: alamat Pekanbaru, jam operasional, kontak placeholder, tautan Google Maps resmi.
9. Final CTA: konsultasi gratis.
10. Footer: layanan, informasi, area home service, kontak, dan status operasional.

## 5. Interaksi Prototype

- Toggle bengkel fisik/home service menampilkan field area untuk mode home service.
- Form konsultasi menampilkan feedback sementara dan akan diarahkan ke WhatsApp setelah nomor resmi tersedia.
- CTA Google Maps membuka tautan lokasi yang sudah tersedia.
- Navigasi memakai anchor section.
- Semua tombol harus memiliki focus state dan dapat dipakai pada layar kecil.

## 6. Data Placeholder yang Wajib Diganti Sebelum Produksi

- Nomor telepon/WhatsApp: `XXXXX`.
- Alamat jalan lengkap bengkel.
- Jam operasional final.
- Foto bengkel, teknisi, kendaraan, dan hasil pengerjaan.
- Klaim garansi, cakupan area home service, serta detail harga/estimasi.

Konten tersebut tidak boleh dianggap sebagai fakta final sebelum dikonfirmasi pemilik.

## 7. Arah Teknis

- Framework: Next.js dengan TypeScript.
- Styling: Tailwind CSS atau CSS lokal minimal; tidak menambah library UI jika tidak diperlukan.
- Deployment: Git repository yang terhubung ke Vercel.
- Struktur awal: satu homepage responsif dengan komponen section sederhana; data layanan dipusatkan agar mudah diganti.
- Tidak ada backend, database, autentikasi, atau sistem booking sungguhan pada prototype.

## 8. Acceptance Criteria Prototype

- Homepage dapat dibuka tanpa error pada desktop dan mobile.
- Semua section utama pada struktur di atas tersedia.
- CTA WhatsApp memakai placeholder `XXXXX` tanpa mengarang nomor.
- Tautan Google Maps tersedia dan dapat dibuka.
- Tidak ada emoji pada UI.
- Interaksi toggle home service berjalan.
- Build production Next.js berhasil.
- Repository Git memiliki commit awal dan dapat dipush ke remote yang dikonfirmasi.
- URL Vercel dapat dibuka dan menampilkan homepage.

## 9. Batasan dan Risiko

- Git remote belum tersedia di folder proyek; nama repository dan akses GitHub perlu ditemukan atau dikonfirmasi sebelum push.
- Data bisnis yang belum lengkap membatasi klaim faktual dan CTA produksi.
- Foto asli akan sangat meningkatkan kepercayaan; placeholder visual hanya untuk presentasi awal.

## 10. Keputusan

Masalah: landing page minimal tidak cukup meyakinkan untuk presentasi klien.

Opsi: halaman satu layar minimal, homepage bisnis lengkap, atau website multi-halaman.

Pilihan: homepage bisnis lengkap satu halaman.

Alasan: memberi kesan website nyata dengan effort prototype yang tetap terkontrol; layanan, home service, lokasi, dan CTA dapat dinilai pemilik dalam satu alur.
