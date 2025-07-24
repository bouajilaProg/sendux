function TXPage() {
  const items = [
    { id: 1, name: 'File A.pdf', size: '2.3 MB' },
    { id: 2, name: 'Image.png', size: '1.2 MB' },
    { id: 3, name: 'Video.mp4', size: '45 MB' },
  ];

  return (
    <div className="p-4 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Receive</h1>
        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className="label-text">Sharing</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>
        </div>
      </div>


      {/* File List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="card bg-base-200 rounded-xl shadow p-4">
            {/* Top: Avatar + Info */}
            <div className="flex items-center gap-4 mb-4">
              <div className="avatar">
                <div className="w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                  {item.name[0]}
                </div>
              </div>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-base-content/60">{item.size}</div>
              </div>
            </div>

            {/* Bottom: Actions */}
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">Accept</button>
              <button className="btn btn-sm btn-outline btn-error">Reject</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TXPage;
