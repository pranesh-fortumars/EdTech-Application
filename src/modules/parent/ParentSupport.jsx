import '../admin/AdminModules.css';

const ParentSupport = () => {
  return (
    <div className="parent-support">
      <header className="module-header flex justify-between items-end mb-12">
        <div>
          <h1 className="flex items-center gap-4">
            <MessageSquare size={32} className="text-primary" /> Parent Support Portal
          </h1>
          <p>Direct communication line with teachers and school administration.</p>
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="lg:col-span-2 admin-card !p-0 flex flex-col h-[650px]">
          <div className="p-6 border-b flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center gap-4">
              <div className="avatar-vibrant">DT</div>
              <div>
                <p className="font-bold text-slate-900">Selvi Kavitha</p>
                <div className="flex items-center gap-2">
                  <div className="ping-dot"></div>
                  <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">Active Now</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="btn-icon-vibrant"><Phone size={18} /></button>
              <button className="btn-icon-vibrant"><Mail size={18} /></button>
            </div>
          </div>
          
          <div className="flex-1 p-8 space-y-6 overflow-y-auto bg-white/50">
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="p-4 bg-slate-100 rounded-2xl rounded-tl-none text-sm text-slate-700 font-medium leading-relaxed shadow-sm">
                Hello! How can I help you regarding your child's progress today?
              </div>
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-2 ml-1">10:00 AM</span>
            </div>
          </div>

          <div className="p-6 border-t bg-white">
            <div className="flex gap-4">
              <div className="search-pill flex-1">
                <input type="text" placeholder="Type your inquiry here..." />
              </div>
              <button className="btn-primary-vibrant !py-0 !px-6 h-[52px]">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Contact Directory</h3>
            <div className="space-y-6">
              {[
                { role: 'Principal Office', contact: '+91 98765 43210', icon: Phone, color: 'blue' },
                { role: 'School Office', contact: 'office@auraed.edu', icon: Mail, color: 'emerald' },
                { role: 'Accounts Dept', contact: 'finance@auraed.edu', icon: Mail, color: 'amber' }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className={`w-10 h-10 bg-${c.color}-vibrant text-white rounded-xl flex items-center justify-center shadow-lg shadow-${c.color}-500/10`}>
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{c.role}</p>
                    <span className="text-xs text-slate-500 font-medium">{c.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-card border-blue-200 bg-blue-50/20">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-900">Visiting Hours</p>
                <p className="text-xs text-blue-800 mt-1 font-medium leading-relaxed">
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
