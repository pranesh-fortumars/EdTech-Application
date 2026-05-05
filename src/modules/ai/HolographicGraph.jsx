import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, Zap, Box, Layers, 
  Target, Info, ChevronRight, Maximize2,
  Sparkles, Globe, Cpu, ShieldCheck
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './HolographicGraph.css';

const ConceptVisualizer = ({ type }) => {
  // Simple conceptual animations based on the node type
  if (type === 'Quantum Mechanics') {
    return (
      <div className="wave-particle-animation">
        <motion.div 
          className="particle"
          animate={{ x: [0, 100, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <svg className="wave-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
          <motion.path 
            initial={{ d: "M 0 25 Q 25 0 50 25 T 100 25" }}
            animate={{ d: "M 0 25 Q 25 50 50 25 T 100 25" }}
            fill="none" 
            stroke="var(--accent-violet)" 
            strokeWidth="2"
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }
  
  if (type === 'Linear Algebra') {
    return (
      <div className="matrix-animation">
        {[1, 2, 3, 4].map(i => (
          <motion.div 
            key={i}
            className="matrix-line"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="default-visualizer">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Network size={40} className="text-primary opacity-30" />
      </motion.div>
    </div>
  );
};

const nodes = [
  { id: 1, label: 'Quantum Mechanics', x: 50, y: 50, z: 10, status: 'Mastered', color: '#10b981', desc: 'Core principles of wave-particle duality.' },
  { id: 2, label: 'Linear Algebra', x: 20, y: 30, z: -5, status: 'Mastered', color: '#06b6d4', desc: 'Vector spaces and matrix transformations.' },
  { id: 3, label: 'Neural Networks', x: 80, y: 40, z: 20, status: 'In Progress', color: '#8b5cf6', desc: 'Backpropagation and activation functions.' },
  { id: 4, label: 'Data Structures', x: 40, y: 80, z: 15, status: 'Mastered', color: '#f59e0b', desc: 'Linked lists, trees, and hash maps.' },
  { id: 5, label: 'System Design', x: 70, y: 85, z: -10, status: 'Locked', color: '#ec4899', desc: 'Scalable architecture and load balancing.' },
];

// ... (ConceptVisualizer remains the same)

const HolographicKnowledgeGraph = () => {
  const { addNotification } = useNotificationStore();
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('3D'); // 3D, Layered

  return (
    <div className="holographic-container professional-theme">
      <div className="nebula-bg"></div>
      <header className="module-header">
        <div className="header-text">
          <h1>Aura AI <span className="text-gradient">Knowledge Universe</span></h1>
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
              animate={{ 
                rotateY: (viewMode === '3D' && !selectedNode) ? [0, 360] : 0,
                rotateX: viewMode === 'Layered' ? 25 : 0,
              }}
              transition={{ 
                rotateY: { duration: 40, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 0.8, ease: "easeOut" }
              }}
            >
              {nodes.map((node, idx) => {
                const isLayered = viewMode === 'Layered';
                const layerOffset = node.status === 'Mastered' ? 0 : node.status === 'In Progress' ? 120 : 240;
                
                return (
                  <motion.div
                    key={node.id}
                    className={`node-point ${node.status.toLowerCase().replace(' ', '-')}`}
                    initial={false}
                    animate={{ 
                      x: isLayered ? (idx % 3) * 180 - 180 : 0,
                      y: isLayered ? layerOffset - 120 : 0,
                      z: isLayered ? 0 : node.z * 10,
                      scale: selectedNode?.id === node.id ? 1.4 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                    style={{ 
                      left: isLayered ? '50%' : `${node.x}%`, 
                      top: isLayered ? '50%' : `${node.y}%`,
                      position: 'absolute',
                      '--node-color': node.color
                    }}
                    whileHover={{ scale: 1.5, zIndex: 100 }}
                    onClick={() => setSelectedNode(node)}
                  >
                    <div className="node-core" style={{ backgroundColor: node.color }}></div>
                    <div className="node-glow" style={{ color: node.color }}></div>
                    <motion.span 
                      className="node-label"
                      animate={{ rotateY: (viewMode === '3D' && !selectedNode) ? [0, -360] : 0 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    >
                      {node.label}
                    </motion.span>
                  </motion.div>
                );
              })}
            
            {/* Simulated Connections */}
            {viewMode === '3D' && (
              <svg className="connections-svg">
                <line x1="50%" y1="50%" x2="20%" y2="30%" className="line-active" />
                <line x1="50%" y1="50%" x2="80%" y2="40%" className="line-pending" />
                <line x1="20%" y1="30%" x2="40%" y2="80%" className="line-active" />
                <line x1="80%" y1="40%" x2="70%" y2="85%" className="line-locked" />
              </svg>
            )}
          </motion.div>
        </div>

        <AnimatePresence mode='wait'>
          {selectedNode && (
            <motion.aside 
              key={selectedNode.id}
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              className={`node-details card glass border-${selectedNode.status === 'Mastered' ? 'emerald' : 'violet'}`}
            >
              <div className="details-header">
                <div className={`status-icon ${selectedNode.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedNode.status === 'Mastered' ? <ShieldCheck size={20} /> : <Zap size={20} />}
                </div>
                <h3>{selectedNode.label}</h3>
                <button className="close-btn" onClick={() => setSelectedNode(null)}>×</button>
              </div>
              
              <div className="details-body">
                {/* Concept Animation Preview */}
                <div className="concept-preview glass">
                  <ConceptVisualizer type={selectedNode.label} />
                </div>

                <p className="concept-desc">{selectedNode.desc}</p>
                
                <div className="mastery-stats">
                  <div className="stat">
                    <span>Proficiency</span>
                    <div className="stat-value-wrap">
                      <strong className="text-primary">{selectedNode.status === 'Mastered' ? '98%' : '42%'}</strong>
                      <div className="mini-progress">
                        <motion.div 
                          className="fill" 
                          initial={{ width: 0 }}
                          animate={{ width: selectedNode.status === 'Mastered' ? '98%' : '42%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="stat">
                    <span>Neural Connections</span>
                    <strong className="text-violet">12 Nodes</strong>
                  </div>
                </div>
                
                <div className="learning-path mt-2">
                  <label>Recommended Next Step</label>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="path-item glass clickable"
                  >
                    <div className="dot pulse"></div>
                    <span>Advanced {selectedNode.label.split(' ')[0]}</span>
                    <ChevronRight size={14} />
                  </motion.div>
                </div>

                <button className="btn-primary full-width mt-2 glow-btn" onClick={() => addNotification(`Launching ${selectedNode.label} deep-dive...`)}>
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
