class Imc{
    constructor(name, wheight, height,imcNumber){
        this.name = name;
        this.wheight = wheight;
        this.height = height;
    }
    calculatorImc(){
        let result = this.wheight / (this.height * this.height)
        return result;
    }
    display(){
        let resultImc = this.calculatorImc();
        console.log(`${this.name},(${this.wheight},${this.height}) à un IMC de: ${resultImc}`);
    }
};
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];


for (let i=0; i<list.length;i++){
    list[i].display();//appel en instance car fonction dans class
}; 
//EXO 2 PME


class Employee{
    constructor(name, surname, age, monthSalary){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.monthSalary = monthSalary;
    }
}

class Pme{
    constructor(name,equipeSalaries,revenu,fraisFixes,fraisAchat){//
        this.name = name;
        this.equipeSalaries = equipeSalaries
        this.revenu = revenu;
    //this.monthWorkSalary = monthWorkSalary;
        this.fraisFixes = fraisFixes;
        this.fraisAchat = fraisAchat;
    }//trop de propriété
    bilanCalculed(){
        //cout initiale 
        let coutInitiale = this.fraisAchat + this.fraisFixes;
        console.log(`${this.name} : Cout Initial :${coutInitiale}`);

        //cout totale équipe 
        let coutTotal = 0;
        // Parcourez l'équipe d'employés
        for (let employee of this.equipeSalaries) {
            // Calculez le coût individuel pour un employé pour 1 mois et multipliez-le par N mois
            let coutIndividuel = employee.monthSalary * 12;// tout simplement le nombre de mois
            // Ajoutez le coût individuel au coût total
            coutTotal += coutIndividuel;
        }
        let coutTotal90Pourcent = (coutTotal * 90) / 100;
        let coutTotalFinal = coutTotal + coutTotal90Pourcent;
        console.log(`${this.name} : Cout Totale Equipe :${coutTotalFinal}`);

        //vente 
        console.log(`${this.name} : VENTES : ${this.revenu}`);

        //bilan
        let bilanPme = this.revenu - (coutTotalFinal+coutInitiale); //inversement du calcul 
        console.log(`${this.name} : BILAN : ${bilanPme}`);
    }
};

// Scénario
const pme = new Pme (
    //Le nom entreprise
  "Ma Petite Entreprise - ",
  //L'equipe de salariés (un tableau)
  [new Employee ("Duval", "Paul", 30, 2000),
  new Employee ("Durand", "Alain", 40, 3000),
  new Employee ("Dois", "Sylvia", 50, 4000),],
  //le revenu , frais fixe, frais d'achat
  300000,
  20000,
  50000);
pme.bilanCalculed();

// EXO 3 BANQUE

class CompteBancaire{
    constructor(name, solde = 0){
        this.name = name;
        this.solde = solde;
    }
    crediter(credite){
        if (credite>0){
            this.solde += credite;
            console.log(`Ajouut de: ${credite} pour ${this.name}`);
        };
    }
    retrait(retraitCompte){
        try{
            if(this.solde>=retraitCompte){
                this.solde -= retraitCompte;
                console.log(`Retrait de :${retraitCompte} pour: ${this.name}`)
            } else {
                throw new Error(`${this.name}, retrait refusé avec solde de: ${this.solde}.`);
            }
        } catch (error) {
            this.gererErreur(error);
        }
    };
    gererErreur(error){
        // Gérer, enregistrer ou signaler l'erreur 
        console.error(`----> : ${error.message}`);
    };
    virement(montant, name1, name2){
            if(this.solde>= montant){
                this.solde -= montant;
                console.log(`Retrait de: ${montant} pour ${name1.name} vers ${name2.name}`);
                name2.solde += montant;//cibler solde particulier remplace this par la VAR arg
                console.log(`Ajout de: ${montant} pour ${name2.name}`);//idem cibler name 
                console.log(`Retrait de: ${montant} pour ${name1.name}`);
            }
        };
    etatDuCompte(){
        console.log(`titulaire: ${this.name}, solde: ${this.solde}`)
    };
}


// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
    };
    // lecture tableau associatif ou Objet["truc"]
    // Crédite et décrit chaque compte
    for (let key in lesComptes) lesComptes[key].crediter(1000);//boucle for 'clé'..in 'array'- parcours l'objet 
    // un retrait de 100 par Alex
    lesComptes.Alex.retrait(100);
     // un petit retrait incorrect (doit déclencher erreur custom) :
    // Alex fait un retrait de 1200
    lesComptes.Alex.retrait(1200);
    //console.log(lesComptes.Alex)
    // un petit virement: Marco Vire 300 à Clovis
    lesComptes.Marco.virement(300,lesComptes.Marco,lesComptes.Clovis);
    for (let key in lesComptes) lesComptes[key].etatDuCompte();


