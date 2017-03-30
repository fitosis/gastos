/*js app gastos*/

// =======variables
var lista = document.getElementById("lista"),
	tareaInput = document.getElementById("tareaInput"),
	precioInput = document.getElementById("precioInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

// ======Funciones
var agregarTarea = function(){
	var tarea = tareaInput.value, //con esto rescato el texto del input
		precio = precioInput.value, //con esto rescato el texto del input
		nuevaTarea = document.createElement("li"), //con esto guardo en la variable nuevaTarea una li
		enlace1 = document.createElement("a"), //creo el enlace dentro de la variable enlace
		enlace2 = document.createElement("a"), //creo el enlace dentro de la variable enlace
		contenidoTarea = document.createTextNode(tarea); //rescata el texto del input (q esta en tarea) y lo guarda en la var contenido
		//contenidoPrecio = document.createTextNode("$" + precio); //rescata el texto del input (q esta en tarea) y lo guarda en la var contenido
		contenidoPrecio = document.createTextNode(precio); //rescata el texto del input (q esta en tarea) y lo guarda en la var contenido
		

		//validación para que tengan contenido los input
        if(tarea === "" && precio === ""){
            tareaInput.setAttribute("placeholder", "Agrega un gasto valido"); //este es el id del input y le agrega este texto
			tareaInput.className = "error"; // y también le agrega esta clase
            precioInput.setAttribute("placeholder", "Agrega un precio valido"); //este es el id del input y le agrega este texto
			precioInput.className = "error"; // y también le agrega esta class
            return false;
        }else if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega un gasto valido"); //este es el id del input y le agrega este texto
			tareaInput.className = "error"; // y también le agrega esta clase
			return false;
        }else if(precio === "") {
			precioInput.setAttribute("placeholder", "Agrega un precio valido"); //este es el id del input y le agrega este texto
			precioInput.className = "error"; // y también le agrega esta class
            return false;
        }
        

		//Agregamos el contenido al enlace
		enlace1.appendChild(contenidoTarea);
		enlace2.appendChild(contenidoPrecio);
		//A este enlace le agregamos el atributo href
		enlace1.setAttribute("href", "#");
		enlace2.setAttribute("href", "#");

		//Agregar la clase al segundo enlace ".precio"
		enlace2.className = "precio";

		//Agregamos el enlace (a) a la var nuevaTarea (li)
		nuevaTarea.appendChild(enlace1);
		nuevaTarea.appendChild(enlace2);
		//Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		//Para borrar el contenido despues de agregar una nueva tarea
		tareaInput.value = "";
		precioInput.value = "";

		//Este nuevo for es para poder borrar los elementos que se fueron creando, aca los va recorriendo en tiempo real
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this); //este solo sirve para los elementos nuevos, los antiguos tienen que ser desde el for de abajo
			});
		}

		

};

//validación de número
function validarSiNumero(numero){
  if (!/^([0-9])*$/.test(numero))
    alert("El valor " + numero + " no es un número");
}
		/*========*/
		/*desde aca no se si funciona*/
		/*========*/
			var suma = 0;
			var contenidoPrecio = [];

			/*contenidoPrecio.push(4);
			contenidoPrecio.push(5);
			contenidoPrecio.push(3);*/
			//plata.push(6);
			//plata.push(3);

			for(var i = 0; i < contenidoPrecio.length; i++) {
				suma += contenidoPrecio[i];
			}


			function howMany(selectObject) {
			  var numberSelected = 0;
			  for (var i = 0; i < selectObject.options.length; i++) {
			    if (selectObject.options[i].selected) {
			      numberSelected++;
			    }
			  }
			  return numberSelected;
			}
		/*========*/
		/*desde aca no se si funciona*/
		/*========*/
/*

		for(var i = 0; i < lista.children.length; i++) {
			s = lista.children
			suma2 += lista.children[i];
		}*/

/*for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", function(){
		plata.push[4];
	});
}

/*var arreglo = [3 , 5, 66, 98, 33];
var suma = 0;

arreglo.push(70);

for(var i = 0; i < arreglo.length; i++)
{
  suma += arreglo[i];
}

document.write("La suma es: " + suma);*/


//Funciones para comprobar los imput esten con información
var comprobarInputGasto = function(){
	tareaInput.className = "";
	tareaInput.setAttribute("placeholder", "Agrega tu Gasto");
};

var comprobarInputPrecio = function(){
	precioInput.className = "";
	precioInput.setAttribute("placeholder", "Agrega el Precio");
};

//funcion para eliminar
var eleminarTarea = function(){
	this.parentNode.removeChild(this);
};

// ========Eventos

// Agregar eventos
btnNuevaTarea.addEventListener("click", agregarTarea);

// Comprobar Input
tareaInput.addEventListener("click", comprobarInputGasto);
precioInput.addEventListener("click", comprobarInputPrecio);

//Borrando elementos de la lista
for (var i = 0; i <= lista.children.length -1; i++) {
	lista.children[i].addEventListener("click", eleminarTarea); //Acá hace un recorrido por todos los li creados, por eso el for
}
