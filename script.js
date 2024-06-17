function alterarConteudoIframe(url) {
	document.getElementById('contentFrame').src = url;
}

function fecharNavbar() {
	var navbar = document.getElementById('navbar');
	navbar.style.display = "none";
}
document.getElementById('automacaoIndustrialBtn').addEventListener('click', function() {
	alterarConteudoIframe('Automação Industrial/automacao-industrial.html');
	fecharNavbar();
});
document.getElementById('bancoDeDadosBtn').addEventListener('click', function() {
	alterarConteudoIframe('Banco de Dados/banco-de-dados.html');
	fecharNavbar();
});
document.getElementById('linguagemProgramacaoBtn').addEventListener('click', function() {
	alterarConteudoIframe('Linguagem de Programação/linguagem-programacao.html');
	fecharNavbar();
});
document.getElementById('cienciaDadosBtn').addEventListener('click', function() {
	alterarConteudoIframe('Ciência de Dados/ciencia-dados.html');
	fecharNavbar();
});
document.getElementById('desenvolvimentoWebBtn').addEventListener('click', function() {
	alterarConteudoIframe('Desenvolvimento Web/desenvolvimento-web.html');
	fecharNavbar();
});
document.getElementById('pagInicialBtn').addEventListener('click', function() {
	alterarConteudoIframe('Principal/principal.html');
	fecharNavbar();
});
document.getElementById('toggleNavBtn').addEventListener('click', function() {
	var navbar = document.getElementById('navbar');
	if (navbar.style.display === "block") {
		navbar.style.display = "none";
	} else {
		navbar.style.display = "block";
	}
});