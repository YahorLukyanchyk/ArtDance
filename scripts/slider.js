let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider__next").addEventListener("click", () => {
    offset = offset + 280;
    if(offset > 840){
        offset = 0;
    }
    sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider__prev").addEventListener("click", () => {
    offset = offset - 280;
    if(offset < 0){
        offset = 840;
    }
    sliderLine.style.left = -offset + "px";
});