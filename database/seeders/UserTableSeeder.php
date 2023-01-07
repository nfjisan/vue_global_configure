<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserTableSeeder extends Seeder
{

    public function run()
    {
        $user = [
                [
                    'name'=>'Admin',
                    'email'=>'admin@gmail.com',
                    'password'=>Hash::make('123456'),
                ],
                [
                    'name'=>'Admin2',
                    'email'=>'admin2@gmail.com',
                    'password'=>Hash::make('123456'),
                ]
            ];

        User::insert($user);
    }
}
