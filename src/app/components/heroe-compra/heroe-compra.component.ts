import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Compra } from '../../models/compra';





@Component({
  selector: 'app-heroe-compra',
  templateUrl: './heroe-compra.component.html',
  styleUrls: ['./heroe-compra.component.css']
})

export class HeroeCompraComponent implements OnInit {


  heroes: Array<Heroe>;
  heroe: any ={};
  compra: Compra;
  compras: Array<Compra>;

  constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute) {

    heroes : _heroesService.getHeroes();
    
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);

    })

    console.log(this.heroe);
    console.log(this.heroes);

  }
    
  ngOnInit() {
  }

  comprar(){
    
  }
  


}
