import React, { useState } from 'react';
import { User } from '../types';
import { fetchUsers } from '../services/github';
import { UserList } from './UserList';

// the UserSearch component is a form that allows users to search for GitHub users by their username
// it uses the fetchUsers function to fetch the users from the GitHub API and displays the results using the UserList component
// the loading state is used to disable the search button while the search is in progress
export const UserSearch: React.FC = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const fetchedUsers = await fetchUsers(username);
      setUsers(fetchedUsers);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={username} onChange={onChange} placeholder="Search for users" />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      <UserList users={users} />
    </div>
  );
};
