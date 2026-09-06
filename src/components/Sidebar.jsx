import { Activity, Users, FileText, Settings, HeartPulse } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './components.css';

const Sidebar = ({ role }) => {
  const getLinks = () => {
    switch (role) {
      case 'patient':
        return [
          { path: '/patient/dashboard', icon: Activity, label: 'Dashboard' },
          { path: '/patient/vitals', icon: HeartPulse, label: 'My Vitals' },
          { path: '/patient/records', icon: FileText, label: 'Medical Records' },
        ];
      case 'doctor':
        return [
          { path: '/doctor/dashboard', icon: Activity, label: 'Dashboard' },
          { path: '/doctor/patients', icon: Users, label: 'My Patients' },
          { path: '/doctor/alerts', icon: HeartPulse, label: 'Risk Alerts' },
        ];
      case 'admin':
        return [
          { path: '/admin/dashboard', icon: Activity, label: 'System Overview' },
          { path: '/admin/users', icon: Users, label: 'Manage Users' },
          { path: '/admin/settings', icon: Settings, label: 'Settings' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <HeartPulse className="sidebar-logo" size={28} />
        <h1 className="sidebar-title">TeleHealth</h1>
      </div>
      
      <ul className="nav-links">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <li key={index}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
