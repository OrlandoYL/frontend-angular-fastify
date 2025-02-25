export interface ApiErrorResponse {
    status: string;
    message: string;
    errors: ApiErrorDetail[];
  }
  
  export interface ApiErrorDetail {
    type: string;
    value: string;
    msg: string;
    path: string;
    location: string;
  }
  