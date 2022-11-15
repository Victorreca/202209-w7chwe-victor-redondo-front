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
