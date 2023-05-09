/**** Addition *****/
const nb1Add = document.getElementById("first-number-addition")
const nb2Add = document.getElementById("second-number-addition")
const btnAdd = document.getElementById("submit-btn-addition")
const resultAdd = document.getElementById("result-addition")

btnAdd.onclick = function() {
    resultAdd.innerText = Number(nb1Add.value) + Number(nb2Add.value)
}

/**** Multiplication *****/
const nb1Mul = document.getElementById("first-number-multiplication")
const nb2Mul = document.getElementById("second-number-multiplication")
const btnMul = document.getElementById("submit-btn-multiplication")
const resultMul = document.getElementById("result-multiplication")

btnMul.onclick = function() {
    resultMul.innerText = Number(nb1Mul.value) * Number(nb2Mul.value)
}

/**** Division *****/
const nb1Div = document.getElementById("first-number-division")
const nb2Div = document.getElementById("second-number-division")
const btnDiv = document.getElementById("submit-btn-division")
const resultDiv = document.getElementById("result-division")

btnDiv.onclick = function() {
    resultDiv.innerText = (Number(nb1Div.value) / Number(nb2Div.value))
}

/**** Soustraction *****/
const nb1Sou = document.getElementById("first-number-soustraction")
const nb2Sou = document.getElementById("second-number-soustraction")
const btnSou = document.getElementById("submit-btn-soustraction")
const resultSou = document.getElementById("result-soustraction")

btnSou.onclick = function() {
    resultSou.innerText = (Number(nb1Sou.value) - Number(nb2Sou.value))
}

// const input = document.getElementById("input-text")
// const btn = document.getElementById("button-submit")

// input.onchange = function() {
//     console.log(input.value);
// }

// input.onkeyup = function() {
//     console.log(input.value);
// }

// input.onkeydown = function() {
//     console.log("down");
// }

// btn.onclick = function () {
//     console.log("input.value")
// }

