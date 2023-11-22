import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectCards } from 'src/app/home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';


@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss']
})
export class BaralhoComponent implements OnInit{

  cardList!: ObjectCards[];

  formulario!: FormGroup;

  myCards: any;

  numId: number = 0;

  cardLength: number = 0;

  constructor(private router: Router, private localStorage: LocalStorageService, private fb: FormBuilder) { }

  @ViewChild('myModalClose') modalClose: any;

  ngOnInit(): void {
    this.getCardList()
    this.iniciarForm()


  }

  getCardLenght(cardList: ObjectCards[], objectCards: ObjectCards){
    cardList.forEach((c)=>{
      objectCards.cardLength = c.cardList.length
    })
  }

  getCardList(){
    this.cardList = this.localStorage.get('cards')
  }


  verCartas(e: any){
    this.router.navigate(['carta'], {queryParams:{e}})
  }

  voltar(){
    this.router.navigate(['home'])
  }

  iniciarForm(){
    this.formulario = this.fb.group({
      nameEdit: [null, Validators.required],
      numCards: [null, Validators.required],
      nameCards: [null, Validators.required],
    })

  }

  editarBaralho(){

  }

  excluirBaralho(e: number){
        this.cardList = this.cardList.filter((element: ObjectCards)=>{
        return element.id !== +e
      })

      this.localStorage.set('cards', this.cardList)
  }

  get nameEdit(): FormGroup {
    return this.formulario.get('nameEdit') as FormGroup;
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

  criarBaralho(){
    if(this.numCards.value >= 24 && this.numCards.value <= 60) {
      this.getNewObjectCards(this.localStorage.get('listCardPokemon'), this.numCards.value, this.nameCards.value)
      this.modalClose.nativeElement.click();
      this.cleanForm();

    } else {
      this.cleanForm();
      window.alert('A quantidade de cartas deve estar entre 24 e 60 unidades');
    }

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
      this.getListMyCards(collectionNewCards, name);
    }


  }

  getListMyCards(arr: Pokemon[], name: string){
    this.numId += 1
    let objectCards: ObjectCards = {
      id: this.numId,
      name: "",
      cardList: [],
      cardLength: 0
    };
    arr.map((e)=>{
      objectCards.name = name
      objectCards.cardList.push(e)
    })

    this.cardList.push(objectCards)
    this.getCardLenght(this.cardList, objectCards)
    this.localStorage.set('cards', this.cardList)

    console.log(this.cardList)

  }
}
