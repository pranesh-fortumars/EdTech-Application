import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import useAuthStore from './store/useAuthStore';
import Login from './modules/auth/Login';

// Lazy load modules for performance
const StudentDashboard = lazy(() => import('./modules/dashboard/StudentDashboard'));
const TeacherDashboard = lazy(() => import('./modules/dashboard/TeacherDashboard'));
const AdminDashboard = lazy(() => import('./modules/dashboard/AdminDashboard'));
const CourseViewer = lazy(() => import('./modules/course/CourseViewer'));
const LiveClass = lazy(() => import('./modules/live/LiveClass'));
const Analytics = lazy(() => import('./modules/analytics/Analytics'));
const Community = lazy(() => import('./modules/collaboration/Community'));
const Achievements = lazy(() => import('./modules/gamification/Achievements'));
const AuraKnowledgeGraph = lazy(() => import('./modules/ai/HolographicGraph'));
const CollaborationHub = lazy(() => import('./modules/collaboration/CollaborationHub'));
const SchoolAnalytics = lazy(() => import('./modules/analytics/SchoolAnalytics'));
const FeeGateway = lazy(() => import('./modules/finance/FeeGateway'));
const AIQuizEngine = lazy(() => import('./modules/ai/AIQuizEngine'));
const UserManagement = lazy(() => import('./modules/admin/UserManagement'));
const ParentDashboard = lazy(() => import('./modules/parent/ParentDashboard'));
const SmartAssetTracker = lazy(() => import('./modules/admin/SmartAssetTracker'));
const AdminConfig = lazy(() => import('./modules/admin/AdminConfig'));
const FacultyHub = lazy(() => import('./modules/faculty/FacultyHub'));
const Settings = lazy(() => import('./modules/settings/Settings'));
const Timetable = lazy(() => import('./modules/dashboard/Timetable'));
const HelpCenter = lazy(() => import('./modules/support/HelpCenter'));
const Admissions = lazy(() => import('./modules/admin/Admissions'));
const Infrastructure = lazy(() => import('./modules/admin/Infrastructure'));
const AuditLogs = lazy(() => import('./modules/admin/AuditLogs'));
const ParentAttendance = lazy(() => import('./modules/parent/ParentAttendance'));
const ParentReports = lazy(() => import('./modules/parent/ParentReports'));
const ParentSupport = lazy(() => import('./modules/parent/ParentSupport'));
const TransportTracker = lazy(() => import('./modules/parent/TransportTracker'));
const HealthSafety = lazy(() => import('./modules/parent/HealthSafety'));
const NoticeBoard = lazy(() => import('./modules/parent/NoticeBoard'));


// Mock components for other routes
const Placeholder = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ color: 'var(--text-secondary)' }}>This module is currently being optimized for your learning experience.</p>
  </div>
);

const App = () => {
  const { isAuthenticated, user } = useAuthStore();

  return (
    <Router>
      <Suspense fallback={<div className="flex-center" style={{ height: '100vh', background: 'white' }}>Loading...</div>}>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" replace />} />

          {/* Protected Routes */}
          <Route 
            path="/*" 
            element={
              isAuthenticated ? (
                <Layout>
                  <Routes>
                    <Route 
                      path="/" 
                      element={
                        user?.role === 'admin' ? <AdminDashboard /> : 
                        user?.role === 'teacher' ? <TeacherDashboard /> : 
                        user?.role === 'parent' ? <ParentDashboard /> :
                        <StudentDashboard />
                      } 
                    />
                    <Route path="/courses" element={<CourseViewer />} />
                    <Route path="/timetable" element={<Timetable />} />
                    <Route path="/live" element={<LiveClass />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/ai-tutor" element={<AuraKnowledgeGraph />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/achievements" element={<Achievements />} />
                    <Route path="/collaboration" element={<CollaborationHub />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/faculty" element={<FacultyHub />} />
                    <Route path="/admin-config" element={<AdminConfig />} />
                    <Route path="/school-stats" element={<SchoolAnalytics />} />
                    <Route path="/fees" element={<FeeGateway />} />
                    <Route path="/ai-quiz" element={<AIQuizEngine />} />
                    <Route path="/users" element={<UserManagement />} />
                    <Route path="/parent" element={<ParentDashboard />} />
                    <Route path="/assets" element={<SmartAssetTracker />} />
                    <Route path="/help" element={<HelpCenter />} />
                    <Route path="/admissions" element={<Admissions />} />
                    <Route path="/infrastructure" element={<Infrastructure />} />
                    <Route path="/audit" element={<AuditLogs />} />
                    <Route path="/parent-attendance" element={<ParentAttendance />} />
                    <Route path="/parent-reports" element={<ParentReports />} />
                    <Route path="/parent-support" element={<ParentSupport />} />
                    <Route path="/transport" element={<TransportTracker />} />
                    <Route path="/health-safety" element={<HealthSafety />} />
                    <Route path="/notices" element={<NoticeBoard />} />
                    <Route path="*" element={<Navigate to="/" replace />} />

                  </Routes>
                </Layout>
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
