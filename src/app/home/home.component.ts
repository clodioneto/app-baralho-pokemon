import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  iniciar: boolean = false;
  baralho: boolean = false;

  constructor(private router: Router) {}

  @ViewChild('myModalClose') modalClose: any;

  ngOnInit(): void {
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

}
