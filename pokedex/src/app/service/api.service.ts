import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';

  constructor(private http: HttpClient) {}

  get listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((response) => response),
      tap((response) => {
        response.results.map((pokemon: any) => {
          this.getPokemon(pokemon.url).subscribe((response) => {
            pokemon.status = response;
          });
        });
      })
    );
  }

  public getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
