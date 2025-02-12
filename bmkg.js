// BMKG-2025.js - Versi yang telah dienkripsi
const encryptedUrl = "aHR0cHM6Ly9jdWNhYS5ibWtnLmdvLmlkL21hcA==";  // Base64 dari "https://cuaca.bmkg.go.id/map"

// Fungsi untuk mendekripsi Base64 dan mendapatkan URL asli
function decryptUrl(encodedUrl) {
    return atob(encodedUrl);  // Menggunakan fungsi atob() untuk mendekripsi Base64
}

// Dekripsi URL dan memuat peta
const decryptedUrl = decryptUrl(encryptedUrl);
document.write("<!DOCTYPE html>\r\n<html lang=\"id\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <style>\r\n        html, body {\r\n            margin: 0;\r\n            padding: 0;\r\n            height: 100%;\r\n            overflow: hidden;\r\n        }\r\n        iframe {\r\n            width: 100%;\r\n            height: 100vh;\r\n            border: none;\r\n        }\r\n    <\/style>\r\n<\/head>\r\n<body>\r\n    <iframe \r\n    src=\"" + decryptedUrl + "\"\r\n    sandbox=\"allow-scripts allow-same-origin\">\r\n<\/iframe>\r\n<\/body>\r\n<\/html>");
