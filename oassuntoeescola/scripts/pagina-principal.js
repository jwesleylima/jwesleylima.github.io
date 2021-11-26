ultimasNoticias = [
	{
		'chapeu': 'Tecnologia',
		'titulo': 'Seguir carreira nas áreas de desenvolvimento de software vale a pena? Veja quanto ganha um programador',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-WxgyUiI3sLa0_L45xa5XwHaE7%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	},
	{
		'chapeu': 'Agilize seus estudos',
		'titulo': 'Novo programa para auxiliar nos estudos de equação do segundo grau é lançado',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8swOEGXtiOfX7AHIuZ6S3AHaE6%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	},
	{
		'chapeu': 'Tudo sobre',
		'titulo': 'Você estuda ouvindo músicas usando fones de ouvido? Descubra os prós e contras',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.1yHBx3weisAaZYG0row8cwAAAA%26pid%3DApi&f=1',
		'link-noticia': '#'
	},
	{
		'chapeu': 'Especialistas revelam',
		'titulo': 'Praticar exercícios físicos melhora minha condição cognitiva nos estudos? Descubra como funciona',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.f3PFmlKRaxgpcTVlnBNnWAHaE8%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	}
]

noticiasRecomendadas = [
	{
		'chapeu': 'Você é inteligente?',
		'titulo': 'Descubra quais são os requisitos para ser considerado inteligente',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.R_sHMwWHlHVEoya03gI3KAHaEp%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	},
	{
		'chapeu': 'Questão polêmica',
		'titulo': 'Qual a disciplina mais difícil: Matemática ou Física?',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.r_FYNs9vOwALJ1zRwlo1wgHaEo%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	},
	{
		'chapeu': 'Assunto do momento',
		'titulo': 'Turma da Bagunça se torna a séria de quadrinhos mais vendida do mundo',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OigiUuT29otSXII-Pp23qwHaEK%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	},
	{
		'chapeu': 'Dicas incríveis',
		'titulo': 'Descubra como melhorar seus trabalhos e apresentações',
		'link-imagem': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1P44GKKp_8WmlwuO_nClAAHaEV%26pid%3DApi&f=1',
		'link-noticia': 'https://github.com/jwesleylima'
	}
]

function carregarUltimasNoticias() {
	let divConteudo = document.querySelector('#ultimas-noticias-div')
	divConteudo.innerHTML = ''

	for (let i = 0; i < ultimasNoticias.length; i++) {
		// Obtendo a notícia atual
		noticiaDados = ultimasNoticias[i]
	
		// Criando o link container da notícia
		aNoticia = document.createElement('a')
		aNoticia.classList.add('noticia-link')
		aNoticia.href = noticiaDados['link-noticia']
	
		// Criando o article da notícia
		articleNoticia = document.createElement('article')
		articleNoticia.classList.add('cartao-noticia-normal', 'cartao-noticia-normal-titulo')

		if (i >= 1)
			articleNoticia.style.marginTop = '10px'

		// Criando a div de conteúdo da notícia
		let divContNoticia = document.createElement('div')
		divContNoticia.classList.add('noticia-normal-conteudo')

		// Criando imagem da notícia
		let imagemNoticia = document.createElement('img')
		imagemNoticia.classList.add('imagem-noticia-normal')
		imagemNoticia.alt = `Imagem da notícia: ${noticiaDados['titulo']}`
		imagemNoticia.title = `Imagem da notícia: ${noticiaDados['titulo']}`
		imagemNoticia.src = noticiaDados['link-imagem']

		// Criando chapeu da notícia
		let chapeuNoticia = document.createElement('span')
		chapeuNoticia.classList.add('chapeu-cartao-noticia-normal')
		chapeuNoticia.innerText = noticiaDados['chapeu']

		// Crianho título da notícia
		let tituloNoticia = document.createElement('h3')
		tituloNoticia.innerText = noticiaDados['titulo']

		// Junções
		divContNoticia.appendChild(chapeuNoticia)
		divContNoticia.appendChild(tituloNoticia)
		articleNoticia.appendChild(imagemNoticia)
		articleNoticia.appendChild(divContNoticia)
		aNoticia.appendChild(articleNoticia)

		divConteudo.appendChild(aNoticia)
	}
}

function carregarNoticiasRecomendadas() {
	let divConteudo = document.querySelector('#noticias-recomendadas')
	divConteudo.innerHTML = ''

	for (let i = 0; i < noticiasRecomendadas.length; i++) {
		// Obtendo a notícia atual
		noticiaDados = noticiasRecomendadas[i]
	
		// Criando o link container da notícia
		aNoticia = document.createElement('a')
		aNoticia.classList.add('noticia-link')
		aNoticia.href = noticiaDados['link-noticia']
	
		// Criando article da notícia
		articleNoticia = document.createElement('article')
		articleNoticia.classList.add('cartao-noticia-normal', 'cartao-noticia-recomendada')

		if (i >= 1)
			articleNoticia.style.marginTop = '15px'

		// Criando a div de conteúdo da notícia
		let divContNoticia = document.createElement('div')
		divContNoticia.classList.add('noticia-normal-conteudo', 'noticia-rec-conteudo')

		// Criando imagem da notícia
		let imagemNoticia = document.createElement('img')
		imagemNoticia.classList.add('imagem-noticia-recomendada')
		imagemNoticia.alt = `Imagem da notícia: ${noticiaDados['titulo']}`
		imagemNoticia.title = `Imagem da notícia: ${noticiaDados['titulo']}`
		imagemNoticia.src = noticiaDados['link-imagem']

		// Criando chapeu da notícia
		let chapeuNoticia = document.createElement('span')
		chapeuNoticia.classList.add('chapeu-cartao-noticia-rec')
		chapeuNoticia.innerText = noticiaDados['chapeu']

		// Crianho título da notícia
		let tituloNoticia = document.createElement('h3')
		tituloNoticia.classList.add('titulo-rec')
		tituloNoticia.innerText = noticiaDados['titulo']

		// Junções
		divContNoticia.appendChild(chapeuNoticia)
		divContNoticia.appendChild(tituloNoticia)
		articleNoticia.appendChild(imagemNoticia)
		articleNoticia.appendChild(divContNoticia)
		aNoticia.appendChild(articleNoticia)

		divConteudo.appendChild(aNoticia)
	}
}

function carregarNoticias() {
	carregarUltimasNoticias()
	carregarNoticiasRecomendadas()
}
