<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(){
        return view('auth.login');
    }

    public function doLogin(Request $request){
        $creadiantial = [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

        if(Auth::attempt($creadiantial)){
            return redirect('admin/users');
        }

        return redirect('login');
    }

    public function logout()
    {
        Auth::logout();
        return redirect('login');

    }
}
