import { useState, useEffect } from 'react';
import clsx from 'clsx';

type FileItemProps = {
  sender: string;
  size: string;
  onAccept?: () => void;
  onReject?: () => void; // You can remove this from props if unused
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
        const next = Math.min(p + Math.random() * 8 + 2, 100);
        if (next >= 100) {
          clearInterval(interval);
          setState('done');
          onComplete?.();
          setTimeout(() => setHidden(true), 2000);
        }
        return next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [state, onComplete]);

  if (hidden) return null;

  const getFileIcon = () => (
    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
  );

  const getStatusIcon = () => {
    if (state === 'transferring') {
      return (
        <div className="w-5 h-5">
          <div className="loading loading-spinner loading-sm text-primary"></div>
        </div>
      );
    }
    if (state === 'done') {
      return (
        <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center">
          <svg className="w-3 h-3 text-success-content" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      className={clsx(
        'card bg-base-200 border border-base-300 w-96 shadow-lg hover:shadow-xl transition-all duration-500 transform',
        hidden && 'opacity-0 scale-95',
        state === 'transferring' && 'border-primary/50',
        state === 'done' && 'border-success/50'
      )}
    >
      {state === 'transferring' && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-base-300 rounded-t-2xl overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="card-body items-center text-center p-6">
        {getFileIcon()}

        <div className="flex items-center gap-2 mb-2">
          <h2 className="card-title text-lg font-semibold">{sender}</h2>
          {getStatusIcon()}
        </div>

        <div className="mb-4">
          {state === 'transferring' ? (
            <div className="text-center">
              <p className="text-sm text-base-content/70 mb-1">
                {Math.max(0, (sizeMb * (1 - progress / 100))).toFixed(1)} MB remaining
              </p>
              <div className="text-xs text-primary font-medium">
                {progress.toFixed(0)}% complete
              </div>
            </div>
          ) : state === 'done' ? (
            <div className="text-center">
              <p className="text-sm font-medium text-success">Transfer complete!</p>
              <p className="text-xs text-base-content/60">{size} downloaded</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-base-content/80">{size} file</p>
              <p className="text-xs text-base-content/60">from {sender}</p>
            </div>
          )}
        </div>

        <div className="card-actions justify-center w-full">
          {state === 'default' ? (
            <button
              className="btn btn-primary w-full gap-2"
              onClick={() => {
                setState('transferring');
                setProgress(0);
                onAccept?.();
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Accept
            </button>
          ) : state === 'transferring' ? (
            <div className="flex items-center gap-2 text-sm text-base-content/70">
              <div className="loading loading-dots loading-sm"></div>
              <span>Transferring file...</span>
            </div>
          ) : (
            <div className="badge badge-success gap-2 py-3 px-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Download Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileItem;
