import { Ipokemon, PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { LocalStorageService } from '../services/local-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ObjectCards {
  id: number;
  name: string;
  cardList: Pokemon[];
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iniciar: boolean = false;
  loadListCards: boolean = true;

  numId: number = 0;

  pokemonData: Ipokemon = {
    count: 0,
    data: [],
    page: 0,
    pageSize: 0,
    totalCount: 0,
  }

  listPokemon: Pokemon[] = [];

  listMyCards: ObjectCards[] = [];

  myCards: any;

  formulario!: FormGroup;


  constructor(private router: Router, private pokemonService: PokemonService, private localStorage: LocalStorageService, private fb: FormBuilder) {}

  @ViewChild('myModalClose') modalClose: any;

  ngOnInit(): void {
    this.iniciarForm();
    this.localStorage.get('listCardPokemon') === null ? this.getListPokemon() : null
    this.myCards = this.localStorage.get('cards')
    }

  iniciarForm(){
    this.formulario = this.fb.group({
      numCards: [null, Validators.required],
      nameCards: [null, Validators.required]
    })

  }

  getApiPokemon(){
    
  }

  startCard(){
    this.localStorage.get('listCardPokemon') ? this.loadListCards = false : this.loadListCards = true
    return this.iniciar = true;
  }

  get numCards(): FormGroup {
    return this.formulario.get('numCards') as FormGroup;
  }

  get nameCards(): FormGroup {
    return this.formulario.get('nameCards') as FormGroup;
  }

  cleanForm(){
    this.formulario.patchValue({
      numCards: "",
      nameCards: ""
    });
  }


  criarBaralho()
  {
    if(this.numCards.value >= 24 && this.numCards.value <= 60) {
      this.getNewObjectCards(this.localStorage.get('listCardPokemon'), this.numCards.value, this.nameCards.value)
      this.modalClose.nativeElement.click();
      this.cleanForm();

    } else {
      this.cleanForm();
      window.alert('A quantidade de cartas deve estar entre 24 e 60 unidades');
    }

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
    this.localStorage.set('listCardPokemon', this.listPokemon)
    })

  }

  getNewObjectCards(data: Pokemon[], num: number, name: string){

    let i: number;
    let collectionNewCards: Pokemon[] = [];
    if(data){
      for(i=0; i <= num - 1;  i ++) {
        let randomIndex = Math.floor(Math.random() * data.length)
        let randomElement = data[randomIndex]
        collectionNewCards.push(randomElement)
      }
      this.getListMycards(collectionNewCards, name);
    } return null


  }

  getListMycards(arr: Pokemon[], name: string){
    this.numId += 1
    let objectCards: ObjectCards = {
      id: this.numId,
      name: "",
      cardList: [],
    };
    arr.map((e)=>{
      objectCards.name = name
      objectCards.cardList.push(e)
    })
    this.listMyCards.push(objectCards)
    this.localStorage.set('cards', this.listMyCards)
    
  }

  voltar(){
    this.iniciar = false;
  }




}
