export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  status: UserStatus;
}

export enum UserStatus {
  ADMINISTRATOR = 'ADMINISTRATOR',
  MANAGER = 'MANAGER',
}
