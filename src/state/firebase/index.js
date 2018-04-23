import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyB-fZPvOJWLaHlrvqYBY8WomCdM2eWZjLw',
  authDomain: 'brew-tracker-822bf.firebaseapp.com',
  databaseURL: 'https://brew-tracker-822bf.firebaseio.com',
  projectId: 'brew-tracker-822bf',
  storageBucket: 'brew-tracker-822bf.appspot.com',
  messagingSenderId: '612077944225'
})

// Initialize Cloud Firestore through Firebase
firebase.firestore()

export default firebase
