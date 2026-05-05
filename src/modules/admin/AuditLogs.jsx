import React from 'react';
import { ShieldCheck, Clock, User, Globe, AlertTriangle, Hash, Zap, Search, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminModules.css';

const AuditLogs = () => {
  const logs = [
    { time: '12:45:22 PM', user: 'Admin (System)', action: 'Global Firewall Policy Updated', type: 'security', id: 'LOG-8829' },
    { time: '11:20:15 AM', user: 'Teacher (Arun K.)', action: 'Academic Grade Override: STU001', type: 'academic', id: 'LOG-8828' },
    { time: '10:05:01 AM', user: 'System (Cron)', action: 'Weekly Snapshot Backup Completed', type: 'system', id: 'LOG-8827' },
    { time: '09:30:44 AM', user: 'User (Kavitha R.)', action: 'Unauthorized Login Attempt Detected', type: 'warning', id: 'LOG-8826' },
  ];

  return (
    <div className="audit-logs professional-theme">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-primary" size={32} />
            <h1 className="!m-0">Institutional Ledger</h1>
          </div>
          <p>Immutable forensic record of all platform operations and security events.</p>
        </motion.div>
        <div className="flex gap-4">
          <div className="live-status-pill">
            <span className="ping-dot" />
            LIVE FEED ACTIVE
          </div>
          <button className="btn-primary-vibrant px-6 py-3 rounded-xl font-bold text-sm">
            GENERATE FULL AUDIT REPORT (PDF)
          </button>
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="main-ledger">
          <div className="admin-card !p-0 overflow-hidden">
            <div className="ledger-toolbar">
              <div className="flex items-center gap-4">
                <div className="search-pill-ledger">
                  <Search size={14} />
                  <input type="text" placeholder="Filter by event, hash, or identity..." />
                </div>
                <div className="flex gap-2">
                  {['Security', 'Academic', 'System'].map(tag => (
                    <button key={tag} className="tag-pill">{tag}</button>
                  ))}
                </div>
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Last Sync: 2s ago
              </div>
            </div>

            <div className="ledger-timeline">
              {logs.map((log, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="timeline-item"
                >
                  <div className="time-signature">
                    <Clock size={12} />
                    {log.time}
                  </div>
                  
                  <div className="timeline-connector">
                    <div className="connector-dot" />
                    {i !== logs.length - 1 && <div className="connector-line" />}
                  </div>

                  <div className="event-payload">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Hash size={12} className="text-primary" />
                          <span className="text-[10px] font-mono font-black text-primary opacity-60 tracking-widest">{log.id}</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-800 leading-tight">{log.action}</h4>
                      </div>
                      <span className={`badge-pro !rounded-md ${
                        log.type === 'security' ? 'badge-purple' :
                        log.type === 'academic' ? 'badge-emerald' :
                        log.type === 'warning' ? 'badge-rose' :
                        'badge-blue'
                      }`}>
                        {log.type}
                      </span>
                    </div>

                    <div className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-xs font-black text-slate-700 border border-slate-100">
                          {log.user.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Initiated By</p>
                          <p className="text-sm font-bold text-slate-800">{log.user}</p>
                        </div>
                      </div>
                      <button className="btn-inspect">
                        INSPECT PAYLOAD <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="ledger-stats">
          <div className="admin-card bg-slate-900 text-white mb-8 border-none">
            <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-6">Integrity Health</h3>
            <div className="flex justify-between items-end mb-4">
              <span className="text-3xl font-black">99.98%</span>
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Optimal</span>
            </div>
            <div className="flex gap-1 h-2 mb-6">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`flex-1 rounded-sm ${i > 18 ? 'bg-amber-400' : 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.4)]'}`} />
              ))}
            </div>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              All ledger blocks verified and hashed against institutional root. No tampering detected.
            </p>
          </div>

          <div className="admin-card">
            <h3 className="font-bold text-slate-800 mb-6">Security Pulse</h3>
            <div className="space-y-6">
              {[
                { label: 'Brute Force Attempts', val: '0', status: 'Secure', color: 'emerald' },
                { label: 'Unauthorized Scans', val: '12', status: 'Blocked', color: 'blue' },
                { label: 'Policy Overrides', val: '1', status: 'Pending Review', color: 'amber' }
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{s.label}</p>
                    <p className="text-xl font-black text-slate-800">{s.val}</p>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest text-${s.color}-600 bg-${s.color}-50 px-2 py-1 rounded`}>
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AuditLogs;
