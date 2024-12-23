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

function shareHover() {
    document.getElementById("heart-icon").src = "assets/images/blue-heart.png";
}

function shareHoverOut() {
    document.getElementById("heart-icon").src = "assets/images/white-heart.png";
}

function share() {
    var popup = document.getElementById("share-popup");
    popup.classList.add("show");
}

function closePopup() {
    document.getElementById("copy-icon").style.display = "block";
    document.getElementById("tick-icon").style.display = "none";
    var popup = document.getElementById("share-popup");
    popup.classList.remove("show");
}

function copyLink() {
    var link = "https://annaznguyn.github.io/merry-christmas/";
    navigator.clipboard.writeText(link);

    document.getElementById("copy-icon").style.display = "none";
    document.getElementById("tick-icon").style.display = "block";
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