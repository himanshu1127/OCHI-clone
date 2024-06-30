import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-[#1A2130] pt-1"
    >
      <div className="landing-text mt-52 px-20 ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, i) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center justify-center">
                {i === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                    className="mr-[1vw] mt-[.5vw] w-[8vw] h-[6.3vw] rounded-md bg-[#83B4FF]  reletive"
                  ></motion.div>
                )}
                <h1 className=" text-[9vw] leading-[7.5vw] tracking-tighter font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, i) => {
          return <p className="text-md font-light leading-none ">{item}</p>;
        })}
        <div className="start flex items-center gap-5 ">
          <div className="px-5 py-2 border-[1px] border-zinc-300 font-light text-sm uppercase rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full border-[2px] border-zinc-500 flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
