// components/About.tsx
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Sendux</h1>
        <p className="text-lg text-base-content/70">
          Sendux is a blazing-fast, local-first file sharing tool for your Wi-Fi network. No setup. No cloud. Just encrypted sharing across your Linux and Windows devices.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title">🔒 End-to-End Encryption</h2>
            <p>
              Every file you send is securely encrypted — no one sees it but the sender and receiver.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title">📡 Local Wi-Fi Sharing</h2>
            <p>
              Send files instantly to anyone connected to the same Wi-Fi. No internet required.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title">🖥️ Cross-Platform</h2>
            <p>
              Works natively on Linux and Windows. Just download and you're ready to share.
            </p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl border border-base-300">
          <div className="card-body">
            <h2 className="card-title">🚀 Lightweight & Fast</h2>
            <p>
              Built with speed in mind. No bloat, just efficient peer-to-peer transfers.
            </p>
          </div>
        </div>
      </section>


      <section className="text-center mt-20">
        <div className="avatar mb-6">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="/bouajila.jpg" alt="Bouajilaprog" />
          </div>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">👨‍💻 Meet the Developer</h2>
        <p className="mt-4 text-base-content/70 max-w-xl mx-auto">
          <span className="text-base-content font-semibold">Bouajilaprog</span> is a developer, inventor, and open-source builder from Tunisia — someone who codes to solve real problems.
        </p>
        <p className="mt-2 text-base-content font-medium italic">
          “I build tools that solve problems — not just features.”
        </p>
      </section>
    </div>
  );
}
