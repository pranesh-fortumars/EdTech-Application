import React from 'react';
import { BarChart3, TrendingUp, Award, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const ParentReports = () => {
  return (
    <div className="parent-reports p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-3">
            <BarChart3 className="text-blue-600" /> Academic Performance
          </h1>
          <p className="text-secondary">Comprehensive analysis of test scores and learning progress.</p>
        </div>
        <button className="btn-outline flex items-center gap-2">
          <Download size={18} /> Download Full Report
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card glass p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold">Subject Performance</h3>
            <TrendingUp size={18} className="text-emerald-500" />
          </div>
          <div className="space-y-6">
            {[
              { subject: 'Physics', score: 92, trend: '+4%' },
              { subject: 'Mathematics', score: 88, trend: '+2%' },
              { subject: 'Chemistry', score: 76, trend: '-1%' },
              { subject: 'English', score: 95, trend: '+5%' }
            ].map((s, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>{s.subject}</span>
                  <div className="flex gap-3">
                    <span className="text-emerald-600">{s.trend}</span>
                    <span>{s.score}%</span>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${s.score}%` }}
                    className="h-full bg-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card glass p-6">
          <h3 className="font-bold mb-6">Recent Achievements</h3>
          <div className="space-y-4">
            {[
              { title: 'Top Scorer in Physics Quiz', date: 'May 02', icon: Award, color: 'amber' },
              { title: '100% Attendance Week', date: 'Apr 28', icon: CheckCircle2, color: 'emerald' },
              { title: 'Creative Writing Excellence', date: 'Apr 25', icon: FileText, color: 'purple' }
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl">
                <div className={`w-10 h-10 bg-${a.color}-100 text-${a.color}-600 rounded-lg flex items-center justify-center`}>
                  <a.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{a.title}</p>
                  <span className="text-xs text-secondary">{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ size, className }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;

export default ParentReports;
