import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';
import { Compra } from '../../models/compra';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./../../app.component.css']
})

export class HeroeComponent {


  compra: Compra;
  compras = new Array<Compra>();
  idCompra: any;
  idTarjeta: number;
  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService, ) {

    this.activatedRoute.params.subscribe(params => {

      console.log(params['id']);
      this.heroe = this._heroesService.getHeroe(params['id']);
      this.idTarjeta = params['id'];

      this.compras = new Array<Compra>();
      
    })

    this.compra = new Compra();



  }

  ngOnInit() {
  }

  comprar() {
    
    this.compra.idTarjeta = this.idTarjeta;
    this.compra.nombreTarjeta = this.heroe.nombre;

    if (localStorage.getItem("1") == null) {
      
      localStorage.setItem("1", JSON.stringify(this.compra));
      localStorage.setItem("idUltimacompra", "1");

    } else {
      let idString = localStorage.getItem("idUltimacompra");

      this.idCompra = parseInt(idString);
      this.idCompra++;

      localStorage.setItem(this.idCompra.toString(), JSON.stringify(this.compra));
      localStorage.setItem("idUltimacompra", this.idCompra.toString());
    }
  }
}