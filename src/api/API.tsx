import { GitHubUserResponse, User, UserId } from '../interfaces/UserInterface';

const mapGitHubUserResponse = (response: GitHubUserResponse): User  =>{
  return {
    id: response.id as UserId,
    name: response.name,
    username: response.login,
    location: response.location,
    avatar_url: response.avatar_url,
    email: response.email,
    html_url: response.html_url,
    company: response.company,
  };
};

// fetch multiple users from github api
export const fetchUsers = async (username: string): Promise<User[]> => {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Invalid API response, check the network tab');
    }
    return data.items.map((user: GitHubUserResponse) => mapGitHubUserResponse(user));
  } catch (err) {
    console.error('An error occurred', err);
    return [];
  }
};

// search for users on github api
// export const searchGitHub = async (username: string): Promise<User[]> => {
//   try {
//     const start = Math.floor(Math.random() * 100000000) + 1;
//     console.log(import.meta.env);
//     const response = await fetch(`https://api.github.com/users?since=${start}`,{
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//         },
//       }
//     );
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error('Invalid API response, check the network tab');
//     }
//     return data.map((user: GitHubUserResponse) => mapGitHubUserResponse(user));
//   } catch (err) {
//     console.error('An error occurred', err);
//     return [];
//   }
// };
// fetch a specific user from github api
// export const fetchUser = async (username: string): Promise<User[]> => {
//   try {
//     const response = await fetch(`https://api.github.com/search/users?q={username}`, {
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
//       },
//     });
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error('Invalid API response, check the network tab');
//     }
//     return data.items.map((user: GitHubUserResponse) => mapGitHubUserResponse(user));
//   } catch (err) {
//     throw new Error('Failed to fetch user');
//   }
// };
