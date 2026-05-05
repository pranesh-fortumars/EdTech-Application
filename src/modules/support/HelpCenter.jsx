import React, { useState } from 'react';
import { HelpCircle, Search, FileText, MessageCircle, Phone, Mail, ChevronRight, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useNotificationStore from '../../store/useNotificationStore';
import './HelpCenter.css';

const helpData = [
  { 
    id: 'getting-started',
    icon: Zap, 
    title: 'Getting Started', 
    desc: 'The essential guide to your digital campus.',
    articles: [
      'Setting up your student profile',
      'Joining your first live studio session',
      'Understanding the Aura AI knowledge graph',
      'Navigating the mastery quiz system'
    ]
  },
  { 
    id: 'academics',
    icon: BookOpen, 
    title: 'Academics & Courses', 
    desc: 'Managing your learning path and progress.',
    articles: [
      'Accessing course materials offline',
      'How grades and credits are calculated',
      'Submitting assignments via digital vault',
      'Requesting course extensions'
    ]
  },
  { 
    id: 'community',
    icon: MessageCircle, 
    title: 'Community & Conduct', 
    desc: 'Safe and productive student interactions.',
    articles: [
      'Creating a study group hub',
      'AuraEd community code of conduct',
      'Reporting inappropriate behavior',
      'Using the collaboration canvas'
    ]
  }
];

const HelpCenter = () => {
  const { addNotification } = useNotificationStore();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = helpData.filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(art => art.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="help-center professional-theme">
      <header className="module-header text-center">
        <h1 className="text-3xl font-bold mb-2">Institutional Help Center</h1>
        <p className="text-secondary font-medium">Empowering your learning with 24/7 self-service support.</p>
        
        <div className="help-search-container">
          <Search className="help-search-icon" size={24} />
          <input 
            type="text" 
            placeholder="Search for articles, troubleshooting, or guides..." 
            className="help-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      <div className="help-grid">
        <AnimatePresence>
          {filteredData.map((category) => (
            <motion.div 
              layout
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="help-card shadow-sm"
            >
              <div className="help-card-header">
                <div className="help-icon-box">
                  <category.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                  <p className="text-sm text-tertiary">{category.desc}</p>
                </div>
              </div>
              
              <div className="help-articles-list">
                {category.articles
                  .filter(art => art.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((article, idx) => (
                    <button 
                      key={idx} 
                      className="help-article-item"
                      onClick={() => addNotification(`Opening article: "${article}"...`, 'info')}
                    >
                      <span>{article}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <section className="contact-section">
        <h2 className="text-2xl font-bold mb-2">Still need assistance?</h2>
        <p className="text-secondary mb-6">Our institutional support team is standing by to help you succeed.</p>
        
        <div className="contact-grid">
          <a href="mailto:support@auraed.edu" className="contact-method">
            <div className="icon-wrap">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-tertiary mb-1">Email Support</p>
              <span>support@auraed.edu</span>
            </div>
          </a>
          
          <a href="tel:+18002872338" className="contact-method">
            <div className="icon-wrap">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-tertiary mb-1">24/7 Hotline</p>
              <span>+1 (800) AURA-EDU</span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;

