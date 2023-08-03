export default function Card() {
  return (
    <section>
      <div className="card m-2 bg-white w-[200px] h-[320px] shadow-lg">
        <div className="top">
          <img className="w-[200px] h-[200px] object-cover p-2" src="/images/hero.png" alt="" />
        </div>
        <div
          className="bottom flex flex-col
        justify-center items-start p-3"
        >
          <div className="title font-bold my-1">Piring Pinang</div>
          <div className="paragraph text-xs font-light my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
          <div className="flex justify-between items-center  ">
            <div className="lihat">Lihat Detail</div>
            <button>
              <img className="w-[50px] ml-4" src="images/icon.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
