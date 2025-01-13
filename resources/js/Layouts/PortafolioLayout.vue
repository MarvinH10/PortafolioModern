<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
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

        const currentTime = ref('');
        const updateCurrentTime = () => {
            const formatter = new Intl.DateTimeFormat('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            });
            currentTime.value = formatter.format(new Date()).toUpperCase();
        };

        const isTablet = ref(window.innerWidth <= 830);
        const isMobile = ref(window.innerWidth <= 640);

        const handleResize = () => {
            isTablet.value = window.innerWidth <= 830;
            isMobile.value = window.innerWidth <= 640;
        };

        onMounted(() => {
            updateCurrentTime();
            setInterval(updateCurrentTime, 1000);

            window.addEventListener('resize', handleResize);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', handleResize);
        });

        return {
            menuItems,
            currentTime,
            isTablet,
            isMobile,
        };
    },
});
</script>

<template>
    <div v-bind="$attrs" class="relative flex flex-col items-center justify-center">
        <div :class="['w-full fixed z-50', isTablet ? 'bottom-0' : 'top-0']">
            <div :class="['flex items-center px-4 py-2 text-white', isTablet ? 'justify-center' : 'justify-between']">
                <span v-if="!isTablet" class="font-bold text-lg">VinCode</span>
                <nav
                    class="bg-transparent backdrop-brightness-50 backdrop-blur-[1px] border border-gray-700 text-white flex justify-center p-1 rounded-xl shadow-md mt-2">
                    <ul class="flex space-x-2">
                        <li v-for="item in menuItems" :key="item.name" class="relative group">
                            <router-link :to="item.link"
                                class="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-primary transition-all duration-500 cursor-pointer"
                                active-class="bg-primary" exact-active-class="bg-primary">
                                <component :is="item.icon"
                                    class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                                <span v-if="!isMobile">{{ item.name }}</span>
                            </router-link>
                            <div v-if="isMobile"
                                class="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap flex justify-center items-center">
                                {{ item.name }}
                            </div>
                        </li>
                    </ul>
                </nav>
                <span v-if="!isTablet" class="font-mono text-sm">{{ currentTime }}</span>
            </div>
        </div>
        <main
            class="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#000000] via-[#080808] to-[#0c0c0c] text-white overflow-auto w-full min-h-screen">
            <router-view />
        </main>
    </div>
</template>

<style scoped>
.group:hover .tooltip {
    opacity: 1;
}
</style>

