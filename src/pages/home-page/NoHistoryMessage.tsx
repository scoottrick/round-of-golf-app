import React from 'react';

const NoHistoryMessage = () => {
  return (
    <div className="py-2 px-4 flex flex-col justify-center">
      <h2 className="text-lg mb-2">Start a round</h2>
      <p className="text-sm text-gray-900">
        As you play, the results of your rounds will be displayed here.
      </p>
    </div>
  );
};

export default NoHistoryMessage;
