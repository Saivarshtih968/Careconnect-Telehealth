import { Bell, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './components.css';

const Navbar = ({ title }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'User' };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar panel">
      <div className="nav-left">
        <h2 className="nav-title">{title}</h2>
      </div>
      
      <div className="nav-right">
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span className="user-name">{user.name}</span>
        </div>
        
        <button className="icon-btn logout-btn" onClick={handleLogout} aria-label="Logout">
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
