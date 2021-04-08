import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from '../catalog.service';
import { Pokemon } from '../pokemon';
import { IsNameTakenValidator } from './validators/IsNameTakenValidator';
import { VowelValidator } from './validators/VowelValidator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public pokemonForm: FormGroup | null = null;

  constructor(private builder: FormBuilder, private service:CatalogService) { }

  ngOnInit(): void {

    const nameV:IsNameTakenValidator = new IsNameTakenValidator(this.service);

    let config: any = Object.keys(new Pokemon());
    config.name = [
      "", 
      {
        validators:[Validators.required], 
        asyncValidators:[nameV]
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
        validators: [Validators.required, VowelValidator.instance], 
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
    alert(this.pokemonForm?.valid);
    return false;
  }

}
