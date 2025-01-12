<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import PortafolioLayout from '@/Layouts/PortafolioLayout.vue';
</script>

<template>

    <Head title="Portafolio" />
    <div class="min-h-screen text-white flex flex-col items-center justify-center">
        <PortafolioLayout />
        <div class="mt-8 text-lg">Hola, este es el contenido principal.</div>
    </div>
</template>
