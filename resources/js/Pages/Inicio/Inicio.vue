<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';
import { IconArrowBigRightFilled } from '@tabler/icons-vue';
import BackgroundEffect from '@/Components/BackgroundEffect.vue';
import ImageWithFrames from '@/Components/ImageWithFrames.vue';
import CarouselLaptop from '@/Components/CarouselLaptop.vue';
import 'animate.css';

export default defineComponent({
    name: 'Inicio',
    inheritAttrs: false,
    components: {
        IconArrowBigRightFilled,
        Head,
        BackgroundEffect,
        ImageWithFrames,
        CarouselLaptop,
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
        isMobileSmall: {
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
            cards: [
                {
                    img: 'imgs/workexample.png',
                    title: 'Proyecto 1',
                    description: 'Una breve descripción de este proyecto.',
                    link: '/proyectos/1',
                },
                {
                    img: 'imgs/workexample.png',
                    title: 'Proyecto 2',
                    description: 'Detalles sobre este servicio o solución.',
                    link: '/proyectos/2',
                },
                {
                    img: 'imgs/workexample.png',
                    title: 'Proyecto 3',
                    description: 'Descubre más sobre este proyecto aquí.',
                    link: '/proyectos/3',
                },
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
        :class="['flex flex-col md:flex-row px-10 z-40', (isMobile || isTablet) ? 'items-start' : 'items-center pt-8 md:pt-[50px]']">
        <div class="flex-shrink-0 w-64 md:w-80 lg:w-96 max-w-full md:mr-10 mb-9 md:mb-0">
            <img src="imgs/yo.png" alt="Avatar"
                class="animate__animated animate__slideInDown w-full h-auto object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]" />
        </div>
        <div class="text-left flex-1">
            <div class="animate__animated animate__zoomInRight">
                <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mt-1">
                    Ingeniero de Sistemas <br /> e Informática
                </h1>
                <p
                    :class="['text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed', (isMobile || isTablet) ? 'pt-3' : 'pt-10']">
                    Me llamo Marvin y me especializo en crear <span class="text-primary font-semibold">soluciones
                        tecnológicas innovadoras</span>.
                    Disfruto trabajar con <span class="text-primary font-semibold">Vue.js</span> por su simplicidad,
                    flexibilidad y eficiencia para
                    desarrollar aplicaciones modernas.
                </p>
                <div class="pt-6">
                    <router-link to="/acerca" class="inline-block">
                        <button
                            class="bg-primary text-white px-1 py-1 rounded-lg text-lg font-semibold shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-3 group">
                            <div class="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
                                <img src="imgs/perfil.jpg" alt="Perfil" class="w-full h-full object-cover">
                            </div>
                            <span class="text-[16px] flex items-center transition-all duration-300 group-hover:pr-3">
                                <span class="mb-[2px]">Acerca de mí</span>
                                <span
                                    class="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                    <IconArrowBigRightFilled class="w-5 h-5" />
                                </span>
                            </span>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-4 px-6 md:px-16 lg:px-20 xl:px-28 flex flex-col items-center gap-8 z-40 overflow-hidden">
        <CarouselLaptop :isMobile="isMobile" :isMobileSmall="isMobileSmall" />
        <div
            class="animate__animated animate__fadeInRight flex flex-col items-center text-center text-white max-w-3xl mx-auto gap-6">
            <div class="flex flex-col md:flex-row justify-between items-start gap-6 text-left">
                <h3 class="text-2xl md:text-3xl font-semibold">
                    Construyendo una UI personalizable, para tu portafolio
                </h3>
                <div class="space-y-4">
                    <div class="flex -space-x-3">
                        <div v-for="(author, index) in authors" :key="index"
                            class="relative w-10 h-10 rounded-full overflow-hidden border border-gray-700">
                            <img :src="author.img" :alt="author.name" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <p class="text-gray-400 text-lg md:text-xl leading-relaxed">
                        Desarrollo de un sistema de diseño altamente flexible y personalizable utilizando Vue.js para
                        front-end y Laravel para hacerlo dinámico.
                    </p>
                    <router-link to="/proyectos"
                        class="flex items-center gap-2 text-primary font-semibold hover:underline transition-all duration-300">
                        Ir al proyecto
                        <IconArrowBigRightFilled class="w-5 h-5" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-16 px-8 md:px-16 lg:px-20 xl:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start mb-4 z-40">
        <div v-for="(card, index) in cards" :key="index"
            class="bg-[#0c0c0c] drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div class="mb-4">
                <img :src="card.img" :alt="card.title" class="rounded-lg w-full object-cover h-40" />
            </div>
            <h4 class="text-lg font-semibold group-hover:text-primary transition-all duration-300">
                {{ card.title }}
            </h4>
            <p class="text-white text-sm mt-2">
                {{ card.description }}
            </p>
            <router-link :to="card.link"
                class="flex items-center gap-2 mt-4 text-primary font-semibold hover:underline transition-all duration-300">
                Ver más
                <IconArrowBigRightFilled class="w-5 h-5" />
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.animate__animated.animate__zoomInRight {
    --animate-duration: 2.5s;
}

.animate__animated.animate__slideInDown {
    --animate-duration: 2.5s;
}

.animate__animated.animate__fadeInRight {
    --animate-duration: 2.5s;
}
</style>
