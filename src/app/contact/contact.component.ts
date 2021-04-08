import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from '../pokemon';
import { VowelValidator } from './validators/VowelValidator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public pokemonForm: FormGroup | null = null;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {

    let config: any = Object.keys(new Pokemon());
    config.name = ["", Validators.required];
    config.type = [
      "",
      {
        validators: [Validators.required]
      }
    ];
    config.desc = ["", [Validators.required, VowelValidator.instance ]];
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
