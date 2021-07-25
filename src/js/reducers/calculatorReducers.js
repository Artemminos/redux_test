const initialState = {
    output: 0,
    posts: []
};

const calculatorReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_INPUTS':
            return {...state, output: action.output};
        case 'SUBTRACT_INPUTS':
            return {...state, output: action.output};
        case 'ADD_POST':
            return {...state, posts: [...state.posts, action.post]};
        case 'REMOVE_POST':
            return {...state, posts: state.posts.filter(e=>e.id!==action.id)};
        default:
            return state;
    }
};

export default calculatorReducers;
