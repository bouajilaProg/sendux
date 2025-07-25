type UserCardProps = {
  name: string;
  onSend: () => void;
  disabled?: boolean;
};

const UserCard = ({ name, onSend, disabled }: UserCardProps) => {
  return (
    <div className="card bg-neutral text-neutral-content w-96 shadow-xl transition-all duration-500">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">Ready to receive files.</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={onSend}
            disabled={disabled}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
