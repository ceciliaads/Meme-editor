// NAVIGATION BAR
const imgNav = document.getElementById("nav-img");
const textNav = document.getElementById("nav-text");
const modeNav = document.getElementById("nav-mode");

const imgAside = document.getElementById("img-aside");
const textAside = document.getElementById("text-aside");
const mainContainer = document.getElementById("main-container")

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
    textAside.classList.toggle("dark-aside");
    imgAside.classList.toggle("dark-aside");
    mainContainer.classList.toggle("main-container-dark");

    if (mainContainer.classList.contains("main-container-dark")) {
        modeNav.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Light mode';
        //modeButton.innerHTML = '<i class="fa-solid fa-align-left"></i> Modo claro';
        } else {
        modeNav.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Dark mode';
    }
}