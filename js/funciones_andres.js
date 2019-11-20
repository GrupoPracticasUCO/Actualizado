var nbotones = 4;
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
//	console.log(arrayList);

	for(i=1;i < arrayList.length; i++){
		lista.push(arrayList[i].cloneNode(true));
	}
//	console.log(arrayList.length);
	borrarHijos();

//	let op = getElementById("botPag").value;
	for(i=0; i<lista.length/nbotones; i++){
		let Bname = i+1;
		let boton = document.createElement("button");
		boton.innerText = Bname;
		let div_bot = document.getElementById("botPag");
		
		//Le asigno un name a los botones
		let name_attribute = document.createAttribute("name");
		name_attribute.value = "Bpaginado_"+Bname;
		boton.setAttributeNode(name_attribute);

		//Y un id
		let id_attribute = document.createAttribute("id");
		id_attribute.value = "Bpaginado_"+Bname;
		boton.setAttributeNode(id_attribute);
		

		let valor_attribute = document.createAttribute("valor");
		valor_attribute.value = ""+Bname+"";
		boton.setAttributeNode(valor_attribute);
		
		
		div_bot.appendChild(boton);
	}

	document.getElementById("botPag").addEventListener("click", function(evt){
		id = evt.target.id;
		console.log(id);
	});

	/*document.getElementById("").addEventListener("mouseover",function(){

	});*/
}

function borrarHijos(){
	var oldproy = document.getElementsByClassName("proyecto");
	for(i=oldproy.length-1; i>=0; i--){
		document.getElementById("proyectos").removeChild(oldproy[i]);
	}

}