let card = document.querySelectorAll(".square");
let prueba = document.querySelector(".container")
let colorRandom = 0
let coloresRandom = 0
let colors = [
   "rgb(100, 92, 170)",
   "rgb(194, 16, 16)",
   "rgb(22, 33, 62)",
   "rgb(15, 14, 14)",
   "rgb(158, 178, 59)",
   "rgb(84, 18, 18)"
];
let clickedColor = 0
let numberOfSquares = 6
let arregloColores = []
function generateRandomColors (){
   for(let i = 0;i< numberOfSquares;i++){
      randomColor()
      arregloColores.push(coloresRandom)
   }
   colors = arregloColores
}
generateRandomColors()
function randomColor(){
   coloresRandom= colors[Math.floor(Math.random()*colors.length)]
return coloresRandom
}
function asignaColores(){
   for(let i=0;i<card.length;i++){
      card[i].style.background=colors[i]
   }
}
asignaColores()
function pickColor(){
   colorRandom=colors[Math.floor(Math.random()*numberOfSquares)]
   return colorRandom
}
pickColor()
document.querySelector("#colorDisplay").textContent=colorRandom
let pickedColor=colorRandom
function meEscuchaClick(){
   for (let i = 0; i < card.length; i++) {
      card[i].addEventListener("click", () => {
         let clickedColor = colors[i];
         if (clickedColor == pickedColor) {
            for (let i = 0; i < card.length; i++) {
               card[i].style.background = pickedColor;
            }
            document.querySelector("h1").style.color = pickedColor;
            document.querySelector("#message").textContent = "Correcto";
         } else {
            card[i].style.backgroundColor = "darkgreen";
            document.querySelector("#message").textContent = "Intentalo nuevamente";
         }
      }) 
}}
meEscuchaClick()
function reset(){
   colors = [
      "rgb(100, 92, 170)",
      "rgb(194, 16, 16)",
      "rgb(22, 33, 62)",
      "rgb(15, 14, 14)",
      "rgb(158, 178, 59)",
      "rgb(84, 18, 18)"
   ];
   arregloColores = []

   generateRandomColors()
   asignaColores()
   pickColor()
   randomColor()
   meEscuchaClick()
   pickedColor=colorRandom
   document.querySelector("#colorDisplay").textContent=colorRandom
   document.querySelector("h1").style.color = "white";
}
document.querySelector("#reset").addEventListener("click",()=>{
   reset()
   document.querySelector("#reset").textContent="nuevos colores"
   document.querySelector("#message").textContent=""
})
document.querySelector("#easyButton").addEventListener("click",()=>{
   document.querySelector("#easyButton").classList.add("selected")
   document.querySelector("#hardButton").classList.remove("selected")
   numberOfSquares=3
   card[3].style.display="none"
   card[4].style.display="none"
   card[5].style.display="none"
   generateRandomColors()
   for(let i=0;i<3;i++){
      card[i].style.background=colors[i]
   }
   pickColor ()
   pickedColor=colorRandom
   document.querySelector("#colorDisplay").textContent=colorRandom
})
document.querySelector("#hardButton").addEventListener("click",()=>{
   document.querySelector("#hardButton").classList.add("selected")
   document.querySelector("#easyButton").classList.remove("selected")
   numberOfSquares=6
   card[3].style.display="block"
   card[4].style.display="block"
   card[5].style.display="block"
   generateRandomColors()
   

   pickColor ()
   pickedColor=colorRandom
   document.querySelector("#colorDisplay").textContent=colorRandom
})



/*
for (let i = 0; i < card.length; i++) {
   card[i].style.background = colors[i];
}

document.querySelector("#colorDisplay").textContent = pickColor();
let pickedColor = colors[1];


for (let i = 0; i < card.length; i++) {
   card[i].addEventListener("click", () => {
      let clickedColor = colors[i];
      if (clickedColor == pickedColor) {
         for (let i = 0; i < card.length; i++) {
            card[i].style.background = pickedColor;
         }
         document.querySelector("h1").style.color = pickedColor;
         document.querySelector("#message").textContent = "Correcto";
      } else {
         card[i].style.backgroundColor = "darkgreen";
         document.querySelector("#message").textContent = "Intentalo nuevamente";
      }
   })
}

function pickColor() {
   let colorRandom = (Math.floor(Math.random() *6));
   return pickedColor = colorRandom;
}

pickColor()

//ESTO ME PONE EL COLOR ELEGIDO EN EL DISPLAY COMO PALABRAS
document.querySelector("#colorDisplay").textContent = colorRandom;
//ESTO ME ASIGNA A PICKED COLOR UN COLOR RAMDOM
 pickedColor = colorRandom;

//ESTO ME ESCUCHA DONDE HAGO CLICK Y LUEGO LO COMPARA CON EL COLOR ELEGIDO ANTES
for (let i = 0; i < card.length; i++) {
   card[i].addEventListener("click", () => {
      clickedColor = colors[i];
      if (clickedColor == pickedColor) {
         for (let i = 0; i < card.length; i++) {
            card[i].style.background = pickedColor;
         }
         document.querySelector("h1").style.color = pickedColor;
         document.querySelector("#message").textContent = "Correcto";
         document.querySelector("#reset").textContent = "Play Again?";
      } else {
         card[i].style.backgroundColor = "darkgreen";
         document.querySelector("#message").textContent = "Intentalo nuevamente";
      }
   })
}

// ESTO ME BUSCA OTRO COLOR ALEATORIO PARA PODER ASIGNARLO A OTRO ARREGLO Y MODIFICAR TODA LA VARIABLE DE COLORS
function randomColor() {
   coloresRandom = colors[Math.floor(Math.random() * colors.length)];
   return coloresRandom;
}

function reset() {
   location.reload()

}


document.querySelector("#reset").addEventListener("click", () => {
   reset()
   document.querySelector("#reset").textContent = "Nuevos Colores";
   document.querySelector("#message").textContent = "";
})

document.querySelector("#easyButton").addEventListener("click",()=>{
   document.querySelector("#easyButton").classList.add("selected");
   document.querySelector("#hardButton").classList.remove("selected");
   numberOfSquares = 3
   card[3].style.display = 'none';
   card[4].style.display = 'none';
   card[5].style.display = 'none';
   generateRandomColors()
   for (let i = 0; i < 3; i++) {
      card[i].style.background = colors[i];
   }
   pickColor()
   pickedColor = colorRandom
   document.querySelector("#colorDisplay").textContent = colorRandom;
})
document.querySelector("#hardButton").addEventListener("click",()=>{
   document.querySelector("#hardButton").classList.add("selected");
   document.querySelector("#easyButton").classList.remove("selected");
   card[3].style.display = 'block';
   card[4].style.display = 'block';
   card[5].style.display = 'block';
   numberOfSquares = 6
   generateRandomColors()
   pickColor()
   pickedColor = colorRandom
   document.querySelector("#colorDisplay").textContent = colorRandom;
})
/*
document.querySelector(".boton").addEventListener("click", () => {
   if (document.querySelector(".boton").textContent = "Easy") {
      numberOfSquares = 3;
      card[3].style.display = 'none';
      card[4].style.display = 'none';
      card[5].style.display = 'none';
      
   } else {
      numberOfSquares = 6
      card[3].style.display = 'block';
      card[4].style.display = 'block';
      card[5].style.display = 'block';

   }
   generateRandomColors()
      pickColor()
      pickedColor = colorRandom
      document.querySelector("#colorDisplay").textContent = colorRandom;
})
*/
