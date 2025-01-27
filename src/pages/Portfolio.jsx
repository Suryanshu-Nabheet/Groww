import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';

function Portfolio() {
  const { portfolio, removeFromPortfolio } = useData();

  const totalInvestment = portfolio.reduce((total, item) => total + item.amount, 0);
  const currentValue = portfolio.reduce((total, item) => total + (item.amount * (1 + item.returns/100)), 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Portfolio</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Total Investment</h3>
          <p className="text-2xl font-bold">₹{totalInvestment.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Current Value</h3>
          <p className="text-2xl font-bold">₹{currentValue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-600">Total Returns</h3>
          <p className="text-2xl font-bold text-green-500">
            {((currentValue - totalInvestment) / totalInvestment * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Your Investments</h2>
          {portfolio.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">You haven't made any investments yet.</p>
              <Link to="/products" className="text-blue-500 hover:text-blue-600">
                Explore Investment Options →
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Name</th>
                    <th className="text-left py-3">Type</th>
                    <th className="text-right py-3">Amount</th>
                    <th className="text-right py-3">Current Value</th>
                    <th className="text-right py-3">Returns</th>
                    <th className="text-right py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map(investment => (
                    <tr key={investment.id} className="border-b">
                      <td className="py-3">{investment.name}</td>
                      <td className="py-3">{investment.type}</td>
                      <td className="text-right py-3">₹{investment.amount}</td>
                      <td className="text-right py-3">
                        ₹{(investment.amount * (1 + investment.returns/100)).toFixed(2)}
                      </td>
                      <td className="text-right py-3 text-green-500">
                        {investment.returns}%
                      </td>
                      <td className="text-right py-3">
                        <button
                          onClick={() => removeFromPortfolio(investment.id)}
                          className="text-red-500 hover:text-red-600"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;