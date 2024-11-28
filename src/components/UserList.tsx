import { User } from '../types';

interface UserListProps {
  users: User[];
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <img src={user.avatar_url} alt={user.login} />
          <a href={user.html_url}>{user.login}</a>
        </li>
      ))}
    </ul>
  );
};