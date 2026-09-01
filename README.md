# Portofolio — Pranaya Widi Ramadhan

Portofolio pribadi dibangun dengan **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Catatan penting: kenapa ada file `.babelrc`

Project ini sengaja dikonfigurasi untuk memakai **Babel**, bukan compiler
default Next.js (SWC). Ini untuk menghindari error umum di Windows:

```
Failed to load SWC binary for win32/x64
```

Error itu terjadi karena SWC pakai file binary native (`.node`) yang kadang
gagal ke-load di sebagian sistem Windows (soal instalasi/antivirus, bukan
soal kode). Dengan `.babelrc` yang isinya `{ "presets": ["next/babel"] }`,
Next.js otomatis switch ke Babel dan tidak pernah menyentuh binary SWC sama
sekali — jadi errornya tidak akan muncul lagi di komputer manapun.

Konsekuensinya: waktu build sedikit lebih lama dan ukuran bundle sedikit
lebih besar dibanding SWC. Untuk ukuran project sekecil ini, bedanya tidak
terasa. Kalau suatu saat instalasi Next.js kamu di komputer baru ternyata
tidak bermasalah dengan SWC, file `.babelrc` ini boleh dihapus untuk
kembali ke performa build SWC yang lebih cepat.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur

```
app/
  layout.tsx      # font, metadata, starfield/cosmos background tetap
  page.tsx         # merangkai semua section
  globals.css      # starfield, nebula, planet, grain, dsb.
components/
  Nav.tsx          # navbar sticky dengan logo orbit
  Hero.tsx         # section Home (foto porthole, planet, constellation)
  About.tsx        # section About Me
  Skills.tsx       # section Skills & Tools
  Projects.tsx     # section Projects (SONAR, GitarKu, QA/Testing)
  Education.tsx    # section Pelatihan (Dicoding)
  Experience.tsx   # section Journey / timeline
  Contact.tsx       # section Contact
  RevealOnScroll.tsx # util animasi muncul saat discroll
public/images/     # foto profil & foto project
```

## Yang perlu kamu ganti sebelum publish

Ada 3 link placeholder (ditandai komentar `TODO`) yang masih mengarah ke `#`,
cari dan ganti dengan link asli kamu:

1. `components/Hero.tsx` — tombol ikon Instagram
2. `components/Contact.tsx` — tombol Instagram
3. `components/Contact.tsx` — tombol GitHub

Contoh:
```tsx
<a href="https://instagram.com/username_kamu" ...>
<a href="https://github.com/username_kamu" ...>
```

## Deploy

Cara termudah adalah deploy ke [Vercel](https://vercel.com):

```bash
npm i -g vercel
vercel
```

Atau hubungkan repo GitHub kamu langsung ke Vercel/Netlify.
