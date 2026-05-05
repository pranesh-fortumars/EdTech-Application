import React from 'react';
import { 
  Users, FileCheck, Calendar, MessageSquare, Plus, 
  Video, Bell, RefreshCw, BarChart2, BookOpen, 
  Clock, TrendingUp, Sparkles, ChevronRight,
  ShieldAlert, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import '../admin/AdminModules.css';

const TeacherDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();

  return (
    <div className="teacher-dashboard-pro" style={{ background: 'white', minHeight: '100vh', padding: '2rem', paddingTop: '5rem' }}>
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className="avatar-vibrant" style={{ width: '48px', height: '48px' }}>{user.name?.charAt(0)}</div>
            <div>
              <h1 style={{ margin: 0, fontSize: '2rem' }}>Welcome back, <span className="text-primary">{user.name}</span></h1>
              <p style={{ margin: 0 }}>Senior Educator • {user.institution}</p>
            </div>
          </div>
        </motion.div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-icon-vibrant"><Bell size={20} /></button>
          <NavLink to="/faculty" className="btn-primary-vibrant">
            <Activity size={18} /> Launch Operations Hub
          </NavLink>
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { label: 'Managed Students', value: '142', icon: Users, color: 'blue', trend: '+4%' },
          { label: 'Avg. Grade Pulse', value: 'A-', icon: TrendingUp, color: 'emerald', trend: 'Stable' },
          { label: 'Retention Risk', value: '3', icon: ShieldAlert, color: 'rose', trend: 'Critical' },
          { label: 'Interaction Rate', value: '92%', icon: Sparkles, color: 'indigo', trend: 'Optimal' }
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="admin-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div className={`bg-${stat.color}-vibrant`} style={{ width: '40px', height: '40px', borderRadius: '0.75rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <stat.icon size={20} />
              </div>
              <span className={`text-${stat.color === 'rose' ? 'rose' : 'primary'} font-black uppercase tracking-widest`} style={{ fontSize: '0.65rem' }}>{stat.trend}</span>
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-wider" style={{ fontSize: '0.65rem', margin: 0 }}>{stat.label}</p>
            <h3 className="text-2xl font-black text-slate-800" style={{ margin: '0.25rem 0' }}>{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="pro-grid-main">
        <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Today's Academic Schedule */}
          <div className="admin-card">
            <div className="flex-between mb-8">
              <h3 className="text-xl font-bold text-slate-800">Academic Schedule: Today</h3>
              <button className="btn-sm btn-outline">View Weekly</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { time: '09:00 AM', subject: 'Advanced Physics', class: '12-A', type: 'Live Studio' },
                { time: '11:30 AM', subject: 'Quantum Mechanics', class: '11-C', type: 'Lab Session' },
                { time: '02:00 PM', subject: 'Curriculum Review', class: 'Faculty', type: 'Meeting' }
              ].map((session, i) => (
                <div key={i} className="hover-bg-slate" style={{ padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '60px', textAlign: 'center' }}>
                    <p className="font-black text-primary" style={{ fontSize: '0.8rem', margin: 0 }}>{session.time.split(' ')[0]}</p>
                    <p className="text-slate-400 font-bold" style={{ fontSize: '0.6rem', margin: 0 }}>{session.time.split(' ')[1]}</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontWeight: 800 }}>{session.subject}</h4>
                    <span className="text-slate-500 font-medium" style={{ fontSize: '0.8rem' }}>{session.class} • {session.type}</span>
                  </div>
                  <button className="btn-sm btn-primary">Join</button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick AI Insights */}
          <div className="admin-card" style={{ background: '#f8fafc', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <Sparkles size={24} className="text-primary" />
              <h3 style={{ margin: 0, fontWeight: 900 }}>Aura Executive Insights</h3>
            </div>
            <div className="pro-grid-2">
              <div className="admin-card" style={{ background: 'white' }}>
                <p className="text-slate-400 font-black uppercase tracking-widest mb-2" style={{ fontSize: '0.6rem' }}>Top Performer</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.7rem' }}>AK</div>
                  <strong className="text-slate-800">Arun Kumar</strong>
                </div>
                <p className="text-xs text-slate-500 mt-2">100% attendance and A+ grade streak maintained.</p>
              </div>
              <div className="admin-card" style={{ background: 'white' }}>
                <p className="text-slate-400 font-black uppercase tracking-widest mb-2" style={{ fontSize: '0.6rem' }}>Improvement Area</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <BookOpen size={20} className="text-amber" />
                  <strong className="text-slate-800">Organic Chemistry</strong>
                </div>
                <p className="text-xs text-slate-500 mt-2">Class engagement is down 12% in the last 48 hours.</p>
              </div>
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Quick Actions */}
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Operations</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button className="btn-outline w-full" style={{ justifyContent: 'space-between' }}>
                <span>Record Attendance</span>
                <ChevronRight size={16} />
              </button>
              <button className="btn-outline w-full" style={{ justifyContent: 'space-between' }}>
                <span>Broadcast Notice</span>
                <ChevronRight size={16} />
              </button>
              <button className="btn-outline w-full" style={{ justifyContent: 'space-between' }}>
                <span>Review Quiz Data</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Student Engagement Heatmap */}
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Engagement Heatmap</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.25rem' }}>
              {Array.from({ length: 28 }).map((_, i) => (
                <div 
                  key={i} 
                  style={{ 
                    aspectRatio: '1/1', 
                    borderRadius: '4px', 
                    background: i % 4 === 0 ? 'var(--primary)' : i % 3 === 0 ? 'var(--primary-light)' : '#f1f5f9',
                    opacity: 0.3 + (Math.random() * 0.7)
                  }} 
                />
              ))}
            </div>
            <div className="flex-between mt-4">
              <span className="text-slate-400 font-bold" style={{ fontSize: '0.6rem' }}>LESS ACTIVE</span>
              <span className="text-slate-400 font-bold" style={{ fontSize: '0.6rem' }}>MOST ACTIVE</span>
            </div>
          </div>

          {/* Institutional Notifications */}
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Staff Notifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Faculty Meeting', time: '1h ago', icon: Calendar, color: 'blue' },
                { title: 'New Lab Guidelines', time: '4h ago', icon: FileCheck, color: 'emerald' }
              ].map((notif, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '0.4rem' }} />
                  <div>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800 }}>{notif.title}</p>
                    <span className="text-slate-400 font-bold" style={{ fontSize: '0.7rem' }}>{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TeacherDashboard;
