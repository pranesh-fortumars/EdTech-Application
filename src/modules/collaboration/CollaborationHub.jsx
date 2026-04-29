import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Video, MessageSquare, Monitor, Plus, Clock, Shield, X } from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import useDataStore from '../../store/useDataStore';
import './Collaboration.css';

const CollaborationHub = () => {
  const { addNotification } = useNotificationStore();
  const { rooms, addRoom } = useDataStore();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomData, setRoomData] = useState({ name: '', host: 'Self-Organized' });

  const handleCreateRoom = (e) => {
    e.preventDefault();
    if (!roomData.name) return;
    addRoom(roomData);
    addNotification(`Created room: ${roomData.name}`, 'success');
    setRoomData({ name: '', host: 'Self-Organized' });
    setIsModalOpen(false);
  };

  return (
    <div className="collaboration-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Collaboration Hub</h1>
          <p>Join live focus rooms and study with your peers across Tamil Nadu.</p>
        </div>
        <div className="action-group">
          <button className="btn-outline" onClick={() => addNotification('Opening room scheduler...', 'success')}>
            <Clock size={16} /> Schedule Room
          </button>
          <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
            <Plus size={16} /> Create Room
          </button>
        </div>
      </header>

      <div className="collaboration-grid">
        <div className="rooms-panel card">
          <div className="section-header">
            <h3>Active Focus Rooms</h3>
            <span className="live-count">{rooms.filter(r => r.status === 'Live').length} Rooms Live</span>
          </div>
          
          <div className="room-list">
            {rooms.map((room) => (
              <motion.div 
                key={room.id}
                whileHover={{ scale: 1.02 }}
                className="room-card"
              >
                <div className="room-info">
                  <div className={`status-tag ${room.status.toLowerCase()}`}>{room.status}</div>
                  <h4>{room.name}</h4>
                  <p>Hosted by {room.host}</p>
                </div>
                <div className="room-meta">
                  <div className="users"><Users size={14} /> {room.users} online</div>
                  <button className="btn-join" onClick={() => addNotification(`Joining ${room.name}...`, 'success')}>Join</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <aside className="study-sidebar">
          <div className="card glass tools-panel">
            <h3>Quick Tools</h3>
            <div className="tool-grid">
              {[
                { icon: Monitor, label: 'Whiteboard' },
                { icon: MessageSquare, label: 'Group Chat' },
                { icon: Video, label: 'Co-Watch' },
                { icon: Shield, label: 'Private Room' }
              ].map((tool, i) => (
                <button key={i} className="tool-btn" onClick={() => addNotification(`Opening shared ${tool.label.toLowerCase()}...`, 'success')}>
                  <tool.icon size={20} />
                  <span>{tool.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="card community-stats">
            <h3>Your Contribution</h3>
            <div className="stat">
              <span>Time Collaborated</span>
              <strong>12.5 hrs</strong>
            </div>
            <div className="stat">
              <span>Peers Helped</span>
              <strong>4</strong>
            </div>
          </div>
        </aside>
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="modal-overlay flex-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="modal-content card"
            >
              <div className="modal-header">
                <h3>Create New Focus Room</h3>
                <button onClick={() => setIsModalOpen(false)} className="btn-icon"><X size={20} /></button>
              </div>
              <form onSubmit={handleCreateRoom} className="modal-form">
                <div className="form-group">
                  <label>Room Name</label>
                  <input type="text" value={roomData.name} onChange={(e) => setRoomData({...roomData, name: e.target.value})} placeholder="e.g. Bio-Chemical Prep" required />
                </div>
                <div className="form-group">
                  <label>Host Label</label>
                  <input type="text" value={roomData.host} onChange={(e) => setRoomData({...roomData, host: e.target.value})} placeholder="e.g. Student Group" />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="btn-outline">Cancel</button>
                  <button type="submit" className="btn-primary">Launch Room</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollaborationHub;
