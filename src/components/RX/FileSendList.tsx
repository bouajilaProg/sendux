import React, { useRef } from 'react';
import { FiX, FiPlus, FiFile, FiUploadCloud } from 'react-icons/fi';
import { formatSize } from '../../lib/utils';

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

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    const iconClass = "w-4 h-4";

    switch (extension) {
      case 'pdf':
        return <FiFile className={`${iconClass} text-red-500`} />;
      case 'doc':
      case 'docx':
        return <FiFile className={`${iconClass} text-blue-500`} />;
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <FiFile className={`${iconClass} text-green-500`} />;
      case 'mp4':
      case 'avi':
      case 'mov':
        return <FiFile className={`${iconClass} text-purple-500`} />;
      default:
        return <FiFile className={iconClass} />;
    }
  };

  const truncateFileName = (name: string, maxLength = 30): string => {
    if (name.length <= maxLength) return name;

    const extIndex = name.lastIndexOf('.');
    const ext = extIndex !== -1 ? name.slice(extIndex) : '';
    const base = extIndex !== -1 ? name.slice(0, extIndex) : name;

    const keep = Math.floor((maxLength - ext.length - 3) / 2);
    return `${base.slice(0, keep)}...${base.slice(-keep)}${ext}`;
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
        <div className="overflow-x-auto">
          <div className="flex gap-4 pb-2">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="card bg-base-200 shadow-lg border border-base-300 min-w-[200px] hover:shadow-xl transition-all duration-200"
              >
                <div className="card-body p-3 relative">
                  {/* Remove button */}
                  <button
                    onClick={() => removeFile(idx)}
                    className="btn btn-circle btn-xs btn-error absolute -top-2 -right-2 shadow-lg hover:scale-110 transition-transform"
                  >
                    <FiX className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-3">
                    {/* File Icon */}
                    <div className="bg-base-300 rounded-lg p-2 flex items-center justify-center">
                      {getFileIcon(file.name)}
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-medium text-base-content truncate text-sm mb-1"
                        title={file.name}
                      >
                        {truncateFileName(file.name)}
                      </div>
                      <div className="text-xs text-base-content/60">
                        {formatSize(file.size)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
