//Declaracion de variables y funciones generales

var btn1 = document.getElementById("ejercicio1");
btn1.addEventListener("click", ejercicio1);
var btn2 = document.getElementById("ejercicio2");
btn2.addEventListener("click", ejercicio2);
var btn3 = document.getElementById("ejercicio3");
btn3.addEventListener("click", ejercicio3);
var btn4 = document.getElementById("ejercicio4");
btn4.addEventListener("click", ejercicio4);
var btn5 = document.getElementById("ejercicio5");
btn5.addEventListener("click", ejercicio5);
var btn6 = document.getElementById("ejercicio6");
btn6.addEventListener("click", ejercicio6);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var cartel = new Image();
var imageData = ctx.createImageData(canvas.width, canvas.height);
cartel.src = "./images/cartel.png";



function setPixel(imageData, x, y, r, g, b, a){
  index = (x+y *imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}

//Ejercicio 1
function ejercicio1(){
  let matrix = [];
  let w = 100;
  let h = 100;
  for(var i=0; i<w; i++) {
    matrix[i] = [];
    for(var j=0; j<h; j++) {
      matrix[i][j] = Math.floor(Math.random() * 100);
    }
  }
  console.table(matrix);
  // Inciso A
  function getMaxValue(){
    let maxValue = 0;
    for (var i=0 ; i<w ; i++){
      for(var j=0; j<h; j++) {
        if (matrix[i][j] > maxValue){
          maxValue = matrix[i][j];
        }
      }
    }
    return maxValue;
  }
  console.log(getMaxValue());

  // Inciso B

  function incisoB(){
    let par = 0;
    let impar = 9999;
    for (var i=0 ; i<w ; i++){
      for(var j=0; j<h; j++) {
        if ( ( i % 2 ) == 0 ){
          if (matrix[i][j] > par){
            par = matrix[i][j];
          }
        }else{
          if (matrix[i][j] < impar){
            impar = matrix[i][j];
          }
        }
      }
    }
    let arr = [par,impar];
    return arr;
  }

  console.log(incisoB());

  // Inciso C

  function promedioPorFila(){
    let prom;
    let arrProm = [];
    for (var i=0 ; i<w ; i++){
      let suma = 0;
      for(var j=0; j<h; j++) {
        suma += matrix[i][j];
      }
      prom = (suma / w);
      arrProm.push(prom);
      prom = 0;
    }
    return arrProm;
  }

  console.log(promedioPorFila());

  ctx.drawImage(cartel, 0, 0);
}

// Ejercicio 2
function ejercicio2(){
  ctx.fillStyle = "#3F54BF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.stroke();
}

// Ejercicio 3

function ejercicio3(){
  for (var x=0 ; x< imageData.width ; x++){
    for (var y=0 ; y< imageData.height ; y++){
      setPixel (imageData, x, y, 255, 150, 0, 255)
    }
  }

  ctx.putImageData(imageData, 0, 0);

}

// Ejercicio 4

function ejercicio4(){
  var r,g,b;
  for (var x=0 ; x<imageData.width ; x++){
    for (var y=0 ; y< imageData.height ; y++){
      r = y / imageData.height * 255;
      g = y / imageData.height * 255;
      b = y / imageData.height * 255;
      setPixel (imageData, x, y, r, g, b, 255);
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

// Ejercicio 5

function ejercicio5(){
  var r,g,b;
  var tmp = 255;
  for(var x = 0; x < imageData.width; x++){
    r = x/ (imageData.width / 2) * 255 ;
    g = x/ (imageData.width / 2) * tmp ;
    b = 0 ;
    for(let y = 0; y < imageData.height; y++){
      setPixel(imageData, x, y , r, g, b, 255);
    }
    if ( x >= ( imageData.width / 2 ) ){
      tmp = (1 - (x - imageData.width / 2) / (imageData.width / 2)) * 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

// Ejercicio 6

function ejercicio6(){
  var image = new Image();
  image.src = "./images/image.png";
  var datos = ctx.createImageData(canvas.width, canvas.height);
  image.onload = function(){
    ctx.drawImage(this, 0, 0);
    datos = ctx.getImageData(0, 0, this.width, this.height);
    var r,g,b,grey;
    for (var x=0 ; x<this.width ; x++){
      for (var y=0 ; y<this.height ; y++){
        r = getRed(datos, x, y);
        g = getGreen(datos, x, y);
        b = getBlue(datos, x, y);
        grey = (r+g+b)/3;
        index = (x+y * datos.width) * 4;
        datos.data[index+0] = grey;
        datos.data[index+1] = grey;
        datos.data[index+2] = grey;
      }
    }

    ctx.putImageData(datos, 0, 0);
  }

}

function getRed(imageData, x, y){
  index = (x+y * imageData.width) * 4;
  return imageData.data[index+0];
}
function getGreen(imageData, x, y){
  index = (x+y * imageData.width) * 4;
  return imageData.data[index+1];
}
function getBlue(imageData, x, y){
  index = (x+y * imageData.width) * 4;
  return imageData.data[index+2];
}
