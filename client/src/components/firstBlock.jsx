import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux"

const FirstBlock = () => {
    const [value, setValue] = useState("Hello")
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
        <div>
            <h2>{text}</h2>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleAddText}>Add Text</button>
        </div>
    );
};

export default FirstBlock;
