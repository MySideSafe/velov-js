class Map{
    constructor(coord,zoom)
    {
        this.coord=coord;
        this.zoom=zoom;
        this.description = L.map('mapid').setView(this.coord, this.zoom); 
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 20, }).addTo(this.description);
    }
   
   setNouvellePosition(position){
        this.coord=position;
        this.description.panTo(new L.LatLng(position.lat,position.lng));
    }
    
    
    
    
}

