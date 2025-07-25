import { FiX, FiPlus } from 'react-icons/fi';
import { formatSize } from '../../lib/utils';

interface FileSendListProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

function FileSendList({ files, setFiles }: FileSendListProps) {
  return (
    <div className="bg-base-100 rounded-3xl shadow-inner p-6 overflow-x-auto flex gap-4">
      {files.map((file, idx) => (
        <div
          key={idx}
          className="bg-base-100 p-4 rounded-lg shadow-lg border border-base-300 flex items-center gap-4 min-w-[250px] relative hover:shadow-xl transition-shadow"
        >
          {/* Remove button - always visible */}
          <button
            onClick={() => {
              const newFiles = files.filter((_, i) => i !== idx);
              setFiles(newFiles);
            }}
            className="btn btn-circle btn-xs btn-error absolute -top-2 -right-2"
          >
            <FiX className="w-3 h-3" />
          </button>

          <div className="avatar">
            <div className="w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
              {file.name[0]?.toUpperCase()}
            </div>
          </div>
          <div className="text-left flex-1">
            <div
              className="font-medium text-base-content truncate max-w-[150px]"
              title={file.name}
            >
              {file.name}
            </div>
            <div className="text-sm text-base-content/60">
              {formatSize(file.size)}
            </div>
          </div>
        </div>
      ))}

      {/* Add more files button */}
      <div className="flex-shrink-0">
        <label className="btn btn-outline btn-primary h-full min-h-[100px] w-[200px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:btn-primary">
          <FiPlus className="w-8 h-8" />
          <span className="text-sm font-medium">Add Files</span>
          <input
            type="file"
            multiple
            onChange={(e) => {
              const selected = e.target.files;
              if (selected) {
                setFiles([...files, ...Array.from(selected)]);
              }
            }}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}

export default FileSendList;
