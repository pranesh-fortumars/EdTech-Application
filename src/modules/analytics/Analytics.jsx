import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import StatsCard from '../../components/StatsCard';
import { Target, Zap, Clock, Book } from 'lucide-react';
import './Analytics.css';

const performanceData = [
  { name: 'Week 1', react: 65, node: 40, css: 85 },
  { name: 'Week 2', react: 75, node: 45, css: 88 },
  { name: 'Week 3', react: 85, node: 60, css: 92 },
  { name: 'Week 4', react: 92, node: 70, css: 95 },
];

const subjectData = [
  { name: 'Frontend', value: 400 },
  { name: 'Backend', value: 300 },
  { name: 'AI/ML', value: 200 },
  { name: 'Design', value: 100 },
];

const COLORS = ['#6366f1', '#a855f7', '#f59e0b', '#10b981'];

const Analytics = () => {
  return (
    <div className="analytics-page">
      <header className="page-header">
        <h1>Learning <span className="gradient-text">Analytics</span></h1>
        <p>Track your growth and performance across all modules.</p>
      </header>

      <div className="stats-grid">
        <StatsCard title="Total Modules" value="18" icon={Book} trend="up" trendValue="5" color="#6366f1" />
        <StatsCard title="Learning Velocity" value="2.4x" icon={Zap} trend="up" trendValue="15" color="#a855f7" />
        <StatsCard title="Time Invested" value="156h" icon={Clock} trend="up" trendValue="10" color="#f59e0b" />
        <StatsCard title="Goal Completion" value="88%" icon={Target} trend="up" trendValue="2" color="#10b981" />
      </div>

      <div className="analytics-grid">
        <div className="chart-card card">
          <h3>Skill Growth Trend</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="react" stroke="#6366f1" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="node" stroke="#a855f7" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="css" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card card">
          <h3>Time Distribution</h3>
          <div className="chart-wrapper flex-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="ai-summary">
            <p><strong>Aura Analysis:</strong> You're spending most of your time on <strong>Frontend</strong>, but your growth rate is highest in <strong>AI/ML</strong>. Consider balancing your week with more Node.js labs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
