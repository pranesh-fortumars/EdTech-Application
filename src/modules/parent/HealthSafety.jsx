import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, LogIn, LogOut, Activity, UserCheck, AlertCircle } from 'lucide-react';
import './../admin/AdminModules.css';

const HealthSafety = () => {
  const events = [
    { type: 'entry', time: '08:15 AM', location: 'Main Gate (Gate A)', status: 'Verified', icon: LogIn, color: 'emerald' },
    { type: 'health', time: '11:30 AM', location: 'Institutional Clinic', status: 'Routine Checkup', icon: Heart, color: 'blue' },
    { type: 'exit', time: '04:10 PM', location: 'Secondary Gate', status: 'Scheduled', icon: LogOut, color: 'amber' },
  ];

  return (
    <div className="health-safety-container professional-theme p-12">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck className="text-primary" size={32} />
            <h1 className="!m-0">Health & Safety</h1>
          </div>
          <p>Institutional protocols for student well-being and campus security.</p>
        </motion.div>
        <div className="flex gap-3">
          <div className="live-status-pill !bg-emerald-50 !text-emerald-600 !border-emerald-100">
            <UserCheck size={14} /> ON CAMPUS
          </div>
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { label: 'Blood Group', value: 'O+ Positive', icon: Heart, color: 'rose' },
          { label: 'Campus Status', value: 'Checked In', icon: UserCheck, color: 'emerald' },
          { label: 'Last Checkup', value: '12 Days Ago', icon: Activity, color: 'blue' },
          { label: 'Allergies', value: 'Peanuts (Mild)', icon: AlertCircle, color: 'amber' }
        ].map((stat, i) => (
          <div key={i} className="admin-card">
            <div className={`w-10 h-10 rounded-xl bg-${stat.color}-50 text-${stat.color}-600 flex items-center justify-center mb-4`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            <h3 className="text-xl font-black text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="access-ledger">
          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50">
              <h3 className="font-bold text-slate-800">Campus Access Logs</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {events.map((ev, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl bg-${ev.color}-50 text-${ev.color}-600 flex items-center justify-center shadow-sm`}>
                      <ev.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 capitalize">{ev.type} Sequence</h4>
                      <p className="text-xs text-slate-500">{ev.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-800">{ev.time}</p>
                    <p className={`text-[10px] font-black uppercase text-${ev.color}-600`}>{ev.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="safety-protocols">
          <div className="admin-card bg-slate-900 text-white mb-8">
            <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-6">Security Clearance</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Access is strictly limited to authorized parents/guardians with valid institutional digital IDs.
            </p>
            <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors">
              VIEW DIGITAL GATE PASS
            </button>
          </div>

          <div className="admin-card">
            <h3 className="font-bold text-slate-800 mb-6">Clinic Notes</h3>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium italic">
                "Student attended routine health screening. Vital signs normal. Recommended increasing hydration during sports activities."
              </p>
              <p className="text-[10px] font-black text-blue-400 mt-4 uppercase tracking-widest">— Dr. Sarah J. (Campus Clinic)</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HealthSafety;
