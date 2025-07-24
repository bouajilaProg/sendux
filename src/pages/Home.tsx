import { Link } from "react-router-dom";
import { FaPaperPlane, FaDownload } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="max-w-3xl w-full p-10 md:p-16 bg-base-100 py-16 rounded-3xl shadow-2xl text-center">
        <header className="space-y-6">
          <h1 className="text-6xl font-extrabold text-primary">Sendux</h1>
          <h2 className="text-xl md:text-2xl text-base-content">
            Send files between devices on the same network
          </h2>
          <h3 className="text-md md:text-lg text-secondary">Windows ↔ Linux</h3>
        </header>
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
          <Link to="/tx" className="btn btn-primary btn-lg w-40 text-lg gap-2">
            <FaPaperPlane className="text-xl" />
            TX
          </Link>
          <Link to="/rx" className="btn btn-accent btn-lg w-40 text-lg gap-2">
            <FaDownload className="text-xl" />
            RX
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
