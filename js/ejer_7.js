// agenda telefónica

class Contacto{
    constructor(){
        this.nombre = null;
        this.telefono = null;
    }

    set nuevoNombre(nNombre){
        this.nombre = nNombre;
    }

    set nuevoTelefono(nTelefono){
        this.telefono = nTelefono;
    }

    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarTelefono(){
        return this.telefono;
    }
}

class Agenda {
    constructor(paramSize){
        this.size = paramSize;
        this.agendaD = [];
    }

    existeContacto(nNomb){
        let ide = false;
        for (let i=0; i < this.agendaD.length; i++){
            let actual = this.agendaD[i];
            if (actual.nombre === nNomb){
                ide = true
            }
        }
        return ide;
    }

    agendaLlena(){
        let ide = false;
        if (this.agendaD.length == this.size){
            ide = true;
        }
        return ide;
    }

    huecosLibres(){
        let libres = this.size - this.agendaD.length;
        document.write(`<br> Tiene ${libres} espacios en la agenda para agregar nuevos contactos. <br>`);
    }

    nuevoContacto(nNomb, nTelef){
        let llena = this.agendaLlena();
        let existe = this.existeContacto(nNomb);
        if (!llena){
            let nContacto = new Contacto();
            if (!existe){
                nContacto.nuevoNombre = nNomb;
                nContacto.nuevoTelefono = nTelef;
                document.write(`<br> Contacto agregado correctamente.`);
            }else{   
                nContacto.nuevoNombre = null;
                nContacto.nuevoTelefono = null;    
                document.write(`<br> No se puede agregar contacto. Ya existe.`);
            }
            this.agendaD.push(nContacto)
        }else{
            document.write(`<br> No se puede agregar contacto. Agenda llena.`);
        }

    }

    listarContactos(){
        for(let k=0; k<this.agendaD.length; k++){
            let contacto = this.agendaD[k];
            let claves = Object.keys(contacto);
            for (let i=0; i < claves.length; i++){
                document.write(`<br> ${claves[i]}: ${contacto[claves[i]]}`);
            }
        }
    }

    buscarContacto(nNomb){
        let ide = false;
        for(let k=0; k<this.size; k++){
            let contacto = this.agendaD[k];
            if (contacto.nombre === nNomb){
                document.write(`<br> Contacto encontrado !! <br>`);
                let claves = Object.keys(contacto);
                for (let i=0; i < claves.length; i++){
                    document.write(`<br> ${claves[i]}: ${contacto[claves[i]]}`);
                }
                ide = true;
                break;
            }
        }
        if (!ide){
            document.write(`<br> ${nNomb} no se ha encontrado !! <br>`);
        }
    }

    eliminarContacto(numero){
        if (this.agendaD.length > numero){
            this.agendaD.splice(numero, 1);
            document.write(`<br> Se ha borrado el contacto Nro. ${numero} correctamente <br>`);
        }else{
            document.write(`<br> No existe el contacto Nro. ${numero}. <br>`);
        }

    }
}

let nAgenda = new Agenda(4);
nAgenda.nuevoContacto('Silvia', '095');
nAgenda.nuevoContacto('Ramiro', '223');
nAgenda.huecosLibres();
nAgenda.nuevoContacto('Alejandro', '098');
nAgenda.nuevoContacto('AlejandroI', '038');
nAgenda.nuevoContacto('AlejandroP', '078');
nAgenda.listarContactos();

nAgenda.buscarContacto('Ramiro');

nAgenda.eliminarContacto(3);
nAgenda.listarContactos();




