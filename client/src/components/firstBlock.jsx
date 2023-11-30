import React from 'react';
import {useDispatch, useSelector} from "react-redux"

const FirstBlock = () => {

    const dispatch = useDispatch();
    const text = useSelector((state) => state.initialText);


    const handleChange = (e) => {

    };

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <button>Add Text</button>
        </div>
    );
};

export default FirstBlock;
