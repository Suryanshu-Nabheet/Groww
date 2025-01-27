import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">Groww</span>
            </Link>
            <div className="hidden md:flex md:items-center md:ml-10 space-x-4">
              <Link to="/products" className="text-gray-700 hover:text-gray-900">Products</Link>
              <Link to="/calculator" className="text-gray-700 hover:text-gray-900">SIP Calculator</Link>
              {user && (
                <>
                  <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
                  <Link to="/portfolio" className="text-gray-700 hover:text-gray-900">Portfolio</Link>
                </>
              )}
            </div>
          </div>
          <div className="flex items-center">
            {user ? (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            ) : (
              <div className="space-x-4">
                <Link
                  to="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;