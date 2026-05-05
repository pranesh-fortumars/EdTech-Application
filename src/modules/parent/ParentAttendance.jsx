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
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1>Attendance Monitor</h1>
          <p>Real-time institutional presence tracking for your child.</p>
        </motion.div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-icon-vibrant" style={{ width: '48px', height: '48px' }}><Clock size={20} /></button>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.label}</p>
              <div className={`ping-dot`} style={{ background: `var(--${stat.color === 'emerald' ? 'success' : stat.color === 'rose' ? 'error' : stat.color})`, width: '8px', height: '8px' }}></div>
            </div>
            <strong style={{ fontSize: '3rem', fontWeight: 900, color: '#0f172a', display: 'block', marginBottom: '0.5rem' }}>{stat.val}</strong>
            <p className="text-slate-500 font-bold" style={{ fontSize: '0.75rem', margin: 0 }}>{stat.sub}</p>
            <div className={`node-glow glow-${stat.color}`} />
          </motion.div>
        ))}
      </div>

      <div className="admin-card" style={{ padding: 0 }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(248, 250, 252, 0.5)' }}>
          <h3 className="font-bold text-slate-800 uppercase tracking-widest" style={{ fontSize: '0.7rem', margin: 0 }}>Recent Presence Logs</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div className="ping-dot"></div>
            <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>Live Campus Sync</span>
          </div>
        </div>
        <div className="pro-table-wrapper" style={{ border: 'none', boxShadow: 'none' }}>
          <table className="pro-table">
            <thead>
              <tr>
                <th style={{ background: 'transparent' }}>Temporal Data</th>
                <th style={{ background: 'transparent' }}>Academic Subject</th>
                <th style={{ background: 'transparent' }}>Check-in Signature</th>
                <th style={{ background: 'transparent' }}>Status Signature</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, i) => (
                <tr key={i}>
                  <td><strong className="text-slate-900 font-black">{row.date}</strong></td>
                  <td><span className="grade-chip">{row.subject}</span></td>
                  <td style={{ fontFamily: 'monospace', fontWeight: 700, color: '#64748b' }}>{row.time}</td>
                  <td>
                    <span className={`badge-pro ${
                      row.status === 'Present' ? 'badge-emerald' : 
                      row.status === 'Late' ? 'badge-amber' : 'badge-rose'
                    }`}>
                      {row.status === 'Present' ? <CheckCircle2 size={12} /> : row.status === 'Late' ? <Clock size={12} /> : <XCircle size={12} />}
                      {row.status}
                    </span>
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
