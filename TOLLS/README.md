# NZ Store - Windows Installation Service

Website service install Windows dengan tema Blue Archive untuk NZ Store.

## Fitur

### 🎮 Tema Blue Archive Gaming
- Desain modern dengan gradasi biru yang memukau
- Animasi partikel mengambang yang dinamis
- Logo NZ Store dengan efek glow dan shine
- Responsive design untuk semua perangkat

### 💻 Form Pemesanan Lengkap
- **Pilihan Merek Laptop**: ASUS, Acer, Lenovo, HP, Dell, MSI, Toshiba, Samsung, LG, Razer, Gigabyte, Avita, Xiaomi, Huawei, Microsoft Surface, Apple MacBook, dan lainnya
- **Tahun Keluaran**: Dari 2008 hingga 2024
- **Pilihan Windows**: Windows 11, Windows 10, Windows 8.1, Windows 7, Windows Server 2022, Windows Server 2019
- **Kapasitas RAM**: 2GB hingga 64GB
- **OS Modifikasi**: Khusus untuk RAM 4GB (Spectre, Tiny11, Revolt OS, Ghost Spectre, LTS)
- **Data Pelanggan**: Nama lengkap dan nomor telepon

### 📧 Sistem Pengiriman Email
- Otomatis mengirim pesanan ke email 
- Konfirmasi langsung setelah pengiriman berhasil
- Notifikasi loading dan success yang user-friendly

## Setup EmailJS

Untuk mengaktifkan pengiriman email, Anda perlu:

1. **Daftar EmailJS** di [https://www.emailjs.com/](https://www.emailjs.com/)
2. **Buat Service** dengan Gmail provider
3. **Buat Template** dengan variabel berikut:
   - `laptop_brand`
   - `year`
   - `windows_version`
   - `ram`
   - `modified_os`
   - `name`
   - `phone`
   - `to_email`

4. **Update Kode** di `index.html`:
   ```javascript
   // Ganti YOUR_PUBLIC_KEY dengan public key dari EmailJS
   emailjs.init("YOUR_PUBLIC_KEY");
   
   // Ganti YOUR_SERVICE_ID dan YOUR_TEMPLATE_ID
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
   ```

## Template EmailJS

Gunakan template HTML berikut di EmailJS:

**Subject:** `Pesanan Install Windows - {{name}}`

**Body:**
```html
<h2>Pesanan Baru dari NZ Store</h2>
<p><strong>Nama:</strong> {{name}}</p>
<p><strong>Telepon:</strong> {{phone}}</p>
<p><strong>Merek Laptop:</strong> {{laptop_brand}}</p>
<p><strong>Tahun Keluaran:</strong> {{year}}</p>
<p><strong>Windows Version:</strong> {{windows_version}}</p>
<p><strong>Kapasitas RAM:</strong> {{ram}}</p>
{{#modified_os}}<p><strong>OS Modifikasi:</strong> {{modified_os}}</p>{{/modified_os}}
<hr>
<p><em>Pesanan dikirim pada: {{date}}</em></p>
```

## Cara Menggunakan

1. **Buka website** di browser
2. **Isi form** dengan lengkap
3. **Klik "Kirim Pesanan"**
4. **Tunggu konfirmasi** pengiriman berhasil
5. **Cek email** untuk detail pesanan

## Teknologi

- **HTML5** dengan semantic markup
- **Tailwind CSS** untuk styling
- **Font Awesome** untuk icons
- **EmailJS** untuk pengiriman email
- **JavaScript Vanilla** untuk interaktivitas
- **Google Fonts** (Orbitron & Inter)

## Fitur Animasi

- **Gradient Background** yang bergerak dinamis
- **Floating Particles** dengan animasi smooth
- **Logo Glow Effect** dengan pulse animation
- **Form Focus Effects** dengan scale transform
- **Button Hover Effects** dengan shine animation
- **Success Message** dengan slide-in animation

## Responsive Design

Website ini sepenuhnya responsive dan bekerja dengan baik di:
- Desktop (1920x1080+)
- Laptop (1366x768+)
- Tablet (768x1024)
- Mobile (360x640+)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

**NZ Store © 2024 - Windows Installation Service**
