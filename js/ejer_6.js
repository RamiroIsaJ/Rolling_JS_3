// objeto libro y comparación entre 2 objetos por páginas

class Libro{
    constructor(){
        this.isbn = null;
        this.titulo = null;
        this.autor = null;
        this.paginas = null;
    }

    set nuevoIsbn(nisbn){
        this.isbn = nisbn;
    }

    set nuevoTitulo(ntitulo){
        this.titulo = ntitulo;
    }

    set nuevoAutor(nautor){
        this.autor = nautor;
    }

    set nuevoPaginas(npaginas){
        this.paginas = npaginas;
    }

    get mostrarIsbn(){
        return this.isbn;
    }

    get mostrarTitulo(){
        return this.titulo;
    }

    get mostrarAutor(){
        return this.autor;
    }

    get mostrarPaginas(){
        return this.paginas;
    }

    mostrarLibro(){
        document.write(`<br> El libro ${this.titulo} con ISBN ${this.isbn} creado por el 
        autor ${this.autor} tiene ${this.paginas} páginas.`);
    }

}

let comparacion = (pg1, pg2) =>{
    if (pg1 > pg2){
        document.write(`<br> El libro 1 tiene más páginas que el libro 2.`)
    }else if (pg2 > pg1){
        document.write(`<br> El libro 2 tiene más páginas que el libro 1.`)
    }else{
        document.write(`<br> El libro 1 y el libro 2 tienen igual páginas.`)
    }   
}

let libro1 = new Libro();
libro1.nuevoTitulo = 'Amor en tiempos de cólera';
libro1.nuevoAutor = 'Gabriel García Marquez';
libro1.nuevoIsbn = '10: 987-1138-13-X';
libro1.nuevoPaginas = 495;
libro1.mostrarLibro();

let libro2 = new Libro();
libro2.nuevoTitulo = 'Historia del tiempo';
libro2.nuevoAutor = 'Stephen W. Hawking';
libro2.nuevoIsbn = '84-253-258-X';
libro2.nuevoPaginas = 248;
libro2.mostrarLibro();

let paginas1 = libro1.mostrarPaginas;
let paginas2 = libro2.mostrarPaginas;
comparacion(paginas1, paginas2);
