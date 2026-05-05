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
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <Baby className="text-primary" size={32} />
            <h1 className="!m-0">Anbu's Progress</h1>
          </div>
          <p>Class 12-A | Roll No: 2026104</p>
        </motion.div>
        <div className="flex gap-4">
          <button className="btn-icon-vibrant" onClick={() => addNotification('Sending message to Class Teacher...', 'success')}>
            <Mail size={16} /> Contact Teacher
          </button>
          <button className="btn-primary-vibrant" onClick={() => addNotification('Downloading progress report...', 'success')}>
            <Download size={16} /> Progress Report
          </button>
        </div>
      </header>



      <div className="pro-grid-4 mb-12">
        {[
          { icon: TrendingUp, label: 'Current GPA', value: '3.8', trend: '+0.2 from last term', color: 'blue' },
          { icon: Clock, label: 'Attendance', value: '94%', trend: 'On track', color: 'emerald' },
          { icon: Award, label: 'Aura Credits', value: '1,240', trend: 'Top 5% of class', color: 'amber' },
          { icon: AlertTriangle, label: 'Alerts', value: '1 Active', trend: 'Disciplinary', color: 'rose' }
        ].map((stat, i) => (
          <div key={i} className="admin-card">
            <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-xl font-black text-slate-800">{stat.value}</h3>
            <p className={`text-[10px] font-bold mt-2 text-${stat.color === 'rose' ? 'rose' : 'emerald'}-600`}>{stat.trend}</p>
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
