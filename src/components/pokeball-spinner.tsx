import Image from "next/image";
import { FlexCenter } from "./ui/flex";

const PokeballSpinner = () => {
  return (
    <FlexCenter className="flex-col top-2/4 left-2/4 h-[calc(100vh-100px)]">
      <Image
        src="/assets/images/pokemon.webp"
        alt="pokeball spinning"
        width={150}
        height={150}
      />
      <div className="animate-spin">
        <Image
          src="/assets/images/Pokeball.svg"
          alt="pokeball spinning"
          width={100}
          height={100}
        />
      </div>
    </FlexCenter>
  );
};

export default PokeballSpinner;
