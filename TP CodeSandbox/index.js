// import $ from "jquery";
// ===========
// ===========
// Part 1 : cibler des élements du DOM
//Récupérer l'élément qui contient l'id app

const element = document.getElementById("app");
const elementBis = document.querySelector("#app");
const list = document.getElementsByTagName ('div')
const listBis = document.querySelectorAll('div')

//Trouver la méthode qui permet de récupérer l'ensemble de toutes les balises d'un type donné

// Récupérer la collection qui correspond à tous les éléments qui continnent la classe block

const blockList = document.querySelectorAll(".block");
const blockListBis = document.getElementsByClassName("block")

console.log(blockList);
console.log(blockListBis);
const blockInSpecificList = document.querySelectorAll("#specific .block")



// Récupérer la collection qui contient uniquement les élements avec la classe block dans la div qui a la classe specific

const specificElement = document.querySelectorAll("#specific")
console.log(specificElement)

// réécrivez avec querySelector ou querySelectorAll

// ========
// ========
// Part 2 :modification d'un noeud du DOM ( un élément )
// Modifier le texte présent dans la div app a l'aide de la variable suivante
const appText = "Coucou depuis le js";

// Modifier le style du block n2: donnez lui une border

// Modifier le style du block n4: donnez lui une border différente

// Modifier le texte du block n3: donnez lui la valeur que vous voulez

// Trouvez la méthode qui permet d'ajouter une classe à un élément

// Appliquer la classe red au block n5

// =========
// =========
// Part 3: Les évènements !
// Utilisez la méthode addEventListener pour greffer au bouton le comportement suivant sur le click
function onclick() {
	console.log("J'ai cliqué");
}
// Utilisez la méthode addEventListener pour greffer au document le comportement suivant quand on appuie sur une touche du clavier
function onkeypress() {
	console.log("J'ai tapé");
}

// transformez la fonction précédente pour logger la lettre tapée

// si c'est w, faites un alert "Gagné !" en plus

// =========
// =========
// Part 4: Création/insertion d'un élément

// découvrez la méthode pour créer un élement html

// découvrez la méthode pour insérer un élement

const items = ["Mccree", "Ash", "Zenyatta"];
// bouclez sur le tableau pour créer un li pour chaque élement,
// et insérez le dans la liste ul présente dans le fichier index.html

// ==========
// ==========
// Partie 5 : Welcome to the real world ! Les formulaires :

// Il est temps de sauter dans le grand bassin !!
// 1) arrangez vous pour que les valeurs du formulaire apparaissent dans la section "valeurs du formulaire" à chaque fois que vous les modifiez !

// 2) réactivez l'option du radiobutton qui est disabled ( via js bien sûr hein !)

// il existe des classes qui montrent la validité ou l'invalidité du champ de formulaire dans bootstrap
// identifiez ces classes et :

// le champ prénom doit être valide seulement si la valeur qu'il contient correspond à votre prénom
// le champ nom doit être valide seulement si la valeur qu'il contient correspond à votre nom

// cool non ? :)
