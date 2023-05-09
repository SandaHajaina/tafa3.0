// t3 nb paire dans un tableau
console.log("Nombre paire:");
let t3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
while (i < t3.length) {
    if (t3[i] % 2 === 0) {
        console.log(t3[i]); //affiche tout les nombres pairs dans le tableau t3
    }
    i++
}

/*******************************************/

console.log("___________________");

// t4 nb impaire
console.log("Nombres impairs:");
let t4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < t4.length; index++) {
    if (t4[index] % 2 !== 0) {
        console.log(t4[index]); //affiche tout les nombres impairs dans le tableau t4
    }
}

/*******************************************/

console.log("___________________");

// t5 valeur le plus  élevé
let t5 = [8, 12, 30, 5, 3, 14, 17, 28, 39, 10]
let nombreMax = 0
for (let index = 0; index < t5.length; index++) {
    if (t5[index] > nombreMax) {
        nombreMax = t5[index]
    }
}
console.log(`Nombre max dans t5: ${nombreMax}`); //affiche le nombre maximal dans le tableau t4


/*******************************************/

//function fullName (nom, prenom)
function fullName(nom, prenom) {
    return `${nom} ${prenom}`
}
console.log(`Nom complet:` + fullName("Rakoto", "Jul"));


/*******************************************/

//function average([nombre])
function somme(t) { // fonction somme des éléments dans un tableau
    let resultat = 0
    for (let i = t.length - 1; i >= 0; i--) {
        resultat = resultat + t[i];
    }
    return resultat
}

let notes = [10, 12, 8, 15, 5, 14, 6]
function average(a) {
    return somme(a) / a.length
}
console.log(`La moyenne de notes:` + average(notes));
