// NAVIGATION BAR
const imgNav = document.getElementById("nav-img");
const textNav = document.getElementById("nav-text");
const modeNav = document.getElementById("nav-mode");

const imgAside = document.getElementById("img-aside");
const textAside = document.getElementById("text-aside");
const mainContainer = document.getElementById("main-container")
const header = document.getElementById("header");
const downloadBtnContainer = document.getElementById("dl-btn-container")

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
    downloadBtnContainer.classList.toggle("dl-btn-container-light")

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

// MEME BACKGROUND COLOR/FILTERS

const colorPicker = document.getElementById("color-picker");
const colorName = document.getElementById("color-name");

const changeMemeBackground = () => {
    let chosenColor = colorPicker.value;
    let upperCaseChosenColor = chosenColor.toUpperCase();
    colorName.innerHTML = `${upperCaseChosenColor}`;
    memeImg.style.backgroundColor = chosenColor;
};

colorPicker.addEventListener("input", () => changeMemeBackground());

const backgroundFilter = document.getElementById("background-filter");

backgroundFilter.addEventListener('change', () => changeBackgroundColor());

const changeBackgroundColor = () => {
    console.log(backgroundFilter.value)
    memeImg.style.backgroundBlendMode = backgroundFilter.value;
}

    // FILTERS IMAGE

const brightnessInput = document.getElementById("brightness-input");
const opacityInput = document.getElementById("opacity-input")
const contrastInput = document.getElementById("contrast-input");
const blurInput = document.getElementById("blur-input");
const grayscaleInput = document.getElementById("grayscale-input");
const sepiaInput = document.getElementById("sepia-input");
const hueRotationInput = document.getElementById("hue-rotation-input");
const saturationInput = document.getElementById("saturation-input");
const invertInput = document.getElementById("invert-input");


const updateFilter = () => {
    memeImg.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) blur(${blurInput.value}px) contrast(${contrastInput.value}%) grayscale(${grayscaleInput.value}%) hue-rotate(${hueRotationInput.value}deg) sepia(${sepiaInput.value}%) saturate(${saturationInput.value}%) invert(${invertInput.value})`;
};

brightnessInput.addEventListener("input", () => updateFilter());
opacityInput.addEventListener("input", () => updateFilter());
contrastInput.addEventListener("input", () => updateFilter());
blurInput.addEventListener("input", () => updateFilter());
grayscaleInput.addEventListener("input", () => updateFilter());
sepiaInput.addEventListener("input", () => updateFilter());
hueRotationInput.addEventListener("input", () => updateFilter());
saturationInput.addEventListener("input", () => updateFilter());
invertInput.addEventListener("input", () => updateFilter());

    // RESET FILTERS

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener('click', () => resetFilters());

const resetFilters = () => {
    memeImg.style.filter =  "none";
}

// DOWNLOAD MEME

const downloadButton = document.getElementById("download-btn");
const meme = document.getElementById("meme-container");

downloadButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "my-meme.png");
});
};