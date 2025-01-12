import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './links';
import PortafolioLayout from '@/Layouts/PortafolioLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        .then((module) => ({
            ...module.default,
            layout: module.default.layout || ((page) =>
                h(
                    PortafolioLayout,
                    {},
                    { default: () => h(page.component, page.props) }
                )),
        })),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(router)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
