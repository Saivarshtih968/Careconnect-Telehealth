import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DashboardCard from '../../components/DashboardCard';
import DataTable from '../../components/DataTable';
import StatusBadge from '../../components/StatusBadge';
import { mockPatients, mockAlerts } from '../../data/mockData';
import { Users, AlertCircle, Activity, Stethoscope } from 'lucide-react';

const DoctorDashboard = () => {
  const patientColumns = [
    { header: 'Patient ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Condition', accessor: 'condition' },
    { header: 'Last Reading', accessor: 'lastReading' },
    { 
      header: 'AI Risk Prediction', 
      accessor: 'riskLevel',
      render: (val) => <StatusBadge status={val} />
    }
  ];

  return (
    <div className="app-container">
      <Sidebar role="doctor" />
      
      <main className="main-content">
        <Navbar title="Doctor Dashboard" />
        
        <div className="page-container">
          <div className="cards-grid">
            <DashboardCard title="Total Patients" value="124" icon={Users} trend="up" trendValue="+5" />
            <DashboardCard title="Critical Alerts" value={mockAlerts.length} icon={AlertCircle} trend="down" trendValue="-2" />
            <DashboardCard title="Remote Monitoring" value="89" icon={Activity} />
            <DashboardCard title="Consultations Today" value="12" icon={Stethoscope} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Patient Risk Stratification</h3>
              <DataTable columns={patientColumns} data={mockPatients} />
            </div>
            
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Recent Alerts</h3>
              <div className="panel" style={{ padding: '1rem' }}>
                {mockAlerts.map(alert => (
                  <div key={alert.id} style={{ 
                    padding: '1rem', 
                    borderBottom: '1px solid var(--border-color)',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{alert.patient}</span>
                      <StatusBadge status={alert.severity} />
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {alert.message}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem', display: 'block' }}>
                      {alert.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
