import React from 'react';
import { motion } from 'framer-motion';
import { Bus, MapPin, Navigation, Clock, ShieldCheck, Phone, Info } from 'lucide-react';
import './../admin/AdminModules.css';

const TransportTracker = () => {
  return (
    <div className="transport-container professional-theme p-12">
      <header className="module-header flex justify-between items-end mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div className="flex items-center gap-3 mb-2">
            <Bus className="text-primary" size={32} />
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
          <div className="admin-card !p-0 h-[500px] bg-slate-100 flex items-center justify-center relative overflow-hidden">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-20 grayscale" style={{ 
              backgroundImage: 'url("https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png")',
              backgroundSize: 'cover'
            }} />
            
            {/* Pulsing Bus Icon */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <Bus color="white" size={24} />
            </motion.div>

            {/* Path Indicator */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 flex justify-between items-center border border-white">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                  <Navigation size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Stop</p>
                  <p className="font-bold text-slate-800">Kovalam Junction (2.4 km)</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">ETA</p>
                <p className="text-xl font-black text-primary">08:12 AM</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="transport-details">
          <div className="admin-card mb-6">
            <h3 className="font-black text-slate-800 mb-6">Route Information</h3>
            <div className="space-y-6">
              <div className="route-point">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <div className="w-[2px] h-10 bg-slate-200" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">School Campus</h4>
                    <p className="text-xs text-slate-500">Departure: 07:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-3 h-3 rounded-full bg-primary" 
                    />
                    <div className="w-[2px] h-10 bg-slate-200 dashed" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Current Location</h4>
                    <p className="text-xs text-slate-500">East Coast Road</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-300" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400">Home Drop-off</h4>
                    <p className="text-xs text-slate-400">Estimated: 08:35 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card bg-primary text-white">
            <div className="flex items-center gap-3 mb-4">
              <Phone size={20} />
              <h3 className="font-bold">Contact Staff</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                <div>
                  <p className="text-[10px] font-black uppercase opacity-60">Driver</p>
                  <p className="font-bold">Murali Krishna</p>
                </div>
                <button className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Phone size={14} />
                </button>
              </div>
              <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                <div>
                  <p className="text-[10px] font-black uppercase opacity-60">Attendant</p>
                  <p className="font-bold">Sarah Begum</p>
                </div>
                <button className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Phone size={14} />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TransportTracker;
