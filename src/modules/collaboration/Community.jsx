import React from 'react';
import { MessageCircle, ThumbsUp, Share2, MoreHorizontal, Search } from 'lucide-react';
import './Community.css';

const Community = () => {
  const posts = [
    {
      id: 1,
      author: 'Selvi. Kavitha R.',
      role: 'Physics Teacher',
      content: 'Excellent work by the 10th-grade students on the Solar System project today! Special mention to Arun for the detailed 3D model.',
      time: '2h ago',
      likes: 24,
      comments: 5,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kavitha'
    },
    {
      id: 2,
      author: 'Anbu Selvan',
      role: 'Student, Class 12-A',
      content: 'Does anyone have notes for the upcoming Chemistry practical exam? Specifically on acid-base titration.',
      time: '5h ago',
      likes: 12,
      comments: 18,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anbu'
    }
  ];

  return (
    <div className="community-page">
      <header className="page-header">
        <h1>School <span className="gradient-text">Forum</span></h1>
        <div className="forum-search">
          <Search size={18} />
          <input type="text" placeholder="Search discussions, announcements..." />
        </div>
      </header>

      <div className="community-grid">
        <div className="posts-container">
          <div className="create-post card">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arun" alt="Me" className="avatar-sm" />
            <input type="text" placeholder="Start a discussion with your classmates..." />
            <button className="primary-btn">Post</button>
          </div>

          {posts.map(post => (
            <div key={post.id} className="post-card card">
              <div className="post-header">
                <div className="author-info">
                  <img src={post.avatar} alt={post.author} className="avatar-md" />
                  <div>
                    <h4>{post.author}</h4>
                    <span>{post.role} • {post.time}</span>
                  </div>
                </div>
                <button className="icon-btn"><MoreHorizontal size={18} /></button>
              </div>
              <div className="post-content">
                <p>{post.content}</p>
              </div>
              <div className="post-footer">
                <button className="footer-btn"><ThumbsUp size={16} /> {post.likes}</button>
                <button className="footer-btn"><MessageCircle size={16} /> {post.comments}</button>
                <button className="footer-btn"><Share2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        <aside className="forum-sidebar">
          <div className="trending-topics card">
            <h3>Trending in School</h3>
            <ul>
              <li>#AnnualDay2026</li>
              <li>#MathOlympiad</li>
              <li>#ScienceFair</li>
              <li>#BoardExams</li>
            </ul>
          </div>
          
          <div className="active-mentors card">
            <h3>Active AI Mentors</h3>
            <div className="mentor-item">
              <div className="mentor-dot online"></div>
              <span>Aura AI (Mathematics)</span>
            </div>
            <div className="mentor-item">
              <div className="mentor-dot online"></div>
              <span>Aura AI (Science)</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Community;
