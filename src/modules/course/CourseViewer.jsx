import React, { useState } from 'react';
import { Play, FileText, CheckSquare, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import './CourseViewer.css';

const CourseViewer = () => {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="course-viewer">
      <div className="viewer-main">
        <div className="video-container card">
          <div className="video-placeholder flex-center">
            <div className="play-overlay flex-center">
              <Play size={48} fill="white" />
            </div>
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=700&fit=crop" alt="Video Thumbnail" />
          </div>
          
          <div className="video-controls">
            <div className="course-breadcrumb">
              <span>React Masterclass</span>
              <ChevronRight size={16} />
              <span className="current">Module 3: Advanced Hooks</span>
            </div>
            <div className="video-actions">
              <button className="secondary-btn">
                <ChevronLeft size={18} />
                Previous
              </button>
              <button className="primary-btn">
                Next Lesson
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="viewer-tabs card">
          <div className="tab-header">
            <button className={activeTab === 'video' ? 'active' : ''} onClick={() => setActiveTab('video')}>
              <Play size={18} /> Video
            </button>
            <button className={activeTab === 'notes' ? 'active' : ''} onClick={() => setActiveTab('notes')}>
              <FileText size={18} /> Notes
            </button>
            <button className={activeTab === 'quiz' ? 'active' : ''} onClick={() => setActiveTab('quiz')}>
              <CheckSquare size={18} /> Quiz
            </button>
            <button className={activeTab === 'chat' ? 'active' : ''} onClick={() => setActiveTab('chat')}>
              <MessageCircle size={18} /> Discussion
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'video' && (
              <div className="lesson-description">
                <h3>Understanding useMemo and useCallback</h3>
                <p>In this lesson, we dive deep into the world of React performance optimization. You'll learn exactly when to use these hooks and, more importantly, when NOT to use them to avoid unnecessary complexity.</p>
                <div className="resources">
                  <h4>Resources</h4>
                  <ul>
                    <li><FileText size={16} /> source-code.zip</li>
                    <li><FileText size={16} /> optimization-cheatsheet.pdf</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'notes' && <div className="placeholder-text">Lesson notes and transcript...</div>}
            {activeTab === 'quiz' && (
              <div className="quiz-preview">
                <h3>Quick Knowledge Check</h3>
                <p>Take this 5-question quiz to test your understanding of this module.</p>
                <button className="primary-btn">Start Quiz</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <aside className="course-sidebar card">
        <div className="sidebar-header">
          <h3>Course Content</h3>
          <div className="progress-mini">
            <div className="bar"><div className="fill" style={{ width: '45%' }}></div></div>
            <span>45% Complete</span>
          </div>
        </div>
        <div className="curriculum">
          {[
            { title: 'Module 1: Introduction', items: ['What is React?', 'JSX Basics'] },
            { title: 'Module 2: State & Props', items: ['useState deep dive', 'Passing Data'] },
            { title: 'Module 3: Advanced Hooks', items: ['useMemo & useCallback', 'useRef for DOM', 'Custom Hooks'], active: true },
          ].map((mod, i) => (
            <div key={i} className={`module-item ${mod.active ? 'active' : ''}`}>
              <h4>{mod.title}</h4>
              <ul>
                {mod.items.map((item, j) => (
                  <li key={j} className={item === 'useMemo & useCallback' ? 'current' : ''}>
                    <div className="lesson-status done"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default CourseViewer;
