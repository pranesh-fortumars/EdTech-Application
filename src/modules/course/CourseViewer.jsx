import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, FileText, CheckSquare, ChevronLeft, ChevronRight, MessageCircle, 
  Download, Clock, Star, Users, Info, Bookmark, Share2, MoreVertical, 
  CheckCircle2, Lock, PlayCircle
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './CourseViewer.css';

const curriculum = [
  {
    module: "1. Introduction to Advanced Patterns",
    lessons: [
      { id: '1-1', title: "The State of React in 2026", duration: "12:45", status: "done" },
      { id: '1-2', title: "Project Architecture & Scalability", duration: "25:30", status: "done" }
    ]
  },
  {
    module: "2. Mastering Hook Composition",
    lessons: [
      { id: '2-1', title: "Custom Hook Performance", duration: "18:12", status: "current" },
      { id: '2-2', title: "Advanced Closure & Stale State", duration: "22:05", status: "locked" }
    ]
  },
  {
    module: "3. Enterprise Global State",
    lessons: [
      { id: '3-1', title: "Zustand vs Redux in Large Apps", duration: "30:00", status: "locked" },
      { id: '3-2', title: "Atomic State & Performance", duration: "15:50", status: "locked" }
    ]
  }
];

const CourseViewer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLesson, setCurrentLesson] = useState('2-1');
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const { addNotification } = useNotificationStore();

  const handleAction = (msg) => addNotification(msg, 'success');

  return (
    <div className={`course-viewer professional-theme ${isCinemaMode ? 'cinema-mode' : ''}`}>
      <div className="viewer-grid">
        <div className="viewer-main-content">
          <header className="viewer-header">
            <div className="header-top">
              <div className="course-badge">Enterprise Certified</div>
              <div className="header-actions">
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleAction('Course bookmarked!')}><Bookmark size={18} /></motion.button>
                <motion.button whileHover={{ scale: 1.1 }} onClick={() => handleAction('Link copied to clipboard')}><Share2 size={18} /></motion.button>
                <motion.button whileHover={{ scale: 1.1 }}><MoreVertical size={18} /></motion.button>
              </div>
            </div>
            <h1>The Modern Architect Masterclass</h1>
            <div className="course-meta">
              <span><Star className="text-amber" size={14} fill="var(--accent-amber)" /> 4.9 (2.4k ratings)</span>
              <span><Users size={14} /> 12,450 students</span>
              <span><Clock size={14} /> 12.5 Total Hours</span>
            </div>
          </header>

          <div className="video-player-wrapper card">
            <div className="video-viewport">
              <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=700&fit=crop" alt="Lecture Thumbnail" />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="central-play-btn"
                onClick={() => handleAction('Starting lesson stream...')}
              >
                <Play size={40} fill="white" />
              </motion.button>
              <div className="video-overlay-bottom">
                <div className="progress-scrub">
                  <div className="scrub-bar"><div className="fill" style={{ width: '45%' }}></div></div>
                </div>
                <div className="player-controls">
                  <div className="left">
                    <motion.button whileHover={{ x: -2 }}><ChevronLeft size={20} /></motion.button>
                    <PlayCircle size={20} />
                    <motion.button whileHover={{ x: 2 }}><ChevronRight size={20} /></motion.button>
                  </div>
                  <span className="time-code">12:45 / 30:00</span>
                  <div className="right">
                    <div className="volume"></div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setIsCinemaMode(!isCinemaMode)}
                      title="Toggle Cinema Mode"
                    >
                      <Maximize2 size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content-explorer card">
            <nav className="explorer-tabs">
              {[
                { id: 'overview', icon: Info, label: 'Overview' },
                { id: 'resources', icon: FileText, label: 'Resources' },
                { id: 'discussion', icon: MessageCircle, label: 'Discussion' },
                { id: 'notes', icon: Star, label: 'My Notes' }
              ].map(tab => (
                <button 
                  key={tab.id}
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
            </nav>

            <div className="tab-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="tab-inner"
                >
                  {activeTab === 'overview' && (
                    <div className="overview-tab">
                      <h3>About this Lesson</h3>
                      <p>In this module, we dive deep into advanced React patterns that drive 2026 enterprise applications. You will learn how to architect scalable frontends using Atomic Design principles and advanced hook composition.</p>
                      <div className="instructor-card">
                        <img src="https://i.pravatar.cc/150?u=muthu" alt="Instructor" />
                        <div className="info">
                          <h4>Thiru. Muthuvel P.</h4>
                          <span>Senior Architect • 15+ Yrs Exp</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'resources' && (
                    <div className="resources-list">
                      <div className="resource-item">
                        <div className="icon pdf"><FileText size={20} /></div>
                        <div className="details">
                          <p>Architecture_Blueprint_v3.pdf</p>
                          <span>PDF • 4.2 MB</span>
                        </div>
                        <button className="btn-icon" onClick={() => handleAction('Downloading resource...')}><Download size={18} /></button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <aside className="viewer-sidebar card">
          <div className="sidebar-header">
            <h3>Course Curriculum</h3>
            <div className="progress-total">
              <span>45% Complete</span>
              <div className="progress-bar"><div className="fill" style={{ width: '45%' }}></div></div>
            </div>
          </div>
          <div className="curriculum-accordion">
            {curriculum.map((mod, idx) => (
              <div key={idx} className="module-group">
                <div className="module-title">{mod.module}</div>
                <div className="lesson-list">
                  {mod.lessons.map(lesson => (
                    <div 
                      key={lesson.id} 
                      className={`lesson-item ${currentLesson === lesson.id ? 'active' : ''} ${lesson.status}`}
                      onClick={() => lesson.status !== 'locked' && setCurrentLesson(lesson.id)}
                    >
                      <div className="status-indicator">
                        {lesson.status === 'done' ? <CheckCircle2 size={14} className="text-emerald" /> : 
                         lesson.status === 'locked' ? <Lock size={14} /> : <PlayCircle size={14} className="text-primary" />}
                      </div>
                      <div className="lesson-info">
                        <span className="title">{lesson.title}</span>
                        <span className="duration"><Clock size={12} /> {lesson.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseViewer;

// Missing icons from lucide
const Maximize2 = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>;
