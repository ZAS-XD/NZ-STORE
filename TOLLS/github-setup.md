# 🚀 Setup GitHub Pages untuk NZ Store

## Langkah 1: Buat Repository GitHub

1. **Login ke GitHub** - https://github.com
2. **Click "New repository"**
3. **Repository name:** `nz-store` 
4. **Description:** `NZ Store - Windows Installation Service`
5. **Public** (biarkan public agar gratis)
6. **Click "Create repository"**

## Langkah 2: Upload Files

### Option A: GitHub Desktop (Recommended)
1. **Download GitHub Desktop**
2. **Clone repository** yang baru dibuat
3. **Copy semua files** dari folder TOLLS ke folder repository
4. **Commit changes:** "Initial NZ Store website"
5. **Push to GitHub**

### Option B: Web Upload
1. **Buka repository** yang baru dibuat
2. **Click "Add file" → "Upload files"**
3. **Drag & drop semua files** dari folder TOLLS
4. **Commit changes:** "Initial NZ Store website"
5. **Click "Commit new files"**

## Langkah 3: Aktifkan GitHub Pages

1. **Buka repository**
2. **Go to Settings** (tab atas)
3. **Scroll ke "Pages"** (sidebar kiri)
4. **Source:** pilih "GitHub Actions"
5. **Save**

## Langkah 4: Tunggu Deploy

- **Auto-deploy** akan berjalan (1-2 menit)
- **Cek Actions tab** untuk status deploy
- **Website live** di: `https://[username].github.io/nz-store`

## 🎯 Custom Domain (Optional)

### Domain Gratis:
- **nz-store.github.io** (otomatis)
- **[username].github.io/nz-store**

### Pakai Domain Sendiri:
1. **Beli domain** (GoDaddy, Namecheap, dll)
2. **Go to Settings → Pages**
3. **Add custom domain**
4. **Masukkan domain** (misal: nzstore.com)
5. **Setup DNS** sesuai instruksi GitHub

## 📁 Files yang perlu diupload:

```
nz-store/
├── index.html              # Main website
├── README.md               # Documentation
├── .github/
│   └── workflows/
│       └── deploy.yml      # Auto-deploy config
├── emailjs-template.html   # Email template
├── setup-email.js          # Email setup helper
└── template-instructions.txt # Setup guide
```

## 🔥 Keuntungan GitHub Pages:

✅ **100% Gratis** - hosting selamanya  
✅ **Auto SSL** - https otomatis  
✅ **Global CDN** - cepat di seluruh dunia  
✅ **Auto Deploy** - update otomatis  
✅ **Custom Domain** - bisa pakai domain sendiri  
✅ **Version Control** - backup aman  

## 📱 Hasil Akhir:

Website NZ Store akan live di:
- **Default:** `https://[username].github.io/nz-store`
- **Custom:** `https://nzstore.com` (jika beli domain)

Semua fitur akan berjalan normal:
- ✅ Form pemesanan lengkap
- ✅ Email ke izzaadirasya84@gmail.com  
- ✅ Responsive design
- ✅ Animasi Blue Archive theme

**Ready to launch! 🚀**
