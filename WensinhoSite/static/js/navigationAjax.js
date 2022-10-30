(function(){
	function navigateAjax(hash) {
		console.log("navigate AJAX CALLED")

		if (!hash) return
		const link = document.querySelector(`[app-navigate="${hash}"]`)
		if (!link) return

		const destiny = document.querySelector('[app-pages-destiny]')
		const url = "https://jwesleylima.github.io/WensinhoSite/" + hash.substring(1)

		console.log(`Loading page in HASH=${hash} from URL=${url}`)

		fetch(url)
			.then(resp => resp.text())
			.then(html => {
				destiny.innerHTML = html

				if (hash == "#pages/browse.html") {
					loadGibis(destiny)
					addClickListenersToSeeMore(destiny)
					addClickListenersToGibiItems(destiny.querySelectorAll(".gibi-item"))
				} else if (hash == "#pages/menu.html") {
					destiny.querySelector("#procurar").addEventListener('click', event => {
						showSearchDialog()
					})
				}
			})

		checkHash(hash)
	}

	function checkHash(hash) {
		console.log('checkHash')
		if (hash == "#pages/menu.html") {
			const link = document.querySelector("a.topbar-menu-link")
			const icon = document.querySelector(".topbar-menu-icon")
			link.href = "https://jwesleylima.github.io/WensinhoSite/#pages/browse.html"
			icon.classList.toggle("fa-bars")
			icon.classList.toggle("fa-xmark")
			link.setAttribute("app-navigate", "https://jwesleylima.github.io/WensinhoSite/#pages/browse.html")

		} else if (hash == "#pages/browse.html") {
			const icon = document.querySelector(".topbar-menu-icon")
			const link = document.querySelector("a.topbar-menu-link")
			icon.classList.toggle("fa-bars")
			icon.classList.toggle("fa-xmark")
			link.href = "https://jwesleylima.github.io/WensinhoSite/#pages/menu.html"
			link.setAttribute("app-navigate", "https://jwesleylima.github.io/WensinhoSite/#pages/menu.html")
		}
	}

	function setUpLinks() {
		console.log("setUpLinks")
        document.querySelectorAll('[app-navigate]')
            .forEach(link => {
                link.href = link.attributes['app-navigate'].value
            })
    }

    function initialNavigation() {
    	console.log("initialNavigation")
        if (location.hash) {
            navigateAjax(location.hash)
        } else {
            const firstLink = document.querySelector('[app-default-page]')
            navigateAjax(firstLink.hash)
        }
    }

    window.onhashchange = event => navigateAjax(location.hash)
    
    setUpLinks()
    initialNavigation()

    console.log(`NavigationAjax CONFIGURED`)
})()