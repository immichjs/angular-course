import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;
  public isLoading: boolean = false;
  public error: boolean = false;

  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.route.snapshot.params['id'];
    const pokemon = this.api.getPokemon(`${this.urlPokemon}/${id}`);
    const name = this.api.getPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe({
      next: (response) => {
        this.pokemon = response;
        this.isLoading = true;
      },
      error: () => {
        this.error = true;
      },
    });
  }
}
