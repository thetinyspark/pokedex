import { Directive, forwardRef, Injectable } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";


@Directive({
    selector: '[haddock][ngModel],[haddock][formControl]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => HaddockValidator),
            multi: true
        }
    ]
})
@Injectable()
export class HaddockValidator {

    constructor() { }
    validate(control: AbstractControl): ValidationErrors | null {

        const forbidden: string[] = [
            "bachi bouzouk",
            "anthropopithèque",
            "marin d'eau douce",
            "boit sans soif"
        ]; 

        const userInput:string = control.value as string; 
        const found:string[] = forbidden.filter( insult => userInput.includes(insult));

        if( found.length === 0 ){
            return null;
        }
        else{
            return {insults: found};
        }
    }
}
