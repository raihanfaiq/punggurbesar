"use client";
import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";
import React, { useState } from "react";

interface ImageData {
  id: number;
  value: string;
}

export default function Herobout() {
  const imgs: ImageData[] = [
    { id: 0, value: "/images/grey.png" },
    { id: 1, value: "/images/green.png" },
  ];

  const [sliderData, setSliderData] = useState<ImageData>(imgs[0]);

  const handlerClick = (index: number) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <section className="relative bg-[#F1EAE2]">
      {/* Hero content */}

      <div className="w-full px-4 pt-16 py-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="md:mx-auto">
            <p className="">ehehenak</p>
          </div>
          <div className="flex flex-col pt-6 justify-center text-center md:ml-8 md:text-center">
            <h1 className="text-[#7A4631] font-bold text-4xl text-left md:text-3xl sm:text-3xl font-[AbrilFatFace]">Piring Pinang</h1>
            <h1 className="text-[#7A4631] font-bold text-3xl text-left md:text-3xl sm:text-3xl  font-[AbrilFatFace]">Rp.50.000</h1>
            <h1 className="text-[#7A4631] font-bold text-2xl text-left md:text-3xl sm:text-3xl  font-[AbrilFatFace]">
              Katalog <span className="font-bold ml-8">HALAMAN PROSES</span>
            </h1>
            <h1 className="text-[#7A4631] font-bold text-2xl text-left md:text-4xl sm:text-3xl  font-[AbrilFatFace]">
              Berat <span className="font-light ml-12">250ml</span>
            </h1>
            <div className="flex justify-end">
              <h1 className="font-[JosefinSans] font-bold text-lg pt-[15px] text-[#E8BB15] ml-2 sm:text-[15px] sm:pt-[12px] md:pt-[26px] md:text-[20px] lg:pt-[34px] lg:text-[25px]">
                Hubungi Penjual <span>|</span>
              </h1>
              <img className="ml-4 md:h-20 pt-[10px] sm:pt-[5px] md:pt-[20px] w-[32px] lg:pt-[16px] " src="images/chat.png" alt="/" />
            </div>
            <hr className="h-px my-8 border-red-700 border-0 dark:bg-red-950" />
            <p className="text-[#7A4631] font-light px-4 text-sm text-left font-[AbrilFatFace]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis commodi odio provident praesentium assumenda laboriosam unde aliquid deserunt quisquam dolor? Deserunt, dolorem provident consequatur totam eaque mollitia
              autem reiciendis illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate expedita dolorem natus distinctio soluta iste sint quis illo nihil aspernatur eum, nam voluptates numquam sapiente impedit praesentium.
              Consequatur, veniam nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab cupiditate at nostrum magni, molestiae est quo et nam quod, iste tempore recusandae. Quidem voluptatibus facere, reiciendis similique
              quo dolores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
