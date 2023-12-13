<template>
    <div class="card" :style="{ backgroundColor: colorCard }">
        <div>
            <!-- Estructura de dos columnas -->
            <div class="row">
                <!-- Primera columna -->
                <div class="col-md-12 text-center">
                    <!-- Contenido de la primera columna -->
                    <h6>{{ machineName }} <i class="fa-regular fa-window-restore"></i></h6>
                    <h8> 2min</h8>
                </div>
                <!-- -->
                <div :style="{ backgroundColor: colorCard2 }">
                    <div class="col-md-12 d-flex justify-content-center align-items-center" id="canva">
                        <!-- Centra el componente DountTallerOee -->
                        <DountTallerOee />
                    </div>
                </div>

                <div class="row mt-3">
                    <!-- Primera columna dentro de la segunda columna -->
                    <div class="col-md-6">
                        <!-- Contenido de la primera columna dentro de la segunda columna -->
                        <div class="row ">
                            <div class="col-md-12">
                                <!-- Contenido de la primera fila en la primera columna -->
                                <p>Contenido1</p>
                            </div>
                        </div>

                    </div>
                    <!-- Segunda columna dentro de la segunda columna -->
                    <div class="col-md-6">
                        <!-- Contenido de la segunda columna dentro de la segunda columna -->
                        <div class="row ">
                            <div class="col-md-12">
                                <!-- Contenido de la primera fila en la segunda columna -->
                                <p>Contenido1</p>
                            </div>
                        </div>

                    </div>
                </div>
                <!-- -->
                <div :style="{ backgroundColor: colorCard2 }">
                    <div class="col-md-12">
                        <!-- Contenido de la primera fila en la segunda columna -->
                        <p>Contenido1</p>
                    </div>
                    <div class="col-md-12">
                        <!-- Contenido de la primera fila en la segunda columna -->
                        <p>Contenido1</p>
                    </div>
                </div>

            </div>


            <!-- Fila debajo de las dos columnas -->
            <div class="row">
                <div class="col-md-12">
                    <!-- Contenido de la fila debajo de las columnas -->
                    <p><i class="fa-solid fa-arrows-rotate fa-spin"></i> {{ updateText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  

<script>
import DountTallerOee from './charts/DountTallerOee.vue'

export default {
    name: 'App',
    components: { DountTallerOee },
    props: {
        machineName: String,
        machineImage: String,
        machineAlt: String,
        button1Text: String,
        colorCard: String,
        colorCard2: String,
        additionalContent: Array,
        updateText: String
    },
};
</script>
  
<style scoped>
/* Estilos para la tarjeta */
.card {
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-top: 1px;
    padding: 2%;
    width: 150px;
    height: 311px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 0.8rem;
}

#canva {
    width: 100px;
    margin-left: 25px;
}
</style>
  