import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: 'AIzaSyA9ohxI3i497gJZGhOD49jDL1QCoE8SISc'
};

firebase.initializeApp(config);
firebase.firestore()//initialize the firestore

export default firebase;