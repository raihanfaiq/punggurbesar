import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";

export default function Testimonials() {
  return (
    <div className="w-full py-16 px-4 bg-[#28400D]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="border-2 border-amber-400 w-[500px] md:w-full mx-auto my-4" src="/images/grey.png" alt="/" />
        <div className="grid grid-rows-4">
          <div className="relative w-[400px] overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0
          z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex items-center">
              <h1 className="text-lg text-white">
                {" "}
                <span className="text-[#82C75C]">01</span>
                <span className="ml-2 text-[#F1EAE2]">Pemeliharaan</span>
              </h1>
            </div>

            {/* arrow*/}

            {/* content 1 */}
            <div
              className="ml-6 bg-white overflow-hidden transition-all
          duration-500 max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui sit dolor voluptas distinctio temporibus ex nobis necessitatibus molestiae molestias nisi similique, aperiam quasi delectus iusto, iure a. Commodi, vero.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0
          z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex items-center">
              <h1 className="text-lg text-white">
                {" "}
                <span className="text-[#82C75C]">02</span>
                <span className="ml-2 text-[#F1EAE2]">Pemanenan</span>
              </h1>
            </div>

            {/* arrow*/}

            {/* content 2 */}
            <div
              className="ml-6 bg-white overflow-hidden transition-all
          duration-500 max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui sit dolor voluptas distinctio temporibus ex nobis necessitatibus molestiae molestias nisi similique, aperiam quasi delectus iusto, iure a. Commodi, vero.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0
          z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex items-center">
              <h1 className="text-lg text-white">
                {" "}
                <span className="text-[#82C75C]">03</span>
                <span className="ml-2 text-[#F1EAE2]">Ekstraksi</span>
              </h1>
            </div>

            {/* arrow*/}

            {/* content 3 */}
            <div
              className="ml-6 bg-white overflow-hidden transition-all
          duration-500 max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p className="text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui sit dolor voluptas distinctio temporibus ex nobis necessitatibus molestiae molestias nisi similique, aperiam quasi delectus iusto, iure a. Commodi, vero.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[400px] overflow-hidden">
            <input
              type="checkbox"
              className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0
          z-10 cursor-pointer"
            />
            <div className="h-12 w-full pl-5 flex items-center">
              <h1 className="text-lg text-white">
                {" "}
                <span className="text-[#82C75C]">04</span>
                <span className="ml-2 text-[#F1EAE2]">Distribusi</span>
              </h1>
            </div>

            {/* arrow*/}

            {/* content 4*/}
            <div
              className=" bg-white overflow-hidden transition-all
          duration-500 max-h-0 peer-checked:max-h-40"
            >
              <div className="p-4">
                <p className="text-black ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui sit dolor voluptas distinctio temporibus ex nobis necessitatibus molestiae molestias nisi similique, aperiam quasi delectus iusto, iure a. Commodi, vero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
