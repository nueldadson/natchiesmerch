import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-primeColor opacity-70 w-[52px] h-[20px] text-white flex justify-center items-center text-xs hover:bg-black duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
