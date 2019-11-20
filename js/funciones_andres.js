var nProy = 4;
var arrayList;
var lista = [];

var paginas = ["Categorias","MisProyectos","Nuevo_Proyecto","Detalle_Proyecto","Donar","Contactar","Faq"];
var pag, nuevo;
window.onload = function(){
	//Esta parte es necesaria para el header
	pag = String(window.location);
	nuevo = extraerPagina(pag);
	console.log("nuevo " + nuevo);
	if(!addButton(nuevo,paginas)){
		document.getElementById("titulo").style.width = "55%";
	}
	
	//Guardo todos los elemetos que habia en el div que almacena los proyectos
	arrayList = document.getElementById("proyectos").children;
	console.log("a ver " + arrayList);

	//Guardo todos los proyectos en un vector
	for(i=1;i < arrayList.length; i++){
		lista.push(arrayList[i].cloneNode(true));
	}

	
	//Borro todos los proyectos del documento, para despues poder mostrar tan solo los que me interesan
	borrarHijos();
	
	//Como la cantidad de paginas depende de la cantidad de proyectos hay que crear los botones
	CrearBotones();
	
	//Por defecto se mostraran los n primeros elementos, es decir la primera pagina
	let j=0;
	while(j<nProy && j<lista.length){
		document.getElementById("proyectos").insertBefore(lista[j], arrayList[arrayList.length]);
		j++;
	}

	//Cuando haga click en uno de los botones mostrare la parte del vector que le corresponda
	document.getElementById("botPag").addEventListener("click", function(evt){
		id = evt.target.id;

		//Muestro la parte que me interesa del vector de proyectos que me interesa
		let parte = nProy * (id[id.length -1] -1);
		console.log("parte" + parte);
		console.log("lista.length: "+ lista.length);
		
		borrarHijos();
		let i = parte;
		while(i<nProy+parte && i<lista.length){
			document.getElementById("proyectos").insertBefore(lista[i], arrayList[arrayList.length]);
			console.log("i: " + i);
			i++;
		}

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

function CrearBotones(){
	for(i=0; i<lista.length/nProy; i++){
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
}