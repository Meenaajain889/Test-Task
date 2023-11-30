import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"

const FirstBlock = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch();
    const text = useSelector((state) => state.initialText);

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    const handleAddText = () => {
        dispatch({ type: 'UPDATE_TEXT', payload: value });
        setValue("")
    }

    return (
        <div className='text-wrapper'>
            <h2 className='title'>{text}</h2>
            <input type="text" value={value} onChange={handleChange} />
            <button disabled={value.length === 0 ? true : false} style={{ backgroundColor: value.length === 0 ? '#1111115c' : '#111' }} onClick={handleAddText}>Add Text</button>
        </div>
    );
};

export default FirstBlock;
