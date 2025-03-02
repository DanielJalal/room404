document.addEventListener("DOMContentLoaded", function () {
    const collapsibles = document.querySelectorAll(".collapsible");
    
    collapsibles.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                loadImages(content);
            }
        });
    });

    function loadImages(content) {
        const images = content.querySelectorAll("img[data-src]");
        images.forEach(img => {
            if (!img.src) {
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
            }
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
