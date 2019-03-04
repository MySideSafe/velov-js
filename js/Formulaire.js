class Formulaire {
    constructor(formDom) {
        this.formDom = formDom;
        this.station=null;
    }

    afficherForm(station) {
        //Si on peut effectuer une réservation on affiche le formulaire
        if (station.stationAccessible()) {
            this.formDom.classList.replace("d-none", "d-block");
            this.preremplirForm();
            this.station=station;
        } else if (this.formDom.classList.contains("d-block")) {
            this.formDom.classList.replace("d-block", "d-none");
        }
    }
    //méthode qui préremplit le formulaire si il existe des localStorage
    preremplirForm(){
        "username" in localStorage
        if(localStorage.getItem("nomDeFamille") != null && localStorage.getItem("prenom") != null )
            {
                document.getElementById("nomFamille").value=localStorage.nomDeFamille;
                document.getElementById("prenom").value=localStorage.prenom
            }
    }
}