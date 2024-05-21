import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px]  hidden md:flex py-4 border-b-gray-200 px-4">
      <div className="max-w-container w-full mx-auto h-10 px-4 hidden md:flex md:flex-row justify-between items-center">
        <div className="flex items-center gap-2  shadow-sm hover:shadow-md duration-300">
          <span className="font-bold font-titleFont w-6 text-center">2</span>
          <p className="text-lightText text-base">Two Months Warranty</p>
        </div>
        <div className="flex md:w-auto items-center gap-2  shadow-sm hover:shadow-md duration-300">
          <span className="text-xl text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base">Free deliveries</p>
        </div>
        <div className="flex md:w-auto items-center gap-2  shadow-sm hover:shadow-md duration-300">
          <span className="text-2xl text-center w-6">
            <CgRedo />
          </span>
          <p className="text-lightText text-base">Return policy in 7 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
