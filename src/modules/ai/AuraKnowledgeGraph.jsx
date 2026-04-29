import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, BookOpen, Target, ChevronRight, Activity, GitBranch } from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './AITutor.css';

const nodes = [
  { id: 1, label: 'Arithmetic', status: 'mastered', x: 50, y: 50 },
  { id: 2, label: 'Algebra', status: 'in-progress', x: 150, y: 100 },
  { id: 3, label: 'Geometry', status: 'locked', x: 150, y: 0 },
  { id: 4, label: 'Calculus', status: 'locked', x: 250, y: 100 },
];

const AuraKnowledgeGraph = () => {
  const { addNotification } = useNotificationStore();

  return (
    <div className="aitutor-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Aura AI Knowledge Graph</h1>
          <p>Your personalized path to mastery in **Mathematics**.</p>
        </div>
        <button className="btn-primary" onClick={() => addNotification('Starting adaptive diagnostic test...')}>
          <Zap size={16} /> Diagnostic Test
        </button>
      </header>

      <div className="aitutor-grid">
        <div className="graph-panel card">
          <div className="graph-header">
            <h3>Conceptual Dependency Map</h3>
            <div className="legend">
              <span className="dot mastered"></span> Mastered
              <span className="dot progress"></span> In Progress
              <span className="dot locked"></span> Locked
            </div>
          </div>
          
          <div className="svg-container">
            <svg width="100%" height="400" viewBox="0 0 350 150">
              {/* Connection Lines */}
              <line x1="50" y1="50" x2="150" y2="100" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="50" y1="50" x2="150" y2="0" stroke="#e2e8f0" strokeWidth="2" />
              <line x1="150" y1="100" x2="250" y2="100" stroke="#e2e8f0" strokeWidth="2" />
              
              {nodes.map((node) => (
                <motion.g 
                  key={node.id} 
                  whileHover={{ scale: 1.1 }}
                  className={`node ${node.status}`}
                  onClick={() => addNotification(`Opening ${node.label} study module`)}
                >
                  <circle cx={node.x} cy={node.y} r="15" />
                  <text x={node.x} y={node.y + 25} textAnchor="middle" fontSize="8" fontWeight="700">
                    {node.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>

        <aside className="ai-chat-sidebar card glass">
          <div className="chat-header">
            <Bot size={20} className="text-violet" />
            <h4>Aura AI Mentor</h4>
          </div>
          <div className="chat-content">
            <div className="ai-msg">
              "Based on your latest Algebra quiz, you're struggling with **Quadratic Equations**. Should we focus on that today?"
            </div>
          </div>
          <div className="chat-actions">
            <button className="action-chip" onClick={() => addNotification('Loading Quadratic Equations lesson...')}>Yes, start lesson</button>
            <button className="action-chip" onClick={() => addNotification('Opening practice problems...')}>Practice problems</button>
          </div>
        </aside>
      </div>

      <div className="learning-stats-row">
        <div className="card learning-stat">
          <Activity className="text-emerald" size={24} />
          <div className="info">
            <span>Overall Mastery</span>
            <strong>42%</strong>
          </div>
        </div>
        <div className="card learning-stat">
          <GitBranch className="text-violet" size={24} />
          <div className="info">
            <span>Skill Gaps Identified</span>
            <strong>3 Topics</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuraKnowledgeGraph;
