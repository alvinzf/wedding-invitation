<?php

namespace App\Filament\Pages;

use App\Models\Guest;
use Filament\Pages\Page;
use Livewire\WithPagination;

class Attendance extends Page
{
    use WithPagination;

    public $search = '';

    protected static string $view = 'filament.pages.attendance';

    protected static ?string  $navigationIcon = 'heroicon-o-clipboard-document-check';
    protected static ?string $navigationLabel = 'Attendance';
    protected static ?string $title = 'Guest Attendance';


    public function getGuestsProperty()
    {
        return Guest::query()
        ->where('code', 'like', '%' . $this->search . '%')
        ->orWhere('name', 'like', '%' . $this->search . '%')
        ->paginate(10);
    }

    public function goToGuestDetail($guestId)
    {
        return redirect()->route('filament.admin.resources.guests.view', $guestId);
    }
}
