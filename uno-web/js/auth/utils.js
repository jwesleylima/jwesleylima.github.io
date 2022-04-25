const authUtils = {};

(function() {
	function getAccountsReferencePath(uid) {
		return `/accounts/${uid}/`
	}

	function createUserInDatabase(userData) {
		const { uid } = userData
		const userRef = firebase.database().ref()
		firebase.database().ref('accounts/' + uid).set(userData)
	}

	function createNewUser(displayName, photoURL, email, password) {
		return new Promise((resolve, reject) => {
			loginApi.createUser(email, password)
			.then(info => {
				const uid = info.user.uid
				createUserInDatabase({ displayName, photoURL, email, uid })
				resolve()
			})
			.catch(err => reject({ errCode: err.code, errMsg: err.message }))
		})
	}

	authUtils.createNewUser = createNewUser
})()