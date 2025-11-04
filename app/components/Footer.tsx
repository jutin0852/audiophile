import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col py-5">
      <img
        src="/audiophile.svg"
        alt="Logo"
        width={140}
        height={25}
        className="m-auto sm:m-0 lg:my-5"
      />
      <div className="order-1 text-white/50 mt-3 text-center sm:text-start">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="mt-3 sm:mt-10">Copyright 2021. All Rights Reserved</p>
      </div>
      <nav className="">
        <ul className="flex flex-col sm:flex-row text-white gap-4 sm:justify-start justify-between text-center text-[13px] font-bold my-4 ">
          {nav.map((nav) => (
            <li key={nav.title} className="">
              {nav.title}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

const nav = [
  { title: "HOME" },
  { title: "HEADPHONE" },
  { title: "SPEAKER" },
  { title: "EARPHONE" },
];
