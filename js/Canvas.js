class Canvas{
    constructor(domCanvas, contextCanvas,mouseX,mouseY,mouseDown, drawing){
        this.domCanvas=domCanvas;
        this.contextCanvas=contextCanvas;
        this.mouseX=mouseX;
        this.mouseY=mouseY;
        this.mouseDown=mouseDown;
        this.drawing=drawing;
    }
    
    
    drawDot(){
        this.drawing=true;
        this.contextCanvas.fillStyle="black";
        this.contextCanvas.lineCap="round";
        this.contextCanvas.beginPath();
        this.contextCanvas.arc(this.mouseX,this.mouseY,6,0,Math.PI*2,true);
        this.contextCanvas.closePath();
        this.contextCanvas.fill();   
    }
    
    sourisBas(){
        this.mouseDown=1;
        this.drawDot();
    }
    
    sourisHaut(){
        this.mouseDown=0;
    }
    
    recupererPositionSouris(e){
        this.mouseX=e.offsetX;
        this.mouseY=e.offsetY;
    }
    
    dessineMouvementSouris(e){
        this.recupererPositionSouris(e);
        if(this.mouseDown===1){
            this.drawDot();
        }
    }
    
    
    effacerCanvas(){
 this.contextCanvas.clearRect(0,0,this.domCanvas.width,this.domCanvas.height);
    }
    
    recupererSignature(){
        let signature= this.domCanvas.toDataURL("image/png");
        console.log(signature);
        return signature;  
    }
}