export interface UserCredentialsData {
  username: string;
  password: string;
  picture?: string;
}

export interface UserLoginData {
  id: string;
  token: string;
  username: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}

export interface JwtCustomPayload {
  id: string;
  username: string;
}

export interface UserRegisterData {
  username: string;
  password: string;
}
