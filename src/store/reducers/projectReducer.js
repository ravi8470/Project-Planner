const initState = {
    projects: [
        {id: '1', title:'sdf sdfsdf', content:'sdkfjsdfj sdklfjsdj'},
        {id: '2', title:'sdfds 32324r', content:'sdkfjsdfj sdklfjsdjsdkfjsdfj sdklfjsdj'},
        {id: '3', title:'32 4522', content:'sdkfjsdfj sdk'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT': 
            console.log('created project',action.project);
            break;
    }
    return state;
}

export default projectReducer