<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriaController extends Controller
{
    public function index()
    {
        return Inertia::render('Galeria/Galeria');
    }
}
