let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")
let prm
let operacion

for (const key in botones) {
    if (Object.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        // console.log(boton)
        boton.addEventListener("click", pinta)

    }

}

function pinta(e) {
    console.log(e.target.innerText)
    resultado.value += e.target.innerText

}
function pintar2(e) {
    console.log(e.target.innerText)
}
function borrar(e) {
    resultado.value = ""
}
function sumar(e) {
    prm = resultado.value
    operacion= e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
}
function igual(e){
    let prm2 = resultado.value
    if (operacion=="+"){
        resultado.value = parseInt(prm) + parseInt(prm2)
    }
}

let operadores = document.getElementsByClassName("operadores")
for (const key in operadores) {
    if (Object.hasOwnProperty.call(operadores, key)) {
        const boton = operadores[key];
        // console.log(boton)
        boton.addEventListener("click", pintar2)
        if (boton.innerText == "borrar") {
            boton.addEventListener("click", borrar)
        } else if (boton.innerText == "+") {
            boton.addEventListener("click", sumar)
        } else {
            boton.addEventListener("click", pintar2)
        }

    }
}