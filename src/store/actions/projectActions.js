//to handle any kind of actions related to a proj such as adding or deleting a project
export const createProject = (project) => {
    // this is the functionality of thunk, it allows us to return a function instead of an object
    return (dispatch, getState) => {
        //make async call to db
        dispatch({type: 'CREATE_PROJECT', project: project})
    }
}