import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from '../components/carta/carta.component';
import { BaralhoComponent } from '../components/baralho/baralho.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'baralho',
    component: BaralhoComponent,
  },
  {
    path:'carta',
    component: CartaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouteModule { }
