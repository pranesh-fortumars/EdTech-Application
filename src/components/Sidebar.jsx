import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, BookOpen, Video, MessageSquare, Bot, BarChart3, Trophy, Settings,
  LogOut, Users, Shield, CreditCard, HelpCircle, ChevronRight, Target, Baby, Database,
  Server, ShieldCheck, UserPlus, ClipboardList, Briefcase, CalendarCheck, FileBarChart, X,
  Bus, Megaphone
} from 'lucide-react';
import useAuthStore from '../store/useAuthStore';
import useNotificationStore from '../store/useNotificationStore';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useAuthStore();
  const { addNotification } = useNotificationStore();
  
  const allMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/', roles: ['student', 'teacher', 'admin', 'parent'] },
    { icon: BookOpen, label: 'Course Library', path: '/courses', roles: ['student', 'teacher'] },
    { icon: Video, label: 'Live Studios', path: '/live', roles: ['student', 'teacher'] },
    { icon: MessageSquare, label: 'Community', path: '/community', roles: ['student', 'teacher', 'admin'] },
    { icon: Bot, label: 'Aura AI', path: '/ai-tutor', roles: ['student', 'teacher'] },
    { icon: BarChart3, label: 'Analytics', path: '/analytics', roles: ['student', 'teacher'] },
    { icon: Trophy, label: 'Achievements', path: '/achievements', roles: ['student'] },
    { icon: Users, label: 'Collaborate', path: '/collaboration', roles: ['student'] },
    { icon: Target, label: 'Mastery Quiz', path: '/ai-quiz', roles: ['student'] },
    
    // Admin Specific Hubs
    { icon: Shield, label: 'Admin Hub', path: '/admin-config', roles: ['admin'] },
    { icon: Users, label: 'User Control', path: '/users', roles: ['admin'] },
    { icon: UserPlus, label: 'Admissions', path: '/admissions', roles: ['admin'] },
    { icon: Shield, label: 'Faculty Hub', path: '/faculty', roles: ['teacher', 'admin'] },
    { icon: BarChart3, label: 'School Pulse', path: '/school-stats', roles: ['admin'] },
    { icon: Server, label: 'Infrastructure', path: '/infrastructure', roles: ['admin'] },
    { icon: ShieldCheck, label: 'Audit Logs', path: '/audit', roles: ['admin'] },
    { icon: Database, label: 'Asset Tracking', path: '/assets', roles: ['admin'] },
    
    // Shared / Parent
    { icon: Baby, label: 'Parent Portal', path: '/parent', roles: ['parent', 'admin'] },
    { icon: CalendarCheck, label: 'Attendance Monitor', path: '/parent-attendance', roles: ['parent'] },
    { icon: BarChart3, label: 'Performance Report', path: '/parent-reports', roles: ['parent'] },
    { icon: Bus, label: 'Transport Tracker', path: '/transport', roles: ['parent'] },
    { icon: ShieldCheck, label: 'Health & Safety', path: '/health-safety', roles: ['parent'] },
    { icon: Megaphone, label: 'Notice Board', path: '/notices', roles: ['parent'] },
    { icon: CreditCard, label: 'Fee Portal', path: '/fees', roles: ['parent', 'admin'] },
    { icon: MessageSquare, label: 'Parent Support', path: '/parent-support', roles: ['parent'] },

  ];

  const menuItems = allMenuItems.filter(item => item.roles.includes(user?.role));

  return (
    <aside className={`sidebar professional-theme ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-logo">
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="logo-icon flex-center"
        >
          <Bot size={24} color="white" />
        </motion.div>
        <span className="logo-text">Aura<span>Ed</span></span>
        <div className="role-badge">{user?.role}</div>
        
        {/* Mobile Close Button */}
        <button className="sidebar-close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Main Menu</div>
        {menuItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={(e) => {
              if (item.label === 'Aura AI') {
                window.dispatchEvent(new CustomEvent('open-aura-ai'));
              }
            }}
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
        <button 
          className="nav-item border-none bg-transparent w-full cursor-pointer"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open-aura-ai', { detail: { message: "I need technical support with my courses." } }));
            addNotification('Connecting to Aura AI Support...', 'info');
          }}
        >
          <MessageSquare size={18} className="text-primary" />
          <span>Live Support</span>
        </button>
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
        <button 
          className="nav-item-secondary logout-btn" 
          onClick={() => {
            logout();
            window.location.href = '/login';
          }}
        >
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
