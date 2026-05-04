import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, Zap, Box, Layers, 
  Target, Info, ChevronRight, Maximize2,
  Sparkles, Globe, Cpu
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './HolographicGraph.css';

const nodes = [
  { id: 1, label: 'Quantum Mechanics', x: 50, y: 50, z: 10, status: 'Mastered', desc: 'Core principles of wave-particle duality.' },
  { id: 2, label: 'Linear Algebra', x: 20, y: 30, z: -5, status: 'Mastered', desc: 'Vector spaces and matrix transformations.' },
  { id: 3, label: 'Neural Networks', x: 80, y: 40, z: 20, status: 'In Progress', desc: 'Backpropagation and activation functions.' },
  { id: 4, label: 'Data Structures', x: 40, y: 80, z: 15, status: 'Mastered', desc: 'Linked lists, trees, and hash maps.' },
  { id: 5, label: 'System Design', x: 70, y: 85, z: -10, status: 'Locked', desc: 'Scalable architecture and load balancing.' },
];

const HolographicKnowledgeGraph = () => {
  const { addNotification } = useNotificationStore();
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('3D'); // 3D, Layered

  return (
    <div className="holographic-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Aura AI Knowledge Graph 2.0</h1>
          <p>Holographic visualization of your intellectual growth and skill interconnectedness.</p>
        </div>
        <div className="view-toggle glass">
          <button className={viewMode === '3D' ? 'active' : ''} onClick={() => setViewMode('3D')}><Globe size={14} /> 3D Perspective</button>
          <button className={viewMode === 'Layered' ? 'active' : ''} onClick={() => setViewMode('Layered')}><Layers size={14} /> Structural Layers</button>
        </div>
      </header>

      <div className="graph-scene card dark-glass">
        <div className="perspective-wrapper">
          <motion.div 
            className={`nodes-container ${viewMode.toLowerCase()}`}
            animate={{ rotateY: (viewMode === '3D' && !selectedNode) ? [0, 360] : 0 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                className={`node-point ${node.status.toLowerCase().replace(' ', '-')}`}
                style={{ 
                  left: `${node.x}%`, 
                  top: `${node.y}%`,
                  transform: `translateZ(${node.z * 5}px)`
                }}
                whileHover={{ scale: 1.5, zIndex: 100 }}
                onClick={() => setSelectedNode(node)}
              >
                <div className="node-core"></div>
                <div className="node-glow"></div>
                <span className="node-label">{node.label}</span>
              </motion.div>
            ))}
            
            {/* Simulated Connections */}
            <svg className="connections-svg">
              <line x1="50%" y1="50%" x2="20%" y2="30%" className="line-active" />
              <line x1="50%" y1="50%" x2="80%" y2="40%" className="line-pending" />
              <line x1="20%" y1="30%" x2="40%" y2="80%" className="line-active" />
              <line x1="80%" y1="40%" x2="70%" y2="85%" className="line-locked" />
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedNode && (
            <motion.aside 
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              className="node-details card glass"
            >
              <div className="details-header">
                <div className={`status-icon ${selectedNode.status.toLowerCase().replace(' ', '-')}`}>
                  <Zap size={20} />
                </div>
                <h3>{selectedNode.label}</h3>
                <button className="close-btn" onClick={() => setSelectedNode(null)}>×</button>
              </div>
              
              <div className="details-body">
                <p>{selectedNode.desc}</p>
                <div className="mastery-stats">
                  <div className="stat">
                    <span>Proficiency</span>
                    <strong>{selectedNode.status === 'Mastered' ? '98%' : '42%'}</strong>
                  </div>
                  <div className="stat">
                    <span>Connections</span>
                    <strong>12 Nodes</strong>
                  </div>
                </div>
                
                <div className="learning-path mt-2">
                  <label>Next Learning Nodes</label>
                  <div className="path-item">
                    <div className="dot"></div>
                    <span>Advanced Topology</span>
                    <ChevronRight size={14} />
                  </div>
                </div>

                <button className="btn-primary full-width mt-2" onClick={() => addNotification(`Launching ${selectedNode.label} deep-dive...`)}>
                  Launch Deep Dive
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="graph-controls glass">
          <button onClick={() => addNotification('Re-centering holographic view...')}><Maximize2 size={16} /></button>
          <button onClick={() => addNotification('Scanning for skill gaps...')}><Sparkles size={16} /></button>
          <button onClick={() => addNotification('Opening System Config...')}><Cpu size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default HolographicKnowledgeGraph;
