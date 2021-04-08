import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from "@angular/forms";
@Directive({
    selector: '[vowel][ngModel],[vowel][formControl]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => VowelValidator),
            multi: true
        }
    ]
})
export class VowelValidator {

    public static instance: VowelValidator = new VowelValidator();

    constructor() { }
    validate(control: AbstractControl):ValidationErrors|null {

        const str: string = control.value as string;
        const vowels: string[] = ["a", "e", "i", "o", "u", "y"];

        for (let i: number = 0; i < vowels.length; i++) {
            if (str.includes(vowels[i]))
                return null;
        }

        return { noVowel: true };
    }
}
