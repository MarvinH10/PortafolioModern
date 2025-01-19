import PortafolioLayout from '@/Layouts/PortafolioLayout.vue';
import Inicio from '@/Pages/Inicio/Inicio.vue';
import Acerca from '@/Pages/Acerca/Acerca.vue';
import Proyectos from '@/Pages/Proyectos/Proyectos.vue';
import Blogs from '@/Pages/Blogs/Blogs.vue';
import Galeria from '@/Pages/Galeria/Galeria.vue';

export default [
    {
        path: '/',
        component: PortafolioLayout,
        children: [
            { path: '', name: 'Inicio', component: Inicio },
            { path: 'acerca', name: 'Acerca', component: Acerca },
            { path: 'proyectos', name: 'Proyectos', component: Proyectos },
            { path: 'blogs', name: 'Blogs', component: Blogs },
            { path: 'galeria', name: 'Galeria', component: Galeria },
        ],
    },
];
