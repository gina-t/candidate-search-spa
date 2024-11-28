export type UserId = number & { readonly brand: unique symbol };

export interface User {
  readonly id: UserId;
  avatar_url: string;
  html_url: string;
  login: string;
}

export interface GitHubUserResponse {
  id: number;
  avatar_url: string;
  html_url: string;
  login: string;
}