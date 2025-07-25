import { useState } from 'react';
import UserCard from '../components/TX/UserCard';
import FileSendList from '../components/RX/FileSendList';
import FilePicker from '../components/RX/FilePicker';
import ToSendList from '../components/RX/ToSendList';


function TXPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [sharing, setSharing] = useState(true);
  const [users, setUsers] = useState<User[]>([]);


  if (files.length === 0) {
    return (
      <FilePicker files={files} setFiles={setFiles} />
    );
  }

  return (
    <div className="h-screen bg-base-200 p-8 flex flex-col gap-8">


      <FileSendList files={files} setFiles={setFiles} />
      <ToSendList users={users} setUsers={setUsers} sharing={sharing} setSharing={setSharing} />

    </div>
  );
}

export default TXPage;
