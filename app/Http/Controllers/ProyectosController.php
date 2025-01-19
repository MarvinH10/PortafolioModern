<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProyectosController extends Controller
{
    public function index()
    {
        return Inertia::render('Proyectos/Proyectos');
    }
}
