import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import AITutor from '../modules/ai/AITutor';
import ToastContainer from './ToastContainer';
import './Layout.css';

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className={`main-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        
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
    </div>
  );
};

export default Layout;
