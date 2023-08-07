"use client";
import { useRef, SyntheticEvent } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: SyntheticEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm("service_zdih4sg", "template_y5iv3qy", form.current, "QnZhCy7XOjGZ62fIB").then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          console.log("terkirim");
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <section>
      <div className="bg-[#F1EAE2] md:pb-8">
        <div className="mx-auto text-center pt-16 text-[#7A4631] columns-1 sm:columns-2 md:columns-2 ">
          <h1 className="font-extrabold text-3xl md:pt-4 md:text-[50px] md:mr-16 font-[AbrilFatFace]">Hubungi Kami</h1>
          <p className="pt-2 font-light text-[14px] px-4 text-center md:text-left md:ml-[70px] font-[JosefinSans]">
            Kami sangat terbuka untuk segala pertanyaan, saran, serta kesempatan untuk melakukan kolaborasi. Hubungi kami melalui form berikut atau kontak yang tersedia
          </p>
          <div className=" md:flex">
            <h1 className="font-extrabold pt-4 text-[20px] md:pt-4 md:text-[15px] md:ml-[85px] font-[AbrilFatFace]">Alamat:</h1>
            <p className="pt-2 font-light text-[14px] px-4 text-center md:text-left md:pt-4 font-[JosefinSans]">Jl. Perdana No.45, Desa Punggur Besar Kecamatan Sungai Kakap, Kabupaten Kubu Raya Provinsi Kalimantan Barat, Kode Post 78381</p>
          </div>
          <div className="md:flex">
            <h1 className="font-extrabold pt-4 text-[20px] md:pt-4 md:text-[15px] md:ml-[85px] font-[AbrilFatFace]">Email :</h1>
            <p className="pt-2 font-light text-[14px] px-4 text-center md:text-left md:pt-4 font-[JosefinSans]">punggurbesar@desakkr.id</p>
          </div>
          <div className="md:flex">
            <h1 className="font-extrabold pt-4 text-[20px] md:pt-4 md:text-[15px] md:ml-[85px] font-[AbrilFatFace]">WhatsApp :</h1>
            <a className="" target="_blank" href="https://wa.me/+6285251853685">
              <p className="font-light md:text-left md:pt-4 font-[JosefinSans]">+62 852-5185-3685</p>
            </a>
          </div>
          {/* form gmail */}
          <div className="flex justify-center items-center h-screen bg-[#F1EAE2] md:pt-10">
            <div className="border-2 border-red-700  p-8 shadow-md w-[400px] sm:w-96 ">
              <h2 className="text-2xl font-semibold mb-6 font-[AbrilFatFace]">Contact Form</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                  <label htmlFor="user_name" className="block font-medium mb-1 text-left  font-[JosefinSans]">
                    Nama Lengkap
                  </label>
                  <input type="text" id="user_name" name="to_name" className="w-full font-[JosefinSans] px-4 py-2 border rounded-lg border-red-700 focus:outline-none focus:ring focus:border-red-700" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="user_email" className="block font-medium mb-1 text-left font-[JosefinSans]">
                    Email
                  </label>
                  <input type="email" id="user_email" name="from_name" className="w-full font-[JosefinSans] px-4 py-2 border rounded-lg border-red-700  focus:outline-none focus:ring focus:border-red-700" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block font-medium mb-1 text-left font-[JosefinSans]">
                    Pesan
                  </label>
                  <textarea id="message" name="message" className="w-full font-[JosefinSans] px-4 py-2 border rounded-lg focus:outline-none border-red-700  focus:ring focus:border-red-700" required></textarea>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="bg-[#E8BB15] font-[JosefinSans] text-white py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-red-700">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="w-full h-[100px]" src="/images/rtl.png" alt="" />
      </div>
    </section>
  );
}
