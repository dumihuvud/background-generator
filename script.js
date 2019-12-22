let css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
var body = document.getElementById('gradient')
const genButton = document.getElementById('generate')

function setGradient () {
    body.style.background = 
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'

    css.textContent = body.style.background + ';'
}
// get random rgb
let randomRgb = function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function setRandomBackground () {
    console.log('click')
    body.style.background = 
    'linear-gradient(to right, ' + randomRgb() + ', ' + randomRgb() + ')'
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
genButton.addEventListener('click', setRandomBackground)