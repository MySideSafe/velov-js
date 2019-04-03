class App {
    constructor(canvas) {
        let coord = [45.75, 4.85];
        let zoom = 14; 
        this.map = new Map(coord, zoom); //chargement de la map
        this.initSlider();
        this.formulaire = new Formulaire(document.getElementById("formReservation"));
        this.initStations(this.map,this.formulaire); //Chargement des stations
        //Si exite timer nop initReseration
      
        if(sessionStorage.getItem("timer") != null)
            {
                var timerJson=sessionStorage.getItem("timer");
                var timerRecuper= timerJson && JSON.parse(timerJson);
                var timer = new Timer(timerRecuper.now,timerRecuper.duree);
                timer.dateDefin=timerRecuper.dateDefin;
                timer.distance=timerRecuper.distance;
                timer.interval=timerRecuper.interval;
                timer.decompter();
                document.getElementById("recapReservation").classList.replace("d-none", "d-block");
            }else{
        this.initReservation(this.formulaire);
            }
        this.initCanvas(); //mise en place du canvas
    }

    initCanvas() {
        var signature = document.getElementById("signature");
        var canvas =new Canvas(signature, signature.getContext("2d"), 0, 0, 0, false);
        this.canvas = canvas;
        this.canvas.domCanvas.addEventListener("mousedown", function() {
            canvas.sourisBas();
        });
        this.canvas.domCanvas.addEventListener("mouseup", function () {
            canvas.sourisHaut();
        });
        this.canvas.domCanvas.addEventListener("mousemove", function (e) {
            canvas.dessineMouvementSouris(e);
        });
    }
    
    //Affichage de la liste des stations sur la map
    initStations(map,formulaire) {
        ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=73b8377b68cf91d454d51322942e64a69bf02c27", function (reponse) {
            let stations = JSON.parse(reponse);
            for (let uneStation of stations) {
               const station = new Station(uneStation.number, uneStation.position, uneStation.name, uneStation.address, uneStation.status, uneStation.available_bike_stands, uneStation.available_bikes);
                station.ajouterMarqueur(map);
                station.marqueur.addEventListener("click", function () {
                station.chargerInfosStation(map);
                formulaire.afficherForm(station);
                formulaire.station=station;
                
            });

            }
        });
    }
    
    initReservation(formulaire){
       
        formulaire.formDom.addEventListener("submit", function (e) {
        e.preventDefault();
        const client = new Client();
        client.recupererClient();
        client.enregistrerClientDansNavigateur();
        var date = new Date();
        const reservation = new Reservation(client,date);
        reservation.enregistrerReservation(client);
        reservation.afficherReservation(formulaire.station);
            //verifier si timer existe
        var now = Date.now();
        var timer= new Timer(now, 0.5);
        timer.decompter();
        }
        );
       
    }
    
    //possible de creer un.json pour charger les slides
    initSlider(){
        
        
        let slides=[];
        ajaxGet("http://igor-iff-leymarie.ovh/velo/slide.json", function (reponse) {
            let slidesJ = JSON.parse(reponse);
            console.log(slidesJ);
            for (let unSlide of slidesJ) {
                var slide= new Slide(unSlide.image,unSlide.figcaption,unSlide.altImage);
               slides.push(slide);
                console.log(slide);
                console.log("b");
                
            }

            }
        );
        console.log(slides);
        
        
        
        
        
        
        
        
        
        
        
        /*var slides =[];
        let slide1 = new Slide("images/velov.jpg","Bienvenue dans l'application de réservation de vélo'v lyon","location velov");
        slides.push(slide1);
        let slide2 = new Slide("images/lyon_1.jpg","Choissisez votre station","ville de lyon");
        slides.push(slide2);
        let slide3 = new Slide("images/lyon_2.jpg","Réserver --> signer --> valider Chaque nouvelle réservation annule la précédente","ville de lyon");
        slides.push(slide3);
        let slide4 = new Slide("images/lyon_3.jpg","Votre Vélo'v est réservé pendant 20 minutes Après ce délais votre réservation sera automatique annulée","ville de lyon");
        slides.push(slide4);
    */
        var slider = new Slider("slideshow",slides);

        slider.listeners();
    }
}

