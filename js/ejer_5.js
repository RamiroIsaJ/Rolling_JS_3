// personas con su rasgo generacional

class Persona{
    constructor(){
        this.nombre = null;
        this.edad = null;
        this.dni = null;
        this.sexo = null;
        this.peso = null;
        this.altura = null;
        this.anio = null;
    }

    set nuevoNombre(nNombre){
        this.nombre = nNombre;
    }

    set nuevoDNI(nDNI){
        this.dni = nDNI;
    }

    set nuevoSexo(nSexo){
        this.sexo = nSexo;
    }

    set nuevoPeso(nPeso){
        this.peso = nPeso;
    }

    set nuevaAltura(nAltura){
        this.altura = nAltura;
    }

    set nuevoAnio(nAnio){
        this.anio = nAnio;
        this.edad = 2021 - this.anio;
    }

    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarEdad(){
        return this.edad;
    }

    get mostrarDNI(){
        return this.dni;
    }

    get mostrarSexo(){
        return this.sexo;
    }

    get mostrarPeso(){
        return this.peso;
    }

    get mostrarAltura(){
        return this.altura;
    }

    get mostrarAnio(){
        return this.anio;
    }

    mostrarGeneracion(){
        let generaciones = [
            ['Salient generation', 'Austeridad'],
            ['Baby room', 'Ambición'],
            ['Generación X', 'Obsesión por el éxito'],
            ['Generación Y millenials', 'Fustración'],
            ['Generación Z', 'Irreverencia'],
        ];

        let ide = -1;
        if (this.anio>=1930 && this.anio<=1948){
            ide = 0;
        }else if (this.anio>=1949 && this.anio<=1968){
            ide = 1;
        }else if (this.anio>=1969 && this.anio<=1980){
            ide = 2;
        }else if (this.anio>=1981 && this.anio<=1993){
            ide = 3;
        }else if (this.anio>=1994 && this.anio<=2010){
            ide = 4;
        }

        if (ide >= 0){
            document.write(`<br> La persona ${this.nombre} pertenece a ${generaciones[ide][0]} y su rasgo
            característico es ${generaciones[ide][1]} <br>`);
        }else{
            document.write(`<br> El año está fuera del rango considerado`);
        }   

    }

    esMayorEdad(){
        if (this.edad >= 18){
            document.write(`<br> La persona tiene ${this.edad} años, por tanto, es mayor de edad. <br>`);
        }else{
            document.write(`<br> La persona tiene ${this.edad} años, por tanto, es menor de edad. <br>`);
        }
    }

    mostrarDatos(){
        let claves = Object.keys(this);
        for (let i=0; i < claves.length; i++){
            document.write(`<br> ${claves[i]}: ${this[claves[i]]}`);
        }
    }

    generarDNI(){
        let nuevo = Math.round(Math.random()*(99999999));
        let cnuevo  = nuevo.toString();
        let ndni = "";
        for (let i=0; i<=(7-cnuevo.length); i++){
            ndni += '0'
        }
        ndni += cnuevo;

        this.dni = ndni;
    }
}

let persona1 = new Persona();
persona1.nuevoNombre = 'Ramiro';
persona1.nuevoSexo = 'Hombre';
persona1.nuevoPeso = 72;
persona1.nuevaAltura = 1.81;
persona1.nuevoAnio = 1986;
persona1.generarDNI();

persona1.mostrarGeneracion();
persona1.esMayorEdad();

persona1.mostrarDatos();


