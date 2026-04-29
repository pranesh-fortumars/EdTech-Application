import React, { useState } from 'react';
import { 
  Mic, 
  MicOff, 
  Video as VideoIcon, 
  VideoOff, 
  Hand, 
  MessageSquare, 
  Users, 
  Share, 
  Settings, 
  PhoneOff,
  Smile,
  Send
} from 'lucide-react';
import './LiveClass.css';

const LiveClass = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="live-class">
      <div className="meeting-main">
        <div className="main-video card">
          <div className="participant-count">
            <Users size={14} />
            <span>124 students</span>
          </div>
          <div className="teacher-video-placeholder flex-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" alt="Teacher" />
            <div className="teacher-label">Dr. Sarah Drasner (Instructor)</div>
          </div>
          
          <div className="meeting-controls glass">
            <div className="control-group">
              <button className={`control-btn ${!isMicOn ? 'off' : ''}`} onClick={() => setIsMicOn(!isMicOn)}>
                {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
              </button>
              <button className={`control-btn ${!isVideoOn ? 'off' : ''}`} onClick={() => setIsVideoOn(!isVideoOn)}>
                {isVideoOn ? <VideoIcon size={20} /> : <VideoOff size={20} />}
              </button>
            </div>
            
            <div className="control-group">
              <button className="control-btn"><Hand size={20} /></button>
              <button className="control-btn"><Share size={20} /></button>
              <button className="control-btn"><Smile size={20} /></button>
              <button className="control-btn end-btn"><PhoneOff size={20} /></button>
            </div>
            
            <div className="control-group">
              <button className="control-btn"><Settings size={20} /></button>
            </div>
          </div>
        </div>

        <div className="participants-grid">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="participant-card card">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Student${i}`} alt="Student" />
              <div className="participant-name">Student {i}</div>
              <div className="p-status"><MicOff size={12} /></div>
            </div>
          ))}
        </div>
      </div>

      <aside className="meeting-sidebar card">
        <div className="sidebar-tabs">
          <button className={activeTab === 'chat' ? 'active' : ''} onClick={() => setActiveTab('chat')}>
            Chat
          </button>
          <button className={activeTab === 'participants' ? 'active' : ''} onClick={() => setActiveTab('participants')}>
            Users
          </button>
          <button className={activeTab === 'whiteboard' ? 'active' : ''} onClick={() => setActiveTab('whiteboard')}>
            Board
          </button>
        </div>

        <div className="sidebar-content">
          {activeTab === 'chat' && (
            <>
              <div className="chat-messages-live">
                <div className="msg-bubble">
                  <span className="user">John Doe:</span>
                  <p>Can you explain the useMemo hook again?</p>
                </div>
                <div className="msg-bubble system">
                  <p>Aura AI: John, useMemo is used to memoize values between renders.</p>
                </div>
              </div>
              <div className="chat-input-live">
                <input type="text" placeholder="Type a message..." />
                <button><Send size={18} /></button>
              </div>
            </>
          )}
          {activeTab === 'participants' && <div className="placeholder-text">List of 124 students...</div>}
          {activeTab === 'whiteboard' && (
            <div className="whiteboard-preview flex-center">
              <div className="canvas-mock">
                <div className="shape rect"></div>
                <div className="shape circle"></div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default LiveClass;
