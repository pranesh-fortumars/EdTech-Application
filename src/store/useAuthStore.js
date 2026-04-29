import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: {
    id: '1',
    name: 'Alex Rivera',
    email: 'alex@auraed.com',
    role: 'student', // 'student', 'teacher', 'admin'
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    xp: 1250,
    level: 12,
    badges: ['Early Bird', 'Quiz Master', 'Fast Learner']
  },
  isAuthenticated: true,
  isLoading: false,
  
  login: (credentials) => {
    set({ isLoading: true });
    // Simulate API call
    setTimeout(() => {
      set({ isAuthenticated: true, isLoading: false });
    }, 1000);
  },
  
  logout: () => set({ user: null, isAuthenticated: false }),
  
  updateUser: (newData) => set((state) => ({
    user: { ...state.user, ...newData }
  }))
}));

export default useAuthStore;
