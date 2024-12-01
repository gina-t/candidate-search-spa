import { User, UserId } from '../interfaces/UserInterface';

export const placeholderUser: User = {
  id: 0 as UserId,
  name: 'The Octocat',
  username: 'octocat',
  location: 'San Francisco',
  avatar_url: 'https://github.com/octocat.png',
  email: 'octocat@github.com',
  html_url: 'https://github.com/octocat',
  company: 'GitHub',
  bio: 'GitHub mascot and friendly cat.',
};