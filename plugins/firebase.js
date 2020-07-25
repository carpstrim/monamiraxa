import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const config = {
  apiKey: 'AIzaSyCTGtWTZoCPzURVzrFjeeb9oT1aGrJR5to',
  authDomain: 'monamiraxa-41729.firebaseapp.com',
  databaseURL: 'https://monamiraxa-41729.firebaseio.com',
  projectId: 'monamiraxa-41729',
  storageBucket: 'monamiraxa-41729.appspot.com',
  messagingSenderId: '1098632777675',
  appId: '1:1098632777675:web:f57f63cbe65433ef49b04e'
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const functions = firebase.functions()

export default function (app, inject) {
  inject('firestore', firestore) // this.$firestore
  inject('functions', functions)
}
