import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  public pokemon:Pokemon|null = null;
  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.data.subscribe( 
      (data:any) => {
        this.pokemon = data.pokemonData;
      }
    )
  }

}
