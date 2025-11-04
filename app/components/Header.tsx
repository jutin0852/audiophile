// import Image from "next/image";

import { Menu, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black flex justify-between py-8 px-6 lg:py-[35px]  relative border-b-white">
      <Menu color="white" className="lg:hidden" />
      <img
        src="/audiophile.svg"
        alt="Logo"
        width={140}
        height={25}
        className="sm:absolute sm:left-20 sm:top-9 lg:relative lg:top-0 lg:left-0"
      />
      <nav>
        <ul className="flex text-white gap-9 text-[13px] font-bold max-lg:hidden">
          {nav.map((nav) => (
            <li key={nav.title} className="">
              {nav.title}
            </li>
          ))}
        </ul>
      </nav>
      <ShoppingCart color="white" />
    </header>
  );
}

const nav = [
  { title: "HOME" },
  { title: "HEADPHONE" },
  { title: "SPEAKER" },
  { title: "EARPHONE" },
];
