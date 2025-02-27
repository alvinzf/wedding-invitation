<?php
namespace App\Livewire;

use Filament\Pages\Page;

class GuestAttendance extends Page
{
    protected static string $view = 'guest-attendance';

    protected static ?string $navigationLabel = 'Guest Attendance';

    protected static ?string $navigationIcon = 'heroicon-o-clipboard-document-check';

    // same with dashboard
    // protected static ?string $navigationGroup =

    public function mount()
    {
        // Any initialization logic can go here
    }
    // public function render()
    // {
    //     return view('livewire.guest-attendance');
    // }
}
