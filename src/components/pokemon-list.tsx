import Grid from "./ui/grid";
import { PokemonCard } from "./pokemon-card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { CardTrigger } from "./ui/card";
import PokemonDetails from "./pokemon-details";

const PokemonList = ({ pokemons }: { pokemons: any }) => {
  return (
    <Grid>
      {pokemons.map((pokemon: any, index: number) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <CardTrigger>
              <PokemonCard pokemon={pokemon} />
            </CardTrigger>
          </DialogTrigger>
          <DialogContent>
            <PokemonDetails pokemon={pokemon} />
          </DialogContent>
        </Dialog>
      ))}
    </Grid>
  );
};

export default PokemonList;
