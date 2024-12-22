function toggleAudio() {
    const audio = document.getElementById("myaudio");
    const icon = document.getElementById("speaker-icon");

    if (audio.muted) {
        audio.muted = false;
        icon.src = "assets/images/speaker-icon.png";
    } else {
        audio.muted = true;
        icon.src = "assets/images/muted-speaker-icon.png";
    }
}

function createSnow() {
    const snow = document.createElement("div");
    const snowBlurry = document.createElement("div");
    snow.classList.add("snow");
    snowBlurry.classList.add("snow-blurry");

    const snowStart = Math.random() * window.innerWidth;
    const snowBlurryStart = Math.random() * window.innerWidth;
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