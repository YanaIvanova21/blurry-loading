const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

const int = setInterval(blurring, 30);

function blurring() {
  if (load < 100) {
    load++;
    loadingText.innerText = load + "%";
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`;
  } else clearInterval(int);
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
