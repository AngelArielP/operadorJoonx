<template>
  <main>
    <!-- Contenido principal -->
    <button @click="toggleComponent">Cambiar Vista</button>
    <div class="row">
      <div v-for="(card, index) in cards" :key="index" :class="getCardColumnClass(card)">
        <!-- Mostrar CardLineaPro o CardLineaProOee según el estado -->
        <component :is="card.component" v-bind="card.props" />
      </div>
    </div>
  </main>
</template>

<script>
import CardLineaPro from '@/components/cards/linea/CardLineaPro.vue';
import CardLineaProOee from '@/components/cards/linea/CardLineaProOee.vue';

export default {
  components: { CardLineaPro , CardLineaProOee},
  data() { 
    return {
      showCardLineaPro: true,
      cards: [
        {
          component: 'CardLineaPro',
          props: {
            machineName: 'PRE1001',
            machineImage: 'https://i.imgur.com/bpG3BkK.png',
            machineAlt: 'Imagen de la máquina 001',
            button1Text: 'Produccion lenta',
            colorCard: '#DAAD0A',
            colorCard2: '#A8850D',
            additionalContent: ['Contenido1', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 2min'
          }
        }, {
          component: 'CardLineaPro',
          props: {
            machineName: 'PRE1002',
            machineImage: 'https://i.imgur.com/bpG3BkK.png',
            machineAlt: 'Imagen de la máquina 002',
            button1Text: 'En Operacion',
            colorCard: '#67C459',
            colorCard2: '#1F9F0E',
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },{
          component: 'CardLineaPro',
          props: {
            machineName: 'PRE103',
            machineImage: 'https://i.imgur.com/bpG3BkK.png',
            machineAlt: 'Imagen de la máquina 003',
            button1Text: 'Alerta',
            colorCard: '#C47358',
            colorCard2: '#A02F0D',
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },{
          component: 'CardLineaPro',
          props: {
            machineName: 'PRE104',
            machineImage: 'https://i.imgur.com/bpG3BkK.png',
            machineAlt: 'Imagen de la máquina 004',
            button1Text: 'Fuera de linea',
            colorCard: '#E9E5E4',
            colorCard2: '#C4C4C4',
            additionalContent: ['Contenido21', 'Contenido2', 'Contenido3'],
            updateText: '  actualizado - 3min'
          }
        },
      ]
    };
  },
  methods: {
    toggleComponent() {
      this.showCardLineaPro = !this.showCardLineaPro;
      this.cards.forEach(card => {
        card.component = this.showCardLineaPro ? 'CardLineaPro' : 'CardLineaProOee';
      });
    },
    getCardColumnClass(card) {
      return card.component === 'CardLineaPro' ? 'col-md-6' : 'col-md-1';
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
