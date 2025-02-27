<video id="qr-video" class="hidden w-full mt-4"></video>

<script src="https://unpkg.com/html5-qrcode"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const scanBtn = document.getElementById('scanQR');
        if (!scanBtn) return; // Prevent script from loading on other pages

        scanBtn.addEventListener('click', function () {
            let video = document.getElementById('qr-video');
            video.classList.toggle('hidden');

            const html5QrCode = new Html5Qrcode("qr-video");

            html5QrCode.start(
                { facingMode: "environment" },
                { fps: 10, qrbox: 250 },
                qrCodeMessage => {
                    document.getElementById('codeInput').value = qrCodeMessage;
                    html5QrCode.stop();
                    video.classList.add('hidden');
                }
            ).catch(err => console.error(err));
        });
    });
</script>

<button id="scanQR" class="bg-blue-500 text-white p-2 rounded-md mt-2">
    Scan QR
</button>
