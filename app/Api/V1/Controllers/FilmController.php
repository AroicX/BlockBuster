<?php

namespace App\Api\V1\Controllers;



use App\Film;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FilmController extends Controller
{
   public function index()
   {
      $films = Film::with('Comments')->paginate(12);

      return response()->json([
          'status' => 200,
          'msg' => 'Data Loaded',
          'data' => $films,

      ]);

   }

   public function create(Request $request){

    $request->validate([
        'name' => 'required|unique:films'
    ]);

    $this->validateParameter('name', $request->name, STRING);
    $this->validateParameter('description', $request->description, STRING);
    $this->validateParameter('release_date', $request->release_date, STRING);
    $this->validateParameter('rating', $request->rating, INTEGER);
    $this->validateParameter('ticket_price', $request->ticket_price, FLOAT);
    $this->validateParameter('country', $request->country, STRING);
    $this->validateParameter('genre', $request->genre, OBJECT);
    $this->validateParameter('photo', $request->photo, STRING);


    $film = new Film;
    
    $film->name            = $request->name;
    $film->description     = $request->description;
    $film->release_date    = $request->release_date;
    $film->rating          = $request->rating;
    $film->ticket_price    = $request->ticket_price;
    $film->country         = $request->country;
    $film->genre           = json_encode($request->genre);
    $film->photo           = $request->photo;
    $film->save();

    return response()->json([
        'status' => 200,
        'msg' => 'successful',
        'data' => $film,
    ]);
   


   }


   public function show($id = null)
   {

    
   $film = Film::where('id',$id)->with('Comments')->first();

    return response()->json([
        'status' => 200,
        'msg' => 'Data Loaded',
        'data' => $film,
    ]);

   }

}
