import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import DashboardCard from '../../components/DashboardCard';
import { mockVitals } from '../../data/mockData';
import { Heart, Activity, Thermometer, Droplets } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const PatientDashboard = () => {
  const latestVitals = mockVitals[mockVitals.length - 1];

  return (
    <div className="app-container">
      <Sidebar role="patient" />
      
      <main className="main-content">
        <Navbar title="Patient Dashboard" />
        
        <div className="page-container">
          <div className="cards-grid">
            <DashboardCard 
              title="Blood Pressure" 
              value={`${latestVitals.bpSystolic}/${latestVitals.bpDiastolic}`} 
              icon={Activity}
              trend="up"
              trendValue="+2%"
            />
            <DashboardCard 
              title="Heart Rate" 
              value={`${latestVitals.hr} bpm`} 
              icon={Heart}
              trend="down"
              trendValue="-1%"
            />
            <DashboardCard 
              title="Oxygen Level" 
              value={`${latestVitals.spo2}%`} 
              icon={Droplets}
            />
            <DashboardCard 
              title="Temperature" 
              value="98.6 °F" 
              icon={Thermometer}
            />
          </div>

          <div className="panel" style={{ padding: '1.5rem', marginTop: '2rem' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Blood Pressure Trend</h3>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockVitals}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                  />
                  <Line type="monotone" dataKey="bpSystolic" name="Systolic" stroke="var(--risk-high)" strokeWidth={3} />
                  <Line type="monotone" dataKey="bpDiastolic" name="Diastolic" stroke="var(--primary-color)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;
