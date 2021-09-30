// objeto auto y metodo para encender o apagar

let auto = {
    marca: 'Toyota',
    modelo: 'Seil',
    color: 'Azul',
    estado: 'OFF',

    cambiarEstado: function(){
        if (this.estado == 'ON'){
            this.estado = 'OFF';
        }else{
            this.estado = 'ON';
        }
    }
}

document.write(`<br> Auto: ${auto.marca}`);
document.write(`<br> Estado actual: ${auto.estado}`);
auto.cambiarEstado();
document.write(`<br> El estado se ha cambiado ------`);
document.write(`<br> Nuevo estado: ${auto.estado}`);