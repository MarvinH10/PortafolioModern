<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import {
    IconHome,
    IconUser,
    IconBriefcase,
    IconArticle,
    IconLibraryPhoto,
} from '@tabler/icons-vue';

export default defineComponent({
    name: 'PortafolioLayout',
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

        onMounted(() => {
            setInterval(() => {
                currentTime.value = new Date().toLocaleTimeString();
            }, 1000);
        });

        return { menuItems, currentTime };
    },
});
</script>

<template>
    <div class="w-full fixed top-0 left-0">
        <div class="flex justify-between items-center px-4 py-2 text-[#1a1a1a]">
            <span class="font-bold text-lg">VinCode</span>
            <nav
                class="bg-[#1a1a1ace] bg-opacity-20 backdrop-blur-sm text-white flex justify-center p-1 rounded-xl shadow-md mt-2">
                <ul class="flex space-x-2">
                    <li v-for="item in menuItems" :key="item.name">
                        <router-link :to="item.link"
                            class="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#3fb27f] transition-all duration-500 cursor-pointer"
                            active-class="bg-[#3fb27f]"
                            exact-active-class="bg-[#3fb27f]">
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
    <main class="min-h-screen text-[#1a1a1a] flex flex-col items-center justify-center">
        <router-view />
    </main>
</template>
