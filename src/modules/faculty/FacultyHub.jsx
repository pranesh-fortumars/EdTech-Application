import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, BookOpen, Calendar, ClipboardCheck, 
  Plus, MessageSquare, Filter, MoreVertical,
  CheckCircle2, Clock, AlertCircle, FileText
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './FacultyHub.css';

const assignments = [
  { id: 1, title: 'Quantum Physics Quiz', class: '12-A', submissions: 24, total: 30, due: '2h remaining' },
  { id: 2, title: 'Calculus Applications', class: '12-B', submissions: 12, total: 28, due: 'May 15' },
  { id: 3, title: 'Electromagnetism Lab', class: '11-A', submissions: 30, total: 30, due: 'Completed' },
];

const FacultyHub = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="faculty-hub-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Faculty Excellence Hub</h1>
          <p>Orchestrate learning, manage evaluations, and engage with your students.</p>
        </div>
        <div className="action-group">
          <button className="btn-outline" onClick={() => addNotification('Opening schedule builder...')}>
            <Calendar size={18} /> Class Schedule
          </button>
          <button className="btn-primary" onClick={() => addNotification('Creating new assignment portal...')}>
            <Plus size={18} /> New Assignment
          </button>
        </div>
      </header>

      <div className="faculty-grid">
        <main className="main-content">
          <div className="active-classes card">
            <div className="section-header">
              <h3>Active Classes</h3>
              <button className="btn-icon"><Filter size={16} /></button>
            </div>
            <div className="class-cards">
              {[
                { name: 'Physics 12-A', students: 30, attendance: '92%', topic: 'Particle Physics' },
                { name: 'Mathematics 12-B', students: 28, attendance: '88%', topic: 'Integrals' }
              ].map((cls, i) => (
                <div key={i} className="class-mini-card glass">
                  <div className="card-header">
                    <h4>{cls.name}</h4>
                    <span className="student-count"><Users size={12} /> {cls.students}</span>
                  </div>
                  <div className="card-body">
                    <p>Current: <strong>{cls.topic}</strong></p>
                    <div className="attendance-row">
                      <span>Live Attendance</span>
                      <strong className="text-emerald">{cls.attendance}</strong>
                    </div>
                  </div>
                  <button className="btn-sm-primary" onClick={() => addNotification(`Entering Live Studio for ${cls.name}`)}>
                    Launch Class
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="assignment-management card mt-2">
            <div className="section-header">
              <h3>Evaluation Stream</h3>
              <span className="badge">3 Action Required</span>
            </div>
            <div className="assignment-list">
              {assignments.map((asm) => (
                <div key={asm.id} className="assignment-row">
                  <div className="icon-box">
                    <FileText size={20} className="text-blue" />
                  </div>
                  <div className="info">
                    <h4>{asm.title}</h4>
                    <span>{asm.class} • Due: {asm.due}</span>
                  </div>
                  <div className="progress">
                    <div className="bar"><div className="fill" style={{ width: `${(asm.submissions/asm.total)*100}%` }}></div></div>
                    <span>{asm.submissions}/{asm.total} Graded</span>
                  </div>
                  <button className="btn-icon" onClick={() => addNotification(`Reviewing submissions for ${asm.title}`)}>
                    <ChevronRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="faculty-sidebar">
          <div className="card glass student-engagement">
            <h3>Student Engagement</h3>
            <div className="stat-circle">
              <div className="inner">
                <strong>84%</strong>
                <span>Overall Pulse</span>
              </div>
            </div>
            <p>Your students are most active between **10 AM - 12 PM**.</p>
          </div>

          <div className="card mt-2 messages-mini">
            <h3>Recent Inquiries</h3>
            <div className="msg-list">
              {[
                { name: 'Arun Kumar', msg: 'Doubts in Quantum entanglement...', time: '10m ago' },
                { name: 'Meena R.', msg: 'Requesting leave for Monday.', time: '1h ago' }
              ].map((m, i) => (
                <div key={i} className="msg-item">
                  <div className="avatar-sm">{m.name.charAt(0)}</div>
                  <div className="text">
                    <strong>{m.name}</strong>
                    <p>{m.msg}</p>
                  </div>
                  <span className="time">{m.time}</span>
                </div>
              ))}
            </div>
            <button className="btn-outline full-width mt-1">View All Messages</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ChevronRight = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>;

export default FacultyHub;
