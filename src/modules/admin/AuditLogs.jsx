import React from 'react';
import { ShieldCheck, Clock, User, Globe, AlertTriangle } from 'lucide-react';
import './AdminModules.css';

const AuditLogs = () => {
  const logs = [
    { time: '12:45 PM', user: 'Admin (System)', action: 'Firewall Policy Updated', type: 'security' },
    { time: '11:20 AM', user: 'Teacher (Arun K.)', action: 'Grade Override: STU001', type: 'academic' },
    { time: '10:05 AM', user: 'System', action: 'Weekly Database Backup Successful', type: 'system' },
    { time: '09:30 AM', user: 'User (Kavitha R.)', action: 'Failed Login Attempt', type: 'warning' },
  ];

  return (
    <div className="audit-logs professional-theme">
      <header className="module-header">
        <h1>Institutional Audit</h1>
        <p>Immutable record of all system and administrative actions across the platform.</p>
      </header>

      <div className="admin-card no-padding overflow-hidden">
        <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
          <div className="flex gap-4">
            <select className="p-2 text-xs font-bold border rounded bg-white outline-none focus:border-primary">
              <option>Filter by Action Type</option>
              <option>Security Protocols</option>
              <option>Academic Overrides</option>
              <option>System Maintenance</option>
            </select>
          </div>
          <button className="text-xs font-black uppercase tracking-widest text-primary hover:underline">
            Export Master Audit (PDF)
          </button>
        </div>
        
        <div className="audit-list">
          {logs.map((log, i) => (
            <div key={i} className="audit-item">
              <div className="flex items-center gap-2 text-tertiary">
                <Clock size={14} />
                <span className="text-sm font-mono">{log.time}</span>
              </div>
              
              <div className="log-details">
                <p className="font-bold text-slate-800 mb-1">{log.action}</p>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold">
                    {log.user.charAt(0)}
                  </div>
                  <span className="text-xs text-secondary font-medium">{log.user}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <span className={`badge-pro ${
                  log.type === 'security' ? 'badge-purple' :
                  log.type === 'academic' ? 'badge-emerald' :
                  log.type === 'warning' ? 'badge-rose' :
                  'badge-blue'
                }`}>
                  {log.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuditLogs;
