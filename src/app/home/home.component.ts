import { Ipokemon, PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iniciar: boolean = false;
  baralho: boolean = false;

  pokemonData: Ipokemon = {
    count: 0,
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0,
  }

  listPokemon: Pokemon[] = [];


  constructor(private router: Router, private pokemonService: PokemonService) {}

  @ViewChild('myModalClose') modalClose: any;

  ngOnInit(): void {
  this.getListPokemon()
  }

  getApiPokemon(){

  }

  startCard(){
    return this.iniciar = true;
  }

  criarBaralho(){
    this.baralho = true;

    this.modalClose.nativeElement.click();
  }

  verBaralho(){
    this.router.navigate(['/baralho'])

  }

  getListPokemon(){

    this.pokemonService.listAllPokemon.subscribe(p => {
      p.data.forEach((e) => {
        this.pokemonData.data.push(e)
      })
      this.listPokemon = this.pokemonData.data.slice(0, 250)
      this.listPokemon ? this.verBaralho() : null
      console.log(this.listPokemon)
    })

  }

}
