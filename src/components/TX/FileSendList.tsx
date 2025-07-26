import React, { useRef } from 'react';
import { FiPlus, FiUploadCloud } from 'react-icons/fi';
import FileSendItem from './FileSendItem';

interface FileSendListProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

function FileSendList({ files, setFiles }: FileSendListProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (selected) {
      const newFiles = Array.from(selected);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="card bg-base-100 shadow-xl border border-base-300">
      <div className="card-body p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <FiUploadCloud className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold text-base-content">
            Selected Files ({files.length})
          </h3>
        </div>

        {/* Files List */}
        <div className="overflow-x-scroll pt-2">
          <div className="flex gap-4 pb-2">
            {files.map((file, idx) => (
              <FileSendItem
                key={idx}
                file={file}
                onRemove={() => removeFile(idx)}
              />
            ))}

            {/* Add Files Button */}
            <div className="flex-shrink-0">
              <div
                onClick={openFileDialog}
                className="card bg-base-100 border-2 border-dashed border-primary/40 min-w-[120px] h-[80px] cursor-pointer hover:border-primary hover:bg-primary/5 transition-all duration-200"
              >
                <div className="card-body p-2 flex flex-col items-center justify-center text-center">
                  <FiPlus className="w-6 h-6 text-primary mb-1" />
                  <span className="text-xs font-medium text-base-content">Add Files</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
}

export default FileSendList;
