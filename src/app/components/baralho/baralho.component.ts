import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss']
})
export class BaralhoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltar(){
    this.router.navigate(['home'])
  }
}
