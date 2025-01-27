import { useState } from 'react';
import { useData } from '../context/DataContext';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const { products } = useData();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState('');
  
  const type = searchParams.get('type') || 'stocks';
  
  const getProductList = () => {
    switch(type) {
      case 'stocks':
        return products.stocks;
      case 'mutual-funds':
        return products.mutualFunds;
      case 'sip':
        return products.sips;
      default:
        return [];
    }
  };

  const filteredProducts = getProductList().filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRisk = !selectedRisk || product.risk === selectedRisk;
    return matchesSearch && matchesRisk;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {type === 'stocks' ? 'Stocks' : type === 'mutual-funds' ? 'Mutual Funds' : 'SIP Plans'}
        </h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedRisk}
            onChange={(e) => setSelectedRisk(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">All Risk Levels</option>
            <option value="Low">Low Risk</option>
            <option value="Moderate">Moderate Risk</option>
            <option value="High">High Risk</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm
                ${product.risk === 'Low' ? 'bg-green-100 text-green-800' :
                  product.risk === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
                {product.risk} Risk
              </span>
            </div>
            {type === 'stocks' ? (
              <>
                <p className="text-2xl font-bold mb-2">₹{product.price}</p>
                <p className={`text-sm ${product.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.change >= 0 ? '+' : ''}{product.change}%
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-2">1Y Returns: {product.returns?.oneYear}%</p>
                <p className="text-gray-600">3Y Returns: {product.returns?.threeYear}%</p>
              </>
            )}
            <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;