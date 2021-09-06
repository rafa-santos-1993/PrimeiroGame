
function iniciaJogo(){

	var url = window.location.search
	
	var nivel_jogo = url.replace("?", "")

	var tempo_segundos = 0

	if(nivel_jogo == 1) { //1 fácil -> 120segundos
		tempo_segundos = 120
	}

	if(nivel_jogo == 2) { //2 normal -> 60segundos
		tempo_segundos = 60
	}
	
	if(nivel_jogo == 3) { //3 difícil -> 30segundos
		tempo_segundos = 30
	}

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos
	var balaoint = document.getElementById('baloes_inteiros')

	// quantidade de balões
	var qtde_baloes = 80
	
	cria_baloes(qtde_baloes)

	contarSegundos()

	var balao_int = qtde_baloes
	var balao_est = 0

	//imprimir qtde baloes inteiros
	document.getElementById('baloes_inteiros').innerHTML = balao_int
	document.getElementById('baloes_estourados').innerHTML = balao_est
	
	//function contando segundos
	function contarSegundos(){
	//var mostra = document.getElementById('res')
	if (segundos > 0){
		segundos --
		document.getElementById('cronometro').innerHTML = segundos
	}
	
}
var segundos = tempo_segundos
setInterval(contarSegundos, 1000)
}

function cria_baloes(qtde_baloes){

	for(var i = 1; i <= qtde_baloes; i++){

		var balao = document.createElement("img")
		balao.src = 'imagens/balao_azul_pequeno.png'
		balao.style.margin = '10px'
		balao.id = 'b'+i

		balao.onclick = function(){estoura(this)}
		document.getElementById('cenario').appendChild(balao)
	}
}

function estoura(e){
	var id_balao = e.id

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'
	
	pontuacao(1)
}

function pontuacao(acao){
	var int = Number(document.getElementById('baloes_inteiros').innerHTML)
	var est = Number(document.getElementById('baloes_estourados').innerHTML)
	
	int = int - acao
	est = est + acao

	document.getElementById('baloes_inteiros').innerHTML = int
	document.getElementById('baloes_estourados').innerHTML = est

	situacao(int)
}

function situacao(int){
	if (int == 0){
		alert('PARABENS!!!! VOCE GANHOU')
		finaliza()
	}
	
}

function finaliza(){
	window.location = "index.html"
}