import { create } from 'zustand';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // Start true while checking auth state
  
  initializeAuth: () => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch user profile from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          set({ 
            user: { id: firebaseUser.uid, ...userDoc.data(), email: firebaseUser.email }, 
            isAuthenticated: true,
            isLoading: false
          });
        } else {
          // Default fallback for new accounts
          const defaultUser = {
            name: firebaseUser.email.split('@')[0],
            role: 'student',
            institution: 'Government Higher Secondary School',
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firebaseUser.uid}`,
            xp: 0,
            level: 1,
            badges: []
          };
          await setDoc(doc(db, 'users', firebaseUser.uid), defaultUser);
          set({
            user: { id: firebaseUser.uid, ...defaultUser, email: firebaseUser.email },
            isAuthenticated: true,
            isLoading: false
          });
        }
      } else {
        set({ user: null, isAuthenticated: false, isLoading: false });
      }
    });
  },

  login: async (credentials) => {
    set({ isLoading: true });
    try {
      // In a real app we need passwords. For this mock UI we might just use a standard password.
      const password = credentials.password || 'password123';
      await signInWithEmailAndPassword(auth, credentials.email, password);
      // The onAuthStateChanged listener will handle setting the user state
    } catch (error) {
      console.error("Login failed", error);
      set({ isLoading: false });
      throw error;
    }
  },
  
  logout: async () => {
    set({ isLoading: true });
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
      set({ isLoading: false });
    }
  },
  
  updateUser: (newData) => set((state) => ({
    user: { ...state.user, ...newData }
  }))
}));

export default useAuthStore;
