import React, { useState } from "react";
import { MdClose } from "react-icons/md"; 
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [sidenav, setSidenav] = useState(false);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="min-w-[fit-content] lgl:w-[20%]  hidden md:block h-full pr-8 z-20 bg-white">
          <ShopSideNav />
        </div>
        <div className="flex flex-row absolute md:hidden z-40 top-80 left-3 text-lg font-bold text-black -mt-2 justify-center items-center cursor-pointer">
          <HiMenuAlt2
                onClick={() => setSidenav(!sidenav)}
                className=" md:hidden z-50 cursor-pointer w-8 h-8 text-orange-600"
          />
          <span className="ml-1">Filter</span>
        </div>
            {sidenav && (
              <div className="fixed top-0 left-0 w-full min-h-screen max-h-screen bg-gray-300  overflow-scroll text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[60%] h-full relative" 
                >
                  <div className="w-full h-full bg-white p-6">
                    <ul className="text-gray-200 flex flex-col gap-2">
                  <ShopSideNav  className="min-h-screen max-h-screen overflow-scroll"/>
                      
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose className="bg-orange-500" />
                  </span>
                </motion.div>
              </div>
            )}
        <div className="w-full mdl:w-[80%] lgl:w-[80%] h-full flex flex-col gap-10 md:mt-0 mt-6">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
