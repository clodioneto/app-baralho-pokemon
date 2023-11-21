import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjectCards } from 'src/app/home/home.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss']
})
export class BaralhoComponent implements OnInit {

  cardList!: ObjectCards[];

  formulario!: FormGroup;

  constructor(private router: Router, private LocalStorage: LocalStorageService, private fb: FormBuilder) { }



  ngOnInit(): void {
    this.getCardList()
    this.iniciarForm()
  }

  getCardList(){
    this.cardList = this.LocalStorage.get('cards')
    
  }

 
  verCartas(e: any){
    this.router.navigate(['carta'], {queryParams:{e}})
  }

  voltar(){
    this.router.navigate(['home'])
  }

  iniciarForm(){
    this.formulario = this.fb.group({
      nameEdit: [null, Validators.required]
    })

  }

  editarBaralho(){
    
    
  }

  get nameEdit(): FormGroup {
    return this.formulario.get('nameEdit') as FormGroup;
  }
}
