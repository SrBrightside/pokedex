import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      avatar: string;
      accessToken: string;
    };
  }
}
