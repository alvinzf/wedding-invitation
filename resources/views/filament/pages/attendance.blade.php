<x-filament::page>
    <div class="p-6">
        <!-- Search Input -->
        <div class="mb-4">
            <input type="text" wire:model.debounce.300ms="search"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Guests..." />
        </div>

        <!-- Guest List -->
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th class="px-6 py-3 bg-gray-50"></th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    @foreach ($this->guests as $guest)
                        <tr class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" wire:click="goToGuestDetail({{ $guest->id }})">
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-200">{{ $guest->code }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-200">{{ $guest->name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="{{ route('filament.admin.resources.guests.view', $guest->id) }}"
                                   class="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                                    View
                                </a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="mt-4">
            {{ $this->guests->links() }}
        </div>
    </div>
</x-filament::page>
