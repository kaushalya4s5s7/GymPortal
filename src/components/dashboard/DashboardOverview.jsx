import React from 'react';
import StatCard from './StatCard';
import { FaUsers, FaUserCheck, FaUserTimes, FaCalendarCheck, FaBell } from 'react-icons/fa';

const DashboardOverview = () => {
  const stats = [
    {
      title: 'Total Members',
      value: '150',
      icon: <FaUsers className="text-blue-500" />,
      change: '+5% from last month'
    },
    {
      title: 'Active Memberships',
      value: '120',
      icon: <FaUserCheck className="text-green-500" />,
      change: '+2% from last month'
    },
    {
      title: 'Expired Memberships',
      value: '30',
      icon: <FaUserTimes className="text-red-500" />,
      change: '-3% from last month'
    },
    {
      title: "Today's Attendance",
      value: '45',
      icon: <FaCalendarCheck className="text-purple-500" />,
      change: '+10% from yesterday'
    },
    {
      title: 'Pending Renewals',
      value: '15',
      icon: <FaBell className="text-yellow-500" />,
      change: 'Due this week'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;