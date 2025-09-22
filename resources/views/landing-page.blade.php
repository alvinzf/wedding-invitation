<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .guest-container {
            min-height: 400px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            padding: 20px;
            margin: 20px 0;
        }
        .guest-item {
            padding: 10px;
            border-bottom: 1px solid #eee;
            transition: all 0.3s ease;
        }
        .guest-item:hover {
            background: #f8f9fa;
        }
        .guest-name {
            font-size: 1.8em;
            font-weight: 600;
            color: #333;
        }
        .guest-time {
            font-size: 0.85em;
            color: #666;
        }
    </style>
</head>
<body class="bg-light">
    <h1 class="text-center mb-4 mt-3">SELAMAT DATANG</h1>
    <div class="container-fluid bg-primary text-white text-center py-3" id="flashcard">
        <h1 id="flashcard-name" style="font-size: 4.5rem;">-</h1>
    </div>
    <div class="mx-5 py-5 ">

        <div class="text-center mb-4">
        </div>
        <div class="row">
            <!-- VIP Guests Column -->
            <div class="col-md-4">
                <div class="guest-container">
                    <div id="vip-guests"></div>
                </div>
            </div>
            <!-- All Guests Column -->
            <div class="col-md-8">
                <div class="guest-container">
                    <div id="all-guests"></div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
    let allGuestsCache = [];
    let vipGuestsCache = [];
    let newGuestQueue = [];
    let currentGuestId = null;

    function updateGuestList() {
        $.ajax({
            url: "{{route('checked-in-guests')}}",
            method: 'GET',
            success: function(response) {
                let newGuests = [];
                // reverse response.guests order
                response.guests = Object.values(response.guests).reverse();

                Object.values(response.guests).forEach(guest => {
                    if (guest.priority === 1) {
                        // VIP guest
                        if (!vipGuestsCache.some(g => g.id === guest.id)) {
                            vipGuestsCache.unshift(guest);
                            newGuests.push(guest); // Add to queue if you want to show VIP in flashcard
                        }
                    } else {
                        // Non-VIP guest
                        if (!allGuestsCache.some(g => g.id === guest.id)) {
                            allGuestsCache.unshift(guest);
                            newGuests.push(guest); // Add to queue if you want to show non-VIP in flashcard
                        }
                    }
                });

                // Limit to 10 entries
                allGuestsCache = allGuestsCache.slice(0, 10);
                vipGuestsCache = vipGuestsCache.slice(0, 30);

                // Add to queue if not already queued or shown
                newGuests.forEach(guest => {
                    if (!newGuestQueue.some(g => g.id === guest.id)) {
                        newGuestQueue.push(guest);
                    }
                });

                // Update VIP Guest HTML
                let vipHtml = '';
                vipGuestsCache.forEach((guest, idx) => {
                    const rowClass = idx % 2 === 0 ? 'bg-light' : '';
                    vipHtml += `
                        <div class="guest-item d-flex align-items-center justify-content-between ${rowClass}">
                            <div class="d-flex align-items-center">
                                <div>
                                    <div class="guest-name mb-0">${guest.name}</div>
                                    <p>${guest.description}</p>
                                </div>
                                <span class="badge bg-secondary ms-2">${guest.actual_quota}</span>
                            </div>
                            <div class="guest-time text-end">${guest.attendance ? guest.attendance.split(' ')[1].slice(0,5) : ''}</div>

                        </div>
                    `;
                });
                $('#vip-guests').html(vipHtml);

                // Update All Guest HTML
                let allHtml = '';
                allGuestsCache.forEach((guest, idx) => {
                    const rowClass = idx % 2 === 0 ? 'bg-light' : '';
                    allHtml += `
                         <div class="guest-item d-flex align-items-center justify-content-between ${rowClass}">
                            <div class="d-flex align-items-center">
                                <div class="guest-name mb-0">${guest.name}</div>
                                <span class="badge bg-secondary ms-2">${guest.actual_quota}</span>
                            </div>
                            <div class="guest-time text-end">${guest.attendance ? guest.attendance.split(' ')[1].slice(0,5) : ''}</div>
                        </div>
                    `;
                });
                $('#all-guests').html(allHtml);
            }
        });
    }

    function showNextGuest() {
        if (newGuestQueue.length > 0) {
            const nextGuest = newGuestQueue.shift(); // Remove from queue
            currentGuestId = nextGuest.id;

            $('#flashcard-name').text(nextGuest.name);
            if (nextGuest.priority === 1) {
                $('#flashcard').removeClass('bg-primary').addClass('bg-warning');
            } else {
                $('#flashcard').removeClass('bg-warning').addClass('bg-primary');
            }
        }
    }

    // Initial call
    updateGuestList();
    showNextGuest();

    // Fetch new guests every 3 seconds
    setInterval(updateGuestList, 3000);

    // Show flashcard for a guest every 3 seconds (or change this timing)
    setInterval(showNextGuest, 3000);
</script>
</body>
</html>
