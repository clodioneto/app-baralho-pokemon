import { AppRouteModule } from './app-route.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HomeModule,
    HttpClientModule,
    
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
