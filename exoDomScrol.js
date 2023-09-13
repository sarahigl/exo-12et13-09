document.addEventListener('scroll', function(event){
    let scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    let scrollY = window.scrollY;
    // var dans la fonction pour surveiller et se mettre a jour sinon X
    let onEstOu = (scrollY/scrollMax)*100;
    //connection bar en fonction du % scroll
    document.getElementById('myBar').style.width = onEstOu  + "%";
    //affichage
    //bar.style.width = onEstOu  + "%"; <= (pourquoi celui ci ne fonctionne pas?)
    console.log(event);
    console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}
    pourcentage de scroll : ${onEstOu} %`);
})

