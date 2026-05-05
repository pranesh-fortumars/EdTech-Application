import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, BookOpen, Calendar, MessageSquare, 
  TrendingUp, Award, Clock, AlertTriangle,
  ChevronRight, Download, Mail
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
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
    <div className="parent-dashboard-container professional-theme">
      <header className="dashboard-executive-header mb-12">
        <div className="profile-context flex items-center gap-6">
          <div className="student-avatar-large">
            <Baby size={32} />
          </div>
          <div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 block">Student Profile</span>
            <h1 className="text-3xl font-black text-slate-900 !m-0">Anbu Selvan</h1>
            <div className="flex gap-4 mt-2">
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Grade 12-A</span>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Roll: #2026104</span>
            </div>
          </div>
        </div>
        
        <div className="executive-actions flex gap-3">
          <button className="btn-executive-outline" onClick={() => addNotification('Opening directory...', 'info')}>
            <Mail size={14} /> Contact Faculty
          </button>
          <button className="btn-executive-primary" onClick={() => addNotification('Generating PDF...', 'success')}>
            <Download size={14} /> Academic Record
          </button>
        </div>
      </header>

      <div className="quick-stats-strip grid grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Academic GPA', value: '3.82', icon: TrendingUp, trend: '+0.12%', color: 'blue' },
          { label: 'Attendance Rate', value: '94.8%', icon: Clock, trend: 'Optimal', color: 'emerald' },
          { label: 'Aura Credits', value: '1,240', icon: Award, trend: 'Tier 1', color: 'amber' },
          { label: 'Active Alerts', value: '01', icon: AlertTriangle, trend: 'Review Needed', color: 'rose' }
        ].map((stat, i) => (
          <div key={i} className="stat-node-clean">
            <div className={`node-icon bg-${stat.color}-50 text-${stat.color}-600`}>
              <stat.icon size={18} />
            </div>
            <div className="node-data">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-xl font-black text-slate-800">{stat.value}</h3>
              <p className={`text-[9px] font-black uppercase text-${stat.color === 'rose' ? 'rose' : 'emerald'}-600`}>{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="pro-grid-main">
        <div className="main-content">
          <div className="admin-card mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-slate-800">Academic Progress Curve</h3>
              <select className="tag-pill bg-transparent border-slate-200">
                <option>All Subjects</option>
                <option>Physics</option>
                <option>Calculus</option>
              </select>
            </div>
            <div className="chart-container h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="var(--primary)" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: 'white', stroke: 'var(--primary)', strokeWidth: 3 }} 
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50">
              <h3 className="font-bold text-slate-800">Institutional Calendar</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { date: 'May 15', title: 'Second Term Examination', type: 'Exam' },
                { date: 'May 20', title: 'Parent Teacher Meeting', type: 'Meeting' },
                { date: 'June 02', title: 'Summer Tech Workshop', type: 'Event' }
              ].map((ev, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="date-badge-pro" style={{ flexShrink: 0 }}>
                      <span className="month">{ev.date.split(' ')[0]}</span>
                      <span className="day">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 m-0 leading-tight">{ev.title}</h4>
                      <div className="mt-1">
                        <span className={`badge-pro ${
                          ev.type === 'Exam' ? 'badge-rose' :
                          ev.type === 'Meeting' ? 'badge-amber' : 'badge-emerald'
                        }`} style={{ fontSize: '10px', padding: '2px 8px' }}>
                          {ev.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-300 group-hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

        </div>

        <aside className="sidebar-content">
          <div className="admin-card border-amber-200 bg-amber-50/30 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-bold text-slate-800">Pedagogical Feedback</h3>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-amber-100 shadow-sm">
              <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                "Anbu is performing exceptionally well in **Physics**. However, we suggest focusing more on **Calculus** applications for the upcoming finals."
              </p>
              <p className="text-[10px] font-black text-amber-500 mt-4 uppercase tracking-widest">— Selvi Kavitha (Class Teacher)</p>
            </div>
          </div>

          <div className="admin-card bg-slate-900 text-white">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={20} className="text-rose-400" />
              <h3 className="font-bold">Financial Health</h3>
            </div>
            <div className="mb-6">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Outstanding Balance</p>
              <h2 className="text-3xl font-black text-white">₹45,000</h2>
            </div>
            <button 
              className="w-full py-3 bg-primary text-white rounded-xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              onClick={() => addNotification('Redirecting to Fee Portal...')}
            >
              PAY SECURELY NOW
            </button>
          </div>
        </aside>
      </div>

    </div>
  );
};

export default ParentDashboard;
