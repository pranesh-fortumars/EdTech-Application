import React from 'react';
import { Shield, Users, School, Settings, Download, TrendingUp, AlertTriangle, Plus, Edit2, MoreVertical, Search, RefreshCw, Database, Server, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar 
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
  const { addNotification } = useNotificationStore();

  const handleAction = (msg) => addNotification(msg, 'success');

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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline" 
              onClick={() => handleAction('Generating institutional reports...')}
            >
              <Download size={16} /> Reports
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => handleAction('Opening faculty registration portal...')}
            >
              <Plus size={16} /> Register New Faculty
            </motion.button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        {[
          { icon: Users, label: 'Total Student Base', value: '1,450', trend: '+12% YoY', color: 'cyan' },
          { icon: School, label: 'Active Faculty', value: '48', trend: '3 new this term', color: 'green' },
          { icon: Shield, label: 'System Security', value: 'Grade A', trend: 'No breaches', color: 'orange' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="stat-item card clickable"
            onClick={() => handleAction(`Viewing detailed ${stat.label} analytics`)}
          >
            <div className={`stat-icon ${stat.color}`}><stat.icon size={20} /></div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend positive">{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card border-blue">
            <div className="section-header">
              <h3>Faculty Management</h3>
              <div className="table-actions">
                <div className="search-box">
                  <Search size={14} className="search-icon" />
                  <input type="text" placeholder="Search faculty..." className="table-search" />
                </div>
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
                      <td>
                        <div className="action-cell">
                          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleAction(`Editing ${fac.name}`)} className="btn-icon"><Edit2 size={14} /></motion.button>
                          <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleAction(`Opening menu for ${fac.name}`)} className="btn-icon"><MoreVertical size={14} /></motion.button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dual-grid">
            <div className="chart-card card border-emerald">
              <div className="section-header">
                <h3>Financial Overview (Revenue)</h3>
                <motion.button whileHover={{ rotate: 180 }} onClick={() => handleAction('Refreshing financial data...')} className="btn-icon">
                  <RefreshCw size={14} />
                </motion.button>
              </div>
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
                {[
                  { name: 'Smart Boards', status: '85% Operational', class: 'high' },
                  { name: 'Lab Equipment', status: '12% Maintenance', class: 'low' },
                  { name: 'Library Books', status: '92% Cataloged', class: 'mid' }
                ].map((item, i) => (
                  <div key={i} className="inv-item">
                    <span>{item.name}</span>
                    <div className={`inv-status ${item.class}`}>{item.status}</div>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="btn-outline btn-sm full-width mt-1"
                onClick={() => handleAction('Navigating to Asset Manager...')}
              >
                Manage Assets
              </motion.button>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="system-health card border-blue">
            <div className="section-header">
              <h3>Infrastructure Health</h3>
              <Database size={16} className="text-primary" />
            </div>
            <div className="health-metrics">
              <div className="metric">
                <div className="metric-info"><Server size={12} /> Server Load</div>
                <div className="progress-bar-sm"><div className="fill" style={{width: '45%'}}></div></div>
              </div>
              <div className="metric">
                <div className="metric-info"><Database size={12} /> Storage (LMS)</div>
                <div className="progress-bar-sm"><div className="fill" style={{width: '78%'}}></div></div>
              </div>
              <div className="metric">
                <div className="metric-info"><Wifi size={12} /> Network Latency</div>
                <div className="progress-bar-sm"><div className="fill green" style={{width: '12%'}}></div></div>
              </div>
            </div>
          </div>

          <div className="admin-audit card border-indigo">
            <h3>Audit Log</h3>
            <div className="audit-list">
              {[
                { time: '10:42', text: 'modified student permissions in Class 12-A.', actor: 'Admin' },
                { time: '09:15', text: 'auto-backed up institutional database.', actor: 'System' }
              ].map((log, i) => (
                <div key={i} className="audit-item">
                  <span className="time">{log.time}</span>
                  <p><strong>{log.actor}</strong> {log.text}</p>
                </div>
              ))}
            </div>
            <button className="btn-text mt-1 text-indigo" onClick={() => handleAction('Loading full audit history...')}>View Full Audit</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminDashboard;
