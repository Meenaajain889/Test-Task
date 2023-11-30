import axios from 'axios';

export const fetchData = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:4000/get');
        dispatch({
            type: "UPDATE_DATA",
            payload: response.data.value,
        });
    }
};

export const postData = (value) => {
    return async (dispatch) => {
        await axios.post('http://localhost:4000/store', {value});
        dispatch({
            type: "UPDATE_DATA",
            payload: value,
        });
    }
};
