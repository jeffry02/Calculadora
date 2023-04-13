class Display {
  constructor(displayValorAnterior, displayValorActual) {
  this.displayValorActual = displayValorActual;
  this.displayValorAnterior = displayValorAnterior;
  this.calculador = new Calculadora();
  this.operatortype = undefined;
  this.valorActual = '';
  this.valorAnterior = '';
  this.signos = {
    sumar: '+',
    dividir: '%',
    multiplicar: 'x',
    restar: '-',
  }

  }

  erase() { 
    this.valorActual = this.valorActual.toString().slice(0,-1);
    this.imprimirValores();
  }

  eraseAll() { 
    this.valorActual = '';
    this.valorAnterior = '';
    this.operatortype = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
  this.operatortype !== 'igual' && this.operation();
  this.operatortype = tipo;
  this.valorAnterior = this.valorActual || this.valorAnterior; 
  this.valorActual = '';
  this.imprimirValores();
  }

  agregarNumero(numero) {
    if(numero === '.' && this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  imprimirValores() { 
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.operatortype] || ''}`
  }

  operation() { 
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);

    if(isNaN(valorActual) || isNaN(valorAnterior)) return
    this.valorActual = this.calculador[this.operatortype](valorAnterior, valorActual);
  }
}
