<?php


namespace App\Api\V1\Controllers;



use App\Film;
use App\Comment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;




class CommentController extends Controller
{
    public function index()
   {
      $comments = Comment::with('Film')->paginate(12);

      return response()->json([
          'status' => 200,
          'msg' => 'Data Loaded',
          'data' => $comments,

      ]);

   }

   public function create(Request $request){

    
    $this->validateParameter('film_id', $request->film_id, INTEGER);
    $this->validateParameter('name', $request->name, STRING);
    $this->validateParameter('comment', $request->comment, STRING);
  


    $cm = new Comment;
    $cm->film_id   = $request->film_id;
    $cm->name      = $request->name;
    $cm->comment   = $request->comment;
    $cm->save();

    return response()->json([
        'status' => 200,
        'msg' => 'successful',
        'data' => $cm,
    ]);
   


   }


   public function show($film_id = null)
   {
    
   $cm = Comment::where('film_id',$film_id)->with('Film')->paginate(12);

    return response()->json([
        'status' => 200,
        'msg' => 'Data Loaded',
        'data' => $cm,
    ]);

   }
}
