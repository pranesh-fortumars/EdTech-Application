import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, User, BookOpen } from 'lucide-react';
import './Timetable.css';

const schedule = [
  { day: 'Monday', classes: [
    { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Thiru. Muthuvel', room: 'Hall A' },
    { time: '10:15 - 11:15', subject: 'Physics', teacher: 'Dr. Sangeetha', room: 'Lab 2' },
    { time: '11:30 - 12:30', subject: 'Chemistry', teacher: 'Mrs. Kavitha', room: 'Hall B' }
  ]},
  { day: 'Tuesday', classes: [
    { time: '09:00 - 10:00', subject: 'Biology', teacher: 'Dr. Sangeetha', room: 'Hall C' },
    { time: '10:15 - 11:15', subject: 'English', teacher: 'Mr. Rajesh', room: 'Hall A' },
    { time: '11:30 - 12:30', subject: 'Computer Science', teacher: 'Thiru. Muthuvel', room: 'Lab 1' }
  ]},
  { day: 'Wednesday', classes: [
    { time: '09:00 - 10:00', subject: 'Mathematics', teacher: 'Thiru. Muthuvel', room: 'Hall A' },
    { time: '10:15 - 11:15', subject: 'Physics', teacher: 'Dr. Sangeetha', room: 'Lab 2' },
    { time: '11:30 - 12:30', subject: 'Tamil', teacher: 'Mrs. Ponni', room: 'Hall B' }
  ]},
];

const Timetable = () => {
  return (
    <div className="timetable-container professional-theme">
      <header className="module-header">
        <div className="header-text">
          <h1>Academic Timetable</h1>
          <p>Class 12-A • Academic Year 2025-26</p>
        </div>
        <div className="current-date glass">
          <Calendar size={18} />
          <span>May 05, 2026</span>
        </div>
      </header>

      <div className="timetable-grid">
        {schedule.map((day, idx) => (
          <div key={idx} className="day-column">
            <div className="day-header">{day.day}</div>
            <div className="classes-list">
              {day.classes.map((cls, cIdx) => (
                <motion.div 
                  key={cIdx}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="class-card card"
                >
                  <div className="class-time">
                    <Clock size={14} /> {cls.time}
                  </div>
                  <h3>{cls.subject}</h3>
                  <div className="class-details">
                    <span><User size={12} /> {cls.teacher}</span>
                    <span><MapPin size={12} /> {cls.room}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timetable;
