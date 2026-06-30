import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from './firebase.js';

const mockData = {
  faculty: [
    { id: "fac1", name: 'Dr. Sangeetha P.', dept: 'Biology', classes: 5, last: '2 mins ago', status: 'Online' },
    { id: "fac2", name: 'Muthuvel P.', dept: 'Mathematics', classes: 4, last: '1 hour ago', status: 'Offline' },
    { id: "fac3", name: 'Kavitha R.', dept: 'Physics', classes: 6, last: 'Just now', status: 'Online' },
  ],
  rooms: [
    { id: "rm1", name: 'Physics Group Study', users: 12, host: 'Selvi Kavitha', status: 'Live' },
    { id: "rm2", name: 'Calculus Doubt Clearing', users: 5, host: 'Thiru Muthuvel', status: 'Live' },
    { id: "rm3", name: 'Chemistry Prep Room', users: 8, host: 'Self-Organized', status: 'Idle' },
  ],
  assets: [
    { id: "ast1", name: 'Smart Boards', status: '85% Operational', level: 'high' },
    { id: "ast2", name: 'Lab Equipment', status: '12% Maintenance', level: 'low' },
    { id: "ast3", name: 'Library Books', status: '92% Cataloged', level: 'mid' }
  ],
  students: [
    { id: 'STU001', name: 'Arun Kumar', class: '12-A', attendance: '98%', avgGrade: 'A+', status: 'Excellent', risk: false },
    { id: 'STU002', name: 'Kavitha R.', class: '12-A', attendance: '95%', avgGrade: 'A', status: 'Good', risk: false },
    { id: 'STU003', name: 'Rajesh S.', class: '12-B', attendance: '72%', avgGrade: 'B', status: 'Needs Focus', risk: true },
  ]
};

export const seedDatabase = async () => {
  try {
    console.log("Starting seed process...");
    
    // Seed Faculty
    for (const faculty of mockData.faculty) {
      await setDoc(doc(collection(db, 'faculty'), faculty.id.toString()), faculty);
    }
    console.log("Faculty seeded.");

    // Seed Rooms
    for (const room of mockData.rooms) {
      await setDoc(doc(collection(db, 'rooms'), room.id.toString()), room);
    }
    console.log("Rooms seeded.");

    // Seed Assets
    for (const asset of mockData.assets) {
      await setDoc(doc(collection(db, 'assets'), asset.id.toString()), asset);
    }
    console.log("Assets seeded.");

    // Seed Students
    for (const student of mockData.students) {
      await setDoc(doc(collection(db, 'students'), student.id.toString()), student);
    }
    console.log("Students seeded.");

    console.log("Database seed complete!");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }
};
