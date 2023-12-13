<template>
    <aside :class="{ 'expanded': isExpanded }">
        <!-- Botón para expandir/contraer el sidebar -->
        <button @click="toggleSidebar">
            <i id="icon" v-if="isExpanded" class="fa-solid fa-arrow-left fa-beat-fade"></i>
            <i id="icon" v-else class="fa-solid fa-bars"></i>
        </button>
        <!-- Contenido de la barra lateral -->
        <ul v-show="isExpanded">
            <router-link to="/" tag="li" exact active-class="active-link">
                <li><a><i class="fas fa-home"></i> Opción 1</a></li>
            </router-link>
            <router-link to="/linea" tag="li" active-class="active-link">
                <li><a><i class="fas fa-cog"></i> Opción 2</a></li>
            </router-link>
            <router-link to="/profile" tag="li" active-class="active-link">
                <li><a><i class="fas fa-user"></i> Opción 3</a></li>
            </router-link>

        </ul>
        <ul v-show="!isExpanded">
            <router-link to="/" tag="li" exact active-class="active-link">
                <li><a><i class="fas fa-home"></i></a></li>
            </router-link>
            <router-link to="/linea" tag="li" active-class="active-link">
                <li><a><i class="fas fa-cog"></i></a></li>
            </router-link>
            <router-link to="/profile" tag="li" active-class="active-link">
                <li><a><i class="fas fa-user"></i></a></li>
            </router-link>

        </ul>
    </aside>
</template>
<script>
export default {
    data() {
        return {
            isExpanded: true // Estado inicial del sidebar
        };
    },
    methods: {
        toggleSidebar() {
            this.isExpanded = !this.isExpanded; // Cambia el estado al hacer clic en el botón
        }
    }
};
</script>
  
<style scoped>
/* Estilos para el sidebar */
aside {
    width: 50px;
    height: 100%;
    background-color: #333;
    color: white;
    transition: width 0.3s ease;
    /* Animación de transición al cambiar el ancho */
}

.expanded {
    width: 200px;
    /* Ancho expandido del sidebar */
}

/* Estilos adicionales si es necesario */
button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding: 10px;
}

button i {
    transition: transform 0.3s ease;
    /* Animación de transición al cambiar el icono */
}

/* Cambiar la rotación del ícono dependiendo del estado */

ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
    /* Añade un pequeño margen superior cuando el sidebar está expandido */
}

li {
    padding: 8px 15px;
}

/* Estilos para el hover y la página activa */
ul li:hover {
  background-color: #555;
}

.active-link {
  background-color: #555;
}
#icon {
    padding: 1px 8px;
}

a {
    color: white;
    text-decoration: none;
}

</style>