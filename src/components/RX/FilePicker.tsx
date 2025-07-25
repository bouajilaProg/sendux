import React, { useState, useRef } from 'react';
import {
  FiUploadCloud,
  FiCheck
} from 'react-icons/fi';

interface FilePickerProps {
  setFiles: (files: File[]) => void;
  files: File[];
}

function FilePicker({ setFiles, files }: FilePickerProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (selected) {
      const newFiles = Array.from(selected);
      setFiles([...files, ...newFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };



  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card bg-base-100 w-full max-w-4xl shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-secondary text-primary-content p-8 text-center rounded-t-2xl">
          <FiUploadCloud className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-2">Share Your Files</h2>
          <p className="opacity-80 text-lg">
            Drag & drop files or click to browse
          </p>
        </div>

        <div className="card-body p-8">
          {/* Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={openFileDialog}
            className={`
              border-3 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300
              ${isDragOver
                ? 'border-primary bg-primary/10 scale-102 border-solid'
                : 'border-base-300 hover:border-primary hover:bg-base-200'
              }
            `}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className={`p-4 rounded-full transition-colors ${isDragOver ? 'bg-primary/20' : 'bg-base-200'}`}>
                <FiUploadCloud className={`w-12 h-12 ${isDragOver ? 'text-primary' : 'text-base-content/40'}`} />
              </div>
              <div>
                <p className="text-xl font-semibold text-base-content mb-2">
                  {isDragOver ? 'Drop files here' : 'Choose files or drag them here'}
                </p>
                <p className="text-base-content/60">
                  Support for all file types • No size limit
                </p>
              </div>
              <button className="btn btn-primary btn-lg">
                Browse Files
              </button>
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
    </div>
  );
}

export default FilePicker;
