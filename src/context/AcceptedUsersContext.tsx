import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../interfaces/UserInterface';

interface AcceptedUsersContextProps {
  acceptedUsers: User[];
  addAcceptedUser: (user: User) => void;
}

const AcceptedUsersContext = createContext<AcceptedUsersContextProps | undefined>(undefined);

export const AcceptedUsersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [acceptedUsers, setAcceptedUsers] = useState<User[]>([]);

  const addAcceptedUser = (user: User) => {
    setAcceptedUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <AcceptedUsersContext.Provider value={{ acceptedUsers, addAcceptedUser }}>
      {children}
    </AcceptedUsersContext.Provider>
  );
};

export const useAcceptedUsers = (): AcceptedUsersContextProps => {
  const context = useContext(AcceptedUsersContext);
  if (!context) {
    throw new Error('useAcceptedUsers must be used within an AcceptedUsersProvider');
  }
  return context;
};