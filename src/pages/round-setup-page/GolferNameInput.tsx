import React from 'react';

const GolferNameInput = ({ value, updated }) => {
  return (
    <input
      className="border-b-2 text-md py-1 flex-1"
      type="text"
      value={value}
      onChange={e => updated(e.target.value)}
    />
  );
};

export default GolferNameInput;
