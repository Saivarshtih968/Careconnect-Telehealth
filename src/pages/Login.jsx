import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('patient');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login - set user role in local storage
    localStorage.setItem('user', JSON.stringify({ name: 'Demo User', role }));
    navigate(`/${role}/dashboard`);
  };

  return (
    <div className="auth-container">
      <div className="auth-card panel">
        <div className="auth-header">
          <HeartPulse size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Login to access your telehealth account</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="input-label">Select Role for Demo</label>
            <select 
              className="input-field"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input type="email" className="input-field" placeholder="Enter your email" required defaultValue="demo@telehealth.com" />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" placeholder="Enter your password" required defaultValue="password123" />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Sign In
          </button>
        </form>

        <div className="auth-links">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
