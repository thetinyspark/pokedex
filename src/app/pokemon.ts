export class Pokemon {
    public id:number = 0; 
    public name:string = ""; 
    public type:string = ""; 
    public desc:string = ""; 
    public img:string = "";
}

export const POKEMON_LIST:Pokemon[] = [
    {
        id: 1, 
        name: "Pikachu", 
        type: "Electrique", 
        desc: "Le pokémon le plus mignon du monde", 
        img: "/assets/img/pikachu.jpg"
    }, 
    {
        id: 2, 
        name: "Salamèche", 
        type: "Feu", 
        desc: "Le pokémon le plus mignon du monde", 
        img: "/assets/img/salameche.jpg"
    }, 
    {
        id: 3, 
        name: "Carapuce", 
        type: "Eau", 
        desc: "Le pokémon le plus mignon du monde", 
        img: "/assets/img/carapuce.jpg"
    }, 
    {
        id: 4, 
        name: "Bulbizarre", 
        type: "Plante", 
        desc: "Le pokémon le plus mignon du monde", 
        img: "/assets/img/bulbizarre.jpg"
    }
];


export const POKEMON_TYPE_ALL:string = "All";

export const POKEMON_TYPES:string[] = [
    POKEMON_TYPE_ALL,
    "Electrique", 
    "Feu",
    "Eau",
    "Plante"
];


