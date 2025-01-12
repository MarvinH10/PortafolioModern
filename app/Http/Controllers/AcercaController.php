<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AcercaController extends Controller
{
    public function index()
    {
        return Inertia::render('Acerca/Acerca');
    }
}
