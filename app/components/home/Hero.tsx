import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      <div
        className="h-96 sm:h-182 bg-cover bg-center flex justify-center items-center lg:hidden"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-white font-manrope text-center font-light flex flex-col gap-5 max-w-[379px]  ">
          <p className=" tracking-[10px] text-[14px] ">NEW PRODUCT</p>
          <h1 className="font-bold text-[36px] sm:text-[56px] leading-10 sm:leading-14">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-sm text-[15px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-orange p-3 w-40 m-auto">See Product</button>
        </div>
      </div>
      <section className="flex gap-10 justify-between pb-20 max-lg:hidden">
        <div className=" flex justify-center items-center max-lg:hidden ">
          <div className="text-white font-manrope text-start font-light flex flex-col gap-5 max-w-[379px]  ">
            <p className=" tracking-[10px] text-[14px] ">NEW PRODUCT</p>
            <h1 className="font-bold text-[36px] sm:text-[50px] leading-10 sm:leading-14">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="text-sm text-[15px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="bg-orange p-3 w-40 ">See Product</button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black pointer-events-none z-10"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="hero"
                className="w-[500px] h-full object-contain rounded-[50%] scale-110"
                style={{
                  maskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)",
                }}
                width={700}
                height={700}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
