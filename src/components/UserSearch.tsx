import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../api/API';
import { User } from '../interfaces/UserInterface';
import { useLocation } from 'react-router-dom'; 


interface UserSearchProps {
  onSearchResults: (users: User[]) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSearchResults }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query');
    if (query) {
      setUsername(query);
      onSearch(query);
    }
  }, [location.search]);

  const onSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log(`Searching for users with query: ${query}`);
      const fetchedUsers = await fetchUsers(query);
      console.log('Fetched users:', fetchedUsers);
      if (fetchedUsers.length === 0) {
        setError('No users found');
      } else {
        onSearchResults(fetchedUsers);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-lg font-semibold text-gray-900">Search results for {username}</h3>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserSearch;