export interface InterfaceMsg {
  id: string;
  current_user_id: string;
  target_user_id: string;
  username: string,
  target_username: string;
  createdAt: string;
  msg: string;
  accessTokens: any[];
}