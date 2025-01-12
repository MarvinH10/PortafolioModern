<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Inicio',
    components: {
        Head,
    },
    computed: {
        pageTitle() {
            return this.$options.name;
        },
    },
});
</script>

<template>
    <div class="text-left space-y-6">

        <Head :title="pageTitle" />
        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
            Ingeniero de sistemas <br /> e Informática
        </h1>

        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Me llamo Marvin y soy alguien apasionado por crear <span class="text-[#3fb27f] font-semibold">soluciones
                tecnológicas
                innovadoras y eficientes</span>, donde me
            especializo en el desarrollo de software.
        </p>
    </div>
</template>
