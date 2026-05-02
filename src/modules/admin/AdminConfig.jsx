import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, Building, Calendar, Shield, 
  Bell, Globe, Save, RefreshCw, 
  Database, Lock, Eye, Mail
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './AdminConfig.css';

const AdminConfig = () => {
  const { addNotification } = useNotificationStore();
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      addNotification('System configuration updated successfully.', 'success');
    }, 2000);
  };

  return (
    <div className="admin-config-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>System Configuration Hub</h1>
          <p>Manage global institutional settings, academic cycles, and security protocols.</p>
        </div>
        <button className="btn-primary" onClick={handleSave} disabled={isSaving}>
          {isSaving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
          {isSaving ? 'Saving Changes...' : 'Save Configuration'}
        </button>
      </header>

      <div className="config-grid">
        <div className="main-config">
          <section className="config-section card">
            <div className="section-title">
              <Building size={20} className="text-blue" />
              <h3>Institution Profile</h3>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Institutional Name</label>
                <input type="text" defaultValue="AuraEd International School" />
              </div>
              <div className="form-group">
                <label>Institutional Code</label>
                <input type="text" defaultValue="AURA-MAD-01" />
              </div>
              <div className="form-group">
                <label>Regional Timezone</label>
                <select defaultValue="IST">
                  <option value="IST">(GMT+05:30) India Standard Time</option>
                  <option value="EST">(GMT-05:00) Eastern Standard Time</option>
                </select>
              </div>
            </div>
          </section>

          <section className="config-section card mt-2">
            <div className="section-title">
              <Calendar size={20} className="text-emerald" />
              <h3>Academic Cycle</h3>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Current Term</label>
                <select defaultValue="Term 2">
                  <option value="Term 1">Term 1 (Aug - Dec)</option>
                  <option value="Term 2">Term 2 (Jan - May)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Attendance Threshold (%)</label>
                <input type="number" defaultValue="75" />
              </div>
            </div>
          </section>

          <section className="config-section card mt-2">
            <div className="section-title">
              <Shield size={20} className="text-rose" />
              <h3>Security & Compliance</h3>
            </div>
            <div className="toggle-list">
              {[
                { label: 'Two-Factor Authentication (Faculty Only)', enabled: true },
                { label: 'Blockchain-backed Certificate Issuance', enabled: true },
                { label: 'Strict GDPR Privacy Mode', enabled: false }
              ].map((item, i) => (
                <div key={i} className="toggle-item">
                  <span>{item.label}</span>
                  <div className={`toggle-switch ${item.enabled ? 'on' : ''}`}>
                    <div className="knob"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="config-sidebar">
          <div className="card glass system-health">
            <h3><Database size={18} /> System Integrity</h3>
            <div className="health-stats">
              <div className="health-item">
                <div className="label">Database Sync</div>
                <div className="status text-emerald">Optimal (12ms)</div>
              </div>
              <div className="health-item">
                <div className="label">Storage Capacity</div>
                <div className="status">82% Utilized</div>
              </div>
              <div className="health-item">
                <div className="label">Active Sessions</div>
                <div className="status">1,204 Users</div>
              </div>
            </div>
            <button className="btn-outline full-width mt-1" onClick={() => addNotification('Generating full system diagnostic...')}>
              Run Diagnostics
            </button>
          </div>

          <div className="card mt-2 notifications-config">
            <h3><Bell size={18} /> Alerts & Notifications</h3>
            <div className="channel-list">
              <div className="channel">
                <Mail size={16} /> <span>Email Notifications</span>
                <input type="checkbox" defaultChecked />
              </div>
              <div className="channel">
                <Globe size={16} /> <span>Global In-App Alerts</span>
                <input type="checkbox" defaultChecked />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AdminConfig;
