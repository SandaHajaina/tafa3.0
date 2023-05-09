let habitants = [
    {
        nom: "John",
        prenom: "Week",
        age: 24,
        sexe: "Masculin",
        cin: 101102117,
        adresse: "Lot 112b Voanjo"
    },
    {
        nom: "Messi",
        prenom: "Leo",
        age: 35,
        sexe: "Masculin",
        cin: 101108117,
        adresse: "01 CB Barcelone"
    },
    {
        nom: "Dybala",
        prenom: "Andry",
        age: 20,
        sexe: "Masculin",
        cin: 201102117,
        adresse: "BII Alasora"
    },
    {
        nom: "Nomena",
        prenom: "Aina",
        age: 24,
        sexe: "Féminin",
        cin: 101102110,
        adresse: "Lot 112b Itaosy"
    },
    {
        nom: "Nivo",
        prenom: "Lalao",
        age: 50,
        sexe: "Féminin",
        cin: 101202119,
        adresse: "Lot 4h Voanjo"
    },
    {
        nom: "Rasoa",
        prenom: "Zanany",
        age: 60,
        sexe: "Féminin",
        cin: 001102100,
        adresse: "Lot 112c Voanjo"
    },
    {
        nom: "Ben",
        prenom: "Ten",
        age: 19,
        sexe: "Masculin",
        cin: 100002117,
        adresse: "Lot 112h Voanjo"
    },
    {
        nom: "Nary",
        prenom: "Volomborona",
        age: 30,
        sexe: "Masculin",
        cin: 101102227,
        adresse: "Lot 112II Voanjo"
    },
    {
        nom: "Rivo",
        prenom: "Mainty",
        age: 40,
        sexe: "Masculin",
        cin: 103102117,
        adresse: "Lot 112b Amboma"
    }, {
        nom: "Rossy",
        prenom: "Kely",
        age: 45,
        sexe: "Masculin",
        cin: 331102117,
        adresse: "Lot 333b Voanjo"
    },
    {
        nom: "Jul",
        prenom: "Kwel",
        age: 30,
        sexe: "Masculin",
        cin: 991102117,
        adresse: "Lot 112b Bypass"
    }, {
        nom: "Zanety",
        prenom: "Be",
        age: 38,
        sexe: "Féminin",
        cin: 101102555,
        adresse: "Lot 54d Voanjo"
    },
    {
        nom: "Sergio",
        prenom: "Bousikety",
        age: 24,
        sexe: "Masculin",
        cin: 101102177,
        adresse: "Lot 98k Voanjo"
    },
    {
        nom: "Ralay",
        prenom: "Son",
        age: 32,
        sexe: "Masculin",
        cin: 891102117,
        adresse: "Lot B5 Voanjo"
    },
    {
        nom: "Jean",
        prenom: "Mark",
        age: 20,
        sexe: "Masculin",
        cin: 1011656117,
        adresse: "Lot B13 Voanjo"
    }, 
    {
        nom: "Koto",
        prenom: "Kely",
        age: 23,
        sexe: "Masculin",
        cin: 101888117,
        adresse: "Lot z32 Voanjo"
    }, 
    {
        nom: "Sibella",
        prenom: "Mazava",
        age: 45,
        sexe: "Féminin",
        cin: 101102222,
        adresse: "Lot b17 Voanjo"
    }, 
    {
        nom: "Chatnal",
        prenom: "Be",
        age: 22,
        sexe: "Féminin",
        cin: 101502333,
        adresse: "Lot r78 Voanjo"
    }, 
    {
        nom: "Solange",
        prenom: "Rola",
        age: 24,
        sexe: "Féminin",
        cin: 101895117,
        adresse: "Lot 1U Voanjo"
    }, 
    {
        nom: "Coco",
        prenom: "Manjani",
        age: 57,
        sexe: "Masculin",
        cin: 1011021265,
        adresse: "Lot JL12 Voanjo"
    }
]

let results_1 = habitants.filter(h => h.age > 25)

let results = []
let j = 0

let nombreHomme = 0
let nombreFemme = 0

for (let i = 0; i < habitants.length; i++) {
    if(habitants[i].age > 25) {
        results[j] = habitants[i]
        j++
    }
    if(habitants[i].sexe === "Masculin") {
        nombreHomme++
    } else {
        nombreFemme++
    }
}

const age = habitants.map(x => x.age)
const totalAge = age.reduce((a, b)=> a + b,0)
const moyenneAge = totalAge / age.length
console.log(Math.round(moyenneAge));

document.getElementById("moyenne_age").innerText = moyenneAge
document.getElementById("nombre_femme").innerText = nombreFemme
document.getElementById("nombre_homme").innerText = nombreHomme

console.log("homme:" + nombreHomme);
console.log("femme:" + nombreFemme);

let keyName = Object.keys(habitants[0])
let tHead = document.querySelector(".t_head");

for (const i of keyName) {
    let tHeadContent = document.createElement('th');
    tHeadContent.innerText = i
    tHead.appendChild(tHeadContent)
}

const tBody = document.querySelector(".t_body")

for (let i = 0; i < habitants.length; i++) {
    const tr = document.createElement("tr")
    tr.classList.add("my-tr" + i);
    tBody.appendChild(tr)
    const trContent = document.querySelector(".my-tr" + i)

    const id = document.createElement("th")
    const nom = document.createElement("td")
    const prenom = document.createElement("td")
    const age = document.createElement("td")
    const sexe = document.createElement("td")
    const cin = document.createElement("td")
    const adresse = document.createElement("td")

    id.innerText = i
    nom.innerText = habitants[i].nom
    prenom.innerText = habitants[i].prenom
    age.innerText = habitants[i].age
    sexe.innerText = habitants[i].sexe
    cin.innerText = habitants[i].cin
    adresse.innerText = habitants[i].adresse

    trContent.appendChild(id)
    trContent.appendChild(nom)
    trContent.appendChild(prenom)
    trContent.appendChild(age)
    trContent.appendChild(sexe)
    trContent.appendChild(cin)
    trContent.appendChild(adresse)
}


// for (let i = 0; i < habitants.length; i++) {
//     const template = document.getElementById("template").cloneNode(true)
//     template.querySelector(".id").innerText = i
//     template.querySelector(".nom").innerText = habitants[i].nom
//     template.querySelector(".prenom").innerText = habitants[i].prenom
//     template.querySelector(".age").innerText = habitants[i].age
//     template.querySelector(".sexe").innerText = habitants[i].sexe
//     template.querySelector(".cin").innerText = habitants[i].cin
//     template.querySelector(".adresse").innerText = habitants[i].adresse

//     tBody.appendChild(template)
// }


//reduce, map, filter