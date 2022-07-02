class Semana {
    constructor(dias){
        this.dias=dias
    }
    mostrarsegundos(segundos){
        segundos =(this.dias * 24* 60 * 60)
        console.log(" total dias es: "+this.dias + " los segundos son " +segundos)
        document.write("  total  dias es: "+this.dias + " los segundos son " +segundos)
    }
}
  segundo1= new Semana(2)
  segundo1.mostrarsegundos()