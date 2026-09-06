import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DashboardCard from '../../components/DashboardCard';
import { Server, Users, Activity, ShieldCheck } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="app-container">
      <Sidebar role="admin" />
      
      <main className="main-content">
        <Navbar title="Admin System Overview" />
        
        <div className="page-container">
          <div className="cards-grid">
            <DashboardCard title="Active Users" value="1,245" icon={Users} trend="up" trendValue="+12%" />
            <DashboardCard title="System Uptime" value="99.9%" icon={Server} />
            <DashboardCard title="FHIR API Requests" value="45.2k" icon={Activity} trend="up" trendValue="+5%" />
            <DashboardCard title="Security Status" value="Secure" icon={ShieldCheck} />
          </div>

          <div className="panel" style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
            <Server size={48} color="var(--primary-color)" style={{ margin: '0 auto 1rem' }} />
            <h3>FHIR Server Status</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '1rem auto' }}>
              All systems are operating normally. Interoperability protocols are active and syncing with regional health databases.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--risk-low)', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem' }}>
              <span style={{ width: '8px', height: '8px', backgroundColor: 'white', borderRadius: '50%', display: 'inline-block' }}></span>
              Online
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
