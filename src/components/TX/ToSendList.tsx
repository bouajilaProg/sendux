import UserCard from '../TX/UserCard';
import { User } from '../../lib/types';

interface ToSendListProps {
  users: User[];

  sharing: boolean;
  setSharing: (sharing: boolean) => void;
}


// ToSendList component to display a list of users to send files to
function ToSendList({ users, sharing, setSharing }: ToSendListProps) {


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

      {/* Empty state when sharing is disabled */}
      {!sharing && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="bg-base-200 rounded-full p-6 mb-6">
            <svg className="w-16 h-16 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </div>
          <div className="text-center max-w-md">
            <h3 className="text-xl font-semibold text-base-content mb-2">
              Start Sharing Files
            </h3>
            <p className="text-base-content/70 leading-relaxed">
              Toggle the sharing switch above to enable file sharing and discover users on your network.
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setSharing(true)}
              className="btn btn-primary btn-wide"
            >
              Enable Sharing
            </button>
          </div>
        </div>
      )}

      {sharing && users.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 px-4">
          <div className="relative mb-8">
            {/* Animated pulse rings */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full bg-primary/30 animate-ping animation-delay-200"></div>
            <div className="absolute inset-4 rounded-full bg-primary/40 animate-ping animation-delay-400"></div>

            {/* Center icon */}
            <div className="relative bg-primary/10 rounded-full p-6">
              <svg className="w-12 h-12 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div className="text-center max-w-md">
            <h3 className="text-xl font-semibold text-base-content mb-3">
              Searching for users...
            </h3>
            <p className="text-base-content/70 leading-relaxed mb-6">
              Looking for other devices on your network. Make sure they have sharing enabled.
            </p>

          </div>
        </div>
      )}

      {/* Grid of user cards */}
      {(sharing == true && users.length > 0) && (
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
      )}


    </div>
  )
}

export default ToSendList


