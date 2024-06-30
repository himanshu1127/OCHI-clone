import React from "react";

function Cards() {
  return (
    <div className="flex gap-5 items-center justify-center px-20 w-full h-screen bg-[#1A2130]">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card w-full h-full bg-blue-400 rounded-lg"></div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card w-1/2 h-full bg-blue-100 rounded-lg"></div>
        <div className="card w-1/2 h-full bg-blue-900 rounded-lg"></div>
      </div>
    </div>
  );
}

export default Cards;
