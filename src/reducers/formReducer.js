const formReducer = (forms =[], action) =>{

    switch (action.type) {
        case 'save':
            return [...forms, { id: Math.random(), json: action.json} ];
        default:
            return forms;     
    }
};

export default formReducer;