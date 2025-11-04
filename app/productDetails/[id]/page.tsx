import BestGear from "@/app/components/BestGear";
import Catergory from "@/app/components/Catergory";
import Others from "@/app/components/Others";
import ProductCard from "@/app/components/ProductCard";
import Wrapper from "@/app/components/Wrapper";
import { products } from "@/constant/product";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <>NO PRODUCT</>;
  }
  return (
    <div className="lg:px-10">
      <ProductCard product={product} />

      <Wrapper
        className={`my-15 lg:mb-40 flex-col justify-between flex  lg:flex-row   lg:gap-20 `}
      >
        <div className="flex lg:max-w-[650px]  ">
          <div className="  flex-1 flex-col flex ">
            <h2 className="font-bold">FEATURES</h2>
            {product.features?.map((f, i) => (
              <p className="mb-3 text-black/60" key={i}>
                {f}
              </p>
            ))}
          </div>
        </div>
        <div className="flex max-lg:mt-8 w-full">
          <div className=" font-manrope text-start font-light flex flex-col sm:flex-row lg:flex-col sm:justify-between lg:justify-start w-full gap-1 lg:max-w-[379px]  ">
            <h2 className="font-bold lg:mb-4">IN THE BOX</h2>
            <ul className="sm:mt-5 lg:mt-0 ">
              {product.box.map((item) => (
                <li key={item.item} className="lg:mb-3">
                  <span className="text-orange font-bold mr-2">
                    {item.times}
                  </span>
                  <span className="text-black/60">{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>

      <Wrapper className="min-h-screen w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-4 h-full">
            <div className="relative flex-1 overflow-hidden rounded-lg">
              <Image
                src={product.detailImg1}
                alt="Image 1"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="relative flex-1 overflow-hidden rounded-lg">
              <Image
                src={product.detailImg2}
                alt="Image 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-lg">
            <Image
              src={product.detailImg3}
              alt="Image 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Wrapper>
      <Others />
      <Catergory />
      <BestGear />
    </div>
  );
}
