import { Directive, forwardRef, Injectable } from "@angular/core";
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CatalogService } from "src/app/catalog.service";
import { Pokemon } from "src/app/pokemon";


@Directive({
    selector: '[vowel][ngModel],[vowel][formControl]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => IsNameTakenValidator),
            multi: true
        }
    ]
})
@Injectable()
export class IsNameTakenValidator {

    constructor( private service:CatalogService ) { }
    validate(control: AbstractControl):Observable<ValidationErrors|null> {
        return this.service.getPokemonByName(control.value).pipe( 
            map( 
                (pokemon:Pokemon|null) => {
                    console.log(pokemon);
                    if( pokemon === null ){
                        return null;
                    }
                    else{
                        return {taken:true};
                    }
                }
            )
        )
    }
}
