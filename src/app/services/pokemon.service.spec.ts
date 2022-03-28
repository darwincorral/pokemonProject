import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('myService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [PokemonService]
  }));

   it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
   });

   it('should have mostrarPokemons function', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.mostrarPokemons).toBeTruthy();
   });

   it('should have crearPokemon function', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.crearPokemon).toBeTruthy();
   });

   it('should have editarPokemon function', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.editarPokemon).toBeTruthy();
   });

   it('should have eliminarPokemon function', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service.eliminarPokemon).toBeTruthy();
   });
});