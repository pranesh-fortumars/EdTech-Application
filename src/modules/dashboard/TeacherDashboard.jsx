import React from 'react';
import { Users, FileCheck, Calendar, MessageSquare, Plus, Video, Bell } from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line 
} from 'recharts';
import '../dashboard/Dashboard.css';

const studentPerformance = [
  { name: 'Class 10-A', avg: 85, attendance: 92 },
  { name: 'Class 10-B', avg: 78, attendance: 88 },
  { name: 'Class 12-A', avg: 92, attendance: 95 },
  { name: 'Class 12-B', avg: 81, attendance: 90 },
];

const TeacherDashboard = () => {
  const { user } = useAuthStore();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="welcome-text">
          <h1>Vanakkam, <span className="gradient-text">{user.name}</span> 🎓</h1>
          <p>You have 3 classes scheduled for today at {user.institution}.</p>
        </div>
        <div className="action-btns">
          <button className="secondary-btn"><Plus size={18} /> New Assignment</button>
          <button className="primary-btn"><Video size={18} /> Start Live Class</button>
        </div>
      </header>

      <section className="stats-grid">
        <StatsCard title="Total Students" value="142" icon={Users} trend="up" trendValue="4" color="#0891b2" />
        <StatsCard title="Assignments Pending" value="28" icon={FileCheck} trend="down" trendValue="12" color="#f59e0b" />
        <StatsCard title="Avg. Attendance" value="94%" icon={Calendar} trend="up" trendValue="2" color="#10b981" />
        <StatsCard title="Student Queries" value="15" icon={MessageSquare} trend="up" trendValue="8" color="#a855f7" />
      </section>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="chart-card card">
            <div className="card-header">
              <h3>Class Performance Comparison</h3>
            </div>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={studentPerformance}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} />
                  <Bar dataKey="avg" fill="#0891b2" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="active-classes card">
            <h3>Current Assignments</h3>
            <div className="assignment-list">
              {[
                { title: 'Biology: Cell Structure Quiz', class: '10-A', status: 'Grading', due: 'Today' },
                { title: 'Environmental Science Project', class: '12-B', status: 'Ongoing', due: 'Tomorrow' }
              ].map((item, i) => (
                <div key={i} className="assignment-item card">
                  <div className="item-info">
                    <h4>{item.title}</h4>
                    <span>{item.class} • Due {item.due}</span>
                  </div>
                  <div className={`status-pill ${item.status.toLowerCase()}`}>{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="right-panel">
          <div className="notification-center card">
            <h3>Recent Alerts</h3>
            <div className="alert-list">
              <div className="alert-item">
                <Bell size={16} color="#f59e0b" />
                <p>Arun Kumar submitted Mathematics assignment.</p>
              </div>
              <div className="alert-item">
                <Bell size={16} color="#0891b2" />
                <p>New query from Class 12-A regarding board exams.</p>
              </div>
            </div>
          </div>

          <div className="schedule card">
            <h3>Today's Schedule</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <div className="time">10:00 AM</div>
                <div className="details">
                  <p>Biology - Class 10-A</p>
                  <span>Room 204</span>
                </div>
              </div>
              <div className="schedule-item live">
                <div className="time">02:00 PM</div>
                <div className="details">
                  <p>Genetics - Class 12-A</p>
                  <span>Live Streaming</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TeacherDashboard;
