import VideoThumb from "@/public/images/hero-image.png";
import ModalVideo from "@/components/modal-video";
import { HeroImage } from "@/public/images/HeroImage";
import Image from "@/public/images/hero.jpg";

export default function Fasilitas() {
  return (
    <section className="relative bg-[#F1EAE2] pt-12 ">
      {/* pattern */}
      <img className="w-full h-[30px] " src="/images/Pattern.png" alt="" />
      {/* pattern */}
      <div className=" mx-auto text-center pt-16 text-[#7A4631] columns-1 pb-12">
        <h1 className="font-extrabold text-3xl md:pt-4 md:text-[50px]">Fasilitas Desa</h1>
        <p className="pt-6 font-bold text-[14px] px-4 text-center ">
          Desa Punggur Besar memiliki berbagai fasilitas umum yang menunjang kegiatan sehari hari <br /> masyarakat maupun pengunjung dari luar desa. Berikut adalah fasilitas umum yang <br /> ditawarkan desa Punggur Besar
        </p>
        <img className="px-6 pt-6 w-[500px] mx-auto my-4 md:w-[400px] lg:w-[700px]" src="/images/fasil.png" alt="/" />
        <div className="columns-1 px-12 md:columns-2 md:px-14">
          <p className="pt-6 font-bold text-[14px] text-left md:text-center ">
            Pasar Punggur Besar menjadi salah satu pusat masyarakat dalam beraktivitas karena menawarkan banyak kebutuhan pokok maupun sampingan. Pasar menjual berbagai bahan masakan seperti sayur, ikan, bumbu masakan, gas, air, dan produk
            pasar pada umumnya. Selain itu, pasar juga menyediakan perabotan rumah tangga yang lengkap dan variatif.
          </p>
          <p className="pt-6 font-bold text-[14px]  text-left md:text-center ">
            Pasar Punggur Besar dipisahkan menjadi dua bagian oleh sungai dan dihubungkan oleh sebuah jembatan. Jembatan ini menjadi salah satu tempat yang indah untuk dikunjungi ketika matahari terbit dan terbenam. Selain itu, sungainya
            juga terkadang digunakan untuk kegiatan balap sampan.
          </p>
        </div>
        <img className="pt-14 mx-auto w-[260px]" src="/images/carbtn.png" alt="" />
      </div>
      {/*Transisi*/}
      <div className="bg-[#E8BB15] py-8 ">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="font-bold text-[#28400D] text-[25px] ml-6 md:text-[35px] md:ml-20 lg:ml-[220px]">Sejarah Desa</h1>
          <img className="w-[1400px]  pt-3 " src="images/pattern2.png" alt="/" />
        </div>
      </div>
    </section>
  );
}
