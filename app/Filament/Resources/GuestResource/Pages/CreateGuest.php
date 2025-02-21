<?php

namespace App\Filament\Resources\GuestResource\Pages;

use App\Filament\Resources\GuestResource;
use Filament\Actions;
use App\Models\Guest;
use Filament\Resources\Pages\CreateRecord;

class CreateGuest extends CreateRecord
{
    protected static string $resource = GuestResource::class;
    protected function getRedirectUrl(): string
    {
        return request()->back();
    }

    public function create(bool $another = false): void
    {

        $this->beginDatabaseTransaction();

        $data = $this->form->getState();
        $data['code'] = substr(str_shuffle('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 0, 4);
        Guest::create($data);
        $redirectUrl = $this->getRedirectUrl();

        $this->redirect($redirectUrl);
    }
}
