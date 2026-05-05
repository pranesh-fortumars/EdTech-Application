import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Bell, Calendar, Pin, FileText, ChevronRight, Search, Download } from 'lucide-react';
import './../admin/AdminModules.css';

const NoticeBoard = () => {
  const notices = [
    { title: 'Annual Cultural Fest 2026', date: 'May 10', priority: 'high', category: 'Event' },
    { title: 'New Laboratory Safety Protocols', date: 'May 08', priority: 'medium', category: 'Academic' },
    { title: 'Summer Vacation Schedule Revised', date: 'May 05', priority: 'low', category: 'General' },
    { title: 'Institutional Tech Grant Awarded', date: 'May 02', priority: 'medium', category: 'News' },
  ];

  return (
    <div className="notice-board-container">
      <header className="module-header flex-between mb-12">
        <motion.div 
          initial={{ y: -30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Megaphone className="text-primary" size={36} />
            <h1 style={{ margin: 0 }}>Notice Board</h1>
          </div>
          <p>Official institutional announcements and real-time circulars.</p>
        </motion.div>
        <div className="search-pill-ledger" style={{ width: '350px' }}>
          <Search size={18} />
          <input type="text" placeholder="Search institutional records..." />
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="notice-feed">
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="flex-between" style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(248, 250, 252, 0.5)' }}>
              <h3 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Active Announcements</h3>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {['All', 'High Priority', 'Events'].map(tag => (
                  <button key={tag} className="tag-pill">{tag}</button>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {notices.map((notice, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 12, backgroundColor: 'rgba(248, 250, 252, 0.8)' }}
                  className="group transition-all"
                  style={{ padding: '2rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', borderBottom: '1px solid var(--bg-tertiary)', cursor: 'pointer' }}
                >
                  <div style={{ display: 'flex', gap: '2rem' }}>
                    <div className="date-badge-pro shadow-md" style={{ flexShrink: 0 }}>
                      <span className="month">{notice.date.split(' ')[0]}</span>
                      <span className="day">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                        <span className="ping-dot" style={{ 
                          width: '8px', 
                          height: '8px',
                          background: notice.priority === 'high' ? 'var(--error)' : notice.priority === 'medium' ? 'var(--warning)' : 'var(--success)',
                          animation: 'none'
                        }} />
                        <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>{notice.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors" style={{ margin: 0, lineHeight: 1.2 }}>{notice.title}</h4>
                      <p className="text-slate-500 font-medium" style={{ fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6, maxWidth: '600px', margin: '0.5rem 0 0 0' }}>Official circular regarding the upcoming institutional changes, scheduling, and protocol updates for the academic year.</p>
                    </div>
                  </div>
                  <button className="btn-action-round" style={{ width: '48px', height: '48px' }}>
                    <Download size={20} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="board-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', background: '#fff1f2', color: '#e11d48', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Pin size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Pinned Circulars</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Academic Handbook 2026-27',
                'Institutional Safety Charter',
                'Global Ethics Guidelines'
              ].map((item, i) => (
                <div key={i} className="hover-bg-slate group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(248, 250, 252, 0.5)', borderRadius: '1rem', border: '1px solid var(--border-color)', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <FileText size={18} style={{ color: '#94a3b8' }} className="group-hover:text-primary" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                  <ChevronRight size={16} style={{ color: '#cbd5e1' }} className="group-hover:text-primary" />
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card" style={{ background: 'white', border: '1px solid var(--border-color)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Bell size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Alert Matrix</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium" style={{ marginBottom: '2rem', lineHeight: 1.6 }}>
                Configure how you receive official institutional updates via SMS or Email notifications.
              </p>
              <button className="btn-primary-vibrant" style={{ width: '100%', justifyContent: 'center', boxShadow: 'none' }}>
                CONFIGURE ALERTS
              </button>
            </div>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '128px', height: '128px', borderRadius: '50%', background: 'rgba(251, 191, 36, 0.05)', filter: 'blur(40px)' }}></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NoticeBoard;
