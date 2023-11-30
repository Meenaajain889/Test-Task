import React from 'react';
import {useDispatch, useSelector} from "react-redux"

const SecondBlock = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.initialText);

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_TEXT', payload: e.target.value });
  };

  return (
    <div>
      <h2>{text}</h2>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default SecondBlock;
