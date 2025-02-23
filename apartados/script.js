document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    }
});

function playSoundAndRedirect() {
    var audio = document.getElementById("madnessSound");
    audio.play();
    setTimeout(function () {
        window.location.href = "sects/madness.html";
    }, 1500);
}

function SoundAndRedirect() {
    var audio = document.getElementById("mazikSound");
    audio.play();
    setTimeout(function () {
        window.location.href = "https://open.spotify.com/user/312i6bqpxgzjpjjlheetnvyfmbbe";
    }, 1500);
}

function NSoundAndRedirect() {
    var audio = document.getElementById("N");
    audio.play();
    setTimeout(function () {
        window.location.href = "sects/kinect360.html";
    }, 1500);
}
