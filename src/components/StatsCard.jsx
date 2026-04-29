import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCard.css';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
  return (
    <div className="stats-card card">
      <div className="stats-card-header">
        <div className="stats-icon-wrapper" style={{ backgroundColor: `${color}15`, color: color }}>
          <Icon size={24} />
        </div>
        <div className="stats-trend" style={{ color: trend === 'up' ? 'var(--success)' : 'var(--error)' }}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span>{trendValue}%</span>
        </div>
      </div>
      <div className="stats-content">
        <span className="stats-title">{title}</span>
        <h3 className="stats-value">{value}</h3>
      </div>
    </div>
  );
};

export default StatsCard;
