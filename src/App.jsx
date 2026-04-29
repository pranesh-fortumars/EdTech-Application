import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import useAuthStore from './store/useAuthStore';

// Lazy load modules for performance
const StudentDashboard = lazy(() => import('./modules/dashboard/StudentDashboard'));
const CourseViewer = lazy(() => import('./modules/course/CourseViewer'));
const LiveClass = lazy(() => import('./modules/live/LiveClass'));
const Analytics = lazy(() => import('./modules/analytics/Analytics'));
// Mock components for other routes
const Placeholder = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ color: 'var(--text-secondary)' }}>This module is currently being optimized for your learning experience.</p>
  </div>
);

const App = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <div>Login Page Placeholder</div>;
  }

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="flex-center" style={{ height: '100%' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/courses" element={<CourseViewer />} />
            <Route path="/live" element={<LiveClass />} />
            <Route path="/community" element={<Placeholder title="Community Forum" />} />
            <Route path="/ai-tutor" element={<Placeholder title="Aura AI Tutor" />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/achievements" element={<Placeholder title="Your Achievements" />} />
            <Route path="/collaboration" element={<Placeholder title="Group Study" />} />
            <Route path="/settings" element={<Placeholder title="Settings" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
