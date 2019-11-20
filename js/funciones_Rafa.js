window.onload = function(){
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
function validarContrasena(input){
  if (input.length==0) {
    return "Debe introducir una contraseña\n"
  }else if (input.length<8) return "Contraseña demasidado corta\n";
  else if(input.length>50) return "Contraseña demasiado larga\n";
  else return "";
}
