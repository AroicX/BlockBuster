<?php

use Illuminate\Database\Seeder;
use App\Film;
class FilmsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Film::create([
            'name'              => 'Jumanji Next Level',
            'description'       => 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ',
            'release_date'      => '2020-02-01',
            'rating'            => 4,
            'ticket_price'      => 5000.00,
            'country'           => 'NG',
            'genre'             =>  json_encode(['Thriller','Action','Comdey']),
            'photo'             =>  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxj0M5vbvyeQ8kxcUoRdHMyIjtsQ410YILzsggthfw7GRryQXP',
        ]);
        Film::create([
            'name'              => 'Charile\'s Angel',
            'description'       => 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ',
            'release_date'      => '2019-05-08',
            'rating'            => 4,
            'ticket_price'      => 3000.00,
            'country'           => 'NG',
            'genre'             =>  json_encode(['Thriller','Action','Comdey']),
            'photo'             =>  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxj0M5vbvyeQ8kxcUoRdHMyIjtsQ410YILzsggthfw7GRryQXP',
        ]);
        Film::create([
            'name'              => 'Rambo Last Blood',
            'description'       => 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. ',
            'release_date'      => '2019-08-21',
            'rating'            => 5,
            'ticket_price'      => 5000.00,
            'country'           => 'NG',
            'genre'             =>  json_encode(['Thriller','Action','Comdey']),
            'photo'             =>  'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxj0M5vbvyeQ8kxcUoRdHMyIjtsQ410YILzsggthfw7GRryQXP',
        ]);


       
    }
}
