"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { HiOutlineX } from "react-icons/hi";

interface NavProps {
  name: string;
  route: string;
}

const navLinks: NavProps[] = [
  { name: "home", route: "#home" },
  { name: "shop", route: "#shop" },
  { name: "about", route: "#about" },
  { name: "contact", route: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="relative  ">
        <div className="absolute top-10 w-full md:flex md:items-center bg-black">
          <div className="md:ml-8  md:mr-16">
            <Image
              src="/logo.svg"
              alt="logo"
              width={75}
              height={75}
              className="mx-auto h-auto w-auto"
            />
          </div>
          <div>
            <ul
              className={`md:gap-12 md:text-white ${
                menuOpen
                  ? "flex gap-x-4 absolute left-10 top-0 bg-white px-16 text-almostBlack md:hidden"
                  : "hidden md:flex"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.route}
                  onClick={() => setMenuOpen(false)}
                >
                  <li className={`${menuOpen && "mb-6 hover:text-gray-400"}`}>
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div
              className="absolute -top-1 left-5 cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <HiOutlineX
                  size={"1.5rem"}
                  color={"darkGray"}
                  className="ml-10 align-middle justify-center"
                />
              ) : (
                <Bars4Icon width={"1.5rem"} height={"1.5rem"} color={"#fff"} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
