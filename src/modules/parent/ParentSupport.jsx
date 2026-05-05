import React from 'react';
import { MessageSquare, Phone, Mail, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import '../admin/AdminModules.css';

const ParentSupport = () => {
  return (
    <div className="parent-support">
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MessageSquare size={32} className="text-primary" />
            <h1 style={{ margin: 0 }}>Parent Support Portal</h1>
          </div>
          <p>Direct communication line with teachers and school administration.</p>
        </motion.div>
      </header>

      <div className="pro-grid-main">
        <div className="admin-card" style={{ padding: 0, display: 'flex', flexDirection: 'column', minHeight: '650px', background: 'white' }}>
          {/* Chat Header */}
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(248, 250, 252, 0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="avatar-vibrant" style={{ width: '48px', height: '48px', borderRadius: '1rem' }}>DT</div>
              <div>
                <p className="font-bold text-slate-900" style={{ margin: 0 }}>Selvi Kavitha</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="ping-dot"></div>
                  <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem' }}>Active Now</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button className="btn-icon-vibrant" style={{ width: '40px', height: '40px' }}><Phone size={18} /></button>
              <button className="btn-icon-vibrant" style={{ width: '40px', height: '40px' }}><Mail size={18} /></button>
            </div>
          </div>
          
          {/* Messages Area */}
          <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto', background: 'rgba(241, 245, 249, 0.3)' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
              <div style={{ padding: '1rem 1.25rem', background: 'white', borderRadius: '1rem', borderTopLeftRadius: 0, fontSize: '0.9rem', color: '#334155', fontWeight: 500, boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-color)' }}>
                Hello! How can I help you regarding your child's progress today?
              </div>
              <span className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.6rem', marginTop: '0.5rem', display: 'block' }}>10:00 AM</span>
            </div>
          </div>

          {/* Input Area */}
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', background: 'white' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div className="search-pill" style={{ flex: 1, background: 'var(--bg-secondary)' }}>
                <input type="text" placeholder="Type your inquiry here..." style={{ background: 'transparent' }} />
              </div>
              <button className="btn-primary-vibrant" style={{ padding: '0 1.5rem', height: '52px' }}>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-900" style={{ marginBottom: '1.5rem' }}>Contact Directory</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { role: 'Principal Office', contact: '+91 98765 43210', icon: Phone, color: 'blue' },
                { role: 'School Office', contact: 'office@auraed.edu', icon: Mail, color: 'emerald' },
                { role: 'Accounts Dept', contact: 'finance@auraed.edu', icon: Mail, color: 'amber' }
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', borderRadius: 'var(--radius-lg)', transition: 'background 0.2s' }} className="hover-bg-slate">
                  <div className={`bg-${c.color}-vibrant`} style={{ width: '40px', height: '40px', borderRadius: '0.75rem', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900" style={{ fontSize: '0.85rem', margin: 0 }}>{c.role}</p>
                    <span className="text-slate-500" style={{ fontSize: '0.75rem' }}>{c.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card" style={{ background: 'rgba(239, 246, 255, 0.5)', borderColor: '#bfdbfe' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', background: '#dbeafe', color: '#2563eb', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Clock size={24} />
              </div>
              <div>
                <p className="font-bold text-blue-900" style={{ fontSize: '0.9rem', margin: 0 }}>Visiting Hours</p>
                <p className="text-xs text-blue-800" style={{ marginTop: '0.25rem', fontWeight: 500, lineHeight: 1.6 }}>
                  Monday - Friday<br />
                  03:00 PM - 04:30 PM
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ParentSupport;
