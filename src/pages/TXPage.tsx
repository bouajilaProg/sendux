import { useEffect, useState } from 'react';
import UserCard from '../components/TX/UserCard';
import FileSendList from '../components/RX/FileSendList';
import FilePicker from '../components/RX/FilePicker';
import ToSendList from '../components/RX/ToSendList';
import { User } from '../lib/types';



function TXPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [sharing, setSharing] = useState(true);
  const [users, setUsers] = useState<User[]>([]);



  // Simulate fetching users (in a real app, this would be an API call)
  function fetchUsers(): User[] {
    return [
      { id: 1, name: 'Alice', avatarUrl: 'https://example.com/avatar1.png' },
      { id: 2, name: 'Bob', avatarUrl: 'https://example.com/avatar2.png' },
      { id: 3, name: 'Charlie', avatarUrl: 'https://example.com/avatar3.png' },
      { id: 4, name: 'Diana', avatarUrl: 'https://example.com/avatar4.png' },
      { id: 5, name: 'Ethan', avatarUrl: 'https://example.com/avatar5.png' },
      { id: 6, name: 'Fiona', avatarUrl: 'https://example.com/avatar6.png' }
    ];
  }

  useEffect(() => {
    const fetchedUsers = fetchUsers();
    setUsers(fetchedUsers);
  }, []);



  if (files.length === 0) {
    return (
      <FilePicker files={files} setFiles={setFiles} />
    );
  }

  return (
    <div className="h-screen bg-base-200 p-8 flex flex-col gap-8">


      <FileSendList files={files} setFiles={setFiles} />
      <ToSendList users={users} sharing={sharing} setSharing={setSharing} />

    </div>
  );
}

export default TXPage;
