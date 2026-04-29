import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Bot, 
  BarChart3, 
  Trophy, 
  Settings,
  LogOut,
  Users
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'My Subjects', path: '/courses' },
    { icon: Video, label: 'Live Classes', path: '/live' },
    { icon: MessageSquare, label: 'School Forum', path: '/community' },
    { icon: Bot, label: 'AI Mentor', path: '/ai-tutor' },
    { icon: BarChart3, label: 'Academic Stats', path: '/analytics' },
    { icon: Trophy, label: 'Hall of Fame', path: '/achievements' },
    { icon: Users, label: 'Peer Learning', path: '/collaboration' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon flex-center">
          <Bot size={24} color="white" />
        </div>
        <span className="logo-text">Aura<span>Ed</span></span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-item">
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
        <button className="nav-item logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
