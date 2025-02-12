# Map-cuaca-indonesia-leaflet-BMKG
# Versi baru (2025)

![screencapture-riswan-nopiyar-github-io-Map-cuaca-indonesia-leaflet-BMKG-2025-02-12-21_34_19](https://github.com/user-attachments/assets/1d0506a8-f785-46a0-a65e-6b1076cbcd6e)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .bmkg-container {
            width: 100%;
            height: 600px;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
        }

        .bmkg-container object {
            width: 100%;
            height: 700px;
            position: absolute;
            top: -67px;
            left: 0;
        }
    </style>
</head>

<body>

<div class="bmkg-container">
    <object id="solarSystem" data="https://cuaca.bmkg.go.id/map" type="text/html" style="border:none;"></object>
</div>

<script>
    async function loadJS() {
        const url = "https://cdn.jsdelivr.net/gh/riswan-nopiyar/Map-cuaca-indonesia-leaflet-BMKG@main/BMKG-2025.js";
        try {
            const response = await fetch(url);
            const scriptText = await response.text();

            const objectElement = document.getElementById("solarSystem");
            const objectDoc = objectElement.contentDocument || objectElement.contentWindow.document;
            objectDoc.open();
            objectDoc.write("<script>" + scriptText + "<\/script>");
            objectDoc.close();
        } catch (error) {
            console.error("Gagal memuat script:", error);
        }
    }

    loadJS();
</script>

</body>
</html>
```

# DIBAWAH versi lama
## Deskripsi
Proyek ini adalah peta cuaca Indonesia menggunakan Leaflet yang memanfaatkan data dari BMKG. Peta ini menampilkan kondisi cuaca terkini di berbagai wilayah Indonesia dengan gambar cuaca yang lebih realistis dan informasi terkait.

## Demo
Anda dapat melihat demo dari proyek ini melalui link berikut:
[Demo](https://riswan-nopiyar.github.io/Map-cuaca-indonesia-leaflet-BMKG/)

## Screenshot
![Screenshot (393)](https://github.com/user-attachments/assets/1937f539-d7f1-4e0c-bd49-4d4c19fa4359)

## Instalasi
Untuk menjalankan proyek ini secara lokal:
1. Clone repositori ini:
   ```bash
   git clone https://github.com/Riswan-Nopiyar/Map-cuaca-indonesia-leaflet-BMKG.git
2. Buka index.html di browser
