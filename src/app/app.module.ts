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

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CatalogComponent,
    ByTypePipe,
    ByNamePipe,
    ByDescPipe
  ],
  imports: [
    RouterModule.forRoot( 
      [
        {
          path: "catalog/:id", 
          component: CatalogComponent, 
          resolve: {
            catalogData: CatalogResolver
          }
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
