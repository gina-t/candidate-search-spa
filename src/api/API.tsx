const searchGitHub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    console.log(import.meta.env);
    const response = await fetch(`https://api.github.com/users?since=${start}`,{
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      }
    );
    console.log('Response:', response);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    console.log('Data:', data);
    return data;
  } catch (err) {
    console.log('an error occurred', err);
    return [];
  }
};

const searchGitHubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    return data;
  } catch (err) {
    console.log('an error occurred', err);
    return {};
  }
};

import { GitHubUserResponse, User, UserId } from "../types";

export function mapGitHubUserResponse(response: GitHubUserResponse): User {
  return {
    id: response.id as UserId,
    avatar_url: response.avatar_url,
    html_url: response.html_url,
    login: response.login,
  };
}
// fetch multiple users from github api
export async function fetchUsers(username: string): Promise<User[]> {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    return data.items.map((item: GitHubUserResponse) => mapGitHubUserResponse(item));
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}

export { searchGitHub, searchGitHubUser };
