import React from "react";
import { useState } from "react";
import Link from "next/link";

interface Props {
  event: any;
  index: number;
  activeEvent: number;
  setActiveEvent: React.Dispatch<React.SetStateAction<number>>;
}

export default function eventItem({ event, index, activeEvent, setActiveEvent }: Props) {
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      className={`w-full h-fit flex space-x-8 group ${index == activeEvent ? "overflow-visible" : "overflow-hidden"}`}
      onMouseEnter={() => {
        if (activeEvent != index) {
          setActiveEvent(index);
        }
      }}
      id="event"
    >
      <div className="relative w-16 h-16 flex-2">
        <p className="absolute font-[AbrilFatface]  text-[32px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[#82C75C] z-10">0{index}</p>
      </div>
      <div className="flex flex-col items-start justify-start flex-1 text-white">
        <h3 className={`font-bold font-[AbrilFatFace] text-4xl 2xl:text-5xl ${index == activeEvent ? "translate-y-0" : "-translate-y-2"} group-hover:translate-y-0 transition duration-300`}>{event["title"]}</h3>
        <div className={`${index == activeEvent ? "h-52 opacity-100" : "h-0 opacity-0"} group-hover:h-52 group-hover:opacity-100 transition-all duration-300 ease-out`}>
          <p className="mt-4 text-md 2xl:text-lg font-[JosefinSans] text-[#82C75C]">{event["description"]}</p>
        </div>
      </div>
    </div>
  );
}
