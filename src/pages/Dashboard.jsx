import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const { user } = useAuth();
  const { portfolio } = useData();

  const totalInvestment = portfolio.reduce((total, item) => total + item.amount, 0);
  const currentValue = portfolio.reduce((total, item) => total + (item.amount * (1 + item.returns/100)), 0);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [totalInvestment, totalInvestment * 1.02, totalInvestment * 1.05, totalInvestment * 1.03, totalInvestment * 1.08, currentValue],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, {user?.name || 'Investor'}!</h1>
      
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
          <h3 className="text-lg font-semibold text-gray-600">Returns</h3>
          <p className="text-2xl font-bold text-green-500">
            {((currentValue - totalInvestment) / totalInvestment * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Portfolio Performance</h2>
        <div className="h-[400px]">
          <Line data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;