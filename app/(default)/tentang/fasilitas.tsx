import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";

export default function Fasilitas() {
  return (
    <section className="relative bg-[#F1EAE2] pt-8 ">
      {/* pattern */}
      <img className="w-full h-[50px] " src="/images/Pattern.png" alt="" />
      {/* pattern */}
      <div className=" mx-auto text-center pt-20 text-[#7A4631] columns-1 pb-12">
        <h1 className="font-extrabold text-3xl md:pt-4 md:text-[50px] font-[AbrilFatFace]">Fasilitas Desa</h1>
        <p className="pt-6 font-bold text-[14px] font-[JosefinSans] px-4 text-center ">
          Desa Punggur Besar memiliki berbagai fasilitas umum yang menunjang kegiatan sehari hari <br /> masyarakat maupun pengunjung dari luar desa. Berikut adalah fasilitas umum yang ditawarkan desa Punggur Besar
        </p>
        <img className="px-6 pt-6 w-full h-full mx-auto my-4 md:w-[400px] lg:w-[700px]" src="/images/desapunggur.png" alt="/" />
        <div className="px-12 columns-1 md:columns-2 md:px-14">
          <p className="pt-6 font-bold text-[14px] font-[JosefinSans] text-left">
            Pasar Punggur Besar menjadi salah satu pusat masyarakat dalam beraktivitas karena menawarkan banyak kebutuhan pokok maupun sampingan. Pasar menjual berbagai bahan masakan seperti sayur, ikan, bumbu masakan, gas, air, dan produk
            pasar pada umumnya. Selain itu, pasar juga menyediakan perabotan rumah tangga yang lengkap dan variatif.
          </p>
          <p className="pt-6 font-bold text-[14px] font-[JosefinSans]  text-left">
            Pasar Punggur Besar dipisahkan menjadi dua bagian oleh sungai dan dihubungkan oleh sebuah jembatan. Jembatan ini menjadi salah satu tempat yang indah untuk dikunjungi ketika matahari terbit dan terbenam. Selain itu, sungainya
            juga terkadang digunakan untuk kegiatan balap sampan.
          </p>
        </div>
        <img className="pt-14 mx-auto w-[260px]" src="/images/carbtn.png" alt="" />
      </div>
      {/*Transisi*/}
      <div className="bg-[#E8BB15] py-8 pl-20">
        <div className="grid grid-cols-2">
          <h1 className="font-bold text-[#28400D] text-[25px] md:text-[35px] font-[AbrilFatFace]">Sejarah Desa</h1>
          <img className="h-[52px]" src="images/pattern2.png" alt="/" />
        </div>
      </div>
    </section>
  );
}
