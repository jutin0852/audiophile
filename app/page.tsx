import React from "react";
import Wrapper from "./components/Wrapper";
import Hero from "./components/home/Hero";
import Product from "./components/product";
import Image from "next/image";
import { productsCategory } from "@/constant/product";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Wrapper className="bg-black px-0">
        <Hero />
      </Wrapper>
      <Wrapper className=" flex sm:gap-2 gap-21 flex-col justify-between mt-20 sm:flex-row ">
        {productsCategory.map((product) => (
          <Product
            key={product.id}
            image={product.img}
            title={product.title}
            link={product.categoryName}
          />
        ))}
      </Wrapper>

      <Wrapper className="bg-orange my-10 rounded-xl flex text-center flex-col px-0 md:px-0   justify-center items-center py-10 sm:justify-between mx-6 sm:flex-row md:mx-[165px] lg:px-[165px] gap-20 ">
        <Image
          src={"/speakers.png"}
          alt="speaker"
          width={200}
          height={200}
          className=" sm:w-70 sm:relative sm:-bottom-10"
        />
        <div className="sm:text-start max-w-70">
          <p className="text-4xl font-bold text-white  my-5">
            ZX9 <br /> SPEAKER
          </p>
          <p className="text-white text-xs">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href={"/productDetails/zx9speaker"}>
            <button className="bg-black p-3 w-40 my-3 text-white ">
              SEE PRODUCT
            </button>
          </Link>
        </div>
      </Wrapper>
      <Wrapper>
        <div
          className="sm:hidden h-90 w-full  bg-center bg-cover  rounded-xl bg-no-repeat flex  items-center"
          style={{ backgroundImage: "url('/speaker-mobile.png')" }}
        >
          <div className="ml-5">
            <p className="text-xl font-bold">ZX SPEAKER</p>
            <Link href={"/productDetails/zxSpeaker"}>
              <button className="border-black font-bold border-2 lg:border-none lg:bg-black p-3 w-40 my-3 text-black lg:text-white ">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div
          className="hidden sm:flex h-80 bg-cover bg-center rounded-xl bg-no-repeat items-center w-full "
          style={{ backgroundImage: "url('/speakerlg.png')" }}
        >
          <div className="ml-7">
            <p className="text-xl font-bold">ZX SPEAKER</p>
            <Link href={"/productDetails/zxSpeaker"}>
              <button className="border-black font-bold border-2 p-3 w-40 my-3 text-black ">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col my-10 gap-9 sm:flex-row">
        <Image
          src={"/earphones2.png"}
          width={200}
          height={200}
          alt="earphones"
          className="w-full  rounded-xl"
        />
        <div className="bg-cream w-full  rounded-xl p-5 flex justify-start lg:justify-center items-center">
          <div>
            <p className="font-black text-[14px] lg:text-xl">YX1 EARPHONES</p>
            <Link href={"/productDetails/yx1wirelessearphone"}>
              <button className="border-black font-bold border-2 lg:border-none lg:bg-black p-3 w-40 my-3 text-black lg:text-white ">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="flex flex-col  gap-4 lg:flex-row lg:justify-between">
        <div className="sm:w-full lg:order-1 sm:h-60 sm:overflow-hidden lg:h-full">
          <Image
            src={"/guy.png"}
            width={200}
            height={200}
            alt="guy"
            className="w-full h-full sm:object-cover sm:object-top"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div>
            <p className="font-bold mb-5 text-[28px] sm:text-3xl text-center lg:text-start">
              BRING YOU THE <br className="hidden sm:block" />{" "}
              <span className="text-orange">BEST</span> AUDIO GEAR
            </p>
            <p className="text-base lg:max-w-100 ">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
