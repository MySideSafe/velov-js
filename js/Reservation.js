class Reservation {
    constructor(client, dateD) {
        this.client = client;
        this.date = dateD;
    }
    
    setClient(client) {
        this.client = client
    }
    
    setDateD(dateD) {
        this.date = dateD;
    }
    
   
    enregistrerReservation(client) {
        sessionStorage.nomDeFamille = client.nom;
        sessionStorage.prenom = client.prenom;
        sessionStorage.signature = client.signature;
    }

    afficherReservation(station) {
        station.enleverUnVelo();
        document.getElementById("recapReservation").classList.replace("d-none", "d-block");
    }
    

    annulerReservation() {
        station.remettreUnVelo();
        sessionStorage.clear();
        //effacerDateReservation
        
        
    }
}