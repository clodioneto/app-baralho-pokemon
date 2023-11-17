import { Ipokemon, PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iniciar: boolean = false;
  loadListCards: boolean = true;

  pokemonData: Ipokemon = {
    count: 0,
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0,
  }

  listPokemon: Pokemon[] = [];

  listMyCards: any[] = [];

  myCards: any;


  constructor(private router: Router, private pokemonService: PokemonService, private localStorage: LocalStorageService) {}

  @ViewChild('myModalClose') modalClose: any;

  ngOnInit(): void {
    this.localStorage.get('listCardPokemon') === null ? this.getListPokemon() : null
    this.myCards = this.localStorage.get('cards')
    console.log(this.myCards)
  }

  getApiPokemon(){
    
  }

  startCard(){
    this.localStorage.get('listCardPokemon') ? this.loadListCards = false : this.loadListCards = true
    return this.iniciar = true;
  }

  criarBaralho(n: number){
    this.getNewObjectCards(this.localStorage.get('listCardPokemon'), n)
    this.modalClose.nativeElement.click();
  }

  verBaralho(){
    this.router.navigate(['/baralho'])

  }

  getListPokemon(){
    console.log('teste')
    this.pokemonService.listAllPokemon.subscribe(p => {
      p.data.forEach((e) => {
        this.pokemonData.data.push(e)
      })
      this.listPokemon = this.pokemonData.data.slice(0, 250)
      this.localStorage.set('listCardPokemon', this.listPokemon)
    })

  }

  getNewObjectCards(data: Pokemon[], num: number){
    let objectCards: any = {};
    let i: number;
    let collectionNewCards: Pokemon[] = [];
    if(data){
      for(i=0; i <= num - 1;  i ++) {
        let randomIndex = Math.floor(Math.random() * data.length)
        let randomElement = data[randomIndex]
        collectionNewCards.push(randomElement)
      }
      
  
      this.getListMycards(collectionNewCards);
    } return null
    
    
  }

  getListMycards(arr: any){
    this.listMyCards.push(arr)
    this.localStorage.set('cards', this.listMyCards)
    
    
  }





}
