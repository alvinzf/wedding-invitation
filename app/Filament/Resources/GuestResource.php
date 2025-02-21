<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GuestResource\Pages;
use App\Filament\Resources\GuestResource\RelationManagers;
use App\Models\Guest;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Actions\Action;
use Illuminate\Support\Str;
use Livewire\Component;
use Illuminate\Support\Facades\Log;

class GuestResource extends Resource
{
    protected static ?string $model = Guest::class;
    protected static ?string $navigationGroup = 'Transactions';

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Form $form): Form
    {
        $form
        ->schema([

            //card
            Forms\Components\Card::make()
                ->schema([

                    Forms\Components\TextInput::make('wedding_id')
                    ->label('Wedding ID')
                    ->default(1) // Set the default value to the current datetim
                    ->required(), // Ensure it is required

                    //name
                    Forms\Components\TextInput::make('name')
                      ->label('Name')
                      ->placeholder('Name')
                      ->required(),

                    //quota
                    Forms\Components\TextInput::make('quota')
                      ->label('Quota')
                      ->placeholder('Quota')
                      ->required(),

                    Forms\Components\DateTimePicker::make('attendance')
                    ->placeholder('Attendance')
                    // ->native(false)
                    ->required()
                    ->visible(fn ($operation) => $operation === 'edit'),

                    // Forms\Components\TextInput::make('actual_quota')
                    // ->placeholder('Actual Quota')
                    // ->required()
                    // ->visible(fn ($operation) => $operation === 'edit'),

                    \LaraZeus\Quantity\Components\Quantity::make('actual_quota')
                    ->label('Actual Attendance')
                    ->required()
                    ->visible(fn ($operation) => $operation === 'edit'),

                    // Forms\Components\TextInput::make('souvenir')
                    // ->placeholder('Souvenir')
                    // ->required()
                    // ->visible(fn ($operation) => $operation === 'edit'),

                    Forms\Components\Textarea::make('note')
                    ->placeholder('Note')
                    ->required()
                    ->visible(fn ($operation) => $operation === 'edit'),

                ])
        ]);
        return $form;
    }
    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGuests::route('/'),
            'create' => Pages\CreateGuest::route('/create'),
            'edit' => Pages\EditGuest::route('/{record}/edit'),
        ];
    }
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        // Generate a random alphanumeric string
        $data['code'] = Str::random(4); // Adjust the length as needed
        $data['wedding_id'] = 1;


        return $data;
    }
    public static function table(Table $table): Table
    {

        return $table
            ->columns([
                TextColumn::make('code')->searchable(),
                TextColumn::make('name')->searchable(),
                TextColumn::make('quota'),
                TextColumn::make('attendance'),
                TextColumn::make('actual_quota'),
                TextColumn::make('souvenir'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),

                Action::make('Attend')
                    ->label('Attend')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->modalHeading('Guest Detail')
                    ->modalWidth('2xl')
                    ->action(fn ($record, Component $livewire) =>
                    $livewire->dispatch('openAttendModal', ['recordId' => $record->id])
            ),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }


    public $selectedRecord = null;

    protected $listeners = ['openAttendModal'];

    public function openAttendModal($data)
    {
        Log::info("openAttendModal");
        $this->selectedRecord = Guest::find($data['recordId']);

        // log selectedrecord
        Log::info("selectedRecord",[$this->selectedRecord]);

        if ($this->selectedRecord) {
            // Dynamically generate a unique modal ID
            $dynamicModalId = 'attend-modal-' . $data['recordId'];

            // Dispatch browser event with dynamic ID
            $this->dispatchBrowserEvent('open-modal', ['id' => $dynamicModalId]);
        }
    }

    public function render()
    {
        return view('filament.pages.attendee-details');
    }

}
