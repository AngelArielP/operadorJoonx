import './assets/main.css' // Importar los estilos CSS de externos
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
import Taller from './pages/Taller.vue';
import LineaProd from './pages/LineaProd.vue';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos CSS de Bootstrap
import '@fortawesome/fontawesome-free/css/all.css'; // Importa todos los estilos
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            components: {
                default: Taller,
                header: Header,
                sidebar: Sidebar,
                footer: Footer
            }
        },
        // Agrega más rutas según sea necesario para otras páginas
        // Por ejemplo:
        {
            path: '/linea',
            components: {
                default: LineaProd,
                header: Header,
                sidebar: Sidebar,
                footer: Footer
            }
        },
    ]
});

createApp(App).use(router).mount('#app');
