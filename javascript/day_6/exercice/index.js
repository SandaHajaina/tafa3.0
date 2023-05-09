const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const cin = document.getElementById("cin")
const age = document.getElementById("age")

const valueNom = document.getElementById("valeur-nom")
const valuePrenom = document.getElementById("valeur-prenom")
const valueCin = document.getElementById("valeur-cin")
const valueAge = document.getElementById("valeur-age")

const enregistrer = document.getElementById("enregister")

nom.onkeyup = function() {
    nom.style.borderColor = ""
    document.getElementById("label-nom").style.color = ""
    valueNom.innerText = nom.value
}

prenom.onkeyup = function() {
    prenom.style.borderColor = ""
    document.getElementById("label-prenom").style.color = ""
    valuePrenom.innerText = prenom.value
}

cin.onkeyup = function() {
    cin.style.borderColor = ""
    document.getElementById("label-cin").style.color = ""
    valueCin.innerText = cin.value
}

age.onkeyup = function() {
    age.style.borderColor = ""
    document.getElementById("label-age").style.color = ""
    valueAge.innerText = age.value
}

//Evenement click bouton enregister
enregistrer.onclick = function() {
    if (nom.value == "") {
        nom.style.borderColor = "red"
        document.getElementById("label-nom").style.color = "red"
    }
    if (prenom.value == "") {
        prenom.style.borderColor = "red"
        document.getElementById("label-prenom").style.color = "red"
    }
    if (cin.value == "") {
        cin.style.borderColor = "red"
        document.getElementById("label-cin").style.color = "red"
    }
    if (age.value == "") {
        age.style.borderColor = "red"
        document.getElementById("label-age").style.color = "red"
    }
}