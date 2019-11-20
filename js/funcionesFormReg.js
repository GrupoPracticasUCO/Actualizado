/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.

    Created on : 11-nov-2019, 18:19:52
    Author     : Oscar
*/

/**
* Expresion regular para comprobar el email en formulario
*/
var mails = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

/**
* Expresion regular para comprobar el dni en formulario
*/
var dni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

/**
* Expresion regular para comprobar el numero de movil en formulario
*/
var num_movil = /^([6]|[7]|[9])[0-9]{8}$/;

var slideIndex = 1;

/**
* Contiene todos los eventos que crea cada campo requerido
* controla que no se introduzca numeros en nombre y apellidos y no se introduzca letras en telefono
*/
function formularioRegistro(){
	document.getElementById("nombre").focus();
	document.getElementById("nombre").addEventListener("keypress",validarNombre);
	document.getElementById("apellido").addEventListener("keypress",validarNombre);
	document.getElementById("movil").addEventListener("keydown",validarTelefono);

	document.getElementsByName("cancelar")[0].addEventListener("click",function(evt){
		document.formregistro.nombre.focus();
	});

	//document.getElementsByName("envio")[0].addEventListener("submit",validarRegistro);
	document.getElementById("form-registro").addEventListener("submit",validarRegistro);
	showSlides(slideIndex);
}

/**
* Valida el formulario de registro
* @param {object} evt - parametro que obtiene el evento que se ha invocado
*/
function validarRegistro(evt){
	correo = document.getElementById("email").value;
	movil = document.getElementById("movil").value;
	id = document.getElementById("dni").value;

	if(!num_movil.test(movil)){
		document.getElementById("movil").style.border = "1px solid  rgba(255,55,61,1)";
		document.getElementById("sp_mo").innerHTML = "Numero incorrecto";
		evt.preventDefault();
	}
	if(!mails.test(correo)){
		document.getElementsByClassName("email")[0].style.border = "1px solid  rgba(255,55,61,1)";
		evt.preventDefault();
	}

	if((id.length !== 0) && (!dni.test(id))){
		document.getElementById("dni").style.border = "1px solid  rgba(255,55,61,1)";
		evt.preventDefault();
	}
}


/**
 * siguiente y anterior, parte de los controles del slider de imagenes en la pagina Registro.html
 * @param n
 */
function plusSlides(n) {
  showSlides(slideIndex += n);
}


/**
 * imagenes de control para el slider de imagenes de la pagina Registro.html
 * @param n
 */
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/**
 * Representa la contruccion del slider
 * @constructor
 * @param {number} n - mostrara la siguiente imagen del slider
 */
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

