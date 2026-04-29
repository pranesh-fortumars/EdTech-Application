import { create } from 'zustand';

const useDataStore = create((set) => ({
  // Faculty Data
  faculty: [
    { id: 1, name: 'Dr. Sangeetha P.', dept: 'Biology', classes: 5, last: '2 mins ago', status: 'Online' },
    { id: 2, name: 'Muthuvel P.', dept: 'Mathematics', classes: 4, last: '1 hour ago', status: 'Offline' },
    { id: 3, name: 'Kavitha R.', dept: 'Physics', classes: 6, last: 'Just now', status: 'Online' },
  ],
  addFaculty: (newFaculty) => set((state) => ({ 
    faculty: [...state.faculty, { ...newFaculty, id: Date.now(), last: 'Just now', status: 'Online' }] 
  })),
  removeFaculty: (id) => set((state) => ({
    faculty: state.faculty.filter(f => f.id !== id)
  })),

  // Room Data
  rooms: [
    { id: 1, name: 'Physics Group Study', users: 12, host: 'Selvi Kavitha', status: 'Live' },
    { id: 2, name: 'Calculus Doubt Clearing', users: 5, host: 'Thiru Muthuvel', status: 'Live' },
    { id: 3, name: 'Chemistry Prep Room', users: 8, host: 'Self-Organized', status: 'Idle' },
  ],
  addRoom: (newRoom) => set((state) => ({
    rooms: [...state.rooms, { ...newRoom, id: Date.now(), users: 1, status: 'Live' }]
  })),

  // Asset Data
  assets: [
    { id: 1, name: 'Smart Boards', status: '85% Operational', level: 'high' },
    { id: 2, name: 'Lab Equipment', status: '12% Maintenance', level: 'low' },
    { id: 3, name: 'Library Books', status: '92% Cataloged', level: 'mid' }
  ],
  updateAsset: (id, newStatus, newLevel) => set((state) => ({
    assets: state.assets.map(a => a.id === id ? { ...a, status: newStatus, level: newLevel } : a)
  })),

  // Student Data
  students: [
    { id: 'STU001', name: 'Arun Kumar', class: '12-A', attendance: '98%', avgGrade: 'A+', status: 'Excellent', risk: false },
    { id: 'STU002', name: 'Kavitha R.', class: '12-A', attendance: '95%', avgGrade: 'A', status: 'Good', risk: false },
    { id: 'STU003', name: 'Rajesh S.', class: '12-B', attendance: '72%', avgGrade: 'B', status: 'Needs Focus', risk: true },
  ],
  updateStudentStatus: (id, updates) => set((state) => ({
    students: state.students.map(s => s.id === id ? { ...s, ...updates } : s)
  })),
}));

export default useDataStore;
