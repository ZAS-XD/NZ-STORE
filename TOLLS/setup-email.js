// EmailJS Setup Helper
// File ini berisi contoh konfigurasi EmailJS yang sudah siap digunakan

// 1. Public Key (dapatkan dari EmailJS dashboard -> Account -> General)
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY_HERE";

// 2. Service ID (dapatkan dari EmailJS dashboard -> Email Services)
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID_HERE";

// 3. Template ID (dapatkan dari EmailJS dashboard -> Email Templates)
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID_HERE";

// Template untuk EmailJS
const emailTemplate = {
    subject: "Pesanan Install Windows - {{name}}",
    html_content: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; margin: -30px -30px 30px -30px; border-radius: 10px 10px 0 0; text-align: center; }
                .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #333; }
                .value { color: #666; margin-left: 10px; }
                .footer { text-align: center; color: #999; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">NZ Store</div>
                    <h2>Pesanan Baru - Windows Installation Service</h2>
                </div>
                
                <div class="field">
                    <span class="label">👤 Nama Pelanggan:</span>
                    <span class="value">{{name}}</span>
                </div>
                
                <div class="field">
                    <span class="label">📞 Nomor Telepon:</span>
                    <span class="value">{{phone}}</span>
                </div>
                
                <div class="field">
                    <span class="label">💻 Merek Laptop:</span>
                    <span class="value">{{laptop_brand}}</span>
                </div>
                
                <div class="field">
                    <span class="label">📅 Tahun Keluaran:</span>
                    <span class="value">{{year}}</span>
                </div>
                
                <div class="field">
                    <span class="label">🪟 Windows Version:</span>
                    <span class="value">{{windows_version}}</span>
                </div>
                
                <div class="field">
                    <span class="label">🧠 Kapasitas RAM:</span>
                    <span class="value">{{ram}}</span>
                </div>
                
                {{#modified_os}}
                <div class="field">
                    <span class="label">🎯 OS Modifikasi:</span>
                    <span class="value">{{modified_os}}</span>
                </div>
                {{/modified_os}}
                
                <div class="footer">
                    <p>Pesanan dikirim pada: {{date}}</p>
                    <p>NZ Store - Windows Installation Service</p>
                    <p>Blue Archive Edition 🎮</p>
                </div>
            </div>
        </body>
        </html>
    `
};

// Cara update di index.html:
/*
1. Buka index.html
2. Cari baris ini:
   emailjs.init("YOUR_PUBLIC_KEY");
3. Ganti dengan:
   emailjs.init("EMAILJS_PUBLIC_KEY_YANG_ASLI");

4. Cari baris ini:
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
5. Ganti dengan:
   emailjs.send('EMAILJS_SERVICE_ID_YANG_ASLI', 'EMAILJS_TEMPLATE_ID_YANG_ASLI', formData)
*/

console.log("EmailJS Setup Helper Loaded");
console.log("Jangan lupa update public key, service ID, dan template ID di index.html");
