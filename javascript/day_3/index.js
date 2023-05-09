let personne = {
    nom: "Sanda",
    prenom : "Hajaina",
    nomComplet: function(){
        return personne.nom + " " + personne.prenom
    },
    age: 24,
    taille: "1,65m",
    religion: "musulman",
    etat: "Tres bon",
    clothes: {
        color: "rouge"
    }
}

console.log(personne);

personne.exp = [
    {
        poste: "dev"
    },
    {
        poste: "cooker"
    }
]

console.log(personne);

delete personne.religion;

console.log(personne.nomComplet());




