const initialState = {
    initialText: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { ...state, initialText: action.payload };
        default:
            return state;
    }
};
