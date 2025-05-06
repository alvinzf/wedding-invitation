<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="title" content="Thara & Alvin - 27 September 2025">
<meta name="description" content="Thara & Alvin - 27 September 2025">


    {{-- <link rel="stylesheet" href="{{ asset('assets/invitation/theme/fonts/font.css?v=0e5bc0e164a62faa01633068973e7c1f8fc370db')}}">    <!-- Preconnect --> --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">

    <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="{{ asset('assets/invitation/theme/theme_40/assets/css/vendor.css?v=4224221d5224d8d4ea99f99574a5bb453ef2a2d8')}}">

    <link rel="stylesheet" href="{{ asset('assets/invitation/theme/theme_79/assets/css/styles.css?v=9ad0c73438b45a8f4a4c849946fd33306a8b92ce')}}">

    <link rel="stylesheet" href="{{ asset('assets/invitation/theme/assets/css/gift_registry.css?v=657207515c1330cf2fbecf68a819b37584123712')}}">


        </head>


<body>
    <div class="main-app">
        <!-- Loader -->
        <div class="loader-wrapper">
            <img src="{{ asset('assets/undangan/images/loading.gif')}}" alt="loading" class="spinner">
            <span>Loading</span>
        </div>
        <script>
            document.onreadystatechange = () => {
                if (document.readyState !== "complete") {
                    document.querySelector(".loader-wrapper").style.visibility = "visible";
                } else {
                    document.querySelector(".loader-wrapper").style.visibility = "hidden";
                    runAnimationOrnamentCover();
                }
            };
        </script>

        <!-- progress -->
        <div class="progress"></div>

                    <div class="position-fixed d-flex m-4 p-0" style="bottom: 0; right: 0px; z-index: 11;">
                <button id="musicControl" class="btn btn-green m-auto c-pointer btn-control">
                    <i id="playPause" class="icofont-ui-pause text-white mx-auto my-auto"></i>
                </button>
            </div>
{{-- remove this later --}}
                    <!-- Remove Color Picker Wrapper -->
        <!-- <div class="colorpicker__wrapper" style="display: none;"> -->
        <!-- ...existing code... -->
        <!-- </div> -->
        <!-- Envelope Section -->
        <section class="cover-section">
            <div class="elements-wrapper-absolute">
                <div class="background-element">
                    <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-art" width="1440" height="810">
                </div>
            </div>
            <div class="container h-100">
                <div class="cover-wrapper h-100">
                    <div class="col-lg-5 col-md-6">
                        <div class="cover-content">
                            <div class="cover-body">
                                <div class="background-full" data-anim="height-down" data-anim-delay="500"></div>

                                <div class="cover-description" data-anim="zoom-in" data-anim-delay="1500">
                                    <div class="text-center w-100">Yth. {{ $to }}</div>
                                    <p>Kami mengundang anda dalam Acara Pernikahan</p>
                                    <h1 class="title cover_style">Thara & Alvin</h1>
                                    <p>Sabtu, 27 September 2025</p>
                                    </div>
                            </div>
                            <div class="elements-widget" data-anim="zoom-in" data-anim-delay="1500">
                                <button class="btn btn-custom color-secondary" id="btn-envelope">
                                    <strong>Buka Undangan <i class="fas fa-envelope-open-text"></i></strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="moveable_section_wrapper">
            <!-- Header section -->
            <section class="header-section">
                <div class="elements-absolute">
                    <div class="background-element">
                        <div class="background-wrapper">
                            <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-town" width="1440" height="810">
                        </div>
                    </div>
                </div>
                <div class="overlay-elements-gradient overlay-bottom"></div>
                <div class="container h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-md-12">
                            <div class="header-content" data-anim="slide-up">
                                <div class="background-full" data-anim="width-left" data-anim-delay="500"></div>
                                <div class="d-flex justify-content-center flex-wrap">
                                    <div class="col-md-5 col-12">
                                        <div class="header">
                                            <div class="header-title" data-anim="fade-down" data-anim-delay="1500">
                                                                                                    <h1 class="title mb-3 main_style notranslate">Thara & <br> Alvin</h1>
                                                                                                <div><p><span style="font-size: 12pt;">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir </span></p></div>
                                                                                                <div><p><span style="font-size: 12pt;"><strong> QS. Ar-Rum: 21 </strong></span></p></div>
                                            </div>
                                            <div class="scroll-icon">
                                                <svg data-anim="slide-down" width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.6" x="0.5" y="0.5" width="27" height="41" rx="13.5" stroke="#757346" />
                                                    <rect id="scroll-animate" opacity="0.6" x="12" y="6.66699" width="4" height="9.33333" rx="2" fill="#A79E74" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-12 position-relative">
                                        <div class="orn-1">
                                            <div data-anim="slide-left" data-anim-delay="2000">
                                                <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose-1" class="img-fluid animate-loop" data-anim="rotate-left" data-anim-delay="1000">
                                            </div>
                                        </div>
                                        <div class="image-wrapper shadow">
                                            <img src="{{ asset('assets/undangan/images/7.jpg') }}" alt="header-background" class="background-header parallax">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                            <!-- Couple section -->
                <section class="couple-section moveable-section" data-id="1">
                    <div class="elements-absolute">
                        <div class="overlay-elements-gradient overlay-top"></div>
                        <div class="background-element">
                            <div class="background-wrapper">
                                <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-town" width="1440" height="810">
                            </div>
                        </div>
                    </div>
                    <div class="overlay-elements-gradient overlay-bottom"></div>
                    <div class="container position-relative">
                        <div class="row justify-content-evenly">
                            <div class="col-lg-8 col-md-10 text-center mb-5 position-relative">
                                <div class="orn-1">
                                    <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-right">
                                </div>
                                <div class="couple-content">
                                    <div class="title-section " data-anim="fade-down">
                                        <h2>Assalamualaikum Warahmatullahi Wabarakatuh</h2>
                                    </div>
                                    <div data-anim="zoom-in">
                                        <p>Kami mengundang Bapak/Ibu/Saudara untuk menghadiri hari bahagia kami</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-4 position-relative">
                                                            <div class="col-md-6 col-xl-5">
                                    <div class="couple" data-anim="fade-down">
                                        <div class="background-full" data-anim="height-down" data-anim-delay="500"></div>
                                                                                    <div class="image-wrap">
                                                <img src="{{ asset('assets/undangan/images/1.jpg') }}" alt="couple" class="couple-image women">
                                            </div>
                                                                                <div class="couple-description" data-anim="zoom-in">
                                            <h3 class="bride_style notranslate">Redina Thara Alifia</h3>
                                            <div class="couple-parent">
                                                                                                    <div class="couple-parent-description">
                                                                                                                    <p>Putri pertama dari</p>
                                                                                                            </div>

                                                    <div class="couple-parent-name">
                                                        <p class="notranslate">Bapak Tinon Sumudita & Ibu Reni Mursidayanti</p>
                                                    </div>
                                                                                            </div>
                                                                                            <div class="sosmed-wrap mt-3">
                                                    <a href="https://instagram.com/redinathara" class="sosmed notranslate" target="_blank" rel="noopener noreferrer">
                                                        <small><i class="fab fa-instagram"></i> redinathara</small>
                                                    </a>
                                                </div>
                                                                                    </div>
                                    </div>
                                </div>
                                <div class="and"><span>&</span></div>
                                <div class="col-md-6 col-xl-5">
                                    <div class="couple" data-anim="fade-down">
                                        <div class="background-full" data-anim="height-down" data-anim-delay="500"></div>
                                                                                    <div class="image-wrap">
                                                <img src="{{ asset('assets/undangan/images/2.jpg') }}" alt="couple" class="couple-image man">
                                            </div>
                                                                                <div class="couple-description" data-anim="zoom-in">
                                            <h3 class="bride_style notranslate">Alvin Zulham Firdananta</h3>
                                            <div class="couple-parent">
                                                                                                    <div class="couple-parent-description">
                                                                                                                    <p>Putra keempat dari</p>
                                                                                                            </div>

                                                    <div class="couple-parent-name">
                                                        <p class="notranslate">Bapak (Alm) Tukirin & Ibu Susiana Harijanti</p>
                                                    </div>
                                                                                            </div>
                                                                                            <div class="sosmed-wrap mt-3">
                                                    <a href="https://instagram.com/alvinzulham" class="sosmed notranslate" target="_blank" rel="noopener noreferrer">
                                                        <small><i class="fab fa-instagram"></i> alvinzulham </small>
                                                    </a>
                                                </div>
                                                                                    </div>
                                    </div>
                                </div>
                                                    </div>
                        <div class="row justify-content-center">
                            <div class="col-md-10 col-lg-9 col-xl-7">
                                <div class="reminder-wrap shadow" data-anim="slide-up">
                                    <div class="countdown" id="countdown" data-anim="zoom-in">
                                        <div class="days">
                                            <p class="angka" id="days">00</p>
                                            <p class="huruf">Days</p>
                                        </div>
                                        <div class="hours">
                                            <p class="angka" id="hours">00</p>
                                            <p class="huruf">Hours</p>
                                        </div>
                                        <div class="minutes">
                                            <p class="angka" id="minutes">00</p>
                                            <p class="huruf">Mins</p>
                                        </div>
                                        <div class="seconds">
                                            <p class="angka" id="seconds">00</p>
                                            <p class="huruf">Secs</p>
                                        </div>
                                    </div>

                                    									<a href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=The+Wedding+of+Thara+%26+Alvin&amp;details=Visit+the+invitation+here+<a href='#'>#</a>&amp;dates=20250927T110000%2F20250927T130000&amp;ctz=Asia%2FJakarta" target="_blank" class="btn btn-custom color-secondary btn-reminder">
                                    										<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2411_134)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.625C5 0.45924 4.93415 0.300269 4.81694 0.183058C4.69973 0.065848 4.54076 0 4.375 0C4.20924 0 4.05027 0.065848 3.93306 0.183058C3.81585 0.300269 3.75 0.45924 3.75 0.625V1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75L0 17.5C0 18.163 0.263392 18.7989 0.732233 19.2678C1.20107 19.7366 1.83696 20 2.5 20H17.5C18.163 20 18.7989 19.7366 19.2678 19.2678C19.7366 18.7989 20 18.163 20 17.5V3.75C20 3.08696 19.7366 2.45107 19.2678 1.98223C18.7989 1.51339 18.163 1.25 17.5 1.25H16.25V0.625C16.25 0.45924 16.1842 0.300269 16.0669 0.183058C15.9497 0.065848 15.7908 0 15.625 0C15.4592 0 15.3003 0.065848 15.1831 0.183058C15.0658 0.300269 15 0.45924 15 0.625V1.25H5V0.625ZM1.25 17.5V5H18.75V17.5C18.75 17.8315 18.6183 18.1495 18.3839 18.3839C18.1495 18.6183 17.8315 18.75 17.5 18.75H2.5C2.16848 18.75 1.85054 18.6183 1.61612 18.3839C1.3817 18.1495 1.25 17.8315 1.25 17.5ZM10 9.36625C12.08 7.2275 17.2812 10.97 10 15.7812C2.71875 10.9688 7.92 7.2275 10 9.36625Z" fill="#F9FDF9" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2411_134">
                                                    <rect width="20" height="20" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Save the Date
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                            <!-- Story section -->
                <section class="story-section moveable-section" data-id="2">
                    <div class="container position-relative">
                        <div class="orn-1">
                            <div data-anim="zoom-in-up">
                                <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-right">
                            </div>
                        </div>
                        <div class="row align-items-center justify-content-center flex-lg-row-reverse flex-column">
                            <div class="col-12 ">
                                <div class="story-content">
                                    <div class="background-full " data-anim="width-left"></div>
                                                                            <div class="col-12 col-lg-6">
                                            <div class="image-story-wrap overflow-hidden" data-anim="slide-right">
                                                <img src="{{ asset('assets/undangan/images/6.jpg')}}" alt="story-background" class="story-image parallax" width="100%" height="100%">
                                            </div>
                                        </div>
                                                                        <div class="col-12  col-md-10 col-lg-6 ">
                                        <div class="story-description" data-anim="zoom-in" data-anim-delay="1500">
                                            <div class="title-section">
                                                <h2 class="text-center">Our Story</h2>
                                            </div>
                                            <p><em>Cinta tidak kenal waktu, kondisimu, berapa usiamu, dan siapa kamu. Cinta adalah pendekripsian yang tidak ada habisnya. Cinta bukan apa-apa bagi yang tidak pernah merasakan. Sebab ia hanya sebuah kata. Mudah di ucap. Namun tidak mudah untuk di jelaskan. Cinta itu yang kami rasakan. Cinta itu adalah asal mula. Asal Mula yang kami rasakan saat pertama kali bertemu dalam satu tempat kerja yang sama. Saat itu kami sama sama berstatus karyawan baru yang sedang mengejar harapan untuk lulus dari masa percobaan. Namun, seiring berjalannya waktu karena begitu banyak kesamaan kami yakin Allah SWT telah merencanakannya,singkat dan bermakna pendekatan kami memutuskan menjalin hubungan pada tanggal 8 Oktober 2023. </em></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                                                <section class="moveable-section" data-id="4">
                        <!-- Vanue & Event section -->
                        <div class="venue-section">
                            <div class="position-relative">
                                <div class="elements-wrapper-absolute">
                                    <div class="background-element">
                                        <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-art" width="1440" height="810">
                                    </div>
                                    <div class="overlay-elements-gradient overlay-top"></div>
                                    <div class="overlay-elements-gradient overlay-bottom"></div>
                                </div>
                                <div class="container position-relative">
                                    <div class="venue-wrapper">
                                        <div class="col-md-8 col-xl-6 position-relative mx-auto" data-anim="slide-up">
                                            {{-- <div class="orn-1">
                                                <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-right">
                                            </div> --}}
                                            {{-- <div class="venue-description shadow">
                                                <div class=" title-section" data-anim="fade-down">
                                                    <h2>Lokasi</h2>
                                                </div>
                                                                                                    <div data-anim="zoom-in">
                                                        <p>Dengan penuh rasa hormat kami mengharapkan kehadiran Bapak/Ibu/Saudara sekalian pada Acara Pernikahan kami yang akan kami laksanakan pada :</p>
<h5><strong>Sabtu, 27 September 2025</strong></h5>
<p>Besar harapan kami akan kehadiran Bapak/Ibu/Saudara sekalian tentunya dengan memperhatikan anjuran dari Pemerintah. Untuk itu kami memberlakukan protokol kesehatan sebagaimana instruksi dibawah ini</p>
                                                    </div>
                                                                                            </div> --}}
                                        </div>
                                        <div class="col-md-12 m-auto">
                                            <div class="venue-content">
                                                <div class="row justify-content-center row-venue-sm">
                                                                                                                                                                        <div class=" col-md-6 col-xl-5  position-relative my-0 my-md-4">

                                                            </div>
                                                                                                                    <div class=" row justify-content-center">
                                                                <div class="card">
                                                                    <div class="background-full" data-anim="height-down"></div>
                                                                    <div class="card-body">
                                                                        <div class="row justify-content-between">
                                                                            <div class="col-md-12">
                                                                                <div class="ribbon-venue shadow" data-animationloop="keyframe">
                                                                                    <div data-anim="zoom-in">
                                                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 560 560" style="enable-background:new 0 0 560 560;overflow: visible;" xml:space="preserve">
                                                                                            <style type="text/css">
                                                                                                .st0 {
                                                                                                    fill: var(--color-secondary);
                                                                                                }

                                                                                                .st1 {
                                                                                                    fill: none;
                                                                                                    stroke: var(--color-secondary);
                                                                                                    stroke-width: 19;
                                                                                                    stroke-linecap: round;
                                                                                                    stroke-miterlimit: 10;
                                                                                                    transform-origin: 50% 75%;
                                                                                                }
                                                                                            </style>
                                                                                            <g id="Layer_1">
                                                                                            </g>
                                                                                            <g id="Layer_3">
                                                                                                <g>
                                                                                                    <g>
                                                                                                        <path class="st0" d="M273.3,48.3c34.1,0,66.1,13.3,90.3,37.4c24.1,24.1,37.4,56.2,37.4,90.3c0,93.4-63.7,165.3-105.8,212.8c-4.4,4.9-8.5,9.6-12.3,14c-2.9,3.4-6.3,5.2-9.5,5.2c-4.1,0-7.4-2.8-9.4-5.2c-4.6-5.3-9.4-10.7-14.5-16.5c-20.4-23-43.5-49.1-63-80c-22.1-35-34.9-69.1-39.2-104.3c-4.8-39.7,6.8-79.6,31.9-109.4c22.5-26.7,53.5-42.4,87.3-44.2C268.7,48.4,271.1,48.3,273.3,48.3 M273.3,29.3c-2.6,0-5.2,0.1-7.8,0.2c-87.5,4.6-147.7,87.9-137.1,174.9c11.7,96.3,80.1,163.3,121.1,210.8c6.8,7.8,15.3,11.8,23.8,11.8c8.6,0,17.1-3.9,23.9-11.8C338.4,367.6,420,286.7,420,176C420,95,354.3,29.3,273.3,29.3L273.3,29.3z" />
                                                                                                    </g>
                                                                                                    <g>
                                                                                                        <path class="st0" d="M275.1,118c30.6,0,55.5,24.9,55.5,55.5S305.7,229,275.1,229s-55.5-24.9-55.5-55.5S244.5,118,275.1,118 M275.1,99c-41.1,0-74.5,33.3-74.5,74.5S234,248,275.1,248s74.5-33.3,74.5-74.5S316.2,99,275.1,99L275.1,99z" />
                                                                                                    </g>
                                                                                                </g>
                                                                                            </g>
                                                                                            <g id="Layer_2">
                                                                                                </image>
                                                                                                <ellipse class="st1" cx="272.8" cy="437.9" rx="146.4" ry="40.9" />
                                                                                                <ellipse class="st0 dot" cx="273.6" cy="437.9" rx="63.1" ry="17" />
                                                                                            </g>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                                                                                                    <div class="event-name" data-anim="zoom-in">
                                                                                        <h4 style="font-family: ; font-size: px;">Resepsi</h4>
                                                                                        <p>Sabtu</p>
                                                                                        <div class="date">
                                                                                            <h5>27</h5>
                                                                                            <div></div>
                                                                                            <p>September <br>2025</p>
                                                                                        </div>
                                                                                        <p>11:00 - 13:00 </p>
                                                                                    </div>
                                                                                                                                                                <div class="event-place notranslate" data-anim="zoom-in">
                                                                                    <h4 style="font-family: ; font-size: px;">Griya Ardhiya Garini</h4>
                                                                                    <div>Halim, Jakarta Timur</div>
                                                                                </div>
                                                                                                                                                                    <div class="widget-wrapper" data-anim="zoom-in">
                                                                                        <a class="btn btn-custom mt-3" aria-label="button maps" href="#" data-bs-toggle="modal" data-bs-target="#event7032">Location</a>
                                                                                    </div>
                                                                                                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                                                                                                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                    </div>
                        <!-- rsvp section -->
                            <div class="rsvp-section">
                                    <div class="elements-wrapper-absolute">
                                        <div class="background-element">
                                            <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-art" width="1440" height="810">
                                        </div>
                                        <div class="overlay-elements-gradient overlay-bottom"></div>
                                    </div>
                                    <div class="container position-relative">
                                        <div class="orn-1">
                                            <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-left">
                                        </div>
                                        <div class="rsvp-wrapper">
                                            <div class="background-full" data-anim="width-right"></div>
                                            <div class="row justify-content-center">
                                                <div class="col-md-6">
                                                    <div class="image-wrapper">
                                                        <img src="{{ asset('assets/undangan/images/5.jpg') }}" alt="rsvp-background" class="rsvp-background">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="rsvp-form">
                                                        <div class="col-lg-10 mx-lg-auto col-12">
                                                                <div id="cardRSVP" style="display: none">
                                                                    <div class="card" id="card">
                                                                        <div class="title-section" data-anim="fade-down">
                                                                            <h3><p>RSVP CARD</p></h3>
                                                                        </div>
                                                                        @foreach ($wedding as $item)
                                                                            <h1>{{ $item->name }}</h1>
                                                                        @endforeach
                                                                        <p>{{ date("d M Y H:II", strtotime($invited->date)) }}</p>
                                                                        <div class="important">
                                                                            <p><strong>Penting</strong></p>
                                                                            <p>Silakan sebutkan kode atau tunjukkan QRCode berikut kepada penerima tamu yang bertugas saat acara berlangsung.</p>
                                                                        </div>
                                                                        <div class="info">
                                                                            <h2>{{ $guest->name }}</h2>
                                                                            <p>Jumlah Tamu: <span id="guest_count">{{$guest->rsvp_number}}</span></p>
                                                                        </div>

                                                                        <div class="qr-section">
                                                                            <div id="qrcode"></div>
                                                                            <h2>{{$code}}</h2>
                                                                        </div>

                                                                        <div class="ss-copyright">
                                                                            @foreach ($wedding as $item)
                                                                                <span>© Copyright {{ $item->name }} {{date("Y")}}</span>
                                                                            @endforeach
                                                                            <span>Developed by <a href="https://github.com/alvinzf" target="_blank">alvinzf</a></span>
                                                                        </div>
                                                                    </div>
                                                                    <div class="card" id="card">
                                                                        <div class="col-md-12 d-flex justify-content-center">
                                                                            <button class="btn btn-custom color-secondary w-100 has-animate" id="download-btn">Download RSVP Card</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="formRSVP">
                                                                    <div class="title-section" data-anim="fade-down">
                                                                        <h2><p>RSVP</p></h2>
                                                                    </div>
                                                                    <form id="rsvpdata" data-anim="fade" data-anim-delay="500">
                                                                        <input required type="text" name="name" class="form-control mb-3" placeholder="Nama" value=" {{$to}}" readonly data-anim="zoom-in-up" data-anim-delay="500">
                                                                        <select required name="jumlah" id="rsvp_number" class="form-select mb-3" data-anim="zoom-in-up" data-anim-delay="500">
                                                                            <option disabled selected >Jumlah Tamu</option>
                                                                            @for ($i = 1; $i <= $guest->quota; $i++)
                                                                                <option value="{{ $i }}">{{ $i }}</option>
                                                                            @endfor
                                                                        </select>
                                                                        <select required name="status" id="rsvp_status" class="form-select mb-3" data-anim="zoom-in-up" data-anim-delay="500">
                                                                            <option disabled selected>Konfirmasi Kehadiran</option>
                                                                            <option value="1">Hadir</option>
                                                                            <option value="0">Tidak Hadir</option>
                                                                        </select>
                                                                        <input type="hidden" name="code" value="{{$code}}">
                                                                        <div class="row justify-content-center">
                                                                            <div class="col-md-6">
                                                                                <button onclick="submitRsvp()"  class="btn btn-custom color-secondary w-100" type="button" id="savebtn" data-anim="zoom-in-up" data-anim-delay="500">Kirim</button>
                                                                            </div>
                                                                        </div>
                                                                    </form>

                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                 </section>

                            <!-- Wishes section -->
                <section class="wishes-section moveable-section" data-id="6">
                    <div class="container position-relative">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-6 col-xl-5 position-relative" style="z-index: 3;">
                                <div class="card card-form">
                                    <div class="card-body">
                                        <div class="title-section">
                                            <h2 data-anim="fade-down">Wedding Wishes</h2>
                                        </div>
                                                                                    <div class="guestbook_form_wrapper">
                                                <form id="submitWish" method="post"  class="text-center">
                                                    <input type="hidden" name="code" value="{{$code}}">
                                                    <div class="mb-3">
                                                        <input type="text" name="name" value="{{$to}}" readonly  placeholder="Name" class="form-control" >
                                                    </div>
                                                                                                            <div class="mb-3">
                                                        </div>
                                                                                                                                                            <div class="mb-3">
                                                        <textarea required name="comment" id="comment" rows="5" class="form-control" placeholder="Tulis pesan dan doa Anda"></textarea>
                                                    </div>
                                                    <button onclick="submitWish()"  class="btn btn-custom color-secondary w-100" type="button" id="wishbtn" data-anim="zoom-in-up" data-anim-delay="500">Kirim</button>

                                                </form>
                                            </div>
                                                                            </div>
                                </div>
                            </div>
                                <div class="col-md-8 col-lg-6">
                                    <div class="wishes-preview">
                                        <div class="orn-1">
                                            <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-right">
                                        </div>
                                        <div class="card">
                                            <div class="card-body text-left">
                                                <div class="wishes" data-anim="slide-up">
                                                    <div id="wishes_wrapper" data-url="{{route('guest-wishes')}}">
                                                        <p class="mb-4">
                                                            <b>Sedang Memuat Komentar..</b>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                                    </div>
                    </div>
                </section>

                            <!-- Apology section -->
                <section class="apology-section moveable-section" data-id="7">
                    <div class="elements-wrapper-absolute">
                        <div class="background-element scaleX-reverse">
                            <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-art" width="1440" height="810">
                        </div>
                        <div class="overlay-elements-gradient overlay-bottom"></div>
                    </div>
                    <div class="container position-relative">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-md-10 text-center position-relative">
                                <div class="orn-1">
                                    <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-left">
                                </div>
                                <div class="appology-wrap">
                                    <div class="title-section">
                                        <h2 data-anim="fade-down">Apology</h2>
                                    </div>
                                    <div class="col-md-10 m-auto col-10" data-anim="zoom-in">
                                                                                    <div class="mb-0" data-anim="zoom-in"><p>Tanpa mengurangi rasa hormat, Izinkan kami mengharapkan kehadiran Bapak/lbu/Saudara/i melalui undangan digital ini, serta dapat memberikan doa restu kepada kami.</p>
<p>Terima kasih.</p></div>
                                                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                            <!-- Tanks Section -->
                <section class="thank-section moveable-section" data-id="9">
                    <div class="elements-wrapper-absolute">
                        <div class="background-element scaleX-reverse">
                            <img src="{{ asset('assets/undangan/images/background.webp') }}" alt="bg-art" width="1440" height="810">
                        </div>
                    </div>
                    <div class="container position-relative">
                        <div class="orn-1">
                            <div data-anim="slide-up" data-anim-delay="500">
                                <img src="{{ asset('assets/undangan/images/flower.png') }}" alt="rose" class="img-fluid animate-loop" data-anim="rotate-left">
                            </div>
                        </div>
                        <div class="thank-wrapper">
                            <div class="background-full" data-anim="width-left" data-anim-delay="500"></div>
                            <div class="row justify-content-center mx-0 align-items-center">
                                <div class="col-md-5 p-0">
                                    <div class="thank" data-anim="zoom-in" data-anim-delay="1000">
                                        <div class="title-section" data-anim="fade-down" data-anim-delay="1000">
                                            <h2 class="mb-3">Thank You</h2>
                                        </div>
                                        <div><p>Kami mengucapkan terimakasih kepada Bapak/Ibu/Saudara yang telah menghadiri seluruh rangkaian acara pernikahan kami. Semoga waktu yang diberikan oleh Bapak/Ibu/Saudara sekalian menjadi berkah dan manfaat yang kelak dibalas oleh Tuhan Yang Maha Esa. Terima kasih atas seluruh ucapan yang diberikan. Semoga kami menjadi pasangan yang berbahagia dunia dan akhirat :)</p></div>
                                    </div>
                                </div>
                                <div class="col-md-7 p-0">
                                    <div class="image-wrapper">
                                        <img src="{{ asset('assets/undangan/images/4.jpg') }}" alt="thank-background" class="thank-background parallax">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    </div>
        <footer class="footer">
            <style>
    footer{
        padding: 0.75rem;
    }

    .footer-text{
        text-align: center;
        width: 100%;
        margin: 0;
        line-height: 28px;
        font-size: 14px;
        position: relative;
    }

    .footer-text a{
        text-decoration: none;
        color: inherit;
        font-weight: 600;
    }
