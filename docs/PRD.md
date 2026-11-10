# PRD: Samudra Auto Service Website

## 1. Problem Statement
Pemilik bengkel Samudra Auto Service di Pekanbaru membutuhkan website representatif untuk memvalidasi identitas bisnis, menampilkan layanan spesialis dan keunggulan home service, serta mempermudah pelanggan melakukan estimasi awal dan konsultasi via WhatsApp.

## 2. Target User & Value Proposition
- **Target User:** Pemilik kendaraan roda empat di Pekanbaru (pribadi dan operasional kantor) yang membutuhkan perawatan rutin atau perbaikan tanpa repot antre di bengkel.
- **Value Proposition:** Bengkel fisik terpercaya dengan teknisi berpengalaman ditambah armada panggilan home service yang datang langsung ke lokasi pelanggan, transparan dalam estimasi biaya tanpa biaya siluman.

## 3. Core Features (Scope MVP)
- Sticky Header & Navigation dengan quick contact WhatsApp (placeholder `XXXXX`).
- Hero section dengan positioning ganda (bengkel fisik + home service) dan direct Google Maps directions.
- Widget Simulasi & Booking interaktif (toggle mode bengkel vs panggilan home service).
- 5 Kartu Layanan Spesialisasi: Service Berkala, Kaki-kaki, Ganti Oli, Transmisi Matic, Kopling + 1 Kartu Komitmen Garansi.
- Section Khusus Home Service dengan alur 3 langkah jemput bola.
- Section Profil Workshop & Pinpoint Google Maps (`/g/11nt9wl1k6`).
- Footer navigasi lengkap 4 kolom dengan status jam kerja.
- Clean zero-emoji UI design menggunakan inline SVG.

## 4. Out of Scope (Non-MVP)
- Payment gateway online dan checkout otomatis.
- Sistem database akun pengguna / login pelanggan.
- Kalender penjadwalan real-time otomatis (masih menggunakan direct WhatsApp confirmation).

## 5. Acceptance Criteria
1. Website dibangun dengan Next.js App Router + TypeScript + Tailwind CSS.
2. Build lokal lolos `npm run build` tanpa error TypeScript/ESLint.
3. Git repository terhubung ke GitHub `samudra-auto-service`.
4. Deploy otomatis sukses di Vercel dengan URL aktif `.vercel.app`.
5. Semua tautan eksternal (Google Maps, WA placeholder) berfungsi.
6. Responsive di mobile dan desktop.
