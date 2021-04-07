import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { RouterTestingModule } from "@angular/router/testing";
import { CatalogService } from "./catalog.service";
import { POKEMON_LIST, POKEMON_TYPES, POKEMON_TYPE_ALL } from "./pokemon";
import { Observable, of } from "rxjs";
import { FormsModule } from "@angular/forms";
import { ByTypePipe } from "./by-type.pipe";
import { ByNamePipe } from "./by-name.pipe";
import { ByDescPipe } from "./by-desc.pipe";
import { CatalogResolver } from "./catalog.resolver";
import { PokemonDetailResolver } from "./pokemon-detail.resolver";
import { PokemonExistsGuard } from "./pokemon-exists.guard";
import { ActivatedRoute } from "@angular/router";

export const TEST_CONFIG_MODULE: any = {
    declarations: [
        CatalogComponent,
        PokemonDetailComponent,
        PokemonComponent,
        AppComponent,
        ByTypePipe,
        ByNamePipe,
        ByDescPipe,
    ],
    imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(
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
                  }
            ]
        ),
        FormsModule
    ]
};

export async function initTestModule() {
    await TestBed.configureTestingModule(TEST_CONFIG_MODULE).compileComponents();
    const service = TestBed.inject(CatalogService);
    spyOn(service, "getAll").and.returnValue(of(POKEMON_LIST));
    spyOn(service, "getTypes").and.returnValue(of(POKEMON_TYPES));
}