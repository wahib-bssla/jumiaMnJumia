import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner
  }

  if (user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children; // Render the protected content
};

export default AdminRoute;