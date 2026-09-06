import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card panel">
        <div className="auth-header">
          <HeartPulse size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join our telehealth platform</p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input type="text" className="input-field" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label className="input-label">Email Address</label>
            <input type="email" className="input-field" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input type="password" className="input-field" placeholder="Create a password" required />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Register
          </button>
        </form>

        <div className="auth-links">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
