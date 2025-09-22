<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest Attendance</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        .table {
            margin-top: 20px;
        }

        .attendance-btn {
            cursor: pointer;
        }

        .navbar-custom {
            background-color: #dfdfdf;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-custom">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Wedding of Thara & Alvin</span>
        </div>
    </nav>
    <div class="container mt-2">
        <h1>Guest Attendance</h1>
        <div class="row align-items-end">
            <div class="mb-3 col-md-3">
                <label for="filter-attendance" class="form-label">Filter Attendance</label>
                <select class="form-control" id="filter-attendance">
                    <option value="not_attended" selected>Not Attended</option>
                    <option value="attended">Attended</option>
                    <option value="all">All</option>
                </select>
            </div>
            <div class="mb-3 col-md-6">
                <label for="search" class="form-label">Search</label>
                <div class="input-group">
                    <input type="text" id="search" class="form-control col-md-8" placeholder="Search by name or code...">
                    <button class="btn btn-outline-secondary col-md-4" id="btnScanQR" type="button">
                        <i class="fas fa-qrcode"></i>
                    </button>
                </div>
            </div>
            {{-- button to show modal to add guest--}}
            <div class="mb-3 col-md-3 text-end">
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" id="btnAddGuest" type="button" data-bs-toggle="modal" data-bs-target="#addGuestModal">
                        <i class="fas fa-user-plus"></i> Add Guest
                    </button>
                </div>
            </div>
        </div>
        <table class="table table-bordered" id="guest-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Group</th>
                    <th>Quota</th>
                    <th>Attendance</th>
                    <th>Actual</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="8" class="text-center">Loading or no guests found.</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="detailModal" tabindex="-1">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Guest Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="detailForm">
                        <div class="mb-3"><label class="form-label">Code</label><input type="text"
                                class="form-control" id="code" readonly></div>
                        <div class="mb-3"><label class="form-label">Name</label><input type="text"
                                class="form-control" id="name" readonly></div>
                        <div class="mb-3"><label class="form-label">Group</label><input type="text"
                                class="form-control" id="group" readonly></div>
                        <div class="mb-3"><label class="form-label">Quota</label><input type="text"
                                class="form-control" id="quota" readonly></div>
                        <div class="mb-3"><label class="form-label">Attendance</label><input type="datetime-local"
                                class="form-control" id="attendance"></div>
                        <div class="mb-3">
                            <label class="form-label">Actual</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="decrease-quota"><i
                                        class="fas fa-minus"></i></button>
                                <input type="text" class="form-control text-center" id="actual_quota" value="0">
                                <button class="btn btn-outline-secondary" type="button" id="increase-quota"><i
                                        class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <div class="mb-3"><label class="form-label">Note</label>
                            <textarea class="form-control" id="note"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitAttendance">Submit</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="qrModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Scan QR Code</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body text-center">
                    <select id="cameraSelect" class="form-select mb-2"></select>
                    <div id="qr-reader" style="width:100%;"></div>
                </div>
            </div>
        </div>
    </div>
    {{-- modal add guest --}}
    <div class="modal fade" id="addGuestModal" tabindex="-1">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Guest</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="addGuestForm">
                        <div class="mb-3"><label class="form-label">Name</label><input type="text"
                                class="form-control" id="add_name" name="add_name" ></div>
                        <div class="mb-3">
                            <label class="form-label">Group</label>
                            <select class="form-control" id="add_group" name="add_group">
                                <option value="">--Pilih Group--</option>
                                <option value="FRIEND">FRIEND</option>
                                <option value="NEIGHBOR">NEIGHBOR</option>
                                <option value="MAIN FAMILY">MAIN FAMILY</option>
                                <option value="BIG FAMILY">BIG FAMILY</option>
                                <option value="OTHER FAMILY">OTHER FAMILY</option>
                                <option value="OFFICE">OFFICE</option>
                            </select>
                        </div>
                                {{-- relation --}}
                                <div class="mb-3">
                                    <label class="form-label">Relation</label>
                                    <select class="form-control" id="add_relation" name="add_relation">
                                        <option value="">--Pilih Relasi--</option>
                                        <option value="CPW">CPW</option>
                                        <option value="CPW-P">CPW-P</option>
                                        <option value="CPP">CPP</option>
                                        <option value="CPP-P">CPP-P</option>
                                        <option value="BOTH">BOTH</option>
                                    </select>
                                </div>
                         <div class="mb-3">
                            <label class="form-label">Actual</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="decrease-actual"><i
                                        class="fas fa-minus"></i></button>
                                <input type="text" class="form-control text-center" id="add_actual" name="add_actual" value="0">
                                <button class="btn btn-outline-secondary" type="button" id="increase-actual"><i
                                        class="fas fa-plus"></i></button>
                            </div>
                        </div>
                        <div class="mb-3"><label class="form-label">Note</label>
                            <textarea class="form-control" id="add_note" name="add_note"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="submitAddGuest" >Add Guest</button>
                </div>
            </div>
        </div>
    </div>
    {{-- end modal add guest --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js"></script>

    <script>
        let qrScanner;
        let cameraList = [];
        let scannerRunning = false;
        let lastSelectedCameraId = null;

        // ajax to submit add guest to laravel route add-guest
        function addGuest() {
            $.post('{{ route('attendance.add') }}', {
                _token: '{{ csrf_token() }}',
                    add_name: $('#add_name').val(),
                    add_group: $('#add_group').val(),
                    add_relation: $('#add_relation').val(),
                    add_actual: $('#add_actual').val(),
                    add_note : $('#add_note').val(),
            }, function() {
                    $('#addGuestModal').modal('hide');
                    loadTable();
                    $('#search').val('');
                    $('#add_name').val('');
                    $('#add_group').val('');
                    $('#add_actual').val('');
                    $('#add_relation').val('');
                    $('#add_note').val('');
            });
        }

        $(document).ready(function() {
            loadTable();
            $('#search').on('keyup', debounce(loadTable, 500));
            $(document).on('click', '.attendance-btn', function() {
                loadDetailModal($(this).data('id'));
            });
            $('#submitAttendance').on('click', function() {
                const actual = parseInt($('#actual_quota').val());
                if (isNaN(actual) || actual < 0) return alert('Actual quota must be non-negative number.');
                $(this).prop('disabled', true);
                submitAttendance();
            });
            // submitAddGuest onclick
            $('#submitAddGuest').on('click', function() {
                const actual = parseInt($('#add_actual').val());
                if (isNaN(actual) || actual < 0) return alert('Actual quota must be non-negative number.');
                $(this).prop('disabled', true);
                addGuest();
            });
            $('#increase-quota').click(() => $('#actual_quota').val(+$('#actual_quota').val() + 1));
            $('#decrease-quota').click(() => {
                let val = +$('#actual_quota').val();
                if (val > 0) $('#actual_quota').val(val - 1);
            });
            $('#increase-actual').click(() => $('#add_actual').val(+$('#add_actual').val() + 1));
            $('#decrease-actual').click(() => {
                let val = +$('#add_actual').val();
                if (val > 0) $('#add_actual').val(val - 1);
            });
            $('#filter-attendance').change(loadTable);
            $('#btnScanQR').on('click', function() {
                $('#qrModal').modal('show');
                initCameras();
            });
            $('#cameraSelect').on('change', function() {
                restartQRScanner($(this).val());
            });
            $('#qrModal').on('hidden.bs.modal', function() {
                if (qrScanner && scannerRunning) {
                    qrScanner.stop().then(() => {
                        scannerRunning = false;
                        qrScanner.clear();
                    }).catch(err => {
                        console.warn("Stop error:", err);
                        scannerRunning = false;
                    });
                }
            });
        });

        function debounce(fn, delay) {
            let timeout;
            return function() {
                clearTimeout(timeout);
                timeout = setTimeout(fn, delay);
            }
        }

        function initCameras() {
            Html5Qrcode.getCameras().then(devices => {
                cameraList = devices;
                let cameraSelect = $('#cameraSelect');
                cameraSelect.empty();

                devices.forEach((cam, index) => {
                    let selected = (cam.id === lastSelectedCameraId) ? 'selected' : '';
                    cameraSelect.append(
                        `<option value="${cam.id}" ${selected}>${cam.label || 'Camera ' + (index + 1)}</option>`
                        );
                });

                // initialize scanner container once
                if (!qrScanner) {
                    qrScanner = new Html5Qrcode("qr-reader");
                }

                // restart with last used camera, fallback to first one
                if (devices.length > 0) {
                    restartQRScanner(lastSelectedCameraId || devices[0].id);
                }
            }).catch(err => alert("Camera error: " + err));
        }

        function restartQRScanner(cameraId) {
            lastSelectedCameraId = cameraId; // remember selection

            if (qrScanner && scannerRunning) {
                qrScanner.stop().then(() => {
                    scannerRunning = false;
                    qrScanner.clear();
                    startQRScanner(cameraId);
                }).catch(err => {
                    console.warn("Stop error:", err);
                    scannerRunning = false;
                    qrScanner.clear();
                    startQRScanner(cameraId);
                });
            } else {
                startQRScanner(cameraId);
            }
        }

        function startQRScanner(cameraId) {
            qrScanner.start({
                    deviceId: {
                        exact: cameraId
                    }
                }, {
                    fps: 10,
                    qrbox: 250
                },
                qrCodeMessage => {
                    $('#search').val(qrCodeMessage.slice(-4));
                    loadTable(() => {
                        if ($('#guest-table tbody tr').length === 1) {
                            const guestId = $('#guest-table tbody tr').find('.attendance-btn').data('id');
                            if (guestId) {
                                loadDetailModal(guestId);
                            }
                        }
                    });
                    $('#qrModal').modal('hide');
                },
                errorMessage => {
                    // console.warn("QR error:", errorMessage);
                }
            ).then(() => {
                scannerRunning = true;
            }).catch(err => {
                console.error("QR start error:", err);
                scannerRunning = false;
            });
        }

        function loadTable(callback) {
            $.ajax({
                url: '{{ route('attendance.table') }}',
                method: 'GET',
                data: {
                    search: $('#search').val(),
                    filter: $('#filter-attendance').val()
                },
                success: function (data) {
                    $('#guest-table tbody').html(data);
                    if (typeof callback === "function") {
                        callback();
                    }
                }
            });
        }

        function loadDetailModal(guestId) {
            $.get('{{ route('attendance.detail') }}', {
                id: guestId
            }, function(res) {
                $('#code').val(res.code);
                $('#name').val(res.name);
                $('#group').val(res.group);
                $('#quota').val(res.quota);
                $('#attendance').val(res.attendance ? toGMT7(res.attendance) : getCurrentTimeGMT7());
                $('#actual_quota').val(res.actual_quota ?? res.quota);
                $('#note').val(res.note);
                $('#detailModal').modal('show');
                $('#submitAttendance').prop('disabled', false);
                //if the res.priority is 1 change the detailModal background into gold
                if(res.priority === 1){
                    $('.modal-content').css('background-color', '#FFD700'); // light gold color
                } else {
                    $('.modal-content').css('background-color', ''); // reset to default
                }
            });
        }

        function getCurrentTimeGMT7() {
            const now = new Date();
            now.setHours(now.getHours() + 7);
            return now.toISOString().slice(0, 16);
        }

        function submitAttendance() {
            $.post('{{ route('attendance.submit') }}', {
                _token: '{{ csrf_token() }}',
                id: $('#code').val(),
                attendance: $('#attendance').val(),
                actual_quota: $('#actual_quota').val(),
                note: $('#note').val()
            }, function() {
                $('#detailModal').modal('hide');
                loadTable();
                $('#search').val('');
                $('#search').trigger('keyup');

            });
        }
    </script>
</body>

</html>
