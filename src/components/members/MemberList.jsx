import React, { useState } from 'react';
import MemberCard from './MemberCard';

const MemberList = () => {
  const [members] = useState([
    {
      id: 1,
      name: 'John Doe',
      status: 'active',
      photo: 'https://via.placeholder.com/150',
      expiryDate: '2024-04-15'
    },
    {
      id: 2,
      name: 'Jane Smith',
      status: 'expired',
      photo: 'https://via.placeholder.com/150',
      expiryDate: '2024-02-28'
    }
  ]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Member Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MemberList;