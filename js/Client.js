class Client {
    constructor() {
       
    }
    
    recupererClient(){
        this.nom = document.getElementById("nomFamille").value;
        this.prenom = document.getElementById("prenom").value;
        this.signature = document.getElementById("signature").toDataURL("image/png")
    }
    enregistrerClientDansNavigateur()
    {
        localStorage.nomDeFamille = this.nom;
        localStorage.prenom =this.prenom;
    }
   
}