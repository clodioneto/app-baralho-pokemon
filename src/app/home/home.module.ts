import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CartaComponent } from '../components/carta/carta.component';
import { BaralhoComponent } from '../components/baralho/baralho.component';
import { HomeRouteModule } from './home-route.module';



@NgModule({
  declarations: [
    HomeComponent,
    CartaComponent,
    BaralhoComponent
  ],
  imports: [
    HomeRouteModule,
    CommonModule,


  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
