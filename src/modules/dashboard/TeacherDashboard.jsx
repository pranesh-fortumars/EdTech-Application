import React from 'react';
import { Users, FileCheck, Calendar, MessageSquare, Plus, Video, Bell } from 'lucide-react';
import StatsCard from '../../components/StatsCard';
import useAuthStore from '../../store/useAuthStore';
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
            <button className="btn-outline"><Calendar size={16} /> Schedule Class</button>
            <button className="btn-primary"><Plus size={16} /> Create Assignment</button>
          </div>
        </div>
      </header>

      <div className="stats-row">
        <div className="stat-item card">
          <div className="stat-icon cyan"><Users size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Total Managed Students</span>
            <span className="stat-value">142</span>
            <span className="stat-trend positive">+4% from last month</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon orange"><FileCheck size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Pending Submissions</span>
            <span className="stat-value">28</span>
            <span className="stat-trend negative">12 overdue</span>
          </div>
        </div>
        <div className="stat-item card">
          <div className="stat-icon green"><Calendar size={20} /></div>
          <div className="stat-content">
            <span className="stat-label">Term Attendance</span>
            <span className="stat-value">94.2%</span>
            <span className="stat-trend positive">Above school avg</span>
          </div>
        </div>
      </div>

      <div className="dashboard-layout-grid">
        <div className="grid-main">
          <div className="table-section card">
            <div className="section-header">
              <h3>Student Performance Overview</h3>
              <div className="table-actions">
                <button className="btn-sm btn-outline">Filter</button>
                <button className="btn-sm btn-primary">Export CSV</button>
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
                      <td><button className="btn-icon"><MessageSquare size={14} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dual-grid">
            <div className="chart-card card">
              <h3>Class Grade Distribution</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={[
                    { grade: 'A+', count: 12 },
                    { grade: 'A', count: 25 },
                    { grade: 'B', count: 18 },
                    { grade: 'C', count: 5 },
                  ]}>
                    <XAxis dataKey="grade" axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip cursor={{fill: 'rgba(0,0,0,0.02)'}} />
                    <Bar dataKey="count" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="resources-card card">
              <h3>Shared Resources</h3>
              <div className="resource-list">
                <div className="resource-item">
                  <div className="file-icon pdf">PDF</div>
                  <div className="file-info">
                    <p>Calculus_Notes_W4.pdf</p>
                    <span>Shared with 12-A • 2.4 MB</span>
                  </div>
                </div>
                <div className="resource-item">
                  <div className="file-icon video">MP4</div>
                  <div className="file-info">
                    <p>Thermodynamics_Lecture_3.mp4</p>
                    <span>Shared with 12-B • 45 MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="grid-sidebar">
          <div className="lesson-planner card">
            <h3>Lesson Planner</h3>
            <div className="planner-item">
              <div className="day-circle">Mon</div>
              <div className="plan-info">
                <p>Advanced Integration</p>
                <span>Prep materials, Assignment #4</span>
              </div>
            </div>
            <div className="planner-item active">
              <div className="day-circle">Tue</div>
              <div className="plan-info">
                <p>Organic Chemistry Lab</p>
                <span>Safety equipment check required</span>
              </div>
            </div>
          </div>

          <div className="upcoming-events card">
            <h3>Institutional Calendar</h3>
            <div className="event-item">
              <div className="event-date">May 15</div>
              <div className="event-info">
                <p>Parent-Teacher Meeting</p>
                <span>All Day • Main Hall</span>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">May 22</div>
              <div className="event-info">
                <p>Annual Science Fair</p>
                <span>10:00 AM • Lab Block</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TeacherDashboard;
