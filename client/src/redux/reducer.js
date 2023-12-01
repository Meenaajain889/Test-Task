const initialState = {
    initialText: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, initialText: action.payload };

        case 'ADD_DATA':
            return { ...state, initialText: action.payload };

        default:
            return state;
    }
};
