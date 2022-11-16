"use client";

import type { MouseEvent } from "react";
import { useRef } from "react";
import Image from "next/image";

const Navbar = (): JSX.Element => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLUListElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (btnRef?.current) {
      btnRef.current.classList.toggle("open");
    }
    if (navRef?.current) {
      navRef.current.classList.toggle("flex");
      navRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image src="/images/logo.svg" alt="logo" width={146} height={24} />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </nav>
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
        >
          Get Started
        </a>
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
          onClick={(e) => handleClick(e)}
          ref={btnRef}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <ul
          id="menu"
          className="hidden absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          ref={navRef}
        >
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
