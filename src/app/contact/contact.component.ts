import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon';
import { HaddockValidator } from './validators/HaddockValidator';
import { IsNameTakenValidator } from './validators/IsNameTakenValidator';
import { VowelValidator } from './validators/VowelValidator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public pokemonForm: FormGroup | null = null;

  constructor(private builder: FormBuilder, private nameValidator:IsNameTakenValidator) { }

  ngOnInit(): void {

    let config: any = Object.keys(new Pokemon());
    config.name = [
      "", 
      {
        validators:[Validators.required], 
        asyncValidators:[this.nameValidator]
      }
    ];
    config.type = [
      "",
      {
        validators: [Validators.required], 
        asyncValidators:[]
      }
    ];
    config.desc = [
      "",
      {
        validators: [Validators.required, VowelValidator.instance, new HaddockValidator()], 
        asyncValidators:[]
      }
    ];

    config.img = "";
    this.pokemonForm = this.builder.group(config);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    Object.keys(new Pokemon()).forEach( 
      (key:string) => {
        const error:any|null = this.pokemonForm?.get(key)?.errors || null;
        if( error !== null ){
          console.log(key + " : " + JSON.stringify(error));
        }
      }
    );


    return false;
  }

}
