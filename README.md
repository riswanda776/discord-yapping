# 🤖 Yapping Discord Selfbot & Auto React

Script selfbot untuk Discord yang mampu:
- Mengirim pesan otomatis dengan template acak ke suatu channel
- Memberikan auto-react (emoji khusus) ke pesan orang lain secara otomatis

### ⚠️ Peringatan
> **Selfbot dilarang oleh Discord. Gunakan dengan risiko sendiri.**  
> Script ini dibuat untuk **tujuan edukasi** dan eksperimen pribadi.

---

## ✨ Fitur

- 🧠 **Auto Chatting:** Mengirim pesan template ke channel tertentu dengan interval yang diatur.
- 🔁 **Auto React:** Memberi reaksi otomatis (emoji custom/orologo) pada semua pesan di channel tertentu (selain pesan sendiri).
- 🧩 Mendukung banyak token sekaligus untuk auto spam.

---

## 📁 Struktur File

```bash
yapping-selfbot/
├── yapping.js        # Script auto chat
├── auto-react.js     # Script auto react
├── package.json
└── README.md
```

---

## 🛠️ Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/yapping-selfbot.git
cd yapping-selfbot
```

### 2. Install Dependency

```bash
npm install discord.js-selfbot-v13
```

---

## ⚙️ Konfigurasi

### A. Konfigurasi `yapping.js`

- Tambahkan token-token Discord kamu:
```js
const TOKENS = [
  "TOKEN_DISCORD_1",
  "TOKEN_DISCORD_2",
  ...
];
```

- Ganti ID channel yang ingin kamu spam:
```js
const CHANNEL_ID = "ID_CHANNEL_DISCORD_TARGET";
```

---

### B. Konfigurasi `auto-react.js`

- Ganti token:
```js
const DISCORD_AUTH = "TOKEN_DISCORD_KAMU";
```

- Ganti channel ID:
```js
const CHANNEL_ID = "ID_CHANNEL_DISCORD_TARGET";
```

---

## 🚀 Menjalankan Bot

### Jalankan Auto Chat
```bash
node yapping.js
```

### Jalankan Auto React
```bash
node auto-react.js
```

### Rekomendasi: Jalankan via PM2 (optional)
```bash
npm install -g pm2
pm2 start yapping.js
pm2 start auto-react.js
```

---

## 🔑 Cara Ambil Token Discord

📚 Referensi lengkap: [Gist by MarvNC](https://gist.github.com/MarvNC/e601f3603df22f36ebd3102c501116c6)

### Langkah-langkah:
1. Buka [https://discord.com](https://discord.com) lewat browser.
2. Tekan `F12` → buka tab `Console`.
3. Paste script ini:
```js
window.webpackChunkdiscord_app.push([[Math.random()],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]);
m.find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();
```
4. Tekan `Enter`. Token kamu akan muncul.

⚠️ **Jangan bagikan token ke siapa pun!** Token memberikan akses penuh ke akun Discord kamu.

---

## 💬 Template Chat Default

Sudah termasuk lebih dari 50+ template chat auto-yapping seperti:

> "ngopi abangkuh", "info lc bang", "cape ga bang mengbadut kaya gini", "gasken push", "oro adalah jalan ninjaku", dll.

Bisa ditambah atau diubah di variabel `chatTemplates` di `yapping.js`.

---

## 📄 Lisensi

MIT License © 2025 - Gunakan secara bertanggung jawab.