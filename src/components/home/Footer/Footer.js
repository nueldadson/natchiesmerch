import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Natchies Merch" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%] ">
              Elevating fashion with anime, tech, and personalized flair. Join our vibrant community and embrace the fusion, igniting creativity and style—bringing AI to fashion
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/@natchiesmerch"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-orange-600 hover:scale-125 duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/nueldadson"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-orange-600 hover:scale-125 duration-300">
                  <FaGithub />
                </li>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-orange-600 hover:scale-125 duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100  hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-orange-600 hover:scale-125 duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Anime
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Tech
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Customised
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Recommended
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              AI Factor
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-orange-600 hover:font-bold decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Payment Options
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="text-center mb-4">
              Subscribe to receive latest fashion updates from us
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully!
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base placeholder:text-orange-500 placeholder:font-bold outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] py-4 px-6 rounded-full hover:bg-black hover:text-white duration-300 text-sm"
                >
                  Subscribe
                </button>
              </div>
            )}

            <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
