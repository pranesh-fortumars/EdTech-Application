import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Gift, Award, ShieldCheck, 
  ArrowUpRight, Building2, Globe, Users,
  Sparkles, Zap, Check, Landmark, Settings
} from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import '../admin/AdminModules.css';

const scholarships = [
  { 
    id: 1, 
    title: 'Intellectual Pioneer Grant', 
    sponsor: 'FutureTech Corp', 
    amount: 15000, 
    criteria: 'Master of Calculus Badge', 
    eligible: true,
    type: 'Alumni Sponsored'
  },
  { 
    id: 2, 
    title: 'Community Leader Award', 
    sponsor: 'Class of 1998', 
    amount: 8500, 
    criteria: 'Top Contributor Badge', 
    eligible: true,
    type: 'Corporate Grant'
  },
  { 
    id: 3, 
    title: 'Quantum Merit Scholarship', 
    sponsor: 'Nexus Labs', 
    amount: 25000, 
    criteria: 'Perfect Week Streak (5x)', 
    eligible: false,
    type: 'Institutional'
  }
];

const ScholarshipMarket = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const isAdmin = user?.role === 'admin';
  const isStudent = user?.role === 'student';
  const isParent = user?.role === 'parent';

  const stats = [
    { label: 'Active Sponsors', value: '42', icon: Building2, color: 'blue', roles: ['admin', 'parent'] },
    { label: 'Total Funds Disbursed', value: '₹1.2Cr', icon: Globe, color: 'emerald', roles: ['admin', 'parent', 'student'] },
    { label: 'Eligible Awards', value: '08', icon: Trophy, color: 'amber', roles: ['student', 'admin'] },
    { label: 'Applied Credits', value: '₹12k', icon: Award, color: 'blue', roles: ['parent', 'student'] },
    { label: 'Pending Approvals', value: '14', icon: Check, color: 'rose', roles: ['admin'] }
  ].filter(s => s.roles.includes(user?.role));

  return (
    <div className="scholarship-container-pro" style={{ padding: '2rem', paddingHeight: '100vh', background: 'var(--bg-secondary)', paddingTop: '6rem' }}>
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="avatar-vibrant" style={{ background: 'var(--primary-gradient)' }}><Award size={24} /></div>
            <div>
              <h1 style={{ margin: 0 }}>Micro-Scholarship <span className="text-gradient">Marketplace</span></h1>
              <p style={{ margin: 0 }}>{isAdmin ? 'Institutional funding and corporate sponsorships.' : 'Unlocking academic capital through achievements.'}</p>
            </div>
          </div>
        </motion.div>
        <div className="flex gap-4">
          {isAdmin && <button className="btn-executive-outline"><Settings size={18} /> Manage Grants</button>}
          {isAdmin && <button className="btn-primary-vibrant"><Building2 size={18} /> Sponsorship Portal</button>}
          {isStudent && <button className="btn-primary-vibrant"><Zap size={18} /> Apply for Grant</button>}
          {isParent && <button className="btn-executive-outline">View Fee Impact</button>}
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="admin-card"
          >
            <div className={`bg-${stat.color}-vibrant`} style={{ width: '40px', height: '40px', borderRadius: '0.75rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <stat.icon size={20} />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-800" style={{ margin: '0.25rem 0' }}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="main-content">
          <div className="admin-card">
            <h3 className="text-xl font-bold mb-8">{isAdmin ? 'Sponsorship Inventory' : 'Available Sponsorships'}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {scholarships.map((sch) => (
                <motion.div 
                  key={sch.id} 
                  className="admin-card"
                  whileHover={{ y: -5 }}
                  style={{ 
                    borderLeft: `6px solid ${(isStudent && sch.eligible) ? '#10b981' : '#cbd5e1'}`,
                    transition: 'all 0.3s'
                  }}
                >
                  <div className="responsive-card-stack">
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      <div style={{ width: '64px', height: '64px', background: '#f8fafc', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1.5rem' }}>
                        <Gift size={28} className={(isStudent && sch.eligible) ? 'text-emerald' : 'text-slate-300'} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>{sch.title}</h4>
                          <span className="badge-pro badge-blue" style={{ fontSize: '0.6rem' }}>{sch.type}</span>
                        </div>
                        <p className="text-slate-500 font-medium" style={{ margin: 0, fontSize: '0.9rem' }}>Sponsored by <span className="text-slate-800 font-bold">{sch.sponsor}</span></p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
                          <div className="flex items-center gap-1.5" style={{ background: '#fffbeb', padding: '0.4rem 0.75rem', borderRadius: '0.5rem' }}>
                            <Sparkles size={14} className="text-amber" />
                            <span className="text-xs font-black uppercase text-slate-400">Requirement:</span>
                            <span className="text-xs font-black text-amber-700">{sch.criteria}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <h3 className="text-2xl font-black text-slate-800" style={{ margin: 0 }}>₹{sch.amount.toLocaleString()}</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Institutional Credit</p>
                      {isStudent && (
                        sch.eligible ? (
                          <button 
                            className="btn-primary-vibrant mt-4" 
                            style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem', background: '#059669', boxShadow: 'none' }}
                            onClick={() => addNotification(`Grant of ₹${sch.amount.toLocaleString()} requested!`, 'success')}
                          >
                            REDEEM NOW
                          </button>
                        ) : (
                          <button className="btn-executive-outline mt-4" disabled style={{ opacity: 0.5 }}>LOCKED</button>
                        )
                      )}
                      {isAdmin && (
                        <button className="btn-executive-outline mt-4" onClick={() => addNotification(`Editing ${sch.title} settings...`)}>
                          EDIT GRANT
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534' }}>
            <h4 className="font-black mb-4" style={{ color: '#14532d' }}>Market Insight</h4>
            <p className="text-sm leading-relaxed" style={{ color: '#15803d', fontWeight: 500 }}>
              {isParent ? 'Institutional micro-scholarships are credited directly to your **Parent Fee Portal** upon successful verification of achievements.' : 
               isAdmin ? 'Institutional funding is monitored in real-time. Verify corporate compliance via the Audit Logs.' :
               'Your earned scholarships are automatically applied to your tuition balance. Keep earning badges to unlock more.'}
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#dcfce7', borderRadius: '1rem' }}>
              <div className="flex-between mb-4">
                <span className="text-xs font-bold" style={{ color: '#166534', opacity: 0.8 }}>Verification Efficiency</span>
                <span className="text-xs font-black" style={{ color: '#166534' }}>99.8%</span>
              </div>
              <div className="flex-between">
                <span className="text-xs font-bold" style={{ color: '#166534', opacity: 0.8 }}>Transfer Speed</span>
                <span className="text-xs font-black" style={{ color: '#166534' }}>Instant</span>
              </div>
            </div>
          </div>

          {!isParent && (
            <div className="admin-card">
              <h4 className="font-bold mb-6">Marketplace Activity</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { user: 'Meena R.', action: 'Redeemed Intel Grant', time: '2m ago' },
                  { user: 'Rahul V.', action: 'Applied for Community Award', time: '15m ago' },
                  { user: 'Siddharth', action: 'Verified Master Badge', time: '1h ago' }
                ].map((act, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: 'var(--primary)' }}>{act.user.charAt(0)}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800 }}>{act.user}</p>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{act.action}</p>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700 }}>{act.time}</span>
                  </div>
                ))}
              </div>
              <button className="btn-executive-outline w-full mt-8">View Full Ledger</button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ScholarshipMarket;
