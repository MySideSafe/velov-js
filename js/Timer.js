class Timer{
    
    constructor(now,duree){
        this.duree=duree;
        this.now=now;
        this.dateDeFin = this.now+(this.duree*60*1000);
        this.distance = this.dateDeFin-now;
    }
    
    distanceMoinsUn()
    {
        this.distance = this.distance - 1000;
        this.afficherDecompte();
        
    }
    
    
    
    afficherDecompte() {
        if(this.distance > 0){
    // Calcul des minutes et secondes :
    var minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    document.getElementById("recapReservation").textContent= "Vous avez réservé un vélo pour " + minutes + " minutes et " + seconds + " seconde(s)";
    }
    else{
        document.getElementById("recapReservation").textContent= "Votre réservation a expirée";
    }

  }
}


/*var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); */