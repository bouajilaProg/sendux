
import React from 'react';
import { FiX, FiFile } from 'react-icons/fi';
import { formatSize } from '../../lib/utils';

interface FileSendItemProps {
  file: File;
  onRemove: () => void;
  truncateFileName?: (name: string, maxLength?: number) => string;
}

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

const defaultTruncate = (name: string, maxLength = 24): string => {
  if (name.length <= maxLength) return name;

  const extIndex = name.lastIndexOf('.');
  const ext = extIndex !== -1 ? name.slice(extIndex) : '';
  const base = extIndex !== -1 ? name.slice(0, extIndex) : name;

  const keep = Math.floor((maxLength - ext.length - 3) / 2);
  return `${base.slice(0, keep)}...${base.slice(-keep)}${ext}`;
};

const FileSendItem = ({
  file,
  onRemove,
  truncateFileName = defaultTruncate,
}: FileSendItemProps) => {
  return (
    <div className="card bg-base-200 shadow-lg border border-base-300  w-[250px] hover:shadow-xl transition-all duration-200">
      <div className="card-body p-3 relative">
        {/* Remove button */}
        <button
          onClick={onRemove}
          className="btn btn-circle btn-xs btn-error absolute -top-2 -right-2 z-10 shadow-lg hover:scale-110 transition-transform"
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
            <div className="text-xs text-base-content/60">{formatSize(file.size)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileSendItem;
