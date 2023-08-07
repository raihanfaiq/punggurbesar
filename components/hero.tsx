import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative bg-[#28400D]">
      {/* Illustration behind hero content */}
      <div className="absolute bottom-0 transform -translate-x-1/2 pointer-events-none left-1/2 -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="w-full pt-20 pl-4 ml-10">
        <div className="grid md:grid-cols-5">
          <img className="md:border-l-2 ml-6 sm:ml-[70px] block md:hidden md:border-white w-[500px] md:w-full h-full col-span-2" src="/images/hero.png" alt="/" />
          <div className="flex flex-col justify-center col-span-3 py-12 text-center md:ml-8 ">
            <h1 className="text-[#F1EAE2] font-bold text-2xl ml-[-100px] md:px-12 md:text-[64px] sm:text-3xl pt-10 font-[AbrilFatFace] leading-tight ">
              Memelihara, Memanen, <br /> & Menyebarkan
            </h1>
            <h4 className="text-[#F1EAE2] text-[16px] w-3/4 font-[JosefinSans] pb-10 pt-4 md:text-left sm:text-center">
              Punggur Besar merupakan Desa Perkebunan dengan hasil bumi yang melimpah yang dimanfaatkan secara mentah maupun dijadikan sebagai bahan dasar pembuatan berbagai macam olahan
            </h4>

            <div className="flex pt-2 justify-center mr-4  md:mx-0">
              <h3 className="text-[#E8BB15] font-[AbrilFatface] text-[24px]  md:text-left">Jelajahi Desa</h3>
              <img className="w-[64px] h-[28px] ml-4" src="/images/icon.png" alt="/" />
            </div>
          </div>
          <img className="border-l-2 hidden md:block border-white w-[500px] md:w-full h-full col-span-2" src="/images/hero.png" alt="/" />
        </div>
      </div>
    </section>
  );
}
