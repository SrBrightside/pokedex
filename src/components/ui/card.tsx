import tw from "twin.macro";
import styled from "@emotion/styled";

const BackgroundColorByType = {
  bug: tw`[background-color:#C3CE75]`,
  dark: tw`[background-color:#333]`,
  dragon: tw`[background-color:#F9BE00]`,
  electric: tw`[background-color:#FFD86F]`,
  fairy: tw`[background-color:#f469a9]`,
  fighting: tw`[background-color:#d6b591]`,
  fire: tw`[background-color:#FB6C6C]`,
  flying: tw`[background-color:#BAB0D5]`,
  ghost: tw`[background-color:#735797]`,
  grass: tw`[background-color:#48D0B0]`,
  ground: tw`[background-color:#B1736C]`,
  ice: tw`[background-color:#7FCCEC]`,
  normal: tw`[background-color:#C2C2A1]`,
  poison: tw`[background-color:#7C538C]`,
  psychic: tw`[background-color:#9B7FA6]`,
  rock: tw`[background-color:#a6aab6]`,
  steel: tw`[background-color:#CCCCDE]`,
  water: tw`[background-color:#609FB5]`,
};

const ShadowColorByType = {
  bug: tw`shadow-[#C3CE75]`,
  dark: tw`shadow-[#333]`,
  dragon: tw`shadow-[#F9BE00]`,
  electric: tw`shadow-[#FFD86F]`,
  fairy: tw`shadow-[#f469a9]`,
  fighting: tw`shadow-[#d6b591]`,
  fire: tw`shadow-[#FB6C6C]`,
  flying: tw`shadow-[#BAB0D5]`,
  ghost: tw`shadow-[#735797]`,
  grass: tw`shadow-[#48D0B0]`,
  ground: tw`shadow-[#B1736C]`,
  ice: tw`shadow-[#7FCCEC]`,
  normal: tw`shadow-[#C2C2A1]`,
  poison: tw`shadow-[#7C538C]`,
  psychic: tw`shadow-[#9B7FA6]`,
  rock: tw`shadow-[#a6aab6]`,
  steel: tw`shadow-[#CCCCDE]`,
  water: tw`shadow-[#609FB5]`,
};

const Card = styled.div(() => [
  tw`rounded-3xl bg-card text-card-foreground shadow-[0_0_20px_0] overflow-hidden max-w-[600px] p-2`,
  ({ type = "normal" }: { type?: keyof typeof ShadowColorByType }) => [
    ShadowColorByType[type],
    BackgroundColorByType[type],
  ],
]);

const CardHeader = styled.div(() => [
  tw`flex flex-col space-y-1.5 pb-6`,
  ({ type = "normal" }: { type?: keyof typeof BackgroundColorByType }) => [
    BackgroundColorByType[type],
  ],
]);

const CardTitle = tw.h3`text-start font-semibold leading-none tracking-tight text-2xl text-[rgba( 255,255,255)] pb-6`;
const CardDescription = tw.p`text-sm text-muted-foreground pb-6 text-[rgba( 255,255,255)]`;
const CardContent = tw.div``;
const CardFooter = tw.div`flex items-center pt-0 text-[rgba( 255,255,255)]`;
const CardTrigger = tw.button`transform hover:scale-105 duration-500 ease-in-out`;

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardTrigger,
};
