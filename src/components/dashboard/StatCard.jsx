import React from 'react';

const StatCard = ({ title, value, icon, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xl">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-gray-500">{change}</div>
    </div>
  );
};

export default StatCard;