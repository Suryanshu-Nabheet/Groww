import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { FaCalculator, FaChartLine, FaRupeeSign } from 'react-icons/fa';

function SipCalculator() {
  const [investmentType, setInvestmentType] = useState('monthly');
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [oneTimeInvestment, setOneTimeInvestment] = useState(100000);
  const [years, setYears] = useState(10);
  const [expectedReturn, setExpectedReturn] = useState(12);

  const calculateSIP = () => {
    if (investmentType === 'monthly') {
      const monthlyRate = expectedReturn / (12 * 100);
      const months = years * 12;
      const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const totalInvestment = monthlyInvestment * months;
      const totalReturns = futureValue - totalInvestment;

      return {
        futureValue: Math.round(futureValue),
        totalInvestment: Math.round(totalInvestment),
        totalReturns: Math.round(totalReturns)
      };
    } else {
      const futureValue = oneTimeInvestment * Math.pow(1 + expectedReturn / 100, years);
      const totalReturns = futureValue - oneTimeInvestment;

      return {
        futureValue: Math.round(futureValue),
        totalInvestment: Math.round(oneTimeInvestment),
        totalReturns: Math.round(totalReturns)
      };
    }
  };

  const result = calculateSIP();

  const chartData = {
    labels: Array.from({ length: years + 1 }, (_, i) => i),
    datasets: [
      {
        label: 'Investment Value',
        data: Array.from({ length: years + 1 }, (_, i) => {
          if (investmentType === 'monthly') {
            const monthlyRate = expectedReturn / (12 * 100);
            const months = i * 12;
            return Math.round(monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
          } else {
            return Math.round(oneTimeInvestment * Math.pow(1 + expectedReturn / 100, i));
          }
        }),
        borderColor: 'rgb(56, 189, 248)',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#e5e7eb'
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#e5e7eb'
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#e5e7eb'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <FaCalculator className="text-cyan-400" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Quantum SIP Calculator
            </span>
          </h1>
          <p className="text-blue-200">Plan your financial future with precision</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaRupeeSign className="text-blue-400" />
              Investment Details
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    investmentType === 'monthly'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setInvestmentType('monthly')}
                >
                  Monthly SIP
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                    investmentType === 'onetime'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                  onClick={() => setInvestmentType('onetime')}
                >
                  One-time
                </button>
              </div>

              {investmentType === 'monthly' ? (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Monthly Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    One-time Investment (₹)
                  </label>
                  <input
                    type="number"
                    value={oneTimeInvestment}
                    onChange={(e) => setOneTimeInvestment(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Time Period (Years)
                </label>
                <input
                  type="number"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Expected Return Rate (% p.a.)
                </label>
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">Total Investment</p>
                <p className="text-2xl font-bold text-white">₹{result.totalInvestment.toLocaleString()}</p>
              </div>
              
              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">Expected Returns</p>
                <p className="text-2xl font-bold text-green-400">₹{result.totalReturns.toLocaleString()}</p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">Total Value</p>
                <p className="text-2xl font-bold text-blue-400">₹{result.futureValue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-blue-500/30">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaChartLine className="text-blue-400" />
              Growth Projection
            </h2>
            <div className="h-[500px]">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SipCalculator;