interface FilePickerProps {
  setFiles: (files: File[]) => void;
  files: File[];
}


function FilePicker({ setFiles, files }: FilePickerProps) {


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;
    if (selected) setFiles(Array.from(selected));
  };


  return (
    <div className="h-screen bg-base-200 flex items-center justify-center p-8">
      <div className="card bg-base-100 w-full max-w-2xl shadow-xl">
        <div className="card-body items-center text-center p-12">
          {/* Icon */}
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-primary opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* Title and description */}
          <h2 className="card-title text-3xl mb-4 text-base-content">
            Share Your Files
          </h2>
          <p className="text-base-content/70 mb-8 text-lg max-w-md">
            Select files to share with your contacts. You can choose multiple files at once.
          </p>

          {/* File input */}
          <div className="w-full max-w-lg">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="file-input file-input-bordered file-input-primary file-input-lg w-full"
            />
          </div>

          {/* Helper text */}
          <div className="mt-6">
            <p className="text-sm text-base-content/50">
              Supported formats: All file types • Max size: No limit
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilePicker
