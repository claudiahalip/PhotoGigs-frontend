export interface Photographer {
  id: number;
  name: string;
  email?: string;
  phone_number?: string;
  bio?: string;
  location?: string;
  instagram?: string;
  portfolio_url?: string;
  image_url: string;
  website: string;
  years_of_experience: number;
  city: string;
  state: string;
  reviews?: Review[];
}

export interface Review {
  id: number;
  title?: string;
  description?: string;
  content: string;
  rating?: number;
  photographer_id?: number;
  user_id?: number;
  created_at: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface UserSession {
  logged_in: boolean;
  user: User;
}

export interface Credentials {
  username?: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
}
