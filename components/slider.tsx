import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Image from "@/public/images/hero.png";
import Card from "./card";
import Carousel from "./carousel";

export default function Slider() {
  return (
    <section>
      <div className="bg-[#F1EAE2] ">
        <Carousel />
      </div>
    </section>
  );
}
