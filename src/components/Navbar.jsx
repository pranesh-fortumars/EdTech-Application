import React from 'react';
import { Search, Bell, Menu, Sun, Moon, Globe, Command, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import useAuthStore from '../store/useAuthStore';
import useNotificationStore from '../store/useNotificationStore';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuthStore();
  const { addNotification } = useNotificationStore();

  return (
    <nav className="navbar professional-theme">
      <div className="navbar-left">
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        <div className="search-wrapper card glass">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Global search..." />
          <div className="search-shortcut">
            <Command size={12} /> K
          </div>
        </div>
        <div className="security-pulse glass" title="Institutional Shield Active">
          <ShieldCheck size={14} className="text-emerald" />
          <span>Security Active</span>
          <div className="pulse-dot"></div>
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-actions">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="icon-btn"
            onClick={() => addNotification('Regional settings updated to Tamil Nadu (IN)', 'success')}
          >
            <Globe size={18} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            className="icon-btn"
          >
            <Sun size={18} />
          </motion.button>

          <div className="notification-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="icon-btn"
              onClick={() => addNotification('You have 3 new institutional alerts', 'success')}
            >
              <Bell size={18} />
              <span className="badge-pulse"></span>
            </motion.button>
          </div>
        </div>

        <div className="header-divider"></div>

        <div className="nav-profile">
          <div className="profile-text">
            <span className="name">{user?.name}</span>
            <span className="inst">{user?.institution.split(',')[0]}</span>
          </div>
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src={user?.avatar} 
            alt="User Avatar" 
            className="nav-avatar" 
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
