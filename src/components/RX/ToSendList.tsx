import React, { useState } from 'react';
import UserCard from '../TX/UserCard';
import { User } from '../../lib/types';

interface ToSendListProps {
  users: User[];

}


function ToSendList() {


  const [sharing, setSharing] = useState(true);
  const users = [
    { id: 1, name: 'Ahmed' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Youssef' },
    { id: 4, name: 'Fatma' },
    { id: 5, name: 'Ali' },
  ];





  return (
    <div className="bg-base-100 rounded-3xl shadow-2xl p-8 flex-1 overflow-auto flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-primary">Choose recipient</h2>
        <label className="flex items-center gap-4 cursor-pointer">
          <span className="text-lg font-semibold">Sharing</span>
          <input
            type="checkbox"
            className="toggle toggle-primary scale-125"
            checked={sharing}
            onChange={() => setSharing(!sharing)}
          />
        </label>
      </div>

      {/* Grid of user cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            onSend={() => console.log(`Sending to ${user.name}`)}
            disabled={!sharing}
          />
        ))}
      </div>
    </div>


  )
}

export default ToSendList


