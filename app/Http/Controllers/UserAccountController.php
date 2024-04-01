<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserAccountController extends Controller
{
    public function create()
    {
        return inertia('UserAccount/Create');
    }

    public function store(Request $request)
    {
        $user = User::create($request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed'
        ]));
        // $user->save();
        Auth::login($user);
        event(new Registered($user));

        return redirect()->route('listing.index')
            ->with('success', 'Account created!');
    }

    public function index()
    {
        $users = User::all(); // Retrieve users from database
        return Inertia::render('UserAccount/UserList', ['users' => $users]);
    }
}
