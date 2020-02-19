<?php

use Dingo\Api\Routing\Router;

/** @var Router $api */
$api = app(Router::class);


$api->version('v1', function (Router $api) {
    $api->group(['prefix' => 'auth'], function(Router $api) {
        $api->post('signup', 'App\\Api\\V1\\Auth\\Controllers\\SignUpController@signUp');
        $api->post('login', 'App\\Api\\V1\\Auth\\Controllers\\LoginController@login');

        $api->post('recovery', 'App\\Api\\V1\\Auth\\Controllers\\ForgotPasswordController@sendResetEmail');
        $api->post('reset', 'App\\Api\\V1\\Auth\\Controllers\\ResetPasswordController@resetPassword');

        $api->post('logout', 'App\\Api\\V1\\Auth\\Controllers\\LogoutController@logout');
        $api->post('refresh', 'App\\Api\\V1\\Auth\\Controllers\\RefreshController@refresh');
        $api->get('me', 'App\\Api\\V1\\Controllers\\UserController@me');
    });


   

    $api->group(['middleware' => 'jwt.auth'], function(Router $api) {
    
        $api->group(['prefix' => 'films'], function(Router $api) {
            $api->get('/', 'App\\Api\\V1\\Controllers\\FilmController@index');
            $api->post('/create', 'App\\Api\\V1\\Controllers\\FilmController@create');
            $api->get('/find/{id}', 'App\\Api\\V1\\Controllers\\FilmController@show');
    
        });


    });

    $api->get('hello', function() {
        return response()->json([
            'message' => 'This is a simple example of item returned by your APIs. Everyone can see it.'
        ]);
    });
});
