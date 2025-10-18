export default interface IUser {
  username: string;
  email: string;
  password_hash: string;
  last_sign: Date;
  is_Disabled: boolean;
  is_active: boolean;
}
