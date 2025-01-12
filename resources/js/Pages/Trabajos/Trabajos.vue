<script lang="ts">
import { Head } from '@inertiajs/vue3';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Trabajos',
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
            Soy los {{ pageTitle }}
        </div>
    </div>
</template>
