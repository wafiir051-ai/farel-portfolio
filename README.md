# Personal Developer Portfolio

Portfolio single-page milik Muhamad Farel Al Gifary. Stack: Astro, TypeScript, Tailwind CSS v4.

## Menjalankan

```bash
npm install
npm run dev      # development server
npm run build    # astro check + build produksi
npm run preview  # pratinjau hasil build
```

## Mengubah konten

Semua konten ada di `src/data/`:

- `profile.ts` — nama, tentang saya, email, lokasi. Isi `cvUrl` setelah `public/documents/cv.pdf` tersedia.
- `skills.ts` — kemampuan beserta statusnya (`learning`, `familiar`, `used`, `experienced`).
- `projects.ts` — tambahkan objek proyek; section Projects tampil otomatis.
- `experiences.ts` — pendidikan, PKL, organisasi, atau pekerjaan.
- `social-links.ts` — GitHub, LinkedIn, dll.

## Yang perlu diisi sebelum publikasi

- Proyek, CV, dan tautan sosial (saat ini kosong, sengaja tidak dibuat-buat).
- Foto profil (opsional).
- Domain: isi `site` di `astro.config.mjs`, lalu tambahkan `@astrojs/sitemap` dan canonical URL.
