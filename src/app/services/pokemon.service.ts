import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Pokemon } from '../models/pokemon.model';


export interface Ipokemon{
 count: number;
 data: Pokemon[];
 page: number;
 pageSize: number;
 totalCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private url: string = "https://api.pokemontcg.io/v2/cards";

  constructor(private http: HttpClient) { }

  httOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'X-Api-Key': '90a7d6fd-51fb-419a-9da4-3ca1e11cb933',

    })
  }

  get listAllPokemon():Observable<Ipokemon>{
    return this.http.get<Ipokemon>(this.url, {headers: this.httOptions.headers});
  }
}
