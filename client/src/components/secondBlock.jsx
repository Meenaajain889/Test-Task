import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchData, postData } from '../redux/actions';

const SecondBlock = () => {
    const text = useSelector((state) => state.initialText);
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(fetchData())
    }

    const handleChange = (event) => {
        dispatch(postData(event.target.value))
    };

    return (
        <div className='text-wrapper'>
            <h2 className='title'>{text}</h2>
            <input type="text" value={text} onChange={handleChange} />
        </div>
    );
};

export default SecondBlock;
