import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaCamera, FaBell } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: <FaHome />, text: 'Dashboard' },
    { path: '/members', icon: <FaUsers />, text: 'Members' },
    { path: '/attendance', icon: <FaCamera />, text: 'Attendance' },
    { path: '/notifications', icon: <FaBell />, text: 'Notifications' }
  ];

  return (
    <nav className="fixed w-64 h-full bg-gray-800 text-white p-4">
      <div className="text-2xl font-bold mb-8 text-center">Gym Dashboard</div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              to={item.path}
              className={`flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                location.pathname === item.path ? 'bg-gray-700' : ''
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;