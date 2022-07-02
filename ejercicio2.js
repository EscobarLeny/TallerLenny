const _private=new WeakMap();
class SerVivo{
    constructor( Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo){
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        const propiedades={
        _Respiro:Respiro,
        _MeAlimento:MeAlimento,
        _Habito:Habito,
        _MeReproduzco:MeReproduzco,
        _MeDeslazo:MeDesplazo,
    }
    _private.set(this,{propiedades})
    }
    set nombreSerVivo(nombre1){
    
    return _private.get(this).propiedades['_nombre']=nombre1
    }
    get mostrarSerVivo(){
    
    return _private.get(this).propiedades['_nombre'];
    }
    
    }
    
class Ave extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Paloma(){
        console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
    }
    }

class Mamífero extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Vaca(){
        console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
    
    }
    }

class Reptil extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Serpiente(){
    console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
        
    }
    }        

class Anfibio extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Sapo(){
    console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
            
    }
    }       

class Pez extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Trucha(){
    console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
                
    }
    }

class  Insecto extends SerVivo{
    constructor(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo, NumeroDePatas, TieneAlas, TipoDePiel, Venenoso ){
        super(Respiro, MeAlimento, Habito, MeReproduzco, MeDesplazo);
        this.Respiro=Respiro;
        this.MeAlimento=MeAlimento;
        this.Habito=Habito;
        this.MeReproduzco=MeReproduzco;
        this.MeDesplazo=MeDesplazo;
        this.NumeroDePatas=NumeroDePatas;
        this.TieneAlas=TieneAlas;
        this.TipoDePiel=TipoDePiel;
        this.Venenoso=Venenoso
    }
    Zancudo(){
    console.log(" respiro:" + this.Respiro +  " mealimento:" + this.MeAlimento + " habito:" + this.habito + " mereproduzco:" + this.MeReproduzco + " medesplazo:" + this.MeDesplazo + " numerodepatas:" + this.NumeroDePatas + " tienealas:" + this.TieneAlas + " tipodepiel:" + this.TipoDePiel + " venenoso:" + this.Venenoso);
                    
    }
    }

let roberto= new Ave( " pico", " omnivoro",  " selva",  " oviparo",  " aereo",  " tengo 2 patas",  " si"," Plumas",  " no");
console.log(roberto.paloma());
let toby= new Mamífero( " nariz",  " omnivoro",  " casa",  " gestacion",  " terrestre",  " tengo 4 patas",  " no",  " pelaje",  " no");
console.log(toby.Vaca());
let raby= new Reptil( " nariz",  " omnivoro",  " en el campo",  " oviparo",  " terrestre",  " no",  " no",  " escamas",  " no");
console.log(raby.Serpiente());
let pepe= new Anfibio( " nariz",  " carnivoros",  " selva",  " oviparo",  " terrestre",  " tengo 4 patas",  " no",  " escamosa",  " si");
console.log(pepe.Sapo());
let willi= new Pez( " nariz",  " carnivoro",  " en el mar",  " oviparo",  " acuatico",  " no tiene",  " aletas",  " escamoso",  " no");
console.log(willi.Trucha());
let maya= new Insecto( " estigmas",  " hervivora",  " en el campo",  " oviparo",  " aereo",  "tengo 6 patas",  " si",  " corasa",  " si");
console.log(maya.Zancudo());
