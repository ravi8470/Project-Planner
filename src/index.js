import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import compose to combine several storeEnhancers
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

//to access firestore and firebase apis in action creators
import {reduxFirestore ,getFirestore} from 'redux-firestore';
import {reactReduxFirebase ,getFirebase} from 'react-redux-firebase';

//this needs to be passed to the reduxFirestore and reactReduxFirebase store enhancers so that getFirestore and getFirebase know what to connect to when used in action creator.
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true})
));

store.firebaseAuthIsReady.then( () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})

