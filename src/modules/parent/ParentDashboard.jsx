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
    <div className="parent-dashboard-container">
      <header className="dashboard-executive-header mb-12">
        <div className="profile-context flex items-center gap-6">
          <div className="student-avatar-large">
            <Baby size={36} />
          </div>
          <div>
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 block">Student Profile</span>
            <h1 className="text-3xl font-black text-slate-900 !m-0">Anbu Selvan</h1>
            <div className="flex gap-4 mt-2">
              <span className="grade-chip">Grade 12-A</span>
              <span className="grade-chip">Roll: #2026104</span>
            </div>
          </div>
        </div>
        
        <div className="executive-actions flex gap-4">
          <button className="btn-executive-outline" onClick={() => addNotification('Opening directory...', 'info')}>
            <Mail size={16} /> Contact Faculty
          </button>
          <button className="btn-executive-primary" onClick={() => addNotification('Generating PDF...', 'success')}>
            <Download size={16} /> Academic Record
          </button>
        </div>
      </header>

      <div className="quick-stats-strip pro-grid-4 mb-12">
        {[
          { label: 'Academic GPA', value: '3.82', icon: TrendingUp, trend: '+0.12%', color: 'blue' },
          { label: 'Attendance Rate', value: '94.8%', icon: Clock, trend: 'Optimal', color: 'emerald' },
          { label: 'Aura Credits', value: '1,240', icon: Award, trend: 'Tier 1', color: 'amber' },
          { label: 'Active Alerts', value: '01', icon: AlertTriangle, trend: 'Review Needed', color: 'rose' }
        ].map((stat, i) => (
          <div key={i} className="stat-node-clean">
            <div className={`node-icon bg-${stat.color}-vibrant text-white`}>
              <stat.icon size={20} />
            </div>
            <div className="node-data">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
              <p className={`text-[10px] font-black uppercase text-${stat.color === 'rose' ? 'rose' : 'emerald'}-600`}>{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="pro-grid-main">
        <div className="main-content">
          <div className="admin-card mb-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-slate-800">Academic Progress Curve</h3>
              <select className="tag-pill">
                <option>All Subjects</option>
                <option>Physics</option>
                <option>Calculus</option>
              </select>
            </div>
            <div className="chart-container h-[320px]">
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

          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Institutional Calendar</h3>
              <button className="text-xs font-bold text-primary uppercase tracking-widest">View All</button>
            </div>
            <div className="divide-y divide-slate-100">
              {[
                { date: 'May 15', title: 'Second Term Examination', type: 'Exam' },
                { date: 'May 20', title: 'Parent Teacher Meeting', type: 'Meeting' },
                { date: 'June 02', title: 'Summer Tech Workshop', type: 'Event' }
              ].map((ev, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50/80 transition-all cursor-pointer group">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div className="date-badge-pro" style={{ flexShrink: 0 }}>
                      <span className="month">{ev.date.split(' ')[0]}</span>
                      <span className="day">{ev.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 m-0 leading-tight">{ev.title}</h4>
                      <div className="mt-2 flex gap-2">
                        <span className={`badge-pro ${
                          ev.type === 'Exam' ? 'badge-rose' :
                          ev.type === 'Meeting' ? 'badge-amber' : 'badge-emerald'
                        }`}>
                          {ev.type}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
                          <Clock size={10} /> 09:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <aside className="sidebar-content">
          <div className="admin-card border-amber-200 bg-amber-50/20 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-inner">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Pedagogical Feedback</h3>
                <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest">Urgent Review</p>
              </div>
            </div>
            <div className="p-5 bg-white/80 backdrop-filter blur-sm rounded-2xl border border-amber-100 shadow-sm">
              <p className="text-sm text-slate-600 font-medium italic leading-relaxed">
                "Anbu is performing exceptionally well in **Physics**. However, we suggest focusing more on **Calculus** applications for the upcoming finals."
              </p>
              <div className="mt-5 pt-4 border-t border-amber-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex-center font-bold text-[10px]">SK</div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selvi Kavitha (Class Teacher)</p>
              </div>
            </div>
          </div>

          <div className="admin-card bg-slate-900 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={24} className="text-primary-light" />
                <h3 className="text-lg font-bold">Financial Health</h3>
              </div>
              <div className="mb-8">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Outstanding Balance</p>
                <h2 className="text-4xl font-black text-white">₹45,000</h2>
              </div>
              <button 
                className="w-full py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-primary/30"
                onClick={() => addNotification('Redirecting to Fee Portal...')}
              >
                PAY SECURELY NOW
              </button>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
};

export default ParentDashboard;
