/*
 * Organiza e gerencia um sistema de slider
 * Usa a propriedade 'background-image' para exibir os slides
 * O primeiro item da lista de imagens será o background padrão
 */
class BackgroundSlider {
	constructor(elem, imagesList, delay = 3000) {
		this.currentIndex = 0
		this.elem = elem
		this.imagesList = imagesList
		this.delay = delay
	}

	play(randomOrder = true) {
		setInterval(() => {
			if (randomOrder)
				this.getRandomSlide()
			else
				this.nextSlide()
			
			this.updateCurrentSlide()
		}, this.delay)
	}

	nextSlide() {
		this.currentIndex = (this.currentIndex + 1)
			 % this.imagesList.length
	}

	getRandomSlide() {
		let randomIndex
		const min = 0
		const max = this.imagesList.length
		do {
			randomIndex = Math.floor(Math.random() * (max - min) + min)
		} while (randomIndex == this.currentIndex)
		this.currentIndex = randomIndex
	}

	updateCurrentSlide() {
		const slidePath = 'assets/image/'
			+ this.imagesList[this.currentIndex]
		this.elem.style.backgroundImage = `url('${slidePath}')`
	}
}

// ############ MAIN ##############
const mainSection = document.querySelector('section.main')
const imagesList = [
	'piscina2.jpeg',
	'piscina.jpeg',
	'restaurante.jpeg'
]
const slider = new BackgroundSlider(mainSection, imagesList)
slider.play(false)
