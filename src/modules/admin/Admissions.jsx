import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, UserPlus, FileSearch, CheckCircle, 
  XCircle, Clock, Search, Filter, ShieldCheck, 
  Sparkles, BrainCircuit, Scan, TrendingUp, AlertCircle
} from 'lucide-react';
import useNotificationStore from '../../store/useNotificationStore';
import './AdminModules.css';

const Admissions = () => {
  const { addNotification } = useNotificationStore();
  const [activeTab, setActiveTab] = useState('pipeline');
  
  const applicants = [
    { id: 'APP-2024-001', name: 'Siddharth R.', grade: '11th', fitScore: 92, ocrStatus: 'Verified', status: 'Screened', essaySentiment: 'Positive' },
    { id: 'APP-2024-002', name: 'Ananya M.', grade: '9th', fitScore: 78, ocrStatus: 'Pending', status: 'Processing', essaySentiment: 'Neutral' },
    { id: 'APP-2024-003', name: 'Rahul V.', grade: '12th', fitScore: 45, ocrStatus: 'Verified', status: 'Rejected', essaySentiment: 'Negative' },
  ];

  return (
    <div className="admissions-container professional-theme">
      <header className="module-header flex-between mb-8">
        <div>
          <h1>Admissions <span className="text-gradient">Intelligence Hub</span></h1>
          <p>Automated screening, document OCR, and predictive candidate matching.</p>
        </div>
        <div className="flex gap-4">
          <button className="btn-icon-vibrant" title="Run Batch AI Scan"><Scan size={20} /></button>
          <button className="btn-primary-vibrant"><UserPlus size={18} /> New Application</button>
        </div>
      </header>

      <div className="flex gap-4 mb-8">
        <button 
          className={`btn-sm ${activeTab === 'pipeline' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('pipeline')}
        >
          Active Pipeline
        </button>
        <button 
          className={`btn-sm ${activeTab === 'ai' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setActiveTab('ai')}
        >
          <Sparkles size={14} className="mr-2" /> AI Screening Lab
        </button>
      </div>

      <div className="pro-grid-main">
        <div className="main-content">
          <div className="admin-card">
            <div className="flex-between mb-6">
              <h3 className="text-xl font-bold">Candidate Evaluation Matrix</h3>
              <div className="search-pill">
                <Search size={16} className="text-slate-400" />
                <input type="text" placeholder="Search applicants..." />
              </div>
            </div>

            <div className="pro-table-wrapper">
              <table className="pro-table">
                <thead>
                  <tr>
                    <th>Application ID</th>
                    <th>Candidate</th>
                    <th>AI Fit Score</th>
                    <th>OCR Status</th>
                    <th>Sentiment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applicants.map((app) => (
                    <tr key={app.id}>
                      <td className="text-mono font-bold">{app.id}</td>
                      <td>
                        <div className="font-bold">{app.name}</div>
                        <div className="text-xs text-slate-400">Grade: {app.grade}</div>
                      </td>
                      <td>
                        <div className="flex items-center gap-2">
                          <div style={{ flex: 1, height: '6px', background: '#f1f5f9', borderRadius: '3px', width: '60px' }}>
                            <div style={{ width: `${app.fitScore}%`, height: '100%', background: app.fitScore > 80 ? 'var(--success)' : app.fitScore > 50 ? 'var(--primary)' : 'var(--error)', borderRadius: '3px' }} />
                          </div>
                          <span className="font-black text-xs">{app.fitScore}%</span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge-pro ${app.ocrStatus === 'Verified' ? 'badge-emerald' : 'badge-amber'}`}>
                          {app.ocrStatus === 'Verified' ? <ShieldCheck size={12} /> : <Clock size={12} />}
                          {app.ocrStatus}
                        </span>
                      </td>
                      <td>
                        <span className={`text-xs font-bold ${app.essaySentiment === 'Positive' ? 'text-emerald' : app.essaySentiment === 'Negative' ? 'text-rose' : 'text-slate-400'}`}>
                          {app.essaySentiment}
                        </span>
                      </td>
                      <td>
                        <div className="flex gap-2">
                          <button className="btn-icon-vibrant" onClick={() => addNotification(`Reviewing ${app.name}'s AI Profile`, 'info')}><FileSearch size={16} /></button>
                          <button className="btn-icon-vibrant text-emerald"><CheckCircle size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="admin-card bg-indigo-vibrant text-white">
            <div className="flex items-center gap-3 mb-4">
              <BrainCircuit size={24} />
              <h4 className="font-black m-0">Institutional Fit AI</h4>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Our AI analyzes socio-academic history, extracurricular consistency, and essay tone to predict candidate success.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                <span>Total Applications</span>
                <span>482</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                <span>Avg. Fit Score</span>
                <span>74%</span>
              </div>
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                <span>AI Rejected</span>
                <span>124</span>
              </div>
            </div>
          </div>

          <div className="admin-card">
            <h4 className="font-bold mb-4">OCR Verification Queue</h4>
            <div className="space-y-4">
              {[
                { label: 'Academic Transcripts', status: '84%', color: 'blue' },
                { label: 'Identity Documents', status: '98%', color: 'emerald' },
                { label: 'Extra-Curricular Certs', status: '45%', color: 'amber' }
              ].map((ocr, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1 font-bold">
                    <span>{ocr.label}</span>
                    <span className={`text-${ocr.color}-600`}>{ocr.status}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div style={{ width: ocr.status, height: '100%', background: `var(--${ocr.color})` }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-outline full-width mt-6 text-xs font-black">RE-SCAN ALL DOCUMENTS</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Admissions;
