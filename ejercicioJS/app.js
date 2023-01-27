/*
element
elements.... con una s devuelve un array
*/


//creo una variable donde metere los datos
var app={};
//ahora el callback o funcion donde definiria que haria
//si tuviera los datos
var miLlamada=function(datos){//js moderno seria: var miLlamada=datos=>{}
   console.log(datos);
   app.animales=datos;//aqui meto los datos en la funcion app
   var html="";
   html+=`<h1>Lista nimales</h1>`;
   //una funcion por caDA elemento de mi mascota
   //js antiguo: app.animales.map(function(animales){})
   //js moderno:
   app.animales.map(animal=>{
    //por cada animal pues pondre imagen, +=para sumarle
    html+="<h3>Nombre: "+animal.especie+"</h3> "+"<img src='"+animal.imagen+"'></img>";
    html+="<h4>Carnivoro:"+animal.dieta.carnivoro+"<br> </h4>"
    html+="<hr>";
    })
   document.getElementById("resultado").innerHTML=html;//meto la variable
};


document.getElementById("crear").addEventListener("click",crear);
function crear(){
    sessionStorage.setItem("usuario","email");
}
function mostrar(){
    alert (document.cookie);
}

/*
function crearCooki(){
    nombre =prompt("Escribe el nombre de la cookie");
    valor =prompt("escribe el valor de la cookie");
}
*/





