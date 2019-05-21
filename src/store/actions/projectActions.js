//to handle any kind of actions related to a proj such as adding or deleting a project
export const createProject = (project) => {
    // this is the functionality of thunk, it allows us to return a function instead of an object
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //initialise getFirestore and store the result in a fn which gives a reference to fb DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        // adding doc to firestore. its an async op and returns a promise
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() =>{
            dispatch({type: 'CREATE_PROJECT', project: project});
        }).catch(err =>{
            dispatch({type:'CREATE_PROJECT_ERROR',err});
        })
        
    }
}