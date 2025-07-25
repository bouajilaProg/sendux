// components/About.tsx
import { FaLock, FaWifi, FaDesktop, FaRocket, FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Hero Section */}
        <section className="hero min-h-[80vh]">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <div className="badge badge-primary badge-lg mb-4">Local File Sharing</div>
              <h1 className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
                About Sendux
              </h1>
              <p className="text-2xl lg:text-3xl text-base-content/80 leading-relaxed mt-8 max-w-3xl mx-auto font-light">
                Sendux is a blazing-fast, local-first file sharing tool for your Wi-Fi network.
                <span className="text-primary font-semibold"> No setup. No cloud.</span> Just encrypted sharing across your Linux and Windows devices.
              </p>

            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Sendux?</h2>
            <p className="text-lg text-base-content/70">Built with modern security and simplicity in mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center text-error">
                    <FaLock className="text-xl" />
                  </div>
                  <h2 className="card-title text-2xl">End-to-End Encryption</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  Every file you send is securely encrypted using industry-standard protocols.
                  Your data remains private — no one sees it but the sender and receiver.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-error badge-outline">AES-256</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center text-info">
                    <FaWifi className="text-xl" />
                  </div>
                  <h2 className="card-title text-2xl">Local Wi-Fi Sharing</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  Send files instantly to anyone connected to the same Wi-Fi network.
                  No internet required, no data limits, just pure local speed.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-info badge-outline">P2P</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center text-success">
                    <FaDesktop className="text-xl" />
                  </div>
                  <h2 className="card-title text-2xl">Cross-Platform</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  Works natively on Linux and Windows with identical features.
                  Just download, install, and you're ready to share files seamlessly.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-success badge-outline">Universal</div>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center text-warning">
                    <FaRocket className="text-xl" />
                  </div>
                  <h2 className="card-title text-2xl">Lightweight & Fast</h2>
                </div>
                <p className="text-base-content/80 leading-relaxed">
                  Built with performance in mind. Minimal resource usage,
                  maximum speed. No bloat, just efficient peer-to-peer transfers.
                </p>
                <div className="card-actions justify-end mt-4">
                  <div className="badge badge-warning badge-outline">Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="bg-base-100 rounded-3xl shadow-2xl p-12">
          <div className="text-center">
            <div className="avatar mb-8">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                <img src="/bouajila.jpg" alt="Bouajilaprog" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-2">👨‍💻 Meet the Developer</h2>
                <div className="badge badge-primary badge-lg">Open Source Advocate</div>
              </div>

              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-lg text-base-content/80 leading-relaxed">
                  <span className="text-primary font-bold text-xl">Bouajilaprog</span> is a passionate developer,
                  inventor, and open-source builder from Tunisia — someone who codes to solve real problems
                  and make technology accessible to everyone.
                </p>

                <div className="card bg-base-200 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-start gap-4">
                      <FaQuoteLeft className="text-primary text-2xl mt-1 flex-shrink-0" />
                      <blockquote className="text-xl font-medium italic">
                        "I build tools that solve problems — not just features."
                      </blockquote>
                    </div>
                    <div className="text-right mt-2">
                      <cite className="text-primary font-semibold">— Bouajilaprog</cite>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
