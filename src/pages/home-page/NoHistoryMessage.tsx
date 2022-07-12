import React from 'react';

const NoHistoryMessage = () => {
  return (
    <div className="h-full flex flex-col justify-center pb-32">
      <p className="text-center text-2xl">Start a new round below.</p>
      <p className="text-center text-lg mt-8">
        As you play, the results of your rounds will be displayed here.
      </p>
    </div>
  );
};

export default NoHistoryMessage;
