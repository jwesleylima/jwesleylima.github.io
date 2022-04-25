const gameApi = {};

(function() {
	function getGameReferencePath(gameId) {
		return `/games/${gameId}/`
	}

	function createRoom(roomDetails) {
		const playerDetails = { playerId: userData.uid, playerAdmin: true }

		const room = gameUtils.createRoomObject(playerDetails, roomDetails)
		const gameId = firebase.database().ref().child('games').push().key
		const gameRef = firebase.database().ref()
		const updates = {}

		// Updates the node containing the games by adding a new
		updates[getGameReferencePath(gameId)] = room

		return new Promise((resolve, reject) => {
			gameRef.update(updates)
			.then(resolve())
			.catch(err => reject({ errCode: err.code, errMsg: err.message }))
		})
	}

	gameApi.createRoom = createRoom
})()
