import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, AlertTriangle, ChevronRight, Activity, PieChart as PieIcon, LineChart as LineIcon } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';
import useNotificationStore from '../../store/useNotificationStore';
import './Analytics.css';

const predictionData = [
  { term: 'Term 1', actual: 82, predicted: 84 },
  { term: 'Term 2', actual: 85, predicted: 87 },
  { term: 'Term 3', predicted: 89 },
];

const passRateData = [
  { name: 'Mathematics', value: 92, color: '#6366f1' },
  { name: 'Science', value: 88, color: '#10b981' },
  { name: 'Social', value: 95, color: '#f59e0b' },
];

const SchoolAnalytics = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="analytics-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Institutional Intelligence</h1>
          <p>Predictive modeling and performance tracking for academic excellence.</p>
        </div>
        <button className="btn-primary" onClick={() => addNotification('Generating institutional performance report...')}>
          Download Annual Report
        </button>
      </header>

      <div className="analytics-grid">
        <div className="main-chart card">
          <div className="section-header">
            <h3>Predicted vs. Actual Grade Progression</h3>
            <span className="ai-badge">AI Predictive Engine Active</span>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={predictionData}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-violet)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-violet)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="term" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="actual" stroke="var(--primary)" fillOpacity={1} fill="url(#colorActual)" />
                <Area type="monotone" dataKey="predicted" stroke="var(--accent-violet)" strokeDasharray="5 5" fillOpacity={1} fill="url(#colorPredicted)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="secondary-grid">
          <div className="card pass-rate-panel">
            <h3>Subject Pass Probability</h3>
            <div className="pie-container">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={passRateData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {passRateData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="pie-legend">
              {passRateData.map(item => (
                <div key={item.name} className="legend-item">
                  <span className="dot" style={{ background: item.color }}></span>
                  <span>{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card risk-panel">
            <div className="section-header">
              <h3>Students at Risk</h3>
              <AlertTriangle className="text-orange" size={20} />
            </div>
            <div className="risk-list">
              {[
                { name: 'Rajesh S.', reason: 'Low attendance (72%)', trend: 'declining' },
                { name: 'Meena K.', reason: 'Recent grade drop in Physics', trend: 'stable' }
              ].map((student, i) => (
                <div key={i} className="risk-item clickable" onClick={() => addNotification(`Opening intervention portal for ${student.name}`)}>
                  <div className="info">
                    <strong>{student.name}</strong>
                    <span>{student.reason}</span>
                  </div>
                  <ChevronRight size={16} className="text-tertiary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAnalytics;
