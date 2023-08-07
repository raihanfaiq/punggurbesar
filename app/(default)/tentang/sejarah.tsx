import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";

export default function Sejarah() {
  return (
    <section className="relative bg-[#28400D] pt-12 pl-8 pr-8">
      <div className="w-full py-16 ">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <img className=" w-[500px]  mx-auto my-4 " src="/images/sejarah.png" alt="/" />
          <div className="flex flex-col justify-center text-center md:ml-8 md:text-center">
            <h4 className="text-[#F1EAE2] font-[JosefinSans]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni cupiditate dolores, quam similique sapiente labore ipsam necessitatibus, maxime dignissimos odio natus error rerum ratione. Tenetur error quaerat dolore
              exercitationem?
            </h4>
          </div>
          <div className="flex flex-col justify-center text-center md:ml-8 md:text-center">
            <h4 className="text-[#F1EAE2] font-[JosefinSans]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magni cupiditate dolores, quam similique sapiente labore ipsam necessitatibus, maxime dignissimos odio natus error rerum ratione. Tenetur error quaerat dolore
              exercitationem?
            </h4>
            <div className="flex pt-12 mx-auto lg:pt-6">
              <h3 className="text-[#E8BB15] font-[JosefinSans] ">Pelajari Lebih Lanjut</h3>
              <img className="w-[50px] ml-4" src="/images/icon.png" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
