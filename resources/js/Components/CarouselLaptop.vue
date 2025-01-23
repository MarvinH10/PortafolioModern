<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import 'animate.css';

export default defineComponent({
    name: "CarouselLaptop",
    props: {
        isMobile: {
            type: Boolean,
            required: true,
        },
        isMobileSmall: {
            type: Boolean,
            required: true,
        },
    },
    setup() {
        const images = ref([
            "imgs/workexample.png",
            "imgs/workexample.png",
            "imgs/workexample.png",
        ]);

        const currentIndex = ref(0);

        const currentImage = computed(() => images.value[currentIndex.value]);

        return {
            images,
            currentIndex,
            currentImage,
        };
    },
});
</script>

<template>
    <div :class="['animate__animated animate__fadeInRight w-full max-w-4xl', isMobile ? '' : 'mt-[-30px]']">
        <div class="relative w-full max-w-4xl mx-auto">
            <div class="relative">
                <img src="imgs/laptop.png" alt="Laptop"
                    class="w-full object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.5)]" />

                <div :class="[
                    'absolute inset-0 left-[19%] right-[19%] bottom-[25%] z-[-1]',
                    isMobile ? 'top-[6.9%]' : 'top-[10%]',
                ]">
                    <img :src="currentImage" alt="Proyecto en pantalla" :class="[
                        'w-full h-full object-cover rounded-lg shadow-lg transition-all duration-500',
                        isMobileSmall ? 'mt-4' : 'mt-[22.9px]',
                    ]" />
                </div>
            </div>
        </div>

        <div :class="['flex justify-center gap-2 items-center mr-[40px] ml-[40px]', isMobile ? '' : 'mt-[-1px]']">
            <div v-for="(image, index) in images" :key="image" @click="currentIndex = index" :class="[
                'h-[5px] cursor-pointer transition-all duration-300 rounded-full z-10',
                currentIndex === index ? 'bg-primary' : 'bg-gray-500',
            ]" :style="{
                width: `${100 / images.length}%`,
            }">
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate__animated.animate__fadeInRight {
    --animate-duration: 2.5s;
}
</style>
