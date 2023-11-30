import React from 'react';
import {useDispatch, useSelector} from "react-redux"

const SecondBlock = () => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.initialText);

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_TEXT', payload: e.target.value });
  };

  return (
    <div className='text-wrapper'>
      <h2  className='title'>{text}</h2>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default SecondBlock;
