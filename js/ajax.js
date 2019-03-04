function ajaxGet(url,callback){
    let req = new XMLHttpRequest();
    req.open("GET",url);
    req.addEventListener("load",function(){
        if(req.status>=200 && req.status<400){
            //Appel la fct callback en lui passant la réponse de la requete
            callback(req.responseText);
        }else{
            console.log(req.status+" "+req.statusText+" "+url);
        }
    });
    req.addEventListener("error",function(){
        console.error("erreur réseau");
    });
    req.send(null);
}
