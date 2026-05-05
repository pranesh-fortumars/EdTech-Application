import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, Award, Crown, ShieldCheck, Flame, ChevronRight, Sparkles } from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import '../admin/AdminModules.css';

const badges = [
  { id: 1, title: 'Early Bird', icon: Flame, color: 'orange', xp: 50, earned: true },
  { id: 2, title: 'Calculus King', icon: Crown, color: 'indigo', xp: 200, earned: true },
  { id: 3, title: 'Perfect Week', icon: ShieldCheck, color: 'emerald', xp: 150, earned: false },
  { id: 4, title: 'Top Contributor', icon: Award, color: 'blue', xp: 100, earned: true },
];

const Achievements = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="achievements-page-container">
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Trophy size={32} className="text-primary" />
            <h1 style={{ margin: 0 }}>Institutional <span className="text-gradient">Achievements</span></h1>
          </div>
          <p>Level 14 Scholar • 2,450 XP to Level 15</p>
        </motion.div>
        <div style={{ width: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>Experience Progress</span>
            <span className="text-primary font-black" style={{ fontSize: '0.65rem' }}>65%</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '65%' }}
              style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }}
            />
          </div>
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <h3 className="text-xl font-bold text-slate-800" style={{ marginBottom: '2rem' }}>Earning Progression</h3>
            <div className="pro-grid-3">
              {[
                { label: 'Academic Rank', value: '#12', icon: Trophy, color: 'orange' },
                { label: 'Total Experience', value: '14,200', icon: Zap, color: 'blue' },
                { label: 'Current Streak', value: '15 Days', icon: Flame, color: 'rose' }
              ].map((stat, i) => (
                <div key={i} style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div className={`bg-${stat.color}-vibrant`} style={{ width: '48px', height: '48px', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <stat.icon size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.6rem', margin: 0 }}>{stat.label}</p>
                    <h4 className="text-xl font-black text-slate-800" style={{ margin: 0 }}>{stat.value}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem' }}>
              <div className="flex-between mb-6">
                <h4 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Next Milestones</h4>
                <button className="text-primary font-bold hover-underline" style={{ fontSize: '0.85rem' }}>View All</button>
              </div>
              <div className="milestone-item admin-card" style={{ background: '#f8fafc', border: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div>
                    <h5 style={{ margin: 0, fontSize: '1rem', fontWeight: 800 }}>Master of Integration</h5>
                    <p className="text-slate-500 font-medium" style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem' }}>Score 100% in 5 Calculus Quizzes</p>
                  </div>
                  <span className="badge-pro badge-blue">800 XP</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ flex: 1, height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '80%' }}
                      style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }}
                    />
                  </div>
                  <span className="text-slate-800 font-black" style={{ fontSize: '0.85rem' }}>4/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800" style={{ marginBottom: '2rem' }}>Badge Collection</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {badges.map((badge) => (
                <motion.div 
                  key={badge.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="badge-pro-card"
                  style={{ 
                    padding: '1.25rem', 
                    background: badge.earned ? 'white' : '#f8fafc', 
                    borderRadius: '1.25rem', 
                    border: '1px solid var(--border-color)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    opacity: badge.earned ? 1 : 0.6
                  }}
                  onClick={() => addNotification(badge.earned ? `Viewing ${badge.title} certificate` : 'Complete the task to unlock!')}
                >
                  <div className={`bg-${badge.color}-vibrant`} style={{ width: '48px', height: '48px', borderRadius: '1rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <badge.icon size={24} />
                  </div>
                  <p className="text-slate-800 font-bold" style={{ margin: 0, fontSize: '0.85rem' }}>{badge.title}</p>
                  <p className="text-primary font-black" style={{ margin: '0.25rem 0 0 0', fontSize: '0.65rem' }}>+{badge.xp} XP</p>
                </motion.div>
              ))}
            </div>
            <button className="btn-primary-vibrant" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}>
              REDEEM XP REWARDS
            </button>
          </div>

          <div className="admin-card" style={{ background: 'var(--primary)', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Sparkles size={20} />
              <h4 style={{ margin: 0, fontWeight: 900 }}>Leaderboard Hint</h4>
            </div>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              You are only **340 XP** away from surpassing Anbu and entering the Top 10 Institutional Leaderboard!
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Achievements;
