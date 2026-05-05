import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, BookOpen, Calendar, ClipboardCheck, 
  Plus, MessageSquare, Filter, MoreVertical,
  CheckCircle2, Clock, AlertCircle, FileText, ChevronRight
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import '../admin/AdminModules.css';

const assignmentsData = [
  { id: 1, title: 'Quantum Physics Quiz', class: '12-A', submissions: 24, total: 30, due: '2h remaining' },
  { id: 2, title: 'Calculus Applications', class: '12-B', submissions: 12, total: 28, due: 'May 15' },
  { id: 3, title: 'Electromagnetism Lab', class: '11-A', submissions: 30, total: 30, due: 'Completed' },
];

const FacultyHub = () => {
  const { addNotification } = useNotificationStore();
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  
  const [scheduleForm, setScheduleForm] = useState({ title: '', date: '', time: '', subject: 'Physics' });
  const [assignmentForm, setAssignmentForm] = useState({ title: '', dueDate: '', marks: '100', desc: '' });

  const onScheduleSubmit = (e) => {
    e.preventDefault();
    addNotification(`Class "${scheduleForm.title}" scheduled successfully`, 'success');
    setShowScheduleModal(false);
  };

  const onAssignmentSubmit = (e) => {
    e.preventDefault();
    addNotification(`Evaluation "${assignmentForm.title}" created`, 'success');
    setShowAssignmentModal(false);
  };

  return (
    <div className="faculty-hub-container-pro" style={{ background: 'white', minHeight: '100vh', padding: '2rem', paddingTop: '5rem' }}>
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 style={{ margin: 0 }}>Faculty <span className="text-primary">Excellence Hub</span></h1>
          <p>Orchestrate learning, manage evaluations, and engage with your students.</p>
        </motion.div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn-outline" onClick={() => setShowScheduleModal(true)}>
            <Calendar size={18} /> Class Schedule
          </button>
          <button className="btn-primary-vibrant" onClick={() => setShowAssignmentModal(true)}>
            <Plus size={18} /> New Assignment
          </button>
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Active Classes */}
          <div className="admin-card">
            <div className="flex-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Active Classes</h3>
              <button className="btn-icon-vibrant"><Filter size={14} /></button>
            </div>
            <div className="pro-grid-2">
              {[
                { id: 'p12a', name: 'Physics 12-A', students: 30, attendance: '92%', topic: 'Particle Physics' },
                { id: 'm12b', name: 'Mathematics 12-B', students: 28, attendance: '88%', topic: 'Integrals' }
              ].map((cls, i) => (
                <div key={i} className="admin-card" style={{ background: '#f8fafc', border: 'none' }}>
                  <div className="flex-between mb-4">
                    <h4 style={{ margin: 0, fontWeight: 800 }}>{cls.name}</h4>
                    <span className="text-slate-400 font-bold" style={{ fontSize: '0.8rem' }}><Users size={12} /> {cls.students}</span>
                  </div>
                  <div className="mb-4">
                    <label className="text-slate-400 font-black uppercase tracking-widest mb-1 block" style={{ fontSize: '0.6rem' }}>Active Topic</label>
                    <input 
                      type="text" 
                      defaultValue={cls.topic}
                      style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}
                      onBlur={(e) => addNotification(`Topic for ${cls.name} updated to: ${e.target.value}`, 'success')}
                    />
                  </div>
                  <div className="flex-between mb-4">
                    <span className="text-slate-500 font-medium">Live Attendance</span>
                    <strong className="text-emerald">{cls.attendance}</strong>
                  </div>
                  <button className="btn-primary-vibrant" style={{ width: '100%', justifyContent: 'center' }} onClick={() => addNotification(`Entering Live Studio for ${cls.name}`)}>
                    Launch Class
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Stream */}
          <div className="admin-card">
            <div className="flex-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Evaluation Stream</h3>
              <span className="badge-pro badge-rose">Action Required</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {assignmentsData.map((asm) => (
                <div key={asm.id} className="hover-bg-slate" style={{ padding: '1.25rem', borderRadius: '1.25rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '1rem', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FileText size={20} className="text-primary" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0, fontWeight: 800 }}>{asm.title}</h4>
                    <span className="text-slate-500 font-medium" style={{ fontSize: '0.85rem' }}>{asm.class} • Due: {asm.due}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input 
                      type="number" 
                      placeholder="0" 
                      style={{ width: '60px', padding: '0.4rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', textAlign: 'center' }}
                      onBlur={(e) => addNotification(`Graded ${asm.title}: ${e.target.value}/${asm.total}`, 'success')}
                    />
                    <span className="text-slate-400 font-bold">/ {asm.total}</span>
                  </div>
                  <button className="btn-icon-vibrant" onClick={() => addNotification(`Reviewing all submissions for ${asm.title}`)}>
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card" style={{ textAlign: 'center' }}>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Student Engagement</h3>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', border: '8px solid var(--primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
              <strong className="text-2xl font-black text-slate-800">84%</strong>
              <span className="text-slate-400 font-bold" style={{ fontSize: '0.6rem' }}>PULSE</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">Your students are most active between **10 AM - 12 PM**.</p>
          </div>

          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Inquiries</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { name: 'Arun Kumar', msg: 'Doubts in Quantum entanglement...', time: '10m ago' },
                { name: 'Meena R.', msg: 'Requesting leave for Monday.', time: '1h ago' }
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="avatar-vibrant" style={{ width: '36px', height: '36px', fontSize: '0.8rem' }}>{m.name.charAt(0)}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800 }}>{m.name}</p>
                    <p style={{ margin: '0.1rem 0 0.25rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{m.msg}</p>
                    <span className="text-slate-400 font-bold" style={{ fontSize: '0.7rem' }}>{m.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-outline w-full mt-6">View All Messages</button>
          </div>
        </aside>
      </div>

      <AnimatePresence>
        {showScheduleModal && (
          <div className="modal-overlay">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="admin-card" style={{ width: '450px', padding: '2rem' }}>
              <div className="modal-header flex-between mb-6">
                <h3 className="text-xl font-bold">Academic Schedule Builder</h3>
                <button className="close-btn" onClick={() => setShowScheduleModal(false)}>×</button>
              </div>
              <form onSubmit={onScheduleSubmit} className="pro-form">
                <div className="form-group mb-4">
                  <label>Class Name</label>
                  <input type="text" required value={scheduleForm.title} onChange={e => setScheduleForm({...scheduleForm, title: e.target.value})} placeholder="e.g., Physics Review" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group"><label>Date</label><input type="date" required value={scheduleForm.date} onChange={e => setScheduleForm({...scheduleForm, date: e.target.value})} /></div>
                  <div className="form-group"><label>Time</label><input type="time" required value={scheduleForm.time} onChange={e => setScheduleForm({...scheduleForm, time: e.target.value})} /></div>
                </div>
                <button type="submit" className="btn-primary-vibrant w-full mt-6" style={{ justifyContent: 'center' }}>Publish Class</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAssignmentModal && (
          <div className="modal-overlay">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="admin-card" style={{ width: '450px', padding: '2rem' }}>
              <div className="modal-header flex-between mb-6">
                <h3 className="text-xl font-bold">Create Evaluation Portal</h3>
                <button className="close-btn" onClick={() => setShowAssignmentModal(false)}>×</button>
              </div>
              <form onSubmit={onAssignmentSubmit} className="pro-form">
                <div className="form-group mb-4">
                  <label>Assignment Title</label>
                  <input type="text" required value={assignmentForm.title} onChange={e => setAssignmentForm({...assignmentForm, title: e.target.value})} placeholder="e.g., Quantum Mechanics Quiz" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group"><label>Deadline</label><input type="date" required value={assignmentForm.dueDate} onChange={e => setAssignmentForm({...assignmentForm, dueDate: e.target.value})} /></div>
                  <div className="form-group"><label>Max Points</label><input type="number" required value={assignmentForm.marks} onChange={e => setAssignmentForm({...assignmentForm, marks: e.target.value})} /></div>
                </div>
                <div className="form-group mt-4">
                  <label>Evaluation Guidelines</label>
                  <textarea rows="3" value={assignmentForm.desc} onChange={e => setAssignmentForm({...assignmentForm, desc: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }} />
                </div>
                <button type="submit" className="btn-primary-vibrant w-full mt-6" style={{ justifyContent: 'center' }}>Initialize Assignment</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacultyHub;
