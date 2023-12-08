import * as Pokedex from "pokeapi-js-wrapper";

export async function getPokemonList(offset: number) {
  const P = new Pokedex.Pokedex();

  const pokemons = await P.getPokemonsList({
    offset: offset,
    limit: 9,
  });

  const pokemonPromises = pokemons.results.map((pokemon: any) =>
    P.getPokemonByName(pokemon.name)
  );

  return {
    previous: pokemons.previous,
    next: pokemons.next,
    pokemons: await Promise.all(pokemonPromises),
  };
}

export function getPokemonImage(pokemon: any) {
  if (pokemon.sprites.other.dream_world.front_default) {
    return pokemon.sprites.other.dream_world.front_default;
  }

  if (pokemon.sprites.other["official-artwork"].front_default) {
    return pokemon.sprites.other["official-artwork"].front_default;
  }

  return "/assets/images/pokemon.webp";
}

export const formatTextFromApi = (move: string) => {
  const capitalizedMove = move
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  return `${capitalizedMove}`;
};
