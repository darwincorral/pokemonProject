import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemonForm = this.fb.group({
    name:['',[Validators.required]],
    attack:[50],
    image:[''],
    defense:[50],
    type:['fire'],
    hp:[50],
    idAuthor:[3]
  });

   public pokemons:Pokemon[] = [];
   public cargando:boolean = true;
   public nuevoPokemon:boolean = false;
   public tituloFormulario:string = '';

  constructor(private fb: FormBuilder,
              private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.mostrarPokemons();
  }

  mostrarPokemons(){
    this.cargando = true;
    this.pokemonService.mostrarPokemons()
    .subscribe((pokemons:any)=>{
      this.pokemons = pokemons;
      this.cargando = false;
    });
  }


  crearPokemon(){
    if(this.pokemonForm.invalid){
      return;
    }

    this.pokemonService.crearPokemon(this.pokemonForm.value)
    .subscribe(resp=>{
      this.pokemonForm.reset();
      this.mostrarPokemons();
    },(err)=>console.warn(err));
  }

  
  editarPokemon(idPokemon:number){
    this.mostrarFormulario('Editar Pokemon')

    if(this.pokemonForm.invalid){
      return;
    }

    this.pokemonService.editarPokemon(this.pokemonForm.value,idPokemon)
    .subscribe(resp=>{
      this.pokemonForm.reset();
      this.mostrarPokemons();
    },(err)=>console.warn(err));
  }

  mostrarFormulario(tituloFormulario:string){
    this.nuevoPokemon = true;
    this.tituloFormulario = tituloFormulario;
    console.log(this.nuevoPokemon);
  }
}
