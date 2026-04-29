import React, { useState } from 'react';
import { Bot, Mail, Lock, ArrowRight, ShieldCheck, User, GraduationCap } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="login-page">
      <div className="login-container card glass">
        <motion.div 
          className="login-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="login-logo flex-center">
            <Bot size={32} color="white" />
          </div>
          <h1>Aura<span>Ed</span></h1>
          <p>The Future of Learning in Tamil Nadu</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={20} />
              <input 
                type="email" 
                placeholder="e.g. arun@school.edu.in" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="role-selector">
            <p>Select your role (Testing purposes):</p>
            <div className="roles">
              <button type="button" onClick={() => setEmail('student@school.in')}>Student</button>
              <button type="button" onClick={() => setEmail('teacher@school.in')}>Teacher</button>
              <button type="button" onClick={() => setEmail('admin@school.in')}>Admin</button>
            </div>
          </div>

          <button className="login-btn primary-btn" disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Sign In'}
            {!isLoading && <ArrowRight size={20} />}
          </button>
        </form>

        <div className="login-footer">
          <p>Trusted by 500+ Schools across Tamil Nadu</p>
          <div className="badges">
            <div className="badge"><ShieldCheck size={14} /> Secure</div>
            <div className="badge"><GraduationCap size={14} /> Academic</div>
          </div>
        </div>
      </div>
      
      <div className="login-visual">
        <div className="visual-content">
          <h2>Empowering the next generation of <span>scholars.</span></h2>
          <p>Join thousands of students and teachers using AI to transform education.</p>
        </div>
        <div className="floating-shapes">
          <div className="shape s1"></div>
          <div className="shape s2"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
