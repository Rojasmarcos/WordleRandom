let diccionario=[
    "APPLE",
    "HOUSE",
    "MOUSE",
    "YOUTH",
    "GRADE",
    "FIFTH",
    "DANCE"
];
let palabra=getWord()
let intentos=6;
function getWord(){
    const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
    return palabra
}
window.addEventListener("load", init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button=document.getElementById("guess-button");
button.addEventListener("click", intentar);
function intentar(){
    console.log("Intento!")
}
const input=document.getElementById("guess-input");
const valor=input.value;
function leerIntento(){
    let intento=document.getElementById("guess-input");
    intento=intento.value;
    intento=intento.toUpperCase();
    return intento;
}
for(let i in palabra){
    console.log(palabra[i]);
}
function intentar(){
    const INTENTO=leerIntento();
    const GRID=document.getElementById("grid");
const ROW=document.createElement("div");
ROW.className="row";
for (let i in palabra){
    const SPAN=document.createElement("span");
    SPAN.className="letter";
    if (INTENTO[i]===palabra[i]){ 
       SPAN.innerHTML=INTENTO[i];
       SPAN.style.backgroundColor="#79b851";
    }else if (palabra.includes(INTENTO[i])){ 
       SPAN.innerHTML=INTENTO[i];
       SPAN.style.backgroundColor="#f3c237";
    }else { 
       SPAN.innerHTML=INTENTO[i];
       SPAN.style.backgroundColor="#a4aec4";
    }
    ROW.appendChild(SPAN)
}
GRID.appendChild(ROW)
    if(INTENTO===palabra){
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for(let i in palabra){
        if(INTENTO[i]===palabra[i]){
            console.log(INTENTO[i],"VERDE")
        }else if(palabra.includes(INTENTO[i])){
            console.log(INTENTO[i],"AMARILLO")
        }else{
            console.log(INTENTO[i],"GRIS")
        }
    }
    intentos--
    if(intentos==0){
        terminar("<h1>PERDISTE!😖</h1>");
    }
    
}
function terminar(mensaje){
    const INPUT=document.getElementById("guess-input");
    INPUT.disabled=true;
    button.disabled=true;
    let contenedor=document.getElementById("guesses");
    contenedor.innerHTML=mensaje;
}






 