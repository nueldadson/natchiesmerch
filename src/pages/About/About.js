import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { about } from "../../assets/images/index";
import Image from "../../components/designLayouts/Image";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <div className="max-w-[600px] mb-2 bg-red-500">
          <Image className="w-full h-full" imgSrc={about}/>
        </div>
        <h1 className="max-w-[600px] text-base text-lightText mb-6">
          <span className="text-primeColor font-semibold text-xl">Natchies Merch</span>{" "}
          is an innovative e-commerce platform that leverages cutting-edge AI technology 
          to revolutionize the intersection of anime culture, technology, and personalized fashion. In a rapidly 
          evolving digital landscape, Natchies Merch aims to redefine the online shopping experience by offering a 
          dynamic platform where users can seamlessly navigate through a curated selection of merchandise 
          tailored to their individual tastes and preferences. With a keen focus on user engagement, community 
          building, and technological innovation, Natchies Merch endeavors to become the ultimate destination for 
          anime and tech enthusiasts seeking unique and expressive fashion statements.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-xl">The purpose of Natchies Merch</span>{" "}
          extends beyond mere retail; it embodies a vision to empower 
          individuals to express their identity and passions through fashion. By harnessing the power of AI 
          technology, Natchies Merch aims to provide users with a personalized and immersive shopping 
          experience that transcends traditional boundaries. Through AI-driven recommendations, customization 
          options, and community engagement initiatives, Natchies Merch endeavors to foster a vibrant ecosystem 
          where creativity thrives, connections are forged, and self-expression reigns supreme. Ultimately, Natchies 
          Merch seeks to democratize fashion by offering a platform that celebrates diversity, innovation, and 
          individuality, thereby bringing AI to the forefront of the fashion industry
        </h1><br/>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black hover:text-orange-600 hover:font-extrabold duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
