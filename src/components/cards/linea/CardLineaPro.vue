<template>
    <div class="card">
        <div class="card-body">
            <!-- Fila arriba  -->
            <div class="row ">
                <div class="col-md-6">
                    <div :style="{ backgroundColor: colorCard }">
                        <h6>{{ machineName }} <i class="fa-regular fa-window-restore"></i></h6>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">

                        <div class="col-md-6">
                            <button class="btn btn-secondary"><i class="fa-brands fa-whmcs fa-spin"></i></button>
                        </div>

                        <div class="col-md-6">
                            <button class="btn btn-secondary"><i class="fa-brands fa-whmcs fa-spin"></i></button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <!-- Estructura de dos filas y dos columnas -->
            <div class="row">
                <!-- Primer panel superior izquierdo -->
                <div class="col-md-6">
                    <img :src="machineImage" :alt="machineAlt" width="250px" height="100">
                </div>
                <!-- Segundo panel superior derecho -->
                <div class="col-md-6">
                    <div id="fondo-panel">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12" v-for="(content, index) in additionalContent" :key="index"
                                        id="txt">
                                        <p>{{ content }}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- tercero panel superior izquierdo -->
                <div class="col-md-6 mt-2">
                    <div id="fondo-panel">
                        <div class="col-md-12">
                            <h6>DATOS DE PRODUCCION</h6>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <h6>TIEMPO DE INICIO</h6>


                            </div>
                            <div class="col-md-6">
                                <h6>TIEMPO DE CICLO</h6>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h6>ESTADO DE LINEA DE PRODUCCION</h6>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- cuarto panel superior derecho -->
                <div class="col-md-6 mt-2">
                    <div id="fondo-panel">
                        <div class="col-md-12">
                            <h6>OEE</h6>
                        </div>
                        <div class="row">
                            <div class="col-md-6" id="canva">
                                <DountTallerOee />
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-secondary"><i class="fa-brands fa-whmcs fa-spin"></i></button>
                            </div>
                        </div>
                    </div>
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
        additionalContent: Array,
        updateText: String
    }
};
</script>

<style scoped>
/* Estilos para la tarjeta */
.card {
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-top: 10px;
    width: 610px;
    height: 351px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#labelStatus {
    height: 35px;
    width: 120px;
    font-size: 0.7rem;
    text-align: left;
    padding-top: 8%;
    border-radius: 1%;
    font-weight: 900;
}

#fondo-panel {
    background-color: #E9E5E4;
    border-radius: 3%;
    width: 280px;
    height: 130px;
}

#fondo-panel h6 {
    display: flex;
    /* O display: grid; */
    justify-content: center;
    /* Para flexbox */
    align-items: center;
    /* Para flexbox */
    /* O si usas display: grid:
    place-items: center;
    */
}

#canva {
    margin: 0% 0% 0% 10%;
    width: 110px;
}

#txt {
    height: 1px;
    width: 78%;
    margin: 2% 10%;
    font-size: 0.7rem;
    text-align: left;
    padding: 3%;
    background-color: #F2F2F2;
    border-radius: 10%;
    font-weight: 900;
}

#txt p {
    margin-top: -8px;
    margin-bottom: 1rem;
}

button {
    color: black;
    background-color: #ffffff;
    border-color: #ffffff;
}
</style>
