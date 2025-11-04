import React from "react";
import { productsCategory } from "@/constant/product";
import Product from "./product";
import Wrapper from "./Wrapper";

export default function Catergory() {
  return (
    <Wrapper className=" flex sm:gap-2 gap-21 flex-col justify-between my-30 sm:flex-row ">
      {productsCategory.map((product) => (
        <Product
          key={product.id}
          image={product.img}
          title={product.title}
          link={product.categoryName}
        />
      ))}
    </Wrapper>
  );
}
