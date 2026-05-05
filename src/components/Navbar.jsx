import React from 'react';
import { Search, Bell, Menu, Sun, Moon, Globe, Command, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useAuthStore from '../store/useAuthStore';
import useNotificationStore from '../store/useNotificationStore';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);

  return (
    <nav className="navbar professional-theme">
      <div className="navbar-left">
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          <Menu size={20} />
        </button>
        <div className="search-wrapper card glass" onClick={() => document.getElementById('global-search').focus()}>
          <Search size={16} className="search-icon" />
          <input id="global-search" type="text" placeholder="Global search..." />
          <div className="search-shortcut">
            <Command size={12} /> K
          </div>
        </div>
        <div 
          className="security-pulse glass clickable" 
          title="Institutional Shield Active"
          onClick={() => addNotification('Institutional firewall is active. 0 threats detected in last 24h.', 'success')}
        >
          <ShieldCheck size={14} className="text-emerald" />
          <span>Security Active</span>
          <div className="pulse-dot"></div>
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-actions">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn"
            onClick={() => addNotification('Regional preference set to Tamil (தமிழ்)', 'success')}
          >
            <Globe size={18} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="icon-btn"
            onClick={() => {
              setIsDark(!isDark);
              addNotification(`${!isDark ? 'Dark' : 'Light'} mode enabled`, 'success');
            }}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <div className="notification-center">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="icon-btn"
              onClick={() => addNotification('You have 3 new institutional alerts', 'success')}
            >
              <Bell size={18} />
              <span className="badge-pulse"></span>
            </motion.button>
          </div>
        </div>

        <div className="header-divider"></div>

        <div className="nav-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
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

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="profile-dropdown card glass"
              >
                <div className="dropdown-header">
                  <strong>{user?.name}</strong>
                  <span>{user?.email}</span>
                </div>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={() => navigate('/settings')}>Settings</button>
                <button className="dropdown-item" onClick={() => navigate('/timetable')}>Timetable</button>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item logout text-error" onClick={() => logout()}>Logout</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
