"use client";
import PaginationControls from "./pagination-controls";
import PokemonList from "./pokemon-list";
import Container from "./ui/container";
import usePokemonList from "@/hooks/use-pokemon-list";
import PokeballSpinner from "./pokeball-spinner";

const PokedexLayout = () => {
  const { previous, next, count, pokemons, loading } = usePokemonList();

  return (
    <Container>
      {loading ? (
        <PokeballSpinner />
      ) : (
        <>
          <PokemonList pokemons={pokemons} />
          <PaginationControls
            hasNextPage={next !== null}
            hasPrevPage={previous !== null}
            itemsCount={count}
          />
        </>
      )}
    </Container>
  );
};

export default PokedexLayout;
