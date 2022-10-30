function loadGibis(browsePage) {
	const topicsArticles = function() {
		const objTopics = {}
		browsePage.querySelectorAll("article.gibis-list-horizontal")
			.forEach(topic => {
				const topicId = topic.id
				topic.innerHTML = ''
				objTopics[topicId] = topic
			})
		return objTopics
	}()

	for (let key in DATA) {
		const gibi = DATA[key]
		const divGibi = document.createElement("div")
		divGibi.classList.add("gibi-item")
		divGibi.setAttribute("gibi-id", key)
		divGibi.style.backgroundImage = `url("${gibi.imageURL}")`
		topicsArticles[gibi.topic].append(divGibi)
	}
}

function loadGibisToElement(gibis, element) {
	element.innerHTML = ''
	gibis.forEach(gibiData => {
		const id = gibiData[0]
		const gibi = gibiData[1]

		const divGibi = document.createElement("div")
		divGibi.classList.add("gibi-item")
		divGibi.setAttribute("gibi-id", id)
		divGibi.style.backgroundImage = `url("${gibi.imageURL}")`
		element.append(divGibi)
	})
}

/*
<div class="gibi-item-search">
		<div class="gibi-item"></div>
		<div class="gibi-info-search">
			<h2 class="gibi-title-search">Turma da Mônica</h2>
			<span class="gibi-subtitle-search">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facere repellat non molestiae animi quas minima hic dolor similique autem modi distinctio, blanditiis commodi voluptatem doloremque optio exercitationem eius nulla!</span>
		</div>
	</div>
*/
function loadGibisSearchToElement(gibis, element) {
	element.innerHTML = ''
	gibis.forEach(gibiData => {
		const id = gibiData[0]
		const gibi = gibiData[1]

		const itemSearch = document.createElement("div")
		itemSearch.setAttribute("gibi-id", id)
		itemSearch.classList.add("gibi-item-search")

		const gibiItem = document.createElement("div")
		gibiItem.classList.add("gibi-item")
		gibiItem.setAttribute("gibi-id", id)
		gibiItem.style.backgroundImage = `url("${gibi.imageURL}")`

		const gibiInfoSearch = document.createElement("div")
		gibiInfoSearch.classList.add("gibi-info-search")

		const gibiTitle = document.createElement("h2")
		gibiTitle.classList.add("gibi-title-search")
		gibiTitle.textContent = gibi.title

		const gibiSubtitle = document.createElement("span")
		gibiSubtitle.classList.add("gibi-subtitle-search")
		gibiSubtitle.textContent = gibi.subtitle

		gibiInfoSearch.appendChild(gibiTitle)
		gibiInfoSearch.appendChild(gibiSubtitle)
		itemSearch.appendChild(gibiItem)
		itemSearch.appendChild(gibiInfoSearch)

		element.append(itemSearch)
	})
}
