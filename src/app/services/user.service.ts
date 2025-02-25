import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserListResponse } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl =  environment.URL_BASE + '/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.message));
      })
    );
  }
}
