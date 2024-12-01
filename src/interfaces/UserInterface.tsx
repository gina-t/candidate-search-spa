export type UserId = number & { readonly brand: unique symbol };

export interface User {
  readonly id: UserId;
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
  bio: string;
}

export interface GitHubUserResponse {
  id: number;
  login: string;  
  name: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
  bio: string;
  url: string; 
}