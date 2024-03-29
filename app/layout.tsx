
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

import Footer from "@/components/main/Footer";
import { NavbarSimple } from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <NavbarSimple />
        {children}
        <Footer />
      </body>
    </html>
  );
}
