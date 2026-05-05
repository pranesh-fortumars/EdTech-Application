import React from 'react';
import { Users, FileCheck, Calendar, MessageSquare, Plus, Video, Bell, RefreshCw, BarChart2, BookOpen, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import '../dashboard/Dashboard.css';

const studentPerformance = [
  { id: 'STU001', name: 'Arun Kumar', class: '12-A', attendance: '98%', avgGrade: 'A+', status: 'Excellent' },
  { id: 'STU002', name: 'Kavitha R.', class: '12-A', attendance: '95%', avgGrade: 'A', status: 'Good' },
  { id: 'STU003', name: 'Rajesh S.', class: '12-B', attendance: '82%', avgGrade: 'B', status: 'Needs Focus' },
  { id: 'STU004', name: 'Priya M.', class: '10-A', attendance: '99%', avgGrade: 'A+', status: 'Excellent' },
];

const TeacherDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const [showScheduleModal, setShowScheduleModal] = React.useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = React.useState(false);
  
  const [scheduleForm, setScheduleForm] = React.useState({ title: '', date: '', time: '', subject: 'Mathematics' });
  const [assignmentForm, setAssignmentForm] = React.useState({ title: '', dueDate: '', marks: '100', desc: '' });

  const handleAction = (msg) => addNotification(msg, 'success');

  const onScheduleSubmit = (e) => {
    e.preventDefault();
    addNotification(`Class "${scheduleForm.title}" scheduled for ${scheduleForm.date}`, 'success');
    setShowScheduleModal(false);
    setScheduleForm({ title: '', date: '', time: '', subject: 'Mathematics' });
  };

  const onAssignmentSubmit = (e) => {
    e.preventDefault();
    addNotification(`Assignment "${assignmentForm.title}" created successfully`, 'success');
    setShowAssignmentModal(false);
    setAssignmentForm({ title: '', dueDate: '', marks: '100', desc: '' });
  };

  return (
    <div className="dashboard-container professional-theme">
      <header className="dashboard-header">
        <div className="header-main">
          <div className="welcome-text">
            <span className="breadcrumb">Academic Year 2026-27 • Term 1</span>
            <h1>Faculty Portal: <span className="text-primary">{user.name}</span></h1>
            <p>Senior Educator at {user.institution}</p>
          </div>
          <div className="action-group">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
              onClick={() => setShowScheduleModal(true)}
            >
              <Calendar size={16} /> Schedule Class
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => setShowAssignmentModal(true)}
            >
              <Plus size={16} /> Create Assignment
            </motion.button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        {[
          { icon: Users, label: 'Total Managed Students', value: '142', trend: '+4% from last month', color: 'cyan' },
          { icon: FileCheck, label: 'Pending Submissions', value: '28', trend: '12 overdue', color: 'orange', isNegative: true },
          { icon: Calendar, label: 'Term Attendance', value: '94.2%', trend: 'Above school avg', color: 'green' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="stat-item card clickable"
            onClick={() => handleAction(`Accessing ${stat.label} report`)}
          >
            <div className={`stat-icon ${stat.color}`}><stat.icon size={20} /></div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className={`stat-trend ${stat.isNegative ? 'negative' : 'positive'}`}>{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card">
            <div className="section-header">
              <h3>Student Performance Overview</h3>
              <div className="table-actions">
                <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleAction('Filtering student data...')} className="btn-sm btn-outline">Filter</motion.button>
                <motion.button whileHover={{ scale: 1.05 }} onClick={() => handleAction('Generating performance CSV...')} className="btn-sm btn-primary">Export CSV</motion.button>
              </div>
            </div>
            <div className="table-container">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Attendance</th>
                    <th>Avg. Grade</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {studentPerformance.map(student => (
                    <tr key={student.id}>
                      <td className="text-mono">{student.id}</td>
                      <td className="font-semibold">{student.name}</td>
                      <td>{student.class}</td>
                      <td>{student.attendance}</td>
                      <td><span className={`grade-badge ${student.avgGrade.startsWith('A') ? 'high' : 'mid'}`}>{student.avgGrade}</span></td>
                      <td><span className={`status-text ${student.status.toLowerCase().replace(' ', '-')}`}>{student.status}</span></td>
                      <td>
                        <motion.button 
                          whileHover={{ scale: 1.2, color: 'var(--primary)' }}
                          onClick={() => handleAction(`Opening chat with ${student.name}`)}
                          className="btn-icon"
                        >
                          <MessageSquare size={14} />
                        </motion.button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dual-grid">
            <div className="chart-card card border-teal">
              <div className="section-header">
                <h3>Monthly Attendance Trend</h3>
                <motion.button whileHover={{ rotate: 180 }} onClick={() => handleAction('Refreshing attendance data...')} className="btn-icon">
                  <RefreshCw size={14} />
                </motion.button>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[
                    { day: 'Mon', count: 98 },
                    { day: 'Tue', count: 95 },
                    { day: 'Wed', count: 88 },
                    { day: 'Thu', count: 92 },
                    { day: 'Fri', count: 99 },
                  ]}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} />
                    <Bar dataKey="count" fill="var(--accent-teal)" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="quiz-card card border-violet">
              <div className="section-header">
                <h3>Quiz Builder Performance</h3>
                <BarChart2 size={16} className="text-violet" />
              </div>
              <div className="quiz-stats">
                {[
                  { label: 'Active Quizzes', value: '12' },
                  { label: 'Avg. Completion', value: '84%' },
                  { label: 'Top Score', value: '100/100' }
                ].map((s, i) => (
                  <div key={i} className="quiz-stat-item">
                    <span className="label">{s.label}</span>
                    <span className="value text-violet">{s.value}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary btn-sm full-width mt-1 bg-violet"
                onClick={() => handleAction('Initializing new quiz builder...')}
              >
                Launch New Quiz
              </motion.button>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="lesson-planner card border-amber">
            <div className="section-header">
              <h3>Lesson Planner</h3>
              <BookOpen size={16} className="text-amber" />
            </div>
            <div className="planner-item clickable" onClick={() => handleAction('Viewing Monday lesson details...')}>
              <div className="day-circle border-amber">Mon</div>
              <div className="plan-info">
                <p>Advanced Integration</p>
                <span>Prep materials, Assignment #4</span>
              </div>
            </div>
            <div className="planner-item active bg-amber-light clickable" onClick={() => handleAction('Viewing Tuesday lesson details...')}>
              <div className="day-circle border-amber bg-amber text-white">Tue</div>
              <div className="plan-info">
                <p>Organic Chemistry Lab</p>
                <span>Safety equipment check required</span>
              </div>
            </div>
          </div>

          <div className="upcoming-events card border-rose">
            <div className="section-header">
              <h3>Institutional Calendar</h3>
              <Clock size={16} className="text-rose" />
            </div>
            {[
              { date: 'May 15', title: 'Parent-Teacher Meeting', desc: 'All Day • Main Hall' },
              { date: 'May 22', title: 'Annual Science Fair', desc: '10:00 AM • Lab Block' }
            ].map((event, i) => (
              <div key={i} className="event-item clickable" onClick={() => handleAction(`Viewing details for ${event.title}`)}>
                <div className="event-date text-rose">{event.date}</div>
                <div className="event-info">
                  <p>{event.title}</p>
                  <span>{event.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <AnimatePresence>
        {showScheduleModal && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="modal-card card glass"
            >
              <div className="modal-header">
                <h3>Schedule New Live Class</h3>
                <button className="close-btn" onClick={() => setShowScheduleModal(false)}>×</button>
              </div>
              <form onSubmit={onScheduleSubmit} className="pro-form">
                <div className="form-group">
                  <label>Class Title</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Advanced Calculus Review"
                    value={scheduleForm.title}
                    onChange={e => setScheduleForm({...scheduleForm, title: e.target.value})}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input 
                      type="date" 
                      required
                      value={scheduleForm.date}
                      onChange={e => setScheduleForm({...scheduleForm, date: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Time</label>
                    <input 
                      type="time" 
                      required
                      value={scheduleForm.time}
                      onChange={e => setScheduleForm({...scheduleForm, time: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select 
                    value={scheduleForm.subject}
                    onChange={e => setScheduleForm({...scheduleForm, subject: e.target.value})}
                  >
                    <option>Mathematics</option>
                    <option>Physics</option>
                    <option>Chemistry</option>
                    <option>Computer Science</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary full-width mt-2">Publish Schedule</button>
              </form>
            </motion.div>
          </div>
        )}

        {showAssignmentModal && (
          <div className="modal-overlay">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="modal-card card glass"
            >
              <div className="modal-header">
                <h3>Create New Assignment</h3>
                <button className="close-btn" onClick={() => setShowAssignmentModal(false)}>×</button>
              </div>
              <form onSubmit={onAssignmentSubmit} className="pro-form">
                <div className="form-group">
                  <label>Assignment Title</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Organic Chemistry Lab Report"
                    value={assignmentForm.title}
                    onChange={e => setAssignmentForm({...assignmentForm, title: e.target.value})}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Due Date</label>
                    <input 
                      type="date" 
                      required
                      value={assignmentForm.dueDate}
                      onChange={e => setAssignmentForm({...assignmentForm, dueDate: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Marks</label>
                    <input 
                      type="number" 
                      required
                      value={assignmentForm.marks}
                      onChange={e => setAssignmentForm({...assignmentForm, marks: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Instructions</label>
                  <textarea 
                    rows="4" 
                    placeholder="Provide detailed instructions for students..."
                    value={assignmentForm.desc}
                    onChange={e => setAssignmentForm({...assignmentForm, desc: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary full-width mt-2">Release Assignment</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeacherDashboard;
