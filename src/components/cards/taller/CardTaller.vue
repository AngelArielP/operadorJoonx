<template>
    <div class="card">
        <div class="card-body">
            <!-- Estructura de dos columnas -->
            <div class="row">
                <!-- Primera columna -->
                <div class="col-md-6">
                    <!-- Contenido de la primera columna -->
                    <h6>{{ machineName }} <i class="fa-regular fa-window-restore"></i></h6>
                    <img src="https://i.imgur.com/lgkzDTv.png" alt="maquina" width="250px" height="180">
                </div>
                <!-- Segunda columna -->
                <div class="col-md-6">
                    <!-- Contenido de la segunda columna -->
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <button :style="{ backgroundColor: colorCard }" class="btn" id="labelStatus" disable>{{ button1Text }}</button>
                          
                            </div>
                            <div class="col">
                                <button class="btn btn-secondary"><i class="fa-brands fa-whmcs fa-spin"></i></button>
                            </div>
                            <div class="col">
                                <button class="btn btn-success"><i class="fa-regular fa-bookmark"></i></button>
                            </div>
                        </div>
                    </div>
                    <!-- Nueva fila dentro de la segunda columna -->
                    <div class="row mt-3">
                        <!-- Primera columna dentro de la segunda columna -->
                        <div class="col-md-6">
                            <!-- Contenido de la primera columna dentro de la segunda columna -->
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la primera fila en la primera columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la segunda fila en la primera columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la tercera fila en la primera columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                        </div>
                        <!-- Segunda columna dentro de la segunda columna -->
                        <div class="col-md-6">
                            <!-- Contenido de la segunda columna dentro de la segunda columna -->
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la primera fila en la segunda columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la segunda fila en la segunda columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-12" id="txt">
                                    <!-- Contenido de la tercera fila en la segunda columna -->
                                    <p>Contenido1</p>
                                </div>
                            </div>
                        </div>
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
export default {
  props: {
    machineName: String,
    machineImage: String,
    machineAlt: String,
    button1Text: String,
    colorCard:String,
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
    height: 251px;
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

#txt {
    height: 35px;
    width: 95%;
    margin: 2%;
    font-size: 0.7rem;
    text-align: left;
    padding: 10%;
    background-color: #F2F2F2;
    border-radius: 10%;
    font-weight: 900;
}

button {
    color: black;
    background-color: #ffffff;
    border-color: #ffffff;
}
</style>
  