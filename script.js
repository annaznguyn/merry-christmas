function toggleAudio() {
    var audio = document.getElementById("my-audio");
    var icon = document.getElementById("speaker-icon");

    if (audio.muted) {
        audio.play();
        audio.muted = false;
        icon.src = "assets/images/speaker-icon.png";
    } else {
        audio.muted = true;
        icon.src = "assets/images/muted-speaker-icon.png";
    }
}

function createSnow() {
    var snow = document.createElement("div");
    var snowBlurry = document.createElement("div");
    snow.classList.add("snow");
    snowBlurry.classList.add("snow-blurry");

    var snowStart = Math.random() * window.innerWidth;
    var snowBlurryStart = Math.random() * window.innerWidth;
    snow.style.left = `${snowStart}px`;
    snowBlurry.style.left = `${snowBlurryStart}px`;

    document.querySelector(".snow-container").appendChild(snow);
    document.querySelector(".snow-container").appendChild(snowBlurry);
    setTimeout(() => {
        snow.remove();
        snowBlurry.remove();
    }, 10000);
}

setInterval(createSnow, 200);