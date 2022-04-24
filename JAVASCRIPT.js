const loading_text = document.querySelector('.loading_text');
const bg = document.querySelector('.bg');

let load = 0;

let blurring_function_id = setInterval(blurring,50);
function blurring() {
    load++;
    if(load >= 100){
        clearInterval(blurring_function_id);
    }
    loading_text.innerHTML = `${load}%`;
    loading_text.style.opacity = scale(load,0,100,1,0);
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
    console.log(load);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }