"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";

import "./style.css";

export default function Header() {
  //color change while scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <header className={color ? "header header-bg" : "header"}>
      <div className="px-5 ml-14 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <Link href="/signin" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/signin" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Proses
                </Link>
              </li>
              <li>
                <Link href="/(default)" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Komoditas
                </Link>
              </li>
              <li>
                <Link href="/signin" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Produk
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
      <script></script>
    </header>
  );
}
