<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Filament\Resources\GuestResource;
use App\Http\Controllers\GuestAttendanceController;
Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::post('/home', [HomeController::class, 'store']);
Route::get('/admin/guests/{record}', function ($record) {
    return redirect()->route('filament.admin.resources.guests.view', $record);
})->name('filament.admin.resources.guests.view');
Route::get('/attendance', [GuestAttendanceController::class, 'index'])->name('attendance');
Route::get('/attendance/table', [GuestAttendanceController::class, 'table'])->name('attendance.table');
Route::get('/attendance/detail', [GuestAttendanceController::class, 'detail'])->name('attendance.detail');
Route::post('/attendance/submit', [GuestAttendanceController::class, 'submit'])->name('attendance.submit');
Route::post('/guest-confirmation', [GuestAttendanceController::class, 'guestConfirmation'])->name('guest-confirmation');
