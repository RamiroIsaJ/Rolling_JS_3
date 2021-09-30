//  clase  producto con 3 instancias distintas y guardadas en un array

class Producto{
    constructor(){
        this.codigo = null;
        this.nombre = null;
        this.precio = null;
    }

    set nuevoCodigo(nCodigo){
        this.codigo = nCodigo;
    }

    set nuevoNombre(nNombre){
        this.nombre = nNombre;
    }

    set nuevoPrecio(nPrecio){
        this.precio = nPrecio;
    }

    get mostrarCodigo(){
        return this.codigo;
    }

    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarPrecio(){
        return this.precio;
    }

    mostrarDatos(){
        document.write(`<br> El producto tiene los datos ---- <br> 
        Código: ${this.codigo} <br>
        Nombre: ${this.nombre} <br>
        Precio: ${this.precio} <br>`);

    }
}

let productos = [];
let codigos = ['0001', '0002', '0003'];
let nombres = ['Laptop', 'Mouse', 'Celular'];
let precios = [1200, 30, 350];

for (let i=0; i<3; i++){
    let nProucto = new Producto();
    nProucto.nuevoCodigo = codigos[i];
    nProucto.nuevoNombre = nombres[i];
    nProucto.nuevoPrecio = precios[i];
    productos.push(nProucto);
}

for (let i=0; i<3; i++){
    document.write(`Producto Nro: ${i+1}`)
    let productoA = productos[i];
    productoA.mostrarDatos();
}
