import React from "react";

interface CardProps {
  image: string;
  title: string;
  detail: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <section>
      <div className="card m-2 border-2 border-red-600  bg-[#F1EAE2] w-[300px] h-[450px] shadow-lg md:w-[500px]">
        <div className="top flex justify-center border-y-2 border-red-600">
          <img className="w-full h-[200px] object-cover p-2 md:w-[400px] " src={props.image} alt="" />
        </div>

        <div className="bottom flex flex-col justify-center items-start p-3">
          <div id="title" className="title font-bold my-1 text-[25px] font-[AbrilFatFace]">
            {props.title}
          </div>
          <div className="paragraph font-light my-1 text-[15px] font-[JosefinSans]">{props.detail}</div>
          <div className="flex justify-between items-center mx-auto mt-6">
            <div className="lihat text-[#E8BB15] font-[JosefinSans]">
              <a href={props.link}>lihat detail</a>
            </div>
            <button>
              <img className="w-[50px] ml-4" src="images/icon.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
