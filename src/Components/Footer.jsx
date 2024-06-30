import React from "react";

function Footer() {
  return (
    <div className="flex w-full h-screen bg-zinc-900 py-20 px-20">
      <div className="footer-right w-1/2 h-full flex flex-col">
        <h1 className="text-[6vw] -mb-10 font-semibold">EYE-</h1>
        <h1 className="text-[6vw] -mb-10 font-semibold">OPENING</h1>
      </div>
      <div className="footer-left w-1/2 h-full flex flex-col">
        <h1 className="text-[6vw]  font-semibold">PRESENTATION</h1>
      </div>
    </div>
  );
}

export default Footer;
