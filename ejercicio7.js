
class contador {
    constructor( titular, cantidad = 0){
    this._titular = titular;
    this._cantidad = cantidad;
    }
    get titular (){
        return this._titular;
    }
   
    get cantidad(){
        return this._cantidad;
    }
   
    mostrar(){
        return `titular ${this._titular} cantidad ${this._cantidad}`;
    }
    incrementar (cantidad){
        if (cantidad > 0){
            this._cantidad = this._cantidad + cantidad;
        }
return this._cantidad;
    }
    decrementar (cantidad){
        if (cantidad> 0){
            this._cantidad = this._cantidad - cantidad;
        }
        return "cantidad a decrementar " + cantidad;
    }

}

nure = new contador ("Leny ", 500);

console.log (nure.incrementar(100));
console.log (nure.incrementar(100));
console.log (nure.decrementar(100));
console.log(nure.mostrar());