import React from 'react';

function ThreeCards() {
  return (
    <div className="container mx-auto p-4 mt-10 flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 1</h2>
          <p className="text-sm mb-4">This is a sample card.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 2</h2>
          <p className="text-sm mb-4">This is another sample card.</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">Card 3</h2>
          <p className="text-sm mb-4">This is the third sample card.</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeCards;