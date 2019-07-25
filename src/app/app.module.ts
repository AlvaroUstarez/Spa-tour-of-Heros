import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


//Rutas
import { AppRoutingModule } from './app-routing.module'


//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AbautComponent } from './components/abaut/abaut.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from './services/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTargetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeCompraComponent } from './components/heroe-compra/heroe-compra.component';
import { FooterComponent } from './components/shared/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AbautComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTargetaComponent,
    HeroeCompraComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
