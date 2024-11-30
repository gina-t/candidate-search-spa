import React from 'react';
import { useAcceptedUsers } from '../context/AcceptedUsersContext';
import UserCard from '../components/UserCard';

const SavedUsersPage: React.FC = () => {
  const { acceptedUsers } = useAcceptedUsers();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Saved Users</h1>
      <div>
        {acceptedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default SavedUsersPage;