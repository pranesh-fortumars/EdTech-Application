import React from 'react';
import { Server, Cpu, Database, Activity, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminModules.css';

const Infrastructure = () => {
  return (
    <div className="infrastructure-hub professional-theme">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <h1>Infrastructure Command</h1>
          <p>Mission-critical monitoring of institutional cloud architecture.</p>
        </motion.div>
        <div className="flex gap-4">
          <button className="btn-icon-vibrant"><RefreshCw size={20} /></button>
          <button className="btn-primary-vibrant px-6 py-3 rounded-xl font-bold flex items-center gap-2">
            <Activity size={18} /> System Audit
          </button>
        </div>
      </header>

      <div className="pro-grid-4 mb-12">
        {[
          { icon: Server, label: 'Core Node 01', status: 'Optimal', val: '99.99%', color: 'emerald', trend: '+0.01%' },
          { icon: Cpu, label: 'Processing', status: 'Nominal', val: '24% Load', color: 'blue', trend: '-2%' },
          { icon: Database, label: 'Cloud Data', status: 'Scale Req.', val: '4.2 / 5 TB', color: 'amber', trend: 'Critical' },
          { icon: ShieldCheck, label: 'Cyber Shield', status: 'Secured', val: 'Locked', color: 'purple', trend: 'Safe' }
        ].map((node, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }}
            className={`admin-card node-card node-${node.color}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`node-icon-box bg-${node.color}-vibrant`}>
                <node.icon size={24} color="white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{node.trend}</span>
            </div>
            <h3 className="text-xl font-black text-slate-800 mb-1">{node.label}</h3>
            <p className={`text-sm font-black text-${node.color}-600 mb-2 uppercase tracking-widest`}>{node.status}</p>
            <p className="text-lg font-mono font-black text-slate-500">{node.val}</p>
            <div className={`node-glow glow-${node.color}`} />
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="admin-card bg-slate-900 border-none relative overflow-hidden h-[400px] flex flex-col"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h3 className="text-2xl font-black text-white">Global Throughput Matrix</h3>
              <p className="text-slate-400 font-bold">Real-time packet analysis across all institutional nodes.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">Live Telemetry</span>
            </div>
          </div>
          <div className="network-viz flex-1">
            {[40, 60, 45, 80, 55, 70, 90, 65, 50, 75, 40, 60, 55, 85, 45, 70, 95, 60, 40, 65, 80, 50, 90, 70].map((h, i) => (
              <motion.div 
                key={i}
                className="bar-node"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.02, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default Infrastructure;
