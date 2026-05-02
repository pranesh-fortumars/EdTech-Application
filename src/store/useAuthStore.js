import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: {
    id: '1',
    name: 'Arun Kumar',
    email: 'arun.k@auraed.in',
    role: 'student', // 'student', 'teacher', 'admin'
    institution: 'Government Higher Secondary School, Madurai',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arun',
    xp: 1250,
    level: 12,
    badges: ['Top Scorer', 'Science Whiz', 'Punctual Learner']
  },
  isAuthenticated: false, // Start as logged out for login flow testing
  isLoading: false,
  
  login: (credentials) => {
    set({ isLoading: true });
    // Simulate API call and role assignment
    setTimeout(() => {
      let role = 'student';
      let name = 'Arun Kumar';
      if (credentials.email.includes('teacher')) {
        role = 'teacher';
        name = 'Sangeetha Pandian';
      } else if (credentials.email.includes('admin')) {
        role = 'admin';
        name = 'Rajeshwaran S.';
      } else if (credentials.email.includes('parent')) {
        role = 'parent';
        name = 'Muthu Selvan (Parent)';
      }
      
      set({ 
        isAuthenticated: true, 
        isLoading: false,
        user: {
          ...useAuthStore.getState().user,
          name,
          role,
          email: credentials.email
        }
      });
    }, 1500);
  },
  
  logout: () => set({ user: null, isAuthenticated: false }),
  
  updateUser: (newData) => set((state) => ({
    user: { ...state.user, ...newData }
  }))
}));

export default useAuthStore;
