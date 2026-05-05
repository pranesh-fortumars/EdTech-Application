import React from 'react';
import { BarChart3, TrendingUp, Award, FileText, Download, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import '../admin/AdminModules.css';

const ParentReports = () => {
  return (
    <div className="parent-reports">
      <header className="module-header flex justify-between items-end mb-12">
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
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">Subject Mastery Index</h3>
              <div className="badge-pro badge-emerald">
                <TrendingUp size={14} />
                +3.2% Overall Growth
              </div>
            </div>
            <div className="space-y-10">
              {[
                { subject: 'Physics', score: 92, trend: '+4%', color: 'blue' },
                { subject: 'Mathematics', score: 88, trend: '+2%', color: 'indigo' },
                { subject: 'Chemistry', score: 76, trend: '-1%', color: 'rose' },
                { subject: 'English', score: 95, trend: '+5%', color: 'emerald' }
              ].map((s, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-black text-slate-700 uppercase tracking-wider">{s.subject}</span>
                    <div className="flex gap-4 font-black">
                      <span className={s.trend.includes('+') ? 'text-emerald-500' : 'text-rose-500'}>{s.trend}</span>
                      <span className="text-slate-900">{s.score}%</span>
                    </div>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner p-1">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${s.score}%` }}
                      className={`h-full rounded-full bg-${s.color}-vibrant shadow-lg`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="achievements-sidebar">
          <div className="admin-card bg-purple-vibrant text-white mb-8">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/30">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-lg">Top Achiever</h3>
                  <p className="text-xs text-purple-100 font-bold">Science & Tech Cluster</p>
                </div>
              </div>
              <p className="text-sm text-purple-50 leading-relaxed font-medium">
                Ranked in the **Top 5%** of the institution for academic excellence in STEM subjects.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          </div>

          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-8">Learning Milestones</h3>
            <div className="space-y-4">
              {[
                { title: 'Perfect Quiz Score', date: 'May 02', icon: Target, color: 'amber' },
                { title: '100% Attendance Week', date: 'Apr 28', icon: CheckCircle2, color: 'emerald' },
                { title: 'Creative Writing Excellence', date: 'Apr 25', icon: FileText, color: 'blue' }
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-primary-light transition-all cursor-default">
                  <div className={`w-12 h-12 bg-${a.color}-vibrant text-white rounded-xl flex items-center justify-center shadow-lg shadow-${a.color}-500/20`}>
                    <a.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{a.title}</p>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{a.date}</span>
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

const CheckCircle2 = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;

export default ParentReports;
