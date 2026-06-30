import { create } from 'zustand';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

const useDataStore = create((set) => ({
  faculty: [],
  rooms: [],
  assets: [],
  students: [],
  isLoading: false,

  fetchInitialData: async () => {
    set({ isLoading: true });
    try {
      const facultySnap = await getDocs(collection(db, 'faculty'));
      const roomsSnap = await getDocs(collection(db, 'rooms'));
      const assetsSnap = await getDocs(collection(db, 'assets'));
      const studentsSnap = await getDocs(collection(db, 'students'));

      set({
        faculty: facultySnap.docs.map(d => ({ id: d.id, ...d.data() })),
        rooms: roomsSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        assets: assetsSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        students: studentsSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        isLoading: false
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      set({ isLoading: false });
    }
  },

  addFaculty: async (newFaculty) => {
    try {
      const docRef = await addDoc(collection(db, 'faculty'), { 
        ...newFaculty, 
        last: 'Just now', 
        status: 'Online' 
      });
      set((state) => ({ 
        faculty: [...state.faculty, { ...newFaculty, id: docRef.id, last: 'Just now', status: 'Online' }] 
      }));
    } catch (error) {
      console.error("Error adding faculty:", error);
    }
  },
  
  removeFaculty: async (id) => {
    try {
      await deleteDoc(doc(db, 'faculty', id.toString()));
      set((state) => ({
        faculty: state.faculty.filter(f => f.id !== id)
      }));
    } catch (error) {
      console.error("Error removing faculty:", error);
    }
  },

  addRoom: async (newRoom) => {
    try {
      const docRef = await addDoc(collection(db, 'rooms'), { 
        ...newRoom, 
        users: 1, 
        status: 'Live' 
      });
      set((state) => ({
        rooms: [...state.rooms, { ...newRoom, id: docRef.id, users: 1, status: 'Live' }]
      }));
    } catch (error) {
      console.error("Error adding room:", error);
    }
  },

  updateAsset: async (id, newStatus, newLevel) => {
    try {
      await updateDoc(doc(db, 'assets', id.toString()), { status: newStatus, level: newLevel });
      set((state) => ({
        assets: state.assets.map(a => a.id === id ? { ...a, status: newStatus, level: newLevel } : a)
      }));
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  },

  updateStudentStatus: async (id, updates) => {
    try {
      await updateDoc(doc(db, 'students', id.toString()), updates);
      set((state) => ({
        students: state.students.map(s => s.id === id ? { ...s, ...updates } : s)
      }));
    } catch (error) {
      console.error("Error updating student:", error);
    }
  },
}));

export default useDataStore;
