import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCFXmX-8s_QOlDC0uAkW1NgjyGpEKsF2KU',
  authDomain: 'react-zzaria-jw.firebaseapp.com',
  databaseURL: 'https://react-zzaria-jw.firebaseio.com',
  projectId: 'react-zzaria-jw',
  storageBucket: 'react-zzaria-jw.appspot.com',
  messagingSenderId: '1077009323103',
  appId: '1:1077009323103:web:eca6d8ee6d5cb5290977ea',
  measurementId: 'G-3HV3MG1L9Z'
}

firebase.initializeApp(config)

export default firebase
