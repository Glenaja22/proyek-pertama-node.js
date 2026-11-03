// 1. Panggil modul http bawaan Node.js
const http = require('http');

// 2. Tentukan alamat server dan port-nya
const hostname = '127.0.0.1'; // Ini artinya localhost
const port = 3000;           // Kita pakai pintu (port) nomor 3000

// 3. Buat server-nya
const server = http.createServer((req, res) => {
  // Ini adalah pengaturan respons yang dikirim ke browser
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Halo! Ini adalah server Node.js pertama saya.\n');
});

// 4. Nyalakan servernya
server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});