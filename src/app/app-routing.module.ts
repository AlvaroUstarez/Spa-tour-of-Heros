import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeCompraComponent } from './components/heroe-compra/heroe-compra.component';
import { FooterComponent } from './components/shared/footer/footer.component';




const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'heroes' , component: HeroesComponent},
    {path: 'abaut' , component: AbautComponent},
    {path: 'compra/:id' , component: HeroeCompraComponent},
    {path: 'buscar/:termino' , component: BuscadorComponent},
    {path: 'heroe/:id' , component: HeroeComponent},
    {path: '**' , pathMatch: 'full', redirectTo: 'home'},
    {path: 'abaut' , component: AbautComponent},
    {path: 'footer' , component: FooterComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
