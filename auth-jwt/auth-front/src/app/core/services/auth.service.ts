import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) {}

  public sign(payload: { email: string; password: string }): Observable<any> {
    return this.http.post<{ token: string }>(`${this.url}/sign`, payload).pipe(
      map((response) => {
        localStorage.setItem('ACCESS_TOKEN', response.token);

        return this.router.navigate(['admin']);
      }),
      catchError((error) => {
        if (error.error.message) return throwError(() => error.error.message);

        return throwError(
          () =>
            'Estamos com problemas para conectar ao servidor. Tente novamente mais tarde!'
        );
      })
    );
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    return this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');

    if (!token) return false;

    const jwtHelper = new JwtHelperService();

    return !jwtHelper.isTokenExpired(token);
  }
}
