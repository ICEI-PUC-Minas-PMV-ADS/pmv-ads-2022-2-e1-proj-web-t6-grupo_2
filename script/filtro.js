function filtro(valor, arr){
	valor = valor.toLowerCase();
	for(var i = 0; i < arr.length; i++) {
		if (arr[i].nome == valor){
			resOk.innerHTML = "";
			resLeak.innerHTML = 'Encontramos vazamentos de dados:<BR>';
			resLeak.innerHTML += '<ul>';
			resLeak.innerHTML += '<li>' + arr[i].site + '</li>';
			resLeak.innerHTML += '<li>' + arr[i].senha + '</li>';
			resLeak.innerHTML += '</ul>';
			console.log(arr[i]);		
			break;
		} else {	
			console.log(arr[i]);
			resLeak.innerHTML = ""
			resOk.innerHTML = "<i>Tudo OK:</i> " + valor;
			
		};
	};
};	



// https://warcontent.com/array-find-javascript/