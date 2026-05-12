import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Clock, Star, Zap, PlayCircle, Trophy, Bot, Calendar, RefreshCw, Award, Target, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import StatsCard from '../../components/StatsCard';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import './Dashboard.css';

const activityData = [
  { time: '9:00 AM', score: 65 },
  { time: '11:00 AM', score: 85 },
  { time: '1:00 PM', score: 45 },
  { time: '3:00 PM', score: 95 },
  { time: '5:00 PM', score: 75 },
  { time: '7:00 PM', score: 80 },
];

const StudentDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();

  const handleAction = (msg) => addNotification(msg, 'success');
  
  return (
    <div className="dashboard-container professional-theme">
      <header className="dashboard-header">
        <div className="header-main">
          <div className="welcome-text">
            <span className="breadcrumb">Student Portal • {user?.institution?.split(',')[0] || 'Institution'}</span>
            <h1>Vanakkam, <span className="text-primary">{user?.name?.split(' ')[0] || 'User'}!</span> 👋</h1>
            <p>Class 12-A • Academic Streak: 5 Days</p>
          </div>
          <div className="action-group">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
              onClick={() => navigate('/timetable')}
            >
              <Calendar size={16} /> View Timetable
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-aura-ai'));
                handleAction('Aura AI is now listening...');
              }}
            >
              <Zap size={16} /> Ask Aura AI
            </motion.button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        {[
          { icon: Book, label: 'Active Subjects', value: '6', trend: '2 new modules this week', color: 'cyan' },
          { icon: Star, label: 'Term GPA', value: '9.2', trend: 'Top 5% of class', color: 'orange' },
          { icon: Trophy, label: 'School Rank', value: '#12', trend: '+3 ranks gained', color: 'green' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="stat-item card clickable"
            onClick={() => handleAction(`Viewing details for ${stat.label}`)}
          >
            <div className={`stat-icon ${stat.color}`}><stat.icon size={20} /></div>
            <div className="stat-content">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-trend positive">{stat.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card border-blue">
            <div className="section-header">
              <h3>Upcoming Board Exams</h3>
              <Target size={16} className="text-primary" />
            </div>
            <div className="table-container">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { sub: 'Mathematics', date: 'May 10, 2026', time: '10:00 AM', venue: 'Hall A', status: 'Prepare' },
                    { sub: 'Physics', date: 'May 14, 2026', time: '10:00 AM', venue: 'Hall B', status: 'Scheduled' },
                    { sub: 'Chemistry', date: 'May 18, 2026', time: '10:00 AM', venue: 'Hall A', status: 'Scheduled' },
                  ].map((exam, i) => (
                    <tr key={i} className="clickable" onClick={() => handleAction(`Opening exam prep module for ${exam.sub}`)}>
                      <td className="font-semibold">{exam.sub}</td>
                      <td>{exam.date}</td>
                      <td>{exam.time}</td>
                      <td>{exam.venue}</td>
                      <td><span className={`grade-badge ${exam.status === 'Prepare' ? 'high' : 'mid'}`}>{exam.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dual-grid">
            <div className="chart-card card border-indigo">
              <div className="section-header">
                <h3>Academic Skill Progression</h3>
                <motion.button whileHover={{ rotate: 180 }} onClick={() => handleAction('Syncing progress with latest test results...')} className="btn-icon">
                  <RefreshCw size={14} />
                </motion.button>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-indigo)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent-indigo)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="score" stroke="var(--accent-indigo)" fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="scholarship-card card border-emerald">
              <div className="section-header">
                <h3>Scholarship Tracker</h3>
                <Award size={16} className="text-emerald" />
              </div>
              <div className="scholarship-status">
                <div className="status-badge bg-emerald">Active</div>
                <p className="scholarship-name">Tamil Nadu Merit Scholarship</p>
                <div className="payout-info">
                  <span>Next Payout:</span>
                  <strong>₹2,500 (June 15)</strong>
                </div>
              </div>
              <div className="compliance-check">
                <span>Academic Compliance:</span>
                <span className="text-emerald">92% (Required: 85%)</span>
              </div>
              <motion.button whileHover={{ x: 5 }} onClick={() => handleAction('Opening scholarship portal...')} className="btn-text mt-1 text-emerald">
                View Details <ChevronRight size={14} />
              </motion.button>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="ai-insight-pro card glass border-violet">
            <div className="insight-header">
              <Bot size={20} className="ai-icon text-violet" />
              <h4 className="text-violet">Aura AI Mentor</h4>
            </div>
            <p>I noticed you're spending less time on <strong>Chemistry</strong> this week. Your exam is in 12 days. Should we start a revision session?</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary btn-sm bg-violet"
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-aura-ai', { 
                  detail: { message: "I want to start my Chemistry revision session for the board exams." } 
                }));
                handleAction('Generating chemistry revision roadmap...');
              }}
            >
              Start Revision
            </motion.button>
          </div>

          <div className="resource-hub card border-rose">
            <h3>Resources for You</h3>
            <div className="resource-links">
              {[
                { icon: Book, label: 'Model Question Papers' },
                { icon: Clock, label: 'Revision Timetable' },
                { icon: Star, label: 'Subject Cheat Sheets' }
              ].map((res, i) => (
                <motion.button 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="action-row text-rose"
                  onClick={() => handleAction(`Downloading ${res.label}...`)}
                >
                  <res.icon size={14} /> {res.label}
                </motion.button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
