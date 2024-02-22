let palabras = Array("informatica","computadora", "impresora", "teclado", "mouse", "monitor",
                        "virus", "programador", "router", "software", "ingenieria", "laptop",
                        "aplicacion", "direccion", "codigo", "internet","servidor", "pagina",
                        "administrador", "usuario", "telefono", "archivo", "procesador",
                        "java", "dinosaurio", "jirafa","patineta");

let palabraEs = ""; //palabra escondida
let palabraAdiv = ""; // palabra adivina
let vidas = 7;

const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');
document.getElementById("boton").addEventListener("click", comprobar);

iniciar();

function iniciar(){

    palabraEs = palabras[Math.floor(Math.random() * palabras.length)];
    for(let i=0; i< palabraEs.length; i++){
        palabraAdiv = palabraAdiv + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdiv;

}

function comprobar(){
    let letra = document.getElementById("letra").value.toLowerCase();
    palabraEs = palabraEs.toLocaleLowerCase();
    let nuevo = "";
    for( let i=0; i<palabraEs.length; i++){
        if(letra == palabraEs[i]){
            nuevo = nuevo + letra + " ";
        }else{
            nuevo = nuevo + palabraAdiv[i * 2] + " ";
        }
    }
    if(nuevo == palabraAdiv){
        vidas--;
        document.getElementById("vida").innerHTML = "El numero de vidas que quedan son: " + vidas;
    }


    palabraAdiv = nuevo;
    document.getElementById("frase").innerHTML= palabraAdiv;

    if(vidas == 0){
        alert("Perdiste JAJA");
    }
    if(palabraAdiv.search("_") == -1){
        alert("Ganaste xd");
    }

    document.getElementById("letra").value="";
    document.getElementById("letra").focus();

    dibujo();
}

//DIBUJAR
function dibujo (){
    var canvas = document.getElementById('lienzo');
    if(canvas.getContext){
        var ctx = canvas.getContext('2d');


            // Dibuja la base
            ctx.beginPath();
            ctx.moveTo(30, 200);
            ctx.lineTo(30,10);
            ctx.lineTo(150,10);
            ctx.lineTo(150,20);
            ctx.stroke();

        if(vidas <= 5){ //dibujar cabeza

            ctx.beginPath();
            ctx.arc(150,40, 20, 0, Math.PI * 2);
            ctx.stroke();

        }

        if(vidas <= 4){ // dibujar cuerpo

            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(150,100);
            ctx.stroke();

        }

        if(vidas <=3){ // dibujar brazo izquierdo

            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(130,100);
            ctx.stroke();
        }

        if(vidas <= 2){ // dibujar brazo derecho
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(170,100);
            ctx.stroke();

        }
        if(vidas <= 1){ // dibujar pierna derecha
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(170,130);
            ctx.stroke();
        }
        if(vidas == 0){ // dibujar pierna izquierda
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(130,130);
            ctx.stroke();
        }




        

        

        

        

        
    }
}