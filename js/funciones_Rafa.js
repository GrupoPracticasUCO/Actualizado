var paginas = ["Categorias","MisProyectos","Nuevo_Proyecto","Detalle_Proyecto","Donar","Contactar","Faq"];

var nuevo;
window.onload = function(){
  pag = String(window.location);// se queda
	nuevo = extraerPagina(pag);

	if(!addButton(nuevo,paginas)){
		document.getElementById("titulo").style.width = "55%";
		var remover = document.getElementsByClassName("cab-der");
		document.getElementById("cabecera").removeChild(remover[0]);
	}
  if (nuevo=="acceder"){
    document.getElementById("EnviarAcceder").addEventListener("click",function(){
      contrasena=document.getElementById("ContrasenaAcceder").value;
      fallo=validarContrasena(contrasena);
      if (fallo=="") {
        return true;
      }else{
        alert(fallo);
        return false;
      }
    });
  }
}
function validarContrasena(input){
  if (input.length==0) {
    return "Debe introducir una contraseña\n"
  }else if (input.length<8) return "Contraseña demasidado corta\n";
  else if(input.length>50) return "Contraseña demasiado larga\n";
  else return "";
}
