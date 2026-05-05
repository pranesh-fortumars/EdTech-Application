import React from 'react';
import { motion } from 'framer-motion';
import { Bus, MapPin, Navigation, Clock, ShieldCheck, Phone, Info } from 'lucide-react';
import './../admin/AdminModules.css';

const TransportTracker = () => {
  return (
    <div className="transport-container">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-4 mb-2">
            <Bus className="text-primary" size={36} />
            <h1 className="!m-0">Transport Tracker</h1>
          </div>
          <p>Real-time institutional fleet monitoring and arrival telemetry.</p>
        </motion.div>
        <div className="live-status-pill">
          <span className="ping-dot" />
          TRACKING ACTIVE
        </div>
      </header>

      <div className="pro-grid-main">
        <div className="map-visualization">
          <div className="admin-card !p-0 h-[550px] bg-slate-100 flex items-center justify-center relative overflow-hidden shadow-inner">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-30 grayscale" style={{ 
              backgroundImage: 'url("https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png")',
              backgroundSize: 'cover'
            }} />
            
            {/* Pulsing Bus Icon */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10 w-16 h-16 bg-primary rounded-3xl flex items-center justify-center shadow-[0_15px_30px_rgba(8,145,178,0.4)] border-4 border-white"
            >
              <Bus color="white" size={32} />
            </motion.div>

            {/* Path Indicator */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl z-20 flex justify-between items-center border border-white/50">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                  <Navigation size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Institutional Stop</p>
                  <p className="text-lg font-bold text-slate-800">Kovalam Junction (2.4 km)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Arrival ETA</p>
                <p className="text-2xl font-black text-primary">08:12 AM</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="transport-details space-y-8">
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800 mb-8">Route Progression</h3>
            <div className="space-y-8">
              <div className="route-point">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-emerald-100" />
                    <div className="w-[2px] h-12 bg-slate-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">School Campus</h4>
                    <p className="text-xs text-slate-500 font-medium">Departure: 07:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-4 h-4 rounded-full bg-primary border-4 border-primary/20" 
                    />
                    <div className="w-[2px] h-12 bg-slate-200 dashed" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Current Telemetry</h4>
                    <p className="text-xs text-slate-500 font-medium">East Coast Road (Moving North)</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-slate-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400">Home Drop-off</h4>
                    <p className="text-xs text-slate-400 font-medium">Estimated Arrival: 08:35 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card bg-slate-900 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-primary-light" />
                </div>
                <h3 className="text-lg font-bold">Logistics Staff</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Fleet Pilot</p>
                    <p className="font-bold text-slate-100">Murali Krishna</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone size={16} />
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Security Attendant</p>
                    <p className="font-bold text-slate-100">Sarah Begum</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TransportTracker;
