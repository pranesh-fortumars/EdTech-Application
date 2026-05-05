import React from 'react';
import { UserPlus, Search, Filter, Mail, Phone, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminModules.css';

const Admissions = () => {
  const applicants = [
    { name: 'Siva Rama', grade: 'Grade 10', status: 'In Review', date: '2026-05-01' },
    { name: 'Meera K.', grade: 'Grade 11', status: 'Awaiting Documents', date: '2026-04-28' },
    { name: 'Rahul V.', grade: 'Grade 9', status: 'Interview Scheduled', date: '2026-05-04' },
  ];

  return (
    <div className="admissions-container professional-theme">
      <div className="module-header flex justify-between items-center">
        <div>
          <h1>Institutional Admissions</h1>
          <p>Process and manage student enrollments for Academic Year 2026-27.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UserPlus size={18} /> New Application
        </button>
      </div>

      <div className="pro-grid-main">
        <div className="main-feed">
          <div className="admin-card no-padding overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-sm uppercase tracking-wider">Pending Applications</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" size={14} />
                  <input type="text" placeholder="Search..." className="pl-9 p-2 text-sm border rounded-lg outline-none focus:border-primary" />
                </div>
                <button className="btn-icon"><Filter size={14} /></button>
              </div>
            </div>
            <div className="pro-table-wrapper">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Applicant</th>
                    <th>Grade</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((app, i) => (
                    <tr key={i}>
                      <td><strong className="text-slate-800">{app.name}</strong></td>
                      <td>{app.grade}</td>
                      <td className="text-sm text-tertiary">{app.date}</td>
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
                          <button className="btn-icon"><Mail size={14} /></button>
                          <button className="btn-icon"><MoreHorizontal size={14} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="stats-sidebar">
          <div className="admin-card mb-6">
            <h3 className="font-bold mb-4">Admissions Pulse</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-tertiary font-bold">Total Applications</span>
                <strong className="text-3xl text-primary">482</strong>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  className="h-full bg-primary"
                />
              </div>
              <p className="text-xs text-secondary font-medium leading-relaxed">
                You have reached **75%** of the institutional target goal for AY 26-27.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Admissions;
