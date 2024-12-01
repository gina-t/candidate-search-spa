import React from 'react';
import { useAcceptedUsers } from '../context/AcceptedUsersContext';
import UserCard from '../components/UserCard';


const SavedUsersPage: React.FC = () => {
  const { acceptedUsers, removeAcceptedUser } = useAcceptedUsers();

  return (
    <div>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-semibold text-gray-900">Saved Users</h3>
      </div>
      <div>
        {acceptedUsers.map((user) => (
          <UserCard key={user.id} user={user} removeUser={removeAcceptedUser} />
        ))}
      </div>
    </div>
  );
};

export default SavedUsersPage;