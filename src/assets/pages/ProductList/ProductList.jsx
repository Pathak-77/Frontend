import React, { useEffect, useMemo, useState } from "react";
import FilterIcon from "../../../components/icon/FilterIcon";
import content from "../../../data/content.json"
import Categories from "../../../components/Filters/Categories"
import ColorsFilter from "../../../components/Filters/ColorsFilter"
import PriceFilter from "../../../components/Filters/PriceFilter"
import SizeFilter from "../../../components/Filters/SizeFilter"
import ProductCard from "./ProductCard";

const categories = content.categories;
const ProductList = ({CategoryType}) => {
  
  const categoryContent = useMemo(() => {
    categories?.find((category)=> category.code === CategoryType);
  }, [CategoryType])
  
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[10px] border rounded-lg m-[20px]">


          {/* Filter section for the product */}

          <div className="flex justify-between ">
            <p className="text-[16px] text-gray-600">Filter</p>
            <FilterIcon />
          </div>

          {/* Product listing */}
          <div>
            <p className="text-[16px] text-black mt-5">Categories</p>
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>
          {/* Price */}
          <PriceFilter />
          <hr></hr>
          {/* Colors */}
          <ColorsFilter colors={categoryContent?.meta_data?.colors} />
          <hr></hr>
          {/* Sizes */}
          <SizeFilter sizes={categoryContent?.meta_data?.sizes} />
        </div>

        <div className="p-[15px]">
          <p className="text-black text-lg">{/*todo*/}</p>
          {/* Products */}
          <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
            {/*products?.map((item, index) => (
              <ProductCard
                key={item?.id + "_" + index}
                {...item}
                title={item?.name}
              />
            ))*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
