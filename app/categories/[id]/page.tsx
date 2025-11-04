import BestGear from "@/app/components/BestGear";
import Catergory from "@/app/components/Catergory";
import Wrapper from "@/app/components/Wrapper";
import { products } from "@/constant/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductCatergory({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productsAll = products.filter((p) => p.category === id);

  if (!productsAll) {
    return <>non</>;
  }

  return (
    <section>
      <Wrapper className="bg-black  text-white text-center py-6 font-bold tracking-[4px]">
        {id.toLocaleUpperCase()}
      </Wrapper>

      {productsAll.map((product, index) => (
        <Wrapper
          key={product.id}
          className={`my-15 lg:mb-40 flex-col flex justify-center  lg:gap-20 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <div className="flex my-5 w-full  lg:max-w-[540px] ">
            <div className="bg-cream  py-15 lg:py-20 mx-auto flex-1  flex justify-center ">
              <Image
                src={product.img}
                height={100}
                width={100}
                className="lg:w-40"
                alt="headphone"
              />
            </div>
          </div>
          <div className="flex">
            <div className="m-auto font-manrope text-center lg:text-start lg:text-st font-light flex flex-col justify-center gap-3 max-w-[379px]  ">
              {product.newProduct && (
                <p className=" tracking-[10px] text-[14px] text-orange ">
                  NEW PRODUCT
                </p>
              )}
              <h1 className="font-bold text-[36px] sm:text-[56px] leading-10 sm:leading-14">
                {product.title}
              </h1>
              <p className="text-sm text-[15px]">{product.description}</p>{" "}
              <Link href={`/productDetails/${product.id}`}>
                <button className="bg-orange p-3 w-40 m-auto lg:m-0 text-white font-semibold">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </Wrapper>
      ))}
      <Catergory />
      <BestGear />
    </section>
  );
}
