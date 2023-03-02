// Se o que o usuário digitou for válido, o sistema retorna uma mensagem positiva de vazamento de informação, caso contrário, retorna uma mensagem de alívio.
function filtro(valor, arr){
	// Poe o valor em caixa baixa
	valor = valor.toLowerCase();
	// Varredura no array procurando o valor digitado pelo usuário
	for(var i = 0; i < arr.length; i++) {
		// Se o valor digitado pelo usuário for igual a algum valor do array, o sistema retorna uma mensagem de vazamento de informação
		if (arr[i].nome == valor){
			// Limpando o campo da mensagem atual
			clearFields();
			// Adicionando a nova mensagem
			resLeak.innerHTML = "<p>Péssimo! Você encontrou um vazamento de informação!</p>";
			resLeak.innerHTML += '<ul>';
			resLeak.innerHTML += '<li>' + arr[i].site + '</li>';
			resLeak.innerHTML += '<li>' + arr[i].senha + '</li>';
			resLeak.innerHTML += '</ul>';
			console.log(arr[i]);
			break;
		// Se o valor digitado pelo usuário não for igual a nenhum valor do array, o sistema retorna uma mensagem de alívio
		} else {	
			// console.log(arr[i]);
			// Limpando o campo da mensagem atual
			clearFields();
			// Adicionando a nova mensagem
			resOk.innerHTML = "<p>Boas notícias! Nenhum vazamento de informação foi encontrado!</p><p> " + valor + ".</p>";
		};
	};
};

// Caso o usuário não digite mas clique no botão "Verificar", o sistema retorna uma mensagem de erro
function error(e){
	if (e == ""){
		// Limpando o campo da mensagem atual
		clearFields();
		// Adicionando a mensagem de erro
		resNoInput.innerHTML = "<p>Ops! Informe os dados.</p>";
	};
};
// https://warcontent.com/array-find-javascript/

//Function who clear result fields
function clearFields(){
	resNoInput.innerHTML = "";
	resLeak.innerHTML = "";
	resOk.innerHTML = "";
}
