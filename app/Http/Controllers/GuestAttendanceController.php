<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Guest;

class GuestAttendanceController extends Controller
{
    public function index(Request $request){
        return view('guest-attendance');
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
             $html .= '<td>' . $guest->id . '</td>';
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
         $guest = Guest::find($request->input('id'));
         $guest->attendance = $request->input('attendance');
         $guest->actual_quota = $request->input('actual_quota');
         $guest->note = $request->input('note');
         $guest->save();

         return response()->json(['success' => true]);
     }
}
