import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, PokemonListComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SearchComponent, PokemonListComponent],
})
export class SharedModule {}
