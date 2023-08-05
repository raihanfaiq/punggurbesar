export const metadata = {
  title: "Tentang Kami",
  description: "Page description",
};

import Link from "next/link";
import Herobout from "./herobout";
import Fasilitas from "./fasilitas";
import Sejarah from "./sejarah";
import Footer from "./footer";

export default function Tentang() {
  return (
    <>
      <Herobout />
      <Fasilitas />
      <Sejarah />
      {/* <Footer /> */}
    </>
  );
}
