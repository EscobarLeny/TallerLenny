
class NumeroComplejo {
  constructor(real, imaginaria) {
      this.real = real;
      this.imaginaria = imaginaria;
  }

  sumar(otroComplejo) {
      return new NumeroComplejo(this.real + otroComplejo.real, this.imaginaria + otroComplejo.imaginaria);
  }

  restar(otroComplejo) {
      return new NumeroComplejo(this.real - otroComplejo.real, this.imaginaria - otroComplejo.imaginaria);
  }

  multiplicar(otroComplejo) {
      let real = (this.real * otroComplejo.real) - (this.imaginaria * otroComplejo.imaginaria);
      let imaginaria = (this.real * otroComplejo.imaginaria) + (this.imaginaria * otroComplejo.real);

      return new NumeroComplejo(real, imaginaria);
  }
  dividir(otroComplejo) {
      let denominador = otroComplejo.imaginaria * otroComplejo.imaginaria + otroComplejo.real * otroComplejo.real;
      let real = (this.real * otroComplejo.real + this.imaginaria * otroComplejo.imaginaria) / denominador;
      let imaginaria = (otroComplejo.real * this.imaginaria - this.real * otroComplejo.imaginaria) / denominador;

      return new NumeroComplejo(real, imaginaria);
  }
}

let numero1 = new NumeroComplejo(25, 9);
let resultadoSumar=numero1.sumar(numero1);
let resultadoRestar=numero1.restar(numero1);
let resultadoMultiplicacion = numero1.multiplicar(numero1);
let resultadoDividir=numero1.dividir(numero1)
console.log(resultadoSumar);
console.log(resultadoRestar)
console.log(resultadoMultiplicacion);
console.log(resultadoDividir);

