import { LocalStorageService } from './../../services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectCards } from 'src/app/home/home.component';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss']
})
export class BaralhoComponent implements OnInit {

  cardList!: ObjectCards[];

  constructor(private router: Router, private LocalStorage: LocalStorageService) { }



  ngOnInit(): void {
    this.getCardList()
  }

  getCardList(){
    this.cardList = this.LocalStorage.get('cards')
    console.log(this.cardList)
    /* this.myCards.forEach((e: any)=>{
      this.cardsList = (Object.values(e.cardList))
    })
     */
  }


  verCartas(e: any){
    this.router.navigate(['carta'], {queryParams:{e}})
  }

  voltar(){
    this.router.navigate(['home'])
  }
}
