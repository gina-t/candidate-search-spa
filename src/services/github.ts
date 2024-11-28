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