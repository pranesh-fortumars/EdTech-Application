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
  Users,
  Shield
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuthStore();
  
  const allMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', roles: ['student', 'teacher', 'admin'] },
    { icon: BookOpen, label: 'My Subjects', path: '/courses', roles: ['student', 'teacher'] },
    { icon: Video, label: 'Live Classes', path: '/live', roles: ['student', 'teacher'] },
    { icon: MessageSquare, label: 'School Forum', path: '/community', roles: ['student', 'teacher', 'admin'] },
    { icon: Bot, label: 'AI Mentor', path: '/ai-tutor', roles: ['student', 'teacher'] },
    { icon: BarChart3, label: 'Academic Stats', path: '/analytics', roles: ['student', 'teacher'] },
    { icon: Trophy, label: 'Hall of Fame', path: '/achievements', roles: ['student'] },
    { icon: Users, label: 'Peer Learning', path: '/collaboration', roles: ['student'] },
    { icon: Users, label: 'Faculty Hub', path: '/faculty', roles: ['teacher'] },
    { icon: Shield, label: 'System Admin', path: '/admin-config', roles: ['admin'] },
    { icon: BarChart3, label: 'School Analytics', path: '/school-stats', roles: ['admin'] },
  ];

  const menuItems = allMenuItems.filter(item => item.roles.includes(user?.role));

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
