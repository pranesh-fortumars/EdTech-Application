import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Bell, Shield, Globe, 
  Moon, Sun, Save, Languages,
  Mail, Phone, Lock
} from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import useNotificationStore from '../../store/useNotificationStore';
import './Settings.css';

const Settings = () => {
  const { user, updateUser } = useAuthStore();
  const { addNotification } = useNotificationStore();
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    institution: user?.institution || '',
    language: 'English',
    notifications: true,
    darkMode: false
  });

  const handleSave = () => {
    updateUser(formData);
    addNotification('Settings saved successfully!', 'success');
  };

  const sections = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'regional', label: 'Region & Language', icon: Globe },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div className="settings-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Account Settings</h1>
          <p>Personalize your experience on the AuraEd platform.</p>
        </div>
        <button className="btn-primary" onClick={handleSave}>
          <Save size={18} /> Save Preferences
        </button>
      </header>

      <div className="settings-grid">
        <aside className="settings-nav card glass">
          {sections.map(section => (
            <button 
              key={section.id}
              className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              <section.icon size={18} />
              <span>{section.label}</span>
            </button>
          ))}
        </aside>

        <main className="settings-main card">
          {activeSection === 'profile' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="section-content">
              <h3>Profile Identity</h3>
              <div className="profile-edit">
                <div className="avatar-large">
                  <img src={user?.avatar} alt="Avatar" />
                  <button className="btn-edit-avatar">Change</button>
                </div>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-with-icon">
                      <User size={16} />
                      <input 
                        type="text" 
                        value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-with-icon">
                      <Mail size={16} />
                      <input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})} 
                      />
                    </div>
                  </div>
                  <div className="form-group full">
                    <label>Institution</label>
                    <input type="text" value={formData.institution} readOnly className="read-only" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'regional' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="section-content">
              <h3>Regional Preferences</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Primary Language</label>
                  <div className="input-with-icon">
                    <Languages size={16} />
                    <select 
                      value={formData.language} 
                      onChange={(e) => setFormData({...formData, language: e.target.value})}
                    >
                      <option>English</option>
                      <option>Tamil (தமிழ்)</option>
                      <option>Hindi</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>App Appearance</label>
                  <div className="appearance-toggle">
                    <button className="active"><Sun size={16} /> Light</button>
                    <button><Moon size={16} /> Dark</button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === 'security' && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="section-content">
              <h3>Security & Access</h3>
              <div className="security-options">
                <div className="option-item">
                  <div className="text">
                    <strong>Two-Factor Authentication</strong>
                    <p>Add an extra layer of security to your account.</p>
                  </div>
                  <div className="toggle on"></div>
                </div>
                <div className="option-item">
                  <div className="text">
                    <strong>Institutional Blockchain Key</strong>
                    <p>Your unique identifier for digital certificates.</p>
                  </div>
                  <code>0x71C...3a2f</code>
                </div>
                <button className="btn-outline mt-1"><Lock size={16} /> Change Password</button>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Settings;
