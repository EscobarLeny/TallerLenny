class Llamada{
    constructor  (minutos){
        this.minutos=minutos 
    }
    costollamada(costo){
        if (this.minutos>3){
            costo=(this.minutos*300)+600
console.log("la duracion de la llamada es de:"+this.minutos+" segundos ,su costo es"+" ",costo)

        }
        else{
            costo=this.minutos*500
            console.log("la duracion de la llamada es de: "+this.minutos+" su costo es"+costo)
            
        }
    }
}
lladama1=new Llamada  (5);
lladama1.costollamada()