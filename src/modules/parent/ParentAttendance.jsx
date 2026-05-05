import React from 'react';
import { CalendarCheck, Info, CheckCircle2, XCircle, Clock } from 'lucide-react';

const ParentAttendance = () => {
  const attendanceData = [
    { date: 'May 05', status: 'Present', subject: 'Physics', time: '09:00 AM' },
    { date: 'May 04', status: 'Present', subject: 'Mathematics', time: '10:30 AM' },
    { date: 'May 03', status: 'Late', subject: 'Chemistry', time: '09:15 AM' },
    { date: 'May 02', status: 'Present', subject: 'English', time: '11:00 AM' },
  ];

  return (
    <div className="parent-attendance p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <CalendarCheck className="text-emerald-600" /> Attendance Monitor
        </h1>
        <p className="text-secondary">Real-time attendance tracking for your child.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Overall Attendance', val: '94%', color: 'emerald' },
          { label: 'Days Present', val: '142', color: 'blue' },
          { label: 'Unexcused Absences', val: '2', color: 'rose' }
        ].map((stat, i) => (
          <div key={i} className="card glass p-6 text-center">
            <p className="text-sm text-secondary font-bold uppercase mb-2">{stat.label}</p>
            <strong className={`text-3xl text-${stat.color}-600`}>{stat.val}</strong>
          </div>
        ))}
      </div>

      <div className="card glass">
        <div className="p-4 border-b">
          <h3 className="font-bold">Recent History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="pro-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Check-in Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, i) => (
                <tr key={i}>
                  <td className="font-semibold">{row.date}</td>
                  <td>{row.subject}</td>
                  <td>{row.time}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      {row.status === 'Present' ? <CheckCircle2 size={14} className="text-emerald-500" /> : 
                       row.status === 'Late' ? <Clock size={14} className="text-amber-500" /> : 
                       <XCircle size={14} className="text-rose-500" />}
                      <span className={`text-sm font-bold ${
                        row.status === 'Present' ? 'text-emerald-600' : 
                        row.status === 'Late' ? 'text-amber-600' : 'text-rose-600'
                      }`}>{row.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParentAttendance;
