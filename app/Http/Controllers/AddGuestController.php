<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Guest;

class AddGuestController extends Controller
{
        public function add(Request $request)
        {
            $guest = new Guest();
            $guest->name = $request->input('add_name');
            $guest->wedding_id = 1;
            $guest->group = $request->input('add_group') . " " . $request->input('add_relation');
            $guest->quota = 0; //default quota is 0
            $guest->actual_quota = $request->input('add_actual');
            $guest->type = 'RESEPSI';
            $guest->rsvp = 0;
            $guest->rsvp_number = 0;
            $guest->rsvp_category = '';
            $guest->note = $request->input('add_note');
            $guest->attendance = now();


            //generate unique code
            do {
                $code = strtoupper(bin2hex(random_bytes(6))); //6 characters
            } while (Guest::where('code', $code)->exists());
            $guest->code = $code;
            $guest->save();

            return response()->json(['success' => true, 'code' => $code]);
        }
}
