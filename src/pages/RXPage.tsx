import { useEffect, useState } from 'react';
import FileItem from '../components/RX/FileItem';
import { PackageSent } from '../lib/types';

function RXPage() {
  const [receiving, setReceiving] = useState(true);
  const [packages, setPackages] = useState<PackageSent[]>([])

  function GetPackageSent() {
    setPackages([
      {
        id: '1',
        sender: 'Alice',
        size: 5,
        sentSize: 0,
        status: 'default',
      },
      {
        id: '2',
        sender: 'Bob',
        size: 10,
        sentSize: 0,
        status: 'default',
      },
    ]);
  }

  useEffect(() => {
    GetPackageSent()
  }, [])



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
          {packages.length > 0 ? (
            packages.map((packageItem) => (
              <FileItem
                key={packageItem.id}
                sender={packageItem.sender}
                size={packageItem.size}
                onAccept={() => console.log(`Accepted from ${packageItem.sender}`)}
                onReject={() => console.log(`Rejected from ${packageItem.sender}`)}
                onComplete={() => console.log(`Completed transfer from ${packageItem.sender}`)}
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
