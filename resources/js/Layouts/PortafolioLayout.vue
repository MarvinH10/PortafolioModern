<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { IconHome, IconUser, IconBriefcase, IconArticle, IconLibraryPhoto } from '@tabler/icons-vue';

export default defineComponent({
    name: 'PortafolioLayout',
    inheritAttrs: false,
    components: {
        IconHome,
        IconUser,
        IconBriefcase,
        IconArticle,
        IconLibraryPhoto,
    },
    setup() {
        const menuItems = [
            { name: 'Inicio', icon: 'IconHome', link: '/' },
            { name: 'Acerca de mí', icon: 'IconUser', link: '/acerca' },
            { name: 'Trabajos', icon: 'IconBriefcase', link: '/trabajos' },
            { name: 'Blogs', icon: 'IconArticle', link: '/blogs' },
            { name: 'Galería', icon: 'IconLibraryPhoto', link: '/galeria' },
        ];

        const currentTime = ref(new Date().toLocaleTimeString());

        const targetX = ref(window.innerWidth / 2);
        const targetY = ref(window.innerHeight / 2);

        const maskPositionX = ref('50%');
        const maskPositionY = ref('50%');

        const lerp = (start: number, end: number, amount: number) => {
            return start + (end - start) * amount;
        };

        const handleMouseMove = (event: MouseEvent) => {
            targetX.value = event.clientX;
            targetY.value = event.clientY;
        };

        const animateMask = () => {
            const currentX = parseFloat(maskPositionX.value);
            const currentY = parseFloat(maskPositionY.value);

            maskPositionX.value = `${lerp(currentX, targetX.value, 0.05)}px`;
            maskPositionY.value = `${lerp(currentY, targetY.value, 0.05)}px`;

            requestAnimationFrame(animateMask);
        };

        onMounted(() => {
            setInterval(() => {
                currentTime.value = new Date().toLocaleTimeString();
            }, 1000);

            window.addEventListener('mousemove', handleMouseMove);

            animateMask();
        });

        return {
            menuItems,
            currentTime,
            maskPositionX,
            maskPositionY,
        };
    },
});
</script>

<template>
    <div v-bind="$attrs" class="relative flex flex-col items-center justify-center">
        <div class="w-full fixed top-0 left-0 z-50">
            <div class="flex justify-between items-center px-4 py-2 text-white">
                <span class="font-bold text-lg">VinCode</span>
                <nav
                    class="bg-transparent border border-gray-700 text-white flex justify-center p-1 rounded-xl shadow-md mt-2">
                    <ul class="flex space-x-2">
                        <li v-for="item in menuItems" :key="item.name">
                            <router-link :to="item.link"
                                class="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#3fb27f] transition-all duration-500 cursor-pointer"
                                active-class="bg-[#3fb27f]" exact-active-class="bg-[#3fb27f]">
                                <component :is="item.icon"
                                    class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                                <span class="font-medium">{{ item.name }}</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <span class="font-mono text-sm">{{ currentTime }}</span>
            </div>
        </div>
        <main
            class="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#000000] via-[#080808] to-[#0c0c0c] text-white overflow-hidden w-screen h-screen">
            <div class="display-flex top-0 left-0 overflow-hidden fill position-fixed Background_mask" :style="{
                '--mask-position-x': maskPositionX,
                '--mask-position-y': maskPositionY,
                '--mask-radius': '75vh'
            }">
                <div class="display-flex pointer-events-none opacity-50 position-absolute Background_gradient" :style="{
                    '--gradient-position-x': maskPositionX,
                    '--gradient-position-y': maskPositionY,
                    '--gradient-width': '25%',
                    '--gradient-height': '25%',
                    '--gradient-tilt': '0deg',
                    '--gradient-color-start': 'rgba(63, 178, 127, 0.5)',
                    '--gradient-color-end': 'transparent'
                }"></div>
                <div class="display-flex top-0 left-0 pointer-events-none opacity-20 fill position-absolute Background_dots"
                    :style="{
                        '--dots-color': 'rgba(255, 255, 255, 0.1)',
                        '--dots-size': '4px'
                    }"></div>
            </div>
            <router-view class="z-40" />
        </main>
    </div>
</template>

<style scoped>
.Background_mask {
    position: fixed;
    width: 100%;
    height: 100%;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    -webkit-mask-image: radial-gradient(var(--mask-radius) at var(--mask-position-x) var(--mask-position-y), #000 0, transparent 100%);
    mask-image: radial-gradient(var(--mask-radius) at var(--mask-position-x) var(--mask-position-y), #000 0, transparent 100%);
}

.Background_gradient {
    position: absolute;
    background: radial-gradient(circle at var(--gradient-position-x) var(--gradient-position-y), var(--gradient-color-start), var(--gradient-color-end));
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.3;
}

.Background_dots {
    position: absolute;
    background: repeating-linear-gradient(0deg, var(--dots-color), var(--dots-color) var(--dots-size), transparent var(--dots-size));
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.2;
}
</style>
