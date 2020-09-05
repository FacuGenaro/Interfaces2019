let teclavalida = false;
let salto = document.getElementById("salto");
let mensaje = document.getElementById("mensaje");
let saltando = false;
let finDeJuego = false;
let timer = document.getElementById("timer");
let tiempo = 30;
let container = document.getElementById("container");
let personaje = document.getElementById("pj");
let enemigo = document.getElementById("enemy");
let muerte = document.getElementById("death");
let pajaro = document.getElementById("pajaro");
let intervalo = null;
let timeout = null;
let botonJugar = document.getElementById("iniciar");
botonJugar.addEventListener("click", jugar);

function jugar() {
    botonJugar.removeEventListener('click', jugar);
    if (intervalo == null) {
        intervalo = setInterval(function () {
            timer.innerHTML = tiempo;
            tiempo--;
        }, 1000);
    }
    if (!finDeJuego) {
        iniciarAnimaciones();
        detectarColision();
        if (tiempo < 0) {
            clearInterval(intervalo);
            timer.innerHTML = 0;
            finDeJuego = true;
            frenarAnimaciones();
            mostrarMensajeVictoria();
            return;
        }
    } else {
        clearInterval(intervalo);
        timer.innerHTML = "";
        finDeJuego = true;
        derrota();
        return;
    }
    timeout = setTimeout(function () {
        clearTimeout(timeout);
        jugar();
    }, 100);
}

function iniciarAnimaciones() {
    quitarMensajeInicial();
    pajaro.style.display = 'block';
    pajaro.style.animation = 'pajaro 0.85s steps(5, end) infinite, movimientoPajaro 2s linear infinite';
    container.style.animation = "animacionFondo 60s normal infinite linear";
    enemigo.style.animation = "movimientoEnemigo 3s normal infinite linear";
}

function frenarAnimaciones() {
    container.style.animation = "none";
    enemigo.style.animation = "none";
    personaje.style.animation = "none";
    pajaro.style.animation = 'none';
}

function quitarMensajeInicial() {
    mensaje.style.display = 'none';
    enemigo.style.display = 'block';
    personaje.style.display = 'block';
    pajaro.style.display = 'block';
}

//Animacion de saltar

window.addEventListener("keypress", function (event) {
    if (event.keyCode == "119" || event.keyCode == "32") {
        teclavalida = true;
        saltando = true;
        personaje.style.animation = "saltar 0.7s 1";
        setTimeout(function () {
            volverACorrer();
        }, 600);
    }
});

function volverACorrer() {
    if (teclavalida) {
        teclavalida = false;
        saltando = false;
        personaje.style.animation = 'movimientoPJ 0.75s steps(8,start) reverse infinite';
    }
}
// window.addEventListener("keyup", function () {
//     if (teclavalida) {
//         teclavalida = false;
//         personaje.style.animation = 'movimientoPJ 0.75s steps(8,start) reverse infinite';
//         setTimeout(function () {
//             saltando = false;
//         }, 250);
//     }
// });

function mostrarMensajeVictoria() {
    mensaje.style.background = 'url("./images/mensajeVictoria.png")';
    mensaje.style.display = 'block';
    personaje.style.display = 'none';
    enemigo.style.display = 'none';
    pajaro.style.display = 'none';
}

function mostrarMensajeDerrota() {
    mensaje.style.display = 'block';
    personaje.style.display = 'none';
    enemigo.style.display = 'none';
    muerte.style.display = 'none';
    pajaro.style.display = 'none';
    mensaje.style.background = 'url("./images/mensajeDerrota.png")';
}

function detectarColision() {
    let pj = personaje.getBoundingClientRect();
    let enemy = enemigo.getBoundingClientRect();
    if (!saltando) {
        if (pj.left < enemy.left + enemy.width && pj.left + pj.width > enemy.left &&
            pj.top < enemy.top + enemy.height && pj.top + pj.height > enemy.top) {
            derrota();
        }
    }
}

function derrota() {
    finDeJuego = true;
    muerte.style.display = 'block';
    personaje.style.display = 'none';
    enemigo.style.display = 'none';
    pajaro.style.display = 'none';

    setTimeout(function () {
        frenarAnimaciones();
        muerte.style.animation = 'none';
        mostrarMensajeDerrota();
    }, 1000);


}