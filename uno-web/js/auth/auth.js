const loginApi = {};

(function() {
  const auth = firebase.auth()

  function createUser(email, password) {
    return new Promise((resolve, reject) => {
      auth.createUserWithEmailAndPassword(email, password).then(info => {
        resolve(info)
      }).catch(err => {
        reject({ errCode: err.code, errMsg: err.message })
    })})
  }

  function loginUser(email, password) {
    return new Promise((resolve, reject) => {
      auth.signInWithEmailAndPassword(email, password).then(() => {
        resolve()
      }).catch(err => {
        reject({ errCode: err.code, errMsg: err.message })
    })})
  }

  function logoutUser() {
    return new Promise((resolve, reject) => {
      auth.signOut().then(() => {
        resolve()
      }).catch((error) => {
        reject({ errCode: err.code, errMsg: err.message })
    })})
  }

  function deleteAccount() {
    return new Promise((resolve, reject) => {
      user = auth.currentUser
      user.delete().then(resolve()).catch(err => reject({ errCode: err.code, errMsg: err.message }))
    })
  }

  function sendEmailVerification() {
    let user = auth.currentUser
    if (user == null) return null
    return new Promise((resolve, reject) => {
      user.sendEmailVerification().catch(err => {
        reject({ errCode: err.code, errMsg: err.message })
      })
    })
  }

  function isLogged() {
    return auth.currentUser != null
  }

  loginApi.createUser = createUser
  loginApi.loginUser = loginUser
  loginApi.sendEmailVerification = sendEmailVerification
  loginApi.logoutUser = logoutUser
  loginApi.isLogged = isLogged
})()
