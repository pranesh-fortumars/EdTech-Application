import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { Target, Zap, Clock, Book, TrendingUp, Sparkles } from 'lucide-react';
import '../admin/AdminModules.css';

const performanceData = [
  { name: 'Week 1', react: 65, node: 40, css: 85 },
  { name: 'Week 2', react: 75, node: 45, css: 88 },
  { name: 'Week 3', react: 85, node: 60, css: 92 },
  { name: 'Week 4', react: 92, node: 70, css: 95 },
];

const subjectData = [
  { name: 'Frontend', value: 400 },
  { name: 'Backend', value: 300 },
  { name: 'AI/ML', value: 200 },
  { name: 'Design', value: 100 },
];

const COLORS = ['#0891b2', '#8b5cf6', '#f59e0b', '#10b981'];

const Analytics = () => {
  return (
    <div className="analytics-page-container">
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <TrendingUp size={32} className="text-primary" />
            <h1 style={{ margin: 0 }}>Learning <span className="text-gradient">Analytics</span></h1>
          </div>
          <p>Track your growth and performance across all academic modules.</p>
        </motion.div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { title: 'Total Modules', value: '18', icon: Book, trend: '+2', color: 'blue' },
          { title: 'Learning Velocity', value: '2.4x', icon: Zap, trend: '+15%', color: 'indigo' },
          { title: 'Time Invested', value: '156h', icon: Clock, trend: '+12h', color: 'amber' },
          { title: 'Goal Completion', value: '88%', icon: Target, trend: 'Optimal', color: 'emerald' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="admin-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div className={`bg-${stat.color}-vibrant`} style={{ width: '40px', height: '40px', borderRadius: '0.75rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <stat.icon size={20} />
              </div>
              <span className={`text-${stat.color === 'blue' || stat.color === 'emerald' ? 'success' : 'primary'} font-black uppercase tracking-widest`} style={{ fontSize: '0.65rem' }}>{stat.trend}</span>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.title}</p>
            <h3 className="text-2xl font-black text-slate-800" style={{ margin: '0.25rem 0' }}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <div className="flex-between mb-10">
              <h3 className="text-xl font-bold text-slate-800">Skill Growth Trend</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span className="badge-pro badge-blue">Frontend</span>
                <span className="badge-pro badge-indigo">Backend</span>
                <span className="badge-pro badge-emerald">Design</span>
              </div>
            </div>
            <div style={{ height: '350px', width: '100%', minWidth: 0 }}>
              <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 700, fill: '#94a3b8' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                  />
                  <Line type="monotone" dataKey="react" stroke="#0891b2" strokeWidth={4} dot={{ r: 6, fill: 'white', stroke: '#0891b2', strokeWidth: 3 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="node" stroke="#8b5cf6" strokeWidth={4} dot={{ r: 6, fill: 'white', stroke: '#8b5cf6', strokeWidth: 3 }} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="css" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: 'white', stroke: '#10b981', strokeWidth: 3 }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800" style={{ marginBottom: '1.5rem' }}>Time Distribution</h3>
            <div style={{ height: '260px', width: '100%' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={subjectData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {subjectData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1rem' }}>
              {subjectData.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS[i] }} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-secondary)' }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card" style={{ background: 'var(--bg-secondary)', border: '1px solid #bfdbfe' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                <Sparkles size={20} className="text-primary" />
              </div>
              <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 900 }}>Aura Analysis</h4>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              You're spending most of your time on <strong>Frontend</strong>, but your growth rate is highest in <strong>AI/ML</strong>. Consider balancing your week with more Node.js labs.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Analytics;
