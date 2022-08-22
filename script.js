let sliderElement = document.querySelector("#slider")
let botaoElement = document.querySelector("#botao")

let tamanhoSenha = document.querySelector("#valor")
let senha = document.querySelector("#senha")

let containerSenha =document.querySelector("#containerSenha")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = ""

tamanhoSenha.innerHTML = sliderElement.value

slider.oninput = function() {
	tamanhoSenha.innerHTML = this.value
}

function gerarSenha() {
	let sen = ""
	for(let x = 0, n = charset.length; x < sliderElement.value; x++){
		sen += charset.charAt(Math.floor(Math.random() * n))
	}

	containerSenha.classList.remove('oculta')
	senha.innerHTML = sen
	novaSenha = sen
}

function copiarSenha() {
	alert('Senha copiada com sucesso')
	navigator.clipboard.writeText(novaSenha)
}
