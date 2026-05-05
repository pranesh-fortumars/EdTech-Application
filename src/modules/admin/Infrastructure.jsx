import React from 'react';
import { Server, Cpu, Database, Activity, ShieldCheck, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import './AdminModules.css';

const Infrastructure = () => {
  return (
    <div className="infrastructure-hub professional-theme">
      <header className="module-header">
        <h1>Infrastructure Command</h1>
        <p>Monitor institutional server performance and mission-critical cloud resources.</p>
      </header>

      <div className="pro-grid-4 mb-8">
        {[
          { icon: Server, label: 'Main Server', status: 'Online', val: '99.9% Uptime', color: 'emerald' },
          { icon: Cpu, label: 'CPU Load', status: 'Normal', val: '24% Utilization', color: 'blue' },
          { icon: Database, label: 'Storage', status: '82% Full', val: '4.2TB / 5TB', color: 'amber' },
          { icon: ShieldCheck, label: 'Firewall', status: 'Active', val: '0 Threats', color: 'purple' }
        ].map((node, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="admin-card">
            <div className={`w-12 h-12 bg-${node.color}-50 text-${node.color}-600 rounded-xl flex items-center justify-center mb-4`}>
              <node.icon size={24} />
            </div>
            <h3 className="font-bold text-lg mb-1">{node.label}</h3>
            <p className="text-sm font-bold text-emerald-600 mb-2 uppercase tracking-wide">{node.status}</p>
            <p className="text-sm text-tertiary font-medium">{node.val}</p>
          </motion.div>
        ))}
      </div>

      <div className="admin-card bg-slate-900 text-white border-none overflow-hidden relative">
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold">Global Network Throughput</h3>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-400">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Real-time Feed
            </div>
          </div>
          <div className="network-viz">
            {[40, 60, 45, 80, 55, 70, 90, 65, 50, 75, 40, 60, 55, 85, 45, 70, 95, 60].map((h, i) => (
              <motion.div 
                key={i}
                className="bar-node"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.03, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>
    </div>
  );
};

export default Infrastructure;
