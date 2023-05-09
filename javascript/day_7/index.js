//selection des boutous start stop et reset
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

//selection du paragraphe pour afficher le chronometre
const chrono = document.getElementById("chronometre")

//initialisation des variables necessaire pour le chrono
let second = 0
let minute = 0
let hour = 0

//boolean pour savoir si le chrono est en marche ou en pause
let pause = false

//mode dark et light
let mode = document.getElementById("mode")
const body = document.body

//fonction pour changer le mode du document en light ou dark
function changeMode() {
    body.classList.toggle('dark-mode');
    if(mode.value === "Dark mode") {
        mode.value = "Light mode"
    } else {
        mode.value = "Dark mode"
    }
}

//interval d'une seconde pour generer le chronometre
const t = setInterval(() => {
    if (pause) {
        chrono.textContent =
            `${(hour < 10) ? '0' + hour : hour} 
            : ${(minute < 10) ? '0' + minute : minute} 
            : ${(second < 10) ? '0' + second : second}`
        second++
        if (second === 60) {
            second = 0
            minute++
        }
        if (minute === 60) {
            minute = 0
            hour++
        }
    }
}, 1000);


function stopFunction() {
    pause = false
}

function startFunction() {
    pause = true
}

function resetFunction() {
    second = 0
    minute = 0
    hour = 0
    chrono.textContent = "00 : 00 : 00"
    pause = false
}

//les évenements rattachés au boutons start, stop et reset
stop.addEventListener("click", stopFunction)
start.addEventListener("click", startFunction)
reset.addEventListener("click", resetFunction)
mode.addEventListener("click", changeMode)
