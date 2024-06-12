export const metadata = {
  title: "Proses",
  description: "Page description",
};

import Link from "next/link";
import Herobout from "./herobout";
import Navbg from "./navbg";

export default function Tentang() {
  return (
    <>
      <Navbg />
      <Herobout />
      {/* <Footer /> */}
    </>
  );
}
