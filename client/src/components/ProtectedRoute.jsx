import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children; // Render the protected content
};

export default ProtectedRoute;