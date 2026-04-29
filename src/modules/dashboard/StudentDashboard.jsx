import React from 'react';
import { Book, Clock, Star, Zap, PlayCircle, Trophy, Bot, Calendar } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
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

const data = [
  { name: 'Mon', study: 40, quiz: 24 },
  { name: 'Tue', study: 30, quiz: 13 },
  { name: 'Wed', study: 20, quiz: 98 },
  { name: 'Thu', study: 27, quiz: 39 },
  { name: 'Fri', study: 18, quiz: 48 },
  { name: 'Sat', study: 23, quiz: 38 },
  { name: 'Sun', study: 34, quiz: 43 },
];

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
  
  return (
    <div className="dashboard-container professional-theme">
      <header className="dashboard-header">
        <div className="header-main">
          <div className="welcome-text">
            <span className="breadcrumb">Student Portal • {user.institution.split(',')[0]}</span>
            <h1>Vanakkam, <span className="text-primary">{user.name.split(' ')[0]}!</span> 👋</h1>
            <p>Class 12-A • Academic Streak: 5 Days</p>
          </div>
          <div className="action-group">
            <button className="btn-outline"><Calendar size={16} /> View Timetable</button>
            <button className="btn-primary"><Zap size={16} /> Ask Aura AI</button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        <div className="stat-item card">
          <div className="stat-icon cyan"><Book size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Active Subjects</span>
            <span className="stat-value">6</span>
            <span className="stat-trend positive">2 new modules this week</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon orange"><Star size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Term GPA</span>
            <span className="stat-value">9.2</span>
            <span className="stat-trend positive">Top 5% of class</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon green"><Trophy size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">School Rank</span>
            <span className="stat-value">#12</span>
            <span className="stat-trend positive">+3 ranks gained</span>
          </div>
        </div>
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card">
            <div className="section-header">
              <h3>Upcoming Board Exams</h3>
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
                    <tr key={i}>
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
            <div className="chart-card card">
              <h3>Learning Consistency</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={activityData}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="time" axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="score" stroke="var(--primary)" fillOpacity={1} fill="url(#colorScore)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="feedback-card card">
              <h3>Tutor Feedback</h3>
              <div className="feedback-list">
                <div className="feedback-item">
                  <div className="tutor-avatar">TP</div>
                  <div className="feedback-content">
                    <p><strong>Thiru. Muthuvel P.</strong> on Calculus Assignment</p>
                    <span>"Excellent use of integration by parts. Try to simplify the final expressions more."</span>
                  </div>
                </div>
                <div className="feedback-item">
                  <div className="tutor-avatar">SK</div>
                  <div className="feedback-content">
                    <p><strong>Selvi. Kavitha R.</strong> on Thermodynamics</p>
                    <span>"Your understanding of entropy is deep. Great work on the lab report!"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="ai-insight-pro card glass">
            <div className="insight-header">
              <Bot size={20} className="ai-icon" />
              <h4>Aura AI Mentor</h4>
            </div>
            <p>I noticed you're spending less time on <strong>Chemistry</strong> this week. Your exam is in 12 days. Should we start a revision session?</p>
            <button className="btn-primary btn-sm">Start Revision</button>
          </div>

          <div className="resource-hub card">
            <h3>Resources for You</h3>
            <div className="resource-links">
              <button className="action-row"><Book size={14} /> Model Question Papers</button>
              <button className="action-row"><Clock size={14} /> Revision Timetable</button>
              <button className="action-row"><Star size={14} /> Subject Cheat Sheets</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
