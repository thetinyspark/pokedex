import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { ByTypePipe } from './by-type.pipe';
import { ByNamePipe } from './by-name.pipe';
import { ByDescPipe } from './by-desc.pipe';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { CatalogResolver } from './catalog.resolver';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonDetailResolver } from './pokemon-detail.resolver';
import { PokemonExistsGuard } from './pokemon-exists.guard';
import { BerryChartComponent } from './berry-chart/berry-chart.component';
import { SocketIoModule } from 'ngx-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CatalogComponent,
    ByTypePipe,
    ByNamePipe,
    ByDescPipe,
    PokemonDetailComponent,
    BerryChartComponent
  ],
  imports: [
    SocketIoModule.forRoot(
      {
        url:"http://localhost:3000", options: {}
      }
    ),
    RouterModule.forRoot( 
      [
        {
          path: "catalog", 
          component: CatalogComponent, 
          resolve: {
            catalogData: CatalogResolver
          }
        }, 
        {
          path: "pokemon/:id", 
          component: PokemonDetailComponent, 
          resolve: {
            pokemonData: PokemonDetailResolver
          }, 
          canActivate: [PokemonExistsGuard]
        },
        {
          path: "berries", 
          component: BerryChartComponent
        }
      ]
    ),
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
