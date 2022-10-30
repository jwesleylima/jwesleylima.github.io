const detailsDialog = document.querySelector("#details-dialog")
const dialogTitle = detailsDialog.querySelector(".title")
const dialogSubtitle = detailsDialog.querySelector(".subtitle")
const dialogSynopsis = detailsDialog.querySelector(".gibi-synopsis")
const dialogImage = detailsDialog.querySelector(".gibi-image")


const seeMoreDialog = document.querySelector("#see-more-dialog")
const seeMoreGibisGrid = seeMoreDialog.querySelector(".gibis-grid")
const topbarSeeMore = seeMoreDialog.querySelector(".topbar")
const topbarTitleSeeMore = topbarSeeMore.querySelector(".topbar-title")

const searchDialog = document.querySelector("#search-dialog")
const foundItemsSearchCont = document.querySelector("#found-items")
const searchField = document.querySelector("#input-search");

(function(){
	console.log('behaviorManager.js SETTING SEARCH FIELD')
	searchField.addEventListener('input', function() {
		searchAndUpdateFoundItems(this.value)
	})
})()

function closeSearchDialog() {
	searchDialog.open = false
}

function showSearchDialog() {
	searchDialog.open = true
}

function closeDetailsDialog() {
	detailsDialog.open = false
}

function closeSeeMoreDialog() {
	seeMoreDialog.open = false
}

function searchAndUpdateFoundItems(text) {
	const foundGibis = []

	for (let key in DATA) {
		const gibi = DATA[key]
		let { title, subtitle } = gibi

		text = text.toLowerCase()
		title = title.toLowerCase()
		subtitle = subtitle.toLowerCase()

		if (title.includes(text) || subtitle.includes(text)) {
			foundGibis.push([key, gibi])
		}
	}

	loadGibisSearchToElement(foundGibis, foundItemsSearchCont)
	addClickListenersToGibiItems(
		foundItemsSearchCont.querySelectorAll(".gibi-item-search"))
}

function openDetailsDialog(info) {
	detailsDialog.open = true
	dialogTitle.textContent = info.title
	dialogSubtitle.textContent = info.subtitle
	dialogSynopsis.textContent = info.synopsis
	dialogImage.style.backgroundImage = `url("${info.imageURL}")`
}

function openSeeMoreDialog(topic, title, color) {
	const foundGibis = []

	for (let key in DATA) {
		const gibi = DATA[key]
		if (gibi.topic != topic) continue

		foundGibis.push([key, gibi])
	}

	loadGibisToElement(foundGibis, seeMoreGibisGrid)
	addClickListenersToGibiItems(
		seeMoreDialog.querySelectorAll(".gibi-item"))

	topbarTitleSeeMore.textContent = title
	topbarSeeMore.style.backgroundColor = color
	seeMoreDialog.open = true
}

function addClickListenersToSeeMore(browsePage) {
	browsePage.querySelectorAll("i[see-more]")
		.forEach(seeMore => {
			const seeMoreTopic = seeMore.getAttribute("see-more")
			const parentColor = seeMore.parentNode.getAttribute("app-color")
			const title = seeMore.parentNode.getAttribute("title")
			seeMore.addEventListener("click", () => 
				openSeeMoreDialog(seeMoreTopic, title, parentColor))
		})
}

function addClickListenersToGibiItems(elements) {
	elements.forEach(element => {
		element.addEventListener('click', function() {
			const gibiId = element.getAttribute("gibi-id")
			openDetailsDialog(DATA[gibiId])
		})
	})
}
