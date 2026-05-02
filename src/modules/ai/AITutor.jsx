import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './AITutor.css';

const AITutor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Vanakkam Arun! I\'m Aura, your AI mentor. How can I help you with your subjects today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
            <div className="chat-header">
              <div className="header-info">
                <div className="ai-avatar flex-center">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4>Aura AI</h4>
                  <div className="status-row">
                    <span className="status">Online</span>
                    <div className="emotion-indicator" title="Emotional Resonance: Focused">
                      <div className="dot pulse-emerald"></div>
                      <span>Empathetic Mode</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-actions">
                <button onClick={() => setIsMinimized(!isMinimized)}>
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button onClick={() => setIsOpen(false)}>
                  <X size={18} />
                </button>
              </div>
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
