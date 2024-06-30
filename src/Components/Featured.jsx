import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-10  rounded-tl-3xl rounded-tr-3xl bg-[#1A2130]">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[4vw] font-light">Featured Projects</h1>
      </div>
      <div className="px-20 w-full">
        <div className="cards flex gap-10 w-full mt-10 ">
          <div className="card w-1/2 h-[75vh]">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="card w-1/2 h-[75vh]">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 w-full">
        <div className="cards flex gap-10 w-full mt-10 ">
          <div className="card relative w-1/2 h-[75vh]">
            {/* <h1 className="absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
              FYDE
            </h1> */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className=" relative card w-1/2 h-[75vh]">
            {/* <h1 className="absolute right-full text-[#CDEA68] translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tighter">
              VICE
            </h1> */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
