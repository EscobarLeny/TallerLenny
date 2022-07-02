class Libro{
    constructor(nombre,autor,capitulos){
        this.nombre=nombre;
        this.autor=autor;
        this.capitulos=capitulos;
    }
    set nombrelibro(nombre1){
        return (this.nombre,nombre1)
    }
    get mostrarLibro(){
        return "libro:"+ " "+this.nombre
    }
    set Autor(autor1) {
        this.autor = autor1;
    }
    get molostrarAutor(){
        return "Autor es"+ ""+ this.autor
    }
}
let libro1=new Libro("La isla Misteriosa de Gabriel Garcia Marquez","Marquez","120");
console.log(libro1.mostrarLibro);
console.log(libro1.mostrarAutor);