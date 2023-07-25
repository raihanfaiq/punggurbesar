import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";

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
      <div className="pt-6 pl-8">
        {/* Section header */}
        <div className="bg-#[#28400D] relative max-w-md sm:max-w-xl">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="relative w-full pb-4 space-y-8 ml-17 pt-20 md:ml-10 lg:ml-20">
              <h1 className="text-[36px] font-bold leading-none text-white ">
                Memelihara, Memanen, <br /> & Menyebarkan
              </h1>
              <p className="text-[16px] text-gray-300 w-11/12 md:w-12/12  ">
                Punggur Besar merupakan Desa Perkebunan dengan hasil bumi yang melimpah yang dimanfaatkan secara mentah maupun dijadikan sebagai bahan dasar pembuatan berbagai macam olahan
              </p>
              <p className="text-[#E8BB15]">JELAJAHI DESA</p>
            </div>
            <div className="w-full h-80 border-l mt-4 sm:mt-7 md:mt-20 md:ml-20">
              {/* Hero image */}
              {/* <HeroImage/> */}
              <img className="md:h-full md:w-80 " src="/images/hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
