<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guest Attendance</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome for Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        /* body {
            padding: 20px;
        } */
        .table {
            margin-top: 20px;
        }
        .attendance-btn {
            cursor: pointer;
        }
        .navbar-custom {
            background-color: #ffcccb; /* Pinkish color */
        }
    </style>
</head>
<body>
    <!-- Navbar -->
<!-- As a heading -->
    <nav class="navbar navbar-custom">
        <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Wedding of Thara & Alvin</span>
        </div>
    </nav>

    <div class="container mt-2">
        <h1>Guest Attendance</h1>
        <div class="row">
            <div class="mb-3 col-md-3">
                <label for="filter-attendance" class="form-label">Filter Attendance</label>
                <select class="form-control" id="filter-attendance">
                    <option value="not_attended" selected>Not Attended</option>
                    <option value="attended">Attended</option>
                    <option value="all">All</option>
                </select>
            </div>
            <div class="mb-3 col-md-6">
                <label for="filter-attendance" class="form-label">Search</label>
                <input type="text" id="search" class="form-control" placeholder="Search by name or code...">
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
                <!-- Table rows will be populated via AJAX -->
            </tbody>
        </table>
    </div>

    <!-- Detail Modal -->
    <div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="detailModalLabel">Guest Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="detailForm">
                        <div class="mb-3">
                            <label for="code" class="form-label">Code</label>
                            <input type="text" class="form-control" id="code" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="group" class="form-label">Group</label>
                            <input type="text" class="form-control" id="group" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="quota" class="form-label">Quota</label>
                            <input type="text" class="form-control" id="quota" readonly>
                        </div>
                        <div class="mb-3">
                            <label for="attendance" class="form-label">Attendance</label>
                            <input type="datetime-local" class="form-control" id="attendance">
                        </div>
                        <div class="mb-3">
                            <label for="actual_quota" class="form-label">Actual </label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="decrease-quota">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="text" class="form-control text-center" id="actual_quota" value="0">
                                <button class="btn btn-outline-secondary" type="button" id="increase-quota">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="note" class="form-label">Note</label>
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

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        $(document).ready(function() {
            // Load table data on page load
            loadTable();

            // Search functionality
            let searchTimeout;
            $('#search').on('keyup', function() {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(function() {
                    loadTable();
                }, 500); // Delay search by 500ms
            });

            // Open detail modal
            $(document).on('click', '.attendance-btn', function() {
                var guestId = $(this).data('id');
                loadDetailModal(guestId);
            });

            // Submit attendance
            $('#submitAttendance').on('click', function() {
                submitAttendance();
            });
            $('#increase-quota').click(function () {
            let currentValue = parseInt($('#actual_quota').val()) || 0;
                $('#actual_quota').val(currentValue + 1);
            });

            $('#decrease-quota').click(function () {
                let currentValue = parseInt($('#actual_quota').val()) || 0;
                if (currentValue > 0) {
                    $('#actual_quota').val(currentValue - 1);
                }
            });
            $('#filter-attendance').change(function () {
            loadTable();

            });

        // Trigger change event on page load to apply default filter
        $('#filter-attendance').trigger('change');
        });

        function loadTable() {
            let filterValue = $('#filter-attendance').val();
            $.ajax({
                url: '{{ route("attendance.table") }}',
                method: 'GET',
                data: { search: $('#search').val(), filter: filterValue },
                success: function(response) {
                    $('#guest-table tbody').html(response);
                }
            });
        }

        function loadDetailModal(guestId) {
            $.ajax({
                url: '{{ route("attendance.detail") }}',
                method: 'GET',
                data: { id: guestId },
                success: function(response) {
                    $('#code').val(response.code);
                    $('#name').val(response.name);
                    $('#group').val(response.group);
                    $('#quota').val(response.quota);
                    $('#attendance').val(response.attendance ? toGMT7(response.attendance) : getCurrentTimeGMT7());
                    $('#actual_quota').val(response.actual_quota ?? response.quota);
                    $('#note').val(response.note);
                    $('#detailModal').modal('show');
                }
            });
        }
        function formatTime(dateString) {
            if (!dateString) return 'Not Checked In';
            const date = new Date(dateString);
            date.setHours(date.getHours() + 7); // Add 7 hours for GMT+7
            return date.toLocaleString('en-GB', { timeZone: 'Asia/Jakarta' }); // Format as DD/MM/YYYY, HH:MM:SS
        }
        function getCurrentTimeGMT7() {
            const now = new Date();
            const offset = 7; // GMT+7
            now.setHours(now.getHours() + offset);
            return now.toISOString().slice(0, 16); // Format as YYYY-MM-DDTHH:MM
        }
        function submitAttendance() {
            var formData = {
                _token: '{{ csrf_token() }}',
                id: $('#code').val(),
                attendance: $('#attendance').val(),
                actual_quota: $('#actual_quota').val(),
                note: $('#note').val()
            };

            $.ajax({
                url: '{{ route("attendance.submit") }}',
                method: 'POST',
                data: formData,
                success: function(response) {
                    $('#detailModal').modal('hide');
                    loadTable(); // Refresh table
                }
            });
        }
    </script>
</body>
</html>
