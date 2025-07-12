document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".collapsible");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
                loadImages(content);
            }
        });
    });

    function loadImages(content) {
        const images = content.querySelectorAll("img[data-src]");
        images.forEach(img => {
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
        });
    }
});

function playSoundAndRedirect() {
    var audio = document.getElementById("madnessSound");
    if (audio) {
        audio.play().catch(error => console.error("Error playing sound:", error));
        setTimeout(function () {
            window.location.href = "sects/madness.html";
        }, 1500);
    }
}

function SoundAndRedirect() {
    var audio = document.getElementById("mazikSound");
    if (audio) {
        audio.play().catch(error => console.error("Error playing sound:", error));
        setTimeout(function () {
            window.location.href = "https://open.spotify.com/user/312i6bqpxgzjpjjlheetnvyfmbbe";
        }, 1500);
    }
}

function NSoundAndRedirect() {
    var audio = document.getElementById("N");
    if (audio) {
        audio.play().catch(error => console.error("Error playing sound:", error));
        setTimeout(function () {
            window.location.href = "sects/nadezhda.html";
        }, 1500);
    }
}
