


function addButton(nuevo,pagina){
	var found = false;
	
	var contenido = document.createTextNode("Mi cuenta / Registrarse");
	var a_element = document.createElement("a");
	a_element.appendChild(contenido);
	var h_ref = document.createAttribute("href");
	h_ref.value = "#";
	var id_a = document.createAttribute("id");
	id_a.value = "acceso";
	a_element.setAttributeNode(id_a);
	a_element.setAttributeNode(h_ref);
	var div_element = document.createElement("div");
	div_element.appendChild(a_element);

	for (var i = 0; i < pagina.length && !found; i++) {
		if(nuevo === pagina[i]){
			document.getElementsByClassName("cab-der")[0].appendChild(div_element);
			found = true;
		}
	}
	return found;
}

function extraerPagina(cadena){
	pos = cadena.lastIndexOf("/");
	pos2 = cadena.lastIndexOf(".");
	pos3 = pos2 - pos -1;	
	cad = cadena.substr(pos+1,pos3);
	return cad;
}
