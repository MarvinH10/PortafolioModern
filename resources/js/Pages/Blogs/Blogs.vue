<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';
import BackgroundEffect from '@/Components/BackgroundEffect.vue';

export default defineComponent({
    name: 'Blogs',
    components: {
        Head,
        BackgroundEffect,
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
    <div class="text-left pt-8 xs:pt-8 md:pt-20 lg:pt-20 xl:pt-20 pl-10 pr-10 z-40">

        <Head :title="pageTitle" />
        <div>
            Soy los {{ pageTitle }}
        </div>
    </div>
</template>
