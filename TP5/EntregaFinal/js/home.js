const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("mouseover", function () {
        this.play();
    })
    video.addEventListener("mouseout", function () {
        this.pause();
    })
    video.addEventListener("click", function () {
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    })
    video.addEventListener("dblclick", function () {
        this.pause();
        this.currentTime = 0;
    })
})

let botonplay = document.getElementById("ver");
botonplay.addEventListener("click", function () {
    location.href = "ver.html";
});

let botoninfo = document.getElementById("info");
botoninfo.addEventListener("click", function () {
    location.href = "info.html";
});

let a = document.getElementById("juego");
a.addEventListener("click", function () {
    location.href = "error.html";
});