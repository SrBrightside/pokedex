import tw from "twin.macro";
import styled from "@emotion/styled";

const badgeVariants = {
  bug: tw`[background-color:#C3CE75] text-white`,
  dark: tw`[background-color:#333] text-white`,
  dragon: tw`[background-color:#F9BE00] text-white`,
  electric: tw`[background-color:#FFD86F] text-white`,
  fairy: tw`[background-color:#f469a9] text-white`,
  fighting: tw`[background-color:#d6b591] text-white`,
  fire: tw`[background-color:#FB6C6C] text-white`,
  flying: tw`[background-color:#BAB0D5] text-white`,
  ghost: tw`[background-color:#735797] text-white`,
  grass: tw`[background-color:#48D0B0] text-white`,
  ground: tw`[background-color:#B1736C] text-white`,
  ice: tw`[background-color:#7FCCEC] text-white`,
  normal: tw`[background-color:#C2C2A1] text-white`,
  poison: tw`[background-color:#7C538C] text-white`,
  psychic: tw`[background-color:#9B7FA6] text-white`,
  rock: tw`[background-color:#a6aab6] text-white`,
  steel: tw`[background-color:#CCCCDE] text-white`,
  water: tw`[background-color:#609FB5] text-white`,
  glass: tw`bg-white/50 text-foreground`,
};

const Badge = styled.div(() => [
  tw`inline-flex items-center rounded-full p-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit`,
  ({ variant = "glass" }: { variant: keyof typeof badgeVariants }) => [
    badgeVariants[variant],
  ],
]);

export default Badge;
