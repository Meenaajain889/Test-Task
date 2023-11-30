import React from 'react';

const FirstBlock = () => {

  const handleChange = (e) => {

  };

  return (
    <div>
      <input type="text" value={""} onChange={handleChange} />
      <button>Add Text</button>
    </div>
  );
};

export default FirstBlock;
