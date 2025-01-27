import { createContext, useState, useContext, useEffect } from 'react';
import { mockStocks, mockMutualFunds, mockSIPs } from '../data/mockData';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [products, setProducts] = useState({
    stocks: mockStocks,
    mutualFunds: mockMutualFunds,
    sips: mockSIPs
  });

  useEffect(() => {
    const storedPortfolio = localStorage.getItem('portfolio');
    if (storedPortfolio) {
      setPortfolio(JSON.parse(storedPortfolio));
    }
  }, []);

  const addToPortfolio = (investment) => {
    const updatedPortfolio = [...portfolio, investment];
    setPortfolio(updatedPortfolio);
    localStorage.setItem('portfolio', JSON.stringify(updatedPortfolio));
  };

  const removeFromPortfolio = (investmentId) => {
    const updatedPortfolio = portfolio.filter(item => item.id !== investmentId);
    setPortfolio(updatedPortfolio);
    localStorage.setItem('portfolio', JSON.stringify(updatedPortfolio));
  };

  return (
    <DataContext.Provider value={{
      portfolio,
      products,
      addToPortfolio,
      removeFromPortfolio
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);