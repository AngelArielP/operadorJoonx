<template>
  <main>
    <!-- Contenido principal -->
    <div class="row">
      <div class="col-md-6">
        <!-- Primer CardTaller (ocupará la mitad del ancho en dispositivos medianos y grandes) -->
        <CardTaller :machineName="'Maquina 001'" :machineImage="'https://i.imgur.com/lgkzDTv.png'"
          :machineAlt="'Imagen de la máquina 001'" :button1Text="'Produccion lenta'"
          :additionalContent="['Contenido1', 'Contenido2', 'Contenido3']" :updateText="'última actualizado - 2min'" />
      </div>
      <div class="col-md-6">
        <!-- Segundo CardTaller (ocupará la otra mitad del ancho en dispositivos medianos y grandes) -->
        <CardTaller :machineName="'Maquina 002'" :machineImage="'https://example.com/image.jpg'"
          :machineAlt="'Imagen de la máquina 002'" :button1Text="'En operacion'"
          :additionalContent="['Contenido A', 'Contenido B', 'Contenido C']" :updateText="'última actualización - 1h'" />
      </div>
      <div class="col-md-6">
        <!-- Primer CardTaller (ocupará la mitad del ancho en dispositivos medianos y grandes) -->
        <CardTaller :machineName="'Maquina 003'" :machineImage="'https://i.imgur.com/lgkzDTv.png'"
          :machineAlt="'Imagen de la máquina 001'" :button1Text="'Produccion lenta'"
          :additionalContent="['Contenido1', 'Contenido2', 'Contenido3']" :updateText="'última actualizado - 2min'" />
      </div>
      <div class="col-md-6">
        <!-- Primer CardTaller (ocupará la mitad del ancho en dispositivos medianos y grandes) -->
        <CardTaller :machineName="'Maquina 004'" :machineImage="'https://i.imgur.com/lgkzDTv.png'"
          :machineAlt="'Imagen de la máquina 001'" :button1Text="'Produccion lenta'"
          :additionalContent="['Contenido1', 'Contenido2', 'Contenido3']" :updateText="'última actualizado - 2min'" />
      </div>
    </div>
  </main>
</template>

<script>
import CardTaller from '@/components/cards/taller/CardTaller.vue';

export default {
  components: { CardTaller }
}
</script>
