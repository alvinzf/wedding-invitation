$(document).ready(function () {
    // Gallery logic
    let current = 0;
    const $gallery = $("#invitation-gallery");
    const $images = $gallery.find(".gallery-image");
    const $thumbnails = $gallery.find(".gallery-thumbnail");
    function showImage(idx) {
        $images.removeClass("active");
        $thumbnails.removeClass("active");
        $($images[idx]).addClass("active");
        $($thumbnails[idx]).addClass("active");
        current = idx;
    }
    $gallery.find(".gallery-arrow-left").click(function () {
        let idx = current === 0 ? $images.length - 1 : current - 1;
        showImage(idx);
    });
    $gallery.find(".gallery-arrow-right").click(function () {
        let idx = current === $images.length - 1 ? 0 : current + 1;
        showImage(idx);
    });
    $thumbnails.click(function () {
        const idx = $(this).data("index");
        showImage(idx);
    });

    // Smooth scroll if needed on nav links
    $(document).on("click", 'a[href^="#"]', function (e) {
        var hash = $(this).attr("href");
        if (hash.length > 1 && $(hash).length) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: $(hash).offset().top }, 600);
        }
    });

    // Invitation audio trigger: play on first click anywhere
    let isAudioPlayed = false;
    function playAudio() {
        if (!isAudioPlayed) {
            const audio = document.getElementById("invitation-audio");
            if (audio && audio.src) audio.play();
            isAudioPlayed = true;
        }
    }
    $(window).one("click keydown touchstart", playAudio);

    // Copy invitation
    $(".invitation-btn-copy").click(function () {
        const text =
            "Welcome to the Wedding of Wanita & Pria - 05 May 2025 — Vidi & Hening";
        navigator.clipboard.writeText(text).then(function () {
            alert("Invitation copied to clipboard");
        });
    });
    // Share via WhatsApp
    $(".invitation-btn-share").click(function () {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(
            "Join the wedding: Vidi & Hening, 05 May 2025"
        );
        window.open(`https://wa.me/?text=${text} %0A${url}`, "_blank");
    });
    // Prevent actual form submit
    $(".invitation-form").submit(function (e) {
        e.preventDefault();
        alert("Your wish has been sent!"); // Placeholder behaviour
        $(this).trigger("reset");
    });
});
