// Captura das IDs dos elementos HTML
var campoLocalizar = document.querySelector("#pesquisa-campo");
var resLeak = document.querySelector("#resLeak");
var resOk = document.querySelector("#resOk");
var resNoInput = document.querySelector('#no-input');
var btSubmit = document.querySelector("#submit-pesquisa");

// Captura do evento de clique no botão "Verificar"
btSubmit.addEventListener("click", function (e) {
	// Verifica se o campo de pesquisa está vazio
	if (campoLocalizar.value.length == 0){
		// Evita o comportamento padrão do botão
		e.preventDefault();
		// Se estiver vazio, retorna uma mensagem de erro
		error(campoLocalizar.value);
	// Se o campo de pesquisa não estiver vazio, continua o processo
	} else {
		// Evita o comportamento padrão do botão (que é o reload da página)
		e.preventDefault();		
		// Chama a função de filtro
		// console.log(campoLocalizar.value);
		filtro(campoLocalizar.value, dados);
	}
});
// Linha 15