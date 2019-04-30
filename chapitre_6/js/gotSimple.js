// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];
// input qui contion les pays
let paysElt = document.querySelector("input") 
let suggestionElts = document.getElementById("suggestions")

// gerer le chgmt de valeur
paysElt.addEventListener("input", function() {
    suggestionElts.textContent = "" // on efface le contenu du div
    listePays.forEach(pays => {
        if(pays.indexOf(paysElt.value) === 0) {
            let sugg = document.createElement("div")
            sugg.textContent = pays
            // ajout du listenner sur l'element directement
            sugg.addEventListener("click", function() {
                paysElt.value = pays
                suggestionElts.textContent = ""
            })
            suggestionElts.appendChild(sugg)
        }
    })
})
