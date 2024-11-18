<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Pest\ArchPresets\Custom;


class AuthController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        try {
           $request->validate([
               'name' => 'required|string|max:255',
               'email' => 'required|string|email|max:255|unique:users',
               'password' => 'required|string|min:8|confirmed',]);

            Log::info("errorsrrrrrrrrr",[$request]);
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            if($user){ return response()->json(['user' => $user], 201);}
            else{
                return response()->json(['message' => 'User Registration Failed!'], 409);
            }
        }catch (\Exception $e){
            return response()->json(['message' => 'User already registered'], 409);
        }





    }

    // Login user
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $token = $user->createToken('YourAppName')->plainTextToken;
            return response()->json(['user' => $user, 'token' => $token], 200);
        }

        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // Logout user
    public function logout(Request $request)
    {
        log::info("logout",[$request]);
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }

    // Get authenticated user
    public function user(Request $request)
    {
        return response()->json($request->user());
    }

}
