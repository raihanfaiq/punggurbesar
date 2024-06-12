"use client";
import Card from "./card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import cardContent from "./cardcontent";
import "swiper/css";

export default function Carousel() {
  const scrollLeft = () => {
    const content = document.getElementById("content") as HTMLDivElement | null;
    if (content) {
      content.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    const content = document.getElementById("content") as HTMLDivElement | null;
    if (content) {
      content.scrollLeft += 500;
    }
  };

  return (
    <section className="relative">
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scrollbar-hide">
        <div className="flex">
          {cardContent.map((content, index) => (
            <Card
              key={index} // unique key
              title={content.title}
              image={content.image}
              detail={content.detail}
              link={content.link}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6 pb-6">
        <button onClick={scrollLeft} className="p-2 m-2 border-2 border-black rounded-full">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 border-2 border-black rounded-full">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
