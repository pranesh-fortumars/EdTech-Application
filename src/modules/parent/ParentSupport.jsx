import React from 'react';
import { MessageSquare, User, Send, Phone, Mail, Clock } from 'lucide-react';

const ParentSupport = () => {
  return (
    <div className="parent-support p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <MessageSquare className="text-primary" /> Parent Support Portal
        </h1>
        <p className="text-secondary">Direct communication line with teachers and school administration.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card glass flex flex-col h-[600px]">
          <div className="p-4 border-b flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold">DT</div>
              <div>
                <p className="font-bold text-sm">Class Teacher</p>
                <span className="text-xs text-emerald-600 font-bold">Online</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn-icon"><Phone size={16} /></button>
              <button className="btn-icon"><Mail size={16} /></button>
            </div>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="flex flex-col items-start max-w-[80%]">
              <div className="p-3 bg-slate-100 rounded-2xl rounded-tl-none text-sm">
                Hello! How can I help you regarding your child's progress today?
              </div>
              <span className="text-[10px] text-tertiary mt-1">10:00 AM</span>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input type="text" placeholder="Type your message..." className="flex-1 p-3 bg-slate-50 border rounded-xl outline-none focus:border-primary" />
              <button className="btn-primary p-3 rounded-xl">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="card glass p-4">
            <h3 className="font-bold mb-4">Contact Directory</h3>
            <div className="space-y-4">
              {[
                { role: 'Principal Office', contact: '+91 98765 43210', icon: Phone },
                { role: 'School Office', contact: 'office@auraed.edu', icon: Mail },
                { role: 'Accounts Dept', contact: 'finance@auraed.edu', icon: Mail }
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-tertiary">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <p className="font-bold">{c.role}</p>
                    <span className="text-xs text-secondary">{c.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card glass p-4 bg-blue-50 border-blue-100">
            <div className="flex gap-3">
              <Clock className="text-blue-600" size={20} />
              <div>
                <p className="text-sm font-bold text-blue-900">Visiting Hours</p>
                <p className="text-xs text-blue-800 mt-1">Mon - Fri: 03:00 PM - 04:30 PM</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ParentSupport;
