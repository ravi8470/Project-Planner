import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux'

//for syncing auth related state data
import {firebaseReducer} from 'react-redux-firebase'
//this is a pre-made reducer for syncing firestore data with our state in the background
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;