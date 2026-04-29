import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Target, Award, Crown, ShieldCheck, Flame } from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './Achievements.css';

const badges = [
  { id: 1, title: 'Early Bird', icon: Flame, color: 'text-orange', xp: 50, earned: true },
  { id: 2, title: 'Calculus King', icon: Crown, color: 'text-violet', xp: 200, earned: true },
  { id: 3, title: 'Perfect Week', icon: ShieldCheck, color: 'text-emerald', xp: 150, earned: false },
  { id: 4, title: 'Top Contributor', icon: Award, color: 'text-indigo', xp: 100, earned: true },
];

const Achievements = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="achievements-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Your Achievements</h1>
          <p>Level 14 Scholar • 2,450 XP to Level 15</p>
        </div>
        <div className="xp-bar-large">
          <div className="xp-fill" style={{ width: '65%' }}></div>
          <span className="xp-text">65% Progress</span>
        </div>
      </header>

      <div className="achievements-grid">
        <div className="main-panel card">
          <h3>Earning Progression</h3>
          <div className="progression-stats">
            <div className="prog-stat">
              <Trophy className="text-amber" size={32} />
              <div className="info">
                <span>Rank</span>
                <strong>#12</strong>
              </div>
            </div>
            <div className="prog-stat">
              <Zap className="text-cyan" size={32} />
              <div className="info">
                <span>Total XP</span>
                <strong>14,200</strong>
              </div>
            </div>
            <div className="prog-stat">
              <Flame className="text-orange" size={32} />
              <div className="info">
                <span>Streak</span>
                <strong>15 Days</strong>
              </div>
            </div>
          </div>

          <div className="milestones">
            <h4>Next Milestones</h4>
            <div className="milestone-item">
              <div className="ms-info">
                <p>Master of Integration</p>
                <span>Score 100% in 5 Calculus Quizzes</span>
              </div>
              <div className="ms-progress">
                <div className="bar"><div className="fill" style={{ width: '80%' }}></div></div>
                <span>4/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="badge-panel card">
          <h3>Badge Collection</h3>
          <div className="badge-grid">
            {badges.map((badge) => (
              <motion.div 
                key={badge.id}
                whileHover={{ scale: 1.05 }}
                className={`badge-item ${!badge.earned ? 'locked' : ''}`}
                onClick={() => addNotification(badge.earned ? `Viewing ${badge.title} certificate` : 'Complete the task to unlock!')}
              >
                <div className={`badge-icon-wrap ${badge.color}`}>
                  <badge.icon size={24} />
                </div>
                <span className="badge-title">{badge.title}</span>
                <span className="badge-xp">+{badge.xp} XP</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
