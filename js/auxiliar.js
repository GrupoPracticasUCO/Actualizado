var mails = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
var dni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;
var num_movil = /^([6]|[7]|[9])[0-9]{8}$/;

if(nuevo === "Registro"){
		document.getElementById("nombre").focus();
		document.getElementById("nombre").addEventListener("keypress",validarNombre);
		document.getElementById("apellido").addEventListener("keypress",validarNombre);
		document.getElementById("movil").addEventListener("keydown",validarTelefono);
		
		document.getElementsByName("cancelar")[0].addEventListener("click",function(evt){
			document.formregistro.nombre.focus();
		});

		document.getElementsByName("envio")[0].addEventListener("submit",function(evt){
			correo = document.getElementById("email").value;
			movil = document.getElementById("movil").value;
			id = document.getElementById("dni").value;

			if(!num_movil.test(movil)){
				document.getElementById("movil").style.border = "1px solid red";
				document.getElementById("sp_mo").innerHTML = "Numero incorrecto";
				evt.preventDefault();
			}
			if(!mails.test(correo)){
				document.getElementsByClassName("email")[0].style.border = "1px solid red";
				evt.preventDefault();
			}

			if((id.length !== 0) && (!dni.test(id))){
				document.getElementById("dni").style.border = "1px solid red";
				evt.preventDefault();
			}
		});
		showSlides(slideIndex);
	}


function validarNombre(e){ //para que funcione con firefox y chrome
    var evento = e||window.event;
    if(evento.which >= 48 && evento.which <= 57){
        evento.preventDefault();   //anula accion del evento
    }
}

function validarTelefono(e){ //para que funcione con firefox y chrome
    var evento = e||window.event;
	if((evento.which >= 0 && evento.which < 8)|| (evento.which >= 9 && evento.which <= 34) || (evento.which == 38) || (evento.which >= 40 && evento.which <= 47) || (evento.which >= 58)){
		evento.preventDefault(); 
	}
	document.getElementById("sp_mo").innerHTML = "";
	document.getElementById("movil").style.border = "1px solid gray";
}

