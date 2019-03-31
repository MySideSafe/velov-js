class Timer {

    constructor(now, duree) {
        this.duree = duree;
        this.now = now;
        this.dateDeFin = this.now + (this.duree * 60 * 1000);
        this.distance = this.dateDeFin - now;
        this.interval;
    }
    
    storeTimer(){
    sessionStorage.duree = this.duree;
    sessionStorage.now = this.now;
    sessionStorage.dateDefin = this.dateDeFin;
    sessionStorage.distance = this.distance;
    sessionStorage.interval = this.interval;
    }

    distanceMoinsUn() {
        if(this.distance>0){
        this.distance = this.distance - 1000;
        this.storeTimer();
        this.afficherDecompte();
        }
        else{
            clearInterval(this.interval);
        }
    }



    afficherDecompte() {
        if (this.distance > 0) {
            // Calcul des minutes et secondes :
            var minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
            document.getElementById("recapReservation").textContent = "Vous avez réservé un vélo pour " + minutes + " minutes et " + seconds + " seconde(s)";
        } else {
            document.getElementById("recapReservation").textContent = "Votre réservation a expirée";
        }
    }


    decompter() {
            this.interval = setInterval(this.distanceMoinsUn.bind(this), 1000);
    }




}