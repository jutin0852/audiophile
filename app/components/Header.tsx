"use client";
import { useCart } from "@/context/cartContext";
import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CartModal } from "./Cart";

export default function Header() {
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();
  return (
    <header className="bg-black flex justify-between py-8 px-6 lg:py-[35px]  relative border-b-white">
      <CartModal />
      <Menu color="white" className="lg:hidden" />
      <Link href={"/"}>
        <img
          src="/audiophile.svg"
          alt="Logo"
          width={140}
          height={25}
          className="relative text-center sm:absolute sm:left-20 sm:top-9 lg:relative lg:top-0 lg:left-0"
        />
      </Link>
      <nav>
        <ul className="flex text-white gap-9 text-[13px] font-bold max-lg:hidden">
          {nav.map((nav) => (
            <li key={nav.title} className="">
              <Link href={nav.categories}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative hover:text-orangetransition-colors"
      >
        <ShoppingCart className="w-6 h-6" color="white" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}

const nav = [
  { title: "HOME", categories: "/" },
  { title: "HEADPHONE", categories: "/categories/headphones" },
  { title: "SPEAKER", categories: "/categories/speakers" },
  { title: "EARPHONE", categories: "/categories/earphones" },
];
