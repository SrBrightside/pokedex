import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FlexEnd } from "./ui/flex";
import { formatTextFromApi, getPokemonImage } from "@/lib/pokemon";

import Badge from "./ui/badge";
import Image from "next/image";
import tw from "twin.macro";

const PokemonCard = ({ pokemon }: { pokemon: any }) => {
  return (
    <Card type={pokemon.types[0].type.name}>
      <PokemonCardBorder>
        <CardHeader type={pokemon.types[0].type.name}>
          <AspectRatio ratio={4 / 3}>
            <Image
              fill={true}
              src={getPokemonImage(pokemon)}
              alt={`${pokemon.name} sprite`}
              key={pokemon.name}
              blurDataURL="/assets/images/pokemon.webp"
              className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            />
          </AspectRatio>
          <FlexEnd>
            <Badge variant="glass">Weight {pokemon.weight}</Badge>
          </FlexEnd>
        </CardHeader>
        <CardContent>
          <CardTitle>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </CardTitle>
        </CardContent>
        <CardFooter>
          #{formatTextFromApi(pokemon.moves[0].move.name)} #
          {formatTextFromApi(pokemon.moves[1].move.name)}
        </CardFooter>
      </PokemonCardBorder>
    </Card>
  );
};

const PokemonCardBorder = tw.div`border-2 border-[rgba( 255,255,255)] p-6 rounded-2xl`;

export { PokemonCard };
