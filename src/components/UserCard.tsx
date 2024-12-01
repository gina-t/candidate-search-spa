import React from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/UserInterface';
import { useAcceptedUsers } from '../context/AcceptedUsersContext';
import { placeholderUser } from '../data/placeholderUser';

interface UserCardProps {
  user?: User;
  removeUser?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user = placeholderUser, removeUser }) => {
  const { addAcceptedUser } = useAcceptedUsers();
  const navigate = useNavigate();

  const handleAccept = () => {
    addAcceptedUser(user);
    navigate('/savedUsers');
  };

  const handleReject = () => {
    if (removeUser) {
      removeUser(user.id);
    }
  };

  return (
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 mx-4 my-2">
      <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-10 mt-4">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt="user avatar"
                src={user.avatar_url}
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="ml-4">
              <h3 className='text-base font-semibold text-gray-900'>{user.name}</h3>
              <p className='text-sm text-gray-900'>{user.username}</p>
              <p className='text-sm text-gray-900'>{user.location}</p>
              <p className='text-sm text-gray-900'>{user.email}</p>
              <a href={user.html_url} className="text-sm text-blue-500 hover:underline">{user.html_url}</a>
              <p className='text-sm text-gray-900'>{user.company}</p>
              <p className='text-sm text-gray-900'>{user.bio}</p> 
            </div>
          </div>
        </div>
        <div className="ml-4 mt-3 flex shrink-0">
          {/* accept button */}
          <button
            type="button"
            onClick={handleAccept}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 w-5 h-5 text-gray-400" />
            <span>Accept</span>
          </button>
          {/* reject button */}
          {removeUser && (
            <button
              type="button"
              onClick={handleReject}
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <MinusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 w-5 h-5 text-gray-400" />
              <span>Reject</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;