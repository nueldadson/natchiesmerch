import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import { bestOffers } from "../../../constants";


const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-2 max-sm:grid-cols-2 max-[530px]:grid-cols-2 max-md:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {bestOffers.map((product) => (
          <div key={product._id} className="px-1">
            <Product
              _id={product._id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              color={product.color}
              badge={product.badge}
              des={product.des}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
