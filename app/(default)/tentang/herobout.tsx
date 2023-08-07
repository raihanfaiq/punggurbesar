import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";

export default function Herobout() {
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
      <div className="w-full px-4 pt-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center text-center md:ml-8 md:text-center">
            <img className="mx-auto" src="/images/tentang_hero.svg" alt="/" />
            <h1 className="text-[#F1EAE2] font-bold text-2xl md:text-4xl sm:text-3xl py-2 font-[AbrilFatFace]">Kami di Sini</h1>
            <h4 className="text-[#F1EAE2] mb-4 font-[JosefinSans]">
              Punggur Besar merupakan salah satu desa di Kecamatan Sungai Kakap yang dikenal atas hasil perkebunannya. Kamu dapat menikmati hasil kebun itu dengan mengunjungi Desa Punggur Besar yang terletak sejauh 15km jika ditempuh dari
              Kota Pontianak
            </h4>
            <img className="mx-auto" src="/images/tentang_hero.svg" alt="/" />
          </div>
          <img className=" w-[500px] md:w-full mx-auto my-4" src="/images/peta.png" alt="/" />
        </div>
      </div>
    </section>
  );
}
