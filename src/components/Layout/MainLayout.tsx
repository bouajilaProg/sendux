import { Outlet, NavLink } from 'react-router-dom';
import {
  FiZap,
  FiSend,
  FiDownload,
  FiInfo,
  FiSettings,
} from 'react-icons/fi';

function MainLayout() {
  return (
    <div className="flex h-screen bg-base-200">

      {/* Right sidebar — same style as RXPage */}
      <div className="w-20 bg-base-100 shadow-xl flex flex-col justify-between items-center py-6 border-l border-base-300">
        {/* Top: Logo + Title */}
        <div className="flex flex-col items-center gap-5">
          <FiZap className="text-primary text-3xl" />

          {/* Middle: Nav icons */}
          <NavLink to="/send" className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-base-content opacity-60 hover:opacity-100 transition'
          }>
            <FiSend className="text-2xl" />
          </NavLink>
          <NavLink to="/recieve" className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-base-content opacity-60 hover:opacity-100 transition'
          }>
            <FiDownload className="text-2xl" />
          </NavLink>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-base-content opacity-60 hover:opacity-100 transition'
          }>
            <FiInfo className="text-2xl" />
          </NavLink>
        </div>

        {/* Bottom: Settings */}
        <div>
          <NavLink to="/settings" className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-base-content opacity-60 hover:opacity-100 transition'
          }>
            <FiSettings className="text-2xl" />
          </NavLink>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto bg-base-200">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
