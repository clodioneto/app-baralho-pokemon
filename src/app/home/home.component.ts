import { Ipokemon, PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { LocalStorageService } from '../services/local-storage.service';

export interface ObjectCards {
  id: number;
  name: string;
  cardList: Pokemon[];
  cardLength: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  pokemonData: Ipokemon = {
    count: 0,
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0,
  }

  listPokemon: Pokemon[] = [];



  constructor(private router: Router, private pokemonService: PokemonService, private localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorage.get('listCardPokemon') === null ? this.getListPokemon() : null
    this.localStorage.get('cards')
    }

  getApiPokemon(){

  }

  startCard(){
    this.router.navigate(['baralho'])
  }

  getListPokemon(){
    this.pokemonService.listAllPokemon.subscribe(p => {
    p.data.forEach((e) => {
      this.pokemonData.data.push(e)
    })
    this.listPokemon = this.pokemonData.data.slice(0, 250)
    this.localStorage.set('listCardPokemon', this.listPokemon)
    })

  }




}
