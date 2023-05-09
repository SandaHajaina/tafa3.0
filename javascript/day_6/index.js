const titre = document.getElementById("titre")
//const nom = document.getElementById("nom")

titre.style.color = "blue"
titre.style.textDecoration = "underline"

titre.setAttribute("class", "titre-class")
console.log(titre.getAttribute("caca"))

const paragraphe = document.getElementsByTagName("p")
console.log(paragraphe)

for (const key in paragraphe) {
    paragraphe[key].setAttribute("class", "paragraphe")
}