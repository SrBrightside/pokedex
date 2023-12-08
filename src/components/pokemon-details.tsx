import { DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { formatTextFromApi, getPokemonImage } from "@/lib/pokemon";
import Badge from "./ui/badge";
import { FlexBetween, FlexCol, FlexItemCenter } from "./ui/flex";
import { PokemonName, SectionTitle } from "./ui/typography";

const PokemonDetails = ({ pokemon }: { pokemon: any }) => {
  return (
    <DialogHeader>
      <DialogTitle>
        <FlexBetween>
          <PokemonName>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </PokemonName>
          <div className="w-40">
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
          </div>
        </FlexBetween>
      </DialogTitle>
      <DialogDescription>
        <FlexCol className="gap-4">
          <SectionTitle>Pokemon Types</SectionTitle>

          <FlexItemCenter className="gap-2">
            {pokemon.types.map((type: any, index: number) => (
              <Badge variant={type.type.name} key={index}>
                {formatTextFromApi(type.type.name)}
              </Badge>
            ))}
          </FlexItemCenter>

          <FlexCol className="gap-2">
            <SectionTitle>Pokemon Stats</SectionTitle>

            {pokemon.stats.map((stat: any, index: number) => (
              <FlexBetween key={index} className="text-sm font-semibold">
                <span>{formatTextFromApi(stat.stat.name)}</span>
                <span className="text-[#CC0000]">{stat.base_stat}</span>
              </FlexBetween>
            ))}
          </FlexCol>
        </FlexCol>
      </DialogDescription>
    </DialogHeader>
  );
};

export default PokemonDetails;
