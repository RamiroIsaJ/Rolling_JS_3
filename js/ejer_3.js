// objetos rectángulos

class Rectangulo{
    constructor(){
        this.base = null;
        this.altura = null;
    }

    get mostrarBase(){
        return this.base;
    }

    get mostrarAltura(){
        return this.altura;
    }

    set modBase(nBase){
        this.base = nBase;
    }

    set modAltura(nAltura){
        this.altura = nAltura;
    }

    mostrarDatos(){
        document.write(`El rectangulo tiene: <br> 
        ${this.base} cm. de base <br>
        ${this.altura} cm. de altura. <br>`);
    }

    perimetro(){
        let p = 2*(this.base + this.altura);
        document.write(`El perímetro del rectángulo es:  ${p} cm. <br>`);
    }

    area(){
        let a = (this.base * this.altura) / 2;
        document.write(`El área del rectángulo es:  ${a} cm. cuadrados <br> `);
    }

}

let rectangulo1 = new Rectangulo();
rectangulo1.modBase = 23;
let r = rectangulo1.mostrarBase;
console.log(r)
rectangulo1.modAltura = 15;
rectangulo1.mostrarDatos();
rectangulo1.perimetro();
rectangulo1.area();

document.write(`<br>`)

let rectangulo2 = new Rectangulo();
rectangulo2.modBase = 53;
rectangulo2.modAltura = 35;
rectangulo2.mostrarDatos();
rectangulo2.perimetro();
rectangulo2.area();