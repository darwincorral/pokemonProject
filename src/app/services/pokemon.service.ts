import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonForm } from '../interfaces/pokemon-form.interface';
import { environment } from '../../environments/environment';

const pokemon_url = environment.pokemon_url;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  crearPokemon(formData:PokemonForm){
   return this.http.post(`${pokemon_url}/?idAuthor=3`,formData)
  }

  mostrarPokemons(){
    return this.http.get(`${pokemon_url}/?idAuthor=3`)
  }

  editarPokemon(formData:PokemonForm,idPokemon:number){
    return this.http.put(`${pokemon_url}/${idPokemon}`,formData)
   }

   
  eliminarPokemon(idPokemon:number){
    return this.http.delete(`${pokemon_url}/${idPokemon}`)
  }
}
