import React from 'react';
import { Shield, Users, School, Settings, Download, TrendingUp, AlertTriangle, Plus } from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import '../dashboard/Dashboard.css';

const enrollmentData = [
  { month: 'Jan', students: 1200, revenue: 45000 },
  { month: 'Feb', students: 1250, revenue: 48000 },
  { month: 'Mar', students: 1320, revenue: 52000 },
  { month: 'Apr', students: 1450, revenue: 60000 },
];

const AdminDashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="dashboard-container professional-theme">
      <header className="dashboard-header">
        <div className="header-main">
          <div className="welcome-text">
            <span className="breadcrumb">Institutional Control Center</span>
            <h1>{user.institution} | <span className="text-primary">Admin Console</span></h1>
            <p>System Status: <span className="status-dot online"></span> All nodes operational</p>
          </div>
          <div className="action-group">
            <button className="btn-outline"><Download size={16} /> Reports</button>
            <button className="btn-primary"><Plus size={16} /> Register New Faculty</button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        <div className="stat-item card">
          <div className="stat-icon cyan"><Users size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Total Student Base</span>
            <span className="stat-value">1,450</span>
            <span className="stat-trend positive">+12% YoY</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon green"><School size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Active Faculty</span>
            <span className="stat-value">48</span>
            <span className="stat-trend positive">3 new this term</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon orange"><Shield size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">System Security</span>
            <span className="stat-value">Grade A</span>
            <span className="stat-trend positive">No breaches</span>
          </div>
        </div>
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card">
            <div className="section-header">
              <h3>Faculty Management</h3>
              <div className="table-actions">
                <input type="text" placeholder="Search faculty..." className="table-search" />
              </div>
            </div>
            <div className="table-container">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Faculty Name</th>
                    <th>Department</th>
                    <th>Classes</th>
                    <th>Last Active</th>
                    <th>Status</th>
                    <th>Manage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Dr. Sangeetha P.', dept: 'Biology', classes: 5, last: '2 mins ago', status: 'Online' },
                    { name: 'Muthuvel P.', dept: 'Mathematics', classes: 4, last: '1 hour ago', status: 'Offline' },
                    { name: 'Kavitha R.', dept: 'Physics', classes: 6, last: 'Just now', status: 'Online' },
                  ].map((fac, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{fac.name}</td>
                      <td>{fac.dept}</td>
                      <td>{fac.classes}</td>
                      <td>{fac.last}</td>
                      <td><span className={`status-dot ${fac.status.toLowerCase()}`}></span> {fac.status}</td>
                      <td><button className="btn-icon">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dual-grid">
            <div className="chart-card card border-emerald">
              <h3>Financial Overview (Revenue)</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={enrollmentData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="var(--accent-emerald)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="inventory-card card border-amber">
              <h3>Asset & Inventory</h3>
              <div className="inventory-list">
                <div className="inv-item">
                  <span>Smart Boards</span>
                  <div className="inv-status high">85% Operational</div>
                </div>
                <div className="inv-item">
                  <span>Lab Equipment</span>
                  <div className="inv-status low">12% Maintenance</div>
                </div>
                <div className="inv-item">
                  <span>Library Books</span>
                  <div className="inv-status mid">92% Cataloged</div>
                </div>
              </div>
              <button className="btn-outline btn-sm full-width mt-1">Manage Assets</button>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="system-health card border-blue">
            <h3>Infrastructure Health</h3>
            <div className="health-metrics">
              <div className="metric">
                <span>Server Load</span>
                <div className="progress-bar-sm"><div className="fill" style={{width: '45%'}}></div></div>
              </div>
              <div className="metric">
                <span>Storage (LMS)</span>
                <div className="progress-bar-sm"><div className="fill" style={{width: '78%'}}></div></div>
              </div>
              <div className="metric">
                <span>Network Latency</span>
                <div className="progress-bar-sm"><div className="fill green" style={{width: '12%'}}></div></div>
              </div>
            </div>
          </div>

          <div className="admin-audit card border-indigo">
            <h3>Audit Log</h3>
            <div className="audit-list">
              <div className="audit-item">
                <span className="time">10:42</span>
                <p><strong>Admin</strong> modified student permissions in Class 12-A.</p>
              </div>
              <div className="audit-item">
                <span className="time">09:15</span>
                <p><strong>System</strong> auto-backed up institutional database.</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;
