// AES Encryption untuk URL
var CryptoJS = require("crypto-js");
var url = "https://cuaca.bmkg.go.id/map";

// Kunci untuk enkripsi (harus disimpan dengan aman, jangan diletakkan di client-side)
var key = "your-secret-key"; // Misalnya gunakan kunci yang kuat dan aman

// Enkripsi URL
var encrypted = CryptoJS.AES.encrypt(url, key).toString();

console.log(encrypted);
