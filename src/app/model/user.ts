export interface User {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  }
  
  export interface UserListResponse {
    status: string;
    message: string;
    data: User[];
  }
  