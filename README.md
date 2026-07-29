# Portofolio — Joni Hermawan

Portofolio web statis (HTML/CSS/JS murni, tanpa build step) untuk Joni Hermawan, Senior IT System Engineer. Bilingual (ID/EN) dengan toggle, serta mode terang/gelap.

## Struktur

```
index.html
assets/
  css/style.css
  js/script.js
  img/favicon.svg
  img/profile.jpg     <- taruh foto profil di sini (belum ada)
  cv/CV_Joni_Hermawan.pdf
  cv/CV_Joni_Hermawan.docx
```

## Menambahkan foto profil

Simpan foto profesional (disarankan persegi, minimal 500x500px, format `.jpg`) sebagai:

```
assets/img/profile.jpg
```

Jika file belum ada, halaman otomatis menampilkan avatar inisial "JH" sebagai fallback — jadi situs tetap tampil rapi tanpa foto.

## Menjalankan secara lokal

Cukup buka `index.html` langsung di browser, atau jalankan server lokal sederhana:

```powershell
# dari folder project
python -m http.server 8000
# lalu buka http://localhost:8000
```

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `portofolio` atau `<username>.github.io`.
2. Inisialisasi git dan push:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. Di GitHub: buka repo → **Settings → Pages** → pada **Source** pilih branch `main` dan folder `/ (root)` → **Save**.
4. Tunggu 1-2 menit, situs akan tersedia di:
   - `https://<username>.github.io/<repo>/` (repo biasa), atau
   - `https://<username>.github.io/` (jika nama repo persis `<username>.github.io`).

Tidak perlu proses build — situs ini murni HTML/CSS/JS statis sehingga langsung kompatibel dengan GitHub Pages.

## Mengubah konten

Semua teks ada langsung di `index.html`, dengan pasangan `<span class="lang-id">...</span>` dan `<span class="lang-en">...</span>` untuk setiap versi bahasa — cukup edit teks di dalam elemen yang sesuai.
