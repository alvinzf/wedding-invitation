@foreach ($wishes as $item)

<div data-anim="zoom-in-up" id="wishes-container">

            <div class="wish">
            <div class="wish-badge">
                <h6 class="notranslate">{{ substr($item->name, 0, 1) }}</h6>
            </div>
            <div class="wish-description">
                <h6 style="font-size:1.17rem;" class="notranslate">{{ $item->name }}</h6>
                <p>
                    {{ $item->comment }}
                </p>

                                <small
                    class="text-muted">{{ $item->created_at }}</small>

            </div>
        </div>
    </div>
    @endforeach
