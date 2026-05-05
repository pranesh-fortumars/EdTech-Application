import React from 'react';
import { UserPlus, Search, Filter, Mail, Phone, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminModules.css';

const Admissions = () => {
  const applicants = [
    { name: 'Siva Rama', grade: 'Grade 10', status: 'In Review', date: '2026-05-01', avatar: 'S' },
    { name: 'Meera K.', grade: 'Grade 11', status: 'Awaiting Documents', date: '2026-04-28', avatar: 'M' },
    { name: 'Rahul V.', grade: 'Grade 9', status: 'Interview Scheduled', date: '2026-05-04', avatar: 'R' },
  ];

  return (
    <div className="admissions-container professional-theme">
      <div className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1>Institutional Admissions</h1>
          <p>Orchestrate student enrollments with high-fidelity tracking.</p>
        </motion.div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary-vibrant flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl font-bold"
        >
          <UserPlus size={20} /> New Application Portal
        </motion.button>
      </div>

      <div className="pro-grid-main">
        <div className="main-feed">
          <div className="admin-card overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-slate-800 tracking-tight">Active Application Queue</h3>
              <div className="flex gap-4">
                <div className="search-pill">
                  <Search size={16} />
                  <input type="text" placeholder="Search by name or grade..." />
                </div>
                <button className="btn-icon-vibrant"><Filter size={18} /></button>
              </div>
            </div>
            <div className="pro-table-wrapper">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Applicant Profile</th>
                    <th>Grade</th>
                    <th>Application Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((app, i) => (
                    <motion.tr 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <td className="flex items-center gap-4">
                        <div className="avatar-vibrant">{app.avatar}</div>
                        <strong className="text-slate-900 text-lg">{app.name}</strong>
                      </td>
                      <td><span className="grade-chip">{app.grade}</span></td>
                      <td className="text-sm font-bold text-slate-500">{app.date}</td>
                      <td>
                        <span className={`badge-pro ${
                          app.status === 'In Review' ? 'badge-blue' :
                          app.status === 'Interview Scheduled' ? 'badge-purple' :
                          'badge-amber'
                        }`}>
                          {app.status}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button className="btn-action-round"><Mail size={16} /></button>
                          <button className="btn-action-round"><MoreHorizontal size={16} /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="stats-sidebar">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="admin-card bg-indigo-vibrant text-white mb-8"
          >
            <h3 className="font-black text-white/80 uppercase text-xs tracking-widest mb-6">Enrollment Velocity</h3>
            <div className="flex items-end gap-3 mb-4">
              <strong className="text-5xl font-black">482</strong>
              <span className="text-emerald-300 font-bold mb-1">+12% vs LY</span>
            </div>
            <div className="h-4 bg-white/20 rounded-full overflow-hidden mb-4">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                className="h-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              />
            </div>
            <p className="text-sm text-indigo-100 font-medium">
              Achieved **75.4%** of institutional target. Final surge expected in late May.
            </p>
          </motion.div>

          <div className="admin-card">
            <h3 className="font-bold text-slate-800 mb-6">Upcoming Interviews</h3>
            <div className="space-y-4">
              {[
                { name: 'Rahul V.', time: 'Today, 2:00 PM', color: 'purple' },
                { name: 'Siva Rama', time: 'Tomorrow, 10:30 AM', color: 'blue' }
              ].map((inv, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className={`w-2 h-12 bg-${inv.color}-500 rounded-full`} />
                  <div>
                    <p className="font-bold text-slate-900">{inv.name}</p>
                    <p className="text-xs text-slate-500 font-bold">{inv.time}</p>
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

export default Admissions;
