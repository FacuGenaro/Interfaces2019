class Punto {
  constructor(posx, posy, radio, color, ctx) { //Constructor Punto
    this.ctx = ctx;
    this.posx = posx;
    this.posy = posy;
    this.radio = radio;
    this.color = color;
  }

  dibujar() { //Dibujar punto
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.posx, this.posy, this.radio, 100, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }

  isClicked(x,y){
    var posicion = Math.sqrt( Math.pow((x - this.posx),2) + Math.pow((y - this.posy),2)  );
    return posicion <= this.radio;
  }

  unir(p, color){
    this.ctx.beginPath();
    this.ctx.lineWidth = "5";
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.posx, this.posy);
    this.ctx.lineTo(p.posx, p.posy);
    this.ctx.stroke();
  }

  setColor(color){
    this.color = color;
  }

  mover(x,y){
    this.posx += x;
    this.posy += y;
  }

  equals(p){
    return ( (this.posx == p.posx) && (this.posy = p.posy));
  }
}
