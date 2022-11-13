export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  name: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  email: string;
}

export interface UserStructure {
  username: string;
  name: string;
}
