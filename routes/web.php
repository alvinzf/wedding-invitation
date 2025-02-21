<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Filament\Resources\GuestResource;

Route::get('/', [HomeController::class, 'index']);

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::post('/home', [HomeController::class, 'store']);
Route::get('/admin/guests/{record}', function ($record) {
    return redirect()->route('filament.admin.resources.guests.view', $record);
})->name('filament.admin.resources.guests.view');
