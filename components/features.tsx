"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function Features() {
  return (
    <div className="bg-[#F1EAE2]">
      <div className="container p-10 mx-auto columns-2 md:columns-2 lg:columns-4">
        <div className="flex text-[#28400D]">
          <h1 className="text-[24px] lg:text-[48px] font-[AbrilFatface] font-bold">28</h1>
          <h1 className="mt-2 ml-4 text-[16px] font-[JosefinSans]">
            Komoditas <br /> Tani
          </h1>
        </div>
        <div className="flex text-[#28400D]">
          <h1 className="text-[24px] lg:text-[48px] font-[AbrilFatface] font-bold">100k</h1>
          <h1 className="mt-2 ml-4 text-[16px] font-[JosefinSans]">
            Rata-Rata Panenan <br /> per Komoditas
          </h1>
        </div>
        <div className="flex text-[#28400D]">
          <h1 className="text-[24px] lg:text-[48px] font-[AbrilFatface] font-bold">12</h1>
          <h1 className="mt-2 ml-4 text-[16px] font-[JosefinSans]">
            Macam <br /> Komoditas
          </h1>
        </div>
        <div className="flex text-[#28400D]">
          <h1 className="text-[24px] lg:text-[48px] font-[AbrilFatface] font-bold ">10k+</h1>
          <h1 className="mt-2 ml-4 text-[16px] font-[JosefinSans]">
            Hektar Lahan <br /> Perkebunan
          </h1>
        </div>
      </div>
      <img className="w-full h-[52px]" src="images/Pattern.png" alt="/" />
    </div>
  );
}
