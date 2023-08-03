"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

export default function Features() {
  return (
    <div className="bg-[#F1EAE2]">
      <div className="container mx-auto p-10 columns-2 md:columns-4">
        <div className="flex ml-8 text-[#28400D]">
          <h1 className="text-4xl font-bold">28</h1>
          <h1 className="mt-2">
            Komoditas <br /> Tani
          </h1>
        </div>
        <div className="flex ml-8 mt-10 text-[#28400D]">
          <h1 className="text-4xl font-bold">12</h1>
          <h1 className="mt-2">
            Macam <br /> Komoditas
          </h1>
        </div>
        <div className="flex text-[#28400D]">
          <h1 className="text-4xl font-bold">100k</h1>
          <h1 className="mt-2">Rata-Rata Panenan per Komoditas</h1>
        </div>
        <div className="flex text-[#28400D]">
          <h1 className="text-4xl font-bold">10K+</h1>
          <h1 className="mt-2">
            Hektar Lahan <br /> Perkebunan
          </h1>
        </div>
      </div>
      <img className="w-full h-[30px]" src="images/Pattern.png" alt="/" />
    </div>
  );
}
