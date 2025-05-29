<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Guest;
use App\Models\Wishes;

class GuestAttendanceController extends Controller
{
    public function index(Request $request){
        return view('guest-attendance');
    }

    public function checkedInGuests(Request $request){
        //get all guests who have checked in
        $guests = Guest::where('attendance', '!=', null)
                  ->orderBy('attendance', 'asc')
                  ->take(10)
                  ->get();
        return response()->json(['guests' => $guests]);
    }

    public function landingPage(){
        //get all guests who have checked in
        return view('landing-page');
    }

    public function guestConfirmation(Request $request){
        $guest = Guest::where('code', $request->input('code'))->first();
        if ($guest) {
            $guest->rsvp = true;
            $guest->rsvp_number = $request->input('number');
            $guest->save();
            return response()->json(['status' => true, 'guest' => $guest]);
        } else {
            return response()->json(['status' => false]);
        }
    }
    public function guestWishes(){
        //all wish and the newest first
        $wishes = Wishes::orderBy('created_at', 'desc')->get();
        return view('wishes', ['wishes' => $wishes]);

    }

    public function sendWish(Request $request){
        $wish = new Wishes();
        $guest = Guest::where('code', $request->input('code'))->first();
        if ($guest) {
            $wish->name = $guest->name;
            $wish->comment = $request->input('comment');
            $wish->save();
            return response()->json(['status' => true]);
        } else {
            return response()->json(['status' => false]);
        }

    }
     // Fetch table data
     public function table(Request $request)
     {
         $search = $request->input('search');
         $filter = $request->input('filter');
         $guests = Guest::query()
             ->when($search, function ($query, $search) {
                 return $query->where(function ($query) use ($search) {
                     $query->where('name', 'like', "%$search%")
                           ->orWhere('code', 'like', "%$search%");
                 });
             })
             ->when($filter == 'not_attended', function ($query) {
                 return $query->where('attendance', null);
             })
             ->when($filter == 'attended', function ($query) {
                 return $query->where('attendance', '!=', null);
             })
             ->get();


         $html = '';
         foreach ($guests as $guest) {
             $html .= '<tr>';
             $html .= '<td>' . $guest->code . '</td>';
             $html .= '<td>' . $guest->name . '</td>';
             $html .= '<td>' . $guest->group . '</td>';
             $html .= '<td>' . $guest->quota . '</td>';
             $html .= '<td>' . $guest->attendance . '</td>';
             $html .= '<td>' . $guest->actual_quota . '</td>';
             $html .= '<td>' . $guest->note . '</td>';
             $html .= '<td><button class="btn btn-sm btn-primary attendance-btn" data-id="' . $guest->id . '"><i class="fas fa-check"></i></button></td>';
             $html .= '</tr>';
         }

         return $html;
     }

     // Fetch guest detail
     public function detail(Request $request)
     {
         $guest = Guest::find($request->input('id'));
         return response()->json($guest);
     }

     // Submit attendance
     public function submit(Request $request)
     {
         $guest = Guest::where('code', $request->input('id'))->first();
         $guest->attendance = $request->input('attendance');
         $guest->actual_quota = $request->input('actual_quota');
         $guest->note = $request->input('note');
         $guest->save();

         return response()->json(['success' => true]);
     }
}
