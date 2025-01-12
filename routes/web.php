<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

$routes = [
    'acerca' => App\Http\Controllers\AcercaController::class,
    'trabajos' => App\Http\Controllers\TrabajosController::class,
    'blogs' => App\Http\Controllers\BlogsController::class,
    'galeria' => App\Http\Controllers\GaleriaController::class,
];

foreach ($routes as $uri => $controller) {
    Route::get("/{$uri}", [$controller, 'index'])->name($uri);
}

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
