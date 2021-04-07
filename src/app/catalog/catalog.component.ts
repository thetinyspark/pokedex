import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public types:string[] = [];
  public list:Pokemon[] = [];
  public currentType:string = "";
  public currentDesc:string = "";
  public currentName:string = "";

  constructor(private route:ActivatedRoute) { } 

  ngOnInit(): void {

    this.route.paramMap.subscribe( 
      (map:ParamMap)=>{
        console.log(map.get("id"));
      }
    )

    this.route.data.subscribe( 
      (data:any)=>{
        this.list = data.catalogData.pokemons;        
        this.types = data.catalogData.types;        
        this.currentType = data.catalogData.defaultType;   
      }, 
      (reason:any) => {
        console.log(reason);
      }
    );

  }

}
