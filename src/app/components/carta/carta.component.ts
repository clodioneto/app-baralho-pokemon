import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectCards } from 'src/app/home/home.component';
import { Pokemon } from 'src/app/models/pokemon.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  argCarta: number = 0;
  allCards!: ObjectCards[];
  cardsList!: any



  constructor(private router: Router, private route: ActivatedRoute, private LocalStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((e)=>{
     this.argCarta = +e.e;
    })
    this.getCardList()
  }

  getCardList(){
    this.allCards = this.LocalStorage.get('cards')
    let cards = this.allCards.find((e)=>{
      return e.id === +this.argCarta;
    })
    this.cardsList = cards?.cardList
    }

  voltar(){
    this.router.navigate(['baralho'])
  }

  excluirCartaById(e: string){
    if(this.cardsList.length <= 24){
      window.alert('A quantidade de cartas não deve ser inferior a 24 unidades');
      } else {
        this.cardsList = this.cardsList.filter((element: Pokemon)=>{
        return element.id !== e
      })
    }
    this.allCards.forEach((v)=>{
      v.cardList = this.cardsList
      v.cardLength--
    })
    this.LocalStorage.set('cards', this.allCards)
  }
  }











