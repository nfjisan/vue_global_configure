<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Backed\UserController;

Route::middleware('guest')->group(function(){
    Route::get('/', [LoginController::class, 'login'])->name('login');
    Route::get('login', [LoginController::class, 'login'])->name('login');
    Route::post('login', [LoginController::class, 'doLogin']);
});

Route::middleware('auth')->group(function(){
    Route::get('logout', [LoginController::class, 'logout']);
    Route::get('home', function(){return redirect('admin/users');})->name('home');


    Route::prefix('api')->group(function(){
        Route::resource('users', UserController::class);

    });
});


Route::get('/admin/{any}', function(){return view('welcome'); })
    ->where('any', '.*')->middleware('auth');


