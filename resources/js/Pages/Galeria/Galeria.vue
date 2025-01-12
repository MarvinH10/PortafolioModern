<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Galería',
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
    <div>

        <Head :title="pageTitle" />
        <div>
            Soy la {{ pageTitle }}
        </div>
    </div>
</template>
