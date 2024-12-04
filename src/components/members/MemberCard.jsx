import React from 'react';

const MemberCard = ({ member }) => {
  const { name, status, photo, expiryDate } = member;
  
  const statusColor = status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';

  const handleRenewal = () => {
    // Add renewal logic here
    console.log('Sending renewal reminder to:', name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center space-x-4">
        <img src={photo} alt={name} className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className={`px-2 py-1 rounded-full text-sm ${statusColor}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <p className="text-sm text-gray-500 mt-1">Expires: {expiryDate}</p>
        </div>
      </div>
      {status === 'expired' && (
        <button
          onClick={handleRenewal}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Send Renewal Reminder
        </button>
      )}
    </div>
  );
};

export default MemberCard;