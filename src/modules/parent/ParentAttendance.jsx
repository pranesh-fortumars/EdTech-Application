import React from 'react';
import { CalendarCheck, Info, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import '../admin/AdminModules.css';

const ParentAttendance = () => {
  const attendanceData = [
    { date: 'May 05', status: 'Present', subject: 'Physics', time: '09:00 AM' },
    { date: 'May 04', status: 'Present', subject: 'Mathematics', time: '10:30 AM' },
    { date: 'May 03', status: 'Late', subject: 'Chemistry', time: '09:15 AM' },
    { date: 'May 02', status: 'Present', subject: 'English', time: '11:00 AM' },
  ];

  return (
    <div className="parent-attendance">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1>Attendance Monitor</h1>
          <p>Real-time institutional presence tracking for your child.</p>
        </motion.div>
        <div className="flex gap-4">
          <button className="btn-icon-vibrant"><Clock size={20} /></button>
          <button className="btn-primary-vibrant">Request Leave</button>
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { label: 'Overall Attendance', val: '94%', color: 'emerald', sub: 'Institutional Target: 90%' },
          { label: 'Days Present', val: '142', color: 'blue', sub: 'Total Working Days: 151' },
          { label: 'Late Arrivals', val: '3', color: 'amber', sub: 'Requires Attention' },
          { label: 'Unexcused', val: '2', color: 'rose', sub: 'Warning Issued' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }}
            className={`admin-card node-card`}
          >
            <div className="flex justify-between items-start mb-6">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{stat.label}</p>
              <div className={`w-2 h-2 rounded-full bg-${stat.color}-500 shadow-[0_0_10px_var(--${stat.color})]`}></div>
            </div>
            <strong className={`text-5xl font-black text-slate-900 mb-2 block`}>{stat.val}</strong>
            <p className="text-xs text-slate-500 font-bold">{stat.sub}</p>
            <div className={`node-glow glow-${stat.color}`} />
          </motion.div>
        ))}
      </div>

      <div className="admin-card !p-0">
        <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-800 uppercase text-xs tracking-widest">Recent Presence Logs</h3>
          <div className="flex items-center gap-2">
            <div className="ping-dot"></div>
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Live Campus Sync</span>
          </div>
        </div>
        <div className="pro-table-wrapper border-none shadow-none">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Temporal Data</th>
                <th>Academic Subject</th>
                <th>Check-in Signature</th>
                <th>Status Signature</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, i) => (
                <tr key={i}>
                  <td><strong className="text-slate-800 font-black">{row.date}</strong></td>
                  <td><span className="grade-chip">{row.subject}</span></td>
                  <td className="font-mono font-bold text-slate-500">{row.time}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <span className={`badge-pro ${
                        row.status === 'Present' ? 'badge-emerald' : 
                        row.status === 'Late' ? 'badge-amber' : 'badge-rose'
                      }`}>
                        {row.status === 'Present' ? <CheckCircle2 size={12} /> : row.status === 'Late' ? <Clock size={12} /> : <XCircle size={12} />}
                        {row.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParentAttendance;
