import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule } from '@angular/forms';
import { ByTypePipe } from './by-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CatalogComponent,
    ByTypePipe
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
