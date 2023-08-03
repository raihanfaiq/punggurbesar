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

      {/* Hero content */}
      <div className="w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="border-2 border-white w-[500px] md:w-full mx-auto my-4" src="/images/hero.png" alt="/" />
          <div className="flex flex-col justify-center text-center md:ml-8 md:text-left">
            <h1 className="text-[#F1EAE2] font-bold text-2xl md:text-4xl sm:text-3xl py-2">
              Memelihara, Memanen, <br /> & Menyebarkan
            </h1>
            <h4 className="text-[#F1EAE2] ">
              Punggur Besar merupakan Desa Perkebunan <br /> dengan hasil bumi yang melimpah yang <br />
              dimanfaatkan secara mentah maupun dijadikan sebagai bahan dasar pembuatan berbagai macam olahan
            </h4>

            <div className="flex pt-2 mx-auto md:mx-0">
              <h3 className="text-[#E8BB15]">Jelajahi Desa</h3>
              <img className="w-[50px] ml-4" src="/images/icon.png" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
