<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';
import { IconArrowBigRightLineFilled } from '@tabler/icons-vue';
import BackgroundEffect from '@/Components/BackgroundEffect.vue';
import ImageWithFrames from '@/Components/ImageWithFrames.vue';

export default defineComponent({
    name: 'Inicio',
    inheritAttrs: false,
    components: {
        IconArrowBigRightLineFilled,
        Head,
        BackgroundEffect,
        ImageWithFrames,
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
    data() {
        return {
            authors: [
                { name: 'Autor Principal', img: 'imgs/perfil.jpg' },
                // { name: 'Coautor', img: 'imgs/perfil.jpg' },
            ],
        };
    },
    computed: {
        pageTitle() {
            return this.$options.name;
        },
    },
});
</script>

<template>

    <Head :title="pageTitle" />
    <BackgroundEffect />
    <div
        :class="['flex flex-col md:flex-row pt-8 md:pt-20 px-10 z-40 mb-4', isMobile || isTablet ? 'items-start' : 'items-center']">
        <div class="flex-shrink-0 w-64 md:w-80 lg:w-96 max-w-full md:mr-10 mb-9 md:mb-0">
            <img src="imgs/yo.png" alt="Avatar"
                class="w-full h-auto object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]" />
        </div>
        <div class="text-left flex-1">
            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight">
                Ingeniero de Sistemas <br /> e Informática
            </h1>
            <p class="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed pt-10">
                Me llamo Marvin y me especializo en crear <span class="text-primary font-semibold">soluciones
                    tecnológicas innovadoras</span>.
                Disfruto trabajar con <span class="text-primary font-semibold">Vue.js</span> por su simplicidad,
                flexibilidad y eficiencia para
                desarrollar aplicaciones modernas.
            </p>
            <div class="pt-6">
                <router-link to="/acerca" class="inline-block">
                    <button
                        class="bg-primary text-white px-1 py-1 rounded-full text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-3 group">
                        <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img src="imgs/perfil.jpg" alt="Perfil" class="w-full h-full object-cover">
                        </div>
                        <span class="text-[16px] flex items-center transition-all duration-300 group-hover:pr-3">
                            <span class="mb-[2px]">Acerca de mí</span>
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
    <div class="pt-16 px-6 md:px-16 lg:px-20 xl:px-28 flex flex-col items-center gap-8 z-40 mb-4">
        <div class="w-full max-w-4xl">
            <ImageWithFrames :imageUrl="'imgs/workexample.png'
                " :altText="'Proyecto Imagen'"
                greenBorderClass="absolute -top-2 -left-2 xs:-top-3 xs:-left-3 sm:-top-4 sm:-left-4 md:-top-5 md:-left-5 lg:-top-6 lg:-left-6 xl:-top-6 xl:-left-6 w-[120px] h-[120px] xs:w-[130px] xs:h-[130px] sm:w-[300px] sm:h-[300px] md:w-[330px] md:h-[330px] lg:w-[300px] lg:h-[300px] border-[10px] sm:border-[15px] md:border-[17px] border-primary rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] z-0"
                blackBorderClass="absolute -bottom-2 -right-2 xs:-bottom-3 xs:-right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 w-[140px] h-[140px] xs:w-[160px] xs:h-[160px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] lg:w-[280px] lg:h-[280px] bg-[#35495e] z-0 clip-path rounded-br-[15px] lg:rounded-br-[17px] sm:rounded-br-[17px]" />
        </div>
        <div class="flex flex-col items-center text-center text-white max-w-3xl mx-auto gap-6">
            <div class="flex flex-col md:flex-row justify-between items-start gap-6 text-left">
                <h3 class="text-2xl md:text-3xl font-semibold">
                    Construyendo una UI, un sistema de diseño personalizable
                </h3>
                <div class="space-y-4">
                    <div class="flex -space-x-3">
                        <div v-for="(author, index) in authors" :key="index"
                            class="relative w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                            <img :src="author.img" :alt="author.name" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p class="text-gray-400 text-base md:text-lg leading-relaxed">
                        Desarrollo de un sistema de diseño altamente flexible y personalizable utilizando Vue.js para
                        front-end y Laravel para hacerlo dinámico.
                    </p>
                    <router-link to="/trabajos"
                        class="flex items-center gap-2 text-primary font-semibold hover:underline transition-all duration-300">
                        Leer estudio de caso
                        <IconArrowBigRightLineFilled class="w-5 h-5" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
