import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";
import EventItem from "./eventItem";
import { useState } from "react";

const sampleEvents = [
  {
    title: "Pemeliharaan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl efficitur, ultricies erat sit amet, condimentum lacus. Vestibulum vehicula magna vel ligula auctor, nec gravida nunc luctus. In",
  },
  {
    title: "Pemanenan",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl efficitur, ultricies erat sit amet, condimentum lacus. Vestibulum vehicula magna vel ligula auctor, nec gravida nunc luctus. In",
  },
  {
    title: "Ekstraksi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl efficitur, ultricies erat sit amet, condimentum lacus. Vestibulum vehicula magna vel ligula auctor, nec gravida nunc luctus. In",
  },
  {
    title: "Distribusi",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl efficitur, ultricies erat sit amet, condimentum lacus. Vestibulum vehicula magna vel ligula auctor, nec gravida nunc luctus. In",
  },
];

export default function Testimonials() {
  const [activeEvent, setActiveEvent] = useState(1);
  return (
    <div className="w-full py-16 px-4 bg-[#28400D]">
      <div className="max-w-[1240px] ml-10 grid md:grid-cols-2">
        <div className="w-3/4 ">
          {sampleEvents.map((event, index) => {
            return <EventItem key={index} index={index + 1} event={event} activeEvent={activeEvent} setActiveEvent={setActiveEvent} />;
          })}
        </div>
        <img className="border-2 border-amber-400 w-[500px] md:w-full mx-auto my-4" src="/images/sawah.png" alt="/" />
      </div>
    </div>
  );
}
