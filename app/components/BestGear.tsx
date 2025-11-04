import Image from "next/image";
import React from "react";
import Wrapper from "./Wrapper";

export default function BestGear() {
  return (
    <Wrapper className="flex flex-col  gap-4 lg:flex-row lg:justify-between">
      <div className="sm:w-full lg:order-1 sm:h-60 sm:overflow-hidden lg:h-full">
        <Image
          src={"/guy.png"}
          width={800}
          height={600}
          quality={90}
          priority
          className="object-cover object-bottom-right w-full h-64 rounded-xl lg:h-120" alt=""
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
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
