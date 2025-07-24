import { useState } from 'react';
import FileItem from '../components/RX/FileItem';

function RXPage() {
  const [receiving, setReceiving] = useState(true);

  const items = [
    { id: 1, sender: 'Ahmed', size: '2.3 MB' },
    { id: 2, sender: 'Sara', size: '1.2 MB' },
    { id: 3, sender: 'Youssef', size: '45 MB' },
  ];

  return (
    <div className=" bg-base-200 flex items-center h-screen justify-center p-8">
      {/* Container with margin and max width, fills height */}
      <div className="flex flex-col justify-start w-full  h-full bg-base-100 rounded-3xl shadow-2xl p-20 text-center overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-20">
          <div className="text-left">
            <h1 className="text-6xl font-extrabold text-primary">Receive</h1>
            <p className="text-2xl text-base-content mt-4">Waiting for incoming files...</p>
          </div>
          <label className="flex items-center gap-6 cursor-pointer">
            <span className="text-xl text-base-content font-semibold">Receiving</span>
            <input
              type="checkbox"
              className="toggle toggle-primary scale-150"
              checked={receiving}
              onChange={() => setReceiving(!receiving)}
            />
          </label>
        </div>

        {/* File List */}
        <div className="flex flex-wrap gap-3 ">
          {items.length > 0 ? (
            items.concat(items).map((item) => (
              <FileItem
                key={item.id}
                sender={item.sender}
                size={item.size}
                onAccept={() => console.log(`Accepted from ${item.sender}`)}
                onReject={() => console.log(`Rejected from ${item.sender}`)}
                onComplete={() => console.log(`Completed transfer from ${item.sender}`)}
              />
            ))
          ) : (
            <p className="text-xl text-base-content">No incoming files.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RXPage;
