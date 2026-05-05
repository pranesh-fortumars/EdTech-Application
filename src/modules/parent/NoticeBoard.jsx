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
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-4 mb-2">
            <Megaphone className="text-primary" size={36} />
            <h1 className="!m-0">Notice Board</h1>
          </div>
          <p>Official institutional announcements and real-time circulars.</p>
        </motion.div>
        <div className="search-pill-ledger !w-[350px]">
          <Search size={18} />
          <input type="text" placeholder="Search institutional records..." />
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="notice-feed">
          <div className="admin-card !p-0 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Active Announcements</h3>
              <div className="flex gap-3">
                {['All', 'High Priority', 'Events'].map(tag => (
                  <button key={tag} className="tag-pill hover:bg-slate-200 transition-colors">{tag}</button>
                ))}
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              {notices.map((notice, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 12, backgroundColor: 'rgba(248, 250, 252, 0.8)' }}
                  className="p-8 flex items-start justify-between cursor-pointer group transition-all"
                >
                  <div className="flex gap-8">
                    <div className="date-badge-pro shadow-md">
                      <span className="month">{notice.date.split(' ')[0]}</span>
                      <span className="day">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`w-2 h-2 rounded-full shadow-lg ${
                          notice.priority === 'high' ? 'bg-rose-500 shadow-rose-200' :
                          notice.priority === 'medium' ? 'bg-amber-500 shadow-amber-200' : 'bg-emerald-500 shadow-emerald-200'
                        }`} />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{notice.category}</span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors leading-tight">{notice.title}</h4>
                      <p className="text-sm text-slate-500 mt-2 font-medium leading-relaxed max-w-2xl">Official circular regarding the upcoming institutional changes, scheduling, and protocol updates for the academic year.</p>
                    </div>
                  </div>
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                    <Download size={22} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <aside className="board-sidebar space-y-8">
          <div className="admin-card">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center shadow-inner">
                <Pin size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Pinned Circulars</h3>
            </div>
            <div className="space-y-4">
              {[
                'Academic Handbook 2026-27',
                'Institutional Safety Charter',
                'Global Ethics Guidelines'
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-all cursor-pointer group border border-slate-100">
                  <div className="flex items-center gap-4">
                    <FileText size={18} className="text-slate-400 group-hover:text-primary transition-colors" />
                    <span className="text-sm font-bold text-slate-700">{item}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card bg-slate-900 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center">
                  <Bell className="text-amber-400" size={20} />
                </div>
                <h3 className="text-lg font-bold">Alert Matrix</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium mb-8">
                Configure how you receive official institutional updates via SMS or Email notifications.
              </p>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-100 transition-all shadow-xl">
                CONFIGURE ALERTS
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NoticeBoard;
