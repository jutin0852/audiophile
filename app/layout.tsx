import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ConvexClientProvider } from "@/provider/convexProvider";
import { CartProvider } from "@/context/cartContext";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "AUDIOPHILE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} antialiased`}>
        <ConvexClientProvider>
          <CartProvider>
            <Wrapper className="bg-black px-0">
              <Header />
            </Wrapper>
            {children}
            <Wrapper className="bg-black mt-10">
              <Footer />
            </Wrapper>
          </CartProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
