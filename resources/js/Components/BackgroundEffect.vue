<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
    name: 'BackgroundEffect',
    setup() {
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
            const handleInitialPosition = (event: MouseEvent) => {
                targetX.value = event.clientX;
                targetY.value = event.clientY;
                window.removeEventListener('mousemove', handleInitialPosition);
            };

            window.addEventListener('mousemove', handleInitialPosition);

            window.addEventListener('mousemove', handleMouseMove);

            animateMask();
        });

        onBeforeUnmount(() => {
            window.removeEventListener('mousemove', handleMouseMove);
        });

        return {
            maskPositionX,
            maskPositionY,
        };
    },
});
</script>

<template>
    <div class="z-1 display-flex top-0 left-0 overflow-hidden position-fixed Background_mask" :style="{
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
        <div class="display-flex top-0 left-0 pointer-events-none opacity-20 position-absolute Background_dots" :style="{
            '--dots-color': 'rgba(255, 255, 255, 0.1)',
            '--dots-size': '4px'
        }"></div>
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
