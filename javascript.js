var datosES = ["hola", "mundo", "que", "tal", "estas", "yo", "estoy", "muy", "bien"]
var idioma = ""
var datosIN = ["Hello", "World", "How", "Are", "you","I'm", "Very", "Fine"];



// let random = Math.floor(Math.random()*10)
// console.log(random)

function idiomaEs(){
    idioma = "Español";
    // console.log("prueba")
}

function idiomaIn(){
    idioma = "English";
}

function idiomaFR(){
    idioma = "Frances";
}

function idiomaAL(){
    idioma = "Aleman";
}




function CuriosityEs(){
    let random = Math.floor(Math.random()*10)
    // console.log(random)
    let curiosidades = datosES[random];
    // console.log("La curiosidad es  ", curiosidades)
    idioma = "Español"
    let containe = document.getElementById("container")
    containe.innerHTML = curiosidades;

}



function CuriosityIn(){
    let random = Math.floor(Math.random()*10)
    // console.log(random)
    let curiosidades = datosIN[random];
    // console.log("The curiosity is  ", curiosidades)
    idioma = "English";
    let containe = document.getElementById("container")
    containe.innerHTML = curiosidades; 

}


function CuriosityAL(){
    let random = Math.floor(Math.random()*10)
    // console.log(random)
    let curiosidades = datosAL[random];
    // console.log("The curiosity is  ", curiosidades)
    idioma = "Aleman";
    let containe = document.getElementById("container")
    containe.innerHTML = curiosidades; 

}


function CuriosityFR(){
    let random = Math.floor(Math.random()*10)
    // console.log(random)
    let curiosidades = datosFR[random];
    // console.log("The curiosity is  ", curiosidades)
    idioma = "English";
    let containe = document.getElementById("container")
    containe.innerHTML = curiosidades; 

}

function elector() {
    
    switch(idioma){
    case "Español":
        CuriosityEs();
        break;

    case "English":
        CuriosityIn();
        break;
    
    case "Aleman":
        CuriosityAL();
        break;
   
    case "Frances":
        CuriosityFR();
        break;
    }
}

let containe = document.getElementById("container")
containe.innerHTML = curiosidades;
