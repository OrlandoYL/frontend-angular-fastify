export interface LoginResponse {
    success: boolean;
    data: LoginData;
  }
  
  export interface LoginData {
    token: string;
    email: string;
  }
  