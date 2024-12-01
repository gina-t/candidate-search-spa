import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import { AcceptedUsersProvider } from './context/AcceptedUsersContext';
import UserSearchPage from './pages/UserSearchPage';
import SavedUsersPage from './pages/SavedUsersPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import SignOutPage from './pages/SignOutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'userSearch',
        element: <UserSearchPage />,
      },
      {
        path: 'savedUsers',
        element: <SavedUsersPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'signOut',
        element: <SignOutPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AcceptedUsersProvider>
        <RouterProvider router={router} />
      </AcceptedUsersProvider>
    </React.StrictMode>
  );
}