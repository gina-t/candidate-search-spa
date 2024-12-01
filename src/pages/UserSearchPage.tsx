import React, { useState } from 'react';
import UserSearch from '../components/UserSearch';
import UserCards from '../components/UserCards';
import { User } from '../interfaces/UserInterface';
import UserCard from '../components/UserCard';

const UserSearchPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleSearchResults = (fetchedUsers: User[]) => {
    setUsers(fetchedUsers);
  };

  const removeUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <UserSearch onSearchResults={handleSearchResults} />
      {users.length === 0 ? (
        <UserCard />
      ) : (
        <UserCards users={users} removeUser={removeUser} />
      )}
    </div>
  );
};

export default UserSearchPage;