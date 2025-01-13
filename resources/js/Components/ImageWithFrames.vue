<script setup>
import { ref } from "vue";

const props = defineProps({
    imageUrl: {
        type: String,
        required: false,
    },
    greenBorderClass: {
        type: String,
        required: false,
    },
    blackBorderClass: {
        type: String,
        required: false,
    },
    altText: {
        type: String,
        required: false,
        default: "Imagen de fondo",
    },
});

const isLoading = ref(false);

const handleImageLoad = () => {
    isLoading.value = true;
};
</script>

<template>
    <div class="lg:w-2/2 mb-8 lg:mb-0 relative ml-4 mr-4 lg:ml-12 lg:mr-12">
        <div class="relative">
            <div class="w-full h-full absolute top-0 left-0 z-10"></div>

            <img :src="imageUrl" :alt="altText" class="rounded-lg w-full shadow-lg relative z-10"
                @load="handleImageLoad" />

            <div v-if="isLoading" :class="greenBorderClass"></div>
            <div v-if="isLoading" :class="blackBorderClass"></div>
        </div>
    </div>
</template>

<style scoped>
.clip-path {
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
</style>
