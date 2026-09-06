import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRole }) => {
  // Mock authentication - replace with real auth context later
  const user = JSON.parse(localStorage.getItem('user')) || { role: 'guest' };

  if (user.role === 'guest') {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    // Redirect to their respective dashboard if they try to access wrong role path
    return <Navigate to={`/${user.role}/dashboard`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
