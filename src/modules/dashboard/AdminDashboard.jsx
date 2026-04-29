import React from 'react';
import { Shield, Users, School, Settings, Download, TrendingUp, AlertTriangle } from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import '../dashboard/Dashboard.css';

const enrollmentData = [
  { month: 'Jan', students: 1200 },
  { month: 'Feb', students: 1250 },
  { month: 'Mar', students: 1320 },
  { month: 'Apr', students: 1450 },
];

const resourceData = [
  { name: 'Teacher Usage', value: 45 },
  { name: 'Student Usage', value: 55 },
];

const COLORS = ['#0891b2', '#06b6d4'];

const AdminDashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="welcome-text">
          <h1>Admin Portal | <span className="gradient-text">{user.institution}</span></h1>
          <p>Institutional oversight and system configuration for Tamil Nadu schools.</p>
        </div>
        <button className="secondary-btn"><Download size={18} /> Export Reports</button>
      </header>

      <section className="stats-grid">
        <StatsCard title="Total Enrollment" value="1,450" icon={Users} trend="up" trendValue="8" color="#0891b2" />
        <StatsCard title="Active Teachers" value="48" icon={School} trend="up" trendValue="2" color="#10b981" />
        <StatsCard title="System Health" value="99.9%" icon={Shield} trend="up" trendValue="0.1" color="#0ea5e9" />
        <StatsCard title="Infrastructure" value="12 Labs" icon={Settings} trend="up" trendValue="1" color="#a855f7" />
      </section>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="chart-card card">
            <h3>Student Growth & Retention</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={enrollmentData}>
                  <defs>
                    <linearGradient id="colorAdmin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0891b2" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="students" stroke="#0891b2" fillOpacity={1} fill="url(#colorAdmin)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="system-logs card">
            <div className="card-header">
              <h3>System Activity</h3>
              <button className="text-btn">View All Logs</button>
            </div>
            <div className="log-list">
              <div className="log-item">
                <div className="log-icon success"><Shield size={14} /></div>
                <div className="log-text">New security patch applied to Exam Portal.</div>
                <div className="log-time">10 mins ago</div>
              </div>
              <div className="log-item">
                <div className="log-icon warning"><AlertTriangle size={14} /></div>
                <div className="log-text">High traffic detected in Class 10 Biology stream.</div>
                <div className="log-time">45 mins ago</div>
              </div>
            </div>
          </div>
        </div>

        <aside className="right-panel">
          <div className="resource-dist card">
            <h3>Platform Usage</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={resourceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {resourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="usage-legend">
              <div className="legend-item"><span style={{background: '#0891b2'}}></span> Teachers (45%)</div>
              <div className="legend-item"><span style={{background: '#06b6d4'}}></span> Students (55%)</div>
            </div>
          </div>

          <div className="admin-actions card">
            <h3>Quick Actions</h3>
            <button className="action-row"><Users size={16} /> Manage User Access</button>
            <button className="action-row"><School size={16} /> Edit School Profile</button>
            <button className="action-row"><Settings size={16} /> Global System Config</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;
