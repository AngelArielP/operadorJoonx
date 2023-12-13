<template>
  <div>
    <Header />
    <Sidebar />

    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
import Body from './components/Body.vue';

export default {
  components: {
    Header,
    Footer,
    Sidebar,
    Body
  }
}
</script>

<style>
/* Estilos globales si los necesitas */
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
</style>
