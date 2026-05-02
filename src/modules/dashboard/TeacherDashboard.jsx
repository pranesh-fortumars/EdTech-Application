import React from 'react';
import { motion as m } from 'framer-motion';
import { 
  Users, BookOpen, Clock, CheckCircle, TrendingUp, Calendar, Video, FileText, Plus, Bell, ChevronRight, HelpCircle, Activity, Layout
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, AreaChart, Area } from 'recharts';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import '../dashboard/Dashboard.css';

const attendanceData = [
  { day: 'Mon', present: 92 },
  { day: 'Tue', present: 88 },
  { day: 'Wed', present: 95 },
  { day: 'Thu', present: 91 },
  { day: 'Fri', present: 89 },
];

const quizPerformance = [
  { topic: 'Photosynthesis', avg: 82 },
  { topic: 'Genetics', avg: 75 },
  { topic: 'Ecology', avg: 90 },
  { topic: 'Cell Bio', avg: 85 },
];

const TeacherDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="dashboard-container advanced-theme">
      {/* Background Decor */}
      <div className="bg-glow emerald"></div>
      <div className="bg-glow blue"></div>

      <header className="dashboard-header-premium">
        <div className="header-content">
          <m.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="welcome-section"
          >
            <div className="status-badge-premium">
              <Activity size={14} className="text-emerald animate-pulse" />
              <span>Classes Live in 2 Units</span>
            </div>
            <h1>{getTimeGreeting()}, <span className="text-gradient">Prof. {user.name.split(' ')[0]}</span></h1>
            <p className="subtitle">Department of {user.department || 'Science'} • Teaching Dashboard</p>
          </m.div>

          <div className="header-actions-premium">
            <m.button whileHover={{ scale: 1.05 }} className="btn-glass" onClick={() => addNotification('Opening institutional calendar...')}>
              <Calendar size={18} />
              <span>Academic Planner</span>
            </m.button>
            <m.button whileHover={{ scale: 1.05 }} className="btn-premium-action" onClick={() => addNotification('Initializing live virtual classroom...')}>
              <Video size={18} />
              <span>Launch Live Class</span>
            </m.button>
          </div>
        </div>
      </header>

      <div className="stats-grid-premium">
        {[
          { icon: Users, label: 'Total Students', value: '185', trend: 'Active', color: 'blue', iconColor: 'var(--primary)' },
          { icon: BookOpen, label: 'Course Progress', value: '72%', trend: 'On Schedule', color: 'emerald', iconColor: 'var(--accent-emerald)' },
          { icon: Clock, label: 'Teaching Hours', value: '24h', trend: 'This Week', color: 'violet', iconColor: 'var(--accent-violet)' },
          { icon: CheckCircle, label: 'Submissions', value: '12', trend: 'Pending Review', color: 'amber', iconColor: 'var(--accent-amber)' }
        ].map((stat, i) => (
          <m.div 
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="stat-card-premium glass"
          >
            <div className="stat-icon-wrap" style={{ backgroundColor: `${stat.iconColor}15` }}>
              <stat.icon size={24} style={{ color: stat.iconColor }} />
            </div>
            <div className="stat-info">
              <span className="label">{stat.label}</span>
              <div className="value-row">
                <span className="value">{stat.value}</span>
                <span className={`trend ${stat.color}`}>{stat.trend}</span>
              </div>
            </div>
            <div className="stat-glow" style={{ background: stat.iconColor }}></div>
          </m.div>
        ))}
      </div>

      <div className="main-layout-grid">
        <div className="content-prime">
          <div className="dual-section-grid">
            <section className="attendance-heatmap card-premium">
              <div className="section-header">
                <div className="title-group">
                  <h3>Attendance Engagement</h3>
                  <p>Weekly average participation across all batches</p>
                </div>
                <div className="stats-mini">
                  <strong>91.4%</strong>
                  <span>Global Avg</span>
                </div>
              </div>
              <div className="chart-wrap">
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={attendanceData}>
                    <defs>
                      <linearGradient id="colorAtt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-emerald)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent-emerald)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                    <Area type="monotone" dataKey="present" stroke="var(--accent-emerald)" strokeWidth={3} fill="url(#colorAtt)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section className="quiz-analytics card-premium">
              <div className="section-header">
                <div className="title-group">
                  <h3>Subject Mastery</h3>
                  <p>Recent quiz performance distribution</p>
                </div>
                <TrendingUp size={20} className="text-violet" />
              </div>
              <div className="chart-wrap">
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={quizPerformance}>
                    <XAxis dataKey="topic" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                    <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} />
                    <Bar dataKey="avg" radius={[4, 4, 0, 0]}>
                      {quizPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? 'var(--primary)' : 'var(--accent-violet)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          <section className="upcoming-schedule card-premium mt-2">
            <div className="section-header">
              <div className="title-group">
                <h3>Session Orchestration</h3>
                <p>Manage your upcoming teaching slots</p>
              </div>
              <button className="btn-text-premium" onClick={() => addNotification('Opening full schedule management...')}>
                View Full Month
              </button>
            </div>
            <div className="schedule-list-advanced">
              {[
                { time: '09:00 AM', subject: 'Advanced Biology', class: 'Grade 12-A', type: 'Lecture', status: 'Upcoming' },
                { time: '11:30 AM', subject: 'Laboratory Session', class: 'Grade 11-B', type: 'Practical', status: 'Preparation' },
              ].map((slot, i) => (
                <m.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="schedule-row-premium"
                >
                  <div className="time-slot">
                    <Clock size={16} />
                    <span>{slot.time}</span>
                  </div>
                  <div className="session-info">
                    <strong>{slot.subject}</strong>
                    <span>{slot.class} • {slot.type}</span>
                  </div>
                  <div className="status-indicator">
                    <span className={`pill ${slot.status.toLowerCase()}`}>{slot.status}</span>
                    <button className="btn-icon-premium" onClick={() => addNotification(`Starting ${slot.subject}...`)}>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </m.div>
              ))}
            </div>
          </section>
        </div>

        <aside className="content-sidebar">
          <section className="teacher-actions-grid card-premium">
            <h3>Quick Actions</h3>
            <div className="action-buttons-premium">
              <button className="action-btn-p" onClick={() => addNotification('Opening assignment creator...')}>
                <div className="icon-p"><FileText size={20} /></div>
                <span>Create Task</span>
              </button>
              <button className="action-btn-p" onClick={() => addNotification('Opening content uploader...')}>
                <div className="icon-p"><Plus size={20} /></div>
                <span>Upload Resource</span>
              </button>
              <button className="action-btn-p" onClick={() => addNotification('Opening student directory...')}>
                <div className="icon-p"><Users size={20} /></div>
                <span>Directory</span>
              </button>
              <button className="action-btn-p" onClick={() => addNotification('Opening layout settings...')}>
                <div className="icon-p"><Layout size={20} /></div>
                <span>Customize</span>
              </button>
            </div>
          </section>

          <section className="notifications-advanced card-premium mt-2">
            <div className="section-header">
              <h3>Action Required</h3>
              <Bell size={18} className="text-amber" />
            </div>
            <div className="alert-list-premium">
              {[
                { title: 'Grade Pending', desc: '12-A Biology assignments need review', urgency: 'high' },
                { title: 'New Message', desc: 'Arun Kumar sent a doubt regarding Cell Bio', urgency: 'mid' }
              ].map((alert, i) => (
                <div key={i} className={`alert-item-p ${alert.urgency}`}>
                  <div className="alert-content">
                    <strong>{alert.title}</strong>
                    <p>{alert.desc}</p>
                  </div>
                  <HelpCircle size={14} className="text-tertiary" />
                </div>
              ))}
            </div>
          </section>

          <m.div 
            whileHover={{ scale: 1.02 }}
            className="premium-promo-card card-premium mt-2"
          >
            <div className="promo-content">
              <TrendingUp size={32} className="text-violet" />
              <h4>AI Course Architect</h4>
              <p>Generate a full curriculum using Aura AI and save 5 hours weekly.</p>
              <button className="btn-primary full-width mt-1">Try Architect</button>
            </div>
          </m.div>
        </aside>
      </div>
    </div>
  );
};

export default TeacherDashboard;
