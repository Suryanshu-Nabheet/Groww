import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Line } from 'react-chartjs-2';

function ProductDetail() {
  const { id } = useParams();
  const { products } = useData();

  const product = [
    ...products.stocks,
    ...products.mutualFunds,
    ...products.sips
  ].find(p => p.id === id);

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Value',
        data: [100, 102, 105, 103, 108, 110],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600">Category</p>
                  <p className="font-semibold">{product.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Risk Level</p>
                  <p className="font-semibold">{product.risk}</p>
                </div>
                {product.price && (
                  <div>
                    <p className="text-gray-600">Current Price</p>
                    <p className="font-semibold">₹{product.price}</p>
                  </div>
                )}
                {product.returns && (
                  <>
                    <div>
                      <p className="text-gray-600">1Y Returns</p>
                      <p className="font-semibold">{product.returns.oneYear}%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">3Y Returns</p>
                      <p className="font-semibold">{product.returns.threeYear}%</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              Invest Now
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Performance</h2>
            <div className="h-[300px]">
              <Line data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;