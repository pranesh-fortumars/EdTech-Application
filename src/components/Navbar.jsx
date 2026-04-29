import React from 'react';
import { Search, Bell, Menu, Sun, Moon } from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const { user } = useAuthStore();

  return (
    <nav className="navbar glass">
      <div className="navbar-left">
        <button className="mobile-menu-btn" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search for courses, lessons, or AI help..." />
        </div>
      </div>

      <div className="navbar-right">
        <button className="icon-btn theme-toggle">
          <Sun size={20} />
        </button>
        <div className="notification-wrapper">
          <button className="icon-btn">
            <Bell size={20} />
            <span className="notification-badge"></span>
          </button>
        </div>
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-level">{user.role.toUpperCase()} • {user.institution.split(',')[0]}</span>
          </div>
          <img src={user.avatar} alt="User Avatar" className="user-avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
