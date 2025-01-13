<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';
import { IconArrowBigRightLineFilled } from '@tabler/icons-vue';
import BackgroundEffect from '@/Components/BackgroundEffect.vue';

export default defineComponent({
    name: 'Inicio',
    inheritAttrs: false,
    components: {
        IconArrowBigRightLineFilled,
        Head,
        BackgroundEffect,
    },
    props: {
        isTablet: {
            type: Boolean,
            required: false,
        },
        isMobile: {
            type: Boolean,
            required: false,
        },
    },
    computed: {
        pageTitle() {
            return this.$options.name;
        },
    },
});
</script>

<template>
    <BackgroundEffect />
    <div class=""
        :class="['flex flex-col md:flex-row pt-8 xs:pt-8 md:pt-20 lg:pt-20 xl:pt-20 px-10 z-40', (isMobile || isTablet) ? 'items-start' : 'items-center']">
        <div class="flex-shrink-0 w-64 md:w-80 lg:w-96 max-w-full md:mr-10 mb-9 md:mb-0">
            <img src="imgs/yo.png" alt="Avatar" class="w-full h-auto object-contain" />
        </div>
        <div class="text-left items-center justify-center flex-1">

            <Head :title="pageTitle" />
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                Ingeniero de Sistemas <br /> e Informática
            </h1>
            <p class="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed pt-10">
                Me llamo Marvin y me especializo en crear <span class="text-primary font-semibold">soluciones
                    tecnológicas innovadoras</span>. Disfruto trabajar con <span
                    class="text-primary font-semibold">Vue.js</span> por su simplicidad, flexibilidad y eficiencia para
                desarrollar aplicaciones modernas.
            </p>

            <div class="pt-6">
                <router-link to="/acerca" class="inline-block">
                    <button
                        class="bg-primary text-white px-1 py-1 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-3 group relative overflow-hidden">
                        <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img src="imgs/perfil.jpg" alt="Perfil" class="w-full h-full object-cover">
                        </div>
                        <span class="text-[16px] flex items-center transition-all duration-300 group-hover:pr-3">
                            <span class="mb-[2px]">Ver Más</span>
                            <span
                                class="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                <IconArrowBigRightLineFilled class="w-5 h-5" />
                            </span>
                        </span>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>
