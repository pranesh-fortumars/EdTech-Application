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
    <div className="notice-board-container professional-theme p-12">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <Megaphone className="text-primary" size={32} />
            <h1 className="!m-0">Notice Board</h1>
          </div>
          <p>Official institutional announcements and real-time circulars.</p>
        </motion.div>
        <div className="search-pill-ledger !w-[300px]">
          <Search size={14} />
          <input type="text" placeholder="Search notices..." />
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="notice-feed">
          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Active Announcements</h3>
              <div className="flex gap-2">
                {['All', 'High Priority', 'Events'].map(tag => (
                  <button key={tag} className="tag-pill">{tag}</button>
                ))}
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {notices.map((notice, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="p-6 flex items-start justify-between cursor-pointer group"
                >
                  <div className="flex gap-6">
                    <div className="date-badge-pro">
                      <span className="month">{notice.date.split(' ')[0]}</span>
                      <span className="day">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${
                          notice.priority === 'high' ? 'bg-rose-500' :
                          notice.priority === 'medium' ? 'bg-amber-500' : 'bg-emerald-500'
                        }`} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{notice.category}</span>
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">{notice.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">Official circular regarding the upcoming institutional changes...</p>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Download size={18} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="board-sidebar">
          <div className="admin-card mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Pin className="text-rose-500" size={20} />
              <h3 className="font-bold">Pinned Circulars</h3>
            </div>
            <div className="space-y-4">
              {[
                'Academic Handbook 2026-27',
                'Institutional Safety Charter',
                'Global Ethics Guidelines'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-slate-400" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card bg-slate-900 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="text-amber-400" size={20} />
              <h3 className="font-bold">Alert Preferences</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Configure how you receive official institutional updates via SMS or Email.
            </p>
            <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-black text-xs uppercase tracking-widest">
              CONFIGURE ALERTS
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NoticeBoard;
