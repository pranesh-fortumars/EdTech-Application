import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, BookOpen, Calendar, MessageSquare, 
  TrendingUp, Award, Clock, AlertTriangle,
  ChevronRight, Download, Mail
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import useNotificationStore from '../../store/useNotificationStore';
import '../admin/AdminModules.css';

const performanceData = [
  { month: 'Jan', score: 82 },
  { month: 'Feb', score: 85 },
  { month: 'Mar', score: 88 },
  { month: 'Apr', score: 92 },
];

const ParentDashboard = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="parent-dashboard-container">
      <header className="dashboard-executive-header mb-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="student-avatar-large">
            <Baby size={36} />
          </div>
          <div>
            <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--primary)', marginBottom: '0.25rem', display: 'block' }}>Student Profile</span>
            <h1 className="text-3xl font-black text-slate-900" style={{ margin: 0 }}>Anbu Selvan</h1>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <span className="grade-chip">Grade 12-A</span>
              <span className="grade-chip">Roll: #2026104</span>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-executive-outline" onClick={() => addNotification('Opening directory...', 'info')}>
            <Mail size={16} /> Contact Faculty
          </button>
          <button className="btn-executive-primary" onClick={() => addNotification('Generating PDF...', 'success')}>
            <Download size={16} /> Academic Record
          </button>
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { label: 'Academic GPA', value: '3.82', icon: TrendingUp, trend: '+0.12%', color: 'blue' },
          { label: 'Attendance Rate', value: '94.8%', icon: Clock, trend: 'Optimal', color: 'emerald' },
          { label: 'Aura Credits', value: '1,240', icon: Award, trend: 'Tier 1', color: 'amber' },
          { label: 'Active Alerts', value: '01', icon: AlertTriangle, trend: 'Review Needed', color: 'rose' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="stat-node-clean"
          >
            <div className={`node-icon bg-${stat.color}-vibrant text-white`}>
              <stat.icon size={20} />
            </div>
            <div className="node-data">
              <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800" style={{ margin: '0.25rem 0' }}>{stat.value}</h3>
              <p className={`text-success font-black uppercase`} style={{ fontSize: '0.65rem', color: stat.color === 'rose' ? 'var(--error)' : 'var(--success)', margin: 0 }}>{stat.trend}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <div className="flex-between mb-10">
              <h3 className="text-xl font-bold text-slate-800">Academic Progress Curve</h3>
              <select className="tag-pill">
                <option>All Subjects</option>
                <option>Physics</option>
                <option>Calculus</option>
              </select>
            </div>
            <div style={{ height: '320px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="var(--primary)" 
                    strokeWidth={5} 
                    dot={{ r: 6, fill: 'white', stroke: 'var(--primary)', strokeWidth: 3 }} 
                    activeDot={{ r: 8, strokeWidth: 0, fill: 'var(--primary)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="flex-between" style={{ padding: '1.5rem', background: 'rgba(248, 250, 252, 0.5)', borderBottom: '1px solid var(--border-color)' }}>
              <h3 className="text-lg font-bold text-slate-800">Institutional Calendar</h3>
              <button className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--primary)' }}>View All</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { date: 'May 15', title: 'Second Term Examination', type: 'Exam' },
                { date: 'May 20', title: 'Parent Teacher Meeting', type: 'Meeting' },
                { date: 'June 02', title: 'Summer Tech Workshop', type: 'Event' }
              ].map((ev, i) => (
                <div key={i} style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--bg-tertiary)' }} className="hover-bg-slate group cursor-pointer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="date-badge-pro" style={{ flexShrink: 0 }}>
                      <span className="month">{ev.date.split(' ')[0]}</span>
                      <span className="day">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>{ev.title}</h4>
                      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <span className={`badge-pro ${
                          ev.type === 'Exam' ? 'badge-rose' :
                          ev.type === 'Meeting' ? 'badge-amber' : 'badge-emerald'
                        }`}>
                          {ev.type}
                        </span>
                        <span className="text-slate-400 font-bold uppercase tracking-widest" style={{ fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={12} /> 09:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="btn-action-round">
                    <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card" style={{ background: 'rgba(254, 243, 199, 0.3)', borderColor: '#fde68a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '1rem', background: '#fef3c7', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800" style={{ margin: 0 }}>Pedagogical Feedback</h3>
                <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.6rem', color: '#b45309', margin: 0 }}>Urgent Review</p>
              </div>
            </div>
            <div style={{ padding: '1.25rem', background: 'white', borderRadius: '1rem', border: '1px solid #fef3c7' }}>
              <p className="text-sm text-slate-600 font-medium italic leading-relaxed" style={{ margin: 0 }}>
                "Anbu is performing exceptionally well in **Physics**. However, we suggest focusing more on **Calculus** applications for the upcoming finals."
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #fde68a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.65rem' }}>SK</div>
                <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.6rem', margin: 0 }}>Selvi Kavitha (Class Teacher)</p>
              </div>
            </div>
          </div>

          <div className="admin-card" style={{ background: 'white', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <TrendingUp size={24} style={{ color: 'var(--primary)' }} />
                <h3 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Financial Health</h3>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', marginBottom: '0.25rem' }}>Outstanding Balance</p>
                <h2 className="text-4xl font-black text-slate-900" style={{ margin: 0 }}>₹45,000</h2>
              </div>
              <button 
                className="btn-primary-vibrant" 
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                onClick={() => addNotification('Redirecting to Fee Portal...')}
              >
                PAY SECURELY NOW
              </button>
            </div>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '128px', height: '128px', borderRadius: '50%', background: 'rgba(8, 145, 178, 0.05)', filter: 'blur(40px)' }}></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ParentDashboard;
