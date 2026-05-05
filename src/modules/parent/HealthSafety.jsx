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
    <div className="health-safety-container">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-4 mb-2">
            <ShieldCheck className="text-primary" size={36} />
            <h1 className="!m-0">Health & Safety</h1>
          </div>
          <p>Institutional protocols for student well-being and campus security.</p>
        </motion.div>
        <div className="flex gap-3">
          <div className="badge-pro badge-emerald px-5 py-2 !text-xs">
            <UserCheck size={16} /> ON CAMPUS
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
            <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-vibrant text-white flex items-center justify-center mb-6 shadow-lg shadow-${stat.color}-500/20`}>
              <stat.icon size={22} />
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-800">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="access-ledger">
          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Campus Access Logs</h3>
              <div className="flex items-center gap-2">
                <div className="ping-dot"></div>
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Real-time Updates</span>
              </div>
            </div>
            <div className="divide-y divide-slate-100">
              {events.map((ev, i) => (
                <div key={i} className="p-8 flex items-center justify-between hover:bg-slate-50/80 transition-all cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl bg-${ev.color}-vibrant text-white flex items-center justify-center shadow-lg shadow-${ev.color}-500/10 group-hover:scale-105 transition-transform`}>
                      <ev.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 capitalize leading-tight">{ev.type} Sequence</h4>
                      <p className="text-sm text-slate-500 mt-1 font-medium">{ev.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-slate-800 leading-tight">{ev.time}</p>
                    <p className={`text-[10px] font-black uppercase text-${ev.color}-600 tracking-widest mt-1`}>{ev.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="safety-protocols space-y-8">
          <div className="admin-card bg-slate-900 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest mb-6">Security Clearance</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
                Access is strictly limited to authorized parents/guardians with valid institutional digital IDs.
              </p>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:brightness-110 transition-all shadow-xl shadow-primary/30">
                VIEW DIGITAL GATE PASS
              </button>
            </div>
          </div>

          <div className="admin-card border-blue-200 bg-blue-50/20">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Clinic Notes</h3>
            <div className="p-6 bg-white/80 backdrop-filter blur-sm rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-sm text-blue-900 font-medium italic leading-relaxed">
                "Student attended routine health screening. Vital signs normal. Recommended increasing hydration during sports activities."
              </p>
              <div className="mt-5 pt-4 border-t border-blue-50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-center font-bold text-[10px] text-blue-600">DR</div>
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Dr. Sarah J. (Campus Clinic)</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HealthSafety;
