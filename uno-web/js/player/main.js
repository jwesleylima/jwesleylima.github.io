const playerUtils = {};
let userData = {};

(function() {
	function getPlayerData() {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) return null
			userData = user
		})
	}

	getPlayerData()
})()