import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, Target, Zap, ChevronRight, CheckCircle2, XCircle, 
  RefreshCw, Award, BookOpen, Clock, BrainCircuit
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './AIQuiz.css';

const mockQuestions = [
  {
    id: 1,
    question: "Which React Hook is specifically designed for handling expensive calculations by memoizing the result?",
    options: ["useMemo", "useCallback", "useEffect", "useRef"],
    correct: 0,
    explanation: "useMemo returns a memoized value, which only re-calculates when one of the dependencies has changed."
  },
  {
    id: 2,
    question: "In 2026 architecture, what is the primary benefit of 'Server Components'?",
    options: ["Client-side interactivity", "Zero bundle size impact on client", "Faster state management", "SEO only"],
    correct: 1,
    explanation: "Server Components are rendered on the server and do not send their logic to the client bundle."
  }
];

const AIQuizEngine = () => {
  const { addNotification } = useNotificationStore();
  const [currentStep, setCurrentStep] = useState('config'); // config, quiz, result
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const startQuiz = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentStep('quiz');
      addNotification('AI has generated a custom assessment based on your skill graph.', 'success');
    }, 2000);
  };

  const handleAnswer = (idx) => {
    setSelectedOption(idx);
    if (idx === mockQuestions[activeQuestion].correct) {
      setScore(s => s + 1);
    }
    
    setTimeout(() => {
      if (activeQuestion < mockQuestions.length - 1) {
        setActiveQuestion(q => q + 1);
        setSelectedOption(null);
      } else {
        setCurrentStep('result');
      }
    }, 1500);
  };

  return (
    <div className="ai-quiz-container professional-theme">
      <AnimatePresence mode="wait">
        {currentStep === 'config' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="quiz-config-card card glass"
          >
            <div className="ai-header">
              <div className="ai-icon-bg">
                <Cpu size={32} className="text-violet" />
              </div>
              <h2>Aura AI Quiz Engine</h2>
              <p>Generate personalized assessments to test your mastery levels.</p>
            </div>

            <div className="config-options">
              <div className="option-item">
                <label>Focus Subject</label>
                <select defaultValue="react">
                  <option value="react">Advanced React Patterns</option>
                  <option value="node">Node.js Performance</option>
                  <option value="system">System Design</option>
                </select>
              </div>
              <div className="option-item">
                <label>Difficulty Level</label>
                <div className="difficulty-pills">
                  <span className="pill">Adaptive</span>
                  <span className="pill active">Expert</span>
                </div>
              </div>
            </div>

            <button 
              className="btn-primary full-width" 
              onClick={startQuiz}
              disabled={isGenerating}
            >
              {isGenerating ? <><RefreshCw className="animate-spin" size={18} /> Generating Questions...</> : <><Zap size={18} /> Generate Quiz</>}
            </button>
          </motion.div>
        )}

        {currentStep === 'quiz' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="quiz-play-card card"
          >
            <div className="quiz-progress">
              <span>Question {activeQuestion + 1} of {mockQuestions.length}</span>
              <div className="progress-bar"><div className="fill" style={{ width: `${((activeQuestion + 1) / mockQuestions.length) * 100}%` }}></div></div>
            </div>

            <h3 className="question-text">{mockQuestions[activeQuestion].question}</h3>

            <div className="options-grid">
              {mockQuestions[activeQuestion].options.map((opt, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`option-btn ${selectedOption === i ? (i === mockQuestions[activeQuestion].correct ? 'correct' : 'wrong') : ''}`}
                  onClick={() => selectedOption === null && handleAnswer(i)}
                >
                  <span className="label">{String.fromCharCode(65 + i)}</span>
                  <span className="text">{opt}</span>
                  {selectedOption === i && (i === mockQuestions[activeQuestion].correct ? <CheckCircle2 size={18} className="text-emerald" /> : <XCircle size={18} className="text-rose" />)}
                </motion.button>
              ))}
            </div>

            {selectedOption !== null && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="explanation">
                <BrainCircuit size={16} className="text-violet" />
                <p><strong>AI Insight:</strong> {mockQuestions[activeQuestion].explanation}</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {currentStep === 'result' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="quiz-result-card card text-center"
          >
            <Award size={64} className="text-amber mx-auto mb-1" />
            <h2>Mastery Check Complete!</h2>
            <div className="score-display">
              <span className="big-score">{score}</span>
              <span className="total-score">/ {mockQuestions.length}</span>
            </div>
            <p>You've demonstrated **{score === mockQuestions.length ? 'Expert' : 'High'}** proficiency in React Patterns.</p>
            
            <div className="skill-update card glass">
              <RefreshCw size={20} className="text-violet" />
              <span>Skill Graph Updated: +15 Mastery Points</span>
            </div>

            <div className="result-actions">
              <button className="btn-outline" onClick={() => setCurrentStep('config')}>Back to Dashboard</button>
              <button className="btn-primary" onClick={() => addNotification('Certificate generated and added to profile!', 'success')}>Claim Badge</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIQuizEngine;
