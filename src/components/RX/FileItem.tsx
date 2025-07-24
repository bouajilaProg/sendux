import { useState, useEffect } from 'react';
import clsx from 'clsx';

type FileItemProps = {
  sender: string;
  size: string;
  onAccept?: () => void;
  onReject?: () => void;
  onComplete?: () => void;
};

const FileItem = ({ sender, size, onAccept, onReject, onComplete }: FileItemProps) => {
  const [state, setState] = useState<'default' | 'transferring' | 'done'>('default');
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const sizeMb = parseFloat(size);

  useEffect(() => {
    if (state !== 'transferring') return;
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 10, 100);
        if (next >= 100) {
          clearInterval(interval);
          setState('done');
          onComplete?.();
          setTimeout(() => setHidden(true), 1500);
        }
        return next;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [state]);

  if (hidden) return null;

  return (
    <div
      className={clsx(
        'card bg-neutral text-neutral-content w-96 shadow-xl transition-all duration-500',
        hidden && 'opacity-0 scale-95'
      )}
    >
      {/* Progress bar */}
      {state === 'transferring' && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-xl"
          style={{ width: `${progress}%` }}
        />
      )}

      <div className="card-body items-center text-center">
        <h2 className="card-title">{sender}</h2>
        <p className="text-sm">
          {state === 'transferring'
            ? `${Math.max(0, (sizeMb * (1 - progress / 100))).toFixed(1)} MB left`
            : state === 'done'
              ? 'Transfer complete!'
              : `${size} file from ${sender}`}
        </p>

        <div className="card-actions justify-end">
          {state === 'default' ? (
            <>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setState('transferring');
                  setProgress(0);
                  onAccept?.();
                }}
              >
                Accept
              </button>
              <button className="btn btn-ghost" onClick={onReject}>
                Deny
              </button>
            </>
          ) : state === 'transferring' ? (
            <span className="italic text-sm text-neutral-content/70">Transferring...</span>
          ) : (
            <span className="text-sm font-semibold text-success">Downloaded</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileItem;
