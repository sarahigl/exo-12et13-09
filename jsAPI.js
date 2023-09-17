//EXO api pokemon
let list = document.getElementById("pokeListe");
//let pokemonName = document.getElementById("name");
//requête GET

const contactApi1 =  async () => {
    const requestString = "https://pokeapi.co/api/v2/pokemon";
    const data = await fetch(requestString)
    console.log(data)
    //extraction de données avec appel json sur objet respnse => envoie new promesse qui va résoudre les data json 
    let response = await data.json();
    console.log(response);
    const name = response.results;
    const pokemonNames = name.map(pokemon => pokemon.name);//pokemon est un parametre il represente chaque element//ensuite avec .name on selectionne la colonne des name et on extrait chaque nom
    const affichageHtml = pokemonNames.join("<br>");//pour faire en sorte que l'affichage se fasse pas sur une ligne.
    list.innerHTML = affichageHtml;// le contenue de div et donc egale a la var qui fait l'affichage car elle meme correspond au nom pokemon mais en affichage modifié
    //list.innerHTML = pokemonNames;// celui ci si onn souhaite afficher sans faire de modif sur notre visuel (list en ligne avec virgule par lisible)
}
const error = (err) => {
    console.log(`Error fetching: ${err}`)
};
contactApi1();

//cour
const apiDiv = document.querySelector('.apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contactApi =  async () => {
    //Data va récup Toutes les données de l'api
    const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(data);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const dataTransformed = await  data.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude;
    //await permet laisser un temps de chargement au données pour ne pas faire vide dans la console
};
contactApi();
