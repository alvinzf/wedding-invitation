<div x-data="{ open: false, modalId: null }" x-init="
    window.addEventListener('openAttendModal', event => {
        console.log('Modal Event:', event.detail); // Debugging
        modalId = event.detail.id; // Store the dynamic ID
        open = true; // Open modal
    });
">
    <x-filament::modal id="attend-modal" :show="open">
        <x-slot name="content">
            @if ($selectedRecord)
                <p><strong>Code:</strong> {{ $selectedRecord['code'] }}</p>
                <p><strong>Name:</strong> {{ $selectedRecord['name'] }}</p>
                <p><strong>Quota:</strong> {{ $selectedRecord['quota'] }}</p>
                <p><strong>Attendance:</strong> {{ $selectedRecord['attendance'] }}</p>
                <p><strong>Actual Quota:</strong> {{ $selectedRecord['actual_quota'] }}</p>
                <p><strong>Souvenir:</strong> {{ $selectedRecord['souvenir'] }}</p>
            @else
                <p class="text-red-500">No record found.</p>
            @endif
        </x-slot>
        <x-slot name="footer">
            <x-filament::button x-on:click="open = false">Close</x-filament::button>
        </x-slot>
    </x-filament::modal>
</div>
