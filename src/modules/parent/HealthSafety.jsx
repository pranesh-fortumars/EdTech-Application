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
      <header className="module-header flex-between mb-12">
        <motion.div 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldCheck className="text-primary" size={36} />
            <h1 style={{ margin: 0 }}>Health & Safety</h1>
          </div>
          <p>Institutional protocols for student well-being and campus security.</p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <div className="badge-pro badge-emerald" style={{ padding: '0.5rem 1.25rem' }}>
              <UserCheck size={16} /> <span className="font-bold">ON CAMPUS</span>
            </div>
          </div>
        </motion.div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { label: 'Blood Group', value: 'O+ Positive', icon: Heart, color: 'rose' },
          { label: 'Campus Status', value: 'Checked In', icon: UserCheck, color: 'emerald' },
          { label: 'Last Checkup', value: '12 Days Ago', icon: Activity, color: 'blue' },
          { label: 'Allergies', value: 'Peanuts (Mild)', icon: AlertCircle, color: 'amber' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="admin-card"
          >
            <div className={`bg-${stat.color}-vibrant`} style={{ width: '48px', height: '48px', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <stat.icon size={22} />
            </div>
            <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: '0 0 0.25rem 0' }}>{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-800" style={{ margin: 0 }}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="access-ledger">
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="flex-between" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(248, 250, 252, 0.5)' }}>
              <h3 className="text-lg font-bold text-slate-900">Campus Access Logs</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div className="ping-dot"></div>
                <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>Real-time Updates</span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {events.map((ev, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="hover:bg-slate-50/80 transition-all cursor-pointer group"
                  style={{ borderBottom: '1px solid var(--bg-tertiary)', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'between' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                    <div className={`bg-${ev.color}-vibrant`} style={{ width: '56px', height: '56px', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ev.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 capitalize" style={{ margin: 0 }}>{ev.type} Sequence</h4>
                      <p className="text-sm text-slate-500" style={{ margin: '0.25rem 0 0 0' }}>{ev.location}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="text-lg font-black text-slate-800" style={{ margin: 0 }}>{ev.time}</p>
                    <p className={`text-slate-400 font-black uppercase tracking-widest`} style={{ margin: '0.25rem 0 0 0', fontSize: '0.65rem' }}>{ev.status}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="safety-protocols" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="admin-card"
            style={{ background: 'white', border: '1px solid var(--border-color)' }}
          >
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 className="font-black text-slate-400 uppercase tracking-widest" style={{ fontSize: '0.65rem', color: '#64748b', marginBottom: '1.5rem' }}>Security Clearance</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: '#475569', marginBottom: '2rem' }}>
                Access is strictly limited to authorized parents/guardians with valid institutional digital IDs.
              </p>
              <button className="btn-primary-vibrant" style={{ width: '100%', justifyContent: 'center' }}>
                VIEW DIGITAL GATE PASS
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="admin-card"
            style={{ background: 'rgba(239, 246, 255, 0.5)', borderColor: '#bfdbfe' }}
          >
            <h3 className="text-lg font-bold text-slate-900" style={{ marginBottom: '1.5rem' }}>Clinic Notes</h3>
            <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1rem', border: '1px solid #dbeafe' }}>
              <p className="text-sm text-blue-900 font-medium italic leading-relaxed" style={{ margin: 0 }}>
                "Student attended routine health screening. Vital signs normal. Recommended increasing hydration during sports activities."
              </p>
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #dbeafe', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.65rem', color: '#2563eb' }}>DR</div>
                <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.6rem', margin: 0 }}>Dr. Sarah J. (Campus Clinic)</p>
              </div>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
};

export default HealthSafety;
