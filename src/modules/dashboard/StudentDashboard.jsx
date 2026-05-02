import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Clock, Award, Star, TrendingUp, ChevronRight, Zap, Target, Flame, Play, Download, HelpCircle, Activity
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import '../dashboard/Dashboard.css';

const progressData = [
  { week: 'W1', score: 65, goal: 70 },
  { week: 'W2', score: 72, goal: 70 },
  { week: 'W3', score: 68, goal: 75 },
  { week: 'W4', score: 85, goal: 75 },
  { week: 'W5', score: 78, goal: 80 },
  { week: 'W6', score: 92, goal: 80 },
];

const StudentDashboard = () => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();

  return (
    <div className="dashboard-container advanced-theme">
      {/* Dynamic Backgrounds */}
      <div className="bg-glow purple"></div>
      <div className="bg-glow blue"></div>

      <header className="dashboard-header-premium">
        <div className="header-content">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="welcome-section"
          >
            <div className="status-badge-premium">
              <Flame size={14} className="text-rose animate-pulse" />
              <span>12 Day Study Streak!</span>
            </div>
            <h1>Welcome back, <span className="text-gradient">{user.name.split(' ')[0]}</span></h1>
            <p className="subtitle">Level 14 Scholar • 2,450 XP to Next Rank</p>
          </motion.div>

          <div className="header-actions-premium">
            <div className="xp-bar-container">
              <div className="xp-info">
                <span>Rank: **Gold**</span>
                <span>85% to Level 15</span>
              </div>
              <div className="xp-progress-bg">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  className="xp-progress-fill"
                ></motion.div>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} className="btn-premium-action" onClick={() => addNotification('Opening Aura AI revision session...')}>
              <Zap size={18} />
              <span>Quick Revision</span>
            </motion.button>
          </div>
        </div>
      </header>

      <div className="stats-grid-premium">
        {[
          { icon: BookOpen, label: 'Courses Enrolled', value: '6', trend: '2 Active', color: 'blue', iconColor: 'var(--primary)' },
          { icon: Target, label: 'Average Score', value: '88%', trend: '+4% vs Last', color: 'emerald', iconColor: 'var(--accent-emerald)' },
          { icon: Clock, label: 'Study Hours', value: '42h', trend: 'This Month', color: 'violet', iconColor: 'var(--accent-violet)' },
          { icon: Award, label: 'Achievements', value: '14', trend: '2 New Badges', color: 'amber', iconColor: 'var(--accent-amber)' }
        ].map((stat, i) => (
          <motion.div 
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
                <span className="trend positive">{stat.trend}</span>
              </div>
            </div>
            <div className="stat-glow" style={{ background: stat.iconColor }}></div>
          </motion.div>
        ))}
      </div>

      <div className="main-layout-grid">
        <div className="content-prime">
          <section className="learning-trajectory card-premium">
            <div className="section-header">
              <div className="title-group">
                <h3>Academic Trajectory</h3>
                <p>Performance score vs. weekly goals</p>
              </div>
              <div className="chart-legend-premium">
                <span className="legend-item"><span className="dot emerald"></span> Actual Score</span>
                <span className="legend-item"><span className="dot tertiary"></span> Goal</span>
              </div>
            </div>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={progressData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent-emerald)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--accent-emerald)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: 'var(--shadow-lg)' }} />
                  <Area type="monotone" dataKey="score" stroke="var(--accent-emerald)" strokeWidth={4} fill="url(#colorScore)" />
                  <Area type="monotone" dataKey="goal" stroke="var(--text-tertiary)" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="active-courses card-premium mt-2">
            <div className="section-header">
              <div className="title-group">
                <h3>Continuous Learning</h3>
                <p>Resume your active modules</p>
              </div>
              <TrendingUp size={20} className="text-primary" />
            </div>
            <div className="course-grid-premium">
              {[
                { title: 'Advanced Astrophysics', progress: 65, color: 'blue', lessons: '12/18' },
                { title: 'Organic Chemistry', progress: 42, color: 'emerald', lessons: '8/22' },
                { title: 'Digital Marketing', progress: 90, color: 'violet', lessons: '24/26' }
              ].map((course, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  className="course-card-p"
                >
                  <div className={`course-icon ${course.color}`}>
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div className="course-info">
                    <h4>{course.title}</h4>
                    <span className="meta">{course.lessons} Lessons</span>
                    <div className="progress-container-p">
                      <div className="prog-text">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="prog-bar-bg">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          className={`prog-bar-fill ${course.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <aside className="content-sidebar">
          <section className="scholarship-card-premium card-premium">
            <div className="card-header-p">
              <h3>Fin-Scholar Pass</h3>
              <Award size={20} className="text-amber" />
            </div>
            <div className="scholar-balance">
              <span className="label">Available Grant</span>
              <span className="amount">₹45,000</span>
            </div>
            <div className="scholar-stats">
              <div className="stat">
                <span>Compliance</span>
                <strong className="text-success">98%</strong>
              </div>
              <div className="stat">
                <span>Next Payout</span>
                <strong>June 12</strong>
              </div>
            </div>
            <button className="btn-primary full-width mt-1">Claim Benefits</button>
          </section>

          <section className="upcoming-events card-premium mt-2">
            <h3>Institutional Feed</h3>
            <div className="event-list-p">
              {[
                { time: 'Tomorrow', title: 'Mathematics Olympiad', tag: 'Exam' },
                { time: 'Sat, 12 May', title: 'Tech Innovation Fair', tag: 'Event' }
              ].map((event, i) => (
                <div key={i} className="event-item-p">
                  <div className="date-box">{event.time}</div>
                  <div className="event-details">
                    <strong>{event.title}</strong>
                    <span className="tag">{event.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="study-tools-sidebar card-premium mt-2">
            <h3>Quick Access</h3>
            <div className="tool-row-p">
              <button className="tool-btn-p" onClick={() => addNotification('Opening library catalog...')}>
                <BookOpen size={18} />
                <span>Library</span>
              </button>
              <button className="tool-btn-p" onClick={() => addNotification('Downloading resources...')}>
                <Download size={18} />
                <span>Files</span>
              </button>
              <button className="tool-btn-p" onClick={() => addNotification('Opening help center...')}>
                <HelpCircle size={18} />
                <span>Support</span>
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
