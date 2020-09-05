window.onload = function () {
    if (window.screen.width < 900) {
        iframe.style = "width: 0 ; height: 0;";
    } else if (window.screen.width > 900) {
        iframe.style = "width: 60% ; height: 60%;";
    }
}

let botonplay = document.getElementById("play");
botonplay.addEventListener("click", function () {
    location.href = "ver.html";
});

// let botoninfo = document.getElementById("info");
// botoninfo.addEventListener("click", function () {
//     location.href = "info.html";
// });

let iframe = document.getElementById("iframe");

window.addEventListener("resize", function () {
    if (window.screen.width < 900) {
        iframe.style = "width: 0 ; height: 0;";
    } else if (window.screen.width > 900) {
        iframe.style = "width: 60% ; height: 60%;";
    }
})




let visible = document.getElementsByClassName("front");
let invisible = document.getElementsByClassName("back");
let comentarios = document.getElementsByClassName("comentario");

for (let i=0 ; i<comentarios.length ; i++){
    comentarios[i].addEventListener("mouseover", function(){
        invisible[i].style.display = "block";
        visible[i].style.display = "none";
    })
    comentarios[i].addEventListener("mouseout", function(){
        invisible[i].style.display = "none";
        visible[i].style.display ="block";
    })
}


