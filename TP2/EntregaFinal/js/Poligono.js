class Poligono {
  constructor(ctx) { //Constructor de poligonos (posee solo un array de puntos)
    this.puntos = [];
    this.centro = null;
    this.colorLineas = 	"hsl(63, 100%, 50%)";
    this.ctx = ctx;
    this.brillo = 50;
  }

  calcularCentro() { //Calculo donde va y pongo el punto verde
    var contx = 0;
    var conty = 0;
    var total = this.puntos.length;
    var tmpx, tmpy;
    for (var x = 0; x < total; x++) {
      contx += this.puntos[x].posx;
    }
    for (var y = 0; y < total; y++) {
      conty += this.puntos[y].posy;
    }
    tmpx = contx / total;
    tmpy = conty / total;
    var pCentral = new Punto(tmpx, tmpy, 7, "#00ff00", this.ctx);
    this.centro = pCentral;
    pCentral.dibujar();
  }


  cerrarPoligono(){
    if(this.puntos.length > 1){
      this.ctx.beginPath();
      this.ctx.lineWidth = "5";
      this.ctx.strokeStyle = this.colorLineas;
      this.ctx.moveTo(this.puntos[0].posx, this.puntos[0].posy);
      this.ctx.lineTo(this.puntos[this.puntos.length-1].posx, this.puntos[this.puntos.length-1].posy);
      this.ctx.stroke();
      this.calcularCentro();
    }
  }

  unirPuntos() {
    if (this.puntos.length > 1) {
      this.ctx.beginPath();
      this.ctx.lineWidth = "5";
      this.ctx.strokeStyle = this.colorLineas;
      this.ctx.moveTo(this.puntos[this.puntos.length-1].posx, this.puntos[this.puntos.length-1].posy);
      this.ctx.lineTo(this.puntos[this.puntos.length-2].posx, this.puntos[this.puntos.length-2].posy);
      this.ctx.stroke();
    }
  }

  volverAUnirPuntos(){
    if (this.puntos.length > 1) {
      for (var i = 0; i < this.puntos.length-1; i++){
        this.puntos[i].unir(this.puntos[i+1], this.colorLineas);
      }
    }
    this.cerrarPoligono();
  }

  dibujar(){
    for (var i=0 ; i<this.puntos.length ; i++){
      this.puntos[i].dibujar();
    }
    this.centro.dibujar();
  }

  moverPoligono(x,y){
    var xc = this.centro.posx;
    var yc = this.centro.posy;
    this.centro = new Punto(x,y,7,"#00ff00", this.ctx);
    var dx = this.centro.posx - xc;
    var dy = this.centro.posy - yc;
    for (var i=0 ; i<this.puntos.length ; i++){
      this.puntos[i].mover(dx,dy);
    }
  }

  moverPunto(x,y,p){
    p.mover(x - p.posx, y - p.posy);
  }

  cambiarColor(valor){
    if (this.puntos.length > 1) {
      if (valor > 0){
        this.brillo += -5;
      }else{
        this.brillo += 5;
      }
      this.colorLineas = ("hsl(63, 100%,"+this.brillo+"%)");
      for (var i= 0 ; i<this.puntos.length ; i++){
        this.puntos[i].setColor("hsl(0, 100%, "+this.brillo+"%)");
      }
    }
  }

  eliminarPunto(p){
    for (var i = 0 ; i < this.puntos.length ; i++){
      if (this.puntos[i].equals(p)){
        this.puntos.splice(i,1);
        this.calcularCentro();
      }
    }
  }

}
