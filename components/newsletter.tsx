export default function Newsletter() {
  return (
    <section id="komoditas">
      <div className="bg-[#F1EAE2]">
        <div className="pb-12 md:pb-20 columns-1">
          <div className="mx-auto text-center pt-16 text-[#7A4631] columns-1 md:columns-2 px-12">
            <h1 className="font-extrabold text-3xl md:pt-4 md:text-[60px] font-[AbrilFatface]">Komoditas Unggulan</h1>
            <p className="pt-8 font-bold font-[JosefinSans] text-[14px] pl-8 text-center md:text-left">
              Desa Punggur Besar memiliki banyak macam Komoditas lokal yang dijual secara mentah. Komoditas ini dapat dibeli secara langsung dengan petani atau pekebun lokal dalam jumlah banyak dengan harga yang sangat terjangkau
            </p>
          </div>
          {/* menu */}
          {data.map((item, index) => (
            <div className="border-b-2 border-[#7A4631] py-8 text-[#7A4631] flex row justify-between">
              <h1 className="pt-[8px] ml-4 py-2 md:ml-16 ">
                <span className="align-top">{item.id}</span>
                <span className="font-bold ml-4 text-[20px] md:text-[48px] font-[AbrilFatFace]">{item.title}</span>
              </h1>
              <div className="flex mr-10 text-right row">
                <h1 className="font-[JosefinSans] font-bold text-[11px] pt-[15px] text-[#E8BB15] ml-2 sm:text-[15px] sm:pt-[12px] md:pt-[26px] md:text-[20px] lg:pt-[34px] lg:text-[25px]">
                  Hubungi Pekebun <span>|</span>
                </h1>
                <img className="ml-4 md:h-20 pt-[10px] sm:pt-[5px] md:pt-[20px] w-[32px] lg:pt-[16px] " src="images/chat.png" alt="/" />
              </div>
            </div>
          ))}
          {/* slider transition */}
          <div className="mx-auto text-center pt-16 text-[#7A4631] columns-1 md:columns-2" id="produk">
            <h1 className="font-extrabold text-3xl md:pt-4 md:text-[50px] font-[AbrilFatFace]">Produk Olahan</h1>
            <p className="pt-6 font-bold text-[14px] px-4 text-center md:text-left font-[JosefinSans]">
              Melalui kreativitas yang dipadukan dengan ketersediaan bahan mentah yang melimpah, desa Punggur Besar memiliki berbagai macam produk olahan yang juga melimpah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    id: 1,
    title: "Kelapa",
    image: "images/kelapa.png",
    link: "/kelapa",
  },
  {
    id: 2,
    title: "Pinang",
    image: "images/pinang.png",
    link: "/pinang",
  },
  {
    id: 3,
    title: "Durian",
    image: "images/durian.png",
    link: "/durian",
  },
  {
    id: 4,
    title: "Langsat",
    image: "images/langsat.png",
    link: "/langsat",
  },
  {
    id: 5,
    title: "Pisang",
    image: "images/pisang.png",
    link: "/pisang",
  },
  {
    id: 6,
    title: "Nanas",
    image: "images/nanas.png",
    link: "/nanas",
  },
  {
    id: 7,
    title: "Manggis",
    image: "images/manggis.png",
    link: "/manggis",
  },
];
