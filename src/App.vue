<template>
  <div>
    <router-view name="header" />
    <router-view name="sidebar" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
export default {
  // ... lógica del componente
};
</script>

<style>
/* Estilos globales si es necesario */
</style>
