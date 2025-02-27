<div class="flex items-center space-x-2">
    <input type="text" id="searchInput" placeholder="Search..."
        class="border p-2 rounded-md w-full"
        oninput="searchData(this.value)">

    <button id="scanQR" class="bg-blue-500 text-white p-2 rounded-md">
        Scan QR
    </button>
</div>

<video id="qr-video" class="hidden w-full mt-4"></video>

<script src="https://unpkg.com/html5-qrcode"></script>
<script>
    document.getElementById('scanQR').addEventListener('click', function () {
        let video = document.getElementById('qr-video');
        video.classList.toggle('hidden');

        const html5QrCode = new Html5Qrcode("qr-video");

        html5QrCode.start(
            { facingMode: "environment" },
            { fps: 10, qrbox: 250 },
            qrCodeMessage => {
                document.getElementById('searchInput').value = qrCodeMessage;
                searchData(qrCodeMessage);
                html5QrCode.stop();
                video.classList.add('hidden');
            }
        ).catch(err => console.error(err));
    });

    function searchData(value) {
        console.log("Searching for:", value);
        // Implement your search logic here, possibly making an AJAX request
    }
</script>
