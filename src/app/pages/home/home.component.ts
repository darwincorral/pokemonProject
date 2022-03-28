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

  public pokemonForm = this.fb.group([]);
  public pokemons:Pokemon[] = [];
  public cargando:boolean = true;
  public cardPokemon:boolean = false;
  public tituloFormulario:string = '';
  public idPokemon:number = 0;
  public filterTerm:string="";

  constructor(private fb: FormBuilder,
              private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.formValues();
    this.mostrarPokemons();
  }

  formValues(){
     this.pokemonForm = this.fb.group({
      name:['',[Validators.required]],
      attack:[50],
      image:[''],
      defense:[50],
      type:['fire'],
      hp:[50],
      idAuthor:[3]
    });
  }

  mostrarPokemons(){
    this.cargando = true;
    this.cardPokemon = false;
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

    if(this.idPokemon ==0){
      this.pokemonService.crearPokemon(this.pokemonForm.value)
      .subscribe(resp=>{
        this.formValues();
        this.mostrarPokemons();
      },(err)=>console.warn(err));
    }{
      this.editarPokemon();
    }
  }

  cargarPokemon(pokemon:Pokemon){
    this.mostrarFormulario(2);
    this.idPokemon = pokemon.id;
    this.pokemonForm.controls['name'].setValue(pokemon.name);
    this.pokemonForm.controls['image'].setValue(pokemon.image);
    this.pokemonForm.controls['attack'].setValue(pokemon.attack);
    this.pokemonForm.controls['defense'].setValue(pokemon.defense);
  }

  
  editarPokemon(){
    this.pokemonService.editarPokemon(this.pokemonForm.value,this.idPokemon)
    .subscribe(resp=>{
      this.formValues();
      this.mostrarPokemons();
    },(err)=>console.warn(err));
  }

  mostrarFormulario(estadoFormulario:number){
    this.cardPokemon = true;
    if(estadoFormulario == 1){
      this.tituloFormulario = 'Nuevo Pokemon';
      this.formValues();
    }else{
      this.tituloFormulario = 'Editar Pokemon';
    }
  }

  eliminarPokemon(idPokemon:number){
    this.idPokemon = idPokemon;
    this.pokemonService.eliminarPokemon(this.idPokemon)
    .subscribe(resp=>{
      this.mostrarPokemons();
    },(err)=>console.warn(err));
  }
}
