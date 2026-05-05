import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AITutor from '../modules/ai/AITutor';
import ToastContainer from './ToastContainer';
import { Wifi, CloudOff } from 'lucide-react';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`app-layout ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="main-wrapper">
        <Navbar onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
        
        <main className="content-area">
          {children}
        </main>
        
        <AITutor />
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
      <ToastContainer />
      <div className="offline-sync-status">
        <Wifi size={14} className="text-emerald" />
        <span>System Synchronized</span>
        <div className="sync-dot"></div>
      </div>
    </div>
  );
};

export default Layout;
