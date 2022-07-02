class Servivo{
    constructor(raza,nombre,edad){
        this.raza=raza
        this.nombre=nombre
        this.edad=edad
        }
    respiro(){
    console.log("mi nombre es " + this.nombre + "mi raza es " + this.raza + " mi edad es " + this.edad)
        } 
        
    }

    let a = new Servivo ("Pastor Aleman","Zeus","9")
    a.nombre="sami"
    a.edad;
    a.raza;
    a.respiro();
    console.log(a)
