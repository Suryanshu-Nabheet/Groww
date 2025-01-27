import { Link } from 'react-router-dom';
import { FaChartLine, FaRobot, FaChartPie } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Welcome to Groww
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              The Future of Investing is Here
            </p>
          </div>

          {/* Market Pulse Section */}
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Market Pulse</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/10">
                <p className="text-sm">NIFTY 50</p>
                <p className="text-xl font-bold text-green-400">19,425.35</p>
                <p className="text-sm text-green-400">+1.2%</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10">
                <p className="text-sm">SENSEX</p>
                <p className="text-xl font-bold text-red-400">64,283.20</p>
                <p className="text-sm text-red-400">-0.8%</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10">
                <p className="text-sm">BANK NIFTY</p>
                <p className="text-xl font-bold text-green-400">43,123.45</p>
                <p className="text-sm text-green-400">+0.6%</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/30 backdrop-blur-lg p-8 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all group">
              <div className="text-blue-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
                <FaChartLine />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Smart Stocks</h2>
              <p className="text-gray-300 mb-4">
                AI-powered stock recommendations and real-time market analysis
              </p>
              <Link
                to="/products?type=stocks"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Explore Stocks →
              </Link>
            </div>

            <div className="bg-black/30 backdrop-blur-lg p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all group">
              <div className="text-purple-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
                <FaRobot />
              </div>
              <h2 className="text-2xl font-semibold mb-4">AI Mutual Funds</h2>
              <p className="text-gray-300 mb-4">
                Smart portfolios managed by advanced algorithms
              </p>
              <Link
                to="/products?type=mutual-funds"
                className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors"
              >
                Explore Funds →
              </Link>
            </div>

            <div className="bg-black/30 backdrop-blur-lg p-8 rounded-xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all group">
              <div className="text-cyan-400 text-4xl mb-4 group-hover:scale-110 transition-transform">
                <FaChartPie />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Quantum SIP</h2>
              <p className="text-gray-300 mb-4">
                Next-gen systematic investment plans with predictive analytics
              </p>
              <Link
                to="/calculator"
                className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
              >
                Calculate SIP →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;