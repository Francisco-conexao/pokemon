import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokemonRoutingModule } from "./pokemon-routing.module";
import { PokemonComponent } from "./pokemon.component";

@NgModule({
    declarations: [PokemonComponent],
    imports: [
        FormsModule,
        CommonModule,
        PokemonRoutingModule
    ]
})
export class PokemonModule {}
