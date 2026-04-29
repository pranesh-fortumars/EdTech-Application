import React from 'react';
import { Book, Clock, Star, Zap, PlayCircle, Trophy, Bot } from 'lucide-react';
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
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="welcome-text">
          <h1>Vanakkam, <span className="gradient-text">{user.name.split(' ')[0]}!</span> 👋</h1>
          <p>You're on a 5-day learning streak. Keep up the great work at {user.institution}!</p>
        </div>
        <button className="primary-btn ai-btn">
          <Zap size={18} />
          <span>Ask Aura AI</span>
        </button>
      </header>

      <section className="stats-grid">
        <StatsCard 
          title="Subjects in Progress" 
          value="4" 
          icon={Book} 
          trend="up" 
          trendValue="12" 
          color="#0891b2" 
        />
        <StatsCard 
          title="Study Hours" 
          value="24.5" 
          icon={Clock} 
          trend="up" 
          trendValue="8" 
          color="#0ea5e9" 
        />
        <StatsCard 
          title="Monthly Test Avg." 
          value="92%" 
          icon={Star} 
          trend="down" 
          trendValue="2" 
          color="#f59e0b" 
        />
        <StatsCard 
          title="School Rank" 
          value="#12" 
          icon={Trophy} 
          trend="up" 
          trendValue="45" 
          color="#10b981" 
        />
      </section>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="chart-card card">
            <div className="card-header">
              <h3>Academic Progress</h3>
              <select className="period-select">
                <option>Last 7 Days</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0891b2" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#0891b2" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#0891b2" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="courses-section">
            <div className="section-header">
              <h3>Upcoming Lessons</h3>
              <button className="text-btn">View Timetable</button>
            </div>
            <div className="course-list">
              {[
                { title: 'Mathematics: Calculus', instructor: 'Thiru. Muthuvel P.', progress: 75, img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop' },
                { title: 'Physics: Thermodynamics', instructor: 'Selvi. Kavitha R.', progress: 40, img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop' }
              ].map((course, i) => (
                <div key={i} className="course-item card">
                  <img src={course.img} alt={course.title} className="course-thumb" />
                  <div className="course-info">
                    <h4>{course.title}</h4>
                    <p>{course.instructor}</p>
                    <div className="progress-wrapper">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                  <button className="play-btn">
                    <PlayCircle size={32} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="right-panel">
          <div className="ai-insight card glass">
            <div className="insight-header">
              <Bot size={20} className="ai-icon" />
              <h4>Aura AI School Insights</h4>
            </div>
            <p>You're performing 20% better in **Calculus** this week. We recommend revising "Integrals" before your Friday test.</p>
            <button className="ai-action-btn">View Study Plan</button>
          </div>

          <div className="upcoming-classes card">
            <h3>Upcoming Sessions</h3>
            <div className="session-list">
              {[
                { title: 'Live Q&A: Frontend Arch', time: 'Today, 4:00 PM', status: 'live' },
                { title: 'Group Project: Web 3.0', time: 'Tomorrow, 10:00 AM', status: 'scheduled' }
              ].map((session, i) => (
                <div key={i} className="session-item">
                  <div className={`status-indicator ${session.status}`}></div>
                  <div className="session-details">
                    <p className="session-title">{session.title}</p>
                    <p className="session-time">{session.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