</style>
    <p class="footer-text">Copyright ©2025 Created with  ❤️  by  <nz href="#" target="_blank">alvizf</a></p>
        </footer>
    </div>




            <audio id="audio_file" class="d-none">
            <!-- <source src="horse.ogg" type="audio/ogg"> -->
            <source src="{{ asset('assets/undangan/music/Take My Hand.mp3') }}" type="audio/mp3">
                type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>

    <!-- Modal -->
                        <div class="modal fade show-maps" id="event2416" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <button type="button" class=" btn-modal" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-xmark"></i>
                            </button>
                            <div class="modal-actions">
                                <h2 style="font-family: ; font-size: px;">Acara Pernikahan</h2>
                            </div>
                            <div class="col-12 mt-3">
                                <div class="maps-element">
                                    <div class="loader-wrapper-modal">
                                        <div class="lds-default">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <iframe class="maps-embed" width="100%" height="328" id="gmap_canvas" data-src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Hotel%20Shangri-La%20Jakarta&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                                <a class="btn btn-custom color__button__trans color-secondary mt-3" href="https://www.google.com/maps/search/?api=1&query=Hotel%20Shangri-La%20Jakarta" target="_blank">
                                                                            Location
                                                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="modal fade show-maps" id="event7032" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <button type="button" class=" btn-modal" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-xmark"></i>
                            </button>
                            <div class="modal-actions">
                                <h2 style="font-family: ; font-size: px;">Resepsi</h2>
                            </div>
                            <div class="col-12 mt-3">
                                <div class="maps-element">
                                    <div class="loader-wrapper-modal">
                                        <div class="lds-default">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <iframe class="maps-embed" width="100%" height="328" id="gmap_canvas" data-src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Griya%20Ardhya%20Garini&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                </div>
                                <a class="btn btn-custom color__button__trans color-secondary mt-3" href="https://www.google.com/maps/search/?api=1&query=Griya%20Ardhya%20Garini" target="_blank">
                                                                            Location
                                                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    <svg style="position: absolute;pointer-events: none;" width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <clipPath id="wishes-polygon" clipPathUnits="objectBoundingBox">
                <polygon points="0 0, 1 1, 1 0" />
            </clipPath>
        </defs>
    </svg>

  <!-- script add robot field -->
 <script>
        var stepper_id = 1351
