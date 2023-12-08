import tw from "twin.macro";
import styled from "@emotion/styled";

const BaseStyle = tw`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`;

const ButtonVariants = {
  default: tw`bg-primary text-primary-foreground shadow hover:bg-primary/90`,
  destructive: tw`bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
  outline: tw`border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground`,
  secondary: tw`bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
  ghost: tw`hover:bg-accent hover:text-accent-foreground`,
  link: tw`text-primary underline-offset-4 hover:underline`,
  icon: tw`border border-input bg-white shadow-sm hover:bg-accent hover:text-accent-foreground`,
};

const ButtonSizes = {
  default: tw`h-9 px-4 py-2`,
  sm: tw`h-8 rounded-md px-3 text-xs`,
  lg: tw`h-10 rounded-md px-8`,
  icon: tw`h-9 w-9`,
};

export const Button = styled.button(() => [
  BaseStyle,
  ({
    variant = "default",
    size = "default",
  }: {
    variant: keyof typeof ButtonVariants;
    size: keyof typeof ButtonSizes;
  }) => [ButtonVariants[variant], ButtonSizes[size]],
]);
