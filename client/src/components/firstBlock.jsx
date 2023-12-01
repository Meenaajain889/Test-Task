import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchData, postData } from '../redux/actions';

const FirstBlock = () => {
    const text = useSelector((state) => state.initialText);
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    const length = value.length

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(fetchData())
    }

    const handleChange = (event) => {
        setValue(event.target.value)
    };

    const handleAddText = () => {
        dispatch(postData(value))
        setValue("")
    }



    return (
        <div className='text-wrapper'>
            <h2 className='title'>{text}</h2>
            <input type="text" value={value} onChange={handleChange} />
            <button
                disabled={length === 0 ? true : false}
                style={{ backgroundColor: length === 0 ? '#1111115c' : '#111' }}
                onClick={handleAddText}>
                Add Text
            </button>
        </div>
    );
};

export default FirstBlock;
