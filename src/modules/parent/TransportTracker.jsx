import React from 'react';
import { motion } from 'framer-motion';
import { Bus, MapPin, Navigation, Clock, ShieldCheck, Phone, Info } from 'lucide-react';
import './../admin/AdminModules.css';

const TransportTracker = () => {
  return (
    <div className="transport-container">
      <header className="module-header flex-between mb-12">
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Bus className="text-primary" size={36} />
            <h1 style={{ margin: 0 }}>Transport Tracker</h1>
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
          <div className="admin-card" style={{ padding: 0, height: '550px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Mock Map Background */}
            <div style={{ 
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              opacity: 0.3,
              filter: 'grayscale(100%)',
              backgroundImage: 'url("https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png")',
              backgroundSize: 'cover'
            }} />
            
            {/* Pulsing Bus Icon */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ 
                position: 'relative', 
                zIndex: 10, 
                width: '64px', 
                height: '64px', 
                background: 'var(--primary)', 
                borderRadius: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                boxShadow: '0 15px 30px rgba(8, 145, 178, 0.4)', 
                border: '4px solid white' 
              }}
            >
              <Bus color="white" size={32} />
            </motion.div>

            {/* Path Indicator */}
            <div style={{ 
              position: 'absolute', 
              bottom: '2rem', 
              left: '2rem', 
              right: '2rem', 
              background: 'rgba(255, 255, 255, 0.9)', 
              backdropFilter: 'blur(16px)', 
              padding: '1.5rem', 
              borderRadius: '1.5rem', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
              zIndex: 20, 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              border: '1px solid rgba(255, 255, 255, 0.5)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', background: '#d1fae5', color: '#059669', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Navigation size={24} />
                </div>
                <div>
                  <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: 0 }}>Next Institutional Stop</p>
                  <p className="text-lg font-bold text-slate-800" style={{ margin: 0 }}>Kovalam Junction (2.4 km)</p>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: 0 }}>Arrival ETA</p>
                <p className="text-2xl font-black text-primary" style={{ margin: 0 }}>08:12 AM</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="transport-details" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="admin-card">
            <h3 className="text-lg font-bold text-slate-800" style={{ marginBottom: '2rem' }}>Route Progression</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="route-point">
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#10b981', border: '4px solid #d1fae5' }} />
                    <div style={{ width: '2px', height: '3rem', background: '#e2e8f0' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900" style={{ margin: 0 }}>School Campus</h4>
                    <p className="text-xs text-slate-500 font-medium" style={{ margin: '0.25rem 0 0 0' }}>Departure: 07:30 AM</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div 
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--primary)', border: '4px solid rgba(8, 145, 178, 0.2)' }}
                    />
                    <div style={{ width: '2px', height: '3rem', background: '#e2e8f0', borderStyle: 'dashed', borderWidth: '1px' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary" style={{ margin: 0 }}>Current Telemetry</h4>
                    <p className="text-xs text-slate-500 font-medium" style={{ margin: '0.25rem 0 0 0' }}>East Coast Road (Moving North)</p>
                  </div>
                </div>
              </div>
              <div className="route-point">
                <div style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: '#e2e8f0' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400" style={{ margin: 0 }}>Home Drop-off</h4>
                    <p className="text-xs text-slate-400 font-medium" style={{ margin: '0.25rem 0 0 0' }}>Estimated Arrival: 08:35 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-card" style={{ background: '#0f172a', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(8, 145, 178, 0.2)', color: 'var(--primary-light)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} />
                </div>
                <h3 className="text-lg font-bold" style={{ margin: 0 }}>Logistics Staff</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="hover-bg-slate group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <div>
                    <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: 0 }}>Fleet Pilot</p>
                    <p className="font-bold text-slate-100" style={{ margin: 0 }}>Murali Krishna</p>
                  </div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="group-hover:bg-primary transition-all">
                    <Phone size={16} />
                  </div>
                </div>
                <div className="hover-bg-slate group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '1rem', cursor: 'pointer', transition: 'background 0.2s' }}>
                  <div>
                    <p className="text-slate-400 font-black uppercase tracking-widest" style={{ fontSize: '0.65rem', margin: 0 }}>Security Attendant</p>
                    <p className="font-bold text-slate-100" style={{ margin: 0 }}>Sarah Begum</p>
                  </div>
                  <div style={{ width: '40px', height: '40px', borderRadius: '0.75rem', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="group-hover:bg-primary transition-all">
                    <Phone size={16} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '128px', height: '128px', borderRadius: '50%', background: 'rgba(8, 145, 178, 0.1)', filter: 'blur(40px)' }}></div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TransportTracker;
