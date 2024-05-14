var miAuto = {
    marca: "GMC",
    modelo: "Yukon",
    annio: 2010,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//Acceder al objeto.
miAuto.marca
//"GMC"
miAuto.annio
//2010
miAuto.detalleDelAuto();
//Auto Yukon 2010