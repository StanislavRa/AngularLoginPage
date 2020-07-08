export interface User {
  id: string;
  login: string;
  password: string;
  email: string;
  companyName?: string;
  profileImageUrl?: string;
}
