var idioma = "Español"
var datosES = ["Los aguacates son una fruta, no una verdura",
"La Torre Eiffel puede ser 15 cm más alta durante el verano",
"La tripofobia es el miedo a los agujeros muy juntos",
"Australia es más ancha que la Luna",
"'Melifluo' es un sonido que resulta agradablemente suave y musical al escucharlo",
"Las Spice Girls se llamaban originalmente Touch",
"Los dientes humanos son la única parte del cuerpo que no puede curarse por sí misma.",
"Los antiguos romanos solían echar un trozo de pan tostado en el vino",
"El corazón de las gambas se encuentra en la cabeza",
"La gente es más creativa en la ducha",
"Los conejos bebé se llaman gazapos",
"El unicornio es el animal nacional de Escocia",
"El primer avión voló el 17 de diciembre de 1903",
"La nuez moscada es un alucinógeno",
]

var datosIN = ["Avocados are a fruit, not a vegetable",
"The Eiffel Tower can be 15 cm taller during the summer",
"Trypophobia is the fear of closely spaced holes",
"Australia is wider than the Moon",
"'Mellifluous' is a sound that is pleasingly smooth and musical to hear",
"The Spice Girls were originally called Touch",
"Human teeth are the only part of the body that can't heal themselves",
"Ancient Romans used to put a piece of toast in their wine",
"The heart of a shrimp is located in its head",
"People are more creative in the shower",
"Baby rabbits are called kits",
"The unicorn is the national animal of Scotland",]

var datosFR = ["Les avocats sont un fruit, pas un légume",
"La Tour Eiffel peut être 15 cm plus haute pendant l'été",
"La triphobie est la peur des trous très rapprochés",
"L'Australie est plus large que la Lune",
"'Méliflu' est un son qui est agréablement doux et musical à entendre",
"Les Spice Girls s'appelaient initialement Touch",
"Les dents humaines sont la seule partie du corps qui ne peut pas se guérir d'elle-même",
"Les anciens Romains avaient l'habitude de mettre un morceau de pain grillé dans leur vin",
"Le cœur d'une crevette se trouve dans sa tête",
"Les gens sont plus créatifs sous la douche",
"Les bébés lapins s'appellent des lapereaux",
"L'animal national de l'Écosse est la licorne",
"Le premier avion a volé le 17 décembre 1903",
"La noix de muscade est un hallucinogène"];

var datosAL = ["Avocados sind eine Frucht, kein Gemüse",
"Der Eiffelturm kann im Sommer 15 cm höher sein",
"Trypophobie ist die Angst vor eng beieinanderliegenden Löchern",
"Australien ist breiter als der Mond",
"'Mellifluous' ist ein Klang, der angenehm weich und musikalisch zu hören ist",
"Die Spice Girls hießen ursprünglich Touch",
"Menschliche Zähne sind der einzige Teil des Körpers, der sich nicht selbst heilen kann",
"Die alten Römer legten ein Stück Toast in ihren Wein",
"Das Herz einer Garnele befindet sich in ihrem Kopf",
"Menschen sind in der Dusche kreativer",
"Babymeerschweinchen werden Kitze genannt",
"Das Einhorn ist das Nationaltier von Schottland",
"Das erste Flugzeug flog am 17. Dezember 1903",
"Muskatnuss ist ein Halluzinogen"
]




// let random = Math.floor(Math.random()*10)
// console.log(random)

function idiomaEs(){
    idioma = "Español";
    let title = document.getElementById("title")
    let subtitle = document.getElementById("subtitle")
    
    title.innerHTML = ("Es interesante")
    subtitle.innerHTML = ("Descubre I aprende")
}

function idiomaIn(){
    idioma = "English";
    let title = document.getElementById("title")
    let subtitle = document.getElementById("subtitle")
    
    title.innerHTML = ("It's Interesant")
    subtitle.innerHTML = ("Discover and")
}

function idiomaFR(){
    idioma = "Frances";
    let title = document.getElementById("title")
    let subtitle = document.getElementById("subtitle")
    
    title.innerHTML = ("C'est intéressant ?")
    subtitle.innerHTML = ("Découvre et apprends")
}

function idiomaAL(){
    idioma = "Aleman";
    let title = document.getElementById("title")
    let subtitle = document.getElementById("subtitle")
    
    title.innerHTML = ("Ist das interessant?")
    subtitle.innerHTML = ("Entdecke und lerne")
}




function CuriosityEs(){
    let random = Math.floor(Math.random()*14)
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
