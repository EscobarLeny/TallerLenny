

class Fraccion {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    sumar() {
      return this.x + this.y;
    }
    restar() {
      return this.x - this.y;
    }
    multiplicar() {
      return this.x * this.y;
    }
    dividirFracciones() {
      return this.x / this.y;
    }
  }
  
  const operaciones = new Fraccion(7.2, 8.9);
  console.log(operaciones.sumar());
  console.log(operaciones.restar());
  console.log(operaciones.multiplicar());
  console.log(operaciones.dividirFracciones());