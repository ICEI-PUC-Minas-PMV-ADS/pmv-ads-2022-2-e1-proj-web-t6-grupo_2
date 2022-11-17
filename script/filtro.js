function filtro(valor, arr){
	valor = valor.toLowerCase();
	for(var i = 0; i < arr.length; i++) {
		if (arr[i].nome == valor){
			resOk.innerHTML = "";
			resLeak.innerHTML = "<p>Péssimo! Você encontrou um vazamento de informação!</p>";
			resLeak.innerHTML += '<ul>';
			resLeak.innerHTML += '<li>' + arr[i].site + '</li>';
			resLeak.innerHTML += '<li>' + arr[i].senha + '</li>';
			resLeak.innerHTML += '</ul>';
			console.log(arr[i]);		
			break;
		} else {	
			console.log(arr[i]);
			resLeak.innerHTML = ""
			resOk.innerHTML = "<p>Boas notícias! Zero brecha: </p><p> " + valor + ".</p>";			
		};
	};
};	



// https://warcontent.com/array-find-javascript/