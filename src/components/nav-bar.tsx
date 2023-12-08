"use client";
import Image from "next/image";
import { FlexCenter } from "./ui/flex";
import { signOut, useSession } from "next-auth/react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
} from "./ui/dropdown-menu";

const NavBar = () => {
  return (
    <div className="border-b flex justify-between items-center px-4 py-0.5 mb-10 bg-white shadow">
      <Logo />
      <UserNav />
    </div>
  );
};

const UserNav = () => {
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <span>
          {session
            ? `${session.user.firstName} ${session.user.lastName}`
            : "Loading..."}
        </span>
        <Image
          src={session ? session.user.avatar : "/assets/images/Pokeball.svg"}
          alt="pokeball spinning"
          width={50}
          height={50}
        />
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/login" })}>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Logo = () => {
  return (
    <Image
      src="/assets/images/pokemon.webp"
      alt="pokeball spinning"
      width={100}
      height={50}
    />
  );
};

export default NavBar;
