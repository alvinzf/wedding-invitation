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
use Filament\Tables\Filters\Filter;
use Filament\Tables\Actions\Action;
use Illuminate\Support\Str;
use Livewire\Component;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class GuestResource extends Resource
{
    protected static ?string $model = Guest::class;
    protected static ?string $navigationGroup = 'Transactions';

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Form $form): Form
{
    return $form->schema([
        Forms\Components\Card::make()->schema([
            Forms\Components\TextInput::make('code')
                ->label('Code')
                ->default(1)
                ->extraInputAttributes(fn ($operation) => $operation === 'edit' ? ['readonly' => true] : [])
                ->required()
                ->suffixIcon('heroicon-o-camera') // Add a camera icon
                ->extraAttributes(['id' => 'scanQR']), // Set an ID for JavaScript

            Forms\Components\TextInput::make('name')
                ->label('Name')
                ->placeholder('Name')
                ->extraInputAttributes(fn ($operation) => $operation === 'edit' ? ['readonly' => true] : [])
                ->required(),

            Forms\Components\TextInput::make('quota')
                ->label('Quota')
                ->placeholder('Quota')
                ->extraInputAttributes(fn ($operation) => $operation === 'edit' ? ['readonly' => true] : [])
                ->required(),

            Forms\Components\DateTimePicker::make('attendance')
                ->placeholder('Attendance')
                ->visible(fn ($operation) => $operation === 'edit'),

            \LaraZeus\Quantity\Components\Quantity::make('actual_quota')
                ->label('Actual Attendance')
                ->required()
                ->visible(fn ($operation) => $operation === 'edit'),

            Forms\Components\Textarea::make('note')
                ->placeholder('Note')
                ->visible(fn ($operation) => $operation === 'edit'),
        ]),
        Forms\Components\View::make('qr-scan-page'), // Inject QR scanner only here
    ]);
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
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('code')->searchable(),
                TextColumn::make('name')->searchable(),
                TextColumn::make('group')->searchable(),
                TextColumn::make('quota'),
                TextColumn::make('attendance'),
                TextColumn::make('actual_quota'),
                TextColumn::make('note'),
            ])
            ->filters([
                Filter::make('attended')
                    ->query(fn ($query) => $query->whereNotNull('attendance'))
                    ->label('Attended'),
                Filter::make('not_attended')
                    ->query(fn ($query) => $query->whereNull('attendance'))
                    ->label('Not Attended'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                // Uncomment and modify the following action if needed
                // Action::make('Attend')
                //     ->label('Attend')
                //     ->icon('heroicon-o-check')
                //     ->color('success')
                //     ->modalHeading('Guest Detail')
                //     ->modalWidth('2xl')
                //     ->action(fn ($record, Component $livewire) =>
                //     $livewire->dispatch('openAttendModal', ['recordId' => $record->id])
                // )
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
