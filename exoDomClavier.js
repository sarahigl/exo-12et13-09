//EXO 1 et 2 clavier
// les var utilisé pour la fonction
let monTxt = document.getElementById('formulaireExo');
//creation de l'élément qui va recevoir la valeur et afficher le text
let p = document.createElement('p');
const node = document.createTextNode("");//zone text creation
p.appendChild(node);//lier les 2
const element = document.getElementById("gr");//connection hmtl div qui va recevoir le p
element.appendChild(p);
//fonction keyup surveille clavier et affiche automatiquement le contenu de textArea
monTxt.addEventListener("keyup", () => {
    console.log("Événement keyup détecté");
    p.textContent = monTxt.value;//attribution de la valeur
    let buttonLimite = document.querySelector('#boutton')
        if(monTxt.textLength >= 5){  //aprés le point alors on voit le nombre de caractere DE la texte area
            buttonLimite.disabled = true ;
        }else{
            buttonLimite.disabled = false;
    }
    localStorage.setItem("monSuperTexte","monTxt")
    if (monTxt.value !== null){
        //monTxt.innerText = localStorage.getItem("monSuperTexte"); ne fonctionne pas avec le innertext pourquoi?
        // comment puis-je arranger ça?
        localStorage.textContent = monTxt.value;
    };
});


