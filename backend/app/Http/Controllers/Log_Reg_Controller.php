<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class Log_Reg_Controller extends Controller
{
    //
    public function login_index()
    {

        return view('auth.login');
    }

    public function login_check(LoginRequest $req)
    {
        $user_x = User::where('email', $req->email)
            ->where('password', $req->password)
            ->first();

        if(!empty($user_x))
        {
            if($user_x->user_type == 'admin')
            {
                return $user_x;
            }
            else
            {
                return $user_x;
            }
        }
        return [];
    }

    public function reg_index()
    {
        return view('auth.register');
    }

    public function reg_check(RegisterRequest $req)
    {

        //dd($req);
        $user = new User;

        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = $req->password;
        $user->address = $req->address;
        $user->user_type = 'user';

        if($req->hasFile('image_file'))
        {
            $image = $req->file('image_file');
            $extension = $image->getClientOriginalExtension();
            $image_name = date('y-m-d').time() . '.' . $extension;
            $image->move('uploads/images',$image_name);
            $user->image = $image_name;
        }
        else{
            $user->image = null;
        }


        $user->save();

        return redirect()->route('login');
    }
}
