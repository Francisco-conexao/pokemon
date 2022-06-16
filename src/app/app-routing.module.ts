import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';



const routes: Routes = [
    {
        path: '',
        component: PokemonComponent
    },
    {
        path: 'pokemon',
        loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonModule)
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
