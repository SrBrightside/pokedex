import { GeistSans } from "geist/font/sans";
import "../../styles/globals.css";
import { NextAuthProvider } from "./AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className={GeistSans.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
