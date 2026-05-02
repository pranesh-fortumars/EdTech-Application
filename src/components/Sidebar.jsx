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
  Shield,
  CreditCard,
  HelpCircle,
  ChevronRight,
  Target
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import useAuthStore from '../store/useAuthStore';
import './Sidebar.css';

const Sidebar = () => {
  const { user } = useAuthStore();
  
  const allMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', roles: ['student', 'teacher', 'admin'] },
    { icon: BookOpen, label: 'Course Library', path: '/courses', roles: ['student', 'teacher'] },
    { icon: Video, label: 'Live Studios', path: '/live', roles: ['student', 'teacher'] },
    { icon: MessageSquare, label: 'Community', path: '/community', roles: ['student', 'teacher', 'admin'] },
    { icon: Bot, label: 'Aura AI', path: '/ai-tutor', roles: ['student', 'teacher'] },
    { icon: BarChart3, label: 'Analytics', path: '/analytics', roles: ['student', 'teacher'] },
    { icon: Trophy, label: 'Achievements', path: '/achievements', roles: ['student'] },
    { icon: Users, label: 'Collaborate', path: '/collaboration', roles: ['student'] },
    { icon: Shield, label: 'Admin Hub', path: '/admin-config', roles: ['admin'] },
    { icon: Users, label: 'User Control', path: '/users', roles: ['admin'] },
    { icon: BarChart3, label: 'School Pulse', path: '/school-stats', roles: ['admin'] },
    { icon: CreditCard, label: 'Fee Portal', path: '/fees', roles: ['student', 'admin'] },
    { icon: Target, label: 'Mastery Quiz', path: '/ai-quiz', roles: ['student'] },
    { icon: Baby, label: 'Parent Portal', path: '/parent', roles: ['student', 'admin'] },
    { icon: Database, label: 'Asset Tracking', path: '/assets', roles: ['admin'] },
  ];

  const menuItems = allMenuItems.filter(item => item.roles.includes(user?.role));

  return (
    <aside className="sidebar professional-theme">
      <div className="sidebar-logo">
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="logo-icon flex-center"
        >
          <Bot size={24} color="white" />
        </motion.div>
        <span className="logo-text">Aura<span>Ed</span></span>
        <div className="role-badge">{user?.role}</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main Menu</div>
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
            {item.label === 'Aura AI' && <span className="item-tag">New</span>}
          </NavLink>
        ))}
        
        <div className="nav-section-label mt-2">Support & Admin</div>
        <NavLink to="/help" className="nav-item">
          <HelpCircle size={18} />
          <span>Help Center</span>
        </NavLink>
      </nav>

      <div className="sidebar-profile card glass">
        <div className="profile-mini">
          <div className="avatar">
            {user?.name?.charAt(0)}
            <div className="status-online"></div>
          </div>
          <div className="info">
            <p>{user?.name}</p>
            <span>Pro Member</span>
          </div>
          <ChevronRight size={14} className="text-tertiary" />
        </div>
      </div>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-item-secondary">
          <Settings size={18} />
        </NavLink>
        <button className="nav-item-secondary logout-btn" onClick={() => window.location.reload()}>
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
