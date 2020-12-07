<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;

class  ControllerAPI extends BaseController
{

    private $name = "";

    private $email= "";

    private $password = "";



    public function Register(Request $request)
    {

        //save Data
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');


        return response($name, 200);
    }


}