var guest_type = ""
var invitation_lang = "en"
    </script>

  <!-- script libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js" integrity="sha512-pax4MlgXjHEPfCwcJLQhigY7+N8rt6bVvWLFyUMuxShv170X53TRzGPmPkZmGBhk+jikR8WBM4yl7A9WMHHqvg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/splidejs/3.6.11/js/splide.js" integrity="sha512-w59vitZ7hVdBIw8eTlp69j02OB/eo6cyyuvnMH1HzQYmMbrJWB5moOAsghwrAsN5KJEu4N9BZTDg4cOy54or+g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js" integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" integrity="sha512-rstIgDs0xPgmG6RX1Aba4KV5cWJbAMcvRCVmglpam9SoHZiUCyQVDdH2LPlxoHtrv17XWblE/V/PP+Tr04hbtA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="{{ asset('assets/invitation/theme/assets/js/gift_registry_script.js?v=6b8f7f39b29ca238655923c1aed66ba770086fed')}}"></script>
    <script src="{{ asset('assets/invitation/theme/assets/js/colorpicker.min.js?v=5a09248438c634cf7d719879bcd4828dfee64f1f')}}"></script>


    <script>
    function submitRsvp(){
        //ajax request to guest-confirmation
        $.ajax({
            url: "{{route('guest-confirmation')}}",
            type: 'post',
            data: {
                //csrf
                _token: "{{ csrf_token() }}",
                code: "{{$code}}",
                number: $("#rsvp_number").val(),
                status: $("#rsvp_status").val()
            },
            success: function(data) {
                console.log(data);
            }
        });

        $("#cardRSVP").show();
        $("#formRSVP").hide();
        $("#guest_count").html($("#rsvp_number").val())

    }
    function submitWish(){
        //ajax request to guest-confirmation
        $.ajax({
            url: "{{route('send-wish')}}",
            type: 'post',
            data: {
                //csrf
                _token: "{{ csrf_token() }}",
                code: "{{$code}}",
                comment: $("#comment").val(),
            },
            success: function(data) {
                reload_guestbook_data();
                $("#comment").val('');
                $('.guestbook_form_wrapper').html("<p class='text-center'>Terima Kasih, Anda telah memberikan komentar</p>");

                $('#guestbook_submit_btn').prop('disabled', false);
                $('#guestbook_submit_btn').html('Send');

                reload_guestbook_data();
                ScrollTrigger.refresh();

                iziToast.success({
                    title: 'Berhasil',
                    message: 'Pesan anda telah ditambahkan. Terimakasih!',
                    position: 'bottomRight'
                });
            }
        });
    }
    // $(function() {
    //     $('rsvpdata').submit(function() {
    //         $.ajax({
    //             type: 'POST',
    //             url: "{{route('guest-confirmation')}}",
    //             data: { code: $(this).code.value,
    //                     jumlah: $(this).jumlah.value }
    //         });
    //         return false;
    //     });
    // })
    </script>

    <style>
    input.error,
    select.error {
        margin-bottom: 0px !important;
    }

    label.error {
        display: block;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }
