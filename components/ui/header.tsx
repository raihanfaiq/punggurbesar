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

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <header className={color ? "header header-bg border-b-2" : "header border-b-2"}>
      <div className="px-5 ml-14 sm:px-6 ">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            <a href="/">
              <Logo />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <Link href="/tentang" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/#proses" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Proses
                </Link>
              </li>
              <li>
                <Link href="/#komoditas" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Komoditas
                </Link>
              </li>
              <li>
                <Link href="/#produk" className="flex items-center px-5 py-3 font-medium text-[#FFFFFF] transition duration-150 ease-in-out hover:text-gray-900">
                  Produk
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
