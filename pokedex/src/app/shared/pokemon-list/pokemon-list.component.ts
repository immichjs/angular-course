import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  public getAllPokemons: any;
  private setAllPokemons: any;

  public error: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.listAllPokemons.subscribe({
      next: (response) => {
        this.setAllPokemons = response.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error: () => {
        this.error = true;
      },
    });
  }

  public searchPokemon(value: string) {
    const filter = this.setAllPokemons.filter(
      (response: any) => !response.name.indexOf(value.toLowerCase())
    );

    this.getAllPokemons = filter;
  }
}
