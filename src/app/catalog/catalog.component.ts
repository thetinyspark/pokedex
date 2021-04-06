import { Component, OnInit } from '@angular/core';
import { Pokemon, POKEMON_LIST, POKEMON_TYPES, POKEMON_TYPE_ALL } from '../pokemon';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public types:string[] = POKEMON_TYPES;
  public list:Pokemon[] = POKEMON_LIST;
  public currentType:string = POKEMON_TYPE_ALL;
  constructor() { }

  ngOnInit(): void {
  }

}
