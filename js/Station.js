class Station{
    constructor(idStation,positionGps,nomStation,adresseStation,etatStation,nbrPlacesDispo,nbrVelosDispo,marqueur){
        this.idStation=idStation;
        this.positionGps=positionGps;
        this.nomStation=nomStation;
        this.adresseStation=adresseStation;
        this.etatStation=etatStation;
        this.nbrPlacesDispo=nbrPlacesDispo;
        this.nbrVelosDispo=nbrVelosDispo
        this.marqueur="";
    }
    
   ajouterMarqueur(map){
        this.marqueur = L.marker(this.positionGps).addTo(map.description);
    }
    
    //Affichage des informations de la station selectionnée
    chargerInfosStation(map) {
    
    //on fait apparaitre la div infos station
    document.getElementById("mapid").classList.replace('col-md-12', 'col-md-8');
    document.getElementById("infoStation").classList.replace('d-none', 'col-md-4');
    //On recentre la map sur la station sélectionnée
    map.setNouvellePosition(this.positionGps);
    document.getElementById("nomStation").textContent = this.nomStation;
    document.getElementById("adresseStation").textContent = this.adresseStation;
    document.getElementById("nbrVelosDispo").textContent = this.nbrVelosDispo;
    document.getElementById("nbrPlacesDispo").textContent = this.nbrPlacesDispo;
}
    //Renvoie true si une reservation est possible à cette station
    stationAccessible(){
         var reservationPossible =(this.etatStation!="CLOSED" && this.nbrVelosDispo!=0);
        return reservationPossible;
    }
    
 enleverUnVelo(){
     this.nbrVelosDispo=this.nbrVelosDispo-1;
     document.getElementById("nbrVelosDispo").textContent=this.nbrVelosDispo;
 }
    
}