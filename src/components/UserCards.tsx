import React from 'react';
import { User } from '../interfaces/UserInterface';
import UserCard from './UserCard';

interface UserCardsProps {
  users: User[];
  removeUser: (userId: number) => void;
}

const UserCards: React.FC<UserCardsProps> = ({ users, removeUser }) => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} removeUser={removeUser} />
      ))}
    </div>
  );
};

export default UserCards;