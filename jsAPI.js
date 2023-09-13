
//EXO api pokemon

//tableau qui va stocker les element api
let displayList = [];
//requête GET
fetch(`https://pokeapi.co/api/v2/pokemon`)
//extraction de données avec appel json sur objet respnse => envoie new promesse qui va résoudre les data json 
.then(function(response){
    return response.json()
})
// traitement data
.then((data) => {
    //creer var cible 
    let list = document.getElementById("pokeListe");
//on entre dans data et on extrait et on stock à chaque itération les nom des poke dans var puis ajoute sur le document pour l'afficher 
    data.results.forEach((item) => {
        displayList.push(item.name);
        //créer un element li pour lister les noms
        let li = document.createElement("li");
        li.innerText = item.name;
        list.appendChild(li);
    })
    console.log(displayList)
})
.catch((err) => {
    console.log(`Error fetching: ${err}`)
});

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