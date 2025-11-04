import Image from "next/image";
import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { otherProducts } from "@/constant/product";

export default function Others() {
  return (
    <Wrapper className="my-20">
      <h1 className="text-center font-bold">YOU MAY ALSO LIKE</h1>

      <div className=" flex sm:gap-2 gap-10 flex-col justify-between  sm:flex-row ">
        {otherProducts.map((product, i) => (
          <div key={i} className=" text-center flex-1 ">
            <div className=" bg-cream my-2  py-20 text-center  rounded-xl">
              <Link href={`/categories/${product.id}`}>
                <Image
                  src={product.img}
                  height={100}
                  width={122.9}
                  quality={90}
                  alt="product"
                  className="h-30 w-22 m-auto -top-15 "
                />
              </Link>
            </div>
            <p className="font-bold my-3">{product.title}</p>
            <button className="bg-orange p-3 w-40 my-2 text-white m-auto lg:m-0 font-semibold">
              <Link href={`/categories/${product.id}`}>SEE PRODUCT</Link>
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
