const redLight = document.querySelector("#redLight");
const yellowLight = document.querySelector("#yellowLight");
const greenLight = document.querySelector("#greenLight");

let arrLights = [redLight, yellowLight, greenLight]
let colors = ['red', 'yellow', 'green']
function switchColor() {
    arrLights[0].addEventListener('click', switchColor);
    arrLights[0].style.background = (colors[0]);
    arrLights[0].removeEventListener('click', switchColor)
    arrLights[1].addEventListener('click', switchColor);
    arrLights[1].style.background = ('black');
    arrLights[1].removeEventListener('click', switchColor);
    arrLights[2].addEventListener('click', switchColor);
    arrLights[2].style.background = ('black');
    arrLights[2].removeEventListener('click', switchColor)
    arrLights.push(arrLights[0]);
    arrLights.shift();
    colors.push(colors[0]);
    colors.shift();
}
