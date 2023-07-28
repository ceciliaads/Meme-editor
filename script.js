// NAVIGATION BAR
const imgNav = document.getElementById("nav-img");
const textNav = document.getElementById("nav-text");
const modeNav = document.getElementById("nav-mode");

const imgAside = document.getElementById("img-aside");
const textAside = document.getElementById("text-aside");
const mainContainer = document.getElementById("main-container");
const header = document.getElementById("header");
const downloadBtnContainer = document.getElementById("dl-btn-container");
const aside = document.getElementById("aside");


const inputColorContainer = document.querySelector(".input-color-container");
const contInputColor = document.querySelector(".cont-input-color");
const textBackgroundColorInput = document.querySelector(".text-background-color-input");

imgNav.addEventListener("click", () => hideImgAside());
textNav.addEventListener("click", () => hideTextAside());
modeNav.addEventListener("click", () => changeMode());

const hideImgAside = () => {
    textAside.classList.add("hidden");
    imgAside.classList.remove("hidden");
    aside.classList.remove("hidden")
}

const hideTextAside = () => {
    aside.classList.remove("hidden")
    imgAside.classList.add("hidden");
    textAside.classList.remove("hidden");
}

const changeMode = () => {
    aside.classList.toggle("light-aside");
    imgNav.classList.toggle("hover-light");
    mainContainer.classList.toggle("main-container-light");
    header.classList.toggle("header-light");
    downloadBtnContainer.classList.toggle("dl-btn-container-light")
    urlImg.classList.toggle("light-mode");
    inputColorContainer.classList.toggle("light-mode");
    backgroundFilter.classList.toggle("light-mode");
    resetBtn.classList.toggle("light-mode");
    topTextInput.classList.toggle("light-mode");
    bottomTextInput.classList.toggle("light-mode");
    fontSelector.classList.toggle("light-mode");
    fontSize.classList.toggle("light-mode");
    alignLeftBtn.classList.toggle("light-mode");
    alignCenterBtn.classList.toggle("light-mode");
    alignRightBtn.classList.toggle("light-mode");
    contInputColor.classList.toggle("light-mode");
    textBackgroundColorInput.classList.toggle("light-mode");
    textOutlineNone.classList.toggle("light-mode");
    textOutlineLight.classList.toggle("light-mode");
    textOutlineDark.classList.toggle("light-mode");
    spacingInput.classList.toggle("light-mode");
    leadingInput.classList.toggle("light-mode");
    document.body.classList.toggle("light-mode-range");
    document.body.classList.toggle("light-mode-varios");

    if (mainContainer.classList.contains("main-container-light")) {
        modeNav.innerHTML = '<i class="fa-solid fa-lightbulb"></i> Dark mode';
        } else {
        modeNav.innerHTML = '<i class="fa-regular fa-lightbulb"></i> Light mode';
    }
}
// IMAGE ASIDE

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

// TEXT ASIDE

const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const checkTopText = document.getElementById("check-top-text");
const checkBottomText = document.getElementById("check-bottom-text");

topTextInput.addEventListener("input", () => changeTopText ());
bottomTextInput.addEventListener("input", () => changeBottomText ());
checkTopText.addEventListener("change",() => removeTopText());
checkBottomText.addEventListener("change",() => removeBottomText());

const changeTopText = () => {
    topText.innerText = topTextInput.value;
}

const changeBottomText = () => {
    bottomText.innerText = bottomTextInput.value;
    
}

const removeTopText = () => {
    if (checkTopText.checked) {
    topText.classList.add("hidden");
    } else {
    topText.classList.remove("hidden");
    }
};

const removeBottomText = () => {
    if (checkBottomText.checked) {
    bottomText.classList.add("hidden");
    } else {
    bottomText.classList.remove("hidden");
    }
};

    //SELECT FONTS

const fontSelector = document.getElementById("font-selector");
console.log(fontSelector.value);
    
const changeFontFamily = () => {
    topText.style.fontFamily = `${fontSelector.value}`;
    bottomText.style.fontFamily = `${fontSelector.value}`;
};
    
