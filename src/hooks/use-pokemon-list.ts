import { useState, useEffect } from "react";
import * as Pokedex from "pokeapi-js-wrapper";
import usePagination from "./use-pagination";

type UsePokemonListResult = {
  previous: string | null;
  next: string | null;
  count: number;
  pokemons: any;
  loading: boolean;
};

const usePokemonList = (): UsePokemonListResult => {
  const { offset } = usePagination();
  const P = new Pokedex.Pokedex();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UsePokemonListResult>({
    previous: null,
    next: null,
    count: 0,
    pokemons: [],
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonList = await P.getPokemonsList({
          offset: offset,
          limit: 9,
        });
        const pokemonDataPromises = pokemonList.results.map((pokemon: any) =>
          P.getPokemonByName(pokemon.name)
        );
        const pokemonData = await Promise.all(pokemonDataPromises);

        setData({
          previous: pokemonList.previous,
          next: pokemonList.next,
          count: pokemonList.count,
          pokemons: pokemonData,
          loading: false,
        });
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
        setData((prevData) => ({
          ...prevData,
          loading: false,
        }));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [offset]);

  return { ...data, loading };
};

export default usePokemonList;
