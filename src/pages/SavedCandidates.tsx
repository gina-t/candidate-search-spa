import { useEffect, useState } from 'react';
import { User } from '../types';
import { UserList } from '../components/UserList';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<User[]>([]);

  useEffect(() => {
    // Fetch saved candidates from local storage or an API
    const fetchSavedCandidates = async () => {
      // Example: Fetch from local storage
      const saved = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      setSavedCandidates(saved);
    };

    fetchSavedCandidates();
  }, []);

  return (
    <>
      <h1>Potential Candidates</h1>
      <UserList users={savedCandidates} />
    </>
  );
};

export default SavedCandidates;
