<template>
  <main>
    <!-- Contenido principal -->
    <button @click="toggleComponent">Cambiar Vista</button>
    <div class="row">
      <div v-for="(card, index) in cards" :key="index" :class="getCardColumnClass(card)">
        <!-- Mostrar CardTaller o CardTallerOee según el estado -->
        <component :is="card.component" v-bind="card.props" />
      </div>
    </div>
  </main>
</template>

<script>
import CardTaller from '@/components/cards/taller/CardTaller.vue';
import CardTallerOee from '@/components/cards/taller/CardTallerOee.vue';

export default {
  components: { CardTaller, CardTallerOee },
  data() {
    return {
      showCardTaller: true,
      cards: [
        {
          component: 'CardTaller',
          props: {
            machineName: 'Maquina 001',
            machineImage: 'https://i.imgur.com/lgkzDTv.png',
            machineAlt: 'Imagen de la máquina 001',
            button1Text: 'Produccion lenta',
            colorCard: '#E0C17D',
            additionalContent: ['Contenido1', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 2min'
          }
        }, {
          component: 'CardTaller',
          props: {
            machineName: 'Maquina 002',
            machineImage: 'https://i.imgur.com/lgkzDTv.png',
            machineAlt: 'Imagen de la máquina 002',
            button1Text: 'En Operacion',
            colorCard: '#6A8A64',
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },{
          component: 'CardTaller',
          props: {
            machineName: 'Maquina 003',
            machineImage: 'https://i.imgur.com/lgkzDTv.png',
            machineAlt: 'Imagen de la máquina 003',
            button1Text: 'Alerta',
            colorCard: ['#C47358',],
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },{
          component: 'CardTaller',
          props: {
            machineName: 'Maquina 004',
            machineImage: 'https://i.imgur.com/lgkzDTv.png',
            machineAlt: 'Imagen de la máquina 004',
            button1Text: 'Fuera de linea',
            colorCard: '#C4C4C4',
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },
      ]
    };
  },
  methods: {
    toggleComponent() {
      this.showCardTaller = !this.showCardTaller;
      this.cards.forEach(card => {
        card.component = this.showCardTaller ? 'CardTaller' : 'CardTallerOee';
      });
    },
    getCardColumnClass(card) {
      return card.component === 'CardTaller' ? 'col-md-6' : 'col-md-1';
    }
  }
};
</script>

<style scoped>
/* Agrega estilos adicionales según sea necesario */
.col-md-1 {
  margin: 2%;
}
</style>
