import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  cardList!: any


  constructor(private route: ActivatedRoute, private LocalStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((e)=>{
     this.argCarta = +e.e;

    })

    this. getCardList()
  }

  getCardList(){
    this.allCards = this.LocalStorage.get('cards')
    let cards = this.allCards.find((e)=>{
      return e.id === +this.argCarta;
    })
    console.log(cards)
    this.cardList = cards?.cardList
    console.log(this.cardList)
    }


  }









