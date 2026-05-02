import React, { useState } from 'react';
import { Shield, Users, School, Download, Plus, Edit2, Search, RefreshCw, Database, Server, Wifi, X, TrendingUp, Activity, ArrowUpRight, ArrowDownRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import useDataStore from '../../store/useDataStore';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, CartesianGrid 
} from 'recharts';
import '../dashboard/Dashboard.css';

const enrollmentData = [
  { month: 'Jan', students: 1200, revenue: 45000, efficiency: 88 },
  { month: 'Feb', students: 1250, revenue: 48000, efficiency: 92 },
  { month: 'Mar', students: 1320, revenue: 52000, efficiency: 85 },
  { month: 'Apr', students: 1450, revenue: 60000, efficiency: 95 },
];

const AdminDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const { faculty, addFaculty, removeFaculty, assets } = useDataStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({ name: '', dept: '', classes: '' });

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dept) return;
    addFaculty(formData);
    addNotification(`Successfully registered ${formData.name}`, 'success');
    setFormData({ name: '', dept: '', classes: '' });
    setIsModalOpen(false);
  };

  const filteredFaculty = faculty.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container advanced-theme">
      {/* Background Glows */}
      <div className="bg-glow blue"></div>
      <div className="bg-glow purple"></div>

      <header className="dashboard-header-premium">
        <div className="header-content">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="welcome-section"
          >
            <div className="status-badge-premium">
              <Zap size={14} className="text-amber animate-pulse" />
              <span>Real-time System Active</span>
            </div>
            <h1>{user.institution} <span className="text-gradient">Hub</span></h1>
            <p className="subtitle">Institutional Command Center • {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </motion.div>
          
          <div className="header-actions-premium">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glass" 
              onClick={() => addNotification('Preparing institutional audit reports...', 'success')}
            >
              <Download size={18} />
              <span>Export Audit</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium-action"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus size={18} />
              <span>Register Faculty</span>
            </motion.button>
          </div>
        </div>
      </header>

      <div className="stats-grid-premium">
        {[
          { icon: Users, label: 'Student Population', value: '1,450', trend: '+12.5%', color: 'cyan', iconColor: 'var(--accent-cyan)' },
          { icon: School, label: 'Faculty strength', value: faculty.length, trend: 'Optimal', color: 'emerald', iconColor: 'var(--accent-emerald)' },
          { icon: Shield, label: 'Security Protocols', value: 'High', trend: 'Secure', color: 'violet', iconColor: 'var(--accent-violet)' },
          { icon: TrendingUp, label: 'Institutional Growth', value: '24%', trend: 'v/s Last Term', color: 'amber', iconColor: 'var(--accent-amber)' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="stat-card-premium glass"
            onClick={() => addNotification(`Analyzing ${stat.label} trends...`)}
          >
            <div className={`stat-icon-wrap ${stat.color}`} style={{ backgroundColor: `${stat.iconColor}15` }}>
              <stat.icon size={24} style={{ color: stat.iconColor }} />
            </div>
            <div className="stat-info">
              <span className="label">{stat.label}</span>
              <div className="value-row">
                <span className="value">{stat.value}</span>
                <span className="trend positive">
                  <ArrowUpRight size={14} /> {stat.trend}
                </span>
              </div>
            </div>
            <div className="stat-glow" style={{ background: stat.iconColor }}></div>
          </motion.div>
        ))}
      </div>

      <div className="main-layout-grid">
        <div className="content-prime">
          <section className="visual-analytics card-premium">
            <div className="section-header">
              <div className="title-group">
                <h3>Financial Performance Matrix</h3>
                <p>Institutional revenue and operational efficiency</p>
              </div>
              <div className="chart-legend-premium">
                <span className="legend-item"><span className="dot primary"></span> Revenue</span>
                <span className="legend-item"><span className="dot secondary"></span> Efficiency</span>
              </div>
            </div>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={320}>
                <AreaChart data={enrollmentData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: 'var(--text-tertiary)', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                  <Area type="monotone" dataKey="efficiency" stroke="var(--accent-violet)" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="faculty-hub-premium card-premium mt-2">
            <div className="section-header">
              <div className="title-group">
                <h3>Faculty Excellence Directory</h3>
                <p>Manage and monitor academic staff performance</p>
              </div>
              <div className="search-premium">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by name, department..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="premium-table">
                <thead>
                  <tr>
                    <th>Faculty Member</th>
                    <th>Department</th>
                    <th>Load</th>
                    <th>Activity</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredFaculty.map((fac, i) => (
                      <motion.tr 
                        key={fac.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <td>
                          <div className="faculty-info-cell">
                            <div className="avatar-mini">{fac.name.charAt(0)}</div>
                            <span className="name">{fac.name}</span>
                          </div>
                        </td>
                        <td><span className="dept-badge">{fac.dept}</span></td>
                        <td>{fac.classes} Classes</td>
                        <td className="text-tertiary">{fac.last}</td>
                        <td>
                          <div className={`status-pill ${fac.status.toLowerCase()}`}>
                            <span className="dot"></span>
                            {fac.status}
                          </div>
                        </td>
                        <td>
                          <div className="action-row">
                            <button className="btn-icon-premium" title="Edit Profile"><Edit2 size={16} /></button>
                            <button className="btn-icon-premium delete" onClick={() => removeFaculty(fac.id)} title="Remove Access"><X size={16} /></button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className="content-sidebar">
          <section className="infrastructure-card card-premium">
            <div className="section-header">
              <h3>Core Infrastructure</h3>
              <Activity size={20} className="text-primary animate-pulse" />
            </div>
            <div className="health-metrics-premium">
              {[
                { label: 'Cloud Clusters', value: '45%', icon: Server, color: 'blue' },
                { id: 'LMS', label: 'LMS Database', value: '78%', icon: Database, color: 'purple' },
                { label: 'Campus Mesh', value: '12ms', icon: Wifi, color: 'emerald' }
              ].map((metric, i) => (
                <div key={i} className="metric-item-premium">
                  <div className="metric-top">
                    <div className="label-group">
                      <metric.icon size={14} className={`text-${metric.color}`} />
                      <span>{metric.label}</span>
                    </div>
                    <span className="val">{metric.value}</span>
                  </div>
                  <div className="progress-premium">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: metric.value }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`fill ${metric.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="asset-inventory card-premium mt-2">
            <h3>Strategic Assets</h3>
            <div className="asset-list-premium">
              {assets.map((asset, i) => (
                <div key={i} className="asset-item-premium">
                  <div className="info">
                    <strong>{asset.name}</strong>
                    <span>{asset.status}</span>
                  </div>
                  <div className={`level-indicator ${asset.level}`}></div>
                </div>
              ))}
            </div>
            <button className="btn-text-premium mt-1" onClick={() => addNotification('Opening deep asset analytics...')}>
              Detailed Inventory <ArrowUpRight size={14} />
            </button>
          </section>

          <section className="audit-premium card-premium mt-2">
            <div className="section-header">
              <h3>Activity Ledger</h3>
              <RefreshCw size={16} className="text-tertiary" />
            </div>
            <div className="audit-timeline">
              {[
                { time: '10:42 AM', action: 'Policy Override', actor: 'SuperAdmin' },
                { time: '09:15 AM', action: 'Auto Backup', actor: 'System' },
                { time: '08:30 AM', action: 'Auth Token Refresh', actor: 'Security' }
              ].map((log, i) => (
                <div key={i} className="timeline-item">
                  <span className="time">{log.time}</span>
                  <div className="log-dot"></div>
                  <div className="log-content">
                    <p>{log.action}</p>
                    <span>by {log.actor}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* Advanced Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-root">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="modal-overlay-premium"
            ></motion.div>
            <motion.div 
              initial={{ y: 50, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.9, opacity: 0 }}
              className="modal-window-premium card-premium"
            >
              <div className="modal-header">
                <div className="title-group">
                  <h3>Onboard Faculty</h3>
                  <p>Adding new academic staff to the ecosystem</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="close-btn"><X size={24} /></button>
              </div>
              
              <form onSubmit={handleRegister} className="premium-form">
                <div className="input-group">
                  <label>Faculty Identity</label>
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    placeholder="Full Legal Name" 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="input-group">
                    <label>Department</label>
                    <select value={formData.dept} onChange={(e) => setFormData({...formData, dept: e.target.value})} required>
                      <option value="">Select Domain</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics</option>
                      <option value="Biology">Biology</option>
                      <option value="Computer Science">Computer Science</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Weekly Load</label>
                    <input 
                      type="number" 
                      value={formData.classes} 
                      onChange={(e) => setFormData({...formData, classes: e.target.value})} 
                      placeholder="Hours" 
                    />
                  </div>
                </div>

                <div className="form-footer">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel">Abort</button>
                  <button type="submit" className="btn-confirm">Initialize Onboarding</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
