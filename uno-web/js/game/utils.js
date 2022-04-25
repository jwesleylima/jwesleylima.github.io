const gameUtils = {};

(function() {
	function createRoomObject(adminDetails, roomDetails) {
		return { roomDetails, connectedPlayers: [ adminDetails ] }
	}

	gameUtils.createRoomObject = createRoomObject
})()
