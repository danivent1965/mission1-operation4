// let fuelTotal = null;

let car1 = new Voitures ("5008", "AB 000 CD", "rouge", 1.525, 150, 60, 5, 5);

menu = function()
{
// affichage menu console + prompt
let saisie = prompt
    (`
                            Menu
    Pour finaliser votre achat, faites les choix suivants :
        1. Pour choisir la couleur de votre futur véhicule
        2. Prendre une assurance
        3. Pour faire le complément en carburant
        4. Pour partir avec votre vehicule
        5. Infos Véhicule
    `);
    console.log("Vous avez fait le choix : " + saisie);

    if (saisie > 0 && saisie <= 5) 
    {
        switch (saisie) 
        {
            // Choix 1 - choix la couleur
            case "1": car1.rePaint();
            let newColor = prompt(`Indiquez votre nouvelle couleur`);
            console.log(`Vous avez choisis la couleur ${newColor}.`);
            console.log(car1.rePaint(newColor)); 
            menu();
            break;

            // Choix 2 - prendre une assurance
            case "2": car1.insurrance();

            let insurranceOk = parseInt(prompt(`Assurer son véhicule est obligatoire, tapez 1 pour souscrire une assurance ! `));

            console.log(car1.insurrance(insurranceOk));
            menu();
            
            break;
            
            // Choix 3 - faire le complément de carburant
            case '3': car1.refuel(); 
            let fuelAdd = parseFloat(prompt("Combien de litres voulez-vous ajouter dans votre véhicule ? : "));
            fuelTotal = fuelAdd + car1.niveau;
            console.log(car1.refuel(fuelTotal)); 
            menu();

            break;

            // Choix 4 - de déplacer avec le véhicule
            case '4': car1.toMove(); 

            // saisie des kilomètres parcourus
            let kilometres = prompt(`Saisissez le nb de kilomètres que vous allez pacourir : `)
            let kilometreInt = parseFloat(kilometres);

            // affichage console des kilomètres 
            console.log(`Vous allez parcourir ${kilometreInt} kms.`);


            // menu déplacement Ville/Route/Autoroute
            let deplacement = prompt
            (`
            menu de déplacement
            Choisissez dans quel milieu vous allez circulez :
            1. En ville
            2. Sur route
            3. Sur autoroute
            `)
            
            console.log(car1.toMove(deplacement, kilometreInt));
            menu();

            break;
            
            
            // menu infos
            case '5': this.toString(); 
            
            console.log(car1.toString());
            
            break;
            
        }
    } 
    else 
    {
        console.log("Vous devez saisir un chiffre entre 1 et 5 !");
        menu();
    }
}

console.log(`

Vous venez récupérer votre nouveau véhicule Peugeot 5008.
IL reste quelques détails à régler avant de récupérer votre voiture.
Voici un récapitulatif des spécifications du véhicule:

            Modèle                        : ${car1.modeleCar}
            Couleur                       : ${car1.couleur}
            Poids                         : ${car1.poids} kg
            Puissance                     : ${car1.puissance} din
            Numéro d'immatriculation      : ${car1.immatriculation}
            Capacité  du réservoir        : ${car1.capacite} litres
            Quantité de carburant livré   : ${car1.niveau} litres

    `);
let intro = (`
        Vous venez récupérer votre nouveau véhicule Peugeot 5008.
        IL reste quelques détails à régler avant de récupérer votre voiture.
    `);
alert(intro);

menu();





