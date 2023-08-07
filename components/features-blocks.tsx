export default function FeaturesBlocks() {
  return (
    <div className="bg-[#F1EAE2]">
      <h1 className="text-[#28400D] text-[64px] font-bold font-[AbrilFatface] mx-auto text-center pt-16 md:text-left pb-8 md:ml-24">Nilai-Nilai Kami</h1>
      {/*Nilai 1*/}
      <div className="w-full py-2 ">
        <div className="max-w-[1240px]  columns-1 md:columns-2">
          <img className="w-[300px] ml-0 mx-auto my-4 md:w-[380px] sm:w-[400px]" src="/images/mimpi.png" alt="/" />
          <div className=" text-center lg:ml-[-200px] sm:ml-[50px] md:pt-6 md:text-left">
            <h1 className="text-[#28400D] font-bold text-[32px] sm:text-[40px] py-2 font-[AbrilFatface]">Memelihara Mimpi</h1>
            <h4 className="text-[#28400D] px-8 font-bold text-[16px] font-[JosefinSans] md:px-0 ">
              Bagi Pekebun, tanaman adalah mimpi yang perlu dirawat dan dijaga hingga membuahkan hasil yang nyata yang dilambangkan dengan tangan yang sedang merawat benih tanaman.
            </h4>
          </div>
        </div>
      </div>
      {/*Nilai 2*/}
      <div className="w-full py-2 ">
        <div className="max-w-[1240px]  columns-1 md:columns-2">
          <img className="w-[300px] ml-0 mx-auto my-4 md:w-[380px] sm:w-[400px]" src="/images/panen.png" alt="/" />
          <div className=" text-center lg:ml-[-200px] sm:ml-[50px] md:pt-6 md:text-left">
            <h1 className="text-[#28400D] font-bold text-[32px] sm:text-[40px] py-2 font-[AbrilFatface]">Memanen Hasil</h1>
            <h4 className="text-[#28400D] px-8 font-bold text-[16px] font-[JosefinSans] md:px-0 ">
              Konsistensi dalam merawat dan memelihara tanaman tentu akan membuahkan hasil setara dengan usaha yang dilambangkan dengan buah yang siap dipetik.
            </h4>
          </div>
        </div>
      </div>
      {/*Nilai 3*/}
      <div className="w-full py-2 pb-24">
        <div className="max-w-[1240px]  columns-1 md:columns-2">
          <img className="w-[300px] ml-0 mx-auto my-4 md:w-[380px] sm:w-[400px]" src="/images/makmur.png" alt="/" />
          <div className=" text-center lg:ml-[-200px] sm:ml-[50px] md:pt-6 md:text-left">
            <h1 className="text-[#28400D] font-bold text-[32px] sm:text-[40px] py-2 font-[AbrilFatface]">Menyebarkan Kemakmuran</h1>
            <h4 className="text-[#28400D] px-8 font-bold text-[16px] font-[JosefinSans] md:px-0 ">
              Hasil kebun menjadi sumber kemakmuran, baik bagi pekebun itu sendiri maupun konsumen yang dilambangkan dengan akar yang menyebar ke segala arah.
            </h4>
          </div>
        </div>
      </div>
      {/*Transisi*/}
      <div className="bg-[#E8BB15] py-8">
        <div className="grid grid-cols-2 gap-4">
          <h1 className="font-bold text-[#28400D] text-[27px] mt-8 md:mt-0 md:text-[45px] lg:text-[64px] ml-12 font-[AbrilFatface]">Proses Berkebun</h1>
          <img className="w-full h-[52px] mt-6" src="images/pattern2.png" alt="/" />
        </div>
      </div>
    </div>
  );
}
