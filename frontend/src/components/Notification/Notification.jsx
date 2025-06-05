import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [emailAlerts, setEmailAlerts] = useState(true);

  // Example notifications (replace with API call later)
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: 'Deadline Approaching: Tata Scholarship',
        deadline: '2025-06-01',
        type: 'Deadline Alert',
      },
      {
        id: 2,
        title: 'New Scholarship Added: Reliance UG Grant',
        deadline: '2025-07-10',
        type: 'New Scholarship',
      },
       {
        id: 3,
        title: 'New Scholarship Added: Reliance UG Grant',
        deadline: '2025-07-10',
        type: 'New Scholarship',
      },
       {
        id: 3,
        title: 'New Scholarship Added: Reliance UG Grant',
        deadline: '2025-07-10',
        type: 'New Scholarship',
      },
     
    ];
    setNotifications(dummyData);
  }, []);

  const toggleEmailAlerts = () => {
    setEmailAlerts(!emailAlerts);
    // Later: Send update to backend
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-4">
      <h1 className="text-2xl font-bold mb-4">🔔 Notifications</h1>

      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-700">Email Reminders</p>
   <label className="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    checked={emailAlerts}
    onChange={toggleEmailAlerts}
    className="sr-only peer"
  />
  {/* Track */}
  <div className="
      w-12 h-6 
      bg-gray-300 rounded-full 
      peer-checked:bg-green-500 
      transition-colors duration-300 ease-out 
      relative
    ">
    {/* Thumb */}
    <div className="
        absolute top-0.5 left-0.5 
        bg-white border border-gray-300 
        rounded-full h-5 w-5 
        transition-transform duration-300 ease-out 
        peer-checked:translate-x-6
      ">
    </div>
  </div>
  <span className="ml-3 text-sm font-medium text-gray-700">
    {emailAlerts ? 'Reminders On' : 'Reminders Off'}
  </span>
</label>

  








      </div>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications at the moment.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li key={note.id} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold">{note.title}</h2>
              <p className="text-sm text-gray-600">📅 Deadline: {note.deadline}</p>
              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {note.type}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;