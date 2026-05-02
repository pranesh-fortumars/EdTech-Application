import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, UserPlus, Shield, Key, Search, 
  MoreVertical, Edit2, Trash2, Check, X,
  Filter, Mail, Phone, Tag
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './UserManagement.css';

const initialUsers = [
  { id: 1, name: 'Selvi Kavitha', email: 'kavitha@auraed.in', role: 'Teacher', dept: 'Physics', status: 'Active' },
  { id: 2, name: 'Rajesh Kumar', email: 'rajesh@auraed.in', role: 'Admin', dept: 'IT', status: 'Active' },
  { id: 3, name: 'Anbu Selvan', email: 'anbu@student.in', role: 'Student', dept: 'Class 12-A', status: 'Active' },
  { id: 4, name: 'Meena R.', email: 'meena@teacher.in', role: 'Teacher', dept: 'Biology', status: 'Pending' },
];

const UserManagement = () => {
  const { addNotification } = useNotificationStore();
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
    addNotification('User access revoked successfully.', 'success');
  };

  const filteredUsers = users.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || u.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="user-management-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Multi-Role User Control</h1>
          <p>Manage institutional access, permissions, and security roles.</p>
        </div>
        <button className="btn-primary" onClick={() => addNotification('Opening invitation portal...', 'success')}>
          <UserPlus size={16} /> Invite New User
        </button>
      </header>

      <div className="management-tools card glass">
        <div className="search-box">
          <Search size={18} className="text-tertiary" />
          <input 
            type="text" 
            placeholder="Search by name, email, or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <Filter size={18} className="text-tertiary" />
          <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
            <option value="All">All Roles</option>
            <option value="Admin">Administrators</option>
            <option value="Teacher">Faculty</option>
            <option value="Student">Students</option>
          </select>
        </div>
      </div>

      <div className="user-list card border-blue">
        <div className="table-container">
          <table className="pro-table">
            <thead>
              <tr>
                <th>User Identity</th>
                <th>Role & Access</th>
                <th>Department / Class</th>
                <th>Security Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <td>
                    <div className="user-identity">
                      <div className="avatar">{user.name.charAt(0)}</div>
                      <div className="details">
                        <strong>{user.name}</strong>
                        <span>{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={`role-pill ${user.role.toLowerCase()}`}>
                      {user.role === 'Admin' ? <Shield size={12} /> : <Key size={12} />}
                      {user.role}
                    </div>
                  </td>
                  <td>{user.dept}</td>
                  <td>
                    <span className={`status-badge ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-row">
                      <button className="btn-icon" onClick={() => addNotification(`Editing permissions for ${user.name}`)}><Edit2 size={14} /></button>
                      <button className="btn-icon text-rose" onClick={() => handleDelete(user.id)}><Trash2 size={14} /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
