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
            stroke="var(--primary)" 
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
            style={{ background: 'var(--primary)' }}
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
        <Network size={40} style={{ color: 'var(--primary)', opacity: 0.3 }} />
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

const HolographicKnowledgeGraph = () => {
  const { addNotification } = useNotificationStore();
  const [selectedNode, setSelectedNode] = useState(null);
  const [viewMode, setViewMode] = useState('3D');

  return (
    <div className="holographic-container professional-theme" style={{ background: 'white' }}>
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Sparkles size={32} className="text-primary" />
            <h1 style={{ margin: 0 }}>Aura AI <span className="text-gradient">Knowledge Universe</span></h1>
          </div>
          <p>Holographic visualization of your intellectual growth and skill interconnectedness.</p>
        </motion.div>
        <div className="view-toggle" style={{ background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
          <button 
            className={viewMode === '3D' ? 'active' : ''} 
            onClick={() => setViewMode('3D')}
            style={{ 
              background: viewMode === '3D' ? 'var(--primary)' : 'transparent',
              color: viewMode === '3D' ? 'white' : 'var(--text-secondary)',
              border: 'none', padding: '0.5rem 1rem', borderRadius: '0.75rem', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <Globe size={14} /> 3D Perspective
          </button>
          <button 
            className={viewMode === 'Layered' ? 'active' : ''} 
            onClick={() => setViewMode('Layered')}
            style={{ 
              background: viewMode === 'Layered' ? 'var(--primary)' : 'transparent',
              color: viewMode === 'Layered' ? 'white' : 'var(--text-secondary)',
              border: 'none', padding: '0.5rem 1rem', borderRadius: '0.75rem', cursor: 'pointer', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}
          >
            <Layers size={14} /> Structural Layers
          </button>
        </div>
      </header>

      <div className="graph-scene" style={{ background: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '1.5rem', height: '650px', position: 'relative', overflow: 'hidden' }}>
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
          
            {viewMode === '3D' && (
              <svg className="connections-svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.2 }}>
                <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="var(--primary)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="var(--primary)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="20%" y1="30%" x2="40%" y2="80%" stroke="var(--primary)" strokeWidth="2" />
                <line x1="80%" y1="40%" x2="70%" y2="85%" stroke="var(--border-color)" strokeWidth="1" strokeDasharray="3,3" />
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
              className="admin-card"
              style={{ 
                position: 'absolute', top: '1.5rem', right: '1.5rem', width: '340px', 
                zIndex: 200, background: 'white', border: `1px solid var(--border-color)`,
                boxShadow: 'var(--shadow-2xl)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {selectedNode.status === 'Mastered' ? <ShieldCheck size={20} className="text-success" /> : <Zap size={20} className="text-primary" />}
                  </div>
                  <h3 style={{ margin: 0 }}>{selectedNode.label}</h3>
                </div>
                <button 
                  onClick={() => setSelectedNode(null)}
                  style={{ background: 'transparent', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-tertiary)' }}
                >×</button>
              </div>
              
              <div className="concept-preview" style={{ background: 'var(--bg-secondary)', borderRadius: '1rem', height: '120px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <ConceptVisualizer type={selectedNode.label} />
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>{selectedNode.desc}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Proficiency</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.25rem' }}>
                    <strong style={{ color: 'var(--primary)' }}>{selectedNode.status === 'Mastered' ? '98%' : '42%'}</strong>
                    <div style={{ width: '100%', height: '4px', background: 'var(--bg-tertiary)', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: selectedNode.status === 'Mastered' ? '98%' : '42%' }}
                        style={{ height: '100%', background: 'var(--primary)' }}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Neural Nodes</span>
                  <strong style={{ display: 'block', marginTop: '0.25rem', color: 'var(--text-primary)' }}>12 Connections</strong>
                </div>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-tertiary)', textTransform: 'uppercase' }}>Recommended Next Step</label>
                <motion.div 
                  whileHover={{ x: 5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: 'var(--bg-secondary)', borderRadius: '0.75rem', marginTop: '0.5rem', cursor: 'pointer' }}
                >
                  <div className="ping-dot"></div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Advanced {selectedNode.label.split(' ')[0]}</span>
                  <ChevronRight size={14} style={{ marginLeft: 'auto' }} />
                </motion.div>
              </div>

              <button className="btn-primary-vibrant" style={{ width: '100%', justifyContent: 'center' }} onClick={() => addNotification(`Launching ${selectedNode.label} deep-dive...`)}>
                Launch Deep Dive
              </button>
            </motion.aside>
          )}
        </AnimatePresence>

        <div className="graph-controls" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '1rem', background: 'white', padding: '0.75rem', borderRadius: '2rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }}>
          <button className="btn-icon-vibrant" onClick={() => addNotification('Re-centering view...')}><Maximize2 size={16} /></button>
          <button className="btn-icon-vibrant" onClick={() => addNotification('Scanning skill gaps...')}><Sparkles size={16} /></button>
          <button className="btn-icon-vibrant" onClick={() => addNotification('Opening System Config...')}><Cpu size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default HolographicKnowledgeGraph;
