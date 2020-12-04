let fuelTotal = null;
let kilometreInt = null;

class Voitures
{
    constructor( modeleVoiture, Immatriculation, Couleur, Poids, Puissance, Capacite, Niveau, Places) 
    {
        this.modeleCar = modeleVoiture
        this.immatriculation = Immatriculation,
        this.couleur = Couleur,
        this.poids = Poids,
        this.puissance = Puissance,
        this.capacite = Capacite,
        this.niveau = Niveau,
        this.places = Places
    }

    rePaint(newColor)
    {
        if(newColor != this.couleur)
        {
            this.couleur = newColor;
            return `Merci pour ce très bon choix.`;
        }
        else
        {
            return `Merci d'avoir gardé la couleur proposée.`; 
        }
    }

    insurrance(insurranceOk)
    {
        if(insurranceOk === 1)
        {
            return `Très bien, vous êtes assurés.`;
        }
        else
        {
            return `Tapez 1 pour vous assurer ou vous ne partirez pas avec le véhicule !`; 
        }
    }
    
    refuel(fuelTotal)
    {
        if( fuelTotal > this.capacite)
        {
            return `Attention, votre complément de carburant dépasse les ${this.capacite} litres de capacité du réservoir !`;
        }
        else
        {
            return `Votre niveau de carburant est maintenant de : ${fuelTotal} litres.`;
        }
    }

    toMove(deplacement, kilometreInt)
    {
        if(deplacement > 0 && deplacement <= 3)
        {
            switch (deplacement) 
            {
                // Déplacement en ville 10l/100
                case '1' :

                if(fuelTotal/10*100 > kilometreInt)
                {
                    return `Vous allez faire de la Ville et vous avez ${fuelTotal/10*100} kms d'autonomie.
                    Très bien, vous aurez une autonomie suffisante !
                    `;
                }
                else
                {
                    return `Vous allez faire de la Ville et vous avez ${fuelTotal/10*100} kms d'autonomie. 
                    Attention, niveau de carburant insuffisant, il vous manque ${kilometreInt - (fuelTotal/10*100)} kms d'autonomie soit ${(kilometreInt - (fuelTotal/10*100))*0.1} litres de carburant.`;
                }
                    break;

                // Déplacement sur route 5l/100
                case "2": 

                if(fuelTotal/5*100 > kilometreInt)
                {
                    return `Vous allez faire de la Route et vous avez ${fuelTotal/5*100} kms d'autonomie.
                    Très bien, vous aurez une autonomie suffisante !`;
                }
                else
                {
                    return`Vous allez faire de la Route et vous avez ${fuelTotal/5*100} kms d'autonomie.
                    Attention, niveau de carburant insuffisant, il vous manque ${kilometreInt - (fuelTotal/5*100)} kms d'autonomie soit ${(kilometreInt - (fuelTotal/5*100))*0.05} litres de carburant.`;

                }
                    break;

                // Déplacement sur autoroute 8l/100
                case '3':

                if(fuelTotal/8*100 > kilometreInt)
                {
                    return `Vous allez faire de l'autoroute et vous avez ${fuelTotal/8*100} kms d'autonomie.
                    Très bien, vous aurez une autonomie suffisante !`;
                }
                else
                {
                    return `Vous allez faire de l'autoroute et vous avez ${fuelTotal/8*100} kms d'autonomie.
                    Attention, niveau de carburant insuffisant, il vous manque ${kilometreInt - (fuelTotal/8*100)} kms d'autonomie soit ${(kilometreInt - (fuelTotal/8*100))*0.08} litres de carburant.`;
                }
                    break;
            }
        }
        
    }

    toString()
    {
        return`
        Récapitulatif des informations sur le véhicule :
        immatriculation  : ${this.immatriculation}
        puissance (din)  : ${this.puissance}
        couleur          : ${this.couleur}
        `
    }

}

