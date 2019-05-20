import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: 'AIzaSyA9ohxI3i497gJZGhOD49jDL1QCoE8SISc',
    projectId: 'project-planner-a8004',
    authDomain: "project-planner-a8004.firebaseapp.com",
    databaseURL: "https://project-planner-a8004.firebaseio.com",
    storageBucket: "project-planner-a8004.appspot.com",
    // messagingSenderId: "sender-id",
    // appID: "app-id",
};

firebase.initializeApp(config);
firebase.firestore()//initialize the firestore

export default firebase;