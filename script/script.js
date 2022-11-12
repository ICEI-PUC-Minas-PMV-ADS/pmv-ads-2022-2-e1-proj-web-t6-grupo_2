var campoLocalizar = document.querySelector("#pesquisa-campo");
var resLeak = document.querySelector("#resLeak");
var resOk = document.querySelector("#resOk");
var btSubmit = document.querySelector("#submit-pesquisa");
// linha 5
btSubmit.addEventListener("click", function (e) {
	if (campoLocalizar.value.length == 0){
		console.log();
	} else {
		e.preventDefault();					
		console.log(campoLocalizar.value);	
		filtro(campoLocalizar.value, dados);
	}
});
// Linha 15