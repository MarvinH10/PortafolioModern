<script lang="ts">
import { defineComponent } from 'vue';
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
            { name: 'Inicio', icon: 'IconHome', link: '#' },
            { name: 'Acerca de mí', icon: 'IconUser', link: '#' },
            { name: 'Trabajos', icon: 'IconBriefcase', link: '#' },
            { name: 'Blogs', icon: 'IconArticle', link: '#' },
            { name: 'Galería', icon: 'IconLibraryPhoto', link: '#' },
        ];
        return { menuItems };
    },
});
</script>

<template>
    <nav class="bg-[#1a1a1a] text-white flex justify-center p-1 rounded-xl shadow-md">
        <ul class="flex space-x-2">
            <li v-for="item in menuItems" :key="item.name">
                <a
                    :href="item.link"
                    class="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-[#3fb27f] transition-all duration-500"
                >
                    <component
                        :is="item.icon"
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span class="font-medium">{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
