import React, { useState } from 'react';
import { fetchUsers } from '../services/github';
import { UserList } from '../components/UserList';
import { User } from '../types';

const CandidateSearch = () => {
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
        <input type="text" value={username} onChange={onChange} placeholder="Search for candidates" />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      <UserList users={users} />
    </div>
  );
};

export default CandidateSearch;
