"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { Product, useCart } from "@/context/cartContext";
import { CartModal } from "./Cart";

export default function ProductCard({ product }: Product) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };
  return (
    <Wrapper
      key={product.id}
      className={`my-15 lg:mb-40 flex-col flex justify-between lg:flex-row  lg:gap-20 `}
    >
      <CartModal />

      <div className="flex my-5 w-full lg:max-w-[540px]">
        <div className="bg-cream py-15 lg:py-20 mx-auto flex-1 flex justify-center">
          <Image
            src={product.img}
            height={400}
            width={400}
            className="w-40 lg:w-60"
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
          <p className="text-sm text-[15px]">{product.description}</p>
          <p className="font-bold">${product.price}</p>
          <div className="flex gap-4">
            <div className="flex items-center bg-gray-100 px-4 py-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-gray-600 hover:text-orange"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-gray-600 hover:text-orange"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange text-white py-3 px-6 rounded hover:bg-orange transition-colors font-bold"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
