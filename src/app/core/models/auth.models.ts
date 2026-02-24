export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user?: {
    id: string;
    email: string;
    name?: string;
    roles?: string[];
  };
}

export interface AuthState {
  token: string | null;
  user?: LoginResponse['user'] | null;
}
