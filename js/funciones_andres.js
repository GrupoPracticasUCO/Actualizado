var arrayList;
var lista = [];

var paginas = ["Categorias","MisProyectos","Nuevo_Proyecto","Detalle_Proyecto","Donar","Contactar","Faq"];
var pag, nuevo;
window.onload = function(){
    pag = String(window.location);
	nuevo = extraerPagina(pag);
	console.log("nuevo " + nuevo);
	if(!addButton(nuevo,paginas)){
		document.getElementById("titulo").style.width = "55%";
    }
    
    arrayList = document.getElementById("proyectos").children;
    console.log("a ver " + arrayList);
//    console.log(arrayList);

    for(i=1;i < arrayList.length; i++){
        lista.push(arrayList[i].cloneNode(true));
    }
    console.log(arrayList.length);
    borrarHijos();
    console.log("--> despues" + arrayList.length);

    document.getElementById("").addEventListener("mouseover",function(){

    });
}

function borrarHijos(){
    var oldproy = document.getElementsByClassName("proyecto");
    for(i=oldproy.length-1; i>=0; i--){
        document.getElementById("proyectos").removeChild(oldproy[i]);
    }

}