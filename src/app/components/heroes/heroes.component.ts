import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService,) { 

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  //----------------------------------------------------------------------------------------------------//
  // Este metodo ya me envia a la pagina que quiero mostrar la posicion del array que quiero mostrar    //
  // que recibe como parametro desde el html                                                            //
  //                                                                                                    //
  // verHeroe ( idx: number){                                                                           //
  //   this.router.navigate(['/heroe', idx]);                                                           //
  // }                                                                                                  //
  //----------------------------------------------------------------------------------------------------//

}
