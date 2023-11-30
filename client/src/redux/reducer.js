const initialState = {
  initialText: 'Hello',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return { ...state, initialText: action.payload };
    default:
      return state;
  }
};
