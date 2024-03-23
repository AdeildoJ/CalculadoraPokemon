import { calcStatus } from "./calcStatusRefactor.js"

let botao = document.getElementById("calcButton")

botao.addEventListener('click', function () {
    console.log("Clicou no botão!")
    calcStatus()
})