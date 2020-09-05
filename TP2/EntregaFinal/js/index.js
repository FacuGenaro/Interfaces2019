var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var botonCerrarPoligono = document.getElementById("botonCerrarPoligono").addEventListener("click", cerrar);
var botonCrearPuntos = document.getElementById("botonCrearPuntos").addEventListener("click", getCoordenadas);



var puntos = [];
var poligonos = [];
var poligono = new Poligono(ctx);
var punto;
var isDragging = false;
var temporalListenerOnClick;
var temporalListenerDblClick;
var teclaPulsada = false;
var rect = canvas.getBoundingClientRect();

function getCoordenadas() {
  canvas.removeEventListener("dblclick", temporalListenerDblClick);
  canvas.addEventListener("click", temporalListenerOnClick = function(){
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
    document.getElementById("coordenadas").value = "Click x: " + x + " Click y: " + y;
    punto = new Punto(x, y, 10, "#FF0000", ctx);
    punto.dibujar();
    poligono.puntos.push(punto);
    poligono.unirPuntos();
  });
}

function cerrar() {
  canvas.removeEventListener("click", temporalListenerOnClick);
  canvas.removeEventListener("dblclick", temporalListenerDblClick);
  poligono.cerrarPoligono();
  poligonos.push(poligono);
  poligono = new Poligono(ctx);
}

function oMousePos(canvas, evt) {
  var ClientRect = canvas.getBoundingClientRect();
  return {
    x: Math.round(evt.clientX - ClientRect.left),
    y: Math.round(evt.clientY - ClientRect.top)
  };
}

canvas.addEventListener("mousedown", function() {
  if (poligonos.length >0){
    isDragging = true;
    canvas.addEventListener("mousemove", temporalListener = function(event) {
      mousepos = oMousePos(canvas, event);
      var x = mousepos.x;
      var y = mousepos.y;
      if (isDragging) {
        for (var i = 0; i < poligonos.length; i++) {
          if(poligonos[i].centro.isClicked(x,y)){
            poligonos[i].moverPoligono(x,y);
          }
        }
        for (var i = 0; i < poligonos.length; i++) {
          for (var j = 0 ; j < poligonos[i].puntos.length ; j++){
            if (poligonos[i].puntos[j].isClicked(x,y)){
              poligonos[i].moverPunto(x,y,poligonos[i].puntos[j]);
            }
          }
        }
        dibujarFiguras();
      }

    });
  }
});

canvas.addEventListener("mouseup", function() {
  isDragging = false;
});

function dibujarFiguras(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i=0 ; i<poligonos.length ; i++){
    poligonos[i].dibujar();
    poligonos[i].volverAUnirPuntos();
  }
}

window.addEventListener("keydown", function (event){
  if(event.key == "c"){
    teclaPulsada = true;
  }
});

window.addEventListener("keyup", function (event) {
  if(event.key == "c"){
    teclaPulsada = false;
  }
},);

canvas.addEventListener("mousewheel",function(event) {
  if (teclaPulsada){
    for (var i=0 ; i<poligonos.length ; i++){
      poligonos[i].cambiarColor(event.deltaY)
    }
    dibujarFiguras();
  }
});

canvas.addEventListener("dblclick", function(){
  canvas.removeEventListener("click", temporalListenerOnClick);
  var eliminar = false;
  mousepos = oMousePos(canvas, event);
  for (var i = 0; i < poligonos.length; i++) {
    for (var j = 0 ; j < poligonos[i].puntos.length ; j++){
      if(poligonos[i].puntos.length >0){
        if(poligonos[i].puntos[j].isClicked(mousepos.x, mousepos.y) && !eliminar){
          eliminar = true;
          poligonos[i].eliminarPunto(poligonos[i].puntos[j]);
          dibujarFiguras();
        }
      }else{
        poligonos[i].puntos.pop();
        poligonos[i].eliminarPunto(poligonos[i].centro);
        poligonos.splice(i,1);
        dibujarFiguras();
      }
    }
  }
});
