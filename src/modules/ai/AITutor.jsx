import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, Sparkles, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './AITutor.css';

const AITutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [auraMode, setAuraMode] = useState('Empathetic'); // Empathetic, Analytical, Creative
  const [credits, setCredits] = useState(1240);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Vanakkam Arun! I'm Aura, your holographic AI mentor. My synaptic processors are synchronized with your academic record. How shall we accelerate your learning today?" }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    const handleOpen = (e) => {
      setIsOpen(true);
      setIsMinimized(false);
      if (e.detail?.message) {
        setMessages(prev => [...prev, { role: 'user', content: e.detail.message }]);
        // Simulate response for the automated message
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'ai', 
            content: `I've analyzed your request for "${e.detail.message}". I'm preparing a customized learning path for you right now!` 
          }]);
        }, 800);
      }
    };
    window.addEventListener('open-aura-ai', handleOpen);
    return () => window.removeEventListener('open-aura-ai', handleOpen);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = { 
        role: 'ai', 
        content: `That's a great question about ${input.split(' ').slice(0, 2).join(' ')}! Based on your performance in Thiru. Muthuvel's Calculus class, I suggest reviewing the basics of derivatives. Would you like a practice test for the board exams?` 
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            className="ai-trigger-btn flex-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
          >
            <Bot size={28} />
            <span className="pulse-ring"></span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={`ai-chat-window glass ${isMinimized ? 'minimized' : ''}`}
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
          >
            <div className="chat-header holographic-header">
              <div className="header-info">
                <div className="ai-avatar-glow flex-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4>Aura AI <span className="v-tag">v2.4</span></h4>
                  <div className="status-row">
                    <div className="aura-credits-mini" title="Your Aura Credits Balance">
                      <Zap size={10} /> {credits}
                    </div>
                    <div className="personality-toggle" onClick={() => setAuraMode(auraMode === 'Empathetic' ? 'Analytical' : 'Empathetic')}>
                      <div className={`dot ${auraMode === 'Empathetic' ? 'pulse-emerald' : 'pulse-indigo'}`}></div>
                      <span>{auraMode} Mode</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-actions">
                <button onClick={() => setIsMinimized(!isMinimized)} className="icon-action">
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="icon-action">
                  <X size={16} />
                </button>
              </div>
              <div className="hologram-scanline"></div>
            </div>

            {!isMinimized && (
              <>
                <div className="chat-messages">
                  {messages.map((msg, i) => (
                    <div key={i} className={`message ${msg.role}`}>
                      <div className="message-content">
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>

                <div className="chat-input">
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <button className="send-btn" onClick={handleSend}>
                    <Send size={18} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AITutor;
