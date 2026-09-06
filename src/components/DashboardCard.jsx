import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './components.css';

const DashboardCard = ({ title, value, icon: Icon, trend, trendValue }) => {
  return (
    <div className="dashboard-card panel">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {Icon && <div className="card-icon"><Icon size={20} /></div>}
      </div>
      
      <div className="card-value">{value}</div>
      
      {trend && (
        <div className={`card-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
          {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{trendValue} from last week</span>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