</style>
<script>
    $("#formGift").validate({
        submitHandler: function(form) {
            form.submit();
        }
    });

    // Add hidden input for saving previous url
    $('<input>', {
        type    : 'hidden',
        id      : 'previous_url_input',
        name    : 'previous_url',
        value   : window.location.href
    }).prependTo('#formGift');
</script>
 <!-- Modal Trigger -->
 <script>
    document.addEventListener("DOMContentLoaded", function () {
        const modalHTML = `
            <div class="modal fade" id="rsvpModal" tabindex="-1" aria-labelledby="rsvpModalLabel">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body text-center">
                            <p>Mohon dapat melakukan konfirmasi kehadiran untuk mendapatkan kartu akses ke acara Pernikahan</p>
                            <button type="button" class="btn btn-custom color-secondary" data-bs-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", modalHTML);

        const rsvpModal = new bootstrap.Modal(document.getElementById("rsvpModal"));
        const rsvpSection = document.querySelector('.rsvp-section');

        window.addEventListener('scroll', function () {
            const sectionPosition = rsvpSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (sectionPosition < screenPosition) {
                var rsvp_stat = {{$guest->rsvp}};
                if (rsvp_stat == 1){
                    rsvpModal.show();
                    window.removeEventListener('scroll', arguments.callee); // Remove the event listener after showing the modal
                }
            }
        });

        $("#cardRSVP").hide();
        var rsvp_stat = {{$guest->rsvp}};
        if (rsvp_stat == 1){
            $("#cardRSVP").show();
            $("#formRSVP").hide();
        }
    });


</script>
</div>
    <script>
    var player;
    var player2;
    var gallery_player = document.getElementById('gallery_player');
    var livestream_player = document.getElementById('livestream_player');
    var livestream_player_sm = document.getElementById('livestream_player_small');
    var audio = document.getElementById("audio_file");
    var play_pause_btn = document.getElementById("musicControl");

    function onYouTubeIframeAPIReady() {

        if (gallery_player) {
            player = new YT.Player('gallery_player', {
                height: '390',
                width: '640',
                videoId: 'SzPrFMFqFwM',
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        if (livestream_player) {
            player2 = new YT.Player('livestream_player', {
                height: '390',
                width: '640',
                videoId: 'SzPrFMFqFwM',
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        if (livestream_player_sm) {
            player2 = new YT.Player('livestream_player_small', {
                height: '390',
                width: '640',
                videoId: 'SzPrFMFqFwM',
                events: {
                    'onStateChange': onPlayerStateChange
                }
            });
        }
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            if (audio) {
                if (audio.duration > 0 && !audio.paused) {
                    console.log('Music Paused');
                    play_pause_btn.click();
                }
            }

            if (sound) {
                if (sound.playing()) {
                    play_pause_btn.click();
                }
            }
        }
    }

</script>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        // Handle tab visibility change
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                // Pause the music when the tab is not visible
                bgMusicPlay(false);
                playPauseIcon.classList.replace("icofont-ui-pause", "icofont-music-alt");
            } else if (document.visibilityState === "visible" && !bgMusic.paused) {
                // Optionally, resume playing when the tab is visible again
                bgMusicPlay();
                playPauseIcon.classList.replace("icofont-music-alt", "icofont-ui-pause");
            }
        });
    })
</script>

<script>
    // Membuat elemen <style>
    const style = document.createElement('style');
    style.type = 'text/css';

    // Menambahkan CSS ke elemen <style>
    style.innerHTML = `
  .font-custom {
    display: block;
    line-height: 2 !important;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    margin-top: -0.25rem !important;
    margin-bottom: -0.25rem !important;
  }
  .font-custom-2{
    display: block;
    line-height: 1.6 !important;
    padding: 0 0.5rem;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }
`;

    // Menyisipkan <style> ke dalam <head>
    document.head.appendChild(style);

    const fontFamilies = [
        "BrittanySignature",
        "hearth stone",
        '"hearth stone"',
        "Le Major"
    ]

    document.querySelectorAll('[style]').forEach(el => {
        const styleText = el.style.cssText;

        // Periksa apakah salah satu font-family ada di dalam style
        if (fontFamilies.some(font => styleText.includes(`font-family: ${font}`))) {
            el.classList.add("font-custom");
        }
    });
</script>

    <script src="{{ asset('assets/invitation/theme/theme_79/assets/js/jquery.magnific-popup.min.js')}}"></script>

    <script src="{{ asset('assets/invitation/theme/theme_79/assets/js/app.js?v=262981de74dd708fb8f8f51b5e4800ea92aee483')}}"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const targetDate = new Date("2025-09-27T11:00:00Z").getTime();

            function updateCountdown() {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) {
                    document.getElementById("countdown").innerHTML = "<p>Event has started!</p>";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("days").textContent = days;
                document.getElementById("hours").textContent = hours;
                document.getElementById("minutes").textContent = minutes;
                document.getElementById("seconds").textContent = seconds;
            }

            setInterval(updateCountdown, 1000);
            updateCountdown();
        });
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const gallery_splide = document.querySelector(".gallery");

            if (gallery_splide) {
                const gallery = new Splide("#gallery", {
                        pagination: false,
                    });

                    const thumbnails = new Splide("#thumbnail-gallery", {
                        pagination: false,
                        arrows: false,
                        focus: "center",
                        gap: 2.5,
                        perPage: 6,
                        isNavigation: true,
                        breakpoints: {
                            576: {
                                perPage: 4
                            }
                        }
                    });

                    gallery.sync(thumbnails);
                    gallery.mount();
                    thumbnails.mount();
            }

            const btnOpenAngpao = document.querySelector("#openAngpao");
            const formAngpao = document.querySelector("#formGift");

            if (btnOpenAngpao) {
                btnOpenAngpao.addEventListener('click', () => {
                    formAngpao.classList.remove("d-none");
                    btnOpenAngpao.classList.add("d-none");
                    ScrollTrigger.refresh();
                })
            }
        });

        $("#anonymous_angpao").click(function() {
            if ($(this).is(':checked')) {
                $('.angpao-field-hideable').prop('required', false);
                $('.angpao-field-hideable').hide('500');
            } else {
                $('.angpao-field-hideable').prop('required', true);
                $('.angpao-field-hideable').show('500');
            }

            setTimeout(function() {
                ScrollTrigger.refresh();
            }, 1000);
        });

        $(document).ready(function() {
            $.ajaxSetup({
                headers: {
                    // 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    "X-Requested-With":'XMLHttpRequest'
                }
            });

            // font family
            let couple_name_on_main_font_family = "";
            let couple_name_on_cover_font_family = "";
            let couple_name_on_couple_font_family = "";
            let parents_name_on_couple_font_family = "";

            // font size
            let couple_name_on_main_font_size = "";
            let couple_name_on_cover_font_size = "";
            let couple_name_on_couple_font_size = "";
            let parents_name_on_couple_font_size = "";

            // change font family and font size
            $('.main_style').css({
                'font-family': couple_name_on_main_font_family,
                'font-size': couple_name_on_main_font_size + 'px'
            });

            $('.cover_style').css({
                'font-family': couple_name_on_cover_font_family,
                'font-size': couple_name_on_cover_font_size + 'px'
            });

            $('.bride_style').css({
                'font-family': couple_name_on_couple_font_family,
                'font-size': couple_name_on_couple_font_size + 'px'
            });

            $('.couple-parent-description p').css({
                'margin-bottom': '0px'
            });

            $('.couple-parent-name p').css({
                'font-family': parents_name_on_couple_font_family,
                'font-size': parents_name_on_couple_font_size + 'px',
                'margin-bottom': '0px'
            });

            reload_guestbook_data();
        });

        var section_order = [1,2,3,4,6,5,7,8,9];
        var section_wrapper = $('.moveable_section_wrapper');

        section_wrapper.append(
            $.map(section_order, function(elm) {
                return $(".moveable-section[data-id='" + elm + "']");
            })
        );


        function reload_guestbook_data() { //wish
            if ($('#wishes_wrapper').length) {
                $('#wishes_wrapper').html('<p class="mb-4"><b>Sedang Memuat Komentar..</b></p>');
                var reload_url = $('#wishes_wrapper').data('url');
                $('#wishes_wrapper').load(reload_url);
            }
        }

        $("#guestbook_form").validate({
            submitHandler: function(form) {
                var actionType = $('#savebtn').val();
                $('#guestbook_submit_btn').prop('disabled', true);
                $('#guestbook_submit_btn').html('Sending..');

                $.ajax({
                    data: $('#guestbook_form').serialize(),
                    url: "#/bookstore",
                    type: "POST",
                    dataType: 'json',
                    success: function(data) {
                        if (`en` == 'en') {
                            $('.guestbook_form_wrapper').html("<p class='text-center'>Thank you, you have left a comment</p>");
                        } else {
                            $('.guestbook_form_wrapper').html("<p class='text-center'>Terima Kasih, Anda telah memberikan komentar</p>");
                        }

                        $('#guestbook_submit_btn').prop('disabled', false);
                        $('#guestbook_submit_btn').html('Send');

                        reload_guestbook_data();
                        ScrollTrigger.refresh();

                        iziToast.success({
                            title: 'Berhasil',
                            message: 'Pesan anda telah ditambahkan. Terimakasih!',
                            position: 'bottomRight'
                        });
                    },
                    error: function(data) {
                        $('#guestbook_submit_btn').prop('disabled', false);
                        $('#guestbook_submit_btn').html('Send');

                        iziToast.error({
                            title: 'Gagal',
                            message: 'Pesan anda gagal ditambahkan. Silahkan mencoba kembali beberapa saat! ' + (data.responseJSON.message ?? ''),
                            position: 'bottomRight'
                        });
                    }
                });
            }
        });

        $('.translate-btn').on('click', function() {
            lang = $(this).data('lang');
            changeLanguageByButtonClick(lang);
        });

        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'viding'
            }, 'google_translate_element');
        }

        function changeLanguageByButtonClick(lang) {
            // var language = document.getElementById("language").value;
            var selectField = document.querySelector("#google_translate_element select");
            for (var i = 0; i < selectField.children.length; i++) {
                var option = selectField.children[i];
                // find desired langauge and change the former language of the hidden selection-field
                if (option.value == lang) {
                    selectField.selectedIndex = i;
                    // trigger change event afterwards to make google-lib translate this side
                    selectField.dispatchEvent(new Event('change'));
                    break;
                }
            }
        }

        function reset_translation() {
            $('.goog-te-banner-frame').contents().find('#\\:1\\.restore').click();
        }

        /** Color Picker **/
        // Remove Color Picker Initialization
        // const defaultColors = {
        //     main: "#f2edea",
        //     primary: "rgba(255, 255, 255, 0.8)",
        //     secondary: "#6a8369",
        // };
        // const cp = colorpicker(document.querySelector('.colorpicker__wrapper'), defaultColors, '');

        /** End of Color Picker **/
    </script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>
    <script>
    // Clipboard
    var clipboard = new ClipboardJS('.btn-copy-bank-acc');

    clipboard.on('success', function(e) {
      alert('Copied Successfully!');
    });

    clipboard.on('error', function(e) {
      alert('Copy failed!');
    });
    </script>
    <script>
        /* $(document).ready(function() {
                $("#toggleButton").click(function() {
                    $("#hiddenElement").toggle(); // Toggle the visibility of the element
                    $("#toggleButton").hide();
                });
            }); */
              // Get all elements with class toggleButton
            const toggleButtons = document.querySelectorAll('.toggleButton');

            // Loop through each button and add a click event listener
            toggleButtons.forEach(button => {
                button.addEventListener('click', function() {
                // Find the corresponding hiddenElement for this button
                const hiddenElement = this.parentNode.nextElementSibling;

                // Toggle the display of the hiddenElement
                if (hiddenElement.style.display === 'none' || hiddenElement.style.display === '') {
                    hiddenElement.style.display = 'block';
                } else {
                    hiddenElement.style.display = 'none';
                }
                });
            });
    </script>
{{-- <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"933d49820d14294b","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}},"version":"2025.4.0-1-g37f21b1","token":"9788b2a8af4d4335bde0fab3174b2eed"}' crossorigin="anonymous"></script> --}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const qrCode = new QRCode(document.getElementById("qrcode"), {
            text: "{{$guest->code}}", // Replace with your desired URL or data
            width: 128, // Width of the QR code
            height: 128, // Height of the QR code
            colorDark: "#000000", // Dark color
            colorLight: "#ffffff", // Light color
            correctLevel: QRCode.CorrectLevel.H // Error correction level
        });
    });
</script>

<script>
        document.getElementById('download-btn').addEventListener('click', () => {
        const card = document.getElementById('card');

        html2canvas(card).then(canvas => {
            const link = document.createElement('a');
            link.download = 'kartu-akses-masuk.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
</script>
</body>

</html>
