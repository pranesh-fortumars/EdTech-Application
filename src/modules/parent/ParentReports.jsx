import React from 'react';
import { BarChart3, TrendingUp, Award, FileText, Download, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import '../admin/AdminModules.css';

const ParentReports = () => {
  return (
    <div className="parent-reports">
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1>Academic Performance</h1>
          <p>Multi-dimensional analysis of your child's learning journey.</p>
        </motion.div>
        <button className="btn-primary-vibrant">
          <Download size={20} /> Export Progress Transcript
        </button>
      </header>

      <div className="pro-grid-main mb-12">
        <div className="main-stats">
          <div className="admin-card">
            <div className="flex-between" style={{ marginBottom: '2.5rem' }}>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Subject Mastery Index</h3>
              <div className="badge-pro badge-emerald">
                <TrendingUp size={14} />
                <span className="font-bold">+3.2% Overall Growth</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                { subject: 'Physics', score: 92, trend: '+4%', color: 'blue' },
                { subject: 'Mathematics', score: 88, trend: '+2%', color: 'indigo' },
                { subject: 'Chemistry', score: 76, trend: '-1%', color: 'rose' },
                { subject: 'English', score: 95, trend: '+5%', color: 'emerald' }
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="flex-between">
                    <span className="font-black text-slate-700 uppercase tracking-wider" style={{ fontSize: '0.8rem' }}>{s.subject}</span>
                    <div style={{ display: 'flex', gap: '1rem', fontWeight: 900 }}>
                      <span className={s.trend.includes('+') ? 'text-success' : 'text-error'} style={{ fontSize: '0.85rem' }}>{s.trend}</span>
                      <span className="text-slate-900" style={{ fontSize: '0.85rem' }}>{s.score}%</span>
                    </div>
                  </div>
                  <div className="pro-progress-container">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${s.score}%` }}
                      className={`pro-progress-bar bg-${s.color}-vibrant`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="achievements-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card bg-purple-vibrant" style={{ color: 'white' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.2)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                  <Award size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-black text-lg" style={{ margin: 0, color: 'white' }}>Top Achiever</h3>
                  <p className="text-xs font-bold" style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>Science & Tech Cluster</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed font-medium" style={{ margin: 0 }}>
                Ranked in the **Top 5%** of the institution for academic excellence in STEM subjects.
              </p>
            </div>
          </div>

          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-900" style={{ marginBottom: '2rem' }}>Learning Milestones</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Perfect Quiz Score', date: 'May 02', icon: Target, color: 'amber' },
                { title: '100% Attendance Week', date: 'Apr 28', icon: CheckCircle2, color: 'emerald' },
                { title: 'Creative Writing Excellence', date: 'Apr 25', icon: FileText, color: 'blue' }
              ].map((a, i) => (
                <div key={i} className="milestone-node">
                  <div className={`milestone-icon bg-${a.color}-vibrant`}>
                    <a.icon size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900" style={{ fontSize: '0.9rem', margin: 0 }}>{a.title}</p>
                    <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>{a.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
);

export default ParentReports;
