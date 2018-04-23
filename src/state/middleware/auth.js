import firebase from 'state/firebase'
import { replace } from 'redux-json-router'

const authMiddleware = store => next => action => {
	
	// TODO: Error: Actions must be plain objects. Use custom middleware for async actions.
	
	// https://firebase.google.com/docs/auth/web/manage-users?authuser=0
	// firebase.auth().onAuthStateChanged((user) => {
	// 	if (user) {
	// 		next()
	// 	}
	// 	else {
	// 		replace('/login')
	// 		next()
	// 	}
	// })
}

export default authMiddleware