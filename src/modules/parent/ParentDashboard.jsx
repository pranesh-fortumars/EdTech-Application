import React from 'react';
import { motion } from 'framer-motion';
import { 
  Baby, BookOpen, Calendar, MessageSquare, 
  TrendingUp, Award, Clock, AlertTriangle,
  ChevronRight, Download, Mail
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';
import useNotificationStore from '../../store/useNotificationStore';
import './ParentDashboard.css';

const performanceData = [
  { month: 'Jan', score: 82 },
  { month: 'Feb', score: 85 },
  { month: 'Mar', score: 88 },
  { month: 'Apr', score: 92 },
];

const ParentDashboard = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="parent-dashboard-container professional-theme">
      <header className="dashboard-header">
        <div className="header-main">
          <div className="welcome-text">
            <span className="breadcrumb">Parent Portal</span>
            <h1>Anbu's Academic Progress</h1>
            <p>Class 12-A | Roll No: 2026104</p>
          </div>
          <div className="action-group">
            <button className="btn-outline" onClick={() => addNotification('Sending message to Class Teacher...', 'success')}>
              <Mail size={16} /> Contact Teacher
            </button>
            <button className="btn-primary" onClick={() => addNotification('Downloading full academic report...', 'success')}>
              <Download size={16} /> Progress Report
            </button>
          </div>
        </div>
      </header>

      <div className="stats-grid">
        {[
          { icon: TrendingUp, label: 'Current GPA', value: '3.8', trend: '+0.2 from last term', color: 'blue' },
          { icon: Clock, label: 'Attendance', value: '94%', trend: 'On track', color: 'emerald' },
          { icon: Award, label: 'Aura Credits', value: '1,240', trend: 'Top 5% of class', color: 'amber' }
        ].map((stat, i) => (
          <div key={i} className="stat-card card">
            <div className={`icon-box ${stat.color}`}><stat.icon size={20} /></div>
            <div className="info">
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
              <p className="trend">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="parent-grid">
        <div className="main-content">
          <div className="performance-card card">
            <h3>Progress Analysis</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis domain={[70, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="var(--primary)" strokeWidth={3} dot={{ r: 6, fill: 'var(--primary)' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="upcoming-events card mt-2">
            <h3>Academic Calendar</h3>
            <div className="event-list">
              {[
                { date: 'May 15', title: 'Second Term Examination', type: 'Exam' },
                { date: 'May 20', title: 'Parent Teacher Meeting', type: 'Meeting' },
                { date: 'June 02', title: 'Summer Tech Workshop', type: 'Event' }
              ].map((ev, i) => (
                <div key={i} className="event-item">
                  <div className="date-badge">
                    <strong>{ev.date.split(' ')[1]}</strong>
                    <span>{ev.date.split(' ')[0]}</span>
                  </div>
                  <div className="details">
                    <h4>{ev.title}</h4>
                    <span className={`tag ${ev.type.toLowerCase()}`}>{ev.type}</span>
                  </div>
                  <ChevronRight size={18} className="text-tertiary" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="sidebar-content">
          <div className="behavior-card card border-amber">
            <div className="header">
              <AlertTriangle className="text-amber" size={20} />
              <h3>Teacher's Note</h3>
            </div>
            <div className="note-body">
              "Anbu is performing exceptionally well in **Physics**. However, we suggest focusing more on **Calculus** applications for the upcoming finals."
            </div>
            <p className="author">— Selvi Kavitha (Class Teacher)</p>
          </div>

          <div className="fees-mini-card card mt-2">
            <div className="header">
              <TrendingUp size={20} className="text-rose" />
              <h3>Pending Fees</h3>
            </div>
            <div className="balance">
              <span>Outstanding Amount</span>
              <strong>₹45,000</strong>
            </div>
            <button className="btn-primary full-width" onClick={() => addNotification('Redirecting to Fee Portal...')}>Pay Now</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ParentDashboard;
