import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
    nombre = null;
    buscar = null;

    pokeNames:any = [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur",
        "Charmander",
        "Charmeleon",
        "Charizard",
        "Squirtle",
        "Wartortle",
        "Blastoise",
        "Caterpie",
        "Metapod",
        "Butterfree",
        "Weedle",
        "Kakuna",
        "Beedrill",
        "Pidgey",
        "Pidgeotto",
        "Pidgeot",
        "Rattata",
        "Raticate",
        "Spearow",
        "Fearow",
        "Ekans",
        "Arbok",
        "Pikachu",
        "Raichu",
        "Sandshrew",
        "Sandslash",
        "Nidoran♀",
        "Nidorina",
        "Nidoqueen",
        "Nidoran♂",
        "Nidorino",
        "Nidoking",
        "Clefairy",
        "Clefable",
        "Vulpix",
        "Ninetales",
        "Jigglypuff",
        "Wigglytuff",
        "Zubat",
        "Golbat",
        "Oddish",
        "Gloom",
        "Vileplume",
        "Paras",
        "Parasect",
        "Venonat",
        "Venomoth",
        "Diglett",
        "Dugtrio",
        "Meowth",
        "Persian",
        "Psyduck",
        "Golduck",
        "Mankey",
        "Primeape",
        "Growlithe",
        "Arcanine",
        "Poliwag",
        "Poliwhirl",
        "Poliwrath",
        "Abra",
        "Kadabra",
        "Alakazam",
        "Machop",
        "Machoke",
        "Machamp",
        "Bellsprout",
        "Weepinbell",
        "Victreebel",
        "Tentacool",
        "Tentacruel",
        "Geodude",
        "Graveler",
        "Golem",
        "Ponyta",
        "Rapidash",
        "Slowpoke",
        "Slowbro",
        "Magnemite",
        "Magneton",
        "Farfetch'd",
        "Doduo",
        "Dodrio",
        "Seel",
        "Dewgong",
        "Grimer",
        "Muk",
        "Shellder",
        "Cloyster",
        "Gastly",
        "Haunter",
        "Gengar",
        "Onix",
        "Drowzee",
        "Hypno",
        "Krabby",
        "Kingler",
        "Voltorb",
        "Electrode",
        "Exeggcute",
        "Exeggutor",
        "Cubone",
        "Marowak",
        "Hitmonlee",
        "Hitmonchan",
        "Lickitung",
        "Koffing",
        "Weezing",
        "Rhyhorn",
        "Rhydon",
        "Chansey",
        "Tangela",
        "Kangaskhan",
        "Horsea",
        "Seadra",
        "Goldeen",
        "Seaking",
        "Staryu",
        "Starmie",
        "Mr. Mime",
        "Scyther",
        "Jynx",
        "Electabuzz",
        "Magmar",
        "Pinsir",
        "Tauros",
        "Magikarp",
        "Gyarados",
        "Lapras",
        "Ditto",
        "Eevee",
        "Vaporeon",
        "Jolteon",
        "Flareon",
        "Porygon",
        "Omanyte",
        "Omastar",
        "Kabuto",
        "Kabutops",
        "Aerodactyl",
        "Snorlax",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Dratini",
        "Dragonair",
        "Dragonite",
        "Mewtwo",
        "Mew"
    ];
    pokeNamesFilters:any;

    pokemon:any = null;

    historialPokemon:any = [] ;

    constructor(private http:HttpClient) {

        
        this.historialPokemon = (JSON.parse(localStorage.getItem('POKEMON')))?JSON.parse(localStorage.getItem('POKEMON')):[];
        
    }

    ngOnInit(): void {

    }

    getItems(event){
        this.pokeNamesFilters = this.pokeNames.filter(items =>{
            return items.toLowerCase().indexOf(event.toLowerCase())==0;
        })
    }
    
    async verInfo(nombre){
        this.pokeNamesFilters = null;
        this.pokemon = await this.http.get('https://pokeapi.co/api/v2/pokemon/'+nombre.toLowerCase().replace(/[^a-zA-Z ]/g, ""))
        .toPromise()
        .catch(data=>{
            console.log(data);
        }); 
        this.pokemon.img = this.pokemon.sprites.other.home.front_default;
        
        console.log(this.historialPokemon.indexOf(nombre));

        this.guardarHistorial(nombre);
    }


    guardarHistorial(nombre){
        if(this.historialPokemon.indexOf(nombre) <0){
            if(this.historialPokemon.length>5){
                this.historialPokemon.splice(0,1);
            }
            this.historialPokemon.push(nombre);
            localStorage.setItem('POKEMON',JSON.stringify(this.historialPokemon));
        }
    }
}
