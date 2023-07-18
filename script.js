// NAVIGATION BAR
const imgNav = document.getElementById("nav-img");
const textNav = document.getElementById("nav-text");
const modeNav = document.getElementById("nav-mode");

const imgAside = document.getElementById("img-aside");
const textAside = document.getElementById("text-aside");
const mainContainer = document.getElementById("main-container")
const header = document.getElementById("header");

imgNav.addEventListener("click", () => hideImgAside());
textNav.addEventListener("click", () => hideTextAside());
modeNav.addEventListener("click", () => changeMode());

const hideImgAside = () => {
    textAside.classList.add("hidden");
    imgAside.classList.remove("hidden");
}

const hideTextAside = () => {
    imgAside.classList.add("hidden");
    textAside.classList.remove("hidden");
}

const changeMode = () => {
    textAside.classList.toggle("light-aside");
    imgAside.classList.toggle("light-aside");
    mainContainer.classList.toggle("main-container-light");
    header.classList.toggle("header-light");

    if (mainContainer.classList.contains("main-container-light")) {
        modeNav.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Dark mode';
        } else {
        modeNav.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Light mode';
    }
}

// MEME URL

const urlImg = document.getElementById("url-img");
const memeImg = document.getElementById("meme-img");

urlImg.addEventListener("input", () => changeBackground());

const changeBackground = () => {
    memeImg.style.backgroundImage = `url('${urlImg.value}')`;
};