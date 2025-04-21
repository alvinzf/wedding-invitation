@extends('layouts.frontend')

@section('content')
    <!-- Header Section -->
    <section class="header-section" id="header">
        <div class="container">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 50px; left: 10%;transform: scale(5);">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 80px; right: 15%;transform: scale(5)">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; bottom: 50px; left: 20%;transform: scale(5)">

            <div class="text-center mb-4">
                <p class="mb-3">We invite you to The Wedding of</p>
                <h1 class="couple-names">Thara & Alvin</h1>
            </div>

            <div class="text-center">
                <img src="https://ext.same-assets.com/3039271263/1754175109.svg" alt="Decorative Element" class="decorative-img" style="max-width: 150px; margin: 20px auto;">
            </div>

            <div class="text-center mt-4">
                <p class="wedding-date">Our Wedding Day</p>
            </div>
        </div>
    </section>

    <!-- Couple Section -->
    <section class="couple-section section" id="couple">
        <div class="container">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 50px; left: 10%;transform: scale(5)">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; bottom: 70px; right: 10%;transform: scale(5)">
            <img src="{{ asset('assets/undangan/images/birds.webp') }}" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 100px; right: 15%;transform: scale(5)">

            <h2 class="section-title">Bride & Groom</h2>

            <div class="text-center mb-5">
                <p>Kami adalah sepasang manusia yang sedang berbahagia. Kami mengundang Bapak/Ibu/Saudara sekalian untuk menghadiri hari bahagia kami</p>
            </div>

            <div class="couple-container">


                <div class="couple-item">
                    <img src="{{ asset('assets/undangan/images/1.jpg') }}" alt="Bride" class="couple-img">
                    <h3 class="couple-name">Redina Thara Alifia</h3>
                    <p class="couple-desc">Lovely Daughter of</p>
                    <p>Tinon Sumudita</p>
                    <p class="mb-3">&</p>
                    <p>Reni Mursidayanti</p>
                    <div class="mt-3">
                        <a href="https://instagram.com/redinathara" target="_blank" class="btn btn-sm btn-outline-secondary rounded-circle">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
                <div class="couple-item">
                    <img src="{{ asset('assets/undangan/images/2.jpg') }}" alt="Groom" class="couple-img">
                    <h3 class="couple-name">Alvin Zulham Firdananta</h3>
                    <p class="couple-desc">Precious Son of</p>
                    <p>(Alm) Tukirin</p>
                    <p class="mb-3">&</p>
                    <p>Susiana Harijanti</p>
                    <div class="mt-3">
                        <a href="https://instagram.com/alvinzulham" target="_blank" class="btn btn-sm btn-outline-secondary rounded-circle">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Countdown Section -->
    <section class="countdown-section section" id="countdown">
        <div class="container">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 30px; left: 5%;transform: scale(5)">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; bottom: 20px; right: 10%;transform: scale(5)">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 50px; right: 20%;transform: scale(5)">

            <div class="countdown-container">
                <div class="countdown-item">
                    <span class="countdown-number" id="days">0</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number" id="hours">0</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number" id="minutes">0</span>
                    <span class="countdown-label">Mins</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number" id="seconds">0</span>
                    <span class="countdown-label">Secs</span>
                </div>
            </div>

            <div class="text-center mt-4">
                <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Vidi+%26+Hening&details=Visit+the+invitation+here+https%3A%2F%2Fviding.co%2Ftheme%2Fpreview%2F99&dates=20270508T080000%2F20270508T100000&ctz=Asia%2FJakarta" target="_blank" class="btn btn-primary">
                    Save the Date
                </a>
            </div>
        </div>
    </section>

    <!-- Story Section -->
    <section class="story-section section" id="story">
        <div class="container">
            <img src="https://ext.same-assets.com/3039271263/251837068.webp" alt="Background" class="position-absolute top-0 start-0 w-100 h-100" style="object-fit: cover; z-index: -2; opacity: 0.3;">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 50px; left: 10%;transform: scale(5)">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; bottom: 80px; right: 15%;transform: scale(5)">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 100px; right: 10%;transform: scale(5)">

            <h2 class="section-title">Our Story</h2>

            <div class="story-content">
                <p><em>Cinta tidak kenal waktu, kondisimu, berapa usiamu, dan siapa kamu. Cinta adalah pendekripsian yang tidak ada habisnya. Cinta bukan apa-apa bagi yang tidak pernah merasakan. Sebab ia hanya sebuah kata. Mudah di ucap. Namun tidak mudah untuk di jelaskan. Cinta itu yang kami rasakan. Cinta itu adalah asal mula. Asal Mula yang kami rasakan melalui sebuah jaringan sosial media. Berawal dari Aditya menyapa Melissa. Usut punya usut, kedekatan itu pun terjalin hanya melalui sosmed.Disanalah kami memulai menulis cerita dalam sebuah buku yang sama merasakan hal yang sama tanpa dipaksa. Tepat tanggal 11 bulan Juli Tahun 2012 kami pun menjalin suatu ikatan. Kami yakin Allah SWT telah merencanakannya,singkat dan bermakna pendekatan yang dilakukan hanya satu minggu.</em></p>
            </div>

            <div class="text-center mt-4">
                <img src="https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:0:0:1/g:no/aHR0cHM6Ly9wZXRyYS52aWRpbmcuY28vZ2FsbGVyeS9rczNPY3BoRVJKU1VJblc4YnFwMnpmVjBwS2hWOWVobnVtVTNkNHRaLmpwZw.webp" alt="Our Story" class="img-fluid rounded" style="max-width: 300px;">
            </div>
        </div>
    </section>

    <!-- Venue Section -->
    <section class="venue-section section" id="venue">
        <div class="container">
            <h2 class="section-title">Lokasi</h2>

            <div class="text-center mb-5">
                <p>Dengan penuh rasa hormat kami mengharapkan kehadiran Bapak/Ibu/Saudara sekalian pada Acara Pernikahan kami yang akan kami laksanakan pada :</p>
                <h5 class="mt-4"><strong>Minggu, 5 Mei 2025</strong></h5>
                <p class="mt-3">Besar harapan kami akan kehadiran Bapak/Ibu/Saudara sekalian tentunya dengan memperhatikan anjuran dari Pemerintah. Untuk itu kami memberlakukan protokol kesehatan sebagaimana instruksi dibawah ini</p>
            </div>

            <div class="venue-container">
                <div class="venue-card">
                    <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 20px; left: 20px; z-index: 1;">
                    <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; bottom: 20px; right: 20px; z-index: 1;">
                    <img src="https://ext.same-assets.com/3039271263/4011952335.svg" alt="Wedding Icon" class="mb-3" style="width: 60px; height: auto; position: relative; z-index: 1;">

                    <div class="venue-card-content">
                        <h4 class="venue-title">Acara Pernikahan</h4>

                        <div class="venue-date">
                            <p>Saturday</p>
                            <h5 class="my-2">08</h5>
                            <p>May 2027</p>
                        </div>

                        <div class="venue-time">
                            <p>08:00 - 10:00</p>
                        </div>

                        <div class="dress-code">
                            <p><em><strong>Dress Code :</strong></em></p>
                            <p>We kindly ask that you wear these colors to our special day</p>
                            <img src="https://ext.same-assets.com/3039271263/1393517608.png" alt="Dress Code" class="img-fluid mt-2" style="max-width: 150px;">
                            <p>Any kind of <strong>pastel</strong></p>
                        </div>

                        <div class="venue-address mt-4">
                            <h5>Hotel Shangri-La</h5>
                            <p>Jl. Jend. Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220</p>
                            <a href="#" class="btn btn-sm btn-outline-primary mt-2">Location</a>
                        </div>
                    </div>
                </div>

                <div class="venue-card">
                    <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 20px; left: 20px; z-index: 1;">
                    <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; bottom: 20px; right: 20px; z-index: 1;">
                    <img src="https://ext.same-assets.com/3039271263/2583020092.svg" alt="Reception Icon" class="mb-3" style="width: 60px; height: auto; position: relative; z-index: 1;">

                    <div class="venue-card-content">
                        <h4 class="venue-title">Resepsi</h4>

                        <div class="venue-date">
                            <p>Saturday</p>
                            <h5 class="my-2">08</h5>
                            <p>May 2027</p>
                        </div>

                        <div class="venue-time">
                            <p>15:00 - 17:00</p>
                        </div>

                        <div class="dress-code">
                            <p><em><strong>Dress Code :</strong></em></p>
                            <p>We kindly ask that you wear these colors to our special day</p>
                            <img src="https://ext.same-assets.com/3039271263/1393517608.png" alt="Dress Code" class="img-fluid mt-2" style="max-width: 150px;">
                            <p>Any kind of <strong>pastel</strong></p>
                        </div>

                        <div class="venue-address mt-4">
                            <h5>Hotel Shangri-La</h5>
                            <p>Jl. Jend. Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220</p>
                            <a href="#" class="btn btn-sm btn-outline-primary mt-2">Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- RSVP Section -->
    <section class="rsvp-section section" id="rsvp">
        <div class="container">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 50px; left: 10%;">

            <h2 class="section-title">RSVP</h2>

            <form id="rsvpForm" class="rsvp-form">
                <div class="form-group">
                    <label for="name" class="form-label">Nama</label>
                    <input type="text" class="form-control" id="name" required>
                </div>

                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>

                <div class="form-group">
                    <label class="form-label d-block">Kehadiran</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="attendance" id="hadir" value="hadir" checked>
                        <label class="form-check-label" for="hadir">Hadir</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="attendance" id="tidak-hadir" value="tidak-hadir">
                        <label class="form-check-label" for="tidak-hadir">Tidak Hadir</label>
                    </div>
                </div>

                <div class="form-group">
                    <label for="guests" class="form-label">Jumlah Tamu</label>
                    <select class="form-select" id="guests">
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                        <option value="3">3 Orang</option>
                        <option value="4">4 Orang</option>
                    </select>
                </div>

                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary">Kirim RSVP</button>
                </div>
            </form>
        </div>
    </section>

    <!-- Wishes Section -->
    <section class="wishes-section section" id="wishes">
        <div class="container">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 50px; left: 10%;">

            <h2 class="section-title">Wedding Wishes</h2>

            <form id="wishesForm" class="rsvp-form mb-5">
                <div class="form-group">
                    <label for="wishName" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="wishName" required>
                </div>

                <div class="form-group">
                    <label for="wishMessage" class="form-label">Your Message</label>
                    <textarea class="form-control" id="wishMessage" rows="3" maxlength="300" required></textarea>
                    <div class="text-end mt-1">
                        <small>Characters left: <span id="charCount">300</span></small>
                    </div>
                </div>

                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary">Send Wish</button>
                </div>
            </form>

            <div class="wishes-container">
                <div class="wish-item">
                    <div class="wish-header">
                        <div class="wish-avatar">V</div>
                        <div>
                            <div class="wish-name">Viding</div>
                            <div class="wish-date">1 year ago at 13:27</div>
                        </div>
                    </div>
                    <div class="wish-message">Happy Wedding</div>
                </div>
            </div>
        </div>
    </section>

    <!-- E-Angpao Section -->
    <section class="angpao-section section" id="angpao">
        <div class="container">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 50px; left: 10%;">

            <h2 class="section-title">E-Angpao</h2>

            <div class="text-center mb-5">
                <p>Bapak/Ibu/Saudara sekalian dapat memberikan hadiah digital kepada kami melalui form dibawah. Bagi yang telah mengisi dan memberikan hadiah kepada kami, kami mengucapkan banyak terimakasih. Semoga hadiah dari Bapak/Ibu/Saudara dapat bermanfaat bagi kami dalam mengarungi bahtera rumah tangga</p>
            </div>

            <form id="giftForm" class="rsvp-form mb-5">
                <div class="form-group">
                    <label for="giftAmount" class="form-label">Amount</label>
                    <div class="input-group">
                        <span class="input-group-text">Rp</span>
                        <input type="number" class="form-control" id="giftAmount" min="1" required>
                    </div>
                </div>

                <div class="form-check mt-3">
                    <input class="form-check-input" type="checkbox" id="anonymous">
                    <label class="form-check-label" for="anonymous">
                        Show as Anonymous
                    </label>
                </div>

                <div class="text-center mt-4">
                    <button type="submit" class="btn btn-primary">Send Gift</button>
                </div>
            </form>

            <div class="gift-container">
                <div class="gift-item">
                    <div class="gift-label">Terbeli</div>
                    <img src="https://ext.same-assets.com/3039271263/1202359131.webp" alt="Water Heater" class="img-fluid">
                    <div class="gift-title">Water Heater</div>
                    <div class="gift-price">Rp. 3.725.000,00</div>
                </div>

                <div class="gift-item">
                    <div class="gift-label">Terbeli</div>
                    <img src="https://ext.same-assets.com/3039271263/3371120061.webp" alt="Cooker Hood" class="img-fluid">
                    <div class="gift-title">Cooker Hood</div>
                    <div class="gift-price">Rp. 5.358.111,00</div>
                </div>

                <div class="gift-item">
                    <div class="gift-label">Terbeli</div>
                    <img src="https://ext.same-assets.com/3039271263/1842517854.webp" alt="Coffee Maker" class="img-fluid">
                    <div class="gift-title">Coffee Maker</div>
                    <div class="gift-price">Rp. 799.000,00</div>
                </div>

                <div class="gift-item">
                    <div class="gift-label">Terbeli</div>
                    <img src="https://ext.same-assets.com/3039271263/106601712.webp" alt="Hotel Honeymoon" class="img-fluid">
                    <div class="gift-title">Hotel Honeymoon</div>
                    <div class="gift-price">Rp. 704.000,00</div>
                </div>
            </div>
        </div>

        <!-- Thank You Modal -->
        <div class="modal fade" id="thankYouModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body text-center p-5">
                        <img src="https://ext.same-assets.com/3039271263/3824770407.png" alt="Thank You" class="img-fluid mb-4" style="max-width: 100px;">
                        <h4 class="mb-3">Terima Kasih</h4>
                        <p>Terima Kasih untuk hadiah yang telah kamu berikan. Kamu juga bisa konfirmasi langsung ke mempelai untuk pemberian hadiah. Detail telah kami kirimkan melalu email.</p>
                        <button type="button" class="btn btn-secondary mt-3" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Apology Section -->
    <section class="section" id="apology">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title">Apology</h2>
                <div class="mt-4">
                    <p>Tanpa mengurangi rasa hormat, Izinkan kami mengharapkan kehadiran Bapak/lbu/Saudara/i melalui undangan digital ini, serta dapat memberikan doa restu kepada kami.</p>
                    <p class="mt-3">Terima kasih.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Livestream Section -->
    <section class="livestream-section section" id="livestream">
        <div class="container">
            <div class="livestream-content">
                <h2 class="section-title">Live Streaming</h2>

                <div class="text-center mt-5">
                    <h3 class="mb-4">Susunan Acara Live Wedding</h3>
                    <p>10.00 - Acara Pernikahan</p>
                </div>

                <div class="text-center mt-5">
                    <h3 class="mb-4">Live Wedding</h3>
                    <p>Silahkan menonton melalui YouTube Live mempelai untuk menyaksikan serangkaian acara pernikahan secara Live.</p>
                    <a href="https://www.youtube.com/watch/SzPrFMFqFwM" target="_blank" class="livestream-btn">Join Youtube</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Thank You Section -->
    <section class="thankyou-section section" id="thankyou">
        <div class="container">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; top: 50px; left: 10%;">
            <img src="{{ asset('assets/undangan/images/flower.webp') }}" alt="Decorative Branch" class="decorative-element branch-1" style="position: absolute; bottom: 50px; right: 10%;">
            <img src="assets/undangan/images/birds.webp" alt="Decorative Bird" class="decorative-element bird-1" style="position: absolute; top: 100px; right: 15%;">

            <h2 class="section-title">Thank You</h2>

            <div class="thankyou-content">
                <p>Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri seluruh rangkaian acara pernikahan kami. Semoga waktu yang diberikan oleh Bapak/Ibu/Saudara sekalian menjadi berkah dan manfaat yang kelak dibalas oleh Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan. Semoga kami menjadi pasangan yang berbahagia dunia dan akhirat :)</p>
            </div>
        </div>
    </section>
@endsection

@push('styles')
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
@endpush
