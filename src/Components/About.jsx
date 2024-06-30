import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".5"
      className="w-full py-20 px-20 bg-[#FDFFE2] rounded-tl-3xl rounded-tr-3xl text-black"
    >
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tighter">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell propucts, explain complex ideas, and hire great
        people.
      </h1>
      <div className=" flex w-full border-t-[1px] pt-10  border-[#192130] mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl">Our Aproach :</h1>
          <button className="flex gap-10 items-center uppercase px-10 py-5 bg-[#192130] mt-10 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-red-100"></div>
      </div>
    </div>
  );
}

export default About;