fontSelector.addEventListener("change", () => changeFontFamily());

const fontSize =  document.getElementById("font-size");
fontSize.addEventListener("change", () => changeFontSize());


const changeFontSize = () => {
    topText.style.fontSize = `${fontSize.value}px`;
    bottomText.style.fontSize = `${fontSize.value}px`;
}        
    

    // ALIGN TEXT
const alignLeftBtn = document.getElementById("btn-left");
const alignCenterBtn = document.getElementById("btn-center");
const alignRightBtn = document.getElementById("btn-right");


alignLeftBtn.addEventListener("click", () => alignTextLeft());
alignCenterBtn.addEventListener("click", () => alignTextCenter());
alignRightBtn.addEventListener("click", () => alignTextRight());


const alignTextLeft = () => {
    topText.style.justifyContent = "flex-start";
    bottomText.style.justifyContent = "flex-start";
}

const alignTextCenter = () => {
    topText.style.justifyContent = "center";
    bottomText.style.justifyContent = "center";
}

const alignTextRight = () => {
    topText.style.justifyContent = "flex-end";
    bottomText.style.justifyContent = "flex-end";
}

    // FONT/BACKGROUND COLOR

const fontTextColor = document.getElementById("font-text-color");
const fontColorHex = document.getElementById("font-color-hex");
const textBackgroundColor = document.getElementById("text-background-color");
const textBackgroundColorHex = document.getElementById("text-background-color-hex");


fontTextColor.addEventListener("input", () => changeFontColor());
textBackgroundColor.addEventListener("input", () => changeTextBackgroundColor());


const changeFontColor = () => {
    let colorPicked = fontTextColor.value;
    let upperCaseColorPicked = colorPicked.toUpperCase();
    fontColorHex.innerHTML = `${upperCaseColorPicked}`;
    topText.style.color = colorPicked;
    bottomText.style.color = colorPicked;
};

const changeTextBackgroundColor = () => {
    let colorPicked = textBackgroundColor.value;
    let upperCaseColorPicked = colorPicked.toUpperCase();
    textBackgroundColorHex.innerHTML = `${upperCaseColorPicked}`;
    topText.style.backgroundColor = colorPicked;
    bottomText.style.backgroundColor  = colorPicked;
};

    // TRANSPARENT BACKGROUND

const checkboxTransparent = document.getElementById("checkbox-transparent");

checkboxTransparent.addEventListener("click", () => transparentBackground());

const transparentBackground = () => {
    topText.classList.toggle("hidden");
    bottomText.classList.toggle("hidden");
}

    // OUTLINE

const textOutlineNone = document.getElementById("text-outline-none");
const textOutlineLight = document.getElementById("text-outline-light");
const textOutlineDark = document.getElementById("text-outline-dark");

textOutlineNone.addEventListener("click", () => outlineNone());
textOutlineLight.addEventListener("click", () => outlineLight());
textOutlineDark.addEventListener("click", () => outlineDark());

const outlineNone = () => {
	topText.style.textShadow = "none";
	bottomText.style.textShadow = "none";
}

const outlineLight = () => {
	topText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px";
	bottomText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px";
}

const outlineDark = () => {
	topText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px";
	bottomText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px";
}

    // SPACING

const spacingInput = document.getElementById("spacing-text-input");
spacingInput.addEventListener('input', () => spaceText());

const spaceText = () => {
	topText.style.padding = `${spacingInput.value}px`;
	bottomText.style.padding = `${spacingInput.value}px`;
}

    // LEADING

const leadingInput = document.getElementById("leading-text-input");
leadingInput.addEventListener("input", () => leadingText());

const leadingText = () => {
    topText.style.lineHeight =`${leadingInput.value}`;
    bottomText.style.lineHeight = `${leadingInput.value}`;
}

// CLOSE ASIDE 

const closeAside =  document.getElementById("close-aside");
const frontPage = document.querySelector(".front-page");
closeAside.addEventListener("click", () => closeAsideWindow());

const closeAsideWindow = () => {
    aside.classList.toggle("hidden");

}

